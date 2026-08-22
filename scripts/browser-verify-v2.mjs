import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { basename, resolve } from "node:path";
import { chromium } from "playwright-core";

const baseUrl = process.env.PROOF_SITE_URL ?? "http://127.0.0.1:4173";
const root = resolve(import.meta.dirname, "..");
const evidenceDir = resolve(root, "evidence", "v2-preview");
const executableCandidates = [
  process.env.CHROME_PATH,
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
].filter(Boolean);

const executablePath = executableCandidates.find((candidate) => existsSync(candidate));
if (!executablePath) throw new Error("No supported Chromium browser found for V2 browser verification.");

mkdirSync(evidenceDir, { recursive: true });

const routes = [
  ["home", "/"],
  ["ecosystem", "/ecosystem/"],
  ["products", "/products/"],
  ["principles", "/principles/"]
];

const devices = [
  ["desktop", { width: 1440, height: 1000 }],
  ["tablet", { width: 834, height: 1112 }],
  ["phone", { width: 390, height: 844 }]
];

const expectedProducts = [
  "Proof Deploy",
  "Proof Room",
  "Proof Cloud",
  "Proof Core",
  "Proof Base",
  "Proof Control",
  "Proof Cloud App",
  "Proof Quote",
  "Proof Flow",
  "Proof OS"
];

const failures = [];
const results = [];
const browser = await chromium.launch({ executablePath, headless: true, args: ["--no-sandbox", "--disable-dev-shm-usage"] });

try {
  for (const [deviceName, viewport] of devices) {
    const context = await browser.newContext({ viewport, reducedMotion: "reduce", colorScheme: "light" });
    const page = await context.newPage();
    const browserErrors = [];
    const externalRequests = [];

    page.on("console", (message) => {
      if (message.type() === "error") browserErrors.push(`console: ${message.text()}`);
    });
    page.on("pageerror", (error) => browserErrors.push(`pageerror: ${error.message}`));
    page.on("requestfailed", (request) => browserErrors.push(`requestfailed: ${request.url()}`));
    page.on("request", (request) => {
      const url = new URL(request.url());
      if (url.origin !== new URL(baseUrl).origin) externalRequests.push(request.url());
    });

    for (const [routeName, path] of routes) {
      const response = await page.goto(`${baseUrl}${path}`, { waitUntil: "networkidle" });
      const audit = await page.evaluate(() => {
        const h1 = document.querySelector("h1");
        const h1Rect = h1?.getBoundingClientRect();
        const brands = [...document.querySelectorAll(".owner-brand-lockup")].map((element) => element.getAttribute("data-owner-brand") ?? "");

        const measureInkRatio = (image) => {
          if (!(image instanceof HTMLImageElement) || !image.complete || image.naturalWidth < 1) return 0;
          const canvas = document.createElement("canvas");
          canvas.width = 48;
          canvas.height = 48;
          const context = canvas.getContext("2d", { willReadFrequently: true });
          if (!context) return 0;
          context.fillStyle = "#ffffff";
          context.fillRect(0, 0, 48, 48);
          context.drawImage(image, 0, 0, 48, 48);
          const pixels = context.getImageData(0, 0, 48, 48).data;
          let ink = 0;
          for (let index = 0; index < pixels.length; index += 4) {
            const red = pixels[index];
            const green = pixels[index + 1];
            const blue = pixels[index + 2];
            if (red < 225 || green < 225 || blue < 225) ink += 1;
          }
          return ink / (48 * 48);
        };

        const images = [...document.querySelectorAll(".owner-brand-lockup__image")].map((element) => {
          const rect = element.getBoundingClientRect();
          const styles = getComputedStyle(element);
          return {
            alt: element.getAttribute("alt") ?? "",
            src: element.getAttribute("src") ?? "",
            asset: element.getAttribute("data-asset") ?? "",
            naturalWidth: element instanceof HTMLImageElement ? element.naturalWidth : 0,
            naturalHeight: element instanceof HTMLImageElement ? element.naturalHeight : 0,
            renderWidth: rect.width,
            renderHeight: rect.height,
            opacity: Number.parseFloat(styles.opacity || "1"),
            visibility: styles.visibility,
            inkRatio: measureInkRatio(element)
          };
        });

        const ecosystemHero = document.querySelector(".owner-ecosystem-hero img");
        return {
          title: document.title,
          h1Count: document.querySelectorAll("h1").length,
          h1InsideViewport: !h1Rect || (h1Rect.left >= -1 && h1Rect.right <= window.innerWidth + 1),
          hasMain: Boolean(document.querySelector("main")),
          hasPrimaryNav: Boolean(document.querySelector('nav[aria-label="Primary navigation"]')),
          hasFooter: Boolean(document.querySelector("footer")),
          hasForm: Boolean(document.querySelector("form")),
          ownerBrandCount: brands.length,
          ownerBrands: brands,
          ownerImages: images,
          generatedProofMarkCount: document.querySelectorAll(".proof-mark").length,
          fallbackProductLabelCount: document.querySelectorAll(".owner-brand-lockup__product").length,
          horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
          reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
          minimumPrimaryTarget: Math.min(...[...document.querySelectorAll(".primary-nav a")].map((element) => element.getBoundingClientRect().height)),
          ecosystemHero: ecosystemHero instanceof HTMLImageElement ? {
            src: ecosystemHero.getAttribute("src") ?? "",
            naturalWidth: ecosystemHero.naturalWidth,
            naturalHeight: ecosystemHero.naturalHeight
          } : null
        };
      });

      const prefix = `${deviceName}/${routeName}`;
      if (!response?.ok()) failures.push(`${prefix}: HTTP ${response?.status() ?? "no response"}`);
      if (audit.h1Count !== 1) failures.push(`${prefix}: expected one h1, found ${audit.h1Count}`);
      if (!audit.h1InsideViewport) failures.push(`${prefix}: h1 clips outside viewport`);
      if (!audit.hasMain || !audit.hasPrimaryNav || !audit.hasFooter) failures.push(`${prefix}: required landmarks missing`);
      if (audit.hasForm) failures.push(`${prefix}: unexpected form found`);
      if (audit.ownerBrandCount < 2) failures.push(`${prefix}: owner Proof brand assets are missing`);
      if (audit.generatedProofMarkCount !== 0) failures.push(`${prefix}: generated fake Proof SVG mark survived (${audit.generatedProofMarkCount})`);
      if (audit.fallbackProductLabelCount !== 0) failures.push(`${prefix}: fallback typed product label survived (${audit.fallbackProductLabelCount})`);
      if (audit.horizontalOverflow) failures.push(`${prefix}: horizontal overflow detected`);
      if (!audit.reducedMotion) failures.push(`${prefix}: reduced-motion preference not applied`);
      if (deviceName === "phone" && audit.minimumPrimaryTarget < 44) failures.push(`${prefix}: primary nav target below 44px`);
      for (const image of audit.ownerImages) {
        if (image.naturalWidth < 100 || image.naturalHeight < 100) failures.push(`${prefix}: owner logo failed to load (${image.alt})`);
        if (image.renderWidth < 40 || image.renderHeight < 40 || image.opacity < 0.95 || image.visibility !== "visible") {
          failures.push(`${prefix}: owner logo not visibly rendered (${image.alt})`);
        }
      }

      if (routeName === "products") {
        const stageCount = await page.locator(".proof-stage-card").count();
        if (stageCount !== 10) failures.push(`${prefix}: expected 10 product stages, found ${stageCount}`);
        for (const product of expectedProducts) {
          if (!audit.ownerBrands.includes(product)) failures.push(`${prefix}: official ${product} logo not mounted`);
        }
        const productAssets = audit.ownerImages.filter((image) => image.asset.includes("/brand/display/"));
        if (new Set(productAssets.map((image) => image.asset)).size < 10) failures.push(`${prefix}: complete 10-product display family not present`);
        for (const image of productAssets) {
          if (image.inkRatio < 0.08) failures.push(`${prefix}: product logo rendered visually blank (${image.alt}, ink ${image.inkRatio.toFixed(3)})`);
        }
      }

      if (routeName === "home") {
        if (!audit.ecosystemHero) failures.push(`${prefix}: approved ecosystem hero not mounted`);
        else {
          if (!audit.ecosystemHero.src.includes("/brand/hero/proof-ecosystem-hero.png")) failures.push(`${prefix}: wrong ecosystem hero asset`);
          if (audit.ecosystemHero.naturalWidth < 500 || audit.ecosystemHero.naturalHeight < 300) failures.push(`${prefix}: ecosystem hero failed to load`);
        }
      }

      const screenshot = resolve(evidenceDir, `${routeName}-${deviceName}.png`);
      await page.screenshot({ path: screenshot, fullPage: true });
      results.push({ route: path, device: deviceName, viewport, status: response?.status(), screenshot: `evidence/v2-preview/${routeName}-${deviceName}.png`, ...audit });
    }

    if (browserErrors.length) failures.push(`${deviceName}: browser errors: ${browserErrors.join(" | ")}`);
    if (externalRequests.length) failures.push(`${deviceName}: external requests: ${[...new Set(externalRequests)].join(", ")}`);
    await context.close();
  }

  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: "reduce", colorScheme: "light" });
  const page = await context.newPage();
  const response = await page.goto(`${baseUrl}/404.html`, { waitUntil: "networkidle" });
  const notFound = await page.evaluate(() => ({
    heading: document.querySelector("h1")?.textContent?.trim(),
    noindex: document.querySelector('meta[name="robots"]')?.getAttribute("content"),
    ownerBrandCount: document.querySelectorAll(".owner-brand-lockup").length,
    generatedProofMarkCount: document.querySelectorAll(".proof-mark").length,
    horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1
  }));
  if (!response?.ok()) failures.push(`desktop/404: HTTP ${response?.status() ?? "no response"}`);
  if (notFound.heading !== "This Proof page does not exist." || notFound.noindex !== "noindex") failures.push("desktop/404: content/noindex mismatch");
  if (notFound.ownerBrandCount < 2 || notFound.generatedProofMarkCount !== 0 || notFound.horizontalOverflow) failures.push("desktop/404: owner brand or responsive layout failed");
  await page.screenshot({ path: resolve(evidenceDir, "404-desktop.png"), fullPage: true });
  await context.close();
} finally {
  await browser.close();
}

const summary = {
  generatedAt: new Date().toISOString(),
  target: baseUrl,
  browser: basename(executablePath),
  routes: routes.length,
  devices: devices.map(([name, viewport]) => ({ name, viewport })),
  screenshots: results.length + 1,
  failures,
  results
};
writeFileSync(resolve(evidenceDir, "browser-verification.json"), `${JSON.stringify(summary, null, 2)}\n`);

if (failures.length) {
  console.error(`V2 browser verification failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`V2 browser verification passed: visible complete Proof family, approved ecosystem hero, zero generated/fallback marks, ${routes.length} routes × ${devices.length} viewports plus 404, no overflow, clean browser.`);
