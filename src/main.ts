import "./styles.css";
import { productGroups, products, type Product, type ProductCategory } from "./content";

type Page = "home" | "ecosystem" | "products" | "principles" | "not-found";

const page = (document.body.dataset.page ?? "not-found") as Page;
const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Proof site mount point is missing.");
}

const routes: Array<{ href: string; label: string; page: Page }> = [
  { href: "/", label: "Home", page: "home" },
  { href: "/ecosystem/", label: "Ecosystem", page: "ecosystem" },
  { href: "/products/", label: "Products", page: "products" },
  { href: "/principles/", label: "Principles", page: "principles" }
];

const proofMark = `
  <svg class="proof-mark" viewBox="0 0 72 72" aria-hidden="true" focusable="false">
    <circle class="proof-mark__ring" cx="36" cy="36" r="28" pathLength="100"></circle>
    <path class="proof-mark__signal" d="M15 54A28 28 0 0 1 15 18"></path>
    <path class="proof-mark__letter" d="M27 57V27h17c8 0 13 5 13 12s-5 12-13 12H34V34h10c3 0 5 2 5 5s-2 5-5 5"></path>
    <path class="proof-mark__check" d="m38 39 6 6 13-15"></path>
  </svg>
`;

function productLockup(productName?: string, compact = false): string {
  return `<span class="product-lockup${compact ? " product-lockup--compact" : ""}">${proofMark}<span class="product-lockup__type"><b>PROOF</b>${productName ? `<small>${productName.replace("Proof ", "").toUpperCase()}</small>` : ""}</span></span>`;
}

function header(): string {
  const links = routes
    .map(({ href, label, page: routePage }) => {
      const active = page === routePage;
      return `<a href="${href}"${active ? ' aria-current="page"' : ""}>${label}</a>`;
    })
    .join("");

  return `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="site-header">
      <div class="shell header-inner">
        <a class="brand" href="/" aria-label="Proof home">
          ${productLockup(undefined, true)}
        </a>
        <nav class="primary-nav" aria-label="Primary navigation">${links}</nav>
      </div>
    </header>
  `;
}

function footer(): string {
  return `
    <footer class="site-footer">
      <div class="shell footer-grid">
        <div>
          <a class="brand brand--footer" href="/" aria-label="Proof home">${productLockup(undefined, true)}</a>
          <p>One connected ecosystem. Separate responsibilities. Ownership that lasts.</p>
        </div>
        <nav aria-label="Footer navigation">
          ${routes.slice(1).map(({ href, label }) => `<a href="${href}">${label}</a>`).join("")}
        </nav>
        <p class="footer-note">Public presentation only.<br />No accounts. No tracking. No operator controls.</p>
      </div>
    </footer>
  `;
}

function arrowIcon(): string {
  return `<span aria-hidden="true">→</span>`;
}

function categoryIcon(category: ProductCategory): string {
  const icons: Record<ProductCategory, string> = {
    Platform: "01",
    Operations: "02",
    Applications: "03",
    Concepts: "04"
  };
  return `<span class="category-index" aria-hidden="true">${icons[category]}</span>`;
}

function productClassification(category: ProductCategory): string {
  const labels: Record<ProductCategory, string> = {
    Platform: "PLATFORM",
    Operations: "OPERATIONS",
    Applications: "APPLICATION",
    Concepts: "CONCEPT"
  };
  return labels[category];
}

function homePage(): string {
  return `
    <main id="main-content">
      <section class="hero hero--home flagship-hero">
        <div class="hero-grid" aria-hidden="true"></div>
        <div class="shell hero-layout">
          <div class="hero-copy">
            <p class="eyebrow"><span></span>An owner-first software ecosystem</p>
            <h1>Own the path from idea to application.</h1>
            <p class="hero-lede">Proof connects the work of building, deploying, running, and understanding applications—without turning ownership into a promise from one more provider.</p>
            <div class="button-row">
              <a class="button button--primary" href="/ecosystem/">Explore the ecosystem ${arrowIcon()}</a>
              <a class="button button--ghost" href="/products/">See the products</a>
            </div>
            <ul class="hero-signals" aria-label="Proof qualities">
              <li><span aria-hidden="true">✓</span> Modular</li>
              <li><span aria-hidden="true">✓</span> Portable</li>
              <li><span aria-hidden="true">✓</span> Evidence-driven</li>
            </ul>
          </div>
          <div class="hero-system proof-stage proof-stage--hero" aria-label="Source moves through Proof Deploy and Proof Cloud to Proof Core; Proof Base attaches only when structured data is needed">
            <div class="stage-grid" aria-hidden="true"></div>
            <div class="system-label">THE OWNED APPLICATION PATH <span>01—04</span></div>
            <div class="hero-master-mark">${productLockup()}</div>
            <ol class="signal-path signal-path--flagship">
              <li><span class="signal-node">01</span><div><strong>Source</strong><small>Exact and inspectable</small></div></li>
              <li><span class="signal-node">02</span><div><strong>Deploy</strong><small>Proven release</small></div></li>
              <li><span class="signal-node">03</span><div><strong>Cloud</strong><small>Owned runtime</small></div></li>
              <li><span class="signal-node">04</span><div><strong>Core</strong><small>Compute foundation</small></div></li>
            </ol>
            <div class="optional-signal"><span>OPTIONAL</span><b>Base</b><small>Structured data when needed</small></div>
            <div class="system-orbit system-orbit--one"><span>Observe</span></div>
            <div class="system-orbit system-orbit--two"><span>Operate</span></div>
          </div>
        </div>
        <div class="hero-trust shell"><span>POWEREDBYPROOF.COM</span><p>Public flagship home.<br />The brand remains Proof.</p></div>
      </section>

      <section class="section section--problem">
        <div class="shell split-layout">
          <div>
            <p class="eyebrow"><span></span>The usual path</p>
            <h2>Building the app is only half the work.</h2>
          </div>
          <div class="fragment-panel">
            <p>Source, releases, hosting, networking, compute, data, and dashboards often arrive as separate systems. The owner is left to maintain every seam.</p>
            <ol class="fragment-chain" aria-label="A fragmented application delivery path">
              <li>Source</li><li>Build</li><li>Hosting</li><li>Compute</li><li>Data</li><li>Operations</li>
            </ol>
            <div class="approach-note"><strong>Proof changes the relationship.</strong><span>Connect the pieces, keep their responsibilities clear, and preserve a path to move, recover, and understand what you own.</span></div>
          </div>
        </div>
      </section>

      <section class="section section--tint" id="overview">
        <div class="shell">
          <div class="section-heading section-heading--center">
            <p class="eyebrow"><span></span>One ecosystem, four roles</p>
            <h2>Connected by design. Optional by default.</h2>
            <p>An application uses the parts that solve its real problem. Integration never means every layer becomes mandatory.</p>
          </div>
          <div class="ecosystem-map" aria-label="Proof ecosystem relationships">
            <section class="map-zone map-zone--operations">
              <div class="map-zone__heading"><span>Operations</span><small>Observe without replacing authority</small></div>
              <div class="map-pair"><div>Proof Control</div><div>Proof Cloud App</div></div>
            </section>
            <section class="map-zone map-zone--platform">
              <div class="map-zone__heading"><span>Platform</span><small>The owned application path</small></div>
              <ol class="platform-chain"><li><b>Deploy</b><small>Release</small></li><li><b>Cloud</b><small>Runtime</small></li><li><b>Core</b><small>Compute</small></li></ol>
              <div class="optional-node"><span>Optional service</span><b>Proof Base</b><small>Structured data, when needed</small></div>
            </section>
            <section class="map-zone map-zone--applications">
              <div class="map-zone__heading"><span>Applications</span><small>Real software, different architecture fits</small></div>
              <div class="map-trio"><div>Proof Quote</div><div>Proof Flow</div><div>Proof Room</div></div>
            </section>
            <section class="map-zone map-zone--concept"><div><span>Concept</span><b>Proof OS</b></div><p>Preserved exploration—not presented as available.</p></section>
          </div>
          <a class="text-link" href="/ecosystem/">See how responsibility flows ${arrowIcon()}</a>
        </div>
      </section>

      <section class="section">
        <div class="shell">
          <div class="section-heading section-heading--split">
            <div><p class="eyebrow"><span></span>The platform</p><h2>Four clear responsibilities.</h2></div>
            <p>Build, runtime, compute, and optional structured data remain distinct so each can be understood, recovered, and changed on its own terms.</p>
          </div>
          <div class="card-grid card-grid--four">
            ${products.filter((product) => product.category === "Platform").map(summaryCard).join("")}
          </div>
        </div>
      </section>

      <section class="section section--navy">
        <div class="shell operations-layout">
          <div class="section-heading section-heading--light">
            <p class="eyebrow eyebrow--light"><span></span>Operations are a lens</p>
            <h2>See the system without moving its source of truth.</h2>
            <p>Proof’s operator surfaces help an owner understand what needs attention. The product underneath still owns the state being shown.</p>
          </div>
          <div class="operations-cards">
            <article><span>ECOSYSTEM-WIDE</span><h3>Proof Control</h3><p>One local-first view across Core, Cloud, Deploy, workloads, health, deployments, and alerts.</p><small>Observes the whole ecosystem</small></article>
            <article><span>CLOUD-FOCUSED</span><h3>Proof Cloud App</h3><p>The owner experience for Cloud workloads, releases, routes, services, recovery, and attention-required state.</p><small>Presents Cloud; Cloud remains authority</small></article>
          </div>
        </div>
      </section>

      <section class="section section--practice">
        <div class="shell">
          <div class="section-heading section-heading--center">
            <p class="eyebrow"><span></span>Proof in practice</p>
            <h2>Real applications prove the system is modular.</h2>
            <p>Three applications. Three legitimate architecture choices. No requirement to force them into one identical stack.</p>
          </div>
          <div class="practice-grid">
            ${practiceCard("Quote", "Manufacturing estimating", "A proven owned hosting path", ["Deploy", "Cloud", "Core"], "Base is not required for its current hosting path.")}
            ${practiceCard("Room", "Photography workflow", "Local-first is the right fit", ["Self-hosted", "SQLite", "Local"], "Using fewer shared layers is a feature when it protects the real workflow.")}
            ${practiceCard("Flow", "Shop-floor analysis", "A genuine relational-data need", ["Structured data", "Review", "Analytics"], "A natural future compatibility case for optional Proof Base.")}
          </div>
        </div>
      </section>

      <section class="principles-strip">
        <div class="shell">
          <div class="strip-heading"><span>BUILT ON PRACTICAL OWNERSHIP</span><a href="/principles/">Explore the principles ${arrowIcon()}</a></div>
          <ol><li>Owner-first</li><li>Modular, not mandatory</li><li>Portable by design</li><li>Evidence over implication</li><li>Local-first when correct</li></ol>
        </div>
      </section>
    </main>
  `;
}

function summaryCard(product: Product): string {
  return `<article class="summary-card proof-family-card"><div class="card-top"><span>${product.category}</span><b aria-hidden="true">${String(products.indexOf(product) + 1).padStart(2, "0")}</b></div>${productLockup(product.name, true)}<p>${product.description}</p><small>${product.subtitle}</small></article>`;
}

function practiceCard(name: string, category: string, headline: string, layers: string[], note: string): string {
  return `<article class="practice-card proof-stage-card"><div class="proof-stage-card__visual"><span class="stage-classification">APPLICATION</span>${productLockup(`Proof ${name}`)}<div class="stage-line" aria-hidden="true"><i></i><i></i><i></i></div></div><div class="proof-stage-card__body"><div class="practice-card__top"><span>${headline}</span><small>${category}</small></div><div class="layer-list">${layers.map((layer) => `<span>${layer}</span>`).join("")}</div><p>${note}</p></div></article>`;
}

function ecosystemPage(): string {
  return `
    <main id="main-content">
      ${pageHero("Ecosystem", "One system. Separate authority.", "Proof connects the application path without asking one monolith to own source, release, runtime, compute, data, and operations all at once.", "04 CONNECTED RESPONSIBILITIES")}
      <section class="section">
        <div class="shell authority-grid">
          <div><p class="eyebrow"><span></span>Integration with boundaries</p><h2>Connection should make responsibility clearer.</h2></div>
          <div class="authority-principles">
            <article><span>01</span><h3>Every layer has a job.</h3><p>Deploy proves the release. Cloud runs it. Core provides the host foundation. Base attaches only when relational data is needed.</p></article>
            <article><span>02</span><h3>Handoffs stay explicit.</h3><p>A release does not silently become a different build, and a user interface does not become authority simply because it can display a button.</p></article>
            <article><span>03</span><h3>Unknown stays unknown.</h3><p>Proof favors visible identity and evidence over a reassuring status that cannot be tied back to the thing actually running.</p></article>
          </div>
        </div>
      </section>

      <section class="section section--tint">
        <div class="shell">
          <div class="section-heading section-heading--split">
            <div><p class="eyebrow"><span></span>The build path</p><h2>From exact source to owned compute.</h2></div>
            <p>Each handoff answers a different question. Together they create a release path an owner can inspect, operate, and recover.</p>
          </div>
          <ol class="handoff-path">
            <li><span class="handoff-number">01</span><div><small>START</small><h3>Source</h3><p>The exact approved revision remains the beginning of the release identity.</p></div></li>
            <li><span class="handoff-number">02</span><div><small>BUILD + RELEASE</small><h3>Proof Deploy</h3><p>Builds once, verifies the artifact, controls promotion, and preserves rollback provenance.</p></div></li>
            <li><span class="handoff-number">03</span><div><small>RUNTIME</small><h3>Proof Cloud</h3><p>Admits the proven release and owns isolation, route state, health, reconciliation, and recovery boundaries.</p></div></li>
            <li><span class="handoff-number">04</span><div><small>COMPUTE</small><h3>Proof Core</h3><p>Provides the owned machine and reproducible host baseline beneath the workload.</p></div></li>
          </ol>
        </div>
      </section>

      <section class="section">
        <div class="shell optional-layout">
          <div class="optional-visual" aria-label="Proof Base attaches as an optional service beside the main application path">
            <div class="optional-spine"><span>APPLICATION PATH</span><b>Deploy → Cloud → Core</b></div>
            <div class="optional-branch"><span>ATTACH WHEN NEEDED</span><b>Proof Base</b><small>Portable relational services</small></div>
          </div>
          <div><p class="eyebrow"><span></span>Optional means optional</p><h2>Data services must earn their place.</h2><p>Proof Base is the structured relational service direction for applications that actually need centralized PostgreSQL capability. It is not required for every Proof application and is not presented as production-ready.</p><ul class="check-list"><li>Scoped attachment through Cloud</li><li>Explicit migrations and logical recovery</li><li>Portable, exportable relational data</li></ul></div>
        </div>
      </section>

      <section class="section section--navy">
        <div class="shell">
          <div class="section-heading section-heading--split section-heading--light">
            <div><p class="eyebrow eyebrow--light"><span></span>Operator surfaces</p><h2>Visibility is not authority.</h2></div>
            <p>Today, these read-only interfaces help the owner understand state through explicit boundaries. Governed actions are future work; the interfaces do not replace the systems whose state they present.</p>
          </div>
          <div class="lens-comparison">
            <article><span class="lens-scope">WIDE LENS</span><h3>Proof Control</h3><p>Ecosystem-wide operations and observability across the Proof landscape.</p><div><span>Core</span><span>Cloud</span><span>Deploy</span><span>Workloads</span></div><small>Underlying systems remain authoritative</small></article>
            <article><span class="lens-scope">FOCUSED LENS</span><h3>Proof Cloud App</h3><p>A dedicated owner experience for the Proof Cloud platform.</p><div><span>Releases</span><span>Routes</span><span>Services</span><span>Recovery</span></div><small>Proof Cloud remains runtime authority</small></article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="shell">
          <div class="section-heading section-heading--center"><p class="eyebrow"><span></span>Architecture follows the work</p><h2>Applications choose what they need.</h2><p>Modularity is proven by different, defensible shapes—not by making every application look the same.</p></div>
          <div class="fit-table" role="table" aria-label="How Proof applications use different architecture fits">
            <div class="fit-row fit-row--header" role="row"><span role="columnheader">Application</span><span role="columnheader">Architecture fit</span><span role="columnheader">What it proves</span></div>
            <div class="fit-row" role="row"><b role="cell">Proof Quote</b><span role="cell">Deploy → Cloud → Core</span><p role="cell">A real manufacturing app can use the owned release and hosting path without requiring Base.</p></div>
            <div class="fit-row" role="row"><b role="cell">Proof Room</b><span role="cell">Local-first + SQLite</span><p role="cell">Private, local workflows are valid when that architecture fits the actual problem.</p></div>
            <div class="fit-row" role="row"><b role="cell">Proof Flow</b><span role="cell">Centralized relational data</span><p role="cell">A genuine shared-data need creates a natural future compatibility case for Base.</p></div>
          </div>
        </div>
      </section>

      <section class="portability-band">
        <div class="shell portability-grid"><div><p class="eyebrow eyebrow--light"><span></span>Portability is a recovery feature</p><h2>Own the source, data, configuration, and path back.</h2></div><ul><li><b>Ordinary source control</b><span>Inspectable history and identity</span></li><li><b>PostgreSQL when needed</b><span>Standard exports and logical recovery</span></li><li><b>SQLite when correct</b><span>Local simplicity without forced services</span></li><li><b>Replaceable components</b><span>Practical freedom to move where possible</span></li></ul></div>
      </section>
    </main>
  `;
}

function productsPage(): string {
  return `
    <main id="main-content">
      ${pageHero("Products", "A system of clear responsibilities.", "Platform, operations, applications, and concepts each have a distinct role. The directory starts with purpose—not internal status or invented availability.", "10 PRODUCTS + CONCEPTS")}
      <nav class="directory-nav" aria-label="Product categories"><div class="shell">${productGroups.map((group) => `<a href="#${group.toLowerCase()}">${group}<span>${products.filter((product) => product.category === group).length}</span></a>`).join("")}</div></nav>
      <div class="directory shell">
        ${productGroups.map(productGroup).join("")}
      </div>
      <section class="directory-note"><div class="shell"><span aria-hidden="true">i</span><div><h2>A directory, not an availability board.</h2><p>These cards describe durable product roles. They do not imply commercial availability, live service status, pricing, or a commitment that every application uses every product.</p></div><a class="text-link" href="/ecosystem/">See how they connect ${arrowIcon()}</a></div></section>
    </main>
  `;
}

function productGroup(group: ProductCategory): string {
  const groupCopy: Record<ProductCategory, string> = {
    Platform: "The build, runtime, compute, and optional structured-data foundations.",
    Operations: "Owner-facing lenses that preserve the authority of underlying products.",
    Applications: "Real software that proves different Proof architecture fits.",
    Concepts: "Preserved explorations, clearly separated from available products."
  };
  return `<section class="product-group" id="${group.toLowerCase()}" aria-labelledby="${group.toLowerCase()}-title"><div class="group-heading">${categoryIcon(group)}<div><p>${group}</p><h2 id="${group.toLowerCase()}-title">${groupCopy[group]}</h2></div></div><div class="product-grid">${products.filter((product) => product.category === group).map(productCard).join("")}</div></section>`;
}

function productCard(product: Product): string {
  return `<article class="product-card proof-stage-card${product.status ? " product-card--concept" : ""}"><div class="proof-stage-card__visual"><span class="stage-classification">${productClassification(product.category)}</span>${productLockup(product.name)}<div class="stage-line" aria-hidden="true"><i></i><i></i><i></i></div></div><div class="proof-stage-card__body"><div class="product-card__heading"><div><span>${product.category}</span><h3>${product.name}</h3></div>${product.status ? `<strong>${product.status}</strong>` : ""}</div><p class="product-subtitle">${product.subtitle}</p><p>${product.description}</p><ul>${product.capabilities.map((capability) => `<li>${capability}</li>`).join("")}</ul>${product.status ? `<div class="concept-note">Preserved exploration · Not an available product</div>` : ""}</div></article>`;
}

function principlesPage(): string {
  const principles = [
    ["Owner-first", "Start with real owner friction.", "Proof exists to make building and operating owned applications more understandable and recoverable. Hypothetical SaaS requirements do not get to reshape the architecture by default."],
    ["Modular, not mandatory", "Use only the layers the application needs.", "Base is optional. Stateless is valid. Local-first is valid. A coherent ecosystem does not require every application to pass through every product."],
    ["Portable by design", "Ownership includes a credible path to move.", "Ordinary source control, standard PostgreSQL exports when relational data is used, SQLite where appropriate, and inspectable release data keep portability practical."],
    ["Evidence over implication", "A green light should mean something exact.", "Source, release, runtime, health, and recovery identity matter. Unknown state remains unknown instead of being dressed up as success."],
    ["Local-first when correct", "Self-hosting is a tool, not an ideology.", "Owned infrastructure is valuable when it solves the real problem. Proof does not self-host a component merely to say that it does."],
    ["Proven components underneath", "Build boundaries, not branded reinventions.", "Proof uses established technologies behind understandable responsibilities instead of rebuilding databases, filesystems, cryptography, or global networks for appearance."]
  ];
  return `
    <main id="main-content">
      ${pageHero("Principles", "Ownership that stays practical.", "Proof is shaped by real applications, explicit evidence, portable foundations, and the freedom to use fewer layers when fewer layers are right.", "06 DURABLE PRINCIPLES")}
      <section class="principle-intro"><div class="shell"><blockquote>“Infrastructure exists to serve real applications—not the other way around.”</blockquote><p>The architecture is not a purity test. It is a set of decisions that keeps the owner’s ability to understand, recover, change, and operate the system in view.</p></div></section>
      <section class="section"><div class="shell principle-list">${principles.map((principle, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><div><p>${principle[0]}</p><h2>${principle[1]}</h2><p>${principle[2]}</p></div></article>`).join("")}</div></section>
      <section class="decision-test"><div class="shell"><div><p class="eyebrow eyebrow--light"><span></span>A practical decision test</p><h2>Does this choice help the owner?</h2></div><ol><li><span>01</span>Does it solve a real application problem?</li><li><span>02</span>Can the owner understand its responsibility?</li><li><span>03</span>Can source and data be recovered or moved?</li><li><span>04</span>Is the claimed state backed by evidence?</li><li><span>05</span>Is this layer actually necessary?</li></ol></div></section>
      <section class="section"><div class="shell closing-cta"><div>${productLockup()}</div><h2>One coherent ecosystem.<br />No mandatory monolith.</h2><p>See how these principles become explicit responsibilities across Proof Deploy, Cloud, Core, Base, Control, Cloud App, and real applications.</p><a class="button button--dark" href="/ecosystem/">Explore the ecosystem ${arrowIcon()}</a></div></section>
    </main>
  `;
}

function pageHero(kicker: string, title: string, copy: string, stat: string): string {
  return `<section class="page-hero"><div class="hero-grid" aria-hidden="true"></div><div class="shell"><div><p class="eyebrow"><span></span>${kicker}</p><h1>${title}</h1><p>${copy}</p></div><div class="page-hero__stat proof-stage"><span>PROOF SYSTEM</span>${productLockup(kicker === "Products" ? "Proof Family" : undefined)}<b>${stat}</b><small>Connected relationships · Explicit boundaries</small></div></div></section>`;
}

function notFoundPage(): string {
  return `<main id="main-content" class="not-found"><div class="not-found-grid" aria-hidden="true"></div><div class="shell"><div class="not-found-mark">${productLockup()}</div><div class="not-found__code">404</div><p class="eyebrow"><span></span>Outside the map</p><h1>This Proof page does not exist.</h1><p>The public site has four routes. Return home or continue with the ecosystem overview.</p><div class="button-row"><a class="button button--dark" href="/">Return home</a><a class="button button--outline" href="/ecosystem/">Explore the ecosystem</a></div></div></main>`;
}

const pages: Record<Page, () => string> = {
  home: homePage,
  ecosystem: ecosystemPage,
  products: productsPage,
  principles: principlesPage,
  "not-found": notFoundPage
};

app.innerHTML = `${header()}${pages[page]()}${footer()}`;
