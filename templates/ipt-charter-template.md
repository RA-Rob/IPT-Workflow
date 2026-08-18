# IPT Charter — [Product Name]

*Template — fill in the bracketed fields. A charter should fit on one page. Complete it at **Gate 0 (Commit and charter)** — once a funding customer has committed (see [`docs/04-process-timeline-and-phases.md`](../docs/04-process-timeline-and-phases.md)) — and revisit it at each gate.*

| Field | Value |
|-------|-------|
| **Product / working name** | [name] |
| **Charter date / version** | [YYYY-MM-DD] / v[0.1] |
| **Sponsor / Product Champion** | [name, role] |
| **Funding customer** | [organization; named decision-maker; named evaluation lead] |
| **Product Lead (Decider)** | [name] |
| **Charter status** | Draft / Approved at Gate 0 |

---

## 1. Mission — the one-sentence why

> [In one or two sentences: who is this for, and what outcome does it deliver? If you can't state it plainly, you're not ready for Gate 0.]

## 2. The problem and the evidence so far

[2–4 sentences: the customer's mission problem, what the **POC** proved (and what it deliberately didn't), and the gap between that POC and something this customer could actually use in their environment. Reference the PR/FAQ once it exists.]

## 3. What the customer's money buys — and what stays ours

*The split that keeps the rest of the engagement honest. Revisit it at every gate; it will move as we learn, but it should always be written down. See [`docs/04-process-timeline-and-phases.md`](../docs/04-process-timeline-and-phases.md).*

- **Core product (Red Alpha-funded, Red Alpha-owned, licensed to the customer):** [first read on what belongs here]
- **Tailoring (customer-funded, specific to this environment/mission):** [first read on what belongs here]
- **Licensing arrangement:** [what the customer receives and on what terms]
- **Upstreaming:** decided case by case and recorded in the upstream log. Contract basis: [reference, or TBD]
- **Customer's committed funding:** [amount / period / scope]
- **Customer's committed people:** [who evaluates each cycle's increment, and how much of their time]

## 4. Desirable / Feasible / Viable — first read

- **Desirable** (do users/mission actually want it?): [initial read]
- **Feasible** (can we build it?): [initial read]
- **Viable** (can it be sustained / funded?): [initial read]
- **Securable / authorizable** (can it be secured and authorized to operate *in this customer's environment*?): [initial read — flagged by Security Lead]

## 5. The team and their hats

*Every one of the seven core functions must have a named owner, even if one person wears two hats. See [`docs/03-team-structure-and-roles.md`](../docs/03-team-structure-and-roles.md).*

| Function | Owner | Second hat? |
|----------|-------|-------------|
| Product & customer/mission | [name — Product Lead] | [Design?] |
| Engineering lead & architecture | [name — Tech Lead] | [Delivery?] |
| Software development | [name(s) — Engineer(s)] | [QA?] |
| Security & authorization (ISSO) | [name — Security Lead] | [DevSecOps?] |
| Design & UX | [name / shared / Product Lead's hat] | — |
| Quality & test | [name / engineer's hat] | — |
| Delivery / platform (DevSecOps) | [name / Tech Lead's hat] | — |

**Team size:** [4–7]. **Roles sitting around the team:** Sponsor [name]; Funding customer [org / decision-maker]; Authorizing Official [name/TBD].

## 6. Decision rights

- **Decider (breaks ties on *what/why*):** [Product Lead]
- **Technical tie-breaker (*how*):** [Tech Lead]
- **MVP acceptance (Gate 2):** [named customer decision-maker] — *this one is not ours*
- **Risk-acceptance / authorization authority:** [Authorizing Official]
- **Gate decisions:** per [`docs/04-process-timeline-and-phases.md`](../docs/04-process-timeline-and-phases.md) — Gate 0 = Sponsor; Gate 1 = Product Lead + sponsor concurrence + customer agreement on tailoring scope; **Gate 2 = the funding customer**; Gate 3 = Product Lead + Security Lead + AO; Gate 4 = Product Lead + Sponsor, customer confirming the operating model.
- **Mid-cycle customer requests:** routed to the next bet by the Product Lead, never injected into a cycle in flight.

## 7. Appetite and cadence for the next phase

- **Discovery appetite (Phase 1):** [e.g., 3 weeks] — we will spend no more than this framing the outcome, drawing the core/tailoring boundary, and validating the riskiest assumption before Gate 1.
- **MVP cycle length:** [2–3 weeks] — each cycle ends with working capability promoted to **stage**.
- **Customer evaluation:** [who, how, how long after each promotion] — the loop that justifies their funding.
- **`stage` environment:** hosted in Red Alpha's controlled environment — [on premises / Red Alpha cloud]. Shaped by [customer-supplied stage CONOPS, dated ___ / Red Alpha's intended production deployment]. Data supplied by [customer / Red Alpha]; **data class:** [synthetic / sanitized / operational]. Instances: [how many, and for whom — funding customer, pre-sales] — all at the same release as the upstream mainline.
- **Working agreement:** [sync rhythm, where work is tracked, how funding source is tagged on each item]

## 8. Initial risk & security read

[3–5 bullets from the Security Lead: likely impact level, obvious authorization constraints in the customer's environment, whether we build on an existing authorized platform, the stage environment's boundary, biggest unknowns. See [`docs/05-security-and-compliance.md`](../docs/05-security-and-compliance.md).]

## 9. What success looks like

- **At Gate 2 (customer acceptance):** [2–3 observable outcomes that would make the customer say "keep going"]
- **At first launch:** [2–3 measurable or observable outcomes that would tell us the first release succeeded]
- **For the core product:** [what we intend to be able to license to a second customer as a result of this engagement]

---

### Gate 0 decision

- [ ] Funding customer's money **committed**, and their people's time committed too
- [ ] Real mission need confirmed
- [ ] Plausible path to desirable + feasible + viable + securable in their environment
- [ ] Core/tailoring and licensing split understood by both sides
- [ ] Durable 4–7 person team staffable with every core function owned
- **Decision:** Proceed to Discovery / Iterate / Stop — [decision], [date], [decider]

### Changelog
- v0.1 — [date] — initial charter drafted.
