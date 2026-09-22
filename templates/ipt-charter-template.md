# IPT Charter — [Product Name]

*Template — fill in the bracketed fields. A charter should fit on one page. Complete it at **Gate 0 (Commit and charter)** — once a funding customer has committed (see [`docs/05-process-timeline-and-phases.md`](../docs/05-process-timeline-and-phases.md)) — and revisit it at each gate.*

| Field | Value |
|-------|-------|
| **Product / working name** | [name] |
| **Charter date / version** | [YYYY-MM-DD] / v[0.1] |
| **Sponsor / Product Champion** | [name, role] |
| **Funding customer** | [organization; named decision-maker; named evaluation lead] |
| **IP clearance reference** | [RA Legal determination ref / date — **may not be left blank**; see [`docs/01`](../docs/01-ip-origin-and-clearance.md)] |
| **Product Owner (Decider)** | [name] |
| **Charter status** | Draft / Approved at Gate 0 |

---

## 1. Mission — the one-sentence why

> [In one or two sentences: who is this for, and what outcome does it deliver? If you can't state it plainly, you're not ready for Gate 0.]

## 2. The problem and the evidence so far

[2–4 sentences: the customer's mission problem, what the demonstration established about the capability applying to it, and — the part this engagement is actually funded to close — the gap between that capability and something this customer's operators can use in *their* mission space. Name what is known to differ from the originating mission space: organization, authorities, data, integrations, workflows. Reference the PR/FAQ once it exists.]

## 2a. Where the IP came from, and on what basis it is ours

*The question document 01 exists to answer. Fill this in before Gate 0 is decided, not after. A blank here is a blocked gate, not an open action item.*

*Note on the word: **clearance here is legal, not security.** It records RA Legal's determination that Red Alpha has the right to use this IP. Classification, releasability, and personnel clearances are separate matters — record those in §8 with the rest of the security read.*

| | |
|---|---|
| **Origin** | [Contract-derived — name the originating contract / customer · **or** Red Alpha self-funded build · **or** both, described] |
| **Originating customer** | [organization, or *n/a — self-funded*] |
| **Basis for Red Alpha's use** | [RA owns it under the originating contract · originating customer released it · CRADA in place · *n/a — self-funded*] |
| **RA Legal determination** | [reference / date / who signed it] |
| **Scope of that determination** | [what body of IP it covers, and for what kind of use] |
| **Does that scope cover this engagement?** | [Yes — confirmed at Gate 0 by (name), (date) / No — what needs to change first] |

**Originating customer's data:** excluded. No clearance grants any right to it, and none of it is carried into this engagement or into any demonstration environment (see [`docs/06`](../docs/06-security-and-compliance.md)).

## 3. What the customer's money buys — and what stays ours

*The split that keeps the rest of the engagement honest. Revisit it at every gate; it will move as we learn, but it should always be written down. See [`docs/05-process-timeline-and-phases.md`](../docs/05-process-timeline-and-phases.md).*

- **Core product (Red Alpha-funded, Red Alpha-owned, licensed to the customer):** [first read on what belongs here]
- **Tailoring (customer-funded, specific to this environment/mission):** [first read on what belongs here]
- **Licensing arrangement:** [what the customer receives and on what terms]
- **Upstreaming:** decided case by case and recorded in the upstream log. Contract basis: [reference, or TBD]. An entry dispositioned *core* that carries real ownership weight goes to RA Legal before it is treated as ours to license onward.
- **Customer's committed funding:** [amount / period / scope]
- **Customer's committed people:** [who evaluates each cycle's increment, and how much of their time]

## 4. Desirable / Feasible / Viable — first read

- **Desirable** (do users/mission actually want it?): [initial read]
- **Feasible** (can we build it?): [initial read]
- **Viable** (can it be sustained / funded?): [initial read]
- **Securable / authorizable** (can it be secured and authorized to operate *in this customer's environment*?): [initial read — flagged by Security Lead]

## 5. The team and their hats

*Every one of the seven core functions must have a named owner, even if one person wears two hats. See [`docs/04-team-structure-and-roles.md`](../docs/04-team-structure-and-roles.md).*

| Function | Owner | Second hat? |
|----------|-------|-------------|
| Product & customer/mission | [name — Product Owner] | [Design?] |
| Engineering lead & architecture | [name — Tech Lead] | [Delivery?] |
| Software development | [name(s) — Engineer(s)] | [QA?] |
| Security & authorization (ISSO) | [name — Security Lead] | [DevSecOps?] |
| Design & UX | [name / shared / Product Owner's hat] | — |
| Quality & test | [name / engineer's hat] | — |
| Delivery / platform (DevSecOps) | [name / Tech Lead's hat] | — |

**Team size:** [n] — *justify it: which of the seven functions each person carries, and what a team this size is relying on agentic AI to absorb.* **Separation check:** the Product Owner named above is not one of the engineers named above — [confirmed]. **Roles sitting around the team:** Sponsor [name]; Funding customer [org / decision-maker]; Authorizing Official [name/TBD]; RA Legal [name — the determination in §2a is theirs, not the team's].

## 6. Decision rights

- **Decider (breaks ties on *what/why*):** [Product Owner]
- **Technical tie-breaker (*how*):** [Tech Lead]
- **MVP acceptance (Gate 2):** [named customer decision-maker] — *this one is not ours*
- **Risk-acceptance / authorization authority:** [Authorizing Official]
- **Gate decisions:** per [`docs/05-process-timeline-and-phases.md`](../docs/05-process-timeline-and-phases.md) — Gate 0 = the Product Owner (sponsor then commits the team and funding); Gate 1 = Product Owner + sponsor concurrence + customer agreement on tailoring scope; **Gate 2 = the funding customer**; Gate 3 = Product Owner + Security Lead + AO; Gate 4 = Product Owner + Sponsor, customer confirming the operating model.
- **Mid-cycle customer requests:** routed to the next bet by the Product Owner, never injected into a cycle in flight.

## 7. Appetite and cadence for the next phase

- **Discovery appetite (Phase 1):** [e.g., 3 weeks] — we will spend no more than this framing the outcome, drawing the core/tailoring boundary, and validating the riskiest assumption before Gate 1.
- **MVP cycle length:** [2–3 weeks] — each cycle ends with working capability promoted to **stage**.
- **Customer evaluation:** [who, how, how long after each promotion] — the loop that justifies their funding.
- **`stage` environment:** hosted in Red Alpha's controlled environment — [on premises / Red Alpha cloud]. Shaped by [customer-supplied stage CONOPS, dated ___ / Red Alpha's intended production deployment]. Data supplied by [customer / Red Alpha's synthetic default — synthetic unless a funding customer is engaged and supplies its own]; **data class (may not be left blank):** [synthetic (default) / customer-supplied — describe]. Instances: [how many, and for whom — funding customer, pre-sales] — all at the same release as the upstream mainline.
- **Working agreement:** [sync rhythm, where work is tracked, how funding source is tagged on each item]

## 8. Initial risk & security read

[3–5 bullets from the Security Lead: likely impact level, obvious authorization constraints in the customer's environment, whether we build on an existing authorized platform, the stage environment's boundary, biggest unknowns. See [`docs/06-security-and-compliance.md`](../docs/06-security-and-compliance.md).]

## 9. What success looks like

- **At Gate 2 (customer acceptance):** [2–3 observable outcomes that would make the customer say "keep going"]
- **At first launch:** [2–3 measurable or observable outcomes that would tell us the first release succeeded]
- **For the core product:** [what we intend to be able to license to a second customer as a result of this engagement]

---

### Gate 0 decision

- [ ] **RA Legal's IP clearance is on record**, and its scope covers what this engagement will build and license (§2a complete, no blanks)
- [ ] Funding customer's money **committed**, and their people's time committed too
- [ ] Real mission need confirmed
- [ ] Plausible path to desirable + feasible + viable + securable in their environment
- [ ] Core/tailoring and licensing split understood by both sides
- [ ] Durable team staffable with every core function owned, and the **Product Owner separate from the engineers**
- **Decision:** Proceed to Discovery / Iterate / Stop — [decision], [date], [decider]

### Changelog
- v0.1 — [date] — initial charter drafted.

---

*Template changelog: 2026-09-22 — added §2a (IP provenance and clearance), the header clearance-reference field, and the Gate 0 clearance checkbox, following the reframing in [`docs/01`](../docs/01-ip-origin-and-clearance.md).*
