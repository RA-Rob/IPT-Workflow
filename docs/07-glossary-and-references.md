# 07 — Glossary and References

*Status: Draft for discussion — v0.3 — September 2026*

## Glossary

**Active Cyber Defense (ACD)** — One of the three pillars of cATO: real-time threat detection and response, integration with security services, and regular testing (e.g., penetration testing), rather than purely reactive incident handling.

**Appetite** — From Shape Up: how much time a piece of work is *worth*, set before the work is designed. Unlike an estimate (how long will it take?), an appetite is a fixed budget the solution must fit inside. The basis of "fixed time, variable scope."

**Authority / Authorization to Operate (ATO)** — An explicit risk-acceptance decision by a senior **Authorizing Official** allowing a system to operate for a defined period, issued after security controls are assessed. Not a certificate so much as a documented decision to own the residual risk.

**Authorizing Official (AO)** — The accountable senior official (external to the IPT) who reviews residual risk and grants, denies, or maintains authorization to operate.

**Betting / Betting Table** — From Shape Up: the step (during cool-down) where leadership decides which shaped pitches to fund for the next cycle. Red Alpha uses a lightweight version to consciously choose each cycle's work.

**Categorize** — RMF step 2: setting the system's impact level (low/moderate/high) based on the harm from loss of confidentiality, integrity, or availability. Drives the control baseline.

**Chapter** — From the Spotify model: a group that keeps a single discipline (e.g., all security leads) consistent *across* teams. Red Alpha's mechanism for maintaining standards as it grows more than one IPT.

**Circuit breaker** — From Shape Up: the rule that work unfinished at the end of a fixed cycle is not automatically extended; it must re-earn its place at the next bet. Protects lean teams from open-ended commitments.

**Continuous Authorization to Operate (cATO)** — A modern alternative to a point-in-time ATO: ongoing authorization based on real-time evidence, resting on three pillars — Continuous Monitoring, Active Cyber Defense, and Secure Software Supply Chain.

**CONOPS (Concept of Operations)** — A description of how a system will actually be used: by whom, for what tasks, under what conditions. A funding customer may supply a CONOPS for the **stage** environment, in which case Red Alpha builds stage to it; absent one, stage mirrors what Red Alpha determines the production deployment will be (document 06).

**Continuous Monitoring (CONMON)** — Automated, real-time visibility into the state of security controls; the pillar of cATO that replaces periodic re-assessment with ongoing awareness.

**Contract-derived IP** — Capability, code, architecture, and operational lessons produced by Red Alpha while delivering on an existing customer's contract, which generalize beyond that one mission. It is the **primary** source of what Red Alpha shops to a new customer, because the origin cost was already funded by the engagement that produced it. It is not Red Alpha's to use by default: it must pass **IP clearance** first. See document 01.

**Cool-down** — From Shape Up: a short period between build cycles used for review, shaping upcoming work, betting, and small fixes.

**Core product** — The product baseline that Red Alpha owns and **licenses** to customers. Grown with Red Alpha's own money, it is the part of the system that is not specific to any one customer, and the asset the company is actually building. Distinguished from **tailoring**, the customer-specific work built on top of it. The boundary between the two is drawn deliberately during Discovery and maintained through every cycle, because it determines who paid for what and who owns it. What the core is *built on* is a separate question with its own record: much of it arrives as **contract-derived IP**, which is Red Alpha's to use only once **IP clearance** says so (document 01).

**CRADA (Cooperative Research and Development Agreement)** — An agreement with a collaborating customer — most often a government one — that settles up front who owns the intellectual property arising from joint work. At Red Alpha it is one of the three acceptable positions an **IP clearance** may rest on, and the cleanest of the three: negotiated while the originating contract is being written rather than argued for afterward, it lets Red Alpha keep the resulting IP outright. Where generalizable value is foreseeable, raising a CRADA early is far cheaper than seeking a release later. See document 01.

**Cycle** — A fixed-time block of protected build work in which scope flexes and time does not. Shape Up's default is six weeks; during the **MVP** phase Red Alpha runs short cycles (2–3 weeks) so the **funding customer** gets working capability to evaluate often.

**Decider** — From the Design Sprint: the single person empowered to make binding decisions so a team doesn't stall in consensus. At Red Alpha this is typically the Product Owner.

**Design Sprint** — Google Ventures' five-day, time-boxed process (map, sketch, decide, prototype, test) to validate a risky product idea cheaply with real users before building.

**Design Thinking** — IDEO's iterative, human-centered approach (frame, gather inspiration, synthesize, ideate, prototype, test, share) filtered by what is *desirable, feasible, and viable*.

**DevSecOps** — Folding security into the automated build/test/ship pipeline so security is enforced on every change rather than checked at the end; the mechanism behind the Secure Software Supply Chain.

**Forward Deployed Engineer (FDE)** — A practice, common across AI labs (OpenAI, Anthropic) and pioneered by Palantir, of staying embedded with a customer's own operators to find the highest-leverage, lowest-risk point to apply a capability, build and evaluate it against real cases, and own the result through actual production use. At Red Alpha this is not a new function on the roster but the **posture** the durable IPT adopts in **Phase 5 — Operate & Iterate** (document 02 §6, document 04, document 05).

**Funding customer** — The customer who, having seen Red Alpha's cleared capability demonstrated against their mission requirement, funds the work to build it out as an **MVP** for their own environment and mission. Distinct from the **originating customer**, whose contract produced the underlying IP in the first place. Distinct from the Red Alpha **sponsor**: the sponsor commits Red Alpha's people and core-product money, the funding customer commits money for **tailoring** and, crucially, commits their operators' time to evaluate each increment. Sits outside the IPT but is the decision owner at **Gate 2**.

**Gate** — In the Red Alpha model, a short, explicit decision point where the accountable parties decide to continue, adjust, or stop. Gate 0 opens the work by chartering the IPT; after that, Gate N closes Phase N. Most gates are decided inside Red Alpha by the **Product Owner** (Gate 0 is the Product Owner's alone; the sponsor commits the team and funding once it's made); **Gate 2** belongs to the **funding customer**, and **Gate 3** requires the **Authorizing Official** as well.

**Hill chart** — From Shape Up: a way to show each piece of work's true status by placing it on a hill — uphill = "still figuring it out," downhill = "just execution."

**Ideation** — Red Alpha's pre-Gate-0 route to something shoppable. The primary route: a team delivering on an existing customer's contract builds something whose underlying capability generalizes beyond that one mission, RA Legal grants **IP clearance**, and the cleared **contract-derived IP** is packaged and shopped against another customer's **mission requirement**. The secondary route: Red Alpha funds a **POC** outright, which settles ownership trivially but spends Red Alpha's own money to do it. Ideation is a real stage of the workflow, not input sitting outside it — it is ungated but not unconstrained, because clearance is a hard stop. See document 01.

**IP clearance** — RA Legal's **written determination** that Red Alpha may use a defined body of **contract-derived IP** for its own purposes, including with other customers. It must rest on one of exactly three positions: Red Alpha **owns** the IP under the originating contract, the **originating customer has released** it, or a **CRADA** secures it. There is no fourth position. Clearance is scoped — to a body of IP and a kind of use — and it never extends to the originating customer's **data**, deliverable, or mission details, which stay theirs regardless. **Nothing is shopped, demonstrated, or chartered on before clearance is on record**; Gate 0 re-checks that the scope still covers what the engagement intends to build. See document 01.

**Impact level** — Low / moderate / high categorization of a system's security sensitivity, which determines the applicable control baseline.

**Integrated Project Team (IPT)** — A small, cross-functional, durable team that owns a product end to end, containing (in people or hats) every function needed to design, build, secure, ship, and support it. Best practices: keep it small, make roles explicit, set clear goals, lead through shared accountability. The concept comes from disciplined acquisition practice, where it's most often called an **Integrated Product Team** — same idea, different name.

**ISSO (Information System Security Officer)** — The role, embedded in the IPT, that owns security-by-design and the authorization path day to day. Red Alpha's "Security Lead."

**MVP (Minimum Viable Product)** — The smallest version of the **core product**, **tailored** to one named customer's environment and mission, that that customer can put in front of their own operators and judge against their own work. Built with the **funding customer's** money *and their participation*: each short **cycle** delivers working capability into the **stage** environment, the customer evaluates it, and their response shapes the next cycle. Its job is to answer "does this work for *us*?" before either side commits to full productization — and to do so incrementally, so the direction can be corrected cheaply and often rather than defended at the end. The MVP is not thrown away: it becomes the customer's delivered instance. See **The shoppable asset vs. the MVP** below for the contrast, and note that the **core product** underneath remains Red Alpha-owned and licensed no matter who funded the tailoring around it.

**Mission requirement** — A prospective customer's stated operational problem, in their own terms. It is what cleared IP is matched *against* during shopping: we are not looking for a customer who likes the capability, but for one whose mission requirement it demonstrably helps solve. The match is the claim the customer is actually evaluating before they commit funding at **Gate 0**.

**NIST RMF (Risk Management Framework)** — The seven-step U.S. government process for authorizing systems: Prepare, Categorize, Select, Implement, Assess, Authorize, Monitor.

**Originating customer** — The customer whose funded contract produced a body of **contract-derived IP**. They are not a party to the engagement that IP is later used in, and they are not the **funding customer** of it. Two obligations run to them regardless: Red Alpha's use of the capability must be cleared against their contract (**IP clearance**), and their **data**, specific deliverable, and mission details are never carried forward — no clearance grants any right to those.

**Plan of Action & Milestones (POA&M)** — The documented list of known security gaps and the plan/timeline to close them.

**POC (Proof of Concept)** — A working demonstration, built to prove a capability is real: that the approach works technically and that it addresses something someone actually cares about. Its audience is first Red Alpha's own leadership and then prospective customers — a POC exists to be **shopped**, and its success condition is a customer interested enough to fund the next stage. It is deliberately narrow and time-boxed, runs in a **stage** instance Red Alpha controls, holds only synthetic data, and carries no authorization. It is a demonstration, not something anyone operates.

Under the current model a POC is most often **packaged from cleared contract-derived IP** rather than built from scratch — taking capability that already works and shaping it into something a prospect can exercise against a realistic version of their own problem. Red Alpha may also fund one outright from nothing; that is the secondary route, and its one advantage is that ownership needs no clearing. Either way, POC construction sits **outside** the IPT workflow's gates — that workflow starts once a customer commits money (document 05) — and either way, **no POC built on another customer's contract work is shown to anyone before IP clearance** (document 01). See **The shoppable asset vs. the MVP** below.

**PR/FAQ** — Amazon's "Working Backwards" artifact: a mock press release describing the finished product from the customer's view, plus an FAQ answering the hard questions — written *before* building.

**RACI** — A responsibility map: **R**esponsible (does the work), **A**ccountable (owns the outcome), **C**onsulted, **I**nformed.

**Secure Software Supply Chain (SSSC)** — The cATO pillar covering security across the whole development lifecycle: approved reference designs, infrastructure-as-code, and automated checkpoints in the pipeline.

**Security Assessment Report (SAR)** — The independent assessor's findings on whether controls are in place and effective (RMF step 5).

**Shape Up** — Basecamp's product-development method built around shaping, betting, and fixed-time cycles; notable for scaling *down* cleanly to small teams.

**Single-threaded owner** — Amazon's idea of one leader whose sole focus is one initiative — the ownership model behind our durable Product Owner.

**Squad** — From Spotify: a small, cross-functional, autonomous team owning a mission. At 4–7 people a Red Alpha IPT effectively *is* one squad.

**Stage (evaluation environment)** — The middle environment in the `dev → stage → prod` promotion path, and the one the **funding customer** has access to. Each **MVP** cycle ends with working capability promoted to stage, where the customer's own people exercise it against realistic tasks and approve or redirect the next cycle. Stage is what makes "incremental delivery for customer review" a concrete mechanism rather than a good intention. It is a **pre-production and/or pre-sales** environment: it always runs inside **Red Alpha's controlled environment** (on premises or Red Alpha's cloud, never the customer's enclave), it is shaped by the customer's stage **CONOPS** where they supply one and otherwise mirrors Red Alpha's intended production deployment, its data may be customer-supplied or Red Alpha-provided, and it **may be replicated so long as every instance runs the same release as the upstream mainline**. It carries no authorization to operate and no mission dependency — it is not the pilot. Because people outside Red Alpha touch it, its data handling and access controls are a security concern in their own right (document 06).

**System Security Plan (SSP)** — The document describing how a system implements its selected security controls (RMF step 4).

**Tailoring (also "fringe" development)** — The customer-funded, customer-specific work that makes the **core product** fit one customer's environment and mission: their integrations, data feeds, deployment constraints, and mission-specific workflows. It answers "does it work for *me*?" — which is precisely the question the customer is paying to have answered. Tailoring is not assumed to belong in the core; whether any given piece is **upstreamed** is a separate, recorded decision.

**Two-pizza team** — Amazon's heuristic for keeping teams small enough to be fed by two pizzas — small, autonomous, end-to-end owners.

**Upstream (and the upstream log)** — To *upstream* is to promote a capability built as customer-funded **tailoring** into the Red Alpha-owned **core product**, where Red Alpha thereafter owns, funds, and licenses it. Much tailoring is never upstreamed, and that is a normal outcome, not a failure. Because each decision changes who pays for a capability going forward and can carry licensing and IP implications, the Product Owner maintains an **upstream log**: a standing record giving every customer-funded capability a disposition — *core*, *customer-only*, or *deferred* — with the reasoning and any agreement the change requires. It has no fixed cadence; entries are made when the answer is clear. An entry dispositioned *core* that carries real ownership weight is the same question **IP clearance** asks one engagement later — this customer's funded tailoring becoming IP we intend to use with the next one — and goes to RA Legal on the same three-position test before it is treated as ours to license onward (document 05).

---

## The shoppable asset vs. the MVP — the two stages

"POC" and "MVP" get used interchangeably in casual conversation, and the confusion is expensive, because at Red Alpha they are **different stages, paid for by different people, answering different questions**. Both exist for a real period of time, and both are necessary: the shoppable asset is what earns a customer's *interest*, and the MVP is what earns their *commitment*. Skipping the first means pitching an idea with nothing to show. Skipping the second means asking a customer to fund a product they have never used in their own environment.

The left column below is what Red Alpha takes to a prospect. Read it as **cleared IP, demonstrated** — most often **contract-derived IP** that an earlier customer's contract already paid to create, cleared by RA Legal and packaged as a working **POC**; occasionally a POC Red Alpha funded from scratch. The difference between those two origins shows up in only two rows, marked below.

| | **The shoppable asset** (cleared IP, demonstrated) | **MVP** |
|---|---|---|
| **Question it answers** | "Is this real — does the capability work, and does it address a mission requirement someone has?" | "Does this work for *me* — in my environment, on my mission?" |
| **Who paid for it** | *Primary route:* the originating customer's contract already funded the capability; Red Alpha pays the marginal cost of generalizing, clearing, and packaging. *Secondary route:* Red Alpha funds the whole thing from its own money. | The funding customer (Red Alpha funds the core in parallel) |
| **What makes it ours to use** | *Primary route:* **IP clearance** — RA Legal's written determination that Red Alpha owns it, the originating customer released it, or a **CRADA** secures it. *Secondary route:* nothing to clear; Red Alpha built it. | The licensed **core product** stays Red Alpha's; **tailoring** is dispositioned in the upstream log |
| **Audience** | Red Alpha leadership, then prospective customers | One named customer's operators and mission owners |
| **Customer's role** | Subject of the pitch — an observer | Active participant: exercises each increment and approves or redirects |
| **Built on** | Generalized capability that already works, packaged to demonstrate | The Red Alpha-owned **core product**, plus customer-specific **tailoring** |
| **Where it runs** | A **stage** instance (no separate demo environment; release parity doesn't yet apply — there's no mainline to be at parity with) | **Stage** — an evaluation environment the customer can actually use |
| **Rhythm** | One time-boxed push to package and shop | Short cycles (2–3 weeks), each ending in a customer evaluation |
| **Data** | **Synthetic, always** — never the originating customer's data, whatever the clearance says | Representative data, with real controls around it |
| **Security posture** | No authorization; not operated | Authorization path actively built; controls implemented every cycle |
| **Lifespan** | Ends when it has made its point; the underlying IP persists | Persists and evolves into the customer's delivered instance |
| **Fate of the code** | Becomes the seed of the core product | Core parts hardened into the licensed product; tailoring dispositioned in the **upstream log** |
| **Ends at** | A customer who will fund the build-out — or a shelf | **Gate 2** — the customer accepts it and funds continued work |

The through-line: the shoppable asset is Red Alpha earning the right to a conversation — usually on the strength of work a previous customer already funded, which is what makes the model compound. An MVP is the next customer spending their own money to find out whether that capability fits *their* mission — which is why it is delivered in short, reviewable increments rather than as a single reveal. Full phase-by-phase detail is in [`05-process-timeline-and-phases.md`](05-process-timeline-and-phases.md); where the IP comes from and what clearing it requires is in [`01-ip-origin-and-clearance.md`](01-ip-origin-and-clearance.md).

---

## References (verified, August 2026)

**Integrated Product Teams** (the acquisition-practice term our **Integrated Project Team** concept draws on)
- Integrated Product Team (IPT) — AcqNotes: https://acqnotes.com/acqnote/careerfields/integrated-product-teams
- Integrated product team — Wikipedia: https://en.wikipedia.org/wiki/Integrated_product_team
- Setting up and managing integrated product teams — PMI: https://www.pmi.org/learning/library/setting-up-managing-integrated-product-teams-8903

**Amazon — Working Backwards & two-pizza teams**
- How Amazon's Working Backwards process drives innovation — Working Backwards: https://workingbackwards.com/blog/how-amazons-working-backwards-process-drives-innovation/
- Working Backwards (the Amazon Method) — ProductPlan: https://www.productplan.com/glossary/working-backward-amazon-method
- Amazon's Two-Pizza Teams — AWS Executive Insights: https://aws.amazon.com/executive-insights/content/amazon-two-pizza-team/

**Google Ventures — Design Sprint**
- Design Sprint methodology — Google Design Sprint Kit: https://designsprintkit.withgoogle.com/methodology
- Design Sprint by Google Ventures: Schedule, Team, and Custom Implementations — AltexSoft: https://www.altexsoft.com/blog/design-sprint-by-google-ventures-schedule-team-and-custom-implementations/

**IDEO — Design Thinking**
- The Design Thinking Process (7 steps) — IDEO U: https://www.ideou.com/blogs/inspiration/design-thinking-process
- IDEO Human-Centered Design Process — Quintagroup: https://quintagroup.com/services/ideo-human-design-process

**Spotify — Squad model**
- Discover the Spotify model — Atlassian: https://www.atlassian.com/agile/agile-at-scale/spotify
- What Is The Spotify Model? — Product School: https://productschool.com/blog/product-fundamentals/spotify-model-scaling-agile

**Basecamp — Shape Up**
- Shape Up: Stop Running in Circles and Ship Work that Matters — Basecamp: https://basecamp.com/shapeup
- Adjust to Your Size (scaling down for small teams) — Shape Up: https://basecamp.com/shapeup/4.1-appendix-02
- The Betting Table — Shape Up: https://basecamp.com/shapeup/2.2-chapter-08

**Forward Deployed Engineers**
- "OpenAI Pays $280,000 For This Job. You Don't Have To Be An Engineer." — Nate B Jones, *AI News & Strategy Daily* (YouTube): https://youtu.be/0bLI31EFDDs

**Security & compliance (RMF, ATO, cATO, DevSecOps)**
- NIST RMF Explained: 7-Step Risk Management Framework — Deepwatch: https://www.deepwatch.com/glossary/nist-rmf/
- NIST Risk Management Framework — NIST CSRC: https://csrc.nist.gov/projects/risk-management
- Unpacking the DoD cATO Evaluation Criteria (Intro to cATO) — BreakPoint Labs: https://breakpoint-labs.com/unpacking-the-dod-continuous-authorization-to-operate-cato-evaluation-criteria-part-i-intro-to-cato/
- Continuous Authorization to Operate (cATO) Evaluation Criteria — DoD CIO (PDF): https://dodcio.defense.gov/Portals/0/Documents/Library/cATO-EvaluationCriteria.pdf
- Introduction to the DoD Software Factory — Anchore: https://anchore.com/blog/introduction-to-the-dod-software-factory/

*Note: web sources were consulted in August 2026 and summarized for internal discussion. For any authorization decision, rely on the current official NIST and DoD publications and the guidance of the cognizant Authorizing Official rather than these secondary summaries.*
