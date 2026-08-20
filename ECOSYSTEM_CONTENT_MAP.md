# Proof Ecosystem Content Map

**Purpose:** researched public-content source map for Proof Website.  
**Rule:** product repositories own implementation truth; `Proof_Infrastructure` owns cross-product architecture and durable owner-first direction.

## Durable public thesis

Proof is an owner-first software and infrastructure ecosystem designed to make it easier to build, deploy, run, connect, understand, recover, and own applications without manually stitching unrelated provider systems together.

Proof is **modular, optional, integrated, and portable**. An application uses only the pieces it actually needs.

Do not describe Proof as a feature-for-feature clone of Vercel, Supabase, Cloudflare, GitHub, or any other commercial platform.

---

## Architecture / philosophy source

### Proof Infrastructure

**Repo:** `DumpsterFireWorks/Proof_Infrastructure`  
**Public role:** architecture/standards behind the ecosystem, not a normal product card  
**Public-safe story:** defines how Proof products divide responsibility and preserve owner-first, modular, portable architecture.

Key durable principles:

- infrastructure exists to serve real applications;
- no application is forced through every Proof layer;
- use proven underlying technology instead of rebuilding primitives for branding;
- preserve source/data/configuration/recovery ownership and portability;
- build from real owner friction, not hypothetical SaaS requirements.

Do not publish internal Control Tower commands, gate statuses, private hashes, host details, or authorization records.

---

# Proof Platform

## Proof Deploy

**Repo:** `DumpsterFireWorks/Proof_Deploy`  
**Category:** Platform  
**Durable role:** exact source, build, immutable artifact, promotion, deployment evidence, and rollback provenance.

**Public description:**

Proof Deploy turns an exact approved source revision into a provable release path. It keeps source, artifact, environment, promotion, and rollback identities explicit so production does not silently become a different build than the one that was verified.

**Useful public ideas:**

- exact source identity;
- deterministic/proven build and artifact identity;
- staged verification;
- controlled promotion;
- rollback to a prior proven release;
- unknown or stale state does not become success.

**Do not publish:** internal gate names/hashes, private repo URLs, provider credentials, exact deployment records/security evidence.

## Proof Cloud

**Repo:** `DumpsterFireWorks/Proof_Cloud`  
**Category:** Platform  
**Durable role:** hosting/runtime admission, workload isolation, routes/networking, health/reconciliation, recovery boundaries; future object/blob-storage lane when deliberately promoted.

**Public description:**

Proof Cloud is the runtime and hosting layer behind Proof. It receives already-proven releases, runs them through explicit workload/environment contracts, and owns runtime isolation, networking, route state, health, reconciliation, and recovery boundaries without rebuilding the release.

**Useful public ideas:**

- exact release admission;
- runtime isolation;
- private/public route boundaries;
- health tied to the running release;
- restart/recovery/rollback boundaries;
- future shared object storage is a Cloud responsibility, not automatically a Base responsibility.

**Do not publish:** private origins/LAN IPs, Cloudflare account/zone/tunnel details, live security evidence, suspended attended-operation details.

## Proof Core

**Repo:** `DumpsterFireWorks/Proof_Core`  
**Category:** Platform  
**Durable role:** owned host hardware, OS, capacity, host security, privileged administration, and recovery foundation.

**Public description:**

Proof Core is the owned compute foundation: the physical machine and reproducible host baseline that Proof workloads can run on. It separates host authority from deployment and application authority so higher layers cannot bypass their contracts simply because a server is reachable.

**Useful public ideas:**

- owned compute;
- reproducible Linux host baseline;
- capacity/security/recovery foundation;
- higher layers remain separate authorities.

**Do not publish:** exact hardware/network identifiers, addresses, firewall rules, SSH specifics, credentials, private recovery evidence.

## Proof Base

**Repo:** `DumpsterFireWorks/Proof_Base`  
**Category:** Platform  
**Durable role:** optional structured relational/backend data-service plane.

**Current truth warning:** `CURRENT.md` says PB-P0 is complete and implementation is HOLD. Some older scope wording still describes PB-G1 as active; public copy must follow current accepted architecture, not the stale active-gate wording.

**Public description:**

Proof Base is the optional structured-data service layer for applications that actually need centralized relational backend capability. Its direction is ordinary portable PostgreSQL, scoped service identities, explicit migrations, logical backup/restore, and clean attachment through Cloud rather than becoming a mandatory layer for every app.

**Useful public ideas:**

- optional, not mandatory;
- PostgreSQL-based relational services;
- migrations and logical recovery;
- scoped app/runtime access separate from admin authority;
- portable/exportable data.

**Do not claim:** that Proof Base is production-ready, a full Supabase replacement, or currently required by Quote/Room.

---

# Proof Operations

## Proof Control

**Repo:** `DumpsterFireWorks/Proof_Control`  
**Category:** Operations  
**Durable role:** ecosystem-wide operator and observability surface.

**Important distinction:** Proof Control is **not** the future Proof Project Registry / authority control-plane concept. Its own locked product decision says it is an operator surface, not a competing control plane.

**Public description:**

Proof Control is the ecosystem command center: one local-first graphical place to understand Core, Cloud, Deploy, workloads, host health, deployments, and alerts. It observes and eventually invokes only explicitly authorized operations; it does not replace the authority of the systems it displays.

**Current maturity:** M1 local read-only operations shell exists. Public V1 website should describe the product role, not internal M1 implementation details.

## Proof Cloud App

**Repo:** `DumpsterFireWorks/Proof_Cloud_App`  
**Category:** Operations  
**Durable role:** Cloud-specific owner-facing UI/operator experience.

**Public description:**

Proof Cloud App is the owner interface for Proof Cloud. It presents workloads, releases, routes, services, recovery, and attention-required state while keeping the Cloud platform—not the UI—as the source of runtime truth.

**Important distinction from Proof Control:**

- Cloud App = focused Cloud platform experience.
- Proof Control = ecosystem-wide operations/observability surface.

Do not imply either UI can create authority simply by showing a button.

---

# Proof Applications

## Proof Quote

**Repo:** `DumpsterFireWorks/Proof_Quote`  
**Category:** Application  
**Durable role:** manufacturing estimating/quoting application.

**Public description:**

Proof Quote is a manufacturing estimating and quoting application built around protected deterministic quote calculations, detailed routing, material/process models, saved quotes, print/PDF workflows, and a path toward neutral organization configuration.

**Proof-in-practice value:** it is the first real application used to prove the owned Deploy → Cloud → Core hosting path.

Do not publish ReFab-private rates, workbook provenance, private deployment evidence, or internal gate history.

## Proof Flow

**Repo:** `DumpsterFireWorks/Proof-Flow`  
**Category:** Application  
**Durable role:** shop-floor process analysis from controlled paper forms to verified analytics.

**Public description:**

Proof Flow turns controlled paper shop-floor feedback into reviewed structured data, deterministic analytics, trends, priorities, and management reports. AI may help read the paper, but official counts, rankings, percentages, and reports come from verified structured truth.

**Proof-in-practice value:** strongest known future compatibility candidate for Proof Base because it genuinely needs centralized relational data/auth/migrations—not because every Proof app should use Base.

Do not publish private ReFab forms, employee responses, production records, Supabase project IDs, or internal report data.

## Proof Room

**Repo:** `DumpsterFireWorks/Proof_Room`  
**Category:** Application  
**Durable role:** local/self-hosted photography workflow assistant.

**Public description:**

Proof Room helps a photographer move from a shoot to creative editing faster through safe ingest, culling assistance, non-generative base corrections, session consistency, learned advisory preferences, and verified handoff—while keeping originals immutable and private client photos local.

**Proof-in-practice value:** demonstrates that local-first SQLite and self-hosting can be the correct architecture. Proof does not force Room onto Base merely for ecosystem uniformity.

Do not publish real photographs, filenames, local paths, client data, or private pilot URLs.

---

# Proof Concepts / Labs

## Proof OS

**Repo:** `DumpsterFireWorks/Proof_Os`  
**Category:** Concept / Lab  
**Durable role:** shop-floor proof/sign-off system concept centered on durable evidence, human confirmation, shared records, and analytics.

**Public description:**

Proof OS is a preserved shop-floor proof/sign-off concept. It represents a broader workflow direction for durable records, confirmation, and analytics, but it is intentionally held rather than marketed as an available product.

**Public status language:** `Concept` or `Exploration`, not `Available`, `Launching`, or `Coming Soon` unless the owner later reactivates it.

---

# Proof Website

**Repo:** `DumpsterFireWorks/Proof_Website-`  
**Category:** Public presentation  
**Role:** explain the ecosystem; never become product/runtime/project authority.

The website may aggregate public-safe descriptions but must always point back to the owning product conceptually. It must not become a live status/control dashboard by convenience.

---

# Recommended public grouping

## Platform

Deploy · Cloud · Core · Base

## Operations

Control · Cloud App

## Applications

Quote · Flow · Room

## Concepts

OS

## Underlying architecture

Proof Infrastructure / owner-first principles

---

# Proof in practice — durable examples

### Quote

Uses Deploy + Cloud + Core. Base is not required for its current hosting path.

### Room

Local-first/self-hosted with SQLite. Demonstrates that using fewer platform layers is a feature when that is the correct architecture.

### Flow

Has a real centralized structured-data requirement and is the clearest future Base compatibility consumer.

These examples are especially valuable on the public site because they prove the ecosystem is modular rather than a mandatory all-or-nothing stack.