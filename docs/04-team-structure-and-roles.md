# 04 — Team Structure, Roles, and Responsibilities

*Status: Draft for discussion — v0.4 — September 2026*

## How an IPT is sized

An IPT is **the smallest team that covers all seven functions and preserves the separation of decision rights.** Those are two different constraints, they bind in different ways, and conflating them is how team-sizing arguments go wrong.

**The first constraint is capacity, and it has moved.** The working default used to be 4–7 people, on the reasoning that below four there were more essential functions than there were hands to cover them. Red Alpha's heavy use of **agentic AI software development** changes that arithmetic: a given headcount now delivers considerably more built software than it did, so the number of people required to carry a product is genuinely lower than it was. The floor is below four. **Exactly where it sits is not settled** — it is the live question in OI-20 — so this document deliberately does not assert a range. Size the team to the work, and justify the number in the charter rather than reading it off a table.

**The second constraint is accountability, and it has not moved at all.** No amount of AI capacity changes who is allowed to decide what. The separation described in the next section holds at every size, and it is what actually sets the floor: a team stops being viable not when it runs out of hands but when it runs out of people to keep the decision rights apart.

We treat **functions** (the work that must happen) separately from **people** (who does it) throughout. A smaller team still covers all seven functions; it concentrates them onto fewer individuals. As the team grows, functions split apart into dedicated roles.

## The separation that sets the floor

**The person who owns the product must not be the person who builds it.** This is the one structural rule that no team size, tooling improvement, or scheduling pressure relaxes.

Concretely: the **Product Owner** gathers the requirements **directly from the customer**, decides what is worth building and why, and judges whether what came back meets the mission need. The **Tech Lead and engineers** decide how it gets built and build it. Those are different people, always — not different hats on one person.

**Why this is a rule and not a preference.** When the same person defines a requirement and implements it, nothing independent stands between the mission need and what was convenient to build. Requirements quietly reshape themselves toward the implementation during development, and nobody is positioned to notice, because the only person who could raise the objection is the person who made the trade. The customer discovers it at an evaluation, or later. The failure is not dishonesty; it is the ordinary drift that happens when there is no second pair of eyes with standing to say "that is not what they asked for."

**Agentic AI makes this more important, not less.** When building was the expensive part, the binding constraint on a product was whether we *could* build it. That is much less true now — which moves the binding constraint to whether we are building **the right thing**, judged against a mission need somebody actually gathered. That judgment is exactly the Product Owner's job, and it is the one part of the work that does not get cheaper when the code gets cheaper. A smaller team therefore leans *harder* on this separation, because there is less else standing between a requirement and a release.

**Requirements do not move.** The Product Owner owns the customer requirements relationship personally. It does not transfer to a delivery or project-management function, and it does not get delegated to whoever happens to be talking to the customer that week. There is no project-manager seat on an IPT; if one exists elsewhere at Red Alpha, gathering requirements is still not theirs. This is what keeps the line between **the owner of the product** and **the developers of the product** legible to everyone, the customer included.

## The core functions every IPT must cover

Regardless of headcount, every IPT must own all seven of these functions. Nothing here is optional; the only question is who wears the hat.

1. **Product & customer/mission ownership** — deciding what we build and why, in what order, and being the voice of the user/mission.
2. **Engineering leadership & architecture** — the technical direction, key design decisions, and integrity of the system.
3. **Software development** — building, testing, and integrating the product itself.
4. **Security & authorization** — designing in security, and owning the path to (and maintenance of) authorization to operate.
5. **Design & user experience** — understanding users and shaping how the product works and feels.
6. **Quality & test** — that what we ship actually works and keeps working.
7. **Delivery / platform (DevSecOps)** — the pipeline, environments, and automation that let us ship safely and repeatably.

## The roles

### Product Owner *(also the team's Decider)*
Owns the product outcome end to end. **Gathers the requirements directly from the customer** — this is the role's defining responsibility and it does not transfer to anyone else, on any team size. Frames the problem and the launch narrative (the PR/FAQ-style entry document), maintains and prioritizes the backlog by value, sets the **appetite** for each piece of work, and is the single person empowered to **break ties** so the team never stalls waiting for consensus. Manages the relationship with the sponsor, the **funding customer** and their mission owners, and the Authorizing Official's expectations. Accountable for *what* and *why*; explicitly not the person deciding *how* the code is written — **and explicitly not a person who writes it.** That second exclusion is the separation described above, and it is the one constraint that holds at every team size. This is the role that carries Amazon's "single-threaded owner" and Google's "Decider" ideas.

Two responsibilities specific to how Red Alpha is funded sit with this role, and they are not delegable. The Product Owner **runs the customer evaluation loop** — making sure every short cycle in the MVP phase ends with working capability the customer can actually exercise in **stage**, and that what they say comes back as input to the next bet rather than as a mid-cycle interruption. And the Product Owner **owns the integrity of the funding boundary**: every piece of work carries a funding source and a core-or-tailored designation, and every decision to promote customer-funded **tailoring** into the licensed **core product** is recorded in the **upstream log** with its reasoning and any agreement it requires (document 05). Nobody else is positioned to see both sides of that line.

That responsibility has an IP half to it. The Product Owner does not decide what Red Alpha owns — that is RA Legal's determination, not a product judgment — but the Product Owner is the person who has to **notice when the question is live and route it**. Two moments in particular: confirming at Gate 0 that the **IP clearance** on record still covers what this engagement will build and license (document 05), and flagging an upstream-log entry whose promotion into the core would make it IP we intend to reuse with the next customer. Both are cheap when caught early and expensive when caught at the next engagement's Gate 0.

### Tech Lead / Lead Engineer
Owns technical direction: architecture, key trade-offs, technical standards, and the technical feasibility judgment at each gate. Breaks technical ties, keeps the system coherent, and is the senior hands-on builder. Partners with the Security Lead so that security decisions and architecture decisions are made together, not in sequence. Accountable for *how* we build and for technical risk.

### Software Engineer(s)
Build, test, and integrate the product. On a lean team, engineers are generalists who move across front end, back end, and infrastructure as needed, and who own quality for what they write (tests included). Depending on team size there are one to three of them, and they typically carry a second hat (quality, delivery, or design support).

### Security Lead *(ISSO-style role)*
Owns security-by-design and the authorization path. Translates the product into the language of controls and risk, drives the RMF/ATO (and, where applicable, continuous-ATO) activities described in document 06, and keeps the security posture continuously visible rather than checking it at the end. On a lean team this person is also the DevSecOps conscience — making sure the pipeline enforces security automatically. This role is non-negotiable given Red Alpha's defense/government context; it is a hat someone must wear even on a team of four.

### Designer / UX
Owns human-centered discovery and the shape of the user experience: talks to real users/operators, synthesizes needs into insight, and turns concepts into testable prototypes. On the smallest teams this is a part-time or shared hat (often carried by the Product Owner or a shared design resource); it becomes a dedicated seat as the team grows, because in most products design quality is a direct driver of adoption.

### Quality / Test
Owns confidence that the product works and keeps working — test strategy, automation, and the definition of "done." On lean teams this is a hat worn by an engineer and enforced through automation in the pipeline rather than by a separate manual tester; it becomes a dedicated role for larger or higher-assurance products.

### Delivery / Platform (DevSecOps)
Owns the CI/CD pipeline, environments, infrastructure-as-code, and the automation that makes shipping safe and repeatable — the "secure software supply chain." On lean teams this is usually the Tech Lead's or an engineer's second hat, tightly paired with the Security Lead. This hat also owns the `dev → stage → prod` promotion path, which makes it responsible for something the whole customer relationship rests on: **stage has to be reliably reachable and reliably current**, because a customer who cannot exercise this cycle's increment cannot approve the direction, and the loop that justifies their funding stalls. "Current" is a specific obligation: stage lives in Red Alpha's controlled environment and may be replicated, and this hat keeps **every instance on the same release as the upstream mainline** (document 06).

## How functions concentrate as the team gets smaller

The same seven functions are always covered. What changes with headcount is how many hats each person wears — and which hats are *allowed* to share a head. That second column is the one that matters, because it is the separation rule expressed as a staffing constraint:

| Function | Whose it is by default | May it double onto the **Product Owner**? |
|----------|------------------------|-------------------------------------------|
| Product & customer/mission | **Product Owner** | — (this is the role) |
| Engineering lead & architecture | **Tech Lead** | **No.** This is the line. |
| Software development | **Engineer(s)** | **No.** This is the line. |
| Security & authorization | **Security Lead** | **No** — see the note below |
| Design & UX | **Designer**, or the Product Owner's hat | **Yes** — closest to the product-definition work |
| Quality & test | An engineer's hat, enforced by automation | **No** — it judges the build, so it sits with the build |
| Delivery / platform (DevSecOps) | Tech Lead's or an engineer's hat | **No** — it ships the build |

**Read the "no" column as the real sizing rule.** Everything an engineer does can concentrate onto fewer engineers, and agentic AI is what makes that practical further down than it used to be. What cannot concentrate is the product side onto the build side. The Product Owner may pick up **Design** — defining what the experience should be is the same kind of work as defining what the product should do — and that is the only one of the six that may travel in that direction.

**On the Security Lead.** Keeping this separate from the Product Owner is not the same rule and rests on a different reason: the Security Lead's judgment feeds an external authorization decision, and self-certification by whoever owns the schedule is exactly the pressure the role exists to resist. On the smallest teams this hat sits with engineering, paired with Delivery/Platform, rather than with the Product Owner. Whether it can be a shared specialist across teams instead is OI-16, still open.

**Growth order.** As a team grows, relieve the most overloaded hats first: **additional engineering capacity → dedicated designer → dedicated quality/delivery engineer.** Security separates into its own seat as soon as the authorization load justifies it.

## Responsibilities at a glance (RACI)

**R**esponsible = does the work · **A**ccountable = owns the outcome (one per row) · **C**onsulted · **I**nformed. Roles: PO = Product Owner, TL = Tech Lead, ENG = Engineer(s), SEC = Security Lead, UX = Designer, QA = Quality/Delivery.

| Key activity | PO | TL | ENG | SEC | UX | QA |
|--------------|----|----|-----|-----|----|----|
| Frame outcome / PR/FAQ (entry doc) | **A/R** | C | I | C | C | I |
| Prioritize backlog & set appetite | **A/R** | C | I | C | C | I |
| Draw & maintain the core/tailoring boundary | **A/R** | C | I | I | I | I |
| Architecture & tech trade-offs | C | **A/R** | R | C | I | C |
| Build features | I | C | **A/R** | I | C | R |
| Security design, controls, ATO path | C | C | I | **A/R** | I | C |
| User research & UX design | C | I | C | I | **A/R** | I |
| Test strategy & release quality | I | C | R | C | I | **A/R** |
| CI/CD pipeline & environments (incl. stage) | I | **A** | R | R | I | R |
| Run the customer evaluation each cycle | **A/R** | C | C | I | R | C |
| Upstream disposition & upstream log | **A/R** | C | I | C | I | I |
| Gate-review decision to proceed | **A/R** | C | I | C | C | I |
| Launch / go-live readiness | **A** | R | R | **R** | C | R |
| Production monitoring & continuous auth | C | R | R | **A/R** | I | R |

Where a lean team has merged two roles into one person, that person holds both rows — which is exactly why keeping the team small *and* keeping ownership explicit both matter. **With one exception:** no merge ever puts a PO row and an ENG or TL row on the same person. Read down the PO column and the ENG/TL columns; those two sets belong to different people at every team size.

**One row has an exception worth stating.** "Gate-review decision to proceed" shows the Product Owner accountable, and that holds for the gates Red Alpha owns. **Gate 2 is not one of them** — customer acceptance of the MVP is the funding customer's decision, and the Product Owner's accountability there is for making the decision *informed and easy to make*, not for making it. **Gate 3** likewise requires the Security Lead as a joint owner and the Authorizing Official for the authorization itself. See document 05 for the decision owner of each gate.

## Roles that sit around the IPT (not on it)

A lean IPT depends on a few roles it does **not** contain, and naming them prevents confusion about who decides what:

- **Sponsor / Product Champion** — the Red Alpha leader who commits the team and Red Alpha's own **core-product** money once the Product Owner decides to charter, and owns the business case; sets direction at gates but does not run the team day to day.
- **Funding customer** — the customer who, having seen Red Alpha's cleared capability demonstrated against their own mission requirement, pays for the **tailoring** that builds it out into an MVP for that mission. Distinct from the sponsor in what they commit: the sponsor commits people and core investment, the customer commits money *and their operators' time* to evaluate each cycle's increment in **stage**. They are the decision owner at **Gate 2** — the acceptance of the MVP is theirs to make, not ours — and they confirm the operating model at Gate 4. Emphatically outside the IPT: they steer direction between cycles, and the Product Owner protects the team from mid-cycle requests by routing them to the next bet.
- **Authorizing Official (AO)** — the government/organizational authority who accepts risk and grants the Authority to Operate. External to the team by definition; the Security Lead manages the relationship. (See document 06.)
- **RA Legal** — the function that determines what Red Alpha's rights actually are in capability derived from a customer's contract, and records the **IP clearance** the whole front end depends on (document 01). Not on the IPT and not consulted only at the end: the clearance has to exist before anything is shopped, and the Product Owner re-checks its scope at Gate 0. The team's obligation to Legal is to raise the question early and describe the IP honestly — including where it came from — not to reach its own conclusion about ownership.
- **Shared specialists / chapters** — as Red Alpha grows more than one IPT, cross-team "chapter"-style groups (e.g., all security leads, all engineers) keep standards consistent without adding permanent headcount to any single team. This is the Spotify lesson we hold in reserve for scaling.

## Scaling up (and the guardrail against scaling wrong)

When a product genuinely outgrows a team that can hold it in their heads, we **split into two IPTs around bounded missions** rather than growing one team past that point. At that point the **chapter/guild** idea from document 02 activates: a security chapter, an engineering chapter, and shared guilds keep standards and knowledge aligned across teams. The guardrail we take from Spotify's failures: adding structure only works if the culture of trust, ownership, and shared accountability comes with it — otherwise we've just made a bigger, slower team with new titles.

## Phase 5 — the IPT works forward-deployed

Once a product is live, the same durable team keeps going, but the *how* changes. Running Phase 5 well means practicing what much of the industry now calls **Forward Deployed Engineering**: staying embedded with the customer's own operators, finding the next point where a small, safe build removes the most friction from a real workflow, and owning the result through actual production use rather than stopping at "it shipped." (See document 02 §6 for where this comes from, and document 05's Phase 5 for how it fits the cadence.)

This is not an eighth function added to the table above — it is the **Product Owner** and **engineering** hats working in that mode, drawing on **Quality/Test**'s eval discipline and **Delivery/Platform**'s deployment ownership, which the team already carries. Concretely:

- **Find leverage before building.** The team observes real workflows with the customer's operators, not just their requests, and picks the intervention that unblocks the most work downstream for the least authority handed to the system — the same judgment that already shapes what earns a bet each cycle.
- **Build against real cases.** A handful of the customer's own recent, real instances become the test set before anything goes live — an extension of the Quality/Test function's existing discipline, not a separate practice.
- **Own it through first use.** Deployment ownership does not end at launch. The team watches real usage, measures the time or risk actually saved, and keeps iterating — the same "the team that builds it runs it" principle this document already holds (see *Roles that sit around the IPT*, and OI-21 on how the resulting on-call load is carried).

Domain knowledge compounds here: whoever already knows the customer's mission will find the real leverage point faster than someone learning it from the outside, which is worth weighing when deciding who on the team spends the most embedded time with the customer's operators during Phase 5.

**This is also where the next product's IP comes from.** A team doing Phase 5 well is, by definition, deep enough in a customer's mission to notice when something it built generalizes beyond that one engagement — which is exactly the origin story document 01 describes. Phase 5 is not only where a product matures; it is Red Alpha's actual wellspring of new capability.

That gives the team one standing obligation it would not otherwise have: **when something looks generalizable, say so early, and say so to RA Legal as well as to leadership.** Whether Red Alpha may use that capability with another customer depends on the terms of the contract this team is delivering under — and the cheapest time to establish the position, or to raise a **CRADA**, is while the work is still live and everyone still agrees on what happened. The team is not expected to judge the ownership question. It is expected to notice that the question exists and not to let the capability drift toward a sales conversation before it has been answered (document 01).

## Open questions / to resolve

*These items are also tracked — with owners, decision owners, and what "resolved" looks like — in [`08-open-items.md`](08-open-items.md), the register the whole team works from.*

- **What is the actual floor now?** Agentic AI has lowered the headcount a product needs, and the separation rule sets a hard lower bound — but the smallest *viable* team is not necessarily the smallest *legal* one. The open question is where capacity genuinely runs out below four, not merely where the separation rule stops permitting a further cut. (OI-20.)
- **Does the separation rule need a written exception path?** As stated it is absolute. Real programs produce edge cases — a Product Owner who is the only person who can read a specialist data format, say. Either the rule holds without exception and we accept the cost, or there is a narrow documented path with someone accountable for approving each use. Silence on this is the worst of the three.
- Does Phase 5's forward-deployed work call for one person to spend most of their time embedded with the customer, or does it rotate across the team alongside core-track work?
- Do we want the **Security Lead** to be a full member of every IPT, or a shared specialist across two or three teams at our current size?
- How do we handle **on-call / operations** load on a lean team once products are live in production?
- Who **packages cleared IP into a demonstration** once a Phase 5 team's capability is judged worth generalizing (document 01)? It happens before any *new* IPT is chartered, and will draw on the same scarce people this document allocates — likely including some of the very team still delivering the originating customer's mission.
- Whose job is it to **spot a generalizable capability early enough to raise a CRADA**, where the originating customer is one that can enter one at all, while the contract is still being shaped? That is a business-development and Legal question as much as a team one, but the team is where the signal originates.
- Can one IPT carry a **second funding customer's** tailoring alongside the first, or does each engagement need its own team? This is the practical limit on how fast the licensing model can grow.

*Role definitions and acronyms are in [`07-glossary-and-references.md`](07-glossary-and-references.md).*
