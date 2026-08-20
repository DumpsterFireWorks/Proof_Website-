# Proof Website

Public-facing website for the **whole Proof ecosystem**.

The website explains how Proof’s platform, operations surfaces, and real applications fit together without turning the website into infrastructure authority or exposing private operational detail.

## Ecosystem model

### Platform

- **Proof Deploy** — exact source/build/release/promotion/rollback authority
- **Proof Cloud** — runtime, hosting, routes, health, and recovery boundaries
- **Proof Core** — owned host/compute/security/recovery foundation
- **Proof Base** — optional structured relational/backend data services

### Operations

- **Proof Control** — ecosystem-wide operations and observability surface
- **Proof Cloud App** — focused owner-facing Cloud experience

### Applications

- **Proof Quote** — manufacturing estimating and quoting
- **Proof Flow** — controlled shop-floor forms → verified data → deterministic analytics/reports
- **Proof Room** — local/self-hosted photography workflow assistant

### Concepts

- **Proof OS** — preserved shop-floor proof/sign-off concept

## Public story

Proof is owner-first, modular, optional, portable, and evidence-driven.

Applications use only the layers they actually need. Quote, Room, and Flow deliberately demonstrate different architecture fits rather than forcing every application through the entire stack.

## Start here

1. `START_HERE.md`
2. `PROJECT_SCOPE.md`
3. `CURRENT.md`
4. `ECOSYSTEM_CONTENT_MAP.md`
5. `SITE_INFORMATION_ARCHITECTURE.md`
6. `REFERENCE_IMAGES.md`

## Owner visual references

Five PNG reference images are already committed on `main`. They must be inspected locally before first implementation and preserved unchanged.

## Local development

The W1 site is a static-first Vite project with no backend, accounts, forms, analytics, or external runtime content dependencies.

```text
npm ci
npm run dev
npm run verify
```

`npm run verify` type-checks the site, validates the four-route content and public-safety contract, proves the owner reference files are unchanged, builds the production artifact, and checks the resulting output.

## Current state

W1 implements the four-route public ecosystem website as a review artifact. `robots.txt` prevents indexing and no production DNS/domain/hosting change is authorized by this milestone.
