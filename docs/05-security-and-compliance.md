# 05 — Security and Compliance, Woven Into the Process

*Status: Draft for discussion — v0.2 — August 2026*

## Why this is its own document — but not its own phase

Because Red Alpha's products may serve defense and government customers, they must be **secure by design and authorizable to operate**. The single most common way software programs fail in this context is by treating security and authorization as a gate they sprint toward at the very end — discovering, weeks before launch, that the architecture can't be authorized or that a control was never designed in. Our model refuses that pattern. Security is a **continuous property of how the IPT works**, present from Gate 0 through operations, not a phase at the end.

This document explains the security and compliance landscape in plain terms and maps it onto the phases and gates from document 04. It is written to be read by the whole team, not only the Security Lead — because on a lean team, security is everyone's job even though one person owns it.

> **Important caveat for reviewers.** The specific frameworks below (NIST RMF, ATO/cATO, DoD DevSecOps) are the general, publicly documented U.S. government approaches. The *exact* controls, authorization boundary, and authority that apply to any given Red Alpha product depend on that product's customer, data, and environment. Treat this as the shared mental model; the Security Lead tailors the specifics per product with the actual Authorizing Official.

## The core idea: secure by design, authorizable by default

Two commitments define our approach:

1. **Secure by design.** Security controls are designed and built alongside features, in every cycle — never retrofitted. The architecture is chosen partly *because* it can be secured and authorized.
2. **Authorizable by default.** The evidence an authorizer needs (documentation, control implementation, test results) is produced continuously as a byproduct of how we build, so that by the time we seek authorization the package is substantially assembled rather than being written from scratch under deadline.

## The authorization framework: NIST RMF in plain terms

U.S. government systems are authorized using the **NIST Risk Management Framework (RMF)**, a seven-step process. In plain language:

1. **Prepare** — establish context: who the stakeholders are, the operational environment, and the risk-management roles, before anything else.
2. **Categorize** — decide the system's impact level (low / moderate / high) based on the harm if confidentiality, integrity, or availability were lost. This drives everything downstream.
3. **Select** — choose the appropriate baseline of security controls (from NIST SP 800-53) for that impact level, and tailor them to the system.
4. **Implement** — build those controls into the system as real configurations, policies, and procedures, documented in the **System Security Plan (SSP)**.
5. **Assess** — an independent assessor checks that the controls are actually in place and working, capturing findings in a **Security Assessment Report (SAR)**.
6. **Authorize** — a senior **Authorizing Official (AO)** reviews the risk and makes an explicit decision to accept it, issuing an **Authority to Operate (ATO)** for a defined period.
7. **Monitor** — maintain ongoing awareness of the security posture through **continuous monitoring**, rather than waiting for a periodic re-assessment.

The **ATO** itself is best understood not as a certificate but as *an explicit risk-acceptance decision by an accountable official* — someone with authority looks at the residual risk and agrees to own it. That framing matters for how the team works: our job is to make the risk **visible, small, and well-evidenced** so that decision is easy to make and easy to maintain.

## From point-in-time ATO to continuous ATO (cATO)

A traditional ATO is a **point-in-time** decision, often valid for around three years and based on a static review at one moment. In a world of continuous software updates and cloud deployment, that creates blind spots between reviews and slows delivery to a crawl.

**Continuous Authorization to Operate (cATO)** is the modern alternative and the target state for Red Alpha products where it applies. It replaces the periodic snapshot with **ongoing authorization** grounded in real-time evidence. The DoD describes cATO as the state reached when a team that develops, secures, and operates a system has shown enough maturity in maintaining a resilient posture that traditional periodic re-authorizations become redundant. It rests on **three pillars**:

- **Continuous Monitoring (CONMON)** — automated, real-time visibility into the state of security controls, so the AO sees current posture rather than an old snapshot.
- **Active Cyber Defense (ACD)** — real-time threat detection and response, integration with security services, and regular testing; proactive defense, not just reactive incident handling.
- **Secure Software Supply Chain (SSSC)** — security built into the entire development lifecycle via DevSecOps: approved reference designs, infrastructure-as-code, and automated security checkpoints in the pipeline.

For the team, the payoff is direct: cATO lets us **ship updates and patches frequently without waiting on a full re-authorization each time**, shrinking vulnerability windows while *keeping* authorization — exactly the cadence our cycle-based build process (document 04) is designed to produce.

## DevSecOps: how security becomes automatic

The mechanism that makes "secure by design" and cATO real is **DevSecOps** — folding security into the same automated pipeline that builds, tests, and ships the software (the "software factory" pattern). Instead of a human checking security at the end, the **pipeline enforces it on every change**: dependency and vulnerability scanning, policy-as-code checks, hardened build environments, signed artifacts, and infrastructure defined as code so environments are consistent and reviewable. This is why the Delivery/Platform and Security functions in document 03 are tightly paired — the pipeline *is* the security control.

## Mapping security to the IPT timeline

Security work is distributed across the phases and gates from document 04 so that nothing is left to the end:

| Phase / Gate | RMF & security activity |
|--------------|-------------------------|
| *Before Gate 0 (the POC)* | Outside this workflow's scope, but one security judgment belongs there and we should insist on it: is a production version of this idea **plausibly authorizable at all**? Shopping something we could never field wastes a customer's time and ours. The POC itself stays a demonstration — Red Alpha-controlled environment, synthetic or sample data, nobody operating it. |
| **Gate 0 (Commit & charter)** | Begin RMF **Prepare** in earnest, now that a real customer environment is in view: stakeholders, operational environment, risk-management roles, and who the actual **Authorizing Official** will be. |
| **Phase 1 (Discovery) / Gate 1** | **Categorize** the system (impact level); draft **Select** (control baseline & boundary); the security & authorization plan is a Gate 1 exit artifact; architecture chosen to be authorizable in *this customer's* environment. The **stage** environment is stood up in Red Alpha's controlled environment with its access and data rules decided, not improvised — built to the customer's CONOPS if they supply one, otherwise mirroring the intended production deployment. |
| **Phase 2 (MVP)** | **Implement** controls as tailored capability is built, every short cycle; the pipeline enforces the secure supply chain from the first increment. Stage now holds representative (or customer-supplied) data and is reachable by people outside Red Alpha, at mainline release parity — see below. Control evidence begins accumulating. |
| **Gate 2** | No authorization decision here — Gate 2 is the customer's acceptance. But the Security Lead reports honestly on control status and the realistic authorization timeline, because that timeline is part of what the customer is deciding to keep funding. |
| **Phase 3 (Build)** | **Implement** across both tracks; SSP and control evidence assembled deliberately; begin **Assess** activities as increments stabilize. Core-track work carries its own obligation: controls built into the licensed core benefit every future customer, so build them to be inherited. |
| **Gate 3** | **Assess** complete enough and **Authorize** achieved — an ATO granted, or an interim/continuous-authorization path agreed with the AO — as a hard condition of launch. |
| **Phase 4 (Launch)** | Security monitoring and incident response live from day one of the pilot in the customer's real environment. |
| **Phase 5 (Operate)** | **Monitor** continuously; mature toward **cATO** (CONMON + ACD + SSSC); maintain authorization through ongoing evidence rather than re-accreditation. |

The key scheduling insight: **authorization work runs in parallel with build the whole way**, not as a separate stage bolted on before launch. This is the single biggest lever a lean team has for hitting launch dates in a government context.

## The stage environment is a security concern, not a scratch pad

The mechanism that makes incremental customer delivery real is **stage** — the middle environment in the `dev → stage → prod` path, where each cycle's working capability lands for the customer's own people to exercise (document 04). It deserves explicit treatment here because it is the first place in the lifecycle where **people outside Red Alpha touch a running system**, and it is easy to treat it with dev-environment casualness while it accumulates production-shaped risk.

The rules below are settled policy, not options to be re-litigated per engagement; what each engagement decides is recorded in its charter. One question genuinely remains open — the default **data class** — and it is listed at the end of this document.

### The policy

**Where it lives is settled: stage runs inside Red Alpha's controlled environment** — on premises or in Red Alpha's cloud, whichever suits the product — and **not** inside the customer's enclave. This is deliberate. It keeps an environment we are accountable for inside a boundary we own, instrument, and can change on our own schedule, and it means standing up a new engagement's stage does not wait on somebody else's accreditation process. The consequence is that the customer reaches *into* our environment to evaluate, so identity, access, logging, and data handling in stage are Red Alpha's responsibility rather than a shared one.

**What it looks like: stage mirrors the intended production deployment.** By default, the shape of stage is whatever Red Alpha determines the real production deployment will be — same architecture, same services, same configuration posture — because an evaluation run against something that is not the real deployment shape proves less than it appears to. The funding customer may instead supply a **CONOPS** (concept of operations) for the stage environment, describing how their people will use it and what it therefore has to look like; where they do, that CONOPS governs and we build to it. Where they do not, Red Alpha's own read of the production deployment *is* the specification.

**Where the data comes from.** The customer may supply the data used for evaluation; where they do not, Red Alpha provides representative data consistent with the intended production deployment. Either way, the *class* of data is a deliberate decision recorded in the charter, because it sets stage's control baseline: synthetic, sanitized, or genuinely operational. Customer-supplied does not automatically mean permissible — if real operational data lands in stage, then stage is inside the authorization boundary and is treated that way from that moment on, with the handling regime agreed in writing *before* the data arrives.

**Release parity, even when stage is replicated.** Stage **may be replicated** — more than one instance, for more than one audience or purpose — but every instance **runs the same release as the upstream mainline**. No per-customer fork living quietly in a stage instance; no instance drifting behind. This is what keeps "the customer evaluated it in stage" a statement about the product rather than about one copy of it, and it keeps the control evidence we gather in stage applicable to what actually ships.

**It is pre-production and pre-sales — and it is not the pilot.** Two legitimate uses share this environment: pre-production evaluation by a funding customer's operators (Phase 2 onward), and pre-sales demonstration to a prospective customer. Both are *evaluation*. Neither carries authorization to operate or any mission dependency, and both sides should be clear that using stage is not using the product for real work — Gate 3 exists precisely because moving to the customer's production environment is a different decision with a different bar. Note that the pre-sales use makes the data question sharper, not looser: a prospect-facing instance must not hold another customer's data.

**Who can reach it, and how.** Named evaluators with individual, auditable accounts — not a shared credential passed around a program office. Access is granted for evaluation and revoked when people rotate off. This applies to pre-sales audiences as much as to a funding customer's operators.

Handled well, stage is also a security *asset*: it is where controls get exercised by real users against realistic tasks, months before an assessor looks at them.

## Who owns what

The **Security Lead (ISSO-style role)** on the IPT owns this entire thread: categorization, control selection and implementation evidence, the SSP and related documents, the DevSecOps security gates, and the relationship with the assessor and the AO. On a four- or five-person team this person also wears the DevSecOps hat. The **Authorizing Official (AO)** sits outside the team and makes the risk-acceptance decision; the Security Lead's job is to keep that decision easy and current. Every other team member is responsible for building to the security standard the pipeline enforces — security is owned by one, practiced by all.

## Key security artifacts (the authorization package)

These accumulate across the timeline rather than being written at the end:

- **System Security Plan (SSP)** — how the system implements its selected controls.
- **Security Assessment Report (SAR)** — the independent assessor's findings.
- **Plan of Action & Milestones (POA&M)** — known gaps and the plan to close them.
- **Authorization decision (ATO / interim / cATO evidence)** — the AO's risk acceptance and its basis.
- **Continuous monitoring evidence** — the live dashboards and automated results that sustain authorization in Phase 5.

## Open questions / to resolve

*These items are also tracked — with owners, decision owners, and what "resolved" looks like — in [`07-open-items.md`](07-open-items.md), the register the whole team works from.*

- **What data class is stage allowed to hold by default**, and who approves the exception when a customer asks to put real operational data into it? The location question is settled (Red Alpha's controlled environment — see above); this one is not.
- **How many replicated stage instances can a lean team actually keep at mainline release parity**, given that parity is a hard rule rather than an aspiration? This is a real constraint on how many pre-sales demonstrations we can carry at once.
- **Who owns a pre-sales stage instance** — an IPT that has no funding customer for it yet, or the business-development side — and how long does such an instance live before it is torn down?
- **Does a POC being shopped run in a stage instance, or in its own demo environment?** Stage now explicitly serves pre-sales, but the release-parity rule presumes a product with a mainline — a pre-Gate-0 POC may not have one. Worth settling alongside the POC question in document 04.
- **What must a customer-supplied CONOPS contain** for us to build to it without a second round of discovery? A lightweight template would prevent that.
- Which of Red Alpha's products actually target environments requiring a formal **ATO/cATO**, and which are commercial (security-strong but not government-authorized)? The timeline weight differs a lot.
- Do we build on an existing **authorized platform / software factory**, or stand up our own pipeline? This heavily affects the authorization timeline.
- What is our realistic **impact level** default (moderate?) and the corresponding control burden for a lean team?
- Should the **Security Lead** be embedded per IPT or shared across teams as a security "chapter" at our current size?
- How much of the control baseline can be **inherited from the core product** by each new customer's tailored instance? Getting this right is what makes the second engagement cheaper than the first.

*Framework definitions and the source list are in [`06-glossary-and-references.md`](06-glossary-and-references.md).*
