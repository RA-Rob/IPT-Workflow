---
title: "Q: What's the GitHub Free vs. paid plan tradeoff for Pages?"
question: "What's the GitHub Free vs. paid plan tradeoff for GitHub Pages?"
consulted:
  - "concepts/github-pages-privacy-tradeoffs"
  - "concepts/jekyll-github-pages-setup"
sources:
  - "daily/2026-08-11.md"
filed: 2026-08-18
---

# Q: What's the GitHub Free vs. paid plan tradeoff for GitHub Pages?

## Answer

**Free plan:** GitHub Pages can only be enabled on **public** repositories. Making a repo public exposes all its content to the internet — including any executive summaries, open questions, and security posture material it contains.

**Pro / Team / Enterprise:** Pages can be served from **private** repositories, keeping content access-controlled. The tradeoff is cost (Pro starts at a fixed monthly per-user fee).

For the IPT Workflow repo specifically, the executive summary, open questions list, and security posture content are sensitive enough that publishing via the Free plan (public repo) would be inappropriate. The action item before enabling Pages is to confirm the current GitHub plan tier.

See [[concepts/github-pages-privacy-tradeoffs]] for the full breakdown.

## Sources Consulted
- [[concepts/github-pages-privacy-tradeoffs]] — Privacy implications by plan tier
- [[concepts/jekyll-github-pages-setup]] — What would be published if Pages were enabled

## Follow-Up Questions
- Is there a way to password-protect a GitHub Pages site without upgrading to a paid plan? (Short answer: not natively — third-party services like Netlify or Cloudflare Access can add auth in front of a Pages site)
- If the repo goes public, which specific files are the most sensitive and should be removed or redacted first?
