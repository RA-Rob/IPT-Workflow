---
title: Overview
description: >-
  Red Alpha's standard way of turning intellectual property it owns or has the
  right to reuse, usually built and paid for on an existing customer contract,
  into a shipped, secure, licensable software product, by way of a
  customer-funded MVP delivered in short reviewable increments by a small
  Integrated Project Team.
---

<div class="hero">
  <h1>The Red&nbsp;Alpha IPT Workflow</h1>
  <p class="lede">A standard, repeatable way to turn <strong>intellectual property we own or have the right to reuse</strong> — usually built and paid for on an existing customer contract — into a shipped, secure, licensable software product, by way of a customer-funded <strong>MVP</strong> tailored to a new customer's mission and delivered in short reviewable increments, built by small, durable, cross-functional <strong>Integrated Project Teams</strong>.</p>
</div>

<div class="belief">
  <p class="claim">The expensive mistake in software is <em>building the wrong thing well.</em></p>
  <p>So the workflow does two things, in order: <strong>reduce uncertainty cheaply before committing</strong>, then <strong>let a small empowered team own delivery end to end</strong>.</p>
</div>

This site is a **living knowledge base, not a finished standard**. It is meant to be read, argued with, and revised by the Red Alpha team. Every document carries a status line and ends with an *Open questions / to resolve* section. All of those items are consolidated — with an owner, whoever decides, and what "resolved" looks like — in [08 — Open Items]({{ '/docs/08-open-items.html' | relative_url }}), which is where to go if you came to help settle something.

## The shape of it

A **small durable team** moves a product through **gated phases on a predictable cadence**, with **security and authorization designed in throughout**. Upstream of all of it sits the asset: **IP Red Alpha already has**, most often derived from work an earlier customer's contract funded, generalized beyond that one mission and **confirmed by RA Legal as ours to use**. Two funding streams then run through the delivery: Red Alpha's money builds out the **core product** it owns and licenses; the customer's money pays for the **tailoring** that makes it work in their environment for their mission.

| Phase | Purpose | Funded by | Gate |
|-------|---------|-----------|------|
| *(entry)* | Our right to the IP is confirmed and the capability demonstrated; a customer commits funding; charter the IPT | — | Gate 0 — commit and charter |
| **1. Discovery** | Frame the outcome (PR/FAQ); draw the core/tailoring line | Customer + RA | Gate 1 — green-light the MVP |
| **2. MVP** | Tailor the core to the customer's mission, in short cycles | Customer | Gate 2 — **customer acceptance** |
| **3. Build** | Two tracks: productize the core, continue tailoring | RA + Customer | Gate 3 — authority & readiness to launch |
| **4. Launch** | Pilot in the customer's real environment | RA + Customer | Gate 4 — sustainment |
| **5. Operate & Iterate** | Run, monitor, improve; continuous authorization | RA + Customer | Renew, scale, or sunset |

Gate 0 opens the work; after that, **Gate N closes Phase N**. Gates are short, honest decision points — proceed, re-scope, or stop — and **Gate 2 belongs to the customer**, not to us. Inside every cycle, **time is fixed and scope flexes**: when time runs out we ship the most valuable slice rather than slipping the date. A typical product reaches a proven first launch roughly **8 months after a customer commits funding**, with the generalizing, clearing, packaging and shopping ahead of that on their own clock.

<div class="belief">
  <p class="claim">The customer approves the direction repeatedly, not once.</p>
  <p>During the MVP phase, every <strong>2–3 week cycle</strong> ends with working capability promoted to a <strong>stage</strong> environment the customer's own operators can use. They exercise it, tell us what's wrong, and that steers the next cycle. Five or six increments means five or six cheap chances to redirect us — instead of one expensive verdict on a finished product.</p>
</div>

<div class="belief">
  <p class="claim">No shopping until the rights are settled.</p>
  <p>Capability built under another customer's contract is <strong>not Red Alpha's by default.</strong> Before any of it is shopped, demonstrated, or built on, <strong>RA Legal records a determination</strong> that we have the legal right to use it — Red Alpha owns it, the originating customer released it, or a <strong>CRADA</strong> secures it. There is no fourth position. The originating customer's <em>data</em> never travels with the capability, whatever that determination says. (These documents call this an <em>IP clearance</em>; it is a question of ownership and permission, <strong>not</strong> a security clearance.)</p>
</div>

**What we shop and what we build are not the same thing.** What we shop is cleared IP, demonstrated — Red Alpha earning the right to a conversation, usually on the strength of work a previous customer already funded. The MVP is the *next* customer spending their own money to find out whether that capability fits their mission. Both take real time, and both are necessary. A [side-by-side comparison]({{ '/docs/07-glossary-and-references.html' | relative_url }}) is in the glossary.

## Read the documents

{% for section in site.data.nav.sections %}{% unless section.title == "Start here" %}
### {{ section.title }}

<ul class="cards">
{%- for item in section.items %}
  <li><a href="{{ item.url | relative_url }}">
    <span class="card-title">{{ item.title }}</span>
    <span class="card-blurb">{{ item.blurb }}</span>
  </a></li>
{%- endfor %}
</ul>
{% endunless %}{% endfor %}

<p><a href="{{ '/EXECUTIVE-SUMMARY.html' | relative_url }}"><strong>Executive Summary</strong></a> — the one-page version for leadership, if you read nothing else.</p>

**Suggested path:** [01 — IP Origin & Clearance]({{ '/docs/01-ip-origin-and-clearance.html' | relative_url }}) → [03 — The Model]({{ '/docs/03-ipt-model-overview.html' | relative_url }}) → [04 — Team & Roles]({{ '/docs/04-team-structure-and-roles.html' | relative_url }}) → [05 — Process & Gates]({{ '/docs/05-process-timeline-and-phases.html' | relative_url }}) → [06 — Security & Compliance]({{ '/docs/06-security-and-compliance.html' | relative_url }}), with [02]({{ '/docs/02-research-brief-incubator-methodologies.html' | relative_url }}) as background and [07]({{ '/docs/07-glossary-and-references.html' | relative_url }}) as reference.

## Where it comes from

The workflow deliberately borrows from five practitioners who answer the same question differently, rather than copying one wholesale:

| Source | What we adopt |
|--------|---------------|
| **Amazon** | Write the customer outcome first (PR/FAQ); small end-to-end teams |
| **Google Ventures** | A time-boxed sprint to validate risky decisions; the *Decider* |
| **IDEO** | Human-centered discovery; the desirable / feasible / viable filter |
| **Spotify** | Autonomy with alignment; culture over org chart; chapters for scaling |
| **Basecamp** | Appetite (fixed time, variable scope); betting; the circuit breaker |

The reasoning behind each is in [02 — Research Brief]({{ '/docs/02-research-brief-incubator-methodologies.html' | relative_url }}).

## Scope and assumptions

This workflow doesn't start at Gate 0 — **it starts with IP we already have.** A team delivering on an existing customer's contract builds something whose underlying capability generalizes beyond that one mission; RA Legal establishes Red Alpha's right to use it, and the cleared IP is matched to another customer's mission requirement and shopped. Red Alpha can also self-fund a POC outright — the secondary route. That origin is real process, documented in [01 — IP Origin & Clearance]({{ '/docs/01-ip-origin-and-clearance.html' | relative_url }}), not input sitting outside the workflow. What *is* gated separately, starting at Gate 0, is everything from a funding customer's commitment through sustained operation — covered by the rest of these documents.

- **Contract-derived IP is the norm.** Most of what we shop was built and paid for on an earlier engagement. A self-funded POC is the fallback, not the model.
- **Nothing moves uncleared.** RA Legal's written determination is a precondition to shopping, and Gate 0 re-checks that its scope still fits.
- **Lean teams.** A standard IPT is **4–7 people**; almost everyone wears more than one hat.
- **Two funding streams.** Red Alpha funds the licensed **core product**; the customer funds **tailoring** for their environment. Upstreaming tailoring into the core is a separate, recorded decision — and where it carries ownership weight, a Legal one.
- **Security-first / defense context.** Products may serve government or defense customers, so authorization (ATO/cATO) is a first-class part of the timeline.
- **Software products.** Written for software, including cloud-delivered; hardware-heavy efforts need adaptation.

## What we're still deciding

The decisions that matter most, and that the team is being asked to settle:

1. **The IP question — the one that gates everything else.** Where the IP comes from is now documented ([01 — IP Origin & Clearance]({{ '/docs/01-ip-origin-and-clearance.html' | relative_url }})). What is not: what our standard originating-contract terms actually permit, what an RA Legal clearance contains and **how long one takes**, when we pursue a **CRADA** proactively, and what we do with valuable IP we cannot clear.
2. **Running the front end operationally.** Who judges that a capability generalizes, who packages cleared IP into a demonstration, and who shops it.
3. **The `stage` policy and its data class.** Settled: stage runs in Red Alpha's controlled environment (on-prem or cloud), is built to the customer's CONOPS or mirrors our intended production deployment, serves pre-production and pre-sales, and may be replicated only at mainline release parity. Open: **what data class it may hold** by default, and who approves real operational data going into it — that is what sets the authorization boundary.
4. **Upstreaming and IP** — what do our standard customer terms actually permit when we want to promote customer-funded capability into the licensed core?
5. **Build-phase cycle length** — the MVP phase is set at 2–3 weeks for customer contact; should Phase 3 return to the classic six?
6. **Security Lead** — embedded in every IPT, or shared across teams as a chapter?
7. **Which products need formal ATO/cATO** versus commercial-grade security? The timeline weight differs a lot.

The rest are in [08 — Open Items]({{ '/docs/08-open-items.html' | relative_url }}) — twenty-five of them, each with an owner field waiting for a name.
