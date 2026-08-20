# Start Here — Proof Website

GitHub is the source of truth. Do not reconstruct website scope or Proof product state from old chats, memory, mockups, or assumptions.

Canonical repository: `DumpsterFireWorks/Proof_Website-`.

Read in this order:

1. `PROJECT_SCOPE.md`
2. `CURRENT.md`
3. `ECOSYSTEM_CONTENT_MAP.md`
4. `SITE_INFORMATION_ARCHITECTURE.md`
5. `REFERENCE_IMAGES.md`
6. `DECISIONS.md`
7. `MILESTONES.md`
8. `OPERATOR_PROTOCOL.md`
9. `AUDIT_PROCESS.md`
10. `QUALITY_GATES.md`
11. `AGENTS.md`
12. `BACKLOG.md`
13. active issue / PR / exact head

## Source hierarchy

- `Proof_Infrastructure` owns cross-product architecture and durable owner-first direction.
- Each Proof product repository owns its implementation/product truth.
- This website owns only public presentation.

When source documents disagree, do not silently choose the more exciting claim. Prefer current accepted state and record the conflict for Review-Control.

## Public-safety rule

Never copy internal technical detail into public content merely because it exists in GitHub. Follow the public-safe boundary in `PROJECT_SCOPE.md` and `ECOSYSTEM_CONTENT_MAP.md`.

## Reference-image rule

The five PNGs committed by the owner are visual references. Codex must inspect them locally before implementing W1. Do not delete or alter the originals.

## Current command

Follow `CURRENT.md` exactly. W0 is planning/bootstrap and does not authorize website implementation or production publication.