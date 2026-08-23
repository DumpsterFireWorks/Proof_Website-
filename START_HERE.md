# Start Here — Proof Website

GitHub is the source of truth. Do not reconstruct website scope or Proof product state from old chats, memory, mockups, or assumptions.

Canonical repository: `DumpsterFireWorks/Proof_Website-`.

Read in this order:

1. `PROJECT_SCOPE.md`
2. `CURRENT.md`
3. active issue / PR / exact head, if one exists
4. `ECOSYSTEM_CONTENT_MAP.md`
5. `SITE_INFORMATION_ARCHITECTURE.md`
6. `REFERENCE_IMAGES.md`
7. `DECISIONS.md`
8. `MILESTONES.md`
9. `OPERATOR_PROTOCOL.md`
10. `AUDIT_PROCESS.md`
11. `QUALITY_GATES.md`
12. `AGENTS.md`
13. `BACKLOG.md`

## Source hierarchy

- `Proof_Infrastructure` owns cross-product architecture and durable owner-first direction.
- Each Proof product repository owns its implementation/product truth.
- This website owns only public presentation.

When source documents disagree, do not silently choose the more exciting claim. Prefer current accepted state and record the conflict for Review-Control.

## Public-safety rule

Never copy internal technical detail into public content merely because it exists in GitHub. Follow the public-safe boundary in `PROJECT_SCOPE.md` and `ECOSYSTEM_CONTENT_MAP.md`.

## Accepted visual / brand foundation

The production Website now uses the owner-approved Proof brand package as the canonical public presentation:

- master `PROOF` identity only;
- official product-family logos for Deploy, Room, Cloud, Core, Base, Control, Cloud App, Quote, Flow, and OS;
- navy + electric-blue precision language;
- approved ecosystem hero centered on `SOURCE → DEPLOY → CLOUD → CORE`, with optional Base and Control as ecosystem visibility;
- browser-safe display derivatives generated from the canonical product artwork while preserving the owner originals unchanged.

Canonical brand files live under `public/brand/`. Historical Infrastructure artwork is retained under `references/brand/` and must not be treated as automatic current website copy.

## Production state

**W2 is COMPLETE.**

- Issue `#8` — CLOSED COMPLETE
- production domain: `https://poweredbyproof.com`
- hosting: Cloudflare Workers Static Assets
- production source authority: GitHub `main`
- final accepted flagship merge: `447ce2ba4c7446ee6ba96f6769f9055f9b49a1bb`
- post-reconnect production trigger: `6f359c944cb0aad505284f33d082bd149d99dd1d`
- production evidence: `evidence/w2/PRODUCTION_ACCEPTANCE.md`

Cloudflare Git authorization was repaired during launch and the Website repository was explicitly re-selected. GitHub remains the source of truth; Cloudflare is the replaceable hosting layer.

## Current command

Follow `CURRENT.md`.

There is **no active implementation gate** after W2 closeout.

W3 — product detail / docs expansion — is **PARKED / NOT AUTHORIZED**.

Do not automatically begin product pages, docs expansion, screenshots/demos, changelog/news, downloads, contact/community work, analytics/tracking, forms, auth, pricing, or other new Website scope.

Wait for explicit owner direction before promoting the next gate.
