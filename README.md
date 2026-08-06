# IPT Framework

Red Alpha's standard way of turning a validated idea and its MVP into a shipped, secure, supportable software product — using small, durable, cross-functional **Integrated Product Teams (IPTs)**.

This repository is a **living, iterative knowledge base**, not a finished standard. It is meant to be read, argued with, and revised by the Red Alpha team. Once the ideas here stabilize through discussion, we pull them into other forms (decks, checklists, charters) without rewriting the underlying thinking.

> **Start here:** [`EXECUTIVE-SUMMARY.md`](./EXECUTIVE-SUMMARY.md) for the one-page overview, then the `docs/` folder for full detail.

---

## The core idea

The expensive mistake in software is *building the wrong thing well.* So the framework does two things, in order:

1. **Reduce uncertainty cheaply, before committing** — frame the outcome and validate the riskiest assumptions on paper or with a throwaway prototype.
2. **Then let a small, empowered team own delivery end to end** — in fixed-time cycles, with security designed in from day one.

Both come from studying how the best builders work: Amazon, Google Ventures, IDEO, Spotify, and Basecamp (see `docs/01`).

## Repository contents

| Path | What it covers |
|------|----------------|
| [`EXECUTIVE-SUMMARY.md`](./EXECUTIVE-SUMMARY.md) | One-page overview for leadership |
| [`docs/01-research-brief-incubator-methodologies.md`](./docs/01-research-brief-incubator-methodologies.md) | Baseline research: five top product/idea companies and why they succeed |
| [`docs/02-ipt-model-overview.md`](./docs/02-ipt-model-overview.md) | The Red Alpha idea-to-product model: philosophy, principles, when an IPT stands up |
| [`docs/03-team-structure-and-roles.md`](./docs/03-team-structure-and-roles.md) | The lean 4–7 person IPT: roles, multi-hat assignments, responsibilities (RACI) |
| [`docs/04-process-timeline-and-phases.md`](./docs/04-process-timeline-and-phases.md) | End-to-end timeline: four phases, four gates, artifacts, worked schedule |
| [`docs/05-security-and-compliance.md`](./docs/05-security-and-compliance.md) | Security-first / defense context: RMF, ATO/cATO, DevSecOps woven into the process |
| [`docs/06-glossary-and-references.md`](./docs/06-glossary-and-references.md) | Definitions and the full verified source list |
| [`templates/ipt-charter-template.md`](./templates/ipt-charter-template.md) | Fill-in charter for standing up an IPT at Gate 0 |
| [`templates/gate-review-checklist.md`](./templates/gate-review-checklist.md) | Entry/exit criteria and decision owners for Gates 0–3 |

**Suggested first read:** `docs/02` → `docs/03` → `docs/04` → `docs/05`, with `docs/01` as background and `docs/06` as reference.

## Scope and assumptions

This framework governs the **productization** stage — what happens *after* an idea has produced a working MVP and someone decides it's worth turning into a product. Early ideation and MVP-building precede it and have lighter rules. Key assumptions, called out where they matter:

- **Lean teams.** A standard IPT is **4–7 people**; almost everyone wears more than one hat.
- **Security-first / defense context.** Products may serve government/defense customers; authorization (ATO/cATO) is a first-class part of the timeline.
- **Software products.** Written for software (including cloud-delivered); hardware-heavy efforts need adaptation.

## Repository tooling (optional)

The `llm-memory/` and `.llm-memory/` directories hold a knowledge-capture tool, **lmc** (LLM Memory Compiler), that records what gets discussed in AI-assisted sessions on this repo and compiles it into searchable articles under `llm-memory/knowledge/`. It is **entirely optional** — you can read, edit, and contribute to every document here without it.

If you do want capture to work on your machine, install `lmc` once:

```bash
git clone https://github.com/j105rob/llm-memory-compiler
cd llm-memory-compiler
uv sync
./lmc install
```

That writes a launcher to `~/.local/bin/lmc`; make sure that directory is on your `PATH`. You do **not** need to run `lmc init` — this repo already carries its configuration (`.llm-memory/config.json`) and the Claude Code hooks (`.claude/settings.json`), which invoke `lmc` via `$CLAUDE_PROJECT_DIR` so they work from any clone location.

If `lmc` isn't installed, the session hooks simply fail and are logged — nothing in the repo breaks, and no framework content depends on the tool.

See [`llm-memory/README.md`](./llm-memory/README.md) for usage and [`llm-memory/AGENTS.md`](./llm-memory/AGENTS.md) for the technical reference.

## Contributing

This is a living knowledge base, so contributions are expected to be *arguments and revisions*, not just typo fixes. The conventions below keep an iterative document set legible.

**Document conventions**

- Each document carries a **status line and revision date** (`Draft`, `In review`, or `Adopted`). Treat everything as **Draft for discussion** unless its status says otherwise.
- Each document ends with an **"Open questions / to resolve"** section — the fastest way to see what's still unsettled. If your change settles one, remove it from that list and reflect the decision in the body.
- Documents are numbered and cross-reference each other by number (`docs/03`). If you move or renumber content, fix the inbound references — including those in `EXECUTIVE-SUMMARY.md` and `templates/`.
- New terms and acronyms get an entry in [`docs/06-glossary-and-references.md`](./docs/06-glossary-and-references.md); new external claims get a verified source in its reference list.

**How to propose a change**

1. Branch from `main` (`git checkout -b <short-topic-name>`).
2. Make the change, keeping the document's existing voice and altitude — prose that explains *why*, not bullet fragments.
3. Bump the document's revision date, and note the change in its **changelog** section at the bottom (add one, following the pattern in [`templates/ipt-charter-template.md`](./templates/ipt-charter-template.md), if the document doesn't have one yet).
4. Open a pull request describing what changed and, more importantly, *what argument or evidence drove it*.
5. For anything that changes the model itself — roles, gates, cadence, security posture — say plainly in the PR which **open question** you believe it resolves.

**Status promotion**

Nothing is "Adopted" until the team agrees it is. Moving a document from `Draft` to `In review` to `Adopted` is a deliberate act discussed with the team, not a side effect of merging a PR.

---

*Prepared as baseline material for Red Alpha team review, August 2026 — v0.1.*
