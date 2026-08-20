# Audit Process — Proof Website

## Acceptance standard

A website gate is accepted only when the exact reviewed head is both technically sound and publicly truthful.

Review-Control audits four dimensions together:

1. content/source truth;
2. visitor flow and information architecture;
3. browser/design/responsive/accessibility quality;
4. implementation/build/performance/public-safety quality.

No single green check substitutes for the others.

## Required exact-head review

For implementation gates, verify:

- PR exact head has not changed during review;
- deterministic repository checks pass;
- production build succeeds;
- browser pages/routes render without console errors;
- desktop, iPad/tablet, and phone layouts are coherent;
- keyboard/focus/semantic accessibility is usable;
- text/diagram meaning does not depend on color alone;
- metadata/title/description/share basics are correct;
- broken/unknown routes fail cleanly;
- no private Proof details leaked into generated/static assets;
- claims match `ECOSYSTEM_CONTENT_MAP.md` and canonical current sources;
- owner reference images were actually inspected for W1 design direction;
- originals remain unchanged.

## Public-content review

Reject or repair copy that:

- describes internal gate state as public product availability;
- overstates Proof Base or Proof OS maturity;
- conflates Proof Control with the future authority/control-plane concept;
- conflates Proof Control with Proof Cloud App;
- implies every app needs every Proof layer;
- exposes private infrastructure/repository/security details;
- invents customer/market/pricing claims.

## Visual review

The final judgment is not “does it compile?”

Check:

- hierarchy is obvious;
- the ecosystem relationship is understandable before deep reading;
- product groups feel related but distinct;
- diagrams collapse gracefully on smaller screens;
- typography/spacing/shape language visibly reflect the owner references rather than generic framework defaults;
- screenshots/illustrations/assets are public-safe;
- content density remains readable.

## Audit route

Use deterministic checks + browser truth + Review-Control exact-head judgment.

No Claude / Anthropic audit path unless the owner explicitly requests one.

## Production boundary

A technically accepted W1 site remains a local/preview artifact until a separate W2 hosting/domain gate is explicitly authorized.