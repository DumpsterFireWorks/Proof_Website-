# Start Here — Proof Website

GitHub is the source of truth. Do not reconstruct website scope or Proof product state from old chats, memory, mockups, or assumptions.

Canonical repository: `DumpsterFireWorks/Proof_Website-`.

Read in this order:

1. `PROJECT_SCOPE.md`
2. `CURRENT.md`
3. active issue / PR / exact head
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

## Accepted visual foundation

W1.5 is complete and accepted. The five original owner PNGs remain preserved visual references, and the accepted flagship implementation uses the owner-approved Proof family language: circular P/check master mark, navy + electric blue, wide `PROOF` wordmark, subordinate product names, Proof Room transferable UI DNA, and Proof Infrastructure macro engineering/architecture language.

Do not redesign W1.5 during W2 except for the smallest source changes required for correct production hosting/canonical/indexing behavior.

## Current command

Follow `CURRENT.md` and Issue `#8` exactly.

The active gate is **W2 — Cloudflare production hosting and poweredbyproof.com activation**.

W2 authorizes only the production-launch path recorded in Issue #8:

- Cloudflare Workers Static Assets;
- accepted GitHub `main` as production source;
- `https://poweredbyproof.com` as canonical public hostname;
- Cloudflare HTTPS/TLS and intended Website DNS binding;
- public crawl/indexing activation at accepted launch;
- production smoke/evidence recording.

W2 does **not** authorize analytics/tracking/cookies, forms, accounts/auth, payments/pricing, email-routing changes, unrelated Cloudflare zone/project mutations, Proof Core exposure, changes to other Proof repositories, or W3 expansion.

Stop after W2 production proof and Review-Control acceptance. Do not automatically begin W3.