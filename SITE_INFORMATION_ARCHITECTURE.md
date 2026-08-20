# Proof Website — Information Architecture

## V1 visitor goal

A visitor should understand the Proof idea in roughly this order:

1. **What is Proof?**
2. **Why does it exist?**
3. **What are the major layers?**
4. **How do the layers connect without forcing every app through every product?**
5. **What real applications already demonstrate the idea?**
6. **What principles keep the system understandable and owner-controlled?**

The site should not begin with internal repository names, status jargon, infrastructure evidence, or a giant product matrix.

---

# Primary navigation

1. **Home** — `/`
2. **Ecosystem** — `/ecosystem`
3. **Products** — `/products`
4. **Principles** — `/principles`

No account/login/admin/status navigation in V1.

---

# Home — `/`

## 1. Hero

Purpose: communicate the ecosystem thesis before product names.

Core idea to express:

- one owned system for moving ideas into applications and operating them;
- reduce manual stitching between source, deployment, runtime, compute, data, and operations;
- ownership and portability rather than provider lock-in.

Primary action: **Explore the ecosystem** → `/ecosystem`  
Secondary action: **See the products** → `/products`

Do not use pricing/waitlist/signup CTAs in V1.

## 2. The problem

Show the fragmented normal path conceptually:

source → build/deploy → hosting/network → compute → data → dashboards

Then explain Proof’s approach: integrated relationships with separated authority.

Avoid attacking or naming competitors as enemies. The point is reducing owner friction, not declaring feature parity.

## 3. Ecosystem overview

A simple layered visual:

```text
                    PROOF OPERATIONS
              Control       Cloud App
                     \       /
                      \     /
PROOF PLATFORM     Deploy — Cloud — Core
                              |
                           Base?

                    APPLICATIONS
              Quote · Flow · Room

                     CONCEPTS
                        OS
```

The diagram should communicate that Base is optional and applications may use different subsets.

Do not represent Proof Control as authority above all products. It is an operator surface.

## 4. Platform summary

Four concise cards:

- Deploy — exact source → proven release
- Cloud — runtime, routes, health, recovery
- Core — owned compute and host foundation
- Base — optional structured data services

## 5. Operations summary

Two cards:

- Proof Control — ecosystem-wide command center / observability
- Proof Cloud App — focused Cloud owner experience

Use copy that explicitly separates presentation from authority.

## 6. Proof in practice

This should be one of the strongest home sections because it demonstrates modularity with real applications.

### Proof Quote

Example message: a real manufacturing app using the owned Deploy → Cloud → Core path without requiring Base.

### Proof Room

Example message: a local-first photography workflow where SQLite/self-hosting is the correct architecture; Proof does not force unnecessary shared services.

### Proof Flow

Example message: a process-analysis app with genuine centralized relational-data needs and therefore a natural future Base compatibility case.

## 7. Principles strip

Five durable principles:

- Owner-first
- Modular, not mandatory
- Portable by design
- Evidence over implication
- Local-first when correct

Link to `/principles`.

## 8. Footer

Minimal V1 footer:

- Proof
- Ecosystem
- Products
- Principles
- copyright/year if desired

No private GitHub links or infrastructure endpoints.

---

# Ecosystem — `/ecosystem`

Purpose: explain how responsibility is divided and why.

## Recommended sequence

### A. One ecosystem, separate authority

Explain that integration does not mean one monolithic service owns everything.

### B. Build path

```text
Source
  ↓
Proof Deploy
  ↓
Proof Cloud
  ↓
Proof Core
```

Explain each handoff in plain language.

### C. Optional services

Show Proof Base attaching only where relational backend capability is actually required.

### D. Operator surfaces

Explain:

- Proof Control observes the ecosystem as a whole.
- Proof Cloud App focuses on Cloud.
- neither UI replaces the underlying product authority.

### E. Applications choose what they need

Use Quote / Room / Flow comparison to show three different architecture fits.

### F. Portability / ownership

Explain ordinary Git, PostgreSQL when needed, SQLite when correct, exportable data/artifacts, replaceable underlying providers/components where practical.

---

# Products — `/products`

Purpose: directory after the visitor understands the ecosystem.

## Group 1 — Platform

### Proof Deploy
Subtitle: Build and release authority

### Proof Cloud
Subtitle: Runtime and hosting

### Proof Core
Subtitle: Owned compute foundation

### Proof Base
Subtitle: Optional structured data services

## Group 2 — Operations

### Proof Control
Subtitle: Ecosystem operations and observability

### Proof Cloud App
Subtitle: Cloud owner console

## Group 3 — Applications

### Proof Quote
Subtitle: Manufacturing estimating and quoting

### Proof Flow
Subtitle: Shop-floor process analysis

### Proof Room
Subtitle: Local photography workflow assistant

## Group 4 — Concepts

### Proof OS
Subtitle: Shop-floor proof and sign-off concept

Use a visible `Concept` treatment so it cannot be mistaken for a shipping product.

### Card content rules

Each product card should include only:

- name;
- category;
- durable one-sentence purpose;
- 2–4 durable capability ideas;
- optional link to relevant site section/detail only when that page exists.

Do not show internal gate status, hashes, private repo links, issue counts, or fake availability badges.

---

# Principles — `/principles`

## 1. Owner-first

Proof is built to reduce real friction in building/operating owned applications. Commercialization is optional future work, not the current architecture driver.

## 2. Modular, not mandatory

An app uses only the layers it needs. Base is optional. Local-first is valid. Stateless is valid.

## 3. Portable by design

Use ordinary source control, standard PostgreSQL exports when relational data is used, SQLite where appropriate, inspectable/exportable release and object data where practical.

## 4. Evidence over implication

Exact source, release, runtime, health, and recovery identity matter. Unknown state remains unknown rather than being painted green.

For public language, explain this principle without exposing internal audit mechanics.

## 5. Local-first when correct

Owned/local infrastructure is valuable where it solves the real problem, but Proof should not self-host something merely for ideological purity.

## 6. Proven components underneath

Proof integrates proven technologies behind understandable boundaries instead of reinventing databases, filesystems, cryptography, or global networks for branding.

---

# V1 content intentionally omitted

- live project/runtime status;
- roadmap timeline with internal gate states;
- account/auth/signup;
- pricing/plans;
- contact/sales forms;
- public docs portal;
- changelog/blog;
- testimonials;
- customer logos;
- downloads/installers;
- public operator dashboard;
- product detail routes for every product;
- claims of commercial availability.

These can be promoted later when a real public need exists.

---

# Responsive behavior

## Desktop

Use the ecosystem relationship visual prominently and allow richer product grouping.

## Tablet

Preserve the architecture relationships without requiring horizontal scrolling; this is an important first-class target.

## Phone

Convert relationship diagrams into readable stacked sequences with arrows/labels. Never depend on color alone to communicate category/status/relationship.

---

# Content voice

- confident but not inflated;
- plain language before infrastructure jargon;
- no fake enterprise marketing language;
- no claims that a concept is already a service;
- explain ownership as practical control/recovery/portability, not slogans alone;
- show real applications as proof of the architecture.

The website should feel like the public explanation of a system that is actually being built, not a pitch deck for a hypothetical startup.