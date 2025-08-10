# Context Capsules

**Context is everything: improving AI context and memory through user controls.**\

*Author: Nestor M*
*Contact: nestor-labs@nmb2b.slmail.me*
*License: CC BY 4.0 for all content. MIT for code if published.*

---

## Abstract

As language models become embedded in daily workflows, reflection, and decision-making, users are entrusting AI with highly sensitive, high-stakes information. But current memory systems are fragile, opaque, and often betray that trust. We propose a new layer - **Context Capsules (CCs)** - that gives users direct control over which memories are shared with the AI, when, and why.

Rather than replacing technical memory architectures, CCs operate as a lightweight, human-facing **context management layer**. Users can select, switch, and define capsules that correspond to real-life domains. These capsules act as scoped memory environments, restoring clarity, reducing information leaks, and increasing both trust and output quality. The system is designed to integrate with memory-enabled models and agent protocols and can be deployed at the interface, SDK, or OS level.

---

## Introduction

Language models are no longer confined to search and summarization. They now act as collaborators, confidants, and copilots. Users ask them to write reports, explain code, reflect on mental health, or recap yesterday's actions.

But the illusion of continuity is fragile. Most models operate as **stateless engines**, treating each interaction in isolation. Unless memory is explicitly invoked or engineered, context evaporates.

Early memory systems have emerged, but they are inconsistent and opaque. Users often don’t know *what* the AI knows, *why* it remembers certain things, or *how* to correct it. The result is a persistent cognitive drag: re-explaining, re-framing, repairing broken assumptions.

---

## The Problem: Context Collapse

*"ChatGPT remembers the name of my cat - which I casually mentioned the other day, but it keeps ignoring the business-critical information that I repeatedly asked it to remember. It's ridiculous*

We’re not short on intelligence. We’re short on memory that makes sense. 

LLMs today can process millions of tokens. They can draft legal contracts and write production-grade code. But they forget what you asked an hour ago. That’s not just frustrating — it’s broken. And it's seriously eroding usability, productivity and user trust.

The rollout of long-term memory by major LLM providers has only made things murkier. It lacks basic controls and transparency, making users more anxious and frustrated. 

*"I've been talking to ChatGPT with memory on. At first I was careful — now it knows where I work, people’s names, where I live. I don’t know how to erase it. I’ve tried confusing it with fake data. Nothing works. [...] Do you know if deleting the account would really delete the information?"*

To summarize the problem:
- AI memory is random and unreliable. It often recalls irrelevant details and forgets business-critical information - even when the user repeatedly asks to remember it. The experience is broken.
- Prompt engineering is a band-aid. It's not sustainable to put the burden of the system's faults on the user. 
- Context engineering is a step forward - but users still can’t see or control what’s actually being remembered.
- Privacy concerns are rising. Users don’t know what’s remembered, what’s forgotten, or what leaks between sessions. Even worse, they have limited controls and no reliable way to correct or delete sensitive data.
- Therapeutic use of LLMs is growing. Users confide deeply personal thoughts across domains - at work and at home - and often get misaligned or even jarring responses.


These failures lead to:
- Workflow friction and exponential loss of productivity
- Declining user confidence
- Abandonment of otherwise powerful tools

---

## The Proposal: Context Capsules

CCs are a lightweight, human-facing **context management UI** that influences AI memory.
The idea is to provide humans with an easy, effortless way to quickly steer AIs with strong, high-trust signals.
What it means for users: **No more wasted time in repetition. Set once, rest assured the AI follows.**

Context Capsules inform memory containers. They allow users to:

- Set **intent and use-case preferences** during onboarding ("I use this AI for therapy, summarizing complex reports, and daily writing")
- Select **which capsule** is active before starting a session ("Start with client X")
- Switch capsules mid-interaction ("Switch to Personal context")
- Create **custom domains** ("Coaching Clients", "Writing Drafts")
- Adjust **privacy and identity exposure** per capsule (e.g., pseudonym in one, real name in another)

Each capsule can contain summaries, snippets, structured metadata, or links to previous sessions.

Unlike purely automated memory systems, CCs follow a **mixed control model**. Default behavior remains seamless, but user-selected capsules override, redirect, or reinforce model memory when needed. This hybrid design increases accuracy, reduces friction, and gives users confidence to trust AI.

---

## Design Principles

The success of CCs depends not just on technical fit but on adherence to 3 key principles of human-centered interaction

- **Effortless and frictionless:** The UI layer must remain intuitive, and minimal. Capsules integrate with existing interaction flows and established design patterns.

- **Intent as alignment:** Capsules capture intent and inject it in relevant sessions to save the user time and effort.

- **Identity through context:** Capsules allow the user to seamlessly switch identities to tackle distinctive tasks.

---

## UX Model: Control Without Cognitive Overhead

The interface layer is lightweight by design. Capsules integrate with existing UI patterns. Detailed flows and mockups available in companion materials.


---

## System Integration

CCs are model-agnostic and architecture-compatible. They can either influence and improve memory systems, or replace them.

Paths to implementation to explore:
- **UI/plugin level** (ChatGPT, Claude, open source chat UIs)
- As a **browser or OS-level app** a local utility that manages capsule context across apps and services, like a keyboard for trust and identity.




---

## Use Cases

- **Productivity boosters**: Capsules allow users to provide laser-focused context with the click of a button. The result is higher output quality and reduced friction across sessions.
- **Identity containers:** Capsules allow users to separate contexts like 'Work', 'Personal', or 'Anonymous', minimizing data leakage across roles.
- **Contextual creativity:** Capsules segment client projects, reflective writing or story worlds - keeping each stream focused, relevant, and isolated by design. 


---

## MVP Focus: developer use cases

LLMs waste developer time with repeated reminders and scope drift (e.g., **“do not rename variables”**). We suggest **per‑project**, **mode‑bound** guardrails that inject stable constraints and preferences into every interaction. Capsules are a **lightweight UI/SDK layer**-not infra- and aim to **reduce re‑explanation overhead** and **contain model behaviour**. They **influence** trust and output quality.


1) Problem

- **Babysitting loop:** Devs repeatedly type the same guardrails to AIs across sessions and files.
- **Scope drift:** Models rename symbols, restructure files, or reformat entire codebases against instructions.
- **Random memory:** Platform “memory” recalls trivia, forgets critical rules, and offers limited correction tools.

**Cost:** Lost hours for high‑cost talent. Friction leads to reduced adoption of otherwise useful assistants.



2) Proposal

**Context Capsules = per‑project, reusable guardrails + modes.**
The idea in a nutshell **No more wasted time in repetition. Set once, rest assured the AI follows.**


A capsule stores **stable, repetitive information** that helps developers steer AI:
- Stack + formatter/style (e.g., *Python 3.11, Black*, *TypeScript + ESLint rules*)
- Constraints (e.g., *never rename variables; don’t touch other files; retain schema field order*)
- Tone/verbosity (e.g., *no praise, minimal explanations*)
- **Mode** (behavior contract): **Code Agent** / **Auditor** / **QA**

To streamline workflows, context capsule MVP functionality explores:
- Repo binding (auto‑activate when inside project)
- Optional snapshot (last file/task note) for continuity
- Auto‑activate when a bound repo/folder opens.
- One‑keystroke toggle: `@auditor`, `@qa`, `@agent` within chat or command palette.
- Inline edit of constraints without leaving context.
- Manual injection path (pre‑automation): paste capsule prelude into each prompt.




3) Modes (MVP)

 Each mode is a contract with **Allowed / Forbidden / Output**.

### A. Code Agent (high trust)

- Allowed: create/edit/delete code, write tests, restructure files.
- Forbidden: violating explicit constraints (e.g., renaming symbols where forbidden, changing financial fields).
- Output: diffs or patches with brief rationales.

### B. Auditor (medium trust)

- Allowed: fix typos/missing imports, point to lines, minimal safe edits.
- Forbidden: refactors, renames, file moves, bulk reformatting.
- Output: flags + minimal diff suggestions; no superficial comments.
- 
### C. QA/Debug (zero trust)

- Allowed: propose test cases/stubs, enumerate bugs, reference lines.
- Forbidden: any code edits or structural changes.
- Output: test vectors with expected outcomes.

To explore (WIP):

Mentor mode: "teach me, challenge me, explain why"



4) Sample Schema 

```json
{
  "capsule_id": "space-invaders",
  "project_name": "Space Invaders",
  "stack": { "lang": "python", "version": "3.11", "formatter": "black" },

  "mode": "qa",   // one of: code_agent | auditor | qa

  "constraints": [
    "Never rename variables",
    "Do not modify files outside current path",
    "No bulk reformatting"
  ],

  "guardrails": {
    "allowed": ["flag_issues", "propose_tests", "reference_lines"],
    "forbidden": ["rename_symbols", "refactor", "create_or_delete_files"]
  },

  "tone": "dry_minimal",
  "repo_binding": "~/projects/space_invaders",
  "snapshot": { "last_file": "physics_loop.py", "note": "Add friction calc" }
}
```

5) Personas


### Persona: Luke Jo — Corporate Maintainer by day, Learner by night

**Capsule A — Day Job:** Invoice Audit Automation\
**Mode:** Auditor (default), QA (secondary)\
**Key constraints:** never alter financial fields; retain schema order; must justify any change.

**Sample capsule (A):**

```json
{
  "capsule_id": "invoice-audit",
  "project_name": "Invoice Audit Automation",
  "stack": { "lang": "typescript", "runtime": "node", "db": "postgres" },
  "mode": "auditor",
  "constraints": [
    "Never alter financial fields",
    "Retain schema field order",
    "Explain any suggested change"
  ],
  "guardrails": {
    "allowed": ["flag_violations", "point_to_lines", "suggest_minimal_diffs"],
    "forbidden": ["rename_symbols", "restructure_files", "bulk_reformat"]
  },
  "tone": "formal_minimal",
  "repo_binding": "~/corp/invoice",
  "snapshot": { "last_file": "transform_invoices.ts", "note": "Swiss rounding bug" }
}
```

**Capsule B — Night Project:** Space Invaders 👾\
**Mode:** Mentor (default), Code Agent (for specific tasks)

**Sample capsule (B):**

```json
{
  "capsule_id": "space-invaders",
  "project_name": "Space Invaders 👾",
  "stack": { "lang": "python", "version": "3.11", "formatter": "black" },
  "mode": "Mentor (default)",
  "guardrails": {
    "allowed": ["propose_tests", "flag_bugs", "reference_lines"],
    "forbidden": ["edit_code", "rename_symbols", "create_or_delete_files"]
  },
  "tone": "extended, explain thoroughly",
  "repo_binding": "~/projects/space_invaders",
  "snapshot": { "last_file": "physics_loop.py", "note": "Add friction calc" }
}
```



### Persona: Dr. Lee — Clinical Healthcare Analyst

**Project:** Cardiovascular Risk Review\
**Mode:** QA (read‑only)\
**Key constraints:** don’t rewrite model equations; trial ID must match; no dosage autocomplete.

**Sample capsule:**

```json
{
  "capsule_id": "cv-risk-review",
  "project_name": "Cardiovascular Risk Review",
  "stack": { "lang": "python", "libs": ["pandas", "scikit-learn"] },
  "mode": "qa",
  "constraints": [
    "Do not rewrite model equations",
    "Clinical trial ID must match exactly",
    "No autocomplete on dosage fields"
  ],
  "guardrails": {
    "allowed": ["compare_logic", "flag_protocol_deviation", "summarize_differences"],
    "forbidden": ["edit_code", "generate_dosage_values"]
  },
  "tone": "evidence_minimal",
  "repo_binding": "~/hospital/cv-risk",
  "snapshot": { "last_file": "predict_risk.py", "note": "Review dosage thresholds" }
}
```


---

## Conclusion and Next Steps

Context Capsules address the missing layer in AI: human-centered context control. They don’t replace memory systems — they make them usable.

By scoping memory through clear, reversible structures, capsules reduce noise, prevent leakage, and align outputs with real user intent.

