# Sources — TinyFish via Monid (queries + fetched URLs)

API key used: from user (`monid_live_...Xn7`). Endpoints: `/search` (GET, ranked live web) + `/fetch` (POST, 1–10 URLs, markdown) via `POST https://api.monid.ai/v1/run`. Both free.

## `/search` queries run

1. `best Claude Skills research skill agent skills marketplace` — purpose: deep well-researched reports
   → ComposioHQ/awesome-claude-skills, platform.claude.com Agent Skills docs, skillsmp.com 2300+ directory, Firecrawl best list
2. `best Claude Skills web design frontend skill` — purpose: best web design skill
   → **anthropics/claude-code/.../frontend-design/SKILL.md** (official winner), UX Planet 100+ tested, Composio top-10 design
3. `Claude Skills physics note maker study notes skill` — purpose: detailed physics notes
   → Study Notes Generator, LinkedIn teaching-materials, Reddit study-skills set, abubakarsiddik31 collection
4. `Claude Skills data finder research data extraction skill` — purpose: well-researched data finder
   → **claude-office-skills/skills data-extractor/SKILL.md**, Scientific Data Extractor, UX-research skills, Top-10 Researchers
5. `Claude Skills image finder diagram physics illustration skill` — purpose: images/diagrams for physics explanations
   → **paper-illustration/SKILL.md**, Scientific Schematics, claude-scientific-skills, generate-image (FLUX/Gemini)
6. `anthropic deep-research skill Claude Code research workflow SKILL.md github` — purpose: official deep research with citations
   → **Weizhena/Deep-Research-skills** (winner, two-phase), orchestra-research AI-research-SKILLs, anthropics/skills, awesome-academic-skills
7. `claude-scientific-skills physics arxiv latex skill github` — purpose: physics academic + math
   → **K-Dense-AI/scientific-agent-skills** (163 skills), literature-review, **ndpvt-web/latex-document-skill** (27 templates/TikZ), academic-paper-skills

## `/fetch` batches run

Batch 1 (8 URLs, markdown, 217897 chars):
- https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design/skills/frontend-design/SKILL.md
- https://github.com/Weizhena/Deep-Research-skills
- https://github.com/anthropics/skills
- https://github.com/claude-office-skills/skills/blob/main/data-extractor/SKILL.md
- https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/blob/main/skills/paper-illustration/SKILL.md
- https://github.com/k-dense-ai/scientific-agent-skills
- https://github.com/ndpvt-web/latex-document-skill
- https://www.firecrawl.dev/blog/best-claude-code-skills

Batch 2 — raw (for 100% correct install):
- https://raw.githubusercontent.com/anthropics/claude-code/main/plugins/frontend-design/skills/frontend-design/SKILL.md → installed verbatim as `.claude/skills/frontend-design/SKILL.md` (8224 chars)
- https://raw.githubusercontent.com/claude-office-skills/skills/main/data-extractor/SKILL.md → adapted into `.claude/skills/data-finder/SKILL.md` (12338 chars source)
- `.../Weizhena/.../research/SKILL.md` → 404 on guessed path; used repo page + install docs instead (documented in deep-research skill)

## Winner rationale

- Research: Deep-Research-skills — only one with explicit outline→deep two-phase + human-in-loop + OpenCode support (`OPENCODE_ENABLE_EXA=1`).
- Web design: frontend-design — official Anthropic, consistently #1 across Reddit, UX Planet (100+ tested), Firecrawl, Composio, Vercel lists. Kills "AI slop" defaults.
- Notes: latex-document-skill + Study Notes Generator — only combo covering handwritten→LaTeX, TikZ, quizzes, cheat sheets needed for Sem-VII math.
- Data: data-extractor + Scientific Data Extractor — only ones with table-structure inference + validated datasets + page metadata.
- Images: paper-illustration — only one with 736-line Claude-supervised loop + style compliance + fallback to TikZ/matplotlib for correctness (AI art alone fails labels).
