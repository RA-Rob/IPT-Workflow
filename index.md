---
title: Overview
description: >-
  Red Alpha's standard way of turning a self-funded proof of concept into a
  shipped, secure, licensable software product, by way of a customer-funded MVP
  delivered in short reviewable increments by a small Integrated Product Team.
---

<div class="hero">
  <h1>The Red&nbsp;Alpha IPT Workflow</h1>
  <p class="lede">A standard, repeatable way to turn a self-funded <strong>proof of concept</strong> into a shipped, secure, licensable software product — by way of a customer-funded <strong>MVP</strong> tailored to that customer's mission and delivered in short reviewable increments, built by small, durable, cross-functional <strong>Integrated Product Teams</strong>.</p>
</div>

<div class="belief">
  <p class="claim">The expensive mistake in software is <em>building the wrong thing well.</em></p>
  <p>So the workflow does two things, in order: <strong>reduce uncertainty cheaply before committing</strong>, then <strong>let a small empowered team own delivery end to end</strong>.</p>
</div>

This site is a **living knowledge base, not a finished standard**. It is meant to be read, argued with, and revised by the Red Alpha team. Every document carries a status line, and every document ends with an *Open questions / to resolve* section — the fastest way to see what is still unsettled.

## The shape of it

A **small durable team** moves a product through **gated phases on a predictable cadence**, with **security and authorization designed in throughout**. Two funding streams run through it: Red Alpha's money proves the concept and builds the **core product** it owns and licenses; the customer's money pays for the **tailoring** that makes it work in their environment for their mission.

| Phase | Purpose | Funded by | Gate |
|-------|---------|-----------|------|
| *(entry)* | A POC exists; a customer commits funding; charter the IPT | — | Gate 0 — commit and charter |
| **1. Discovery** | Frame the outcome (PR/FAQ); draw the core/tailoring line | Customer + RA | Gate 1 — green-light the MVP |
| **2. MVP** | Tailor the core to the customer's mission, in short cycles | Customer | Gate 2 — **customer acceptance** |
| **3. Build** | Two tracks: productize the core, continue tailoring | RA + Customer | Gate 3 — authority & readiness to launch |
| **4. Launch** | Pilot in the customer's real environment | RA + Customer | Gate 4 — sustainment |
| **5. Operate & Iterate** | Run, monitor, improve; continuous authorization | RA + Customer | Renew, scale, or sunset |

Gate 0 opens the work; after that, **Gate N closes Phase N**. Gates are short, honest decision points — proceed, re-scope, or stop — and **Gate 2 belongs to the customer**, not to us. Inside every cycle, **time is fixed and scope flexes**: when time runs out we ship the most valuable slice rather than slipping the date. A typical product reaches a proven first launch roughly **8 months after a customer commits funding**, with the POC and the period spent shopping it ahead of that on their own clock.

<div class="belief">
  <p class="claim">The customer approves the direction repeatedly, not once.</p>
  <p>During the MVP phase, every <strong>2–3 week cycle</strong> ends with working capability promoted to a <strong>stage</strong> environment the customer's own operators can use. They exercise it, tell us what's wrong, and that steers the next cycle. Five or six increments means five or six cheap chances to redirect us — instead of one expensive verdict on a finished product.</p>
</div>

**POC and MVP are not the same thing.** The POC is Red Alpha spending its own money to earn the right to a conversation; the MVP is a customer spending theirs to find out whether the answer fits their mission. Both take real time, and both are necessary. A [side-by-side comparison]({{ '/docs/06-glossary-and-references.html' | relative_url }}) is in the glossary.

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

**Suggested path:** [02 — The Model]({{ '/docs/02-ipt-model-overview.html' | relative_url }}) → [03 — Team & Roles]({{ '/docs/03-team-structure-and-roles.html' | relative_url }}) → [04 — Process & Gates]({{ '/docs/04-process-timeline-and-phases.html' | relative_url }}) → [05 — Security & Compliance]({{ '/docs/05-security-and-compliance.html' | relative_url }}), with [01]({{ '/docs/01-research-brief-incubator-methodologies.html' | relative_url }}) as background and [06]({{ '/docs/06-glossary-and-references.html' | relative_url }}) as reference.

## Where it comes from

The workflow deliberately borrows from five practitioners who answer the same question differently, rather than copying one wholesale:

| Source | What we adopt |
|--------|---------------|
| **Amazon** | Write the customer outcome first (PR/FAQ); small end-to-end teams |
| **Google Ventures** | A time-boxed sprint to validate risky decisions; the *Decider* |
| **IDEO** | Human-centered discovery; the desirable / feasible / viable filter |
| **Spotify** | Autonomy with alignment; culture over org chart; chapters for scaling |
| **Basecamp** | Appetite (fixed time, variable scope); betting; the circuit breaker |

The reasoning behind each is in [01 — Research Brief]({{ '/docs/01-research-brief-incubator-methodologies.html' | relative_url }}).

## Scope and assumptions

This workflow covers **an IPT taking a POC to product**. It starts at Gate 0 — the moment a customer commits funding — and runs through sustained operation. Everything before that is treated as input: a Red Alpha-funded POC exists and has been shopped. **How a POC comes to exist is deliberately out of scope** and belongs to a broader ideation-to-product concept not yet written down.

- **Lean teams.** A standard IPT is **4–7 people**; almost everyone wears more than one hat.
- **Two funding streams.** Red Alpha funds the licensed **core product**; the customer funds **tailoring** for their environment. Upstreaming tailoring into the core is a separate, recorded decision.
- **Security-first / defense context.** Products may serve government or defense customers, so authorization (ATO/cATO) is a first-class part of the timeline.
- **Software products.** Written for software, including cloud-delivered; hardware-heavy efforts need adaptation.

## What we're still deciding

The decisions that matter most, and that the team is being asked to settle:

1. **The missing front end** — how does a POC come to exist? Who funds it, who staffs it before any IPT exists, what it must prove, and who shops it. This workflow starts after all of that, which leaves the front of our pipeline undefined.
2. **Where `stage` lives** — Red Alpha-hosted or in the customer's environment — and **what data class it may hold**. This sets the authorization boundary.
3. **Upstreaming and IP** — what do our standard customer terms actually permit when we want to promote customer-funded capability into the licensed core?
4. **Build-phase cycle length** — the MVP phase is set at 2–3 weeks for customer contact; should Phase 3 return to the classic six?
5. **Security Lead** — embedded in every IPT, or shared across teams as a chapter?
6. **Which products need formal ATO/cATO** versus commercial-grade security? The timeline weight differs a lot.

Each document's *Open questions* section carries the rest.
