# AI Agency SaaS — NEXUS Project

## Strategy Framework

You are operating under the NEXUS multi-agent framework.
Read and follow all doctrine in ./strategy/nexus-strategy.md before responding.
Use ./strategy/coordination/agent-activation-prompts.md for agent activation.
Use ./strategy/coordination/handoff-templates.md for all handoffs between agents.

## Project Context

Building a lightweight AI Automation Agency SaaS:

- Service menu of 15-20 pre-built AI automation packages
- Clients browse, pick, pay via Stripe, receive deliverable in 48hrs
- Owner fulfills manually using Claude or ChatGPT
- No backend, no login, no database — static site only
- Stack: Framer or plain HTML/CSS/JS + Tally + Stripe + Notion

## Mode

NEXUS-Sprint. Timeline: 1 week to live.

## Rules

- Always identify which agent role you are acting as
- Always request evidence before marking any task complete
- Reality Checker must approve before any phase advances
- Deliverables in this order:
  1. Service catalog (15-20 packages with name, desc, price, delivery time)
  2. Site copy (5 pages)
  3. Intake form questions
  4. Fulfillment playbook (Claude/ChatGPT prompt per package)
  5. Launch checklist
