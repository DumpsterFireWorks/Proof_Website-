# Current — Proof Website

**Status:** `ACTIVE — OWNER HOLD LIFTED 2026-09-20`

**Canonical repository:** `DumpsterFireWorks/Proof_Website-`
**Production domain:** `https://poweredbyproof.com`

## Owner hold lifted — 2026-09-20

The `Owner development hold — 2026-09-12` is **LIFTED** by explicit owner instruction. Development of the Proof Website may resume.

The superseded hold paused this project to prioritise ChatBack, ChatBack-Model and Cynthia. That pause no longer applies to this repository. The cross-repo portfolio record at `DumpsterFireWorks/Repo-Index-on-GitHub/OWNER_PROJECT_PRIORITIES_2026-09-12.md` still describes the older state and is a separate pending update.

Preservation rules carried forward from the hold, unchanged: no archiving, deletion, decommissioning or service shutdown. Proof and ChatBack share a server; shared runtime foundations and potential future Proof Cloud integration are preserved. Lifting this hold authorises no host, storage, backup, network, tunnel, credential or recovery change.

## Deploy path change — 2026-09-20

Production deployment moves off the Cloudflare Git integration to direct `wrangler deploy` from the owner's working copy. Recorded in `DECISIONS.md`.

**Pending owner action:** disconnect the Cloudflare Git integration for the `proof-website` Worker in the Cloudflare dashboard. Until that is done there are two publishers for one Worker, and a push to `main` can rebuild and overwrite a direct deploy.

**Deploy command (owner machine, Windows):** `npm run build` then `npx wrangler deploy`.

Assistant shells cannot perform the deploy: the egress proxy denies `api.cloudflare.com:443` (gateway `403` on `CONNECT`) from both the local device VM and the cloud container. Source edits, builds and post-deploy verification are unaffected.

---

## Preserved project record

The record below is accepted history and remains true. Its pre-hold next-action wording is superseded by the `Next valid action` at the end of this file.

### Accepted state at hold — W2 COMPLETE, PRODUCTION LIVE

**Canonical repository:** `DumpsterFireWorks/Proof_Website-`  
**Production domain:** `https://poweredbyproof.com`

## Completed gates

### W0 — COMPLETE

- Issue `#1` — CLOSED COMPLETE
- PR `#2` — MERGED
- accepted head `7537387c59bebf79a08acb2082d5c87828e72ab0`
- squash merge `1fd4804a0801c2790706f377c340609be31e911b`

### W1 — COMPLETE

- Issue `#3` — CLOSED COMPLETE
- PR `#5` — MERGED
- accepted head `b4a6fe0a7b22ea59096483c26e46123b3b141926`
- squash merge `636f3dafe3e1ad88e2c72f21f3fe7f3b99b0b08f`
- Review-Control — PASS

### W1.5 — COMPLETE

- Issue `#6` — CLOSED COMPLETE
- PR `#7` — MERGED
- accepted head `86bc5bea427877fb110b3154e36f4d1c878ab988`
- squash merge `78ce2330b39dab909d0cbfc1104119b0b8a4c83a`
- Review-Control — PASS

### W2 — COMPLETE

**Gate:** `W2 — Cloudflare production hosting and poweredbyproof.com activation`  
**Issue:** `#8 — CLOSED COMPLETE`  
**Hosting:** Cloudflare Workers Static Assets  
**Production source authority:** accepted GitHub `main`

Accepted W2 prep:

- PR `#9` — MERGED
- prep head `b3a0b070419b30b132df890fea46629a9117cd48`
- squash merge `bf702268c61399477276079dbfc8e6c2d7191fff`
- CI `32566773298` — SUCCESS

Accepted final flagship / brand implementation:

- PR `#12` — MERGED
- exact accepted head `c6fb730b59bb72206ecd41661d41ea8a8136e154`
- squash merge `447ce2ba4c7446ee6ba96f6769f9055f9b49a1bb`
- W2 site / Cloudflare dry-run CI `32589179629` — PASS
- responsive visual QA `32589179620` — PASS

Production activation / reconnect:

- Cloudflare Worker/project: `proof-website`
- Git repository: `DumpsterFireWorks/Proof_Website-`
- production branch: `main`
- build command: `npm run build`
- deploy command: `npx wrangler deploy`
- custom domain: `poweredbyproof.com`
- Cloudflare-managed HTTPS/TLS
- Cloudflare Git authorization was repaired by the owner and the Website repository was re-selected
- fresh accepted-main deployment trigger: `6f359c944cb0aad505284f33d082bd149d99dd1d`

Production evidence: `evidence/w2/PRODUCTION_ACCEPTANCE.md`

## Production truth

- `https://poweredbyproof.com` is live with the accepted flagship presentation.
- GitHub `main` is the production source of truth.
- Cloudflare builds/deploys the Website from `main`.
- Proof Core remains private and is not the public Website origin.
- The public site contains no analytics, tracking, cookies, forms, accounts, auth, payments, pricing, or backend runtime.
- The approved Proof master identity, all ten official product identities, and approved ecosystem hero are implemented.

## Parked next gate

### W3 — Product detail / docs expansion

**State:** `PARKED — NOT AUTHORIZED`

Possible later work includes product detail pages, public documentation, real screenshots/demos, changelog/news, downloads, and contact/community paths.

Do not begin W3 automatically.

## Next valid action

`CONTINUE — HOLD LIFTED. W2 REMAINS COMPLETE AND PRODUCTION LIVE. AWAIT OWNER SCOPE FOR THE NEXT WEBSITE CHANGE. DISCONNECT THE CLOUDFLARE GIT INTEGRATION BEFORE THE FIRST DIRECT WRANGLER DEPLOY. W3 IS STILL PARKED AND NOT AUTHORISED.`
