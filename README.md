# IPT Workflow

Red Alpha's standard way of turning **cleared intellectual property** — usually derived from work an existing customer contract already paid for — into a shipped, secure, licensable software product, by way of a customer-funded **MVP** tailored to that customer's mission and delivered in short reviewable increments, built by small, durable, cross-functional **Integrated Project Teams (IPTs)**.

This repository is a **living, iterative knowledge base**, not a finished standard. It is meant to be read, argued with, and revised by the Red Alpha team. Once the ideas here stabilize through discussion, we pull them into other forms (decks, checklists, charters) without rewriting the underlying thinking.

> **Start here:** [`EXECUTIVE-SUMMARY.md`](./EXECUTIVE-SUMMARY.md) for the one-page overview, then the `docs/` folder for full detail.
>
> **Reading on the web is easier:** every document in this repository is published as a browsable site at **<https://ra-rob.github.io/IPT-Workflow/>** — sidebar navigation, working cross-references, and next/previous links through the reading order.

---

## The core idea

The expensive mistake in software is *building the wrong thing well.* So the workflow does two things, in order:

1. **Reduce uncertainty cheaply, before committing** — frame the outcome and validate the riskiest assumptions on paper or with a throwaway prototype.
2. **Then let a small, empowered team own delivery end to end** — in fixed-time cycles, with security designed in from day one.

Both come from studying how the best builders work: Amazon, Google Ventures, IDEO, Spotify, and Basecamp (see [`docs/02`](./docs/02-research-brief-incubator-methodologies.md)).

Four facts about how Red Alpha gets its products shape everything downstream of that:

- **The asset usually already exists, and someone else already paid for it.** What we take to a new customer is most often **IP derived from an existing customer contract** — capability and lessons learned generalized beyond the one mission they were built for, and matched against a different customer's **mission requirement**. Red Alpha can also self-fund a **POC** from scratch; that stays in the model as the secondary route, because it spends our own money to reach a starting line the first route arrives at already funded.
- **Contract-derived IP is not ours by default, so RA Legal clears it before we shop it.** The determination must rest on one of three positions: Red Alpha **owns** it under the originating contract, the originating customer **released** it, or a **CRADA** secures it. No fourth position, and no shopping, demonstrating, or chartering before the determination is on record. The originating customer's *data* never travels with the capability regardless.
- **What we shop and what we build are different stages, paid for by different people.** A **funding customer** pays for the **tailoring** that makes the capability work in *their* environment for *their* mission. The **core product stays Red Alpha's**, licensed to the customer; promoting customer-funded tailoring into that core is a separate, recorded decision — and where it carries ownership weight, a Legal one too.
- **The MVP is delivered incrementally, not revealed at the end.** Every 2–3 week cycle puts working capability into a **stage** environment the customer's own operators can use; their evaluation steers the next cycle. The customer approves the *direction* repeatedly, while changing course is still cheap.

## Repository contents

| Path | What it covers |
|------|----------------|
| [`EXECUTIVE-SUMMARY.md`](./EXECUTIVE-SUMMARY.md) | One-page overview for leadership |
| [`docs/01-ip-origin-and-clearance.md`](./docs/01-ip-origin-and-clearance.md) | The entry point: where the IP comes from, and what RA Legal must clear before we shop it |
| [`docs/02-research-brief-incubator-methodologies.md`](./docs/02-research-brief-incubator-methodologies.md) | Baseline research: five top product/idea companies and why they succeed |
| [`docs/03-ipt-model-overview.md`](./docs/03-ipt-model-overview.md) | The Red Alpha idea-to-product model: philosophy, principles, when an IPT stands up |
| [`docs/04-team-structure-and-roles.md`](./docs/04-team-structure-and-roles.md) | The lean 4–7 person IPT: roles, multi-hat assignments, responsibilities (RACI) |
| [`docs/05-process-timeline-and-phases.md`](./docs/05-process-timeline-and-phases.md) | End-to-end timeline: five phases, five gates, cleared IP → MVP → product, artifacts, worked schedule |
| [`docs/06-security-and-compliance.md`](./docs/06-security-and-compliance.md) | Security-first / defense context: RMF, ATO/cATO, DevSecOps woven into the process; the `stage` boundary |
| [`docs/07-glossary-and-references.md`](./docs/07-glossary-and-references.md) | Definitions, a shoppable-asset-vs-MVP comparison, and the full verified source list |
| [`docs/08-open-items.md`](./docs/08-open-items.md) | The open-items register: every unsettled question, its owner, who decides, and what "resolved" looks like |
| [`templates/ipt-charter-template.md`](./templates/ipt-charter-template.md) | Fill-in charter for standing up an IPT at Gate 0, including the IP provenance and clearance record |
| [`templates/gate-review-checklist.md`](./templates/gate-review-checklist.md) | Entry/exit criteria and decision owners for Gates 0–4, plus the per-cycle customer evaluation |

**Suggested first read:** `docs/01` → `docs/03` → `docs/04` → `docs/05` → `docs/06`, with `docs/02` as background and `docs/07` as reference. `docs/08` is the register of what is still unsettled — start there if you came to help settle something.

## Scope and assumptions

This workflow doesn't start at **Gate 0** — **it starts with IP Red Alpha already has.** A development team delivering on an existing customer's contract builds a solution to that customer's real problem; when the underlying capability generalizes beyond that one mission, **RA Legal establishes Red Alpha's right to use it**, and the cleared IP is packaged and shopped to a customer whose mission requirement it fits. That origin is real process, documented in [`docs/01-ip-origin-and-clearance.md`](./docs/01-ip-origin-and-clearance.md) — not input sitting outside the workflow. What *is* gated separately, starting at **Gate 0 — the moment a new customer commits funding** — is everything from chartering the IPT through sustained operation.

What's still open about the front end is now mostly **legal, not operational**: what our standard originating-contract terms actually permit, what an RA Legal clearance contains and how long one takes, when to pursue a CRADA, and what to do with valuable IP we cannot clear — tracked as OI-26 through OI-29 in [`docs/08-open-items.md`](./docs/08-open-items.md), with the operational remainder as OI-01. Key assumptions, called out where they matter:

- **Contract-derived IP is the norm.** Most of what Red Alpha shops was built and paid for on an earlier engagement; a self-funded POC is the fallback.
- **Nothing moves uncleared.** An RA Legal determination is a precondition to shopping, and Gate 0 re-checks that its scope still covers the engagement.
- **Lean teams.** A standard IPT is **4–7 people**; almost everyone wears more than one hat.
- **Two funding streams, one team.** Red Alpha funds the licensed **core product**; the customer funds **tailoring** for their environment. Every piece of work carries a funding source, and every upstream promotion is recorded.
- **Security-first / defense context.** Products may serve government/defense customers; authorization (ATO/cATO) is a first-class part of the timeline.
- **Software products.** Written for software (including cloud-delivered); hardware-heavy efforts need adaptation.

## The documentation site

Everything here is published with **GitHub Pages**, built by GitHub's own Jekyll from the `main` branch — there is no build step to run and nothing to install.

| Path | Role |
|------|------|
| `index.md` | The landing page |
| `_layouts/default.html` | The page shell: sidebar, next/previous pager, footer |
| `_data/nav.yml` | Navigation **and reading order** — the single place both are defined |
| `assets/css/style.css` | Styling: the Red Alpha brand tokens, then light/dark support on top of them |
| `_config.yml` | Site config, plugin declarations, and what to exclude from the site |

The important property: **the documents themselves carry no site metadata.** No front matter, no layout declarations — they stay plain Markdown that reads correctly in an editor, on GitHub, and on the site. Three plugins that GitHub Pages enables by default make that work — `jekyll-optional-front-matter` renders bare `.md` files as pages, `jekyll-titles-from-headings` takes each page's title from its first `#` heading, and `jekyll-relative-links` rewrites relative `.md` cross-references into working site links.

**Where the look comes from.** The stylesheet opens with the `--ra-*` tokens from the **Red Alpha Product Site Design Standard** — the same warm palette, brand red, Inter/JetBrains Mono pairing, radii, and motion the product sites use — and maps them onto the roles the rest of the rules consume. Two documented departures: the standard is dark-only, so the light plane is a local extension to be replaced if the standard ever publishes one; and the reading column stays at `--measure` rather than the standard's fixed content width, because line length here is a legibility constraint. Both are called out in the file header.

**Adding or renaming a document?** Add it to `_data/nav.yml` — that's what puts it in the sidebar and in the reading order. A document that isn't listed there still gets published, but nothing links to it.

Two consequences worth knowing:

- Cross-references between documents must be written as **relative Markdown links** (`[text](../docs/06-security-and-compliance.md)`), which work both on GitHub and on the site. A bare backticked filename renders as inert text.
- The site relies on GitHub's built-in Jekyll build. If it is ever switched to a GitHub Actions workflow, those three default plugins must be declared in a `Gemfile` explicitly or every page loses its title and cross-links.

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

If `lmc` isn't installed, the session hooks simply fail and are logged — nothing in the repo breaks, and no workflow content depends on the tool.

See [`llm-memory/README.md`](./llm-memory/README.md) for usage and [`llm-memory/AGENTS.md`](./llm-memory/AGENTS.md) for the technical reference.

## Contributing

This is a living knowledge base, so contributions are expected to be *arguments and revisions*, not just typo fixes. The conventions below keep an iterative document set legible.

**Document conventions**

- Each document carries a **status line and revision date** (`Draft`, `In review`, or `Adopted`). Treat everything as **Draft for discussion** unless its status says otherwise.
- Each document ends with an **"Open questions / to resolve"** section — the fastest way to see what's still unsettled. If your change settles one, remove it from that list and reflect the decision in the body.
- Documents are numbered and cross-reference each other by number (`docs/04`). If you move or renumber content, fix the inbound references — including those in `EXECUTIVE-SUMMARY.md` and `templates/`.
- New terms and acronyms get an entry in [`docs/07-glossary-and-references.md`](./docs/07-glossary-and-references.md); new external claims get a verified source in its reference list.

**How to propose a change**

1. Branch from `main` (`git checkout -b <short-topic-name>`).
2. Make the change, keeping the document's existing voice and altitude — prose that explains *why*, not bullet fragments.
3. Bump the document's revision date, and note the change in its **changelog** section at the bottom (add one, following the pattern in [`templates/ipt-charter-template.md`](./templates/ipt-charter-template.md), if the document doesn't have one yet).
4. Open a pull request describing what changed and, more importantly, *what argument or evidence drove it*.
5. For anything that changes the model itself — roles, gates, cadence, security posture — say plainly in the PR which **open question** you believe it resolves.

**Status promotion**

Nothing is "Adopted" until the team agrees it is. Moving a document from `Draft` to `In review` to `Adopted` is a deliberate act discussed with the team, not a side effect of merging a PR.

---

*Prepared as baseline material for Red Alpha team review, August 2026 — v0.2, September 2026.*
