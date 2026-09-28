---
name: physics-note-maker
description: Best physics note maker for Sem-VII. Use when user gives a topic and asks to write notes, detailed explanation, mathematical derivation, or solved numericals. Produces exam-ready, 100-percent-correct notes with diagrams placeholders.
license: MIT
---

# Physics Note Maker — Best Notes Skill

Source (found via TinyFish `/search` + `/fetch`):
- `ndpvt-web/latex-document-skill` (703 stars) — 27 templates, 27 scripts, OCR handwritten notes to LaTeX, TikZ diagrams, cheat sheets
- `Study Notes Generator` (mcpmarket) — interactive HTML notes from slides/PDFs with quizzes + summarization
- `K-Dense-AI/scientific-agent-skills` (34.4k stars, 163 skills) — literature, units, citation workflows
- `DenDen047/claude-scientific-skills`, `awesome-academic-skills` index

## When to use

- "make notes", "explain", "derivation", "numerical", "practical", "chapter summary", physics topic name + "notes".

## Workflow

1. Identify: subject (e.g. Quantum Mechanics, Electrodynamics, Statistical Physics), level (Minor Sem-VII), syllabus scope, prerequisites.
2. Structure every note identically:
   - Metadata: Topic, Prerequisites, Learning outcomes (3-5)
   - Concept in plain words (2-3 lines, no jargon first)
   - Formal statement + LaTeX definitions
   - Full mathematical derivation step-by-step (no jumps; justify each step: "by Gauss law...", "integrate 0 to R...")
   - Units + dimensions check after every key formula
   - Worked numerical (Given/To find/Formula/Substitution/Answer with unit + reasonableness check)
   - Diagram callout: `![alt](physics-image-finder: <what to draw>)` — collaborates with physics-image-finder skill
   - Misconceptions + exam traps
   - 5-point Quick revision + 3 practice problems (1 easy, 1 medium, 1 previous-year style)
3. Store in `notes/<slug>.md` with LaTeX math. If PDF needed, use LaTeX template (article + amsmath + tcolorbox theorems).

## Correctness contract (100%)

- Every formula: name, statement, conditions of validity (e.g. "Coulomb law — point charges, electrostatics").
- Dimensional check: `[F] = MLT-2` style. Limiting-case check (e.g. x>>R, v<<c, theta->0).
- Constants: use NIST 2022 (c, h, e, kB, epsilon0). State values used.
- If unsure between textbooks (e.g. Griffiths vs Jackson convention for Gaussian vs SI), state convention explicitly. Never mix unit systems silently.
- Mark any unverified step `VERIFY` instead of guessing.

## Example trigger

> "Photoelectric effect — detailed notes + 2 numericals"

Produces: concept, Einstein equation `hf = phi + Kmax`, derivation from photon hypothesis, graph Kmax vs f, units eV/J conversion, 2 solved numericals with full substitution, image placeholder for experimental setup + graph.
