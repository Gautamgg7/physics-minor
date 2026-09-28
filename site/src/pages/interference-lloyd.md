---
layout: ../layouts/Docs.astro
title: 8D · Interference — Lloyd's Mirror
description: Lloyd's mirror setup, virtual source by reflection, Stokes half-wave flip, fringe width, distinction from Fresnel biprism, and three solved fringe-width numerics.
---

A slit sits just above a flat glass mirror. Light reaches the screen two ways — straight from the slit, and bounced off the mirror. The bounced beam looks as if it comes from a mirror-image slit below the glass. The two beams interfere. Daily example: your reflection in a shop window overlapping with you.

<div class="formula"><b>Formula 1.</b> Fringe width — $\beta = \dfrac{\lambda D}{d}$ (same as YDSE; $d$ = slit to virtual-image separation, $D$ = slit-plane to screen distance)</div>

Here $S$ = real slit (height $h$ above the mirror), $S'$ = virtual image ($h$ below the mirror plane), so $d = 2h$. $D$ = distance from the source plane to the screen.

<div class="fig"><img src="/images/lloyds-mirror.svg" alt="Lloyd's mirror with real source S above glass plate, virtual image S-prime below, reflected ray with half-wave flip, screen showing overlap fringes"/><div class="cap">Fig: Lloyd's mirror — $S$ interferes with its own mirror image $S'$; the reflected beam picks up a $\lambda/2$ phase flip on reflection.</div></div>

## How it works

**Step 1 — Setup.** A narrow slit $S$ is placed a small height $h$ above a polished glass plate (the mirror), with the slit parallel to the plate surface. A screen stands vertically at distance $D$, its lower edge nearly touching the mirror.

**Step 2 — Two beams.** Beam 1 goes directly from $S$ to the screen. Beam 2 reflects off the glass and then reaches the screen. Tracing beam 2 backward, it appears to come from $S'$, the mirror image of $S$ at depth $h$ below the plate — so $d = SS' = 2h$.

**Step 3 — Coherence.** Both beams come from the same slit $S$, so the phase difference is fixed — division of wavefront, like the biprism.

**Step 4 — The Stokes flip.** Reflection at the glass (rarer→denser) flips the phase by $\pi$, i.e. adds $\lambda/2$ to the reflected beam's path. So where YDSE would give a bright centre, Lloyd's mirror gives a DARK centre — the central fringe (at the mirror plane level) is dark.

**Step 5 — Fringes.** Path difference $\Delta = dy/D$ as usual, but with the extra $\lambda/2$: bright where $\Delta = (n-\tfrac12)\lambda$, dark where $\Delta = n\lambda$. Fringe width is unchanged: $\beta = \lambda D/d$.

**Unit check:** $[\lambda D/d] = L$ ✓. Limit: $h \to 0$ ($d \to 0$) gives $\beta \to \infty$ — slit touching the mirror, no fringes, sensible.

**Trap:** only HALF the usual YDSE field is visible — the mirror blocks the lower half, so fewer fringes are seen than with a biprism.

## Lloyd's mirror vs Fresnel biprism (exam table)

| Point | Lloyd's mirror | Fresnel biprism |
|---|---|---|
| Second source | virtual image by REFLECTION ($S'$) | two virtual images by REFRACTION |
| Phase flip | yes — $\lambda/2$ on reflection, centre dark | no flip, centre bright |
| Fringes visible | half field (mirror blocks rest) | full overlap field |
| Extra use | proves the $\lambda/2$ Stokes flip directly | measures $d$ by displacement method |

## Solved PYQs

<div class="pyq">
<span class="qno">Q1</span><p class="qtext">Distinguish between Lloyd's mirror and Fresnel's biprism.</p>
<span class="yr">2022</span>

<span class="lbl">Recall</span>
<div class="recall">Mirror = reflection image + $\lambda/2$ flip + dark centre; biprism = refraction images + no flip + bright centre.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Source pair: Lloyd's uses one real slit plus its mirror image (reflection); biprism uses two virtual images by refraction through thin prisms.</li>
<li>Phase: the reflected beam in Lloyd's mirror suffers a $\pi$ ($\lambda/2$) flip at the glass — the biprism has no reflection, so no flip.</li>
<li>Centre fringe: dark for Lloyd's (flip), bright for biprism (no flip).</li>
<li>Field: Lloyd's shows fringes only above the mirror plane (half field); biprism shows the full overlap region.</li>
<li>Write the 4-row table above — the table itself is the answer.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\text{Mirror: reflection + }\lambda/2\text{ flip + dark centre + half field; biprism: refraction + no flip + bright centre + full field.}}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">The table is the answer — four rows, each row one mark. Never write it as a paragraph.</div>
</div>

<div class="pyq">
<span class="qno">Q2</span><p class="qtext">In Lloyd's mirror experiment, the real and virtual sources are $1$ mm apart and the screen is placed at a distance of $1$ m from the source. If the wavelength of light used is $5890$ Å, find the fringe width.</p>
<span class="yr">2022</span>

<span class="lbl">Recall</span>
<div class="recall">$\beta = \lambda D/d$ — identical to YDSE; the mirror only changes how $S'$ is made.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Given: $d = 1$ mm $= 1.0\times 10^{-3}$ m; $D = 1$ m; $\lambda = 5890$ Å $= 5.89\times 10^{-7}$ m.</li>
<li>Formula: $\beta = \lambda D/d$.</li>
<li>Substitute: $\beta = (5.89\times 10^{-7}\times 1)/(1.0\times 10^{-3}) = 5.89\times 10^{-4}$ m.</li>
<li>Convert: $5.89\times 10^{-4}$ m $= 0.589$ mm.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\beta = 5.89\times 10^{-4}\ \text{m} \approx 0.59\ \text{mm}}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">Lloyd's numerics use the same formula as YDSE — do not invent a new one. The flip only moves bright/dark positions, not $\beta$.</div>
</div>

<div class="pyq">
<span class="qno">Q3</span><p class="qtext">In Lloyd's mirror experiment, the real and virtual sources are $1.5$ mm apart and the screen is placed at a distance of $1.5$ m from the source. If the wavelength of light used is $5890$ Å, find the fringe width.</p>
<span class="yr">2023</span>

<span class="lbl">Recall</span>
<div class="recall">$\beta = \lambda D/d$. Note $D/d = 1.5/1.5\times 10^{-3} = 1000$ — same ratio as Q2.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Given: $d = 1.5\times 10^{-3}$ m; $D = 1.5$ m; $\lambda = 5.89\times 10^{-7}$ m.</li>
<li>Ratio: $D/d = 1.5/(1.5\times 10^{-3}) = 1000$.</li>
<li>$\beta = \lambda\times 1000 = 5.89\times 10^{-7}\times 10^3 = 5.89\times 10^{-4}$ m $= 0.589$ mm.</li>
<li>Sense: identical to Q2 because $D/d$ is identical — the paper scaled both numbers by $1.5\times$.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\beta \approx 0.59\ \text{mm}}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">Spot the scaling: both $D$ and $d$ grew by $1.5\times$, so $\beta$ is unchanged. One line of reasoning saves the arithmetic.</div>
</div>

<div class="pyq">
<span class="qno">Q4</span><p class="qtext">In Lloyd's mirror experiment, the real and virtual sources are $1.2$ mm apart and the screen is placed at a distance of $1.2$ m from the source. If the wavelength of light used is $5890$ Å, find the fringe width.</p>
<span class="yr">2024</span>

<span class="lbl">Recall</span>
<div class="recall">$\beta = \lambda D/d$; again $D/d = 1000$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Given: $d = 1.2\times 10^{-3}$ m; $D = 1.2$ m; $\lambda = 5.89\times 10^{-7}$ m.</li>
<li>$D/d = 1.2/(1.2\times 10^{-3}) = 1000$.</li>
<li>$\beta = 5.89\times 10^{-7}\times 10^3 = 5.89\times 10^{-4}$ m $\approx 0.59$ mm.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\beta \approx 0.59\ \text{mm}}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">Three years, same answer ($0.59$ mm) — the paper only rescales $D$ and $d$ together. Learn the pattern, not the numbers.</div>
</div>

<p class="ref"><b>Reference.</b> Brij Lal, Subrahmanyam &amp; Avadhanulu — Optics Ch-14 (Lloyd's mirror, Stokes flip); Ajoy Ghatak — Optics Ch-13.</p>
