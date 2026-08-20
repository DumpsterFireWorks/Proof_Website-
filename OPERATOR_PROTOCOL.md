# Operator Protocol — Proof Website

## Operating model

- Owner decides public brand direction, material messaging, public release, domain/hosting, money, privacy/tracking, and commercialization claims.
- Review-Control owns scope, sequencing, researched content truth, exact-head review, routine accepted merges, and gate advancement inside approved direction.
- Codex implements one bounded active gate and stops `AWAITING_REVIEW`.
- GitHub records public-site scope, decisions, evidence, and accepted implementation.

## Standard loop

1. Read `START_HERE.md` and `CURRENT.md`.
2. Work only the active issue/gate.
3. Codex opens one focused draft PR.
4. Codex validates locally/deterministically and with browser evidence appropriate to the gate.
5. Codex stops `AWAITING_REVIEW`.
6. Review-Control audits exact head for content truth, visitor flow, design fidelity, responsive behavior, accessibility, performance, SEO/share behavior, and public-safety boundaries.
7. Repair findings use the same PR/head lineage.
8. Review-Control merges accepted work and promotes the next bounded gate only inside owner-approved direction.

## Owner escalation

Stop for owner direction before:

- changing the approved brand direction materially;
- publishing/changing a production domain;
- paid hosting/services;
- adding analytics/tracking/cookies;
- adding forms that collect personal data;
- accounts/auth;
- commercial pricing/waitlist/sales claims;
- publishing private screenshots/data;
- representing a concept/unimplemented product as available;
- changing the public product hierarchy materially.

## Website-specific truth rule

A public statement must have a durable source in the canonical Proof repos or an explicit owner decision.

When product docs conflict, do not average them together. Prefer current accepted state and note the conflict for Review-Control.

## Current W0 rule

W0 is bootstrap/research only. It does not authorize site implementation or public hosting.

After W0 acceptance, Review-Control may promote W1 from the already-approved owner direction to build the V1 website.