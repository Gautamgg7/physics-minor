---
layout: ../layouts/Docs.astro
title: GE-4 Borderline — Visibility, Resolving Power, Optical Activity
description: Borderline GE-4 questions outside the PHYS7021 text. Solve only after confirming with your lecturer. Fringe visibility, resolving power, optical activity.
---

<div class="callout"><b>Confirm with your lecturer — outside PHYS7021 text.</b> This page holds GE-4 borderline questions (B8–B10). They appeared in old GE-4 papers (2019–2024) but are <b>NOT</b> in the PHYS7021 text. Ask your lecturer whether to study them. If short on time, finish the core Interference, Diffraction and Polarization pages first.</div>

What is inside: B8 fringe visibility and numeric (×2: 2019, 2023); B9 resolving power of grating (2022) and of an optical instrument (2024); B10 optical activity (2023). Each solution below is full-length so you can answer even without the textbook chapter.

## B8. Fringe visibility

<div class="formula"><b>Formula B8.</b> Michelson fringe visibility: $V = \dfrac{I_{max}-I_{min}}{I_{max}+I_{min}} = \dfrac{2\sqrt{I_1 I_2}}{I_1+I_2}$</div>

Here $V$ = fringe visibility ($1$ = perfect dark minima, $0$ = no fringes). $I_{max} = I_1+I_2+2\sqrt{I_1I_2}$ (in-phase intensity). $I_{min} = I_1+I_2-2\sqrt{I_1I_2}$ (out-of-phase intensity). $I_{1,2} \propto (\text{amplitude})^2$.

**Meaning in words.** Visibility measures contrast. Equal beams give $V = 1$ (minima fully dark). One beam much stronger gives $V \to 0$ (washout). Daily example: TV contrast setting.

## B9. Resolving power

<div class="formula"><b>Formula B9a.</b> Grating resolving power: $R = \dfrac{\lambda}{\Delta\lambda} = Nn$</div>

<div class="formula"><b>Formula B9b.</b> Optical instrument (circular aperture $D$): $\theta_{\min} = \dfrac{1.22\lambda}{D},\qquad R = \dfrac{1}{\theta_{\min}} = \dfrac{D}{1.22\lambda}$</div>

Here $N$ = total number of illuminated grating lines; $n$ = order; $\Delta\lambda$ = smallest wavelength gap the instrument can separate; $\theta_{min}$ = smallest angular separation of two just-resolvable stars (radians).

## B10. Optical activity

Optical activity is the rotation of the plane of polarization of light by a substance (solution, crystal or vapour). Dextro (d-, right) rotates clockwise as seen toward the source (e.g. cane sugar, d-glucose). Laevo (l-, left) rotates anticlockwise (e.g. fructose). Examples: quartz crystal (along its optic axis), sugar solution, tartaric acid, turpentine.

## Solved PYQs

<div class="pyq">
<span class="qno">Q-B8</span><p class="qtext">What is meant by visibility of interference fringes? Two waves of amplitudes $2$ cm and $1$ cm interfere. Find the visibility.</p>
<span class="yr">2019</span><span class="yr">2023</span><span class="rep">×2</span>

<span class="lbl">Recall</span>
<div class="recall">Eq. B8: $V = (I_{max}-I_{min})/(I_{max}+I_{min})$. Intensity is proportional to amplitude squared.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Definition: $V = (I_{max}-I_{min})/(I_{max}+I_{min})$ — ratio of fringe depth to average brightness (Michelson visibility).</li>
<li>Intensities: $I_1 \propto 2^2 = 4$ units, $I_2 \propto 1^2 = 1$ unit.</li>
<li>Max and min: $I_{max} = (\sqrt{4}+\sqrt{1})^2 = (2+1)^2 = 9$; $I_{min} = (2-1)^2 = 1$.</li>
<li>Visibility: $V = (9-1)/(9+1) = 8/10 = 0.8$. Equivalently $2\sqrt{4\cdot1}/(4+1) = 4/5 = 0.8$.</li>
<li>Sense: $0.8$ is high contrast (minima nearly dark) — sensible since amplitudes are comparable; $0 \le V \le 1$.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{V = 0.8}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">Do NOT use $(I_1-I_2)/(I_1+I_2) = 3/5$ — that forgets the cross term. Always build $I_{max}$ and $I_{min}$ from $(\sqrt{I_1} \pm \sqrt{I_2})^2$ first. The correct Michelson value is $0.8$, not $0.6$.</div>
</div>

<div class="pyq">
<span class="qno">Q-B9a</span><p class="qtext">State the resolving power of a plane diffraction grating. Show that $R = Nn$.</p>
<span class="yr">2022</span><span class="rep">×2</span>

<span class="lbl">Recall</span>
<div class="recall">Resolving power $R = \lambda/\Delta\lambda$ = smallest wavelength gap the grating can separate; $N$ = total illuminated lines; $n$ = order.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Definition: $R = \lambda/\Delta\lambda$, where $\Delta\lambda$ is the smallest wavelength gap still seen as two lines (Rayleigh criterion: maximum of one falls on minimum of the other).</li>
<li>Result: for a grating, $R = Nn$. (Proof uses the width of a principal maximum, $\propto 1/N$, vs the angular dispersion, $\propto n$.)</li>
<li>Meaning: double the lines OR work in 2nd order → double the resolution — maxima sharpen with $N$ and spread more with $n$.</li>
<li>Example: $N = 15000$ lines in 1st order gives $R = 15000$, so at $\lambda = 600$ nm it separates $\Delta\lambda = 600/15000 = 0.04$ nm.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{R = \dfrac{\lambda}{\Delta\lambda} = Nn.}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">Write the definition line first. "Resolving" (separate close lines) and "dispersive" (spread per nm) are different — do not swap them.</div>
</div>

<div class="pyq">
<span class="qno">Q-B9b</span><p class="qtext">What do you mean by resolving power of an optical instrument?</p>
<span class="yr">2024</span><span class="rep">×2</span>

<span class="lbl">Recall</span>
<div class="recall">An instrument (telescope, microscope) makes an Airy disc, not a point; two points resolve when discs just separate (Rayleigh criterion).</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Rayleigh criterion: two point images just resolve when the central maximum of one falls on the first minimum of the other.</li>
<li>Telescope (circular aperture $D$): smallest resolvable angle $\theta_{min} = 1.22\lambda/D$ (first dark ring of the Airy pattern).</li>
<li>Resolving power is the inverse: $R = 1/\theta_{min} = D/1.22\lambda$ — larger $D$ means finer detail.</li>
<li>Microscope form (for reference): $R \propto 2\mu\sin\theta/\lambda$ — oil and a wide cone help.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\theta_{\min} = \dfrac{1.22\lambda}{D},\qquad R = \dfrac{D}{1.22\lambda}.}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">Confirm with lecturer whether they want $\theta_{min}$ or its inverse — write both and you cover either marking scheme.</div>
</div>

<div class="pyq">
<span class="qno">Q-B10</span><p class="qtext">What do you mean by optical activity?</p>
<span class="yr">2023</span>

<span class="lbl">Recall</span>
<div class="recall">Plane-polarised light = electric vector vibrating in one plane; some substances rotate that plane as light passes through.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Definition: rotation of the plane of polarisation by a substance (solution, crystal or vapour) is optical activity — seen with crossed polariser and analyser: the dark position shifts by angle $\theta$.</li>
<li>Dextro (d-, right): rotates clockwise as seen toward the source (e.g. cane sugar, d-glucose). Laevo (l-, left): rotates anticlockwise (e.g. fructose). Names from Latin dexter / laevus.</li>
<li>Examples: quartz crystal (along its optic axis), sugar solution, tartaric acid, turpentine.</li>
<li>Note: activity needs asymmetric molecules or crystals; heating or wrong solvent can reduce it.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">Optical activity = rotation of the plane of polarisation. $\boxed{\text{Dextro (right, e.g. cane sugar); Laevo (left, e.g. fructose); e.g. quartz, sugar solution.}}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">One diagram (polariser → tube of sugar solution → analyser rotated by $\theta$) plus two examples = full marks.</div>
</div>

<p class="ref"><b>Reference.</b> Brij Lal, Subrahmanyam &amp; Avadhanulu — Optics (fringe visibility; grating resolving power; optical activity — outside the PHYS7021 chapters; confirm with your lecturer). Fallback: Ajoy Ghatak — Optics.</p>