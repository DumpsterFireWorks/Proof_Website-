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