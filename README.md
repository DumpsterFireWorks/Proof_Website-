# Owner development hold — 2026-09-12

**ON HOLD — IMPORTANT ONGOING PROJECT — PLANNED TO RESUME — NO DATE SET.**

Chris explicitly paused development of this project to focus on ChatBack, ChatBack-Model and Cynthia. This is the current owner instruction and overrides older instructions below to continue, repair, audit, merge, deploy or advance. Preserve the unfinished gate, branches, PRs, code and research. Resume only on explicit owner instruction; no automatic restart.

This is a development hold only. It does not authorize archiving, deletion, decommissioning, service shutdown, deployment or infrastructure changes. Preserve running services and existing use. Proof and ChatBack share a server; preserve shared runtime foundations and potential future Proof Cloud integration. No host, storage, backup, network, tunnel, credential or recovery changes are authorized.

Full owner decision: [portfolio priorities and shared-server boundary](https://github.com/DumpsterFireWorks/Repo-Index-on-GitHub/blob/main/OWNER_PROJECT_PRIORITIES_2026-09-12.md).

---

## Preserved pre-hold project record

The original record below retains progress, evidence and restart context. Its prior next-action/active-work wording is suspended by the owner hold above.

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
