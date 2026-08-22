import "./flagship-v2.css";
import "./final-brand.css";

const proofMasterUrl = "/brand/master/proof-master.svg";
const proofHeroUrl = "/brand/hero/proof-ecosystem-hero.png";

const exactProductLogos: Record<string, { src: string; alt: string }> = {
  DEPLOY: { src: "/brand/products/proof-deploy.png", alt: "Proof Deploy" },
  ROOM: { src: "/brand/products/proof-room.png", alt: "Proof Room" },
  CLOUD: { src: "/brand/products/proof-cloud.png", alt: "Proof Cloud" },
  CORE: { src: "/brand/products/proof-core.png", alt: "Proof Core" },
  BASE: { src: "/brand/products/proof-base.png", alt: "Proof Base" },
  CONTROL: { src: "/brand/products/proof-control.png", alt: "Proof Control" },
  "CLOUD APP": { src: "/brand/products/proof-cloud-app.png", alt: "Proof Cloud App" },
  QUOTE: { src: "/brand/products/proof-quote.png", alt: "Proof Quote" },
  FLOW: { src: "/brand/products/proof-flow.png", alt: "Proof Flow" },
  OS: { src: "/brand/products/proof-os.png", alt: "Proof OS" }
};

function normalizedProductName(lockup: Element): string | undefined {
  const raw = lockup.querySelector(".product-lockup__type small")?.textContent?.trim();
  return raw ? raw.toUpperCase() : undefined;
}

function buildOwnerLogo(productName?: string): HTMLElement {
  const normalized = productName?.toUpperCase();
  const exact = normalized ? exactProductLogos[normalized] : undefined;

  const wrapper = document.createElement("span");
  wrapper.className = `owner-brand-lockup${exact ? " owner-brand-lockup--exact" : " owner-brand-lockup--master"}`;

  const brandIdentity = exact?.alt ?? "Proof";
  wrapper.dataset.ownerBrand = brandIdentity;
  if (exact) wrapper.dataset.product = normalized;

  const image = document.createElement("img");
  image.className = "owner-brand-lockup__image";
  image.loading = "eager";
  image.decoding = "async";
  image.src = exact?.src ?? proofMasterUrl;
  image.alt = brandIdentity;
  image.dataset.asset = exact?.src ?? proofMasterUrl;

  wrapper.append(image);
  return wrapper;
}

function replaceGeneratedMarks(): void {
  document.querySelectorAll<HTMLElement>(".product-lockup").forEach((lockup) => {
    const productName = normalizedProductName(lockup);
    lockup.replaceWith(buildOwnerLogo(productName));
  });
}

function mountApprovedEcosystemHero(): void {
  const heroSystem = document.querySelector<HTMLElement>(".flagship-hero .hero-system");
  if (!heroSystem) return;

  heroSystem.classList.add("hero-system--owner-art");
  heroSystem.setAttribute(
    "aria-label",
    "Proof ecosystem architecture showing Source to Deploy to Cloud to Core, with optional Base and ecosystem visibility through Control."
  );
  heroSystem.innerHTML = `
    <div class="owner-hero-chrome" aria-hidden="true">
      <span>PROOF ECOSYSTEM</span>
      <span>OWNER-FIRST · MODULAR · PORTABLE</span>
    </div>
    <figure class="owner-ecosystem-hero">
      <img src="${proofHeroUrl}" alt="Proof ecosystem: Source flows through Proof Deploy, Proof Cloud, and Proof Core; Proof Base is optional and Proof Control provides ecosystem visibility." />
      <figcaption>
        <strong>SOURCE → DEPLOY → CLOUD → CORE</strong>
        <span>Base when structured data is needed · Control for ecosystem visibility</span>
      </figcaption>
    </figure>
  `;
}

function addPremiumSignals(): void {
  document.body.classList.add("flagship-v2", "flagship-final");

  document.querySelectorAll<HTMLElement>(".proof-stage, .proof-stage-card__visual").forEach((stage) => {
    stage.classList.add("precision-stage");
  });

  document.querySelectorAll<HTMLElement>(".summary-card, .product-card, .practice-card").forEach((card) => {
    card.classList.add("precision-card");
  });

  const hero = document.querySelector<HTMLElement>(".flagship-hero");
  if (hero && !hero.querySelector(".premium-scanline")) {
    const scanline = document.createElement("div");
    scanline.className = "premium-scanline";
    scanline.setAttribute("aria-hidden", "true");
    hero.append(scanline);
  }
}

replaceGeneratedMarks();
mountApprovedEcosystemHero();
addPremiumSignals();
