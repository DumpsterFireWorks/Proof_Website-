# Current — Proof Website

**Status:** `W2 ACTIVE — PRODUCTION ACTIVATION AUTHORIZED`

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

## Active gate — W2

**Gate:** `W2 — Cloudflare production hosting and poweredbyproof.com activation`  
**Issue:** `#8 — OPEN`  
**State:** `PRODUCTION ACTIVATION AUTHORIZED`  
**Production domain:** `poweredbyproof.com`

### Accepted W2 production prep

- PR `#9 — MERGED`
- prep head `b3a0b070419b30b132df890fea46629a9117cd48`
- squash merge / accepted production-source main head `bf702268c61399477276079dbfc8e6c2d7191fff`
- exact-head CI run `32566773298` — SUCCESS
- Review-Control — PASS

Accepted prep provides:

- Cloudflare Workers Static Assets configuration targeting deterministic `dist`;
- trailing-slash handling for accepted content routes;
- custom `404.html` served with HTTP 404;
- canonical/Open Graph production URLs for `https://poweredbyproof.com`;
- public `robots.txt` and four-route sitemap;
- pinned Wrangler dry-run validation in CI.

The pre-existing Vite `7.1.3` dev-server audit advisories are recorded as separate maintenance work and are not a W2 launch blocker. The production runtime is static Cloudflare assets, not a Vite dev server.

## Locked W2 decisions

- Production hosting path: **Cloudflare Workers Static Assets**.
- Production source: **accepted GitHub `main` only**.
- Public canonical hostname: **`https://poweredbyproof.com`**.
- Prefer `www.poweredbyproof.com` → apex redirect if practical.
- Cloudflare-managed HTTPS/TLS.
- Proof Core remains private and is not the Website public origin.
- GitHub remains source of truth and the Website must remain portable away from Cloudflare.
- No analytics, tracking, cookies, forms, accounts, auth, payments, pricing, or commercialization work enters W2.

## Cloudflare authority confirmed

Read-only Cloudflare MCP inspection confirmed `poweredbyproof.com` is present and active in the authorized account. No Cloudflare mutation occurred during that inspection.

## Authorized production activation

Codex may now use the connected Cloudflare MCP / Wrangler path to perform only Issue `#8` production activation:

1. refresh to accepted current `main` and verify production source identity;
2. run deterministic production verification from that accepted source;
3. create/configure the minimum `proof-website` Workers Static Assets deployment needed by `wrangler.jsonc`;
4. deploy only the accepted `main` artifact;
5. bind `poweredbyproof.com` to that Website deployment with Cloudflare-managed HTTPS/TLS;
6. configure `www.poweredbyproof.com` → apex redirect only if it can be done cleanly without unrelated DNS mutation;
7. do not alter unrelated zones, projects, email routing, Proof Core, or any other Proof repository;
8. publicly verify `/`, `/ecosystem/`, `/products/`, `/principles/`, `/robots.txt`, `/sitemap.xml`, HTTPS, and unknown-route HTTP 404 behavior;
9. record non-secret deployment identity/configuration and verification evidence in GitHub;
10. stop `AWAITING_REVIEW` after production proof. Do not begin W3.

## Next valid action

`CONTINUE — W2 PRODUCTION ACTIVATION ONLY; DEPLOY ACCEPTED MAIN THROUGH CLOUDFLARE WORKERS STATIC ASSETS, BIND POWEREDBYPROOF.COM, VERIFY PUBLIC PRODUCTION, RECORD NON-SECRET EVIDENCE, STOP AWAITING_REVIEW.`

## Hard rule

No source redesign or unrelated website feature work is authorized during activation. If deployment requires a new source change, stop `BLOCKED` and return to Review-Control before changing production source.