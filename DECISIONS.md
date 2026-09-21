# Decisions — Proof Website

## 2026-08-20 — Proof will have its own public website

**Decision:** Proof will have a dedicated public-facing website in `DumpsterFireWorks/Proof_Website-`.

The website is separate from Proof Cloud, Proof Cloud App, Proof Control, and the future Proof Project Registry / Control Plane concept.

It is a presentation product only.

## 2026-08-20 — Base the website on the whole ecosystem

**Decision:** The Proof Website will explain the ecosystem as a coherent whole rather than being a Proof Cloud marketing page or a generic company landing page.

Public grouping:

- Platform — Deploy, Cloud, Core, Base
- Operations — Control, Cloud App
- Applications — Quote, Flow, Room
- Concepts — OS
- Architecture/principles source — Proof Infrastructure

## 2026-08-20 — Show modularity through real applications

**Decision:** The site should use real application architecture as evidence of Proof’s modular design.

- Quote demonstrates Deploy + Cloud + Core without requiring Base.
- Room demonstrates valid local-first/self-hosted/SQLite architecture.
- Flow demonstrates a genuine centralized relational-data need and natural future Base compatibility.

Do not imply that ecosystem maturity means every application uses every product.

## 2026-08-20 — Proof Control and Proof Cloud App are distinct public products

**Decision:** Public copy must distinguish:

- Proof Control — ecosystem-wide operator/observability surface;
- Proof Cloud App — Cloud-specific owner/operator UI.

Neither is underlying infrastructure authority.

Proof Control is also not the future Proof Project Registry / Control Plane merely because its name contains Control.

## 2026-08-20 — Owner-supplied PNGs define initial visual-reference direction

**Decision:** The five PNGs already committed to the website repository are design references for the first implementation.

Codex must inspect them locally before designing W1 and preserve the originals unchanged.

## 2026-08-20 — Public safety beats internal completeness

**Decision:** The public site should communicate durable architecture and real product purpose without publishing private infrastructure, security evidence, operational commands, private repository links, exact audit hashes, customer data, or fast-changing gate jargon.

A public site that exposes every internal fact is not more truthful; it is less safe and harder to maintain.

## 2026-08-20 — No commercialization theater in V1

**Decision:** V1 does not add pricing, plans, waitlists, customer claims, multi-tenancy, SLAs, sales forms, or market-positioning obligations merely because Proof now has a website.

The site first explains what has actually been built and why.

## 2026-09-20 — Owner development hold lifted

**Decision:** The `Owner development hold — 2026-09-12` is lifted by explicit owner instruction. Proof Website development resumes.

The hold's preservation rules (no archiving, deletion, decommissioning, service shutdown, or host/storage/backup/network/tunnel/credential/recovery change) are carried forward unchanged. Lifting the hold authorises development, not infrastructure mutation.

The cross-repo portfolio record `OWNER_PROJECT_PRIORITIES_2026-09-12.md` in `DumpsterFireWorks/Repo-Index-on-GitHub` still reflects the pre-lift state and is a separate pending update.

## 2026-09-20 — Deploy directly with Wrangler, not the Cloudflare Git integration

**Decision:** Production deploys to the `proof-website` Worker are performed by direct `wrangler deploy` from the owner's working copy. The Cloudflare Git integration is to be disconnected.

Rationale: the owner does not want the deploy path to depend on GitHub. The Cloudflare Git integration is not GitHub Actions, but it does make GitHub a required link in the production chain.

Consequences:

- GitHub remains source of truth for history, review and offsite backup. Commits are still pushed to `DumpsterFireWorks/Proof_Website-`.
- GitHub is no longer a required link in the production chain.
- The Cloudflare Git integration for `proof-website` must be disconnected. Until it is, two publishers target one Worker and a push to `main` can overwrite a direct deploy.
- Deploy command on the owner machine: `npm run build` then `npx wrangler deploy`.
- The `.github/workflows` CI performs checks only and never shipped production; it is unaffected by this decision.
- Assistant shells cannot run the deploy. The egress proxy denies `api.cloudflare.com:443` with a gateway `403` on `CONNECT`, from both the local device VM and the cloud container. Assistant work is limited to source changes, builds, validation and post-deploy verification.
- The portability commitment is unchanged: the site remains static assets and can move off Cloudflare.

## 2026-09-20 — Visual direction under review: dark high-vibrance treatment

**Status:** `ACCEPTED AND IMPLEMENTED 2026-09-21 — SUPERSEDES W1.5`

The owner asked for the Website to adopt the visual language of `appliedintelco.com`
rather than the current W1.5 flagship system. A full-page reference implementation of
the Proof homepage in that language is committed at `design/v3-direction-reference.html`.

This entry records the direction and its provenance. It does not accept it, and it does
not supersede W1.5. The live site is unchanged.

Direction, as extracted from the live Applied Intelligence site:

- near-black base `#04070f` with a fixed backdrop layer: three radial blooms over a
  vertical gradient, plus a 54px grid overlay masked to fade out;
- display type at `letter-spacing: -0.075em`, `line-height: 0.85`, heaviest available
  weight, with a soft blue text-shadow;
- section labels at `letter-spacing: 0.28em` preceded by a 48px glowing gradient rule;
- glass panels and cards with thin light borders, inset top highlights, and
  colour-coded gradient top rules;
- pill buttons and pill "flow rails" joined by short gradient connectors;
- hover: `translateY(-1px)` with a brighter border and a wide blue glow, over `0.22s`.

Open questions before this could be accepted:

- **Typeface.** Applied Intelligence loads no web font; it resolves to the platform UI
  font, so it renders as SF Pro on Apple devices and Segoe UI on Windows. The reference
  inherits that inconsistency. Committing to a single typeface across platforms means
  loading a web font, with the page-weight cost that implies.
- **Brand separation.** The reference uses the Applied Intelligence red accent alongside
  Proof blue. That makes Proof read as an Applied Intelligence sibling rather than a
  distinct brand. A blue-only variant is a small change.
- **Placeholder copy.** The header tagline and the primary call to action in the
  reference are placeholders and are not Proof's voice.
- **Scope.** The reference covers the homepage only. Ecosystem, Products and Principles
  share the same components but have not been treated.

## 2026-09-21 — Dark high-vibrance direction accepted and implemented

**Decision:** The direction proposed on 2026-09-20 is accepted and implemented across
all four public routes. It **supersedes the W1.5 flagship visual system**, which was
previously recorded as accepted with Review-Control PASS. W1.5 is now historical.

Implementation shape:

- `src/v3.css` is loaded last and owns surface, colour, type weight and interaction.
  Layout, component structure and public copy are unchanged, so the site validator's
  four routes and preserved reference assets still pass unmodified.
- The existing design tokens were retoned rather than replaced, which flips most
  surfaces in one move. `--proof-ink` in `flagship-v2.css` also had to be retoned,
  because `.flagship-v2 .page-hero h1` uses it and outranks a bare `h1` selector.
- `main.ts` gained `v3Brand()`. The packaged brand asset is a full lockup and becomes
  unreadable at header size, so the header and footer now render the symbol alone as
  inline SVG with the wordmark as live text.
- Product artwork is navy and disappears on dark surfaces, so every lockup sits on a
  light plate with a constrained width.

Open items deliberately not resolved here:

- **Typeface still resolves per platform.** No web font is loaded, so headlines render
  as SF Pro on Apple devices and Segoe UI on Windows. Consistent type across platforms
  would require loading a font and accepting the page-weight cost.
- **The header tagline `Own what you build` is placeholder copy** and is not Proof's
  settled voice.
- **The Applied Intelligence red accent is retained**, so Proof currently reads as an
  Applied Intelligence sibling. A blue-only variant remains a small change.
- `design/v3-direction-reference.html` is the standalone reference page and is not
  wired into the build.
