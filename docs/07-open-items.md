# 07 — Open Items

*Status: Living register — v0.1 — August 2026*

## What this is

Every document in this knowledge base ends with an *Open questions / to resolve* section. Useful when you are reading that document; useless when you want to know **what is unsettled across the whole workflow and who is working it**. This page is that register: one consolidated list, each item with an owner, whoever actually decides it, and what "resolved" looks like — so the larger team can pick items up rather than re-litigating them in passing.

It is deliberately a *working* document. Items get claimed, argued, and closed. The per-document sections stay where they are, because that is where the context lives; this page is the index over them.

**How an item gets closed.** Not by editing this page. Write the answer into the document that owns the question — that document is the standard, and this register only points at it — then mark the item **Decided** here with the date and a one-line summary of the call. An item that only ever gets resolved in a meeting is not resolved.

**How to claim one.** Put your name in the item's **Owner** field. Owning an item means driving it to a decision, not deciding it alone; the **Decides** field says who the call belongs to.

**Status values.** **Open** (nobody is working it) · **In work** (owned, being worked) · **Decided** (answer written into the owning document; see *Recently decided* at the bottom).

**Priority.** Two items block more than the rest, and they are the two the [Executive Summary](../EXECUTIVE-SUMMARY.md) still puts in front of leadership: **OI-01** (the missing front end) and **OI-07** (upstreaming rights). A third priority item, **OI-08** (the `stage` data class), closed 2026-08-24 — see *Recently decided* below. Everything else can be worked in any order, and several are a half-hour conversation away from closed.

---

## A. The front end — before Gate 0

#### OI-01 — How does a POC come to exist?

**Owner:** Rob Weiss · **Decides:** Sponsor / executive leadership · **Source:** [02](02-ipt-model-overview.md), [03](03-team-structure-and-roles.md), [04](04-process-timeline-and-phases.md) · **Status:** In work

The largest gap around this knowledge base. Who decides to fund a POC, who staffs it before any IPT exists, how long it runs, what it must prove to be worth shopping, and who does the shopping. This workflow deliberately starts *after* all of that, at the moment a customer commits money — which leaves the front of our pipeline undefined even though the back end is specific.

**Settled so far (2026-08-24):** a POC comes out of Red Alpha's own **ideation process**, separate from this framework; Red Alpha funds it internally and owns the resulting IP outright. *Now documented in:* [02](02-ipt-model-overview.md), [06 — glossary](06-glossary-and-references.md). Still open: who staffs it before any IPT exists, how long it runs, what it must prove to be worth shopping, and who does the shopping.

**Resolved looks like:** a separate ideation-to-product document covering the pre-Gate-0 world, with this workflow's Gate 0 as its hand-off point. Not an addition to document 04 — the funding model and the risk profile are different enough that putting speculative exploration under charter-and-gate machinery would be the wrong trade.

*OI-02 (does a POC being shopped run in a `stage` instance, or its own demo environment) closed 2026-08-24 — see Recently decided below.*

---

## B. Decision rights and ceremony

*OI-03 (who owns Gate 0) and OI-04 (is the Product Owner always the Decider) closed 2026-08-24 — see Recently decided below.*

#### OI-05 — Does the customer have a formal voice at gates beyond Gate 2?

**Owner:** *unassigned* · **Decides:** Product Owner with sponsor · **Source:** [04](04-process-timeline-and-phases.md) · **Status:** Open

The funding customer owns Gate 2 and confirms the operating model at Gate 4. Should they have a formal voice at Gate 1 (green-lighting the MVP) and Gate 3 (readiness to launch), or is concurrence enough? A customer surprised at Gate 3 is a customer who was not really in the loop.

**Resolved looks like:** the gate-review checklist naming, per gate, whether the customer is a decider, a concurring party, or informed.

#### OI-06 — How formal should a gate review be?

**Owner:** *unassigned* · **Decides:** Product Owner · **Source:** [04](04-process-timeline-and-phases.md) · **Status:** Open

A written decision memo, or a live 30-minute review with the checklist? The customer-facing gates may warrant more formality than the internal ones. The failure mode in both directions is real: ceremony a 4–7 person team resents, or decisions nobody can reconstruct six months later.

**Resolved looks like:** one line per gate in the checklist template stating the expected artifact.

---

## C. Contracts and IP

#### OI-07 — What do our standard customer terms permit on upstreaming?

**Owner:** *unassigned* · **Decides:** Executive leadership with counsel · **Source:** [02](02-ipt-model-overview.md), [04](04-process-timeline-and-phases.md) · **Status:** Open

The whole two-wallet model rests on this. We assume that customer-funded **tailoring** can be promoted into the Red Alpha-owned **core product** with the customer's agreement, and that the core stays ours and licensed. The upstream log records each decision — but the contract has to actually permit the decision to be made. If standard terms are silent or unfavorable, the compounding-asset argument for this whole workflow weakens.

**Resolved looks like:** a plain-language summary of what current terms say, plus whatever clause we need in future ones, referenced from document 04's upstream-log section. Until then this is an assumption stated in public documents, which is a risk in itself.

---

## D. The `stage` environment

Where `stage` lives is **settled**, and so is its default data class — see *Recently decided* below, and the policy in [05](05-security-and-compliance.md). What remains:

#### OI-09 — How many replicated `stage` instances can we actually keep at mainline parity?

**Owner:** *unassigned* · **Decides:** Delivery/Platform hat with Tech Lead · **Source:** [05](05-security-and-compliance.md) · **Status:** Open

Release parity across every instance is a hard rule, not an aspiration — which makes it a real capacity constraint on a lean team. The practical question is how many instances (funding customers plus pre-sales demonstrations) one IPT can carry before parity starts slipping, and what the rule is when demand exceeds that number.

**Resolved looks like:** a working number in document 05 and an explicit "what we do when we exceed it" — tear one down, or decline the demonstration.

#### OI-10 — Who owns a pre-sales `stage` instance, and how long does it live?

**Owner:** *unassigned* · **Decides:** Sponsor with business development · **Source:** [05](05-security-and-compliance.md) · **Status:** Open

An IPT that has no funding customer for that instance yet, or the business-development side that wants the demonstration? Somebody has to own its hygiene — accounts, data, parity — and somebody has to decide when it is torn down rather than left running indefinitely.

**Resolved looks like:** a named owning role in document 05 and a default lifetime or review interval.

#### OI-11 — What must a customer-supplied stage CONOPS contain?

**Owner:** *unassigned* · **Decides:** Product Owner with Tech Lead · **Source:** [05](05-security-and-compliance.md) · **Status:** Open

A customer-supplied CONOPS governs the shape of `stage` where one exists. For that to save time rather than cost it, we need to know what a usable CONOPS has to tell us — users and roles, tasks, data, integration points, access mechanics — or we will end up running a second round of discovery to fill in the gaps.

**Resolved looks like:** a short template in `templates/`, referenced from document 05.

---

## E. Security and authorization

#### OI-12 — Which products need formal ATO/cATO, and which are commercial?

**Owner:** *unassigned* · **Decides:** Executive leadership with Security Lead · **Source:** [05](05-security-and-compliance.md) · **Status:** Open

Security-strong-but-not-government-authorized is a legitimate posture for some products, and the timeline weight differs enormously between the two. Right now every timeline in document 04 quietly assumes the heavier path.

**Resolved looks like:** a per-product determination made at Gate 0 and recorded in the charter, with document 04's timeline noting how it shifts for commercial products.

#### OI-13 — Build on an existing authorized platform, or stand up our own pipeline?

**Owner:** *unassigned* · **Decides:** Tech Lead with Security Lead · **Source:** [05](05-security-and-compliance.md) · **Status:** Open

Inheriting an already-authorized platform or software factory can remove months from the authorization path; standing up our own gives us control and reuse across products. This is one of the largest single levers on the launch date.

**Resolved looks like:** a default position in document 05, with the per-product exception criteria stated.

#### OI-14 — What is our realistic default impact level?

**Owner:** *unassigned* · **Decides:** Security Lead with the Authorizing Official · **Source:** [05](05-security-and-compliance.md) · **Status:** Open

Moderate, most likely — but the control burden that follows from the answer is what a 4–7 person team has to actually carry, so guessing is expensive. Categorization happens per system in Phase 1; what we need is the planning default.

**Resolved looks like:** a stated planning assumption in document 05 with a rough control count, so charters and appetites are set against something real.

#### OI-15 — How much of the control baseline can a tailored instance inherit from the core?

**Owner:** *unassigned* · **Decides:** Security Lead · **Source:** [05](05-security-and-compliance.md) · **Status:** Open

Getting this right is what makes the second engagement cheaper than the first, and it is the security half of the compounding-asset argument. Controls built into the licensed core should be inheritable by every customer's tailored instance rather than re-evidenced each time.

**Resolved looks like:** an inheritance model in document 05 — which control families come from the core, which are always customer-specific — and core-track work being built to be inherited on purpose.

#### OI-16 — Security Lead embedded per IPT, or a shared chapter?

**Owner:** *unassigned* · **Decides:** Sponsor · **Source:** [03](03-team-structure-and-roles.md), [05](05-security-and-compliance.md) · **Status:** Open

At our current size, one security specialist across two or three teams may be the only affordable answer — but the model's premise is that security is *inside* the team, not consulted by it. This is a real tension, not a formality.

**Resolved looks like:** a stated model in document 03, including what the shared version costs us if we choose it.

---

## F. Team, capacity, and durability

#### OI-17 — Can one IPT carry a second funding customer's tailoring?

**Owner:** *unassigned* · **Decides:** Sponsor with Product Owner · **Source:** [02](02-ipt-model-overview.md), [03](03-team-structure-and-roles.md), [04](04-process-timeline-and-phases.md) · **Status:** Open

The practical limit on how fast the licensing model can grow. Two customers on one team means two evaluation loops, two sets of tailoring priorities, and a Product Owner protecting focus in two directions at once.

**Resolved looks like:** a stated rule in document 03 with the conditions under which it is allowed.

#### OI-18 — How many IPTs can Red Alpha staff at once, and what happens when demand exceeds that?

**Owner:** *unassigned* · **Decides:** Executive leadership · **Source:** [02](02-ipt-model-overview.md) · **Status:** Open

Related to OI-17 and to OI-01 — POCs draw on the same scarce people. Without a stated ceiling, the answer gets decided implicitly by whoever asks last.

**Resolved looks like:** a current ceiling in document 02 and an explicit queueing or decline rule.

#### OI-19 — Does every product get a durable IPT?

**Owner:** *unassigned* · **Decides:** Sponsor · **Source:** [02](02-ipt-model-overview.md) · **Status:** Open

Or do some smaller efforts get a time-boxed team that disbands at launch? The durable-team commitment ("the people who build it run it") is one of the model's load-bearing claims, so any exception should be deliberate and narrow.

**Resolved looks like:** document 02 either affirming durability without exception or defining the smaller-effort case precisely.

#### OI-20 — What is the minimum viable team?

**Owner:** *unassigned* · **Decides:** Sponsor with Product Owner · **Source:** [03](03-team-structure-and-roles.md) · **Status:** Open

Is four really the floor, or three for the smallest efforts? Below some size the seven functions stop being coverable by hats and start being uncovered.

**Resolved looks like:** a stated floor in document 03 and which hats double up at that size.

#### OI-21 — How is on-call and operations load carried once products are live?

**Owner:** *unassigned* · **Decides:** Tech Lead with sponsor · **Source:** [03](03-team-structure-and-roles.md) · **Status:** Open

Phase 5 says the team that built it runs it. On a lean team, sustained on-call competes directly with the build capacity that funds the next increment — and it compounds with every product launched.

**Resolved looks like:** an operations model in document 03: rotation, expectations, and how Phase 5 capacity is reserved rather than assumed.

#### OI-25 — Does Phase 5's forward-deployed work need a named embedded role?

**Owner:** *unassigned* · **Decides:** Sponsor with Product Owner · **Source:** [01](01-research-brief-incubator-methodologies.md), [03](03-team-structure-and-roles.md), [04](04-process-timeline-and-phases.md) · **Status:** Open

Document 03 now describes **Forward Deployed Engineering** as a posture the whole IPT adopts in Phase 5 — embedding with the customer's operators, finding leverage points, building and owning against real cases — rather than a new seat on the roster. Whether that holds as engagements scale is untested: does it stay a mode the Product Owner and engineers step into, or does sustained embedding need one person spending most of their time with the customer, competing with core-track and on-call capacity (see OI-21)?

**Resolved looks like:** a stated staffing model in document 03 — mode vs. dedicated seat — with the conditions under which a dedicated seat is warranted.

---

## G. Cadence and method

#### OI-22 — What is the build-phase cycle length?

**Owner:** *unassigned* · **Decides:** Product Owner with Tech Lead · **Source:** [01](01-research-brief-incubator-methodologies.md), [04](04-process-timeline-and-phases.md) · **Status:** Open

The MVP phase is fixed at 2–3 weeks because frequent customer contact is the point. Phase 3 does not have that constraint — should it return to Shape Up's six weeks for protected focus, or hold at three or four?

**Resolved looks like:** a number in document 04's Phase 3 section, and the charter template's cadence field reflecting it.

#### OI-23 — Is a PR/FAQ mandatory at the entry gate?

**Owner:** *unassigned* · **Decides:** Product Owner · **Source:** [01](01-research-brief-incubator-methodologies.md) · **Status:** Open

For every engagement, or only for larger bets? The PR/FAQ is cheap relative to building the wrong thing, but it is not free, and Discovery has an appetite.

**Resolved looks like:** document 04's Phase 1 stating whether it is required or conditional, and on what.

#### OI-24 — When do we run a full validation sprint?

**Owner:** *unassigned* · **Decides:** Product Owner · **Source:** [01](01-research-brief-incubator-methodologies.md), [04](04-process-timeline-and-phases.md) · **Status:** Open

Always in Discovery, or only when a decision is genuinely high-risk? And when we do run one, is it Google Ventures' five days or a lighter one-to-two-day version? Two questions with one answer, since the trigger and the format are chosen together.

**Resolved looks like:** a trigger condition and a default format in document 04's Phase 1.

---

## Recently decided

Items are kept here briefly after they close, so the team can see what changed without diffing the documents.

**Who owns Gate 0, and whether the Decider role ever moves** — decided **2026-08-24** (closes OI-03 and OI-04).

Every product has one **Product Owner** role (the renamed **Product Lead**). The Product Owner decides to take a product from POC to MVP by chartering the IPT — that is Gate 0, and it is theirs alone; once made, the sponsor commits the team and Red Alpha's own core-product money. The Product Owner is **always** the Decider — no exception by decision type (technical ties still go to the Tech Lead as the technical tie-breaker, but the single Decider for what/why is the Product Owner without exception).

*Now documented in:* [02](02-ipt-model-overview.md) · [03 — the role, renamed from Product Lead](03-team-structure-and-roles.md) · [04 — Gate 0](04-process-timeline-and-phases.md) · [06 — glossary](06-glossary-and-references.md) · [the charter template](../templates/ipt-charter-template.md) · [the gate-review checklist](../templates/gate-review-checklist.md).

**Where a POC being shopped runs, and what a "demo environment" is** — decided **2026-08-24** (closes OI-02).

A POC being shopped runs in a **`stage` instance** — there is no separate POC demo environment. Because a pre-Gate-0 POC has no product mainline yet, the release-parity rule has nothing to hold it to; parity begins to apply once a real mainline exists. Separately, a **demo environment** — a distinct thing from `stage` — is stood up after a product's first launch, owned by business development and running the current production release, so business development can pitch the shipped product to whichever customer comes next.

*Now documented in:* [05 — the `stage` policy](05-security-and-compliance.md). Not yet specified: the demo environment's ownership mechanics, data policy, and refresh cadence — worth a short register item of its own if the team wants those tracked.

**The default `stage` data class** — decided **2026-08-24** (closes OI-08).

`stage` defaults to **synthetic data**. Where an active funding customer is engaged and supplies its own data for evaluation, that governs instead; where there is no funding customer yet — during a pre-Gate-0 POC, or for as long as a product is still being shopped for one — `stage` runs on synthetic data with no exception possible, since there is no one yet to grant one. If genuinely operational data does land in `stage`, `stage` moves inside the authorization boundary from that moment on, and the Security Lead confirms the resulting control baseline and agrees the handling regime in writing before the data arrives.

*Now documented in:* [05 — the `stage` policy](05-security-and-compliance.md) · [the charter template](../templates/ipt-charter-template.md).

**Where `stage` lives, and what it looks like** — decided **2026-08-18**.

`stage` always runs inside Red Alpha's controlled environment: on premises or in Red Alpha's cloud, never the customer's enclave. It is built to a customer-supplied stage **CONOPS** where one exists, and otherwise mirrors what Red Alpha determines the production deployment will be. Its data may be customer-supplied or Red Alpha-provided. It is a **pre-production and/or pre-sales** environment, it **may be replicated**, and every instance **runs the same release as the upstream mainline**. It is not the pilot and carries no authorization to operate.

*Now documented in:* [05 — the `stage` policy](05-security-and-compliance.md) · [the charter template](../templates/ipt-charter-template.md) · [the gate-review checklist](../templates/gate-review-checklist.md). Residual questions from this decision are OI-09, OI-10, and OI-11 above (OI-02 and OI-08 closed 2026-08-24, above).

---

*Terms used here are defined in [`06-glossary-and-references.md`](06-glossary-and-references.md). Each document's own "Open questions / to resolve" section carries the context behind its items.*
