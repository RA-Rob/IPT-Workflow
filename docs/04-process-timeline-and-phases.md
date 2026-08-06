# 04 — The Process: Timeline, Phases, and Gates

*Status: Draft for discussion — v0.1 — August 2026*

## How to read this document

This is the step-by-step process a Red Alpha IPT follows to turn an MVP into a shipped, operating product. It is organized as **four phases separated by four gates**. A *phase* is a period of work with a clear purpose; a *gate* is a short, explicit decision point where the team and the sponsor decide whether to continue, adjust, or stop. Gates are what keep a lean team honest — they are the cheap moments to change course.

Throughout, the process follows the two disciplines from document 02: **reduce uncertainty cheaply before committing, then let the team own delivery in fixed-time cycles.** Security is not a phase; it runs across all of them (document 05).

A note on time: the durations below are **defaults for a typical lean product**, not mandates. The fixed-time / variable-scope principle means we hold the *time* roughly steady and flex the *scope*. Adjust the numbers to the product, but keep the shape.

---

## At a glance

| Phase | Purpose | Typical duration | Ends at |
|-------|---------|------------------|---------|
| **0. Stand-up** *(gate)* | Decide to productize; charter the IPT | ~1 week | **Gate 0** |
| **1. Discovery & Framing** | Frame the outcome; validate the riskiest assumptions | 2–4 weeks | **Gate 1** |
| **2. Build** | Deliver the product in secure, fixed-time cycles | 2–4 cycles (~3–6 months) | **Gate 2** |
| **3. Launch** | Release to first real users/mission; prove it in production | 2–4 weeks (+ hypercare) | **Gate 3** |
| **4. Operate & Iterate** | Run, monitor, improve; continuous authorization | Ongoing | Scale or sunset decision |

---

## Phase 0 — Stand-up (and Gate 0)

**Purpose.** Decide, deliberately, that an MVP is worth turning into a sustained product, and charter the team to do it. Standing up a durable IPT commits scarce Red Alpha people, so it is a real decision, not a formality.

**Key steps.** The prospective Product Lead assembles a short case: the user/mission need, the MVP's current state and what it has proven, a first read on desirability/feasibility/viability, and an initial view of the security and authorization path. The sponsor and the team agree on the mission, the people, and the appetite for discovery.

**Artifacts produced.**
- **IPT Charter** — one page: mission, named members and their hats (per document 03), the sponsor, decision rights, and the appetite for Phase 1.
- **Initial risk & security read** — the obvious authorization constraints and unknowns, flagged early by the Security Lead.

**Gate 0 — Commit to productize.** *Decision owner: Sponsor, with the Product Lead making the case.* Proceed only if there is a real need, a plausible path to a desirable/feasible/viable **and** securable product, and Red Alpha is willing to fund a durable team. Otherwise: keep it as an experiment, or stop.

---

## Phase 1 — Discovery & Framing (leads to Gate 1)

**Purpose.** Before committing to a full build, get the outcome clear and knock down the riskiest assumptions while doing so is still cheap. This is where the Amazon, Google, and IDEO lessons do their work.

**Key steps.**
1. **Write the launch narrative (PR/FAQ).** The Product Lead drafts a short mock press release describing the finished product from the user's point of view, plus an FAQ answering the hard questions — market/mission fit, feasibility, cost, competition, legal, and *how it will be secured and authorized*. The team iterates on it until the outcome is clear and compelling, or the idea is honestly abandoned on paper.
2. **Talk to real users/operators.** The Designer (or the hat wearing that role) runs direct discovery — interviews and observation — and synthesizes findings into a small set of insights. Apply the desirable / feasible / viable filter explicitly.
3. **Validate the riskiest assumption.** For the one or two decisions that would most damage the product if wrong, run a lightweight, time-boxed **validation sprint** (a compressed Design Sprint) — map, sketch, decide, prototype a facade, and test with about five users. Spend a prototype, not a product, to learn.
4. **Shape the first slice and the security approach.** The Tech Lead sketches the architecture at low fidelity; the Security Lead drafts the control and authorization approach (document 05). Together they set the **appetite** for the first build cycle.

**Artifacts produced.** PR/FAQ; discovery insights; validation-sprint results; a lightweight architecture sketch; a **security & authorization plan (draft)**; a shaped first cycle with an explicit appetite.

**Gate 1 — Green-light the build.** *Decision owner: Product Lead (the Decider), with sponsor concurrence.* Proceed to build only if the outcome is clear, the riskiest assumptions survived validation, the approach is technically feasible and securable, and the first cycle is shaped with an agreed appetite. Otherwise: iterate discovery, re-scope, or stop.

---

## Phase 2 — Build (leads to Gate 2)

**Purpose.** Deliver the product in **secure, fixed-time cycles**, steadily converging on something a real user can operate. This phase adopts Basecamp's cycle discipline and threads DevSecOps through everything.

**The cadence — the build cycle.** Build proceeds in fixed-time **cycles** (default ~6 weeks; the team may choose shorter given our size — see open questions) followed by a short **cool-down** (~1–2 weeks). Within a cycle:

- The team works on the shaped, bet-on work for that cycle and nothing else — protected, uninterrupted focus.
- **Fixed time, variable scope:** when time runs short, scope flexes down to the most valuable slice. The **circuit breaker** applies — unfinished work is *not* automatically extended into the next cycle; it must re-earn its place at the next bet.
- Progress is tracked honestly on a **hill chart**: each piece of work moves from the uphill "still figuring it out" side to the downhill "just execution" side. This makes hidden uncertainty visible early.
- A light daily sync keeps the team aligned; the Product Lead protects the team from mid-cycle scope creep.

**The cool-down between cycles** is the team's **betting table**: review what shipped, groom and shape upcoming work, do small fixes and tech-debt cleanup, and consciously **bet** on what the next cycle will contain. This is where prioritization happens — deliberately, not by default.

**Security woven in (every cycle).** Security controls are implemented as features are built, not deferred. The CI/CD pipeline enforces automated security checks (the secure software supply chain); the Security Lead keeps a live view of control status and feeds evidence toward authorization. By the end of build, the authorization package should be substantially assembled, not started. See document 05.

**Artifacts produced (accumulating across cycles).** Working, tested increments each cycle; an evolving architecture record; automated test suites and a green pipeline; the **System Security Plan** and control evidence building toward an ATO; release notes; updated hill charts and cycle summaries.

**Gate 2 — Authority & readiness to launch.** *Decision owner: Product Lead + Security Lead jointly, with sponsor and (for authorization) the Authorizing Official.* Proceed to launch only when the product does what the PR/FAQ promised for its first release, quality bars are met, operations/monitoring are ready, and the **authorization to operate is granted (or an interim/continuous authorization path is in place)**. Otherwise: run another cycle, cut scope, or hold for authorization.

---

## Phase 3 — Launch (leads to Gate 3)

**Purpose.** Put the product in front of real users/mission for the first time and prove it holds up in production — deliberately, not in a big-bang.

**Key steps.** Release to a bounded first audience (a pilot cohort, a single mission, or a limited environment) rather than everyone at once. Stand up production monitoring and the operational runbook. Run a **hypercare** window in which the IPT watches closely, responds fast, and fixes what the first real usage reveals. Confirm security monitoring and incident response are live from day one.

**Artifacts produced.** Production deployment and runbook; monitoring/alerting dashboards; incident-response plan; launch retrospective; first real-usage findings feeding the backlog.

**Gate 3 — Sustainment.** *Decision owner: Product Lead + Sponsor.* Confirm the product is stable in production, is being monitored (including its security posture), and has a sustainable operating model. Move it into steady-state operation, or address what's blocking that.

---

## Phase 4 — Operate & Iterate (ongoing)

**Purpose.** Run the product, keep it secure and authorized, and keep improving it — with the *same team* that built it, so ownership and context are preserved.

**Key steps.** The IPT continues in a lighter version of the build cadence: operate and monitor, iterate on real usage, and manage the backlog by value. Security shifts into **continuous monitoring and continuous authorization (cATO)** where applicable — maintaining authorization through ongoing, automated evidence rather than periodic re-accreditation (document 05). Periodically, the sponsor and team make an explicit **scale-or-sunset** decision: grow the product (and, if it outgrows seven people, split into two IPTs per document 03), hold steady, or retire it.

**Artifacts produced.** Ongoing releases; a living security posture and continuous-authorization evidence; operational metrics; periodic product reviews and the scale/sunset decision record.

---

## A worked timeline (illustrative)

For a typical lean product, a plausible calendar from stand-up to a proven launch might look like this. Treat the weeks as a shape to adapt, not a promise.

| Week(s) | Phase | Focus |
|---------|-------|-------|
| 1 | Stand-up | Charter the IPT; **Gate 0** |
| 2–4 | Discovery | PR/FAQ, user discovery, one validation sprint, security plan draft; **Gate 1** |
| 5–10 | Build cycle 1 | Core of the first release; security controls in from the start |
| 11–12 | Cool-down | Ship review, shape & **bet** on cycle 2 |
| 13–18 | Build cycle 2 | Complete the first-release scope; assemble authorization package |
| 19–20 | Cool-down / pre-launch | Final hardening; **Gate 2** (readiness + authorization) |
| 21–23 | Launch | Pilot release + hypercare; **Gate 3** |
| 24+ | Operate & Iterate | Steady-state cadence; continuous authorization; scale/sunset reviews |

That places a first real launch in the **~5–6 month** range for a typical product, with the deliberate understanding that scope — not the schedule — is what flexes if reality pushes back.

## Principles that hold across every phase

- **Gates are cheap decision points, not ceremonies.** Keep them short and honest; their value is the willingness to stop or re-scope.
- **Time is fixed, scope flexes.** Applies inside build cycles and across the whole timeline.
- **Security is continuous, not a final phase.** It is designed in at Gate 0 and maintained through Phase 4.
- **The team is durable.** The people who build it run it; we don't hand off to a separate ops team.
- **Make uncertainty visible.** Hill charts and honest gate reviews surface trouble while it's still cheap.

## Open questions / to resolve

- **Cycle length:** classic six weeks, or shorter (e.g., 3–4 weeks) given our size and desired cadence?
- Do we always run a **validation sprint** in discovery, or only when a decision is genuinely high-risk?
- How formal should **gate reviews** be — a written decision memo, or a live 30-minute review?
- Where exactly does the **authorization timeline** (which can be long) sit relative to build — parallel throughout, or a dedicated pre-launch window? (See document 05.)

*Terms and acronyms are defined in `06-glossary-and-references.md`.*
