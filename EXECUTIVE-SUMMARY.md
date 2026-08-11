# The Red Alpha IPT Workflow — Executive Summary

*One-page overview for leadership. Full detail in the `docs/` folder. Status: Draft for discussion — August 2026.*

## Bottom line up front

**A small, durable Integrated Product Team takes a proven POC to a shipped product in about eight months from the day a customer commits funding — and the customer approves the direction every two to three weeks along the way, not once at the end.**

- **Two stages, two wallets.** Red Alpha funds a **POC** to prove an idea against a real capability gap, then shops it. A **funding customer** then pays for the **tailoring** that makes it work in *their* environment for *their* mission. POC earns interest; MVP earns commitment. They are not the same thing and conflating them is how programs get into trouble.
- **We keep the asset.** The **core product stays Red Alpha's and is licensed** to the customer. Customer money buys the "does it work for me?" fringe development, not the product. Promoting any of that tailoring into the core is a separate decision, recorded with its reasoning — which protects the customer from funding our roadmap and us from giving away the core by accident.
- **Each engagement compounds.** The customer's money pays for their mission; our parallel core investment turns the same work into something the *next* customer can license for far less. That is the business case for doing it this way.
- **Risk is retired incrementally, in the open.** Every MVP cycle puts working capability into a **stage** environment the customer's own operators use. Their reaction steers the next cycle. Neither side is ever more than one short cycle from redirecting the work — or stopping it — and no one is ever surprised at a launch review.
- **Five phases, five gates, one team.** Gate 0 charters the IPT once money is committed; then Gate N closes Phase N. **Gate 2 — accepting the MVP — is the customer's decision, not ours.** Time is fixed and scope flexes at every gate.
- **Security and authorization are continuous, not a pre-launch scramble.** RMF work starts at Gate 0 and the authorization package is assembled as we build, which is the single biggest lever on hitting launch dates in a government context.
- **The team that builds it runs it.** 4–7 people, every essential function owned by name, one **Decider** to break ties, no handoff to a separate ops group.

**What we need from leadership:** the four decisions listed at the bottom of this page — most urgently, **how a POC gets funded and staffed in the first place**, which this workflow deliberately does not cover.

---

**What this is.** A standard, repeatable way for Red Alpha to turn a proven proof of concept into a shipped, secure, supportable software product we own and license — by way of a customer-funded MVP tailored to that customer's mission, delivered in short reviewable increments. The vehicle is a small, durable, cross-functional **Integrated Product Team (IPT)**.

**Where this workflow starts and stops.** It covers **an IPT taking a POC to product**: it begins the moment a customer commits funding and runs through sustained operation. How a POC comes to exist — who funds it, who staffs it before any IPT exists, what it must prove, who shops it — is deliberately **out of scope**, because subjecting speculative self-funded exploration to charter-and-gate machinery built for funded delivery would be the wrong trade. It is also the largest gap in our documented pipeline, and closing it is the first ask below.

**The core belief.** The expensive mistake in software is *building the wrong thing well.* So the workflow does two things in order: **(1) reduce uncertainty cheaply before committing, then (2) let a small empowered team own delivery end to end.** Both come from studying how the best builders work — Amazon (write the customer outcome first), Google Ventures (validate in a one-week sprint), IDEO (human-centered discovery), Spotify (autonomy with alignment), and Basecamp (fixed-time cycles built for small teams).

**The team.** A Red Alpha IPT is **4–7 people** who own a product from the customer's first funded cycle through operation. Because there are more essential functions than people, most members wear more than one hat — but all seven functions always have a named owner: product, engineering leadership, development, **security/authorization**, design, quality, and delivery/DevSecOps. The Product Lead is the single **Decider** who breaks ties so a lean team never stalls. The same team that builds the product runs it — we commit those people once a customer is paying, which is what Gate 0 decides.

**The process — five phases, five gates.**

| Phase | Purpose | Funded by | Gate |
|-------|---------|-----------|------|
| *(entry)* | A POC exists; a customer commits funding; charter the IPT | — | Gate 0 — commit and charter |
| **1. Discovery** | Frame the outcome (PR/FAQ); draw the core/tailoring line | Customer + RA | Gate 1 — green-light the MVP |
| **2. MVP** | Tailor the core to the customer's mission, in short cycles | Customer | Gate 2 — **customer acceptance** |
| **3. Build** | Two tracks: productize the core, continue tailoring | RA + Customer | Gate 3 — authority & readiness to launch |
| **4. Launch** | Pilot in the customer's real environment | RA + Customer | Gate 4 — sustainment |
| **5. Operate & Iterate** | Run, monitor, improve; continuous authorization | RA + Customer | Renew, scale, or sunset |

Gate 0 opens the work; after that, **Gate N closes Phase N**. Gates are short, honest decision points — proceed, re-scope, or stop — and **Gate 2 is the customer's, not ours.** Inside every cycle, **time is fixed and scope flexes**: when time runs out we ship the most valuable slice rather than slipping the date. A typical product reaches a proven first launch roughly **8 months after a customer commits funding**, with the POC and the period spent shopping it ahead of that on their own clock.

**The customer approves the direction repeatedly, not once.** This is the change that matters most in practice. During the MVP phase the team works in **short 2–3 week cycles**, and each one ends with working capability promoted to a **stage** environment the customer's own operators can actually use. They exercise it, tell us where we have it wrong, and that steers the next cycle. Over four months a customer sees four or five increments and gets as many cheap chances to redirect us — instead of one expensive verdict on a finished product. Neither side is ever more than a cycle away from being able to change course or stop.

**Security is not a phase — it's continuous.** Because our products may serve defense and government customers, security and the path to authorization (NIST RMF, ATO / continuous-ATO, DevSecOps) are read at Gate 0 and maintained through operations. The authorization package is assembled *as we build*, not written under deadline before launch — the single biggest lever for hitting launch dates in a government context. One new wrinkle deserves leadership attention: the **stage** environment is the first place people outside Red Alpha touch a running system, so where it lives and what data it may hold are real authorization-boundary decisions, not infrastructure details.

**What we're asking of leadership and the team.** Read the full workflow, then help us settle four decisions:

1. **How a POC gets funded and staffed** — the front end this workflow deliberately doesn't cover. Until it's written down, the start of our pipeline is undefined even though the rest is specific.
2. **Where the `stage` environment lives and what data it may hold** — Red Alpha-hosted or in the customer's enclave. This sets the authorization boundary and is the biggest unresolved security question.
3. **What our customer terms permit on upstreaming** — the workflow assumes we can promote customer-funded capability into the licensed core with agreement; the contracts have to actually say so.
4. **Cycle length in the build phase**, plus whether security leads are embedded per-team or shared, and which products need formal government authorization versus commercial-grade security.

---

*Read next: [`docs/02-ipt-model-overview.md`](docs/02-ipt-model-overview.md) (the model), [`docs/03-team-structure-and-roles.md`](docs/03-team-structure-and-roles.md) (the team), [`docs/04-process-timeline-and-phases.md`](docs/04-process-timeline-and-phases.md) (the process). Background research: [`docs/01-research-brief-incubator-methodologies.md`](docs/01-research-brief-incubator-methodologies.md).*
