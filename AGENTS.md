# Agent Rules — Proof Website

## Authority

`PROJECT_SCOPE.md` defines the durable public product boundary.  
`CURRENT.md` defines the only active work.  
`ECOSYSTEM_CONTENT_MAP.md` defines researched product/content truth for public copy.  
`SITE_INFORMATION_ARCHITECTURE.md` defines V1 navigation/page structure.  
`REFERENCE_IMAGES.md` defines owner visual-reference handling.

If requested work exceeds the active gate, stop `BLOCKED` and identify the exact conflict.

## Website role

This repository owns public presentation only.

It must not become:

- Proof deployment authority;
- Proof Cloud/runtime authority;
- Proof Core/host authority;
- Proof Base/data authority;
- Proof Control operations authority;
- a public admin dashboard;
- a source of live infrastructure state.

## Content rules

- Use canonical Proof repos as source truth.
- Prefer durable product purpose over fast-changing internal gate status.
- Do not publish private repository links, private infrastructure/security evidence, hashes, credentials, host/network details, or internal operator commands.
- Do not market unimplemented/parked capabilities as available.
- Proof OS must be visibly treated as a concept unless owner direction changes.
- Proof Base must not be described as production-ready or mandatory.
- Proof Control and Proof Cloud App must remain distinct in copy.

## Design rules

- Inspect all five owner reference PNGs locally before W1 visual implementation.
- Preserve original reference files unchanged.
- Build one coherent Proof visual system across all pages.
- Meaning may not depend on color alone.
- Desktop, iPad/tablet, and phone are first-class targets.
- Prefer strong composition, typography, diagrams, and real product language over generic stock-SaaS styling.

## Engineering rules

Follow `Chris-Web-Standard` principles:

- content/visitor path before framework cleverness;
- static/content-first unless a real need earns more;
- no backend/auth/CMS/database/analytics by convenience;
- performance, accessibility, SEO/share metadata, responsive behavior, and broken-route handling are required quality;
- one bounded implementation PR per active gate;
- no production-domain/DNS/hosting mutation without separate owner authority.

## Stop condition

Codex stops `AWAITING_REVIEW` after the active gate implementation and deterministic/browser validation.

Codex does not merge, choose the next gate, broaden public claims, or publish the site to production on its own.