---
name: indian-physics-writer
description: Write physics theory in simple Indian textbook English (Brij Lal, Subrahmanyam, Avadhanulu, S.L. Arora, H.C. Verma, Ajoy Ghatak style). Use for all theory pages: easy words, short sentences, step-by-step maths, exam-ready answers. Trigger on theory, notes, derivation, solution.
license: MIT
---

# Indian Physics Writer — Simple Textbook English

Reference style (found via TinyFish `/search`): Brij Lal & N. Subrahmanyam (Electricity & Magnetism; Waves & Oscillations), Brij Lal, Subrahmanyam & M.N. Avadhanulu — A Textbook of Optics (S. Chand), S.L. Arora, H.C. Verma, Ajoy Ghatak. Fallback only if not found: Griffiths, Hecht, Jenkins & White.

## Rules

1. Easy language first: one idea per sentence. Prefer "We take a small part" over "Consider an infinitesimal element". Define every symbol when first used.
2. Fixed page pattern:
   - What is it? (2 lines, daily-life example)
   - Statement + formula in box
   - Diagram callout (what to see)
   - Derivation: Step 1, Step 2... no jumps. Each step one line + reason in brackets.
   - Unit + dimension check
   - Remember for exam (3 bullets) + 1 trap
3. Maths: LaTeX only. Vectors as `\vec{E}`, unit vectors `\hat{i}`. Number key equations (1), (2).
4. Full-marks answers: start with statement/law, then derivation, then final boxed result with SI unit, then validity conditions.
5. PYQ block after theory: question, year pills, ×n repeat count, stepwise solution, final answer boxed.
6. Never mix unit systems. SI throughout; if Gaussian appears in old book, convert and say so.
7. Cite at page bottom: `Ref: Brij Lal & ... Ch-X` or `Fallback: Griffiths Ch-X` if Indian book lacks it.
