# 08 — Open Items

*Status: Living register — v0.2 — September 2026*

## What this is

Every document in this knowledge base ends with an *Open questions / to resolve* section. Useful when you are reading that document; useless when you want to know **what is unsettled across the whole workflow and who is working it**. This page is that register: one consolidated list, each item with an owner, whoever actually decides it, and what "resolved" looks like — so the larger team can pick items up rather than re-litigating them in passing.

It is deliberately a *working* document. Items get claimed, argued, and closed. The per-document sections stay where they are, because that is where the context lives; this page is the index over them.

**How an item gets closed.** Not by editing this page. Write the answer into the document that owns the question — that document is the standard, and this register only points at it — then mark the item **Decided** here with the date and a one-line summary of the call. An item that only ever gets resolved in a meeting is not resolved.

**How to claim one.** Put your name in the item's **Owner** field. Owning an item means driving it to a decision, not deciding it alone; the **Decides** field says who the call belongs to.

**Status values.** **Open** (nobody is working it) · **In work** (owned, being worked) · **Decided** (answer written into the owning document; see *Recently decided* at the bottom).

**Priority.** As of the 2026-09-22 reframing (see *Section C*), the items that block most are the **IP-rights** ones, because the whole front end now rests on them: **OI-26** (do our originating-contract terms let us generalize a customer's work into a product for someone else), **OI-27** (what an RA Legal IP clearance must contain and how long it takes), **OI-28** (when we pursue a CRADA), and **OI-29** (what we do with valuable IP we cannot clear). Alongside them sit the two long-standing items the [Executive Summary](../EXECUTIVE-SUMMARY.md) puts in front of leadership: **OI-01** (running the front end operationally) and **OI-07** (upstreaming rights, which is the same question one engagement later). A previous priority item, **OI-08** (the `stage` data class), closed 2026-08-24 — see *Recently decided* below. Everything else can be worked in any order, and several are a half-hour conversation away from closed.

---

## A. The front end — before Gate 0

#### OI-01 — How does a shoppable asset come to exist, operationally?

**Owner:** Rob Weiss · **Decides:** Sponsor / executive leadership · **Source:** [01](01-ip-origin-and-clearance.md), [03](03-ipt-model-overview.md), [04](04-team-structure-and-roles.md), [05](05-process-timeline-and-phases.md) · **Status:** In work

Where the IP comes from is now documented — see *Settled so far* below. What's left is operational: **the generalization bar** (who decides a capability built for one customer reaches beyond it, and what that judgment weighs), who packages cleared IP into a demonstration before any new IPT exists, how long that runs, what it must show to be worth a prospect's time, and who does the shopping. The IP-rights half of the front end is tracked separately in **Section C** (OI-26 through OI-29).

**Settled so far (2026-08-24, superseded 2026-09-22):** an earlier reading had a POC coming out of Red Alpha's own internally funded ideation, with Red Alpha owning the resulting IP outright by construction. That is now the *secondary* route only. The primary route derives the IP from an existing customer contract, where ownership is **not** automatic — see the 2026-09-22 entry.

**Settled so far (2026-08-31):** ideation's actual origin — a Red Alpha team already embedded and delivering on an existing customer's mission builds something that turns out to generalize beyond that one engagement. That still holds, and is the trigger for everything downstream. *Now documented in:* [01](01-ip-origin-and-clearance.md), [02 §6 — the Forward Deployed Engineering practice it depends on](02-research-brief-incubator-methodologies.md), [04 — Phase 5, where this work happens](04-team-structure-and-roles.md).

**Settled so far (2026-09-22):** the asset Red Alpha shops is **IP derived from an existing customer contract** — generalized beyond that one mission and shopped to a customer whose **mission requirement** it helps solve — not, ordinarily, a self-funded POC. The internally funded POC remains a legitimate but secondary route. Red Alpha's right to use contract-derived IP is **not** assumed: it must rest on Red Alpha ownership, an originating-customer release, or a **CRADA**, and **RA Legal determines which, in writing, before anything is shopped**. *Now documented in:* [01 — the full origin and clearance model](01-ip-origin-and-clearance.md), [03](03-ipt-model-overview.md), [05 — Gate 0's IP check](05-process-timeline-and-phases.md), [06 — the data rule that follows from it](06-security-and-compliance.md), [07 — glossary](07-glossary-and-references.md), [the charter template](../templates/ipt-charter-template.md), [the gate-review checklist](../templates/gate-review-checklist.md).

**Resolved looks like:** the remaining operational questions above answered in document 01, with this workflow's Gate 0 as document 01's hand-off point. Not an addition to document 05 — the funding model and the risk profile are different enough that putting exploratory work under charter-and-gate machinery would be the wrong trade.

*OI-02 (does a POC being shopped run in a `stage` instance, or its own demo environment) closed 2026-08-24 — see Recently decided below.*

---

## B. Decision rights and ceremony

*OI-03 (who owns Gate 0) and OI-04 (is the Product Owner always the Decider) closed 2026-08-24 — see Recently decided below.*

#### OI-05 — Does the customer have a formal voice at gates beyond Gate 2?

**Owner:** *unassigned* · **Decides:** Product Owner with sponsor · **Source:** [05](05-process-timeline-and-phases.md) · **Status:** Open

The funding customer owns Gate 2 and confirms the operating model at Gate 4. Should they have a formal voice at Gate 1 (green-lighting the MVP) and Gate 3 (readiness to launch), or is concurrence enough? A customer surprised at Gate 3 is a customer who was not really in the loop.

**Resolved looks like:** the gate-review checklist naming, per gate, whether the customer is a decider, a concurring party, or informed.

#### OI-06 — How formal should a gate review be?

**Owner:** *unassigned* · **Decides:** Product Owner · **Source:** [05](05-process-timeline-and-phases.md) · **Status:** Open

A written decision memo, or a live 30-minute review with the checklist? The customer-facing gates may warrant more formality than the internal ones. The failure mode in both directions is real: ceremony a 4–7 person team resents, or decisions nobody can reconstruct six months later.

**Resolved looks like:** one line per gate in the checklist template stating the expected artifact.

---

## C. Contracts and IP

*This section carries the most weight in the register. The 2026-09-22 reframing (document 01) makes **contract-derived IP** the primary asset Red Alpha shops, which means the company's product pipeline now depends on being able to answer, reliably and quickly, "is this ours to use?" Every item below is some part of that question.*

#### OI-07 — What do our standard customer terms permit on upstreaming?

**Owner:** *unassigned* · **Decides:** Executive leadership with counsel · **Source:** [03](03-ipt-model-overview.md), [05](05-process-timeline-and-phases.md) · **Status:** Open

The whole two-wallet model rests on this. We assume that customer-funded **tailoring** can be promoted into the Red Alpha-owned **core product** with the customer's agreement, and that the core stays ours and licensed. The upstream log records each decision — but the contract has to actually permit the decision to be made. If standard terms are silent or unfavorable, the compounding-asset argument for this whole workflow weakens.

**Resolved looks like:** a plain-language summary of what current terms say, plus whatever clause we need in future ones, referenced from document 05's upstream-log section. Until then this is an assumption stated in public documents, which is a risk in itself. Related: document 05 now says an upstream entry carrying real ownership weight goes to RA Legal on the same three-position test as OI-26 — **which entries qualify, and who decides, is itself unsettled** and belongs to this item.

#### OI-26 — Do our originating-contract terms let us generalize one customer's work into a product for another?

**Owner:** *unassigned* · **Decides:** Executive leadership with RA Legal · **Source:** [01](01-ip-origin-and-clearance.md) · **Status:** Open · **Priority**

**This is now the item the whole front end rests on.** Document 01 makes contract-derived IP the primary source of what Red Alpha shops: a team builds something while delivering for Customer A, the underlying capability generalizes, and Red Alpha wants to use it with a different customer. Whether we may do that is a question about the terms of Customer A's contract — and if the usual answer is no, the model described in document 01 does not work as its primary route and we are back to funding POCs ourselves.

Distinct from OI-07, which is about promoting customer-funded **tailoring** into the licensed core *within the same engagement*. This item is upstream of that and larger: it is about the *source* of the core rather than what a current engagement adds to it.

**Resolved looks like:** a plain-language summary of what our current originating-contract terms actually say about Red Alpha's right to generalize capability developed on a customer's work, an honest read on how often that lands in each of document 01's three acceptable positions, and the standard clause future contracts should carry so that clearance is the normal case rather than a negotiation each time. Referenced from document 01.

#### OI-27 — What must an RA Legal IP clearance contain, who triggers it, and how long does it take?

**Owner:** *unassigned* · **Decides:** Executive leadership with RA Legal · **Source:** [01](01-ip-origin-and-clearance.md), [05](05-process-timeline-and-phases.md) · **Status:** Open · **Priority**

Document 01 makes clearance a hard stop before anything is shopped, and document 05 makes Gate 0 re-check its scope. Neither says what a determination actually looks like as a document, who raises it, or how long to expect it to take. All three matter practically: a clearance whose scope is vague cannot be re-checked at Gate 0, and **a step with no predictable duration gets routed around** — which in this case means someone demonstrating uncleared IP to a prospect because Legal "hadn't come back yet."

**Resolved looks like:** a short standard form for a clearance determination (what IP, on what basis, scoped to what use, dated, by whom), a named trigger point and requester, and a stated turnaround expectation — written into document 01 and reflected in the charter template's clearance field.

#### OI-28 — When do we pursue a CRADA, and who raises it?

**Owner:** *unassigned* · **Decides:** Executive leadership with RA Legal and business development · **Source:** [01](01-ip-origin-and-clearance.md) · **Status:** Open · **Priority**

A **CRADA** negotiated while the work is being set up is the cleanest of document 01's three positions where it is available, and far cheaper than arguing for a release afterward. But it has to be raised *early*, which means somebody has to spot the possibility of generalizable value before the work has produced any — a judgment made at contracting time, by people who may never talk to the delivery team. Document 04 flags the team as where the signal originates; it does not say who acts on it.

**Two constraints make this narrower than it first looks, and they need a real answer.** *(a)* A CRADA is a **federal-laboratory instrument** (15 U.S.C. § 3710a): the counterparty must be or act through a federal lab. We do not currently know **what proportion of Red Alpha's customer base can actually enter one** — and if the answer is "very little of it," this position is a special case rather than a default, and OI-26's question about standard contract terms carries correspondingly more weight. *(b)* A CRADA is **not a funding vehicle** — the government may not pay us under one. So the CRADA route gives the strongest IP position but not the funded-origin economics the rest of the model leans on, which means the business case for pursuing one has to be made on the rights alone.

**Resolved looks like:** a read from RA Legal on how many of our customers and prospective customers can enter a CRADA at all; a stated default for when we seek one (every contract of a certain shape, or only where generalizable value is foreseeable and the counterparty qualifies); a named owner for raising it; and an explicit acknowledgement of what the route costs us in funding terms — written into document 01.

#### OI-29 — What do we do with valuable IP we cannot clear?

**Owner:** *unassigned* · **Decides:** Executive leadership with RA Legal · **Source:** [01](01-ip-origin-and-clearance.md) · **Status:** Open

Document 01 says an uncleared capability stays with the originating engagement until the position is fixed, and lists the ways to fix it: renegotiate terms, seek a release, put a CRADA in place, or rebuild the capability independently and cleanly. It does not say who decides which of those to pursue, what the bar is for spending effort on any of them, or — most awkwardly — **what "rebuild it cleanly" actually requires** to be defensible. That last one is the sharp edge: a clean-room rebuild that is not genuinely clean is worse than not rebuilding at all.

**Resolved looks like:** a decision owner and a stated bar for pursuing each route, plus a plain description of what a defensible independent rebuild requires — in document 01, or a short companion note if it gets long.

---

## D. The `stage` environment

Where `stage` lives is **settled**, and so is its default data class — see *Recently decided* below, and the policy in [06](06-security-and-compliance.md). What remains:

#### OI-09 — How many replicated `stage` instances can we actually keep at mainline parity?

**Owner:** *unassigned* · **Decides:** Delivery/Platform hat with Tech Lead · **Source:** [06](06-security-and-compliance.md) · **Status:** Open

Release parity across every instance is a hard rule, not an aspiration — which makes it a real capacity constraint on a lean team. The practical question is how many instances (funding customers plus pre-sales demonstrations) one IPT can carry before parity starts slipping, and what the rule is when demand exceeds that number.

**Resolved looks like:** a working number in document 06 and an explicit "what we do when we exceed it" — tear one down, or decline the demonstration.

#### OI-10 — Who owns a pre-sales `stage` instance, and how long does it live?

**Owner:** *unassigned* · **Decides:** Sponsor with business development · **Source:** [06](06-security-and-compliance.md) · **Status:** Open

An IPT that has no funding customer for that instance yet, or the business-development side that wants the demonstration? Somebody has to own its hygiene — accounts, data, parity — and somebody has to decide when it is torn down rather than left running indefinitely.

**Resolved looks like:** a named owning role in document 06 and a default lifetime or review interval.

#### OI-11 — What must a customer-supplied stage CONOPS contain?

**Owner:** *unassigned* · **Decides:** Product Owner with Tech Lead · **Source:** [06](06-security-and-compliance.md) · **Status:** Open

A customer-supplied CONOPS governs the shape of `stage` where one exists. For that to save time rather than cost it, we need to know what a usable CONOPS has to tell us — users and roles, tasks, data, integration points, access mechanics — or we will end up running a second round of discovery to fill in the gaps.

**Resolved looks like:** a short template in `templates/`, referenced from document 06.

---

## E. Security and authorization

#### OI-12 — Which products need formal ATO/cATO, and which are commercial?

**Owner:** *unassigned* · **Decides:** Executive leadership with Security Lead · **Source:** [06](06-security-and-compliance.md) · **Status:** Open

Security-strong-but-not-government-authorized is a legitimate posture for some products, and the timeline weight differs enormously between the two. Right now every timeline in document 05 quietly assumes the heavier path.

**Resolved looks like:** a per-product determination made at Gate 0 and recorded in the charter, with document 05's timeline noting how it shifts for commercial products.

#### OI-13 — Build on an existing authorized platform, or stand up our own pipeline?

**Owner:** *unassigned* · **Decides:** Tech Lead with Security Lead · **Source:** [06](06-security-and-compliance.md) · **Status:** Open

Inheriting an already-authorized platform or software factory can remove months from the authorization path; standing up our own gives us control and reuse across products. This is one of the largest single levers on the launch date.

**Resolved looks like:** a default position in document 06, with the per-product exception criteria stated.

#### OI-14 — What is our realistic default impact level?

**Owner:** *unassigned* · **Decides:** Security Lead with the Authorizing Official · **Source:** [06](06-security-and-compliance.md) · **Status:** Open

Moderate, most likely — but the control burden that follows from the answer is what a 4–7 person team has to actually carry, so guessing is expensive. Categorization happens per system in Phase 1; what we need is the planning default.

**Resolved looks like:** a stated planning assumption in document 06 with a rough control count, so charters and appetites are set against something real.

#### OI-15 — How much of the control baseline can a tailored instance inherit from the core?

**Owner:** *unassigned* · **Decides:** Security Lead · **Source:** [06](06-security-and-compliance.md) · **Status:** Open

Getting this right is what makes the second engagement cheaper than the first, and it is the security half of the compounding-asset argument. Controls built into the licensed core should be inheritable by every customer's tailored instance rather than re-evidenced each time.

**Resolved looks like:** an inheritance model in document 06 — which control families come from the core, which are always customer-specific — and core-track work being built to be inherited on purpose.

#### OI-16 — Security Lead embedded per IPT, or a shared chapter?

**Owner:** *unassigned* · **Decides:** Sponsor · **Source:** [04](04-team-structure-and-roles.md), [06](06-security-and-compliance.md) · **Status:** Open

At our current size, one security specialist across two or three teams may be the only affordable answer — but the model's premise is that security is *inside* the team, not consulted by it. This is a real tension, not a formality.

**Resolved looks like:** a stated model in document 04, including what the shared version costs us if we choose it.

---

## F. Team, capacity, and durability

#### OI-17 — Can one IPT carry a second funding customer's tailoring?

**Owner:** *unassigned* · **Decides:** Sponsor with Product Owner · **Source:** [03](03-ipt-model-overview.md), [04](04-team-structure-and-roles.md), [05](05-process-timeline-and-phases.md) · **Status:** Open

The practical limit on how fast the licensing model can grow. Two customers on one team means two evaluation loops, two sets of tailoring priorities, and a Product Owner protecting focus in two directions at once.

**Resolved looks like:** a stated rule in document 04 with the conditions under which it is allowed.

#### OI-18 — How many IPTs can Red Alpha staff at once, and what happens when demand exceeds that?

**Owner:** *unassigned* · **Decides:** Executive leadership · **Source:** [03](03-ipt-model-overview.md) · **Status:** Open

Related to OI-17 and to OI-01 — generalizing and packaging cleared IP draws on the same scarce people. Without a stated ceiling, the answer gets decided implicitly by whoever asks last.

**Resolved looks like:** a current ceiling in document 03 and an explicit queueing or decline rule.

#### OI-19 — Does every product get a durable IPT?

**Owner:** *unassigned* · **Decides:** Sponsor · **Source:** [03](03-ipt-model-overview.md) · **Status:** Open

Or do some smaller efforts get a time-boxed team that disbands at launch? The durable-team commitment ("the people who build it run it") is one of the model's load-bearing claims, so any exception should be deliberate and narrow.

**Resolved looks like:** document 03 either affirming durability without exception or defining the smaller-effort case precisely.

#### OI-20 — What is the minimum viable team?

**Owner:** *unassigned* · **Decides:** Sponsor with Product Owner · **Source:** [04](04-team-structure-and-roles.md) · **Status:** Open

Is four really the floor, or three for the smallest efforts? Below some size the seven functions stop being coverable by hats and start being uncovered.

**Resolved looks like:** a stated floor in document 04 and which hats double up at that size.

#### OI-21 — How is on-call and operations load carried once products are live?

**Owner:** *unassigned* · **Decides:** Tech Lead with sponsor · **Source:** [04](04-team-structure-and-roles.md) · **Status:** Open

Phase 5 says the team that built it runs it. On a lean team, sustained on-call competes directly with the build capacity that funds the next increment — and it compounds with every product launched.

**Resolved looks like:** an operations model in document 04: rotation, expectations, and how Phase 5 capacity is reserved rather than assumed.

#### OI-25 — Does Phase 5's forward-deployed work need a named embedded role?

**Owner:** *unassigned* · **Decides:** Sponsor with Product Owner · **Source:** [02](02-research-brief-incubator-methodologies.md), [04](04-team-structure-and-roles.md), [05](05-process-timeline-and-phases.md) · **Status:** Open

Document 03 now describes **Forward Deployed Engineering** as a posture the whole IPT adopts in Phase 5 — embedding with the customer's operators, finding leverage points, building and owning against real cases — rather than a new seat on the roster. Whether that holds as engagements scale is untested: does it stay a mode the Product Owner and engineers step into, or does sustained embedding need one person spending most of their time with the customer, competing with core-track and on-call capacity (see OI-21)?

**Resolved looks like:** a stated staffing model in document 04 — mode vs. dedicated seat — with the conditions under which a dedicated seat is warranted.

---

## G. Cadence and method

#### OI-22 — What is the build-phase cycle length?

**Owner:** *unassigned* · **Decides:** Product Owner with Tech Lead · **Source:** [02](02-research-brief-incubator-methodologies.md), [05](05-process-timeline-and-phases.md) · **Status:** Open

The MVP phase is fixed at 2–3 weeks because frequent customer contact is the point. Phase 3 does not have that constraint — should it return to Shape Up's six weeks for protected focus, or hold at three or four?

**Resolved looks like:** a number in document 05's Phase 3 section, and the charter template's cadence field reflecting it.

#### OI-23 — Is a PR/FAQ mandatory at the entry gate?

**Owner:** *unassigned* · **Decides:** Product Owner · **Source:** [02](02-research-brief-incubator-methodologies.md) · **Status:** Open

For every engagement, or only for larger bets? The PR/FAQ is cheap relative to building the wrong thing, but it is not free, and Discovery has an appetite.

**Resolved looks like:** document 05's Phase 1 stating whether it is required or conditional, and on what.

#### OI-24 — When do we run a full validation sprint?

**Owner:** *unassigned* · **Decides:** Product Owner · **Source:** [02](02-research-brief-incubator-methodologies.md), [05](05-process-timeline-and-phases.md) · **Status:** Open

Always in Discovery, or only when a decision is genuinely high-risk? And when we do run one, is it Google Ventures' five days or a lighter one-to-two-day version? Two questions with one answer, since the trigger and the format are chosen together.

**Resolved looks like:** a trigger condition and a default format in document 05's Phase 1.

---

## Recently decided

Items are kept here briefly after they close, so the team can see what changed without diffing the documents.

**The front end is now contract-derived IP, and RA Legal clears it** — model change, **2026-09-22** (reframes OI-01; opens OI-27, OI-28, OI-29; promotes OI-26 to priority).

This is not an item closing so much as a change to what the register is a register *of*, so it is recorded here too. The asset Red Alpha takes to a new customer is now, primarily, **IP derived from work already delivered under an existing customer contract** — generalized beyond that one mission and matched against a new customer's **mission requirement**. The internally funded POC remains a real but secondary route. Because contract-derived IP is not Red Alpha's by default, **RA Legal must determine in writing that we may use it** before anything is shopped, on one of three positions: Red Alpha owns it, the originating customer released it, or a **CRADA** secures it. There is no fourth position and no proceeding without one. Gate 0 re-checks that the clearance still covers what the engagement will build. A consequence worth flagging separately: the originating customer's **data** never travels with the IP, whatever the clearance says.

*Now documented in:* [01 — the full model](01-ip-origin-and-clearance.md) · [03](03-ipt-model-overview.md) · [05 — Gate 0's IP check and the upstream-log hook](05-process-timeline-and-phases.md) · [06 — the data rule](06-security-and-compliance.md) · [07 — glossary and the shoppable-asset comparison](07-glossary-and-references.md) · [the charter template](../templates/ipt-charter-template.md) · [the gate-review checklist](../templates/gate-review-checklist.md).

**Who owns Gate 0, and whether the Decider role ever moves** — decided **2026-08-24** (closes OI-03 and OI-04).

Every product has one **Product Owner** role (the renamed **Product Lead**). The Product Owner decides to take a product to MVP by chartering the IPT — that is Gate 0, and it is theirs alone; once made, the sponsor commits the team and Red Alpha's own core-product money. The Product Owner is **always** the Decider — no exception by decision type (technical ties still go to the Tech Lead as the technical tie-breaker, but the single Decider for what/why is the Product Owner without exception).

*Now documented in:* [03](03-ipt-model-overview.md) · [04 — the role, renamed from Product Lead](04-team-structure-and-roles.md) · [05 — Gate 0](05-process-timeline-and-phases.md) · [07 — glossary](07-glossary-and-references.md) · [the charter template](../templates/ipt-charter-template.md) · [the gate-review checklist](../templates/gate-review-checklist.md).

**Where a POC being shopped runs, and what a "demo environment" is** — decided **2026-08-24** (closes OI-02).

A POC being shopped runs in a **`stage` instance** — there is no separate POC demo environment. Because a pre-Gate-0 POC has no product mainline yet, the release-parity rule has nothing to hold it to; parity begins to apply once a real mainline exists. Separately, a **demo environment** — a distinct thing from `stage` — is stood up after a product's first launch, owned by business development and running the current production release, so business development can pitch the shipped product to whichever customer comes next.

*Now documented in:* [06 — the `stage` policy](06-security-and-compliance.md). Not yet specified: the demo environment's ownership mechanics, data policy, and refresh cadence — worth a short register item of its own if the team wants those tracked.

**The default `stage` data class** — decided **2026-08-24** (closes OI-08).

`stage` defaults to **synthetic data**. Where an active funding customer is engaged and supplies its own data for evaluation, that governs instead; where there is no funding customer yet — during a pre-Gate-0 POC, or for as long as a product is still being shopped for one — `stage` runs on synthetic data with no exception possible, since there is no one yet to grant one. If genuinely operational data does land in `stage`, `stage` moves inside the authorization boundary from that moment on, and the Security Lead confirms the resulting control baseline and agrees the handling regime in writing before the data arrives.

*Now documented in:* [06 — the `stage` policy](06-security-and-compliance.md) · [the charter template](../templates/ipt-charter-template.md).

**Where `stage` lives, and what it looks like** — decided **2026-08-18**.

`stage` always runs inside Red Alpha's controlled environment: on premises or in Red Alpha's cloud, never the customer's enclave. It is built to a customer-supplied stage **CONOPS** where one exists, and otherwise mirrors what Red Alpha determines the production deployment will be. Its data may be customer-supplied or Red Alpha-provided. It is a **pre-production and/or pre-sales** environment, it **may be replicated**, and every instance **runs the same release as the upstream mainline**. It is not the pilot and carries no authorization to operate.

*Now documented in:* [06 — the `stage` policy](06-security-and-compliance.md) · [the charter template](../templates/ipt-charter-template.md) · [the gate-review checklist](../templates/gate-review-checklist.md). Residual questions from this decision are OI-09, OI-10, and OI-11 above (OI-02 and OI-08 closed 2026-08-24, above).

---

*Terms used here are defined in [`07-glossary-and-references.md`](07-glossary-and-references.md). Each document's own "Open questions / to resolve" section carries the context behind its items.*
