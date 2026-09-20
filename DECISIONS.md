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
