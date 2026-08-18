---
title: "Q: What does lmc install actually do?"
question: "What does `lmc install` actually do?"
consulted:
  - "concepts/jekyll-github-pages-setup"
sources:
  - "daily/2026-08-11.md"
filed: 2026-08-18
---

# Q: What does lmc install actually do?

## Answer

`lmc install` clones the repo, runs `uv sync` to install dependencies, and writes a launcher script to `~/.local/bin/lmc`. It does **not** configure the knowledge base — that is `lmc init`'s job.

Critically, for a repo that already carries its own config and hooks (like the IPT Workflow repo), `lmc init` is not needed after install. The repo's existing `.llm-memory/config.json` and agent hook configuration are already in place; `lmc install` is sufficient to make the `lmc` command available globally.

The distinction: `lmc install` is a **machine-level** operation (run once per machine), while `lmc init` is a **knowledge-base-level** operation (run once when setting up a new KB from scratch).

## Sources Consulted
- [[daily/2026-08-11.md]] — Exchange clarifying that `lmc init` is unnecessary when the repo already carries its own config and hooks

## Follow-Up Questions
- When would you need to run `lmc init` again after initial setup? (e.g., switching agent, changing provider)
- What does the generated `~/.local/bin/lmc` launcher script contain?
