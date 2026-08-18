# 06 — Glossary and References

*Status: Draft for discussion — v0.2 — August 2026*

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

**CONOPS (Concept of Operations)** — A description of how a system will actually be used: by whom, for what tasks, under what conditions. A funding customer may supply a CONOPS for the **stage** environment, in which case Red Alpha builds stage to it; absent one, stage mirrors what Red Alpha determines the production deployment will be (document 05).

**Continuous Monitoring (CONMON)** — Automated, real-time visibility into the state of security controls; the pillar of cATO that replaces periodic re-assessment with ongoing awareness.

**Cool-down** — From Shape Up: a short period between build cycles used for review, shaping upcoming work, betting, and small fixes.

**Core product** — The product baseline that Red Alpha owns and **licenses** to customers. Grown with Red Alpha's own money, it is the part of the system that is not specific to any one customer, and the asset the company is actually building. Distinguished from **tailoring**, the customer-specific work built on top of it. The boundary between the two is drawn deliberately during Discovery and maintained through every cycle, because it determines who paid for what and who owns it.

**Cycle** — A fixed-time block of protected build work in which scope flexes and time does not. Shape Up's default is six weeks; during the **MVP** phase Red Alpha runs short cycles (2–3 weeks) so the **funding customer** gets working capability to evaluate often.

**Decider** — From the Design Sprint: the single person empowered to make binding decisions so a team doesn't stall in consensus. At Red Alpha this is typically the Product Lead.

**Design Sprint** — Google Ventures' five-day, time-boxed process (map, sketch, decide, prototype, test) to validate a risky product idea cheaply with real users before building.

**Design Thinking** — IDEO's iterative, human-centered approach (frame, gather inspiration, synthesize, ideate, prototype, test, share) filtered by what is *desirable, feasible, and viable*.

**DevSecOps** — Folding security into the automated build/test/ship pipeline so security is enforced on every change rather than checked at the end; the mechanism behind the Secure Software Supply Chain.

**Funding customer** — The customer who, having seen a **POC**, funds the work to turn it into an **MVP** for their own environment and mission. Distinct from the Red Alpha **sponsor**: the sponsor commits Red Alpha's people and core-product money, the funding customer commits money for **tailoring** and, crucially, commits their operators' time to evaluate each increment. Sits outside the IPT but is the decision owner at **Gate 2**.

**Gate** — In the Red Alpha model, a short, explicit decision point where the accountable parties decide to continue, adjust, or stop. Gate 0 opens the work by chartering the IPT; after that, Gate N closes Phase N. Most gates are decided inside Red Alpha by the sponsor and Product Lead; **Gate 2** belongs to the **funding customer**, and **Gate 3** requires the **Authorizing Official**.

**Hill chart** — From Shape Up: a way to show each piece of work's true status by placing it on a hill — uphill = "still figuring it out," downhill = "just execution."

**Impact level** — Low / moderate / high categorization of a system's security sensitivity, which determines the applicable control baseline.

**Integrated Product Team (IPT)** — A small, cross-functional, durable team that owns a product end to end, containing (in people or hats) every function needed to design, build, secure, ship, and support it. Best practices: keep it small, make roles explicit, set clear goals, lead through shared accountability.

**ISSO (Information System Security Officer)** — The role, embedded in the IPT, that owns security-by-design and the authorization path day to day. Red Alpha's "Security Lead."

**MVP (Minimum Viable Product)** — The smallest version of the **core product**, **tailored** to one named customer's environment and mission, that that customer can put in front of their own operators and judge against their own work. Built with the **funding customer's** money *and their participation*: each short **cycle** delivers working capability into the **stage** environment, the customer evaluates it, and their response shapes the next cycle. Its job is to answer "does this work for *us*?" before either side commits to full productization — and to do so incrementally, so the direction can be corrected cheaply and often rather than defended at the end. The MVP is not thrown away: it becomes the customer's delivered instance. See **POC vs. MVP** below for the contrast, and note that the **core product** underneath remains Red Alpha-owned and licensed no matter who funded the tailoring around it.

**NIST RMF (Risk Management Framework)** — The seven-step U.S. government process for authorizing systems: Prepare, Categorize, Select, Implement, Assess, Authorize, Monitor.

**Plan of Action & Milestones (POA&M)** — The documented list of known security gaps and the plan/timeline to close them.

**POC (Proof of Concept)** — A build Red Alpha funds **itself**, against a customer need or capability gap it has identified, to prove the idea is real: that the approach works technically and that it addresses something someone actually cares about. Its audience is first Red Alpha's own leadership and then prospective customers — a POC exists to be **shopped**, and its success condition is a customer interested enough to fund the next stage. It is deliberately narrow and time-boxed, runs in an environment Red Alpha controls, holds no real customer data, and carries no authorization. It is a demonstration, not something anyone operates. How a POC gets funded, staffed, and built sits **outside** the IPT workflow — that workflow starts once a customer commits money (document 04). See **POC vs. MVP** below.

**PR/FAQ** — Amazon's "Working Backwards" artifact: a mock press release describing the finished product from the customer's view, plus an FAQ answering the hard questions — written *before* building.

**RACI** — A responsibility map: **R**esponsible (does the work), **A**ccountable (owns the outcome), **C**onsulted, **I**nformed.

**Secure Software Supply Chain (SSSC)** — The cATO pillar covering security across the whole development lifecycle: approved reference designs, infrastructure-as-code, and automated checkpoints in the pipeline.

**Security Assessment Report (SAR)** — The independent assessor's findings on whether controls are in place and effective (RMF step 5).

**Shape Up** — Basecamp's product-development method built around shaping, betting, and fixed-time cycles; notable for scaling *down* cleanly to small teams.

**Single-threaded owner** — Amazon's idea of one leader whose sole focus is one initiative — the ownership model behind our durable Product Lead.

**Squad** — From Spotify: a small, cross-functional, autonomous team owning a mission. At 4–7 people a Red Alpha IPT effectively *is* one squad.

**Stage (evaluation environment)** — The middle environment in the `dev → stage → prod` promotion path, and the one the **funding customer** has access to. Each **MVP** cycle ends with working capability promoted to stage, where the customer's own people exercise it against realistic tasks and approve or redirect the next cycle. Stage is what makes "incremental delivery for customer review" a concrete mechanism rather than a good intention. It is a **pre-production and/or pre-sales** environment: it always runs inside **Red Alpha's controlled environment** (on premises or Red Alpha's cloud, never the customer's enclave), it is shaped by the customer's stage **CONOPS** where they supply one and otherwise mirrors Red Alpha's intended production deployment, its data may be customer-supplied or Red Alpha-provided, and it **may be replicated so long as every instance runs the same release as the upstream mainline**. It carries no authorization to operate and no mission dependency — it is not the pilot. Because people outside Red Alpha touch it, its data handling and access controls are a security concern in their own right (document 05).

**System Security Plan (SSP)** — The document describing how a system implements its selected security controls (RMF step 4).

**Tailoring (also "fringe" development)** — The customer-funded, customer-specific work that makes the **core product** fit one customer's environment and mission: their integrations, data feeds, deployment constraints, and mission-specific workflows. It answers "does it work for *me*?" — which is precisely the question the customer is paying to have answered. Tailoring is not assumed to belong in the core; whether any given piece is **upstreamed** is a separate, recorded decision.

**Two-pizza team** — Amazon's heuristic for keeping teams small enough to be fed by two pizzas — small, autonomous, end-to-end owners.

**Upstream (and the upstream log)** — To *upstream* is to promote a capability built as customer-funded **tailoring** into the Red Alpha-owned **core product**, where Red Alpha thereafter owns, funds, and licenses it. Much tailoring is never upstreamed, and that is a normal outcome, not a failure. Because each decision changes who pays for a capability going forward and can carry licensing and IP implications, the Product Lead maintains an **upstream log**: a standing record giving every customer-funded capability a disposition — *core*, *customer-only*, or *deferred* — with the reasoning and any agreement the change requires. It has no fixed cadence; entries are made when the answer is clear.

---

## POC vs. MVP — the two funded stages

These two terms get used interchangeably in casual conversation, and the confusion is expensive, because at Red Alpha they are **different stages, paid for by different people, answering different questions**. Both exist for a real period of time, and both are necessary: the POC is what earns a customer's *interest*, and the MVP is what earns their *commitment*. Skipping the POC means pitching an idea with nothing to show. Skipping the MVP means asking a customer to fund a product they have never used in their own environment.

| | **POC** | **MVP** |
|---|---|---|
| **Question it answers** | "Is this real — does the approach work, and does it address a gap someone has?" | "Does this work for *me* — in my environment, on my mission?" |
| **Who pays** | Red Alpha, from its own money | The funding customer (Red Alpha funds the core in parallel) |
| **Audience** | Red Alpha leadership, then prospective customers | One named customer's operators and mission owners |
| **Customer's role** | Subject of the pitch — an observer | Active participant: exercises each increment and approves or redirects |
| **Built on** | Whatever proves the idea fastest | The Red Alpha-owned **core product**, plus customer-specific **tailoring** |
| **Where it runs** | A demo environment Red Alpha controls | **Stage** — an evaluation environment the customer can actually use |
| **Rhythm** | One time-boxed push | Short cycles (2–3 weeks), each ending in a customer evaluation |
| **Data** | Synthetic or sample; no real customer data | Representative data, with real controls around it |
| **Security posture** | No authorization; not operated | Authorization path actively built; controls implemented every cycle |
| **Lifespan** | Ends when it has made its point; may be discarded | Persists and evolves into the customer's delivered instance |
| **Fate of the code** | Informs the core product; rarely shipped as-is | Core parts hardened into the licensed product; tailoring dispositioned in the **upstream log** |
| **Ends at** | A customer who will fund the next stage — or a shelf | **Gate 2** — the customer accepts it and funds continued work |

The through-line: a POC is Red Alpha spending its own money to earn the right to a conversation. An MVP is a customer spending theirs to find out whether the answer fits their mission — which is why it is delivered in short, reviewable increments rather than as a single reveal. Full phase-by-phase detail is in [`04-process-timeline-and-phases.md`](04-process-timeline-and-phases.md).

---

## References (verified, August 2026)

**Integrated Product Teams**
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

**Security & compliance (RMF, ATO, cATO, DevSecOps)**
- NIST RMF Explained: 7-Step Risk Management Framework — Deepwatch: https://www.deepwatch.com/glossary/nist-rmf/
- NIST Risk Management Framework — NIST CSRC: https://csrc.nist.gov/projects/risk-management
- Unpacking the DoD cATO Evaluation Criteria (Intro to cATO) — BreakPoint Labs: https://breakpoint-labs.com/unpacking-the-dod-continuous-authorization-to-operate-cato-evaluation-criteria-part-i-intro-to-cato/
- Continuous Authorization to Operate (cATO) Evaluation Criteria — DoD CIO (PDF): https://dodcio.defense.gov/Portals/0/Documents/Library/cATO-EvaluationCriteria.pdf
- Introduction to the DoD Software Factory — Anchore: https://anchore.com/blog/introduction-to-the-dod-software-factory/

*Note: web sources were consulted in August 2026 and summarized for internal discussion. For any authorization decision, rely on the current official NIST and DoD publications and the guidance of the cognizant Authorizing Official rather than these secondary summaries.*
