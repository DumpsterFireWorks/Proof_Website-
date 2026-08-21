import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { basename, resolve } from "node:path";
import { chromium } from "playwright-core";

const baseUrl = process.env.PROOF_SITE_URL ?? "http://127.0.0.1:5173";
const root = resolve(import.meta.dirname, "..");
const evidenceGate = "w1-5";
const evidenceDir = resolve(root, "evidence", evidenceGate);
const executableCandidates = [
  process.env.CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
].filter(Boolean);

const executablePath = executableCandidates.find((candidate) => existsSync(candidate));
if (!executablePath) {
  throw new Error("No supported local Chromium browser was found. Set CHROME_PATH to run browser verification.");
}

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

const failures = [];
const results = [];
const browser = await chromium.launch({
  executablePath,
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"]
});

try {
  for (const [deviceName, viewport] of devices) {
    const context = await browser.newContext({
      viewport,
      reducedMotion: "reduce",
      colorScheme: "light"
    });
    const page = await context.newPage();
    const browserErrors = [];
    const externalRequests = [];

    page.on("console", (message) => {
      if (message.type() === "error") browserErrors.push(`console: ${message.text()}`);
    });
    page.on("pageerror", (error) => browserErrors.push(`pageerror: ${error.message}`));
    page.on("requestfailed", (request) => browserErrors.push(`requestfailed: ${request.url()}`));
    page.on("request", (request) => {
      const requestUrl = new URL(request.url());
      if (requestUrl.origin !== new URL(baseUrl).origin) externalRequests.push(request.url());
    });

    for (const [routeName, path] of routes) {
      const response = await page.goto(`${baseUrl}${path}`, { waitUntil: "networkidle" });
      const audit = await page.evaluate(() => {
        const headingIds = [...document.querySelectorAll("[id]")].map((element) => element.id);
        const duplicateIds = headingIds.filter((id, index) => headingIds.indexOf(id) !== index);
        return {
          title: document.title,
          h1Count: document.querySelectorAll("h1").length,
          hasMain: Boolean(document.querySelector("main")),
          hasPrimaryNav: Boolean(document.querySelector('nav[aria-label="Primary navigation"]')),
          hasFooter: Boolean(document.querySelector("footer")),
          hasForm: Boolean(document.querySelector("form")),
          proofMarkCount: document.querySelectorAll(".proof-mark").length,
          horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
          duplicateIds,
          bodyTextLength: document.body.innerText.trim().length,
          reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
          minimumPrimaryTarget: Math.min(...[...document.querySelectorAll(".primary-nav a")].map((element) => element.getBoundingClientRect().height))
        };
      });

      const prefix = `${deviceName}/${routeName}`;
      if (!response?.ok()) failures.push(`${prefix}: HTTP ${response?.status() ?? "no response"}`);
      if (audit.h1Count !== 1) failures.push(`${prefix}: expected one h1, found ${audit.h1Count}`);
      if (!audit.hasMain || !audit.hasPrimaryNav || !audit.hasFooter) failures.push(`${prefix}: required landmarks are missing`);
      if (audit.hasForm) failures.push(`${prefix}: unexpected form found`);
      if (audit.proofMarkCount < 2) failures.push(`${prefix}: shared Proof family mark is missing`);
      if (audit.horizontalOverflow) failures.push(`${prefix}: horizontal overflow detected`);
      if (audit.duplicateIds.length) failures.push(`${prefix}: duplicate IDs (${audit.duplicateIds.join(", ")})`);
      if (audit.bodyTextLength < 500) failures.push(`${prefix}: page content is unexpectedly sparse`);
      if (!audit.reducedMotion) failures.push(`${prefix}: reduced-motion preference was not applied`);
      if (deviceName === "phone" && audit.minimumPrimaryTarget < 44) failures.push(`${prefix}: primary navigation target is below 44px`);

      if (routeName === "home") {
        const architectureText = await page.locator(".signal-path--flagship").innerText();
        for (const label of ["Source", "Deploy", "Cloud", "Core"]) {
          if (!architectureText.includes(label)) failures.push(`${prefix}: flagship architecture path is missing ${label}`);
        }
      }

      if (routeName === "products") {
        const stageCount = await page.locator(".proof-stage-card").count();
        if (stageCount !== 10) failures.push(`${prefix}: expected 10 Proof Stage product cards, found ${stageCount}`);
      }

      const screenshot = resolve(evidenceDir, `${routeName}-${deviceName}.png`);
      await page.screenshot({ path: screenshot, fullPage: true });
      results.push({ route: path, device: deviceName, viewport, status: response?.status(), title: audit.title, screenshot: `evidence/${evidenceGate}/${routeName}-${deviceName}.png`, ...audit });
    }

    if (deviceName === "desktop") {
      await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
      await page.keyboard.press("Tab");
      const focusAudit = await page.evaluate(() => {
        const element = document.activeElement;
        if (!(element instanceof HTMLElement)) return { className: "", outlineStyle: "none", outlineWidth: "0px" };
        const styles = getComputedStyle(element);
        return { className: element.className, outlineStyle: styles.outlineStyle, outlineWidth: styles.outlineWidth };
      });
      if (!focusAudit.className.includes("skip-link") || focusAudit.outlineStyle === "none" || focusAudit.outlineWidth === "0px") {
        failures.push("desktop/home: skip-link focus is not visibly exposed");
      }

      await page.locator('a[href="/ecosystem/"]').first().click();
      await page.waitForURL(`${baseUrl}/ecosystem/`);
      if (page.url() !== `${baseUrl}/ecosystem/`) failures.push("desktop/home: primary ecosystem link did not resolve");

      const notFoundResponse = await page.goto(`${baseUrl}/404.html`, { waitUntil: "networkidle" });
      const notFoundAudit = await page.evaluate(() => ({
        title: document.title,
        heading: document.querySelector("h1")?.textContent?.trim(),
        noindex: document.querySelector('meta[name="robots"]')?.getAttribute("content"),
        proofMarkCount: document.querySelectorAll(".proof-mark").length,
        horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1
      }));
      if (!notFoundResponse?.ok()) failures.push(`desktop/404: HTTP ${notFoundResponse?.status() ?? "no response"}`);
      if (notFoundAudit.heading !== "This Proof page does not exist." || notFoundAudit.noindex !== "noindex") {
        failures.push("desktop/404: clean not-found content or noindex metadata is missing");
      }
      if (notFoundAudit.proofMarkCount < 2 || notFoundAudit.horizontalOverflow) failures.push("desktop/404: flagship mark or responsive layout is missing");
      await page.screenshot({ path: resolve(evidenceDir, "404-desktop.png"), fullPage: true });
    }

    if (browserErrors.length) failures.push(`${deviceName}: browser errors: ${browserErrors.join(" | ")}`);
    if (externalRequests.length) failures.push(`${deviceName}: external requests: ${[...new Set(externalRequests)].join(", ")}`);
    await context.close();
  }
} finally {
  await browser.close();
}

const summary = {
  generatedAt: new Date().toISOString(),
  target: "local preview",
  browser: basename(executablePath),
  routes: routes.length,
  devices: devices.map(([name, viewport]) => ({ name, viewport })),
  screenshots: results.length + 1,
  failures,
  results
};

writeFileSync(resolve(evidenceDir, "browser-verification.json"), `${JSON.stringify(summary, null, 2)}\n`);

if (failures.length) {
  console.error(`Browser verification failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Browser verification passed: ${routes.length} routes × ${devices.length} viewports plus 404, ${results.length + 1} screenshots, clean console, no overflow or external requests.`);
