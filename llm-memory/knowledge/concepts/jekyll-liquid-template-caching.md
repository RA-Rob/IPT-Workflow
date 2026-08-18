---
title: "Jekyll Liquid Template Caching Bug"
aliases: [liquid-caching, jekyll-assign-persistence]
tags: [jekyll, liquid, debugging, templates]
sources:
  - "daily/2026-08-11.md"
created: 2026-08-18
updated: 2026-08-18
---

# Jekyll Liquid Template Caching Bug

When Jekyll reuses a cached template object across multiple pages, Liquid `assign` variables persist between renders, causing values set during one page's render to bleed into the next page's render.

## Key Points
- Liquid `assign` tags set variables on the template object; if Jekyll reuses that object across pages, the values are not reset between renders.
- The symptom was a bad "Next" link appearing on the last page of a paginated nav — a variable intended to be unset was carrying a stale value from the previous page.
- The fix is to explicitly reset affected variables (e.g., `prevpage`/`nextpage`) to `false` **before** the loop that might set them.
- This is a Jekyll/Liquid interaction quirk, not a bug in the site's content or `nav.yml` data.
- The issue surfaces only when template caching is active, so it may not reproduce in all environments.

## Details

In the IPT Workflow Pages site, the sidebar and prev/next navigation are driven by a Liquid loop over `_data/nav.yml`. The loop sets `prevpage` and `nextpage` variables based on the current page's position in the nav list. On the last page, `nextpage` should be unset (falsy), but when Jekyll reused the template object from a previous page render, the prior `nextpage` value persisted, producing a stale "Next" link pointing at the wrong target.

The canonical fix is defensive initialization: add `{% assign prevpage = false %}{% assign nextpage = false %}` at the top of the loop block, before any conditional logic. This guarantees a clean state regardless of what the template object may carry from prior renders. This pattern should be applied to any Liquid template that conditionally sets variables used in navigation or UI state, whenever that template may be reused across page renders.

## Related Concepts
- [[concepts/jekyll-github-pages-setup]] — The broader Pages setup context in which this bug was found and fixed
- [[concepts/ipt-workflow-branding]] — The publishing effort that triggered discovery of this issue

## Sources
- [[daily/2026-08-11.md]] — Root cause (Liquid `assign` persistence on reused template object) and fix (reset to `false` before loop)
