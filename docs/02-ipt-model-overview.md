# 02 — The Red Alpha Idea-to-Product Model

*Status: Draft for discussion — v0.1 — August 2026*

## What this document is

This is the heart of the knowledge base: Red Alpha's **standard model for turning a validated idea and its MVP into a real, supportable software product**. It defines what we mean by an Integrated Product Team, the principles that govern how one operates, when one stands up, and how the whole thing fits together. Documents 03, 04, and 05 then detail the team, the timeline, and the security dimension respectively.

## What an Integrated Product Team is, in our terms

The phrase "Integrated Product Team" comes from disciplined acquisition practice, where an IPT is a **multi-disciplinary team whose members come from every function needed to make a decision and own an outcome**, working together rather than passing work over walls between departments. The recognized best practices for IPTs are directly relevant to us: keep the team **small**, make **roles and responsibilities explicit** up front, set **clear goals**, and lead through **shared accountability and consensus** rather than command.

For Red Alpha, we adopt that spirit and make it concrete:

> A Red Alpha IPT is a small (4–7 person), cross-functional, and durable team that owns a single product from the moment it graduates from MVP through launch and into sustained operation. It contains — in people or in hats — every skill needed to design, build, secure, ship, and support the product, so that the team almost never has to wait on an outside function to make progress.

Two words in that definition carry weight. **Cross-functional** means the team is not "the engineers plus some help"; product, design, engineering, security, and operations judgment all live inside the team. **Durable** means the team stays with the product — we do not disband and reform around projects, because the accountability and context that make an IPT valuable are exactly what get destroyed by constant reshuffling.

## The core philosophy

Everything below follows from one belief drawn from the research in document 01: **the expensive mistake in software is building the wrong thing well.** So the model is organized around two disciplines that reinforce each other:

1. **Reduce uncertainty cheaply, before committing.** Before we pour build effort into productizing an MVP, we force the important questions — Who is this for? What outcome does it deliver? Is it desirable, feasible, and viable? Can it be secured and authorized? — to be answered on paper or with a throwaway prototype, where changing our minds is nearly free. (Amazon's PR/FAQ, Google's sprint, IDEO's discovery.)
2. **Then let a small, empowered team own delivery end to end.** Once we commit, a single IPT owns the outcome, works in fixed-time / variable-scope cycles, and is trusted to decide *how* while being held to *what* and *why*. (Spotify's autonomy, Basecamp's appetite and circuit breaker, Amazon's single-threaded ownership.)

## Guiding principles

These are the principles a Red Alpha IPT is expected to live by. They are the standard against which we review how a team is operating.

**Customer/mission outcome first.** Work begins from a clearly stated problem and the outcome we intend to deliver, written down and defensible, not from a feature wish-list. If we cannot articulate the outcome plainly, we are not ready to build.

**One team, one mission, end-to-end ownership.** The IPT owns the product from productization through operation. There is no "throw it over the wall to ops" — the people who build it help run it. This is what makes security and quality real rather than someone else's problem.

**Fixed time, variable scope.** We budget *appetite* (how much a piece of work is worth) rather than chasing fixed scope on a slipping schedule. When time runs out, scope flexes and we ship the most valuable slice — we do not silently extend.

**Secure and authorizable by design.** Because our products may serve defense and government customers, security and the path to authorization are designed in from the first cycle, not bolted on before launch. Compliance is a continuous property of how we build, not a gate we sprint toward at the end. (See document 05.)

**Autonomy with alignment.** The team decides how it works. In exchange, it commits to shared standards — for engineering, security, and quality — that let Red Alpha stay coherent as more IPTs form. Trust and ownership are cultural, not merely structural; renaming a team an "IPT" changes nothing by itself.

**Small, explicit, accountable.** Keep the team small. Make each person's role and responsibilities explicit. Lead through shared accountability. Empower a single decision-maker to break ties so a lean team never stalls waiting for consensus.

**Make progress visible.** Uncertainty and status are surfaced honestly — what's still being figured out versus what's just execution — so problems appear while they are still cheap to fix.

## When an IPT stands up (and when it doesn't)

This model governs the **productization** stage. The trigger to stand up an IPT is a specific, reviewable moment:

> **Entry condition:** An idea has produced a working **MVP**, and a review has decided the MVP is worth turning into a sustained product — meaning there is a real user/mission need, a plausible path to being desirable, feasible, viable, *and* securable/authorizable, and Red Alpha is willing to fund a durable team to pursue it.

What comes *before* that moment — early ideation, research spikes, throwaway experiments, and the building of the MVP itself — is intentionally lighter-weight and outside this model. Those activities feed the entry gate; they don't need a full IPT. Standing up a durable, cross-functional team is a real commitment of Red Alpha's scarce people, so we make it deliberately, at a defined gate, and not for every experiment.

The full lifecycle, gates, and timeline are in document 04. In brief, the arc is:

```
  Idea / MVP (pre-IPT)
        │
        ▼
  ┌───────────────┐   Gate 0: Commit to productize (stand up the IPT)
  │  DISCOVERY    │   Frame the outcome (PR/FAQ), validate riskiest assumptions
  └───────┬───────┘
          │           Gate 1: Green-light the build
  ┌───────▼───────┐
  │   BUILD       │   Fixed-time cycles; secure-by-design; toward first release
  └───────┬───────┘
          │           Gate 2: Authority/readiness to launch
  ┌───────▼───────┐
  │   LAUNCH      │   Release to first real users/mission; prove it in production
  └───────┬───────┘
          │           Gate 3: Sustainment & continuous authorization
  ┌───────▼───────┐
  │  OPERATE &    │   Run, monitor, iterate; continuous ATO; decide scale/sunset
  │  ITERATE      │
  └───────────────┘
```

## How the pieces fit

The model is deliberately simple to hold in your head: a **small durable team** (document 03) moves a product through **a few clearly gated phases on a predictable cadence** (document 04), with **security and authorization designed in throughout** (document 05), all guided by the principle of **cheap validation before committed delivery** that we drew from the best practitioners (document 01).

## Open questions / to resolve

- Who owns **Gate 0** — the decision to stand up an IPT at all? A product council, a single executive, or the prospective Product Lead making the case?
- Should every product get a *durable* IPT, or do some smaller efforts get a time-boxed team that disbands? (Trade-off between focus and headcount.)
- How many IPTs can Red Alpha realistically staff at once given our size, and what's the rule when demand exceeds that?

*Definitions of terms used here are in `06-glossary-and-references.md`.*
