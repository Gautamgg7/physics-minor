---
name: physics-image-finder
description: Best skill to find or make the right image for physics content. Use when notes, derivation, or numerical needs a diagram — free-body, circuit, ray, field lines, setup, graph. Finds best-fit open-licensed image, or builds TikZ/matplotlib diagram, and verifies 100-percent correctness of labels and physics.
license: MIT
---

# Physics Image Finder — Best Diagram Skill

Source (found via TinyFish `/search` + `/fetch`):
- `wanshuiyin/Auto-claude-code-research-in-sleep — paper-illustration` (15.7k stars, 736 lines) — Claude-supervised iterative refinement, Gemini image gen, CVPR/NeurIPS style check
- `Scientific Schematics` (mcpmarket) — publication-quality schematics + neural-net architectures with AI quality review
- `generate-image` (awesomeskill.ai) — FLUX/Gemini general image gen
- `claude-scientific-skills` collection (atcyrus)

## When to use

- physics-note-maker emits `physics-image-finder: <need>`, or user says "diagram for", "figure for", "image of <physics topic>", "draw circuit / FBD / ray diagram".

## Workflow (find-first, then make, then verify)

1. Understand need: topic + math context (e.g. "Fraunhofer single-slit — intensity vs theta with minima at a sinθ=mλ"). List must-show elements: axes, labels, vectors, angles, components.
2. FIND (prefer real, open-licensed):
   - Search Wikimedia Commons, PhET, HyperPhysics, OpenStax, oPhysics for exact match. Prefer SVG/PNG with CC-BY / public domain.
   - Criteria: matches equation variables (same symbols), correct directions (current, field, forces), no watermark, readable at 800px.
   - Record: `file | source URL | license | why it fits the derivation step`.
   - Save reference link in `assets/<slug>.md`, never hotlink without license check.
3. MAKE (if no exact fit):
   - First choice for physics correctness: TikZ or matplotlib (vector, label-exact), not AI-painted art. Use AI image gen only for illustrative 3D/setup renders, then overlay correct labels manually.
   - Style: clean, publication-ready, large fonts, SI symbols italic (`V`, `I`, `B`), vectors with arrows, angles marked.
4. VERIFY (required for 100%):
   - Checklist: variables match notes equations? Arrows/directions obey physics (e.g. Lenz, right-hand rule)? Units on axes? No mirrored/extra limbs from AI gen?
   - Claude-as-reviewer pass (from paper-illustration): list 3 possible errors, fix, re-check.
   - If cannot verify (e.g. low-res source), label `UNVERIFIED — do not use in exam notes` and propose TikZ redraw.

## Output

```markdown
![<exact alt: what it shows + variables>](assets/<file> or <source URL>)
*Fig: <one-line link to equation>. Source: <url + license>. Verified: labels/directions/units ✓*
```

Never deliver a diagram whose labels contradict the accompanying mathematical explanation.
