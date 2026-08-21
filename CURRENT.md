# Current — Proof Website

**Status:** `W2 ACTIVE — CLOUDFLARE PRODUCTION LAUNCH`

**Canonical repository:** `DumpsterFireWorks/Proof_Website-`

## Accepted foundation

### W0 — COMPLETE

- Issue `#1` — CLOSED COMPLETE
- PR `#2` — MERGED
- accepted head `7537387c59bebf79a08acb2082d5c87828e72ab0`
- squash merge `1fd4804a0801c2790706f377c340609be31e911b`

### W1 — COMPLETE

**Gate:** `W1 — Public Proof Ecosystem Website V1`  
**Issue:** `#3 — CLOSED COMPLETE`  
**PR:** `#5 — MERGED`  
**Accepted head:** `b4a6fe0a7b22ea59096483c26e46123b3b141926`  
**Squash merge:** `636f3dafe3e1ad88e2c72f21f3fe7f3b99b0b08f`  
**Review-Control:** `PASS`

### W1.5 — COMPLETE

**Gate:** `W1.5 — Flagship visual system and Proof product-family integration`  
**Issue:** `#6 — CLOSED COMPLETE`  
**PR:** `#7 — MERGED`  
**Accepted head:** `86bc5bea427877fb110b3154e36f4d1c878ab988`  
**Squash merge:** `78ce2330b39dab909d0cbfc1104119b0b8a4c83a`  
**Review-Control:** `PASS`

Accepted W1.5 establishes the flagship Proof presentation while preserving W1 public truth:

- owner-approved circular P/check + wide `PROOF` product-family language;
- white-first flagship composition with deep Proof navy and electric blue signal treatment;
- progressive `SOURCE → DEPLOY → CLOUD → CORE` homepage story;
- Proof Base presented as optional structured data capability;
- Proof Stage product/application presentation;
- explicit `PLATFORM`, `OPERATIONS`, `APPLICATION`, and `CONCEPT` classifications;
- desktop, iPad/tablet, phone, and 404 browser evidence;
- reduced-motion, focus, touch-target, overflow, form, and external-request checks.

Exact-head GitHub Actions run `32517401117` completed successfully. All five original owner reference PNGs remain preserved unchanged.

## Active gate — W2

**Gate:** `W2 — Cloudflare production hosting and poweredbyproof.com activation`  
**Issue:** `#8 — OPEN`  
**State:** `ACTIVE / CONNECTION + PRODUCTION PREP`  
**Production domain:** `poweredbyproof.com`

## Locked W2 decisions

- Production hosting path: **Cloudflare Workers Static Assets**.
- Production source: **accepted GitHub `main` only**.
- Public canonical hostname: **`https://poweredbyproof.com`**.
- Prefer `www.poweredbyproof.com` → apex redirect if practical.
- Cloudflare-managed HTTPS/TLS.
- Proof Core remains private and is not the Website public origin.
- Cloudflare preview deployments may assist review but cannot become production authority.
- GitHub remains source of truth and the Website must remain portable away from Cloudflare.
- Successful W2 public launch authorizes replacing the temporary `robots.txt` crawl hold with normal public indexing.
- No analytics, tracking, cookies, forms, accounts, auth, payments, pricing, or commercialization work enters W2.

## Required sequence

1. Connect/authorize the owner Cloudflare account through the supported OAuth/plugin path.
2. If production-prep source changes are required, Codex creates one bounded W2 branch/draft PR from current `main` for only canonical/robots/sitemap/static-hosting compatibility work.
3. Review-Control audits and merges that exact prep head before production uses it.
4. Configure the Cloudflare Worker/static-assets project and production source policy.
5. Bind `poweredbyproof.com`, DNS, and HTTPS without changing unrelated zone records.
6. Verify the public site on `/`, `/ecosystem/`, `/products/`, `/principles/`, and 404 behavior at desktop/tablet/phone.
7. Record non-secret production configuration/evidence in GitHub and mark W2 complete.

## Authorized external mutations

Issue `#8` explicitly authorizes only the Cloudflare mutations necessary for this Website launch: supported account connection, Website Worker/static-assets project, intended domain/DNS/TLS binding, GitHub-backed production deployment from `main` when available, and optional `www` → apex redirect.

Do not modify unrelated Cloudflare zones/projects, email routing, Proof product repositories, private infrastructure, or W3 scope.

## Next valid action

`CONNECT CLOUDFLARE FOR W2; THEN PERFORM ONLY ISSUE #8 PRODUCTION PREP / HOSTING / DOMAIN PROOF.`

## Stop condition

After `https://poweredbyproof.com` is proven against the accepted production source, stop for Review-Control acceptance. Do not begin W3 automatically.