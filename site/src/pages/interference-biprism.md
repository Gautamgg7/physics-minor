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

## Where the virtual-source separation comes from

Each half of the biprism is a thin prism of small refracting angle $A$ and index $n$. A ray through it is deviated by $\delta = (n-1)A$ toward the base [thin-prism formula]. The upper half bends the beam down by $\delta$, the lower half bends it up by $\delta$. If the slit is $a$ in front of the biprism, the two virtual images are pushed apart by $a\delta$ on each side, so

<div class="formula"><b>Formula 2.</b> Virtual-source separation from prism data — $d = 2a(n-1)A$.</div>

Here $a$ = slit-to-biprism distance, $n$ = prism index, $A$ = prism angle (radians). In the laboratory $d$ is measured directly by the displacement method ($d = \sqrt{d_1d_2}$); Formula 2 shows where it comes from.

## Solved PYQs

<div class="pyq">
<span class="qno">Q1</span><p class="qtext">With the help of Fresnel's bi-prism explain how an interference pattern is formed. How is the wavelength of light measured using a biprism?</p>
<span class="yr">2022</span><span class="yr">2023</span><span class="yr">2024</span><span class="rep">×3</span>

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

<div class="pyq">
<span class="qno">Q3</span><p class="qtext">What is the purpose of using biprism in interference experiment?</p>
<span class="yr">2019</span><span class="yr">2024</span><span class="rep">×2</span>

<span class="lbl">Recall</span>
<div class="recall">Steady fringes need two coherent sources; two separate lamps are incoherent (Q2 of YDSE page).</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>State the problem: two independent sources cannot give steady fringes because their phase difference jumps randomly $\sim 10^8$ times per second.</li>
<li>Give the biprism's job: it takes ONE illuminated slit and splits its wavefront into two beams that appear to come from two virtual sources $S_1$, $S_2$.</li>
<li>Explain coherence: both virtual sources are images of the same parent slit, so every random phase jump of the parent appears identically in both — $\delta$ stays fixed.</li>
<li>Name the method: this is interference by division of wavefront (contrast with division of amplitude in thin films).</li>
<li>Add the practical point: the virtual-source separation $d$ is small and measurable ($d = \sqrt{d_1d_2}$), and the overlap region is wide enough for many fringes — so $\lambda$ can be found from $\lambda = \beta d/D$.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\text{The biprism creates two virtual coherent sources from one slit (division of wavefront), so steady fringes form and }\lambda = \beta d/D\text{ can be measured.}}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">One line earns the first mark: "two separate sources are incoherent, so one source must be split in two."</div>
</div>

<div class="pyq">
<span class="qno">Q4</span><p class="qtext">In Fresnel's biprism experiment, the fringe width is found to be $0.4$ mm. If the distance of the biprism from the source is $20$ cm and that of the screen is $80$ cm, find the distance between the virtual images. Given wavelength of light used is $5890$ Å.</p>
<span class="yr">2019</span>

<span class="lbl">Recall</span>
<div class="recall">$\beta = \lambda D/d$ rearranged: $d = \lambda D/\beta$. $D$ = source-to-screen total.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Given: $\beta = 0.4$ mm $= 4.0\times 10^{-4}$ m; source→biprism $= 20$ cm; biprism→screen $= 80$ cm; $\lambda = 5890$ Å $= 5.89\times 10^{-7}$ m.</li>
<li>Total distance: $D = 20 + 80 = 100$ cm $= 1.0$ m.</li>
<li>Rearrange: $d = \lambda D/\beta$.</li>
<li>Substitute: $d = (5.89\times 10^{-7}\times 1.0)/(4.0\times 10^{-4}) = 5.89\times 10^{-7}/4.0\times 10^{-4}$.</li>
<li>Arithmetic: $5.89/4.0 = 1.4725$; $10^{-7}/10^{-4} = 10^{-3}$; so $d = 1.4725\times 10^{-3}$ m $\approx 1.47$ mm.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{d \approx 1.47\ \text{mm}}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">This inverts Q2 (there $\beta$ was asked, here $d$). Same formula, just rearranged — write the rearrangement explicitly.</div>
</div>

<div class="pyq">
<span class="qno">Q5</span><p class="qtext">In Fresnel's biprism experiment, the fringe width was found to be $0.6$ mm. If the distance of the source from the biprism is $20$ cm and that of the screen from the biprism is $80$ cm, find the distance between the virtual sources. Given wavelength of light used is $5890$ Å.</p>
<span class="yr">2022</span><span class="yr">2023</span><span class="rep">×2</span>

<span class="lbl">Recall</span>
<div class="recall">Same as Q4: $d = \lambda D/\beta$ with $D = 20 + 80 = 100$ cm.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Given: $\beta = 0.6$ mm $= 6.0\times 10^{-4}$ m; $D = 20 + 80 = 100$ cm $= 1.0$ m; $\lambda = 5.89\times 10^{-7}$ m.</li>
<li>Formula: $d = \lambda D/\beta$.</li>
<li>Substitute: $d = (5.89\times 10^{-7}\times 1.0)/(6.0\times 10^{-4})$.</li>
<li>Arithmetic: $5.89/6.0 = 0.9817$; $10^{-7}/10^{-4} = 10^{-3}$; so $d = 0.9817\times 10^{-3}$ m $\approx 0.98$ mm.</li>
<li>Sense: wider fringes ($0.6$ vs $0.4$ mm) mean closer virtual sources ($0.98$ vs $1.47$ mm) — inverse relation checks out.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{d \approx 0.98\ \text{mm}}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">Repeat (×2). Compare with Q4: $\beta$ went up by $1.5\times$, so $d$ went down by $1.5\times$ — use this to check your arithmetic.</div>
</div>

<div class="pyq">
<span class="qno">Q6</span><p class="qtext">In Fresnel's biprism experiment, the fringe width was found to be $0.8$ mm. If the distance of the source from the biprism is $30$ cm and that of the screen from the biprism is $100$ cm, find the distance between the virtual sources. Given wavelength of light used is $5890$ Å.</p>
<span class="yr">2024</span>

<span class="lbl">Recall</span>
<div class="recall">$d = \lambda D/\beta$. Here $D = 30 + 100 = 130$ cm — read both distances carefully.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Given: $\beta = 0.8$ mm $= 8.0\times 10^{-4}$ m; source→biprism $= 30$ cm; biprism→screen $= 100$ cm; $\lambda = 5.89\times 10^{-7}$ m.</li>
<li>Total: $D = 30 + 100 = 130$ cm $= 1.3$ m.</li>
<li>Formula: $d = \lambda D/\beta = (5.89\times 10^{-7}\times 1.3)/(8.0\times 10^{-4})$.</li>
<li>Arithmetic: numerator $= 7.657\times 10^{-7}$; $7.657/8.0 = 0.957$; so $d = 0.957\times 10^{-3}$ m $\approx 0.96$ mm.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{d \approx 0.96\ \text{mm}}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">The 2024 paper changed both distances ($30 + 100$). Circle the two numbers in the question before adding them.</div>
</div>

<p class="ref"><b>Reference.</b> Brij Lal, Subrahmanyam &amp; Avadhanulu — Optics Ch-14 (biprism, displacement method); Ajoy Ghatak — Optics Ch-13.</p>