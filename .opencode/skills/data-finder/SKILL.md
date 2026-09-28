---
name: data-finder
description: Best well-researched data finder. Use when user asks for data, values, tables, constants, experimental results, papers, or structured extraction from PDFs, docs, or web. Returns validated tables with sources, never invented numbers.
license: MIT
---

# Data Finder — Best Well-Researched Data Skill

Source (found via TinyFish `/search` + `/fetch`):
- `claude-office-skills/skills — data-extractor` (MIT) — unstructured library: partition PDF/DOCX/PPTX/XLSX/email/HTML/image, tables + metadata + chunking for RAG
- `Scientific Data Extractor` (mcpmarket) — PDFs to validated datasets for meta-analysis
- `davila7/claude-code-templates — literature-review` — citation + database access (gget, bioservices, datacommons)
- `Top 10 Claude Skills for Researchers 2026` (browseract)

## When to use

- "find data", "table of", "values of", "extract from PDF", "research papers on", "constants", "datasets".

## Workflow

1. Clarify: quantity, material/system, conditions (T, p, wavelength), units required, date freshness, number of sources.
2. Collect:
   - Web + papers: minimum 3 independent sources for numbers. Prefer NIST, CODATA, arXiv, peer-reviewed, official datasheets.
   - Files: use unstructured-style partition — text + tables + page numbers. Keep `source file : page` per row.
3. Validate:
   - Units normalized to SI (+ original in brackets if different).
   - Outliers flagged: if sources disagree >5%, show all + explain (different conditions/methods).
   - Every cell traceable: `value | unit | conditions | source [n]`.
4. Output `data/<slug>.md` + CSV when tabular:
   ```markdown
   | Quantity | Value | Unit | Conditions | Source |
   |---|---|---|---|---|
   ```
   Plus Sources list with accessed dates. Plus Confidence + gaps.

## Rules

- Never invent numbers, DOI, page, or error bars. If PDF table is scanned/unclear, say `ILLEGIBLE p.X` and ask for clearer copy.
- For papers (`domain_type=research_paper` style): record authors, venue, year, cited_by, pdf_url when available.
- Chunk large docs by title, max ~1000 chars, keep page metadata — same as data-extractor best practice.
