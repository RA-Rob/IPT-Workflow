# 05 — Security and Compliance, Woven Into the Process

*Status: Draft for discussion — v0.1 — August 2026*

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
| **Phase 0 / Gate 0** | Begin RMF **Prepare**; Security Lead gives the initial risk read and flags authorization constraints before we commit. |
| **Phase 1 / Gate 1** | **Categorize** the system (impact level); draft **Select** (control baseline & boundary); the security & authorization plan is a Gate 1 exit artifact; architecture chosen to be authorizable. |
| **Phase 2 (Build)** | **Implement** controls alongside features every cycle; DevSecOps pipeline enforces the secure supply chain; SSP and control evidence accumulate; begin **Assess** activities as increments stabilize. |
| **Gate 2** | **Assess** complete enough and **Authorize** achieved — an ATO granted, or an interim/continuous-authorization path agreed with the AO — as a hard condition of launch. |
| **Phase 3 (Launch)** | Security monitoring and incident response live from day one of the pilot. |
| **Phase 4 (Operate)** | **Monitor** continuously; mature toward **cATO** (CONMON + ACD + SSSC); maintain authorization through ongoing evidence rather than re-accreditation. |

The key scheduling insight: **authorization work runs in parallel with build the whole way**, not as a separate stage bolted on before launch. This is the single biggest lever a lean team has for hitting launch dates in a government context.

## Who owns what

The **Security Lead (ISSO-style role)** on the IPT owns this entire thread: categorization, control selection and implementation evidence, the SSP and related documents, the DevSecOps security gates, and the relationship with the assessor and the AO. On a four- or five-person team this person also wears the DevSecOps hat. The **Authorizing Official (AO)** sits outside the team and makes the risk-acceptance decision; the Security Lead's job is to keep that decision easy and current. Every other team member is responsible for building to the security standard the pipeline enforces — security is owned by one, practiced by all.

## Key security artifacts (the authorization package)

These accumulate across the timeline rather than being written at the end:

- **System Security Plan (SSP)** — how the system implements its selected controls.
- **Security Assessment Report (SAR)** — the independent assessor's findings.
- **Plan of Action & Milestones (POA&M)** — known gaps and the plan to close them.
- **Authorization decision (ATO / interim / cATO evidence)** — the AO's risk acceptance and its basis.
- **Continuous monitoring evidence** — the live dashboards and automated results that sustain authorization in Phase 4.

## Open questions / to resolve

- Which of Red Alpha's products actually target environments requiring a formal **ATO/cATO**, and which are commercial (security-strong but not government-authorized)? The timeline weight differs a lot.
- Do we build on an existing **authorized platform / software factory**, or stand up our own pipeline? This heavily affects the authorization timeline.
- What is our realistic **impact level** default (moderate?) and the corresponding control burden for a lean team?
- Should the **Security Lead** be embedded per IPT or shared across teams as a security "chapter" at our current size?

*Framework definitions and the source list are in [`06-glossary-and-references.md`](06-glossary-and-references.md).*
