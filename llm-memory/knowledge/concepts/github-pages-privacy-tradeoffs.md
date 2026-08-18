---
title: "GitHub Pages Privacy Tradeoffs"
aliases: [pages-visibility, github-pages-private]
tags: [github-pages, privacy, github-plans, security]
sources:
  - "daily/2026-08-11.md"
created: 2026-08-18
updated: 2026-08-18
---

# GitHub Pages Privacy Tradeoffs

GitHub's Free plan requires a repository to be **public** to enable GitHub Pages. Paid plans (Pro, Team, Enterprise) allow Pages to be served from private repositories.

## Key Points
- **Free plan:** Pages requires a public repo. Making the repo public exposes all content — including executive summaries, open questions, and security posture material.
- **Pro/Team/Enterprise:** Pages can be served from private repos, keeping content access-controlled.
- The IPT Workflow repo contains sensitive material (exec summary, open questions, security posture) that is inappropriate for public exposure.
- The decision to enable Pages must be preceded by confirming the GitHub plan tier.
- Visibility of the repo and Pages are coupled on Free; decoupled on paid tiers.

## Details

For documentation repositories containing confidential or business-sensitive material, the Free plan's public-repo requirement for GitHub Pages creates a meaningful risk. Content that appears routine in a private repo — executive summaries, security frameworks, open questions about compliance — becomes publicly indexed once the repo goes public.

The IPT Workflow documentation was flagged specifically because the executive summary, open questions list, and security posture content would be exposed. The action item was to confirm the plan tier before enabling Pages, not to assume it would be safe. Pro plans start at a fixed monthly cost per user and are available to individual accounts; Team and Enterprise apply to organizations.

## Related Concepts
- [[concepts/jekyll-github-pages-setup]] — The site's technical configuration that would be published
- [[concepts/ipt-workflow-branding]] — The branding cleanup that accompanied the Pages publishing effort

## Sources
- [[daily/2026-08-11.md]] — Identified Free vs. Pro/Team/Enterprise distinction; flagged exec summary, open questions, and security posture as sensitive content
