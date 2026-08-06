# Gate-Review Checklist

*Companion to [`docs/04-process-timeline-and-phases.md`](../docs/04-process-timeline-and-phases.md). A gate review is a short, honest decision — not a ceremony. Every gate has three possible outcomes: **Proceed**, **Iterate/Re-scope**, or **Stop**. Copy the relevant section into your product's working notes and check the boxes live in the review.*

**How to run one:** 30 minutes, the IPT plus the gate's decision owner(s). Walk the checklist, decide, and record the one-line decision at the bottom of each section. If a box can't be checked, that's the conversation — don't check it to be polite.

---

## Gate 0 — Commit to productize (stand up the IPT)
*Decision owner: **Sponsor**, with Product Lead making the case.*

- [ ] There is a real, stated user/mission need (not a solution looking for a problem).
- [ ] The MVP has proven something concrete; we can say what.
- [ ] Plausible path to **desirable + feasible + viable + securable/authorizable**.
- [ ] A durable 4–7 person team can be staffed, with every core function owned.
- [ ] **IPT Charter** drafted ([`templates/ipt-charter-template.md`](ipt-charter-template.md)).
- [ ] Security Lead has given an initial risk read (RMF *Prepare* begun).
- [ ] Appetite for Discovery agreed.

**Decision:** Proceed / Iterate / Stop — [date] — [owner]

---

## Gate 1 — Green-light the build
*Decision owner: **Product Lead** (Decider), with sponsor concurrence.*

- [ ] **PR/FAQ** written and the outcome is clear and compelling (or the idea was honestly reworked).
- [ ] Real users/operators were talked to; insights captured.
- [ ] The single riskiest assumption was validated (e.g., via a validation sprint) and survived.
- [ ] Desirable / feasible / viable filter applied explicitly — no red flags unaddressed.
- [ ] Low-fidelity architecture sketch exists and is judged feasible by the Tech Lead.
- [ ] **Security & authorization plan (draft)** exists; system **categorized** (impact level) and control baseline **selected** in draft.
- [ ] First build cycle is **shaped** with an agreed **appetite**.

**Decision:** Proceed to Build / Iterate discovery / Stop — [date] — [owner]

---

## Gate 2 — Authority & readiness to launch
*Decision owner: **Product Lead + Security Lead** jointly, with Sponsor and Authorizing Official.*

- [ ] The product does what the PR/FAQ promised for its **first release**.
- [ ] Quality bars met: tests green, pipeline green, no known launch-blocking defects.
- [ ] Operations ready: monitoring, alerting, runbook, and incident-response plan in place.
- [ ] Security controls **implemented** and **assessed**; SSP, SAR, and POA&M current.
- [ ] **Authorization granted** — ATO issued, or an interim/continuous-authorization path is agreed with the AO. *(Hard condition — do not launch without this.)*
- [ ] Rollback / contingency plan defined.
- [ ] First-audience (pilot) scope defined — not a big-bang release.

**Decision:** Proceed to Launch / Run another cycle / Hold for authorization — [date] — [owners]

---

## Gate 3 — Sustainment
*Decision owner: **Product Lead + Sponsor**.*

- [ ] Product is stable in production through the hypercare window.
- [ ] Security posture is being **continuously monitored**; incident response is live.
- [ ] A sustainable operating model exists (who runs it, on-call, cadence) — with the *same* durable team.
- [ ] Launch retrospective completed; first-usage findings triaged into the backlog.
- [ ] Path toward **continuous authorization (cATO)** identified where applicable.

**Decision:** Move to steady-state Operate & Iterate / Address blockers first — [date] — [owners]

---

## Standing reminders for every gate

- **Time is fixed; scope flexes.** If we're behind, cut scope to the most valuable slice — don't silently extend.
- **Security is continuous.** Each gate advances the RMF steps; nothing security-related is deferred to "the end."
- **Stopping is a valid, cheap outcome.** The point of gates is the willingness to iterate or stop while it's still inexpensive.
- **Make uncertainty visible.** Bring the hill chart and the honest unknowns, not just the good news.
