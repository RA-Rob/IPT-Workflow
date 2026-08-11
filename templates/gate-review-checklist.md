# Gate-Review Checklist

*Companion to [`docs/04-process-timeline-and-phases.md`](../docs/04-process-timeline-and-phases.md). A gate review is a short, honest decision — not a ceremony. Every gate has three possible outcomes: **Proceed**, **Iterate/Re-scope**, or **Stop**. Copy the relevant section into your product's working notes and check the boxes live in the review.*

**How to run one:** 30 minutes, the IPT plus the gate's decision owner(s). Walk the checklist, decide, and record the one-line decision at the bottom of each section. If a box can't be checked, that's the conversation — don't check it to be polite.

**Note on numbering.** Gate 0 opens the work by chartering the IPT; after that, **Gate N closes Phase N**.

**Note on who decides.** Most gates are Red Alpha's to decide. **Gate 2 is the funding customer's** — our job there is to make their decision informed and easy to make, not to make it. **Gate 3** needs the Authorizing Official for the authorization itself.

---

## Gate 0 — Commit and charter (stand up the IPT)
*Decision owner: **Sponsor**, with the prospective Product Lead making the case.*

*This is the entry gate. It assumes a POC already exists and has been shopped — how that happened is outside this workflow (see [`docs/04`](../docs/04-process-timeline-and-phases.md)). Gate 0 is both the decision and the ~1 week of chartering it authorizes.*

- [ ] A funding customer's money is **committed**, not merely expected or verbally encouraged.
- [ ] There is a real, stated mission need from that customer (not a solution looking for a problem).
- [ ] Plausible path to **desirable + feasible + viable + securable/authorizable** *in that customer's environment*.
- [ ] A durable 4–7 person team can be staffed, with every core function owned.
- [ ] The **funding and ownership split** is understood by both sides: the core product is Red Alpha's and licensed; the customer's money funds tailoring; upstreaming is decided case by case and recorded.
- [ ] The customer has committed **their operators' time**, not only money — the evaluation loop doesn't work without it.
- [ ] **IPT Charter** drafted ([`templates/ipt-charter-template.md`](ipt-charter-template.md)).
- [ ] Security Lead has begun RMF *Prepare* for the real environment; the likely Authorizing Official is identified.
- [ ] Appetite for Discovery agreed.

**Decision:** Proceed to Discovery / Iterate / Stop — [date] — [owner]

---

## Gate 1 — Green-light the MVP (ends Phase 1 — Discovery & Framing)
*Decision owner: **Product Lead** (Decider), with sponsor concurrence and the customer's agreement on tailoring scope.*

- [ ] **PR/FAQ** written from the customer's operators' point of view; the outcome is clear and compelling (or the idea was honestly reworked).
- [ ] The customer's **real operators** were talked to — not only the people who signed. Insights captured.
- [ ] The **core/tailoring boundary** is written down: what belongs to the Red Alpha core, what is tailoring for this customer.
- [ ] The single riskiest assumption was validated (e.g., via a validation sprint) and survived.
- [ ] Desirable / feasible / viable filter applied explicitly — no red flags unaddressed.
- [ ] Low-fidelity architecture sketch exists and is judged feasible by the Tech Lead.
- [ ] **Security & authorization plan (draft)** exists; system **categorized** (impact level) and control baseline **selected** in draft.
- [ ] **`stage` is stood up and the customer can actually reach it** — named accounts, agreed data class, access rules decided rather than improvised.
- [ ] First MVP cycle is **shaped** with an agreed **appetite**.

**Decision:** Proceed to MVP / Iterate discovery / Stop — [date] — [owner]

---

## End-of-cycle customer evaluation *(every MVP cycle — not a gate)*
*Run by the **Product Lead**. Lightweight, repeated 3–5 times during Phase 2 (MVP). This is the loop the customer is funding.*

- [ ] Working capability was **promoted to stage** this cycle — not a slide, not a mockup.
- [ ] The customer's own people exercised it against realistic tasks.
- [ ] We asked and recorded both questions: *is this right?* and *what should the next cycle change?*
- [ ] Their input is queued for the **next bet**, not injected into a cycle in flight.
- [ ] Anything that landed has an **upstream disposition** if the answer is clear (core / customer-only / deferred), logged with reasoning.
- [ ] Hill chart updated honestly; anything still uphill is named as such.

**Direction:** Confirmed / Adjusted (how?) / Materially changed — [date] — [customer rep]

---

## Gate 2 — Customer acceptance of the MVP (ends Phase 2)
*Decision owner: **the funding customer**. Red Alpha's job is to make this decision informed and easy to make.*

- [ ] The tailored MVP does enough of what the customer's mission needs to be worth continuing to fund.
- [ ] It has been exercised by their operators in **stage** across multiple cycles — acceptance rests on use, not on a demo.
- [ ] The record of each cycle's evaluation and what we changed in response is available and honest.
- [ ] Remaining gaps are named, with a realistic view of what closing them costs.
- [ ] The Security Lead has given a straight account of control status and the **realistic authorization timeline** — the customer is deciding on that too.
- [ ] The customer commits funding for continued work; the core/tailoring split for Phase 3 (Build) is agreed.
- [ ] The **upstream log** is current, so nobody is surprised later about what became whose.

**Decision:** Accept & continue funding / Run another cycle / Re-scope tailoring / Conclude engagement — [date] — [customer decision-maker]

*Alongside, not gating:* Red Alpha's own decision on funding core productization — [decision], [date], [sponsor].

---

## Gate 3 — Authority & readiness to launch (ends Phase 3 — Build)
*Decision owner: **Product Lead + Security Lead** jointly, with Sponsor, the funding customer, and the Authorizing Official.*

- [ ] The product does what the PR/FAQ promised for its **first release**.
- [ ] Quality bars met: tests green, pipeline green, no known launch-blocking defects.
- [ ] Operations ready: monitoring, alerting, runbook, and incident-response plan in place.
- [ ] The customer is ready to **receive it in their real environment** — people, process, and access, not just technology.
- [ ] Security controls **implemented** and **assessed**; SSP, SAR, and POA&M current.
- [ ] **Authorization granted** — ATO issued, or an interim/continuous-authorization path is agreed with the AO. *(Hard condition — do not launch without this.)*
- [ ] Rollback / contingency plan defined.
- [ ] First-audience (pilot) scope defined — not a big-bang release.
- [ ] Both tracks accounted for: the **core** baseline is coherent and documented, and the customer's **tailored** instance is complete for this release.

**Decision:** Proceed to Launch / Run another cycle / Hold for authorization — [date] — [owners]

---

## Gate 4 — Sustainment (ends Phase 4 — Launch)
*Decision owner: **Product Lead + Sponsor**, with the customer confirming the operating model.*

- [ ] Product is stable in the customer's production environment through the hypercare window.
- [ ] Security posture is being **continuously monitored**; incident response is live.
- [ ] A sustainable operating model exists (who runs it, on-call, cadence) — with the *same* durable team — and the customer has agreed to it.
- [ ] `stage` remains available for evaluating what comes next; the increment loop continues.
- [ ] Launch retrospective completed; first-usage findings triaged into the backlog.
- [ ] Path toward **continuous authorization (cATO)** identified where applicable.
- [ ] The **core product** is genuinely closer to being licensable to a second customer — say concretely how.

**Decision:** Move to steady-state Operate & Iterate / Address blockers first — [date] — [owners]

---

## Standing reminders for every gate

- **Time is fixed; scope flexes.** If we're behind, cut scope to the most valuable slice — don't silently extend.
- **Security is continuous.** Each gate advances the RMF steps; nothing security-related is deferred to "the end."
- **Stopping is a valid, cheap outcome.** The point of gates is the willingness to iterate or stop while it's still inexpensive.
- **Know whose money you're spending.** Every bet has a funding source and a core-or-tailored designation; every upstream promotion is recorded.
- **Make uncertainty visible.** Bring the hill chart and the honest unknowns, not just the good news.
