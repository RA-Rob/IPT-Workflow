---
title: "IPT Workflow Branding"
aliases: [ipt-framework-rename, ipt-naming]
tags: [ipt, branding, naming, documentation]
sources:
  - "daily/2026-08-11.md"
created: 2026-08-18
updated: 2026-08-18
---

# IPT Workflow Branding

The project was renamed from "IPT Framework" to "IPT Workflow" in documentation files, with the rename deliberately scoped to self-references only — external framework names (e.g., NIST RMF) were left unchanged.

## Key Points
- All self-references changed from "IPT Framework" → "IPT Workflow" in `README.md` and `EXECUTIVE-SUMMARY.md`.
- External framework references (NIST RMF and others) were explicitly left untouched — the rename applies only to how this project refers to itself.
- The local directory (`/Users/rweiss/git/IPT-Framework`) and a remote bundle (`IPTFramework.bundle`) still use the old name; both are safe to rename with `mv` from a fresh shell because hooks now use `$CLAUDE_PROJECT_DIR` instead of hardcoded paths.
- The term "model" appears throughout `docs/` as an alternative to "workflow"; a terminology consistency pass (replacing "model" with "workflow") was flagged as optional.
- The GitHub Pages site was published as part of this same branding cleanup effort.

## Details

The rename from "Framework" to "Workflow" reflects a semantic distinction: "framework" implies a heavyweight, prescriptive structure, while "workflow" signals a lighter, team-adopted process. The change was applied to all first-party documentation but explicitly excluded third-party framework names to avoid confusion about external references.

The hook portability improvement (`$CLAUDE_PROJECT_DIR` instead of hardcoded absolute paths) was a prerequisite for the local directory rename — prior to that change, renaming the directory would have broken hook invocations. With `$CLAUDE_PROJECT_DIR` in place, the hook commands resolve dynamically and the directory can be safely renamed.

A contributing-section inconsistency was also discovered during this pass: the changelog instruction in the Contributing section pointed at a changelog stub that exists only in `templates/ipt-charter-template.md`. The six `docs/` files do not have changelog sections, making the instruction misleading. Adding changelog stubs to `docs/` files was flagged as an optional follow-up.

## Related Concepts
- [[concepts/jekyll-github-pages-setup]] — The Pages site was built and published during this same branding effort
- [[concepts/github-pages-privacy-tradeoffs]] — Publishing the renamed docs raised the question of repo visibility

## Sources
- [[daily/2026-08-11.md]] — Rename scope decision, `$CLAUDE_PROJECT_DIR` prerequisite, contributing-section inconsistency, optional "model" → "workflow" pass
