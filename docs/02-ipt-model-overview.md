# 02 — The Red Alpha Idea-to-Product Model

*Status: Draft for discussion — v0.2 — August 2026*

## What this document is

This is the heart of the knowledge base: Red Alpha's **standard model for turning a proven concept into a real, supportable, licensable software product** — by way of a customer-funded MVP tailored to that customer's mission. It defines what we mean by an Integrated Product Team, the principles that govern how one operates, when one stands up, and how the whole thing fits together. Documents 03, 04, and 05 then detail the team, the timeline, and the security dimension respectively.

## What an Integrated Product Team is, in our terms

The phrase "Integrated Product Team" comes from disciplined acquisition practice, where an IPT is a **multi-disciplinary team whose members come from every function needed to make a decision and own an outcome**, working together rather than passing work over walls between departments. The recognized best practices for IPTs are directly relevant to us: keep the team **small**, make **roles and responsibilities explicit** up front, set **clear goals**, and lead through **shared accountability and consensus** rather than command.

For Red Alpha, we adopt that spirit and make it concrete:

> A Red Alpha IPT is a small (4–7 person), cross-functional, and durable team that owns a single product from the moment a customer funds its development through launch and into sustained operation. It contains — in people or in hats — every skill needed to design, build, secure, ship, and support the product, so that the team almost never has to wait on an outside function to make progress.

Two words in that definition carry weight. **Cross-functional** means the team is not "the engineers plus some help"; product, design, engineering, security, and operations judgment all live inside the team. **Durable** means the team stays with the product — we do not disband and reform around projects, because the accountability and context that make an IPT valuable are exactly what get destroyed by constant reshuffling.

## The core philosophy

Everything below follows from one belief drawn from the research in document 01: **the expensive mistake in software is building the wrong thing well.** So the model is organized around two disciplines that reinforce each other:

1. **Reduce uncertainty cheaply, before committing.** Before we spend a customer's money on build cycles, we force the important questions — Who is this for? What outcome does it deliver? Is it desirable, feasible, and viable? Can it be secured and authorized in their environment? — to be answered on paper or with a throwaway prototype, where changing our minds is nearly free. (Amazon's PR/FAQ, Google's sprint, IDEO's discovery.)
2. **Then let a small, empowered team own delivery end to end.** Once we commit, a single IPT owns the outcome, works in fixed-time / variable-scope cycles, and is trusted to decide *how* while being held to *what* and *why*. (Spotify's autonomy, Basecamp's appetite and circuit breaker, Amazon's single-threaded ownership.)

The second discipline has a corollary we take seriously once a customer is paying: **uncertainty gets reduced repeatedly, not once.** During the MVP phase every short cycle ends with working capability the customer can actually use, and their reaction shapes the next cycle. A customer who reviews five increments has five cheap opportunities to redirect us; a customer shown one finished product has one expensive one.

## Guiding principles

These are the principles a Red Alpha IPT is expected to live by. They are the standard against which we review how a team is operating.

**Customer/mission outcome first.** Work begins from a clearly stated problem and the outcome we intend to deliver, written down and defensible, not from a feature wish-list. If we cannot articulate the outcome plainly, we are not ready to build.

**One team, one mission, end-to-end ownership.** The IPT owns the product from the customer's first funded cycle through operation. There is no "throw it over the wall to ops" — the people who build it help run it. This is what makes security and quality real rather than someone else's problem.

**Earn the customer's confidence in increments.** Once a customer is funding the work, they see working capability they can use at the end of every short cycle, and their evaluation steers the next one. We do not ask for approval of a finished product; we ask for approval of a direction, repeatedly, while changing course is still cheap. A customer should never be more than one cycle away from being able to redirect us — or to stop.

**Know whose money you are spending.** Every piece of work carries a funding source and a core-or-tailored designation, and every decision to promote customer-funded capability into the licensed core is recorded with its reasoning. This protects the customer from paying for our product and protects Red Alpha from giving it away by accident.

**Fixed time, variable scope.** We budget *appetite* (how much a piece of work is worth) rather than chasing fixed scope on a slipping schedule. When time runs out, scope flexes and we ship the most valuable slice — we do not silently extend.

**Secure and authorizable by design.** Because our products may serve defense and government customers, security and the path to authorization are designed in from the first cycle, not bolted on before launch. Compliance is a continuous property of how we build, not a gate we sprint toward at the end. (See document 05.)

**Autonomy with alignment.** The team decides how it works. In exchange, it commits to shared standards — for engineering, security, and quality — that let Red Alpha stay coherent as more IPTs form. Trust and ownership are cultural, not merely structural; renaming a team an "IPT" changes nothing by itself.

**Small, explicit, accountable.** Keep the team small. Make each person's role and responsibilities explicit. Lead through shared accountability. Empower a single decision-maker to break ties so a lean team never stalls waiting for consensus.

**Make progress visible.** Uncertainty and status are surfaced honestly — what's still being figured out versus what's just execution — so problems appear while they are still cheap to fix.

## Two things we own separately: the core product and the tailoring

Before the lifecycle makes sense, one structural fact has to be stated plainly, because it shapes how the money and the ownership work.

Red Alpha builds and **owns a core product**, which it **licenses** to customers. What a customer funds is not the core — it is the **tailoring**: the integrations, data feeds, deployment work, and mission-specific workflows that make the core actually work in *their* environment for *their* mission. That is the "does it work for me?" development, and it is exactly what a customer is willing to pay for, because it is the part they can judge.

Three consequences follow:

- **The core stays ours.** Customer-funded tailoring does not transfer the core product. The customer receives a licensed, working instance tailored to their mission.
- **Tailoring is not assumed to be core.** Much of it is specific enough that it never belongs in the licensed product, and that is a normal outcome. Whether any given capability is **upstreamed** into the core is a separate decision, made when the answer is clear and recorded in the **upstream log** with its reasoning.
- **Both streams run at once.** Red Alpha keeps funding core-product work while the customer funds tailoring — one team, one backlog, two funding sources, every piece of work tagged. Keeping that split honest is an obligation in both directions, and it is the Product Lead's to own (document 04).

The return on all of this is compounding: each engagement pays for the tailoring while Red Alpha's own investment turns a proven concept into something the *next* customer can license with far less work.

## When an IPT stands up (and what sits outside this model)

This model covers **an IPT taking a POC to product**. It begins at a specific, reviewable moment — when a customer commits money:

> **Entry condition:** A **POC** has proven the idea against an identified customer gap, and a **funding customer** has committed to pay for turning it into an **MVP** tailored to their environment and mission — meaning there is a real mission need, a plausible path to being desirable, feasible, viable, *and* securable/authorizable in that environment, and Red Alpha is willing to commit a durable team.

**How a POC comes to exist is out of scope.** The decision to fund one, who staffs it before any IPT exists, how long it runs, what it must prove, and how it gets shopped to prospective customers are all real questions — but they belong to Red Alpha's broader ideation-to-product concept, which we have not written down yet. Keeping them out is a deliberate choice, not an oversight: subjecting speculative, self-funded exploration to charter-and-gate machinery designed for funded delivery would be exactly the wrong trade. It is also the most significant gap around this model, and it is listed in the open questions below.

The payoff of that boundary is that from Gate 0 onward there is a customer, a budget, and a durable team — so the model can be specific about all three.

The full lifecycle, gates, and timeline are in document 04. In brief, the arc is:

```
  (outside this model: a Red Alpha-funded POC is built and shopped
   until a customer commits to fund the next stage)
          │
          │           Gate 0: Commit and charter (stand up the IPT)
  ┌───────▼───────┐
  │  DISCOVERY    │   PR/FAQ with the customer; validate riskiest assumptions;
  │  & FRAMING    │   draw the core/tailoring boundary; stand up `stage`
  └───────┬───────┘
          │           Gate 1: Green-light the MVP
  ┌───────▼───────┐   THE CUSTOMER'S MONEY
  │   MVP         │   Short cycles (2–3 wks). Each ends with working capability
  │  (tailoring)  │   in `stage`; the customer evaluates and steers the next one.
  └───────┬───────┘
          │           Gate 2: Customer acceptance  ← the customer's decision
  ┌───────▼───────┐   BOTH — two tracks, one team
  │   BUILD       │   core product (RA-funded) ║ tailoring (customer-funded)
  └───────┬───────┘        ↑ upstream decisions move capability left
          │           Gate 3: Authority/readiness to launch
  ┌───────▼───────┐
  │   LAUNCH      │   Into the customer's real environment; prove it there
  └───────┬───────┘
          │           Gate 4: Sustainment & continuous authorization
  ┌───────▼───────┐
  │  OPERATE &    │   Run, monitor, iterate; continuous ATO;
  │  ITERATE      │   decide renew / scale / sunset
  └───────────────┘

  Gate 0 opens the work; after that, Gate N closes Phase N.
```

## How the pieces fit

The model is deliberately simple to hold in your head: a **small durable team** (document 03) moves a product through **clearly gated phases on a predictable cadence** (document 04) — Red Alpha's money proving the concept, then the customer's money tailoring it for their mission in short reviewable increments, then both funding the productized result — with **security and authorization designed in throughout** (document 05), all guided by the principle of **cheap validation before committed delivery** that we drew from the best practitioners (document 01).

## Open questions / to resolve

*These items are also tracked — with owners, decision owners, and what "resolved" looks like — in [`07-open-items.md`](07-open-items.md), the register the whole team works from.*

- **The missing front end:** how does a POC come to exist? Who funds it, who staffs it before an IPT exists, how long it runs, what it must prove to be worth shopping, and who shops it. This model deliberately starts after all of that, which leaves Red Alpha's ideation-to-product concept undocumented — the single largest gap around this knowledge base.
- Who owns **Gate 0** — the decision to stand up an IPT at all? A product council, a single executive, or the prospective Product Lead making the case to the sponsor?
- What do our standard customer terms say about **upstreaming** customer-funded capability into the licensed core? The model assumes it is permitted with agreement; the contract has to actually say so.
- Should every product get a *durable* IPT, or do some smaller efforts get a time-boxed team that disbands? (Trade-off between focus and headcount.)
- How many IPTs can Red Alpha realistically staff at once given our size, and what's the rule when demand exceeds that? Related: can one IPT carry two funding customers' tailoring?

*Definitions of terms used here are in [`06-glossary-and-references.md`](06-glossary-and-references.md).*
