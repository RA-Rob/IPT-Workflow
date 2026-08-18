---
title: "Q: Why were cross-references left as backticked filenames?"
question: "Why were 15 cross-references left as backticked filenames instead of real links?"
consulted:
  - "concepts/jekyll-github-pages-setup"
sources:
  - "daily/2026-08-11.md"
filed: 2026-08-18
---

# Q: Why were cross-references left as backticked filenames?

## Answer

They were inert but not broken on GitHub.com — a backtick-quoted filename like `` `docs/02-discovery.md` `` renders as inline code, which is visually distinct but not a hyperlink. On a rendered GitHub Pages site the same pattern is also inert: it doesn't resolve to a clickable URL.

Because they weren't causing errors, they accumulated unnoticed. The 15 instances were converted to real relative Markdown links so they work as actual navigation on both GitHub.com (where relative links resolve to repo files) and the hosted Pages site (where `jekyll-relative-links` converts them to correct page URLs).

The lesson: backtick filenames pass casual review because they look intentional, but they silently degrade cross-reference usability on any rendered output.

## Sources Consulted
- [[concepts/jekyll-github-pages-setup]] — `jekyll-relative-links` plugin that makes relative links work on Pages; the conversion work itself

## Follow-Up Questions
- Is there a linting rule or CI check that could catch backtick filenames that should be links?
- After conversion, were any of the 15 links pointing to files that don't exist (broken links)?
