---
title: "Q: Why does Jekyll cache cause a bad Next link on the last page?"
question: "Why does Jekyll cache cause a bad 'Next' link on the last page?"
consulted:
  - "concepts/jekyll-liquid-template-caching"
  - "concepts/jekyll-github-pages-setup"
sources:
  - "daily/2026-08-11.md"
filed: 2026-08-18
---

# Q: Why does Jekyll cache cause a bad "Next" link on the last page?

## Answer

Liquid `assign` variables are set on the template object itself. When Jekyll reuses (caches) a template object across multiple page renders, any `assign`ed variable from a prior render persists into the next render. For navigation logic that conditionally sets a `nextpage` variable, this means the last page — where `nextpage` should be falsy — instead carries the stale value from the previous page's render.

The fix is to explicitly reset the affected variables to `false` before the loop:

```liquid
{% assign prevpage = false %}
{% assign nextpage = false %}
{% for item in site.data.nav %}
  ...
{% endfor %}
```

This guarantees a clean state regardless of what the template object carried from prior renders. The pattern applies to any Liquid template that conditionally sets variables used in UI state when that template may be reused across page renders.

See [[concepts/jekyll-liquid-template-caching]] for full details on the root cause.

## Sources Consulted
- [[concepts/jekyll-liquid-template-caching]] — Root cause and canonical fix
- [[concepts/jekyll-github-pages-setup]] — Context: the IPT Workflow nav is driven by `_data/nav.yml` iterated in Liquid

## Follow-Up Questions
- Does this caching behavior change based on Jekyll version or build mode (`--watch` vs. single build)?
- Are there other Liquid variables in the nav template that need the same defensive reset?
