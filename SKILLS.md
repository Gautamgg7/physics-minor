# Physics Minor Sem-VII — Skills (installed via Monid TinyFish API)

All skills below were chosen with live TinyFish `/search` (ranked, never cached) and verified with TinyFish `/fetch` (full markdown), via `https://api.monid.ai/v1/run`. Free endpoints.

## Installed (`.opencode/skills/` — auto-loaded by OpenCode)

| Skill | Best for | Upstream source (starred, fetched) |
|---|---|---|
| `frontend-design` | Best web design — distinctive, non-templated UI | `anthropics/claude-code/.../frontend-design/SKILL.md` — official, exact copy via `/fetch` raw |
| `deep-research` | Best research — two-phase outline + deep investigation with citations | `Weizhena/Deep-Research-skills` (911★), `anthropics/skills` (174k★) |
| `physics-note-maker` | Best physics note maker — detailed theory + math derivations + numericals, 100% correct | `ndpvt-web/latex-document-skill` (703★, 27 templates/TikZ), Study Notes Generator, `K-Dense-AI/scientific-agent-skills` (34.4k★, 163 skills) |
| `data-finder` | Best well-researched data finder — validated tables from web/PDFs | `claude-office-skills/skills — data-extractor` (MIT, exact via `/fetch` raw), Scientific Data Extractor, literature-review |
| `physics-image-finder` | Best image/diagram finder for a topic — finds open-licensed figure or builds TikZ/matplotlib, verifies labels match math | `wanshuiyin/.../paper-illustration` (15.7k★, 736 lines), Scientific Schematics, generate-image (FLUX/Gemini) |

## How they work together (physics workflow)

1. `deep-research` → outline + sources for topic.
2. `data-finder` → constants/tables with units + sources.
3. `physics-note-maker` → exam notes + derivations + numericals, emits `physics-image-finder: <need>`.
4. `physics-image-finder` → best-fit figure, verified against equations.
5. `frontend-design` → if notes become a website/revision app, distinctive design (not AI slop).

## 100% correctness contract (all skills)

- Min 2–3 independent sources for formulas/numbers. NIST/CODATA for constants.
- Dimensional + limiting-case checks on every key equation.
- No invented citations/DOI/numbers. Mark `NEEDS VERIFICATION` / `UNVERIFIED` instead of guessing.
- Math in LaTeX, SI units, convention stated (SI vs Gaussian).

## Re-run the search yourself (Monid API)

```python
# inspect
# POST https://api.monid.ai/v1/inspect {"provider":"tinyfish","endpoint":"/search"}
# POST https://api.monid.ai/v1/inspect {"provider":"tinyfish","endpoint":"/fetch"}
# run search:
# POST https://api.monid.ai/v1/run {"provider":"tinyfish","endpoint":"/search","input":{"queryParams":{"query":"...","purpose":"..."}}}
# run fetch (up to 10 URLs):
# POST https://api.monid.ai/v1/run {"provider":"tinyfish","endpoint":"/fetch","input":{"body":{"urls":[...],"format":"markdown"}}}
```

See `SOURCES.md` for exact queries + URLs fetched.
