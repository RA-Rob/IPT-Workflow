# IPT Charter — [Product Name]

*Template — fill in the bracketed fields. A charter should fit on one page. Complete it at **Phase 0 / Gate 0** (see [`docs/04-process-timeline-and-phases.md`](../docs/04-process-timeline-and-phases.md)) and revisit it at each gate.*

| Field | Value |
|-------|-------|
| **Product / working name** | [name] |
| **Charter date / version** | [YYYY-MM-DD] / v[0.1] |
| **Sponsor / Product Champion** | [name, role] |
| **Product Lead (Decider)** | [name] |
| **Charter status** | Draft / Approved at Gate 0 |

---

## 1. Mission — the one-sentence why

> [In one or two sentences: who is this for, and what outcome does it deliver? If you can't state it plainly, you're not ready for Gate 0.]

## 2. The problem and the evidence so far

[2–4 sentences: the user/mission problem, what the MVP has already proven, and the gap between the MVP and a real product. Reference the PR/FAQ once it exists.]

## 3. Desirable / Feasible / Viable — first read

- **Desirable** (do users/mission actually want it?): [initial read]
- **Feasible** (can we build it?): [initial read]
- **Viable** (can it be sustained / funded?): [initial read]
- **Securable / authorizable** (can it be secured and authorized to operate?): [initial read — flagged by Security Lead]

## 4. The team and their hats

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

**Team size:** [4–7]. **Roles sitting around the team:** Sponsor [name]; Authorizing Official [name/TBD].

## 5. Decision rights

- **Decider (breaks ties on *what/why*):** [Product Lead]
- **Technical tie-breaker (*how*):** [Tech Lead]
- **Risk-acceptance / authorization authority:** [Authorizing Official]
- **Gate decisions:** per [`docs/04-process-timeline-and-phases.md`](../docs/04-process-timeline-and-phases.md) (Gate 0 = Sponsor; Gate 1 = Product Lead + sponsor concurrence; Gate 2 = Product Lead + Security Lead + AO; Gate 3 = Product Lead + Sponsor).

## 6. Appetite for the next phase

- **Discovery appetite (Phase 1):** [e.g., 3 weeks] — we will spend no more than this framing the outcome and validating the riskiest assumption before Gate 1.
- **Working agreement / cadence:** [cycle length, sync rhythm, where work is tracked]

## 7. Initial risk & security read

[3–5 bullets from the Security Lead: likely impact level, obvious authorization constraints, whether we build on an existing authorized platform, biggest unknowns. See [`docs/05-security-and-compliance.md`](../docs/05-security-and-compliance.md).]

## 8. What success looks like at first launch

[2–3 measurable or observable outcomes that would tell us the first release succeeded.]

---

### Gate 0 decision

- [ ] Real user/mission need confirmed
- [ ] Plausible path to desirable + feasible + viable + securable
- [ ] Red Alpha willing to fund a durable team
- **Decision:** Proceed to Discovery / Iterate / Stop — [decision], [date], [decider]

### Changelog
- v0.1 — [date] — initial charter drafted.
