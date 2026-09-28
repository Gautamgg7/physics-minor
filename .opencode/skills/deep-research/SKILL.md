---
name: deep-research
description: Structured two-phase deep research for physics and technical topics. Use when user asks for well-researched report, literature survey, comparison, or 100-percent-correct explanation with citations. Produces outline first, then deep investigation with verification.
license: MIT
---

# Deep Research — Best Research Skill

Source (found via TinyFish `/search` + `/fetch` on Monid API):
- `Weizhena/Deep-Research-skills` (911 stars) — two-phase outline + deep investigation, human-in-loop, for Claude Code / OpenCode / Codex
- `anthropics/skills` (174k stars) — official Agent Skills spec + document skills (pdf, docx, pptx, xlsx)
- `Firecrawl Best Claude Code Skills 2026` — Superpowers, Document Skills, Firecrawl web data

## When to use

- "research", "survey", "literature review", "compare", "well researched", "with citations", "deep dive"
- Any physics Sem-VII topic needing multiple sources, not just one textbook paragraph.

## Workflow (must follow)

### Phase 1 — Outline (extensible, ask user)
1. Clarify goal, audience (physics minor Sem-VII), depth, date range.
2. Propose outline: Background, Theory, Key formulas with derivations, Experimental evidence, Applications, Misconceptions, References.
3. Wait for approval before deep phase. Keep outline in `research/outline.md`.

### Phase 2 — Deep investigation
1. Search broadly: textbooks, arXiv, HyperPhysics, PhET, NIST, official docs. Minimum 5 independent sources for factual claims.
2. Extract with `/fetch`-style full-text, not snippets only. Record URL, title, date, publisher per fact.
3. Cross-verify:
   - Formulas: dimensional analysis + limiting cases + 2 sources.
   - Constants/data: SI units, NIST values, year.
   - Contradictions: report both, pick consensus, explain why.
4. Draft `research/report.md` with inline citations `[1]`, tables for comparisons, and a Sources section with full URLs.
5. Self-critique pass: flag any claim with <2 sources as `NEEDS VERIFICATION`. Never present it as 100% certain.

## Output format

```markdown
# <Topic> — Deep Research
## TL;DR (5 bullets)
## 1. Background
## 2. Theory + derivations
## 3. Data / evidence (table)
## 4. Applications / numericals
## 5. Common misconceptions
## Sources
[1] title — url — accessed date
```

## Rules for 100% correctness

- No invented citations, page numbers, or DOI. If you cannot fetch it, say so.
- Math in LaTeX `$...$` / `$$...$$`. Number key equations.
- End with Confidence: High / Medium / Low per section + what would raise it.
