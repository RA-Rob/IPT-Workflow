---
title: Overview
description: >-
  Red Alpha's standard way of turning a validated idea and its MVP into a
  shipped, secure, supportable software product, using small, durable,
  cross-functional Integrated Product Teams.
---

<div class="hero">
  <h1>The Red&nbsp;Alpha IPT Workflow</h1>
  <p class="lede">A standard, repeatable way to turn a validated idea and its MVP into a shipped, secure, supportable software product — using small, durable, cross-functional <strong>Integrated Product Teams</strong>.</p>
</div>

<div class="belief">
  <p class="claim">The expensive mistake in software is <em>building the wrong thing well.</em></p>
  <p>So the workflow does two things, in order: <strong>reduce uncertainty cheaply before committing</strong>, then <strong>let a small empowered team own delivery end to end</strong>.</p>
</div>

This site is a **living knowledge base, not a finished standard**. It is meant to be read, argued with, and revised by the Red Alpha team. Every document carries a status line, and every document ends with an *Open questions / to resolve* section — the fastest way to see what is still unsettled.

## The shape of it

A **small durable team** moves a product through **four gated phases on a predictable cadence**, with **security and authorization designed in throughout**.

| Phase | Purpose | Gate |
|-------|---------|------|
| **Stand-up** | Charter the team; decide it's worth building | Gate 0 — commit to productize |
| **Discovery** | Frame the outcome (PR/FAQ); validate the riskiest assumption | Gate 1 — green-light the build |
| **Build** | Deliver in secure, fixed-time cycles | Gate 2 — authority & readiness to launch |
| **Launch** | Pilot to real users; prove it in production | Gate 3 — sustainment |
| **Operate & Iterate** | Run, monitor, improve; continuous authorization | Scale or sunset |

Gates are short, honest decision points — proceed, re-scope, or stop. Inside the build, **time is fixed and scope flexes**: when time runs out we ship the most valuable slice rather than slipping the date. A typical product reaches a proven first launch in roughly **5–6 months**.

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

This workflow governs the **productization** stage — what happens *after* an idea has produced a working MVP and someone decides it's worth turning into a product. Earlier ideation and MVP-building precede it and have lighter rules.

- **Lean teams.** A standard IPT is **4–7 people**; almost everyone wears more than one hat.
- **Security-first / defense context.** Products may serve government or defense customers, so authorization (ATO/cATO) is a first-class part of the timeline.
- **Software products.** Written for software, including cloud-delivered; hardware-heavy efforts need adaptation.

## What we're still deciding

Three open decisions matter most, and the team is being asked to settle them:

1. **Cycle length** — the classic six weeks, or shorter (3–4) given our size?
2. **Security Lead** — embedded in every IPT, or shared across teams as a chapter?
3. **Which products need formal ATO/cATO** versus commercial-grade security? The timeline weight differs a lot.

Each document's *Open questions* section carries the rest.
