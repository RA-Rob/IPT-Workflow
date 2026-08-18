---
title: "IPT Workflow Phase/Gate Structure"
aliases: [ipt-phases, ipt-gates, five-phase-workflow]
tags: [ipt, phases, gates, workflow, structure]
sources:
  - "daily/2026-08-18.md"
created: 2026-08-18
updated: 2026-08-18
---

# IPT Workflow Phase/Gate Structure

The IPT Workflow is organized into 5 phases and 5 gates, with the rule "Gate N closes Phase N." Gate 0 commits the team and charters the engagement; Phases 1–5 cover Discovery, MVP, Build, Launch, and Operate.

## Key Points
- **5 phases, 5 gates** (collapsed from earlier 6- and 7-gate designs): Gate 0 = Commit & Charter; Gate 1 closes Discovery; Gate 2 closes MVP; Gate 3 closes Build; Gate 4 closes Launch; Gate 5 closes Operate.
- **Gate 0 = Commit & Charter** — chartering the team and committing funding are treated as the same act; Stand-up was collapsed into Gate 0 because splitting them added ceremony without adding a decision point.
- **Gate 2 is the customer's call** — the customer decides whether to proceed from MVP to full Build at Gate 2.
- **MVP cycles are set at 2–3 weeks**; Phase 3 Build length is left open.
- **~8 months from customer funding commitment to proven launch**, with POC construction and vendor shopping explicitly outside that count.

## Details

The phase/gate numbering scheme went through several iterations before settling at 5+5. An earlier design had 6 or 7 gates, including a separate Stand-up gate and per-cycle evaluation gates. Collapsing Stand-up into Gate 0 was the right call for a 4–7 person team: chartering the team and committing funding are logically the same act, and splitting them into separate gates adds ceremony without adding a meaningful decision point.

Gate 1 (green-light the MVP) was kept distinct from Gate 0 even though both are internal, because Gate 1 is where the core/tailoring boundary gets committed to paper. This is an explicit stop worth preserving until the team has run the workflow at least once; it can be considered for merger with Gate 0 after a first real engagement if Discovery blends naturally into the first MVP cycle.

A critical lesson from restructuring: gate/phase numbering changes cascade widely. When the number scheme changed, docs/01, 02, 03, 05, both templates, README, index.md, and nav.yml all needed touches. Any future renumbering should be treated as a high-touch, cross-file operation.

## Related Concepts
- [[concepts/poc-vs-funded-delivery-separation]] — POC construction is explicitly excluded from the phase count; Gate 0 assumes a working POC already exists
- [[concepts/ipt-workflow-branding]] — The phase restructuring was pushed in the same commit batch as prior branding changes
- [[concepts/jekyll-github-pages-setup]] — The Pages site was rebuilt after the 12-file update that landed this structure

## Sources
- [[daily/2026-08-18.md]] — 5-phase/5-gate decision, Stand-up collapse rationale, Gate 2 as customer's call, MVP cycle length, ~8-month timeline, cascading-numbering lesson
