# Project Scope — Proof Website

## Product

**Name:** Proof Website  
**Canonical repository:** `DumpsterFireWorks/Proof_Website-`  
**Role:** public-facing explanation and presentation of the Proof ecosystem  
**Primary audience:** people trying to understand what Proof is, how its products fit together, and what has actually been built

## Problem

Proof now spans infrastructure products, operator surfaces, and real applications. The architecture is understandable inside GitHub, but a visitor should not have to read private repositories, gate documents, or infrastructure evidence to understand the system.

The website must explain the whole ecosystem clearly without becoming another source of technical authority or leaking private operational details.

## V1 outcome

A first-time visitor can quickly understand:

1. what Proof is trying to solve;
2. the difference between the platform, operator surfaces, and applications;
3. how Deploy, Cloud, Core, and Base fit together;
4. how Control and Cloud App present/operate the system without owning underlying truth;
5. how Quote, Flow, and Room prove that applications can use different subsets of Proof;
6. that Proof OS is a preserved concept rather than a falsely marketed available product;
7. the owner-first, modular, portable, evidence-driven philosophy behind the ecosystem.

## Public information layers

### Proof platform

- Proof Deploy
- Proof Cloud
- Proof Core
- Proof Base

### Proof operations

- Proof Control
- Proof Cloud App

### Proof applications

- Proof Quote
- Proof Flow
- Proof Room

### Proof concepts / labs

- Proof OS

### Architecture / governance

`Proof_Infrastructure` is a source for architecture and principles, not a public end-user product card.

The Proof Website is presentation only and is not part of the authority path.

## V1 pages

- `/` — ecosystem-first home page
- `/ecosystem` — how the pieces connect and why the architecture is modular
- `/products` — grouped product/application directory
- `/principles` — owner-first, modular/optional, portable, evidence-first, local-first-when-correct principles

Individual product detail pages, changelogs, live status, documentation portals, contact forms, waitlists, accounts, and dashboards are later gates unless deliberately promoted.

## Public-safe content boundary

Allowed:

- durable product purpose;
- durable architecture relationships;
- high-level examples of real Proof applications;
- owner-first philosophy;
- high-level maturity language when it will not immediately become stale;
- owner-provided brand/design references.

Forbidden unless separately approved:

- private LAN addresses, hostnames, machine identifiers, router details, exact firewall/kernel state, credentials, tokens, account/zone IDs, or private URLs;
- internal security/audit evidence and operational commands;
- private GitHub issue/PR links, private clone URLs, exact review hashes, or attendance authorization text;
- private customer/application data, real photographs, real forms, or source records;
- claims that parked/unimplemented features are available;
- commercial pricing, billing, SLAs, multi-tenancy, marketplace, or customer promises;
- live infrastructure mutation from the website;
- public admin/operator controls.

## Engineering direction

Follow `DumpsterFireWorks/Chris-Web-Standard`:

- visitor/content/action path first;
- obvious, fast, trustworthy, accessible, maintainable;
- static/content-first unless a real requirement earns more infrastructure;
- responsive desktop/tablet/mobile behavior;
- performance, SEO/share metadata, accessibility, route/error behavior, and privacy are V1 quality requirements;
- no heavy framework/backend/CMS/auth/analytics by default.

## Visual direction

The five PNG files already committed to this repository are owner-supplied design references. Codex must inspect them locally before proposing the V1 visual system. Preserve the original files unchanged.

The visual system should feel like one coherent Proof ecosystem, not separate microsites pasted together.

## Authority boundary

The website may summarize authoritative Proof state, but it cannot define it.

- Deploy remains source/build/release authority.
- Cloud remains runtime/hosting authority.
- Core remains host authority.
- Base remains optional structured backend/data-service authority when implemented.
- Control and Cloud App remain operator/presentation surfaces.
- applications remain authoritative for their own business behavior/data semantics.

## Scope-change rule

Only owner / Review-Control may materially change this public product boundary. New ideas go to `BACKLOG.md` until explicitly promoted.