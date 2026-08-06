# The Red Alpha IPT Framework — Executive Summary

*One-page overview for leadership. Full detail in the `docs/` folder. Status: Draft for discussion — August 2026.*

**What this is.** A standard, repeatable way for Red Alpha to turn a validated idea and its MVP into a shipped, secure, supportable software product — using small, durable, cross-functional **Integrated Product Teams (IPTs)**.

**The core belief.** The expensive mistake in software is *building the wrong thing well.* So the framework does two things in order: **(1) reduce uncertainty cheaply before committing, then (2) let a small empowered team own delivery end to end.** Both come from studying how the best builders work — Amazon (write the customer outcome first), Google Ventures (validate in a one-week sprint), IDEO (human-centered discovery), Spotify (autonomy with alignment), and Basecamp (fixed-time cycles built for small teams).

**The team.** A Red Alpha IPT is **4–7 people** who own a product from productization through operation. Because there are more essential functions than people, most members wear more than one hat — but all seven functions always have a named owner: product, engineering leadership, development, **security/authorization**, design, quality, and delivery/DevSecOps. The Product Lead is the single **Decider** who breaks ties so a lean team never stalls. The same team that builds the product runs it.

**The process — four phases, four gates.**

| Phase | Purpose | Gate |
|-------|---------|------|
| **Stand-up** | Charter the team; decide it's worth building | Gate 0 — commit to productize |
| **Discovery** | Frame the outcome (PR/FAQ); validate the riskiest assumption | Gate 1 — green-light the build |
| **Build** | Deliver in secure, fixed-time cycles | Gate 2 — authority & readiness to launch |
| **Launch** | Pilot to real users; prove it in production | Gate 3 — sustainment |
| **Operate & Iterate** | Run, monitor, improve; continuous authorization | Scale or sunset |

Gates are short, honest decision points — proceed, re-scope, or stop — that keep a lean team from building the wrong thing. Inside the build, **time is fixed and scope flexes**: when time runs out we ship the most valuable slice rather than slipping the date. A typical product reaches a proven first launch in roughly **5–6 months**.

**Security is not a phase — it's continuous.** Because our products may serve defense and government customers, security and the path to authorization (NIST RMF, ATO / continuous-ATO, DevSecOps) are designed in from Gate 0 and maintained through operations. The authorization package is assembled *as we build*, not written under deadline before launch — the single biggest lever for hitting launch dates in a government context.

**What we're asking of the team.** Read the full framework, then help us settle a handful of open decisions: cycle length (six weeks vs. shorter), whether security leads are embedded per-team or shared, and which products need formal government authorization versus commercial-grade security.

---

*Read next: `docs/02-ipt-model-overview.md` (the model), `docs/03-team-structure-and-roles.md` (the team), `docs/04-process-timeline-and-phases.md` (the process). Background research: `docs/01-research-brief-incubator-methodologies.md`.*
