---
title: "Jekyll GitHub Pages Setup"
aliases: [jekyll-pages, github-pages-jekyll]
tags: [jekyll, github-pages, documentation, markdown]
sources:
  - "daily/2026-08-11.md"
created: 2026-08-18
updated: 2026-08-18
---

# Jekyll GitHub Pages Setup

The IPT Workflow documentation site is built with Jekyll on GitHub Pages, using three GitHub Pages default plugins that allow source files to remain plain Markdown with no front matter required.

## Key Points
- Three plugins handle metadata automatically: `jekyll-optional-front-matter`, `jekyll-titles-from-headings`, and `jekyll-relative-links`.
- Navigation order and page metadata are centralized in `_data/nav.yml` — single source of truth for both the sidebar and prev/next links.
- Cross-references between docs must use real relative links (not backtick-quoted filenames) to work on both GitHub and the Pages site.
- If the build ever moves from GitHub Pages' built-in Jekyll to GitHub Actions, all three plugins must be declared explicitly or titles and cross-links break.
- The RACI table in `docs/03` was identified as the most likely layout problem on CSS rendering.

## Details

The site deliberately avoids requiring front matter in source documents by relying on `jekyll-optional-front-matter` (tolerates absent front matter), `jekyll-titles-from-headings` (infers page title from the first H1), and `jekyll-relative-links` (converts relative Markdown links to correct site URLs). These are all GitHub Pages defaults — no gemfile changes needed.

Navigation is driven by `_data/nav.yml` rather than inferred from the file system. This gives control over page order and display names in one place, which matters for a structured multi-doc framework where sequencing is meaningful (phases, gates, etc.).

A previous state had 15 cross-references written as backticked filenames (e.g., `` `docs/02-discovery.md` ``). These are inert on a rendered Pages site; they were converted to real relative Markdown links so they function on both github.com and the hosted Pages URL.

## Related Concepts
- [[concepts/github-pages-privacy-tradeoffs]] — Whether Pages can be enabled depends on repo visibility and plan
- [[concepts/jekyll-liquid-template-caching]] — A Liquid caching bug affected the prev/next nav generated from `nav.yml`
- [[concepts/ipt-workflow-branding]] — The site was published as part of a broader naming and branding cleanup

## Sources
- [[daily/2026-08-11.md]] — Jekyll plugin choices, `nav.yml` pattern, backtick-to-link conversion, GitHub Actions migration warning
