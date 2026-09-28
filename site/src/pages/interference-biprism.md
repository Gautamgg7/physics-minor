---
layout: ../layouts/Docs.astro
title: 8C · Interference — Fresnel Biprism
description: Biprism working, how wavelength is measured with it, and the 2022 fringe-width numeric with full steps.
---

A biprism is two thin prisms joined base to base. One slit shines through it. It bends the light into two beams that look as if they come from two virtual slits — so they interfere. Daily example: one lamp seen twice through a glass edge.

<div class="formula"><b>Formula 1.</b> Fringe width and wavelength — $\beta = \dfrac{\lambda D}{d},\qquad \lambda = \dfrac{\beta d}{D}$</div>

Here $\beta$ = measured fringe width. $d$ = separation of the two virtual sources $S_1$ and $S_2$. $D$ = total distance from source plane to screen (slit→biprism + biprism→screen). $\lambda$ = wavelength.

<div class="fig"><img src="/images/biprism.svg" alt="Fresnel biprism with slit S forming virtual sources S1 S2 separated by d, screen at distance D" /><div class="cap">Fig: Biprism — refraction makes one real slit $S$ appear as two virtual coherent sources $S_1$, $S_2$; overlap region carries fringes $\beta = \lambda D/d$.</div></div>

## Working and how to measure $\lambda$

**Step 1 — Parts.** A narrow illuminated slit $S$, a Fresnel biprism (base-to-base prisms of very small angle, $\sim 1^\circ$), and a screen or eyepiece.

**Step 2 — Two virtual sources.** Light from $S$ passes through the upper half (bent down) and the lower half (bent up). On tracing back, the beams appear to come from two virtual images $S_1$ and $S_2$, symmetric about $S$.

**Step 3 — Why coherent.** $S_1$ and $S_2$ come from the SAME parent slit $S$, so every random phase jump of $S$ appears in both — the phase difference $\delta$ stays fixed. (Division of wavefront.)

**Step 4 — Fringes.** The two beams overlap in a central region; path difference $\Delta = dy/D$ gives YDSE-type fringes with $\beta = \lambda D/d$.

**Step 5 — Measuring $\lambda$.** (i) $\beta$: read $N$ fringes with a micrometer eyepiece, $\beta = \text{total}/N$. (ii) $D$: slit→screen distance on the bench (= slit→biprism + biprism→screen). (iii) $d$: place a convex lens between biprism and screen; two lens positions give image separations $d_1$, $d_2$; then $d = \sqrt{d_1 d_2}$ (displacement method). (iv) Compute $\lambda = \beta d/D$.

**Unit check:** $[\beta d/D] = (L \cdot L)/L = L$. Limit: $d \to 0$ gives $\beta \to \infty$ (sources merge — sensible).

**Trap:** $D$ is the FULL slit-to-screen distance, not biprism-to-screen alone.

## Solved PYQs

<div class="pyq">
<span class="qno">Q1</span><p class="qtext">With the help of Fresnel's bi-prism explain how an interference pattern is formed. How is the wavelength of light measured using a biprism?</p>
<span class="yr">2023</span>

<span class="lbl">Recall</span>
<div class="recall">Eq. (1) + Steps 1–5 of the theory card. Displacement method gives $d = \sqrt{d_1 d_2}$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Draw slit $S$ + biprism + screen, and mark the virtual images $S_1$, $S_2$ with dashed rays traced back.</li>
<li>Explain bending: upper prism bends the beam down, lower prism bends it up; the overlap zone is the interference field.</li>
<li>Coherence argument: single parent $S$ gives fixed $\delta$, so steady fringes appear with $\beta = \lambda D/d$ (division of wavefront).</li>
<li>Measurement: $\beta$ by reading $N$ fringes with a micrometer; $D$ on the bench scale; $d = \sqrt{d_1 d_2}$ by the lens displacement method.</li>
<li>Final: $\lambda = \beta d/D$ reported in nm.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">Biprism gives two virtual coherent sources. $\boxed{\lambda = \dfrac{\beta d}{D},\quad d = \sqrt{d_1 d_2}.}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">The displacement formula $d = \sqrt{d_1 d_2}$ is worth a mark by itself — never omit it.</div>
</div>

<div class="pyq">
<span class="qno">Q2</span><p class="qtext">A biprism is placed $5$ cm from a slit; the virtual images of the slit formed by the biprism are $0.05$ cm apart. The screen is placed $75$ cm from the biprism. Given $\lambda = 5.89\times 10^{-5}$ cm, find the fringe width.</p>
<span class="yr">2022</span>

<span class="lbl">Recall</span>
<div class="recall">$\beta = \lambda D/d$ with $D =$ slit→screen total distance.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Given: slit→biprism $= 5$ cm; biprism→screen $= 75$ cm; $d = 0.05$ cm; $\lambda = 5.89 \times 10^{-5}$ cm.</li>
<li>Total distance: $D = 5 + 75 = 80$ cm — $D$ is source-plane to screen-plane, i.e. slit to screen.</li>
<li>Formula: $\beta = \lambda D/d$ — same as YDSE; the biprism only changes how $S_1$ and $S_2$ are made.</li>
<li>Substitute: $\beta = (5.89 \times 10^{-5} \times 80)/0.05 = (5.89 \times 10^{-5}) \times 1600 = 9.424 \times 10^{-2}$ cm.</li>
<li>Sense: $\beta \approx 0.094$ cm $\approx 0.94$ mm — about 10 fringes per cm, easily seen in an eyepiece.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\beta \approx 9.4 \times 10^{-2}\ \text{cm} \approx 0.094\ \text{cm}}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">The paper splits $D$ into $5 + 75$ on purpose. Always add first and write "$D = 80$ cm" explicitly.</div>
</div>

<p class="ref"><b>Reference.</b> Brij Lal, Subrahmanyam &amp; Avadhanulu — Optics Ch-14 (biprism, displacement method); Ajoy Ghatak — Optics Ch-13.</p>