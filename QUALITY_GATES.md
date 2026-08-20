# Quality Gates — Proof Website

## Global rule

A polished screenshot is not enough. A gate passes only when content truth, browser behavior, accessibility, responsive layout, performance, and public-safety boundaries all hold on the exact reviewed head.

## Content quality

- Every durable product claim maps to `ECOSYSTEM_CONTENT_MAP.md` or an explicit owner decision.
- Current accepted product truth wins over stale historical gate text.
- Concepts/unimplemented capabilities are labeled honestly.
- Product roles remain distinct.
- No private operational evidence enters public output.

## Information architecture

- Home answers what Proof is before requiring product-name knowledge.
- Ecosystem explains responsibility and modularity.
- Products are grouped by platform / operations / applications / concepts.
- Principles explain why the architecture is shaped this way.
- Navigation is shallow and predictable.

## Visual/design quality

- Owner reference images were inspected locally before W1 visual design.
- Resulting system has deliberate typography, spacing, shape, diagram, and brand language.
- Meaning is not color-only.
- No generic stock imagery or gratuitous SaaS dashboard chrome substitutes for the Proof story.
- Reference originals remain unchanged.

## Responsive quality

- Desktop: full ecosystem relationship is easy to scan.
- Tablet/iPad: first-class layout, not merely shrunken desktop.
- Phone: diagrams become readable stacked relationships rather than horizontal overflow.
- No clipped text, hidden navigation, broken cards, or unusable touch targets.

## Accessibility

- semantic headings/landmarks;
- keyboard navigation and visible focus;
- sufficient contrast;
- meaningful alt text where imagery conveys content;
- decorative imagery not announced unnecessarily;
- status/category meaning includes text/structure, not only color/icon;
- reduced-motion preferences respected when motion exists.

## Technical quality

- deterministic lint/type/build checks appropriate to chosen stack;
- no unnecessary runtime dependencies;
- no secrets in source/build output;
- route/broken-link validation;
- no console errors on primary routes;
- no accidental external/private asset fetches;
- reasonable production bundle/page performance;
- SEO title/description/canonical/social metadata as appropriate;
- sitemap/robots behavior appropriate to W1 preview/public state.

## Privacy/security

- no analytics/tracking/cookies in W1 unless separately owner-approved;
- no forms collecting personal data in W1;
- no private GitHub/private infrastructure links in rendered public content;
- no live operator/admin endpoints;
- no leaked image metadata/private screenshots/customer data.

## Production gate

W1 acceptance does not imply public-domain activation. Production hosting/domain changes require W2.