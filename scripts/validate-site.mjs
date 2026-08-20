import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const checkDist = process.argv.includes("--dist");

const routes = [
  ["/", "index.html", "Proof — Own the path from idea to application"],
  ["/ecosystem/", "ecosystem/index.html", "The Proof ecosystem — Connected, not monolithic"],
  ["/products/", "products/index.html", "Proof products — A modular ecosystem"],
  ["/principles/", "principles/index.html", "Proof principles — Ownership that stays practical"]
];

const referenceHashes = new Map([
  ["06EC33C3-F198-4AAE-B81F-82C443774CBA.png", "CAE2A9B291F3DC3E5683380A6D9C6428E7F8B18D7A98620798D085A9E949E834"],
  ["3CEBF8B6-F49A-4A77-A24B-70BD73E4A043.png", "8286EBAF92EC5AD557A0E9DCEB273CE436B99CB346347E2DA2A2283FCA853988"],
  ["878FAAD7-22B3-4BD5-8FB7-E3B40CDA2DC6.png", "9E081B798042C0849407A4F2E3530621620A39A178BB83E59E8A3CDDD11BC809"],
  ["8FB870B3-7D81-4E99-88EB-CFE7AAEDEBE4.png", "F746E8DB4B70700042273ED4CC56819E05665E63F2909556C4A1A03404771D7A"],
  ["DE23ECB8-645B-4269-B3DB-F4461A5006BD.png", "D1095D028E7E3DC8607882D6B5673E478423FE5177E08C677289C1E239FDA9E2"]
]);

const errors = [];

function assert(condition, message) {
  if (!condition) errors.push(message);
}

function read(relativePath) {
  const absolutePath = join(root, relativePath);
  assert(existsSync(absolutePath), `Missing required file: ${relativePath}`);
  return existsSync(absolutePath) ? readFileSync(absolutePath, "utf8") : "";
}

for (const [, file, title] of routes) {
  const html = read(file);
  assert(html.includes(`<title>${title}</title>`), `${file} has an unexpected title`);
  assert(/<meta name="description" content="[^"]{40,}"/.test(html), `${file} needs a substantial meta description`);
  assert(html.includes('property="og:title"'), `${file} is missing Open Graph title metadata`);
  assert(html.includes('name="twitter:title"'), `${file} is missing X/Twitter title metadata`);
  assert(html.includes('name="viewport"'), `${file} is missing responsive viewport metadata`);
}

const source = [
  read("src/main.ts"),
  read("src/content.ts"),
  read("src/styles.css"),
  ...routes.map(([, file]) => read(file)),
  read("404.html")
].join("\n");

const requiredPublicCopy = [
  "Proof Deploy",
  "Proof Cloud",
  "Proof Core",
  "Proof Base",
  "Proof Control",
  "Proof Cloud App",
  "Proof Quote",
  "Proof Flow",
  "Proof Room",
  "Proof OS",
  "Not an available product",
  "Base is not required",
  "local-first"
];

for (const phrase of requiredPublicCopy) {
  assert(source.toLowerCase().includes(phrase.toLowerCase()), `Required public-safe idea is missing: ${phrase}`);
}

const forbiddenPatterns = [
  [/https?:\/\//i, "external runtime URL"],
  [/\b(?:gtag|google-analytics|googletagmanager|segment|mixpanel|hotjar)\b/i, "tracking or analytics code"],
  [/<form\b/i, "data-collection form"],
  [/\b(?:10|172\.(?:1[6-9]|2\d|3[01])|192\.168)\.\d{1,3}\.\d{1,3}\b/, "private network address"],
  [/github\.com/i, "GitHub URL"],
  [/cloudflare\.com/i, "provider URL"]
];

for (const [pattern, label] of forbiddenPatterns) {
  assert(!pattern.test(source), `Source contains a forbidden ${label}`);
}

for (const [route] of routes) {
  assert(source.includes(`href=\"${route}\"`) || route === "/", `Navigation link is missing for ${route}`);
}

for (const [file, expectedHash] of referenceHashes) {
  const absolutePath = join(root, file);
  assert(existsSync(absolutePath), `Missing owner reference: ${file}`);
  if (existsSync(absolutePath)) {
    const actualHash = createHash("sha256").update(readFileSync(absolutePath)).digest("hex").toUpperCase();
    assert(actualHash === expectedHash, `Owner reference changed: ${file}`);
  }
}

const robots = read("public/robots.txt");
assert(robots.includes("Disallow: /"), "W1 robots policy must prevent indexing before the hosting gate");

if (checkDist) {
  const dist = join(root, "dist");
  assert(existsSync(dist), "Production dist directory is missing");
  for (const [, file] of routes) {
    assert(existsSync(join(dist, file)), `Built route is missing: ${file}`);
  }
  assert(existsSync(join(dist, "404.html")), "Built 404 page is missing");
  assert(existsSync(join(dist, "robots.txt")), "Built robots policy is missing");

  if (existsSync(dist)) {
    const textExtensions = new Set([".html", ".js", ".css", ".txt", ".xml", ".json"]);
    const stack = [dist];
    const builtText = [];
    while (stack.length) {
      const current = stack.pop();
      for (const name of readdirSync(current)) {
        const path = join(current, name);
        if (statSync(path).isDirectory()) stack.push(path);
        else if (textExtensions.has(extname(path))) builtText.push(readFileSync(path, "utf8"));
      }
    }
    const builtSource = builtText.join("\n");
    for (const [pattern, label] of forbiddenPatterns) {
      assert(!pattern.test(builtSource), `Production output contains a forbidden ${label}`);
    }
    for (const file of referenceHashes.keys()) {
      assert(!builtSource.includes(file), `Production output references an owner design reference: ${file}`);
      assert(!existsSync(join(dist, file)), `Owner design reference was copied into production: ${file}`);
    }
  }
}

if (errors.length) {
  console.error(`Proof site validation failed (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Proof site validation passed (${routes.length} routes, ${referenceHashes.size} preserved references${checkDist ? ", production output checked" : ""}).`);
