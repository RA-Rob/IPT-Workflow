# 03 — Team Structure, Roles, and Responsibilities

*Status: Draft for discussion — v0.2 — August 2026*

## The lean IPT, sized for Red Alpha

A Red Alpha IPT is **4–7 people**. At this size the guiding truth is simple: **there are more essential functions than there are people, so most people wear more than one hat.** The job of this document is to name every function the team must cover, assign those functions to roles, and be explicit about which hats each person wears at each team size — so that "who owns this?" always has an answer, even on a four-person team.

We treat **functions** (the work that must happen) separately from **people** (who does it). A team of four still covers all the core functions; it just concentrates them onto fewer individuals. As the team grows toward seven, functions split apart into dedicated roles.

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

### Product Lead *(also the team's Decider)*
Owns the product outcome end to end. Frames the problem and the launch narrative (the PR/FAQ-style entry document), maintains and prioritizes the backlog by value, sets the **appetite** for each piece of work, and is the single person empowered to **break ties** so the team never stalls waiting for consensus. Manages the relationship with the sponsor, the **funding customer** and their mission owners, and the Authorizing Official's expectations. Accountable for *what* and *why*; explicitly not the person deciding *how* the code is written. This is the role that carries Amazon's "single-threaded owner" and Google's "Decider" ideas.

Two responsibilities specific to how Red Alpha is funded sit with this role, and they are not delegable. The Product Lead **runs the customer evaluation loop** — making sure every short cycle in the MVP phase ends with working capability the customer can actually exercise in **stage**, and that what they say comes back as input to the next bet rather than as a mid-cycle interruption. And the Product Lead **owns the integrity of the funding boundary**: every piece of work carries a funding source and a core-or-tailored designation, and every decision to promote customer-funded **tailoring** into the licensed **core product** is recorded in the **upstream log** with its reasoning and any agreement it requires (document 04). Nobody else is positioned to see both sides of that line.

### Tech Lead / Lead Engineer
Owns technical direction: architecture, key trade-offs, technical standards, and the technical feasibility judgment at each gate. Breaks technical ties, keeps the system coherent, and is the senior hands-on builder. Partners with the Security Lead so that security decisions and architecture decisions are made together, not in sequence. Accountable for *how* we build and for technical risk.

### Software Engineer(s)
Build, test, and integrate the product. On a lean team, engineers are generalists who move across front end, back end, and infrastructure as needed, and who own quality for what they write (tests included). Depending on team size there are one to three of them, and they typically carry a second hat (quality, delivery, or design support).

### Security Lead *(ISSO-style role)*
Owns security-by-design and the authorization path. Translates the product into the language of controls and risk, drives the RMF/ATO (and, where applicable, continuous-ATO) activities described in document 05, and keeps the security posture continuously visible rather than checking it at the end. On a lean team this person is also the DevSecOps conscience — making sure the pipeline enforces security automatically. This role is non-negotiable given Red Alpha's defense/government context; it is a hat someone must wear even on a team of four.

### Designer / UX
Owns human-centered discovery and the shape of the user experience: talks to real users/operators, synthesizes needs into insight, and turns concepts into testable prototypes. On the smallest teams this is a part-time or shared hat (often carried by the Product Lead or a shared design resource); it becomes a dedicated seat as the team grows, because in most products design quality is a direct driver of adoption.

### Quality / Test
Owns confidence that the product works and keeps working — test strategy, automation, and the definition of "done." On lean teams this is a hat worn by an engineer and enforced through automation in the pipeline rather than by a separate manual tester; it becomes a dedicated role for larger or higher-assurance products.

### Delivery / Platform (DevSecOps)
Owns the CI/CD pipeline, environments, infrastructure-as-code, and the automation that makes shipping safe and repeatable — the "secure software supply chain." On lean teams this is usually the Tech Lead's or an engineer's second hat, tightly paired with the Security Lead. This hat also owns the `dev → stage → prod` promotion path, which makes it responsible for something the whole customer relationship rests on: **stage has to be reliably reachable and reliably current**, because a customer who cannot exercise this cycle's increment cannot approve the direction, and the loop that justifies their funding stalls. "Current" is a specific obligation: stage lives in Red Alpha's controlled environment and may be replicated, and this hat keeps **every instance on the same release as the upstream mainline** (document 05).

## How functions map to people at each size

The same seven functions are always covered; they just concentrate or split depending on headcount. A workable default mapping:

| Function | 4 people | 5 people | 6 people | 7 people |
|----------|----------|----------|----------|----------|
| Product & customer | **Product Lead** (+ Design) | **Product Lead** (+ Design) | **Product Lead** | **Product Lead** |
| Engineering lead & architecture | **Tech Lead** (+ Delivery) | **Tech Lead** (+ Delivery) | **Tech Lead** (+ Delivery) | **Tech Lead** |
| Software development | **Engineer** (+ QA) | **Engineer A**, **Engineer B** (+ QA) | **Engineer A**, **Engineer B** | **Engineer A**, **Engineer B** |
| Security & authorization | **Security Lead** (+ DevSecOps) | **Security Lead** (+ DevSecOps) | **Security Lead** (+ DevSecOps) | **Security Lead** |
| Design & UX | (Product Lead's hat) | (Product Lead's hat) | **Designer** | **Designer** |
| Quality & test | (Engineer's hat) | (Engineer's hat) | (shared / automated) | **QA/Delivery Engineer** |
| Delivery / platform | (Tech Lead's hat) | (Tech Lead's hat) | (Tech Lead's hat) | **QA/Delivery Engineer** |

Read the table as a default, not a rule. The constant is that **all seven functions have a named owner**; the variable is how many hats each person wears. The recommended growth order as you add the 5th, 6th, and 7th person is: **second engineer → dedicated designer → dedicated quality/delivery engineer**, because that sequence relieves the most overloaded hats first (build capacity, then adoption-driving design, then release safety).

## Responsibilities at a glance (RACI)

**R**esponsible = does the work · **A**ccountable = owns the outcome (one per row) · **C**onsulted · **I**nformed. Roles: PL = Product Lead, TL = Tech Lead, ENG = Engineer(s), SEC = Security Lead, UX = Designer, QA = Quality/Delivery.

| Key activity | PL | TL | ENG | SEC | UX | QA |
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

Where a lean team has merged two roles into one person, that person holds both rows — which is exactly why keeping the team small *and* keeping ownership explicit both matter.

**One row has an exception worth stating.** "Gate-review decision to proceed" shows the Product Lead accountable, and that holds for the gates Red Alpha owns. **Gate 2 is not one of them** — customer acceptance of the MVP is the funding customer's decision, and the Product Lead's accountability there is for making the decision *informed and easy to make*, not for making it. **Gate 3** likewise requires the Security Lead as a joint owner and the Authorizing Official for the authorization itself. See document 04 for the decision owner of each gate.

## Roles that sit around the IPT (not on it)

A lean IPT depends on a few roles it does **not** contain, and naming them prevents confusion about who decides what:

- **Sponsor / Product Champion** — the Red Alpha leader who commits the team and Red Alpha's own **core-product** money, and owns the business case; sets direction at gates but does not run the team day to day. Decision owner at Gate 0.
- **Funding customer** — the customer who, having seen the POC, pays for the **tailoring** that turns it into an MVP for their mission. Distinct from the sponsor in what they commit: the sponsor commits people and core investment, the customer commits money *and their operators' time* to evaluate each cycle's increment in **stage**. They are the decision owner at **Gate 2** — the acceptance of the MVP is theirs to make, not ours — and they confirm the operating model at Gate 4. Emphatically outside the IPT: they steer direction between cycles, and the Product Lead protects the team from mid-cycle requests by routing them to the next bet.
- **Authorizing Official (AO)** — the government/organizational authority who accepts risk and grants the Authority to Operate. External to the team by definition; the Security Lead manages the relationship. (See document 05.)
- **Shared specialists / chapters** — as Red Alpha grows more than one IPT, cross-team "chapter"-style groups (e.g., all security leads, all engineers) keep standards consistent without adding permanent headcount to any single team. This is the Spotify lesson we hold in reserve for scaling.

## Scaling up (and the guardrail against scaling wrong)

When a product genuinely outgrows seven people, we **split into two IPTs around bounded missions** rather than growing one team past the point where everyone can hold the whole product in their heads. At that point the **chapter/guild** idea from document 01 activates: a security chapter, an engineering chapter, and shared guilds keep standards and knowledge aligned across teams. The guardrail we take from Spotify's failures: adding structure only works if the culture of trust, ownership, and shared accountability comes with it — otherwise we've just made a bigger, slower team with new titles.

## Open questions / to resolve

*These items are also tracked — with owners, decision owners, and what "resolved" looks like — in [`07-open-items.md`](07-open-items.md), the register the whole team works from.*

- Is the **Product Lead** always the Decider, or should the Decider role rotate/depend on the decision type (e.g., Tech Lead decides technical ties)?
- Do we want the **Security Lead** to be a full member of every IPT, or a shared specialist across two or three teams at our current size?
- What is the minimum viable team we'd ever stand up — is four really the floor, or three for the smallest efforts?
- How do we handle **on-call / operations** load on a lean team once products are live in production?
- Who staffs a **POC**, given it happens before any IPT is chartered and outside this workflow's scope entirely (document 04)? Wherever that answer lives, it will draw on the same scarce people this document allocates.
- Can one IPT carry a **second funding customer's** tailoring alongside the first, or does each engagement need its own team? This is the practical limit on how fast the licensing model can grow.

*Role definitions and acronyms are in [`06-glossary-and-references.md`](06-glossary-and-references.md).*
