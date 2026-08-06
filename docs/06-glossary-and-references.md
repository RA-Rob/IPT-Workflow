# 06 — Glossary and References

*Status: Draft for discussion — v0.1 — August 2026*

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

**Continuous Monitoring (CONMON)** — Automated, real-time visibility into the state of security controls; the pillar of cATO that replaces periodic re-assessment with ongoing awareness.

**Cool-down** — From Shape Up: a short period between build cycles used for review, shaping upcoming work, betting, and small fixes.

**Cycle** — A fixed-time block of protected build work (Shape Up's default is six weeks; Red Alpha may choose shorter). Scope flexes within it; time does not.

**Decider** — From the Design Sprint: the single person empowered to make binding decisions so a team doesn't stall in consensus. At Red Alpha this is typically the Product Lead.

**Design Sprint** — Google Ventures' five-day, time-boxed process (map, sketch, decide, prototype, test) to validate a risky product idea cheaply with real users before building.

**Design Thinking** — IDEO's iterative, human-centered approach (frame, gather inspiration, synthesize, ideate, prototype, test, share) filtered by what is *desirable, feasible, and viable*.

**DevSecOps** — Folding security into the automated build/test/ship pipeline so security is enforced on every change rather than checked at the end; the mechanism behind the Secure Software Supply Chain.

**Gate** — In the Red Alpha model, a short, explicit decision point between phases where the team and sponsor decide to continue, adjust, or stop.

**Hill chart** — From Shape Up: a way to show each piece of work's true status by placing it on a hill — uphill = "still figuring it out," downhill = "just execution."

**Impact level** — Low / moderate / high categorization of a system's security sensitivity, which determines the applicable control baseline.

**Integrated Product Team (IPT)** — A small, cross-functional, durable team that owns a product end to end, containing (in people or hats) every function needed to design, build, secure, ship, and support it. Best practices: keep it small, make roles explicit, set clear goals, lead through shared accountability.

**ISSO (Information System Security Officer)** — The role, embedded in the IPT, that owns security-by-design and the authorization path day to day. Red Alpha's "Security Lead."

**MVP (Minimum Viable Product)** — The smallest working version of an idea that proves enough to justify (or not) turning it into a sustained product. The entry point to this model.

**NIST RMF (Risk Management Framework)** — The seven-step U.S. government process for authorizing systems: Prepare, Categorize, Select, Implement, Assess, Authorize, Monitor.

**Plan of Action & Milestones (POA&M)** — The documented list of known security gaps and the plan/timeline to close them.

**PR/FAQ** — Amazon's "Working Backwards" artifact: a mock press release describing the finished product from the customer's view, plus an FAQ answering the hard questions — written *before* building.

**RACI** — A responsibility map: **R**esponsible (does the work), **A**ccountable (owns the outcome), **C**onsulted, **I**nformed.

**Secure Software Supply Chain (SSSC)** — The cATO pillar covering security across the whole development lifecycle: approved reference designs, infrastructure-as-code, and automated checkpoints in the pipeline.

**Security Assessment Report (SAR)** — The independent assessor's findings on whether controls are in place and effective (RMF step 5).

**Shape Up** — Basecamp's product-development method built around shaping, betting, and fixed-time cycles; notable for scaling *down* cleanly to small teams.

**Single-threaded owner** — Amazon's idea of one leader whose sole focus is one initiative — the ownership model behind our durable Product Lead.

**Squad** — From Spotify: a small, cross-functional, autonomous team owning a mission. At 4–7 people a Red Alpha IPT effectively *is* one squad.

**System Security Plan (SSP)** — The document describing how a system implements its selected security controls (RMF step 4).

**Two-pizza team** — Amazon's heuristic for keeping teams small enough to be fed by two pizzas — small, autonomous, end-to-end owners.

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
