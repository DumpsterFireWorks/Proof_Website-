import "./flagship-v2.css";

const proofMasterUrl = new URL("../DE23ECB8-645B-4269-B3DB-F4461A5006BD.png", import.meta.url).href;
const proofDeployUrl = new URL("../878FAAD7-22B3-4BD5-8FB7-E3B40CDA2DC6.png", import.meta.url).href;
const proofRoomUrl = new URL("../8FB870B3-7D81-4E99-88EB-CFE7AAEDEBE4.png", import.meta.url).href;

const exactProductLogos: Record<string, { src: string; alt: string }> = {
  DEPLOY: { src: proofDeployUrl, alt: "Proof Deploy" },
  ROOM: { src: proofRoomUrl, alt: "Proof Room" }
};

function normalizedProductName(lockup: Element): string | undefined {
  const raw = lockup.querySelector(".product-lockup__type small")?.textContent?.trim();
  return raw ? raw.toUpperCase() : undefined;
}

function buildOwnerLogo(productName?: string): HTMLElement {
  const wrapper = document.createElement("span");
  wrapper.className = "owner-brand-lockup";

  const exact = productName ? exactProductLogos[productName] : undefined;
  const brandIdentity = exact?.alt ?? (productName && productName !== "FAMILY" ? `Proof ${productName}` : "Proof");
  wrapper.dataset.ownerBrand = brandIdentity;

  const image = document.createElement("img");
  image.className = "owner-brand-lockup__image";
  image.loading = "eager";
  image.decoding = "async";
  image.src = exact?.src ?? proofMasterUrl;
  image.alt = brandIdentity;

  wrapper.append(image);

  if (productName && !exact && productName !== "FAMILY") {
    const label = document.createElement("span");
    label.className = "owner-brand-lockup__product";
    label.textContent = productName;
    wrapper.append(label);
  }

  if (productName === "FAMILY") {
    wrapper.dataset.ownerBrand = "Proof product family";
    image.alt = "Proof";
    const label = document.createElement("span");
    label.className = "owner-brand-lockup__product owner-brand-lockup__product--family";
    label.textContent = "PRODUCT FAMILY";
    wrapper.append(label);
  }

  return wrapper;
}

function replaceGeneratedMarks(): void {
  document.querySelectorAll<HTMLElement>(".product-lockup").forEach((lockup) => {
    const productName = normalizedProductName(lockup);
    lockup.replaceWith(buildOwnerLogo(productName));
  });
}

function addPremiumSignals(): void {
  document.body.classList.add("flagship-v2");

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
addPremiumSignals();
