---
layout: ../layouts/Docs.astro
title: 4B · EM Waves — Energy, Numerics, Verification + 4 Solved PYQs
description: Poynting vector, refractive-index numerics with full division work, EM wave properties, given E-B pair verification. Easy theory then solved questions.
---

This page covers the wave side of Maxwell's theory. It has three short theory sections, one figure, and four solved PYQs.

<h2>1. Poynting vector + energy density</h2>

An EM wave carries energy. The Poynting vector $\vec{S}$ tells how much power flows per unit area and in which direction. Like water flow: amount per second through each square metre, pointing downstream.

<div class="formula"><b>Formula 1.</b> $\vec{S} = \dfrac{1}{\mu_0}(\vec{E}\times\vec{B}) = \vec{E}\times\vec{H}$, unit W/m$^2$, points along the direction of propagation.</div>

Symbols: $\vec{E}$ electric field (V/m), $\vec{B}$ magnetic field (T), $\vec{H} = \vec{B}/\mu_0$ in vacuum (A/m), $\mu_0 = 4\pi\times 10^{-7}$ H/m.

<h3>Energy density</h3>

Energy stored per unit volume: electric part $u_E = \tfrac{1}{2}\varepsilon_0 E^2$, magnetic part $u_B = B^2/(2\mu_0)$. For a plane wave $E = cB$, the two halves are equal, total $u = \varepsilon_0 E^2 = B^2/\mu_0$. Then $S = uc$ (energy density $u$ moving at speed $c$ gives flux $uc$).

<div class="callout"><b>Note.</b> For a sine wave, the time-averaged $\langle S\rangle$ is half the peak value.</div>

<h3>Unit check</h3>

$[E\times B/\mu_0] = (\text{V/m·T})/(\text{N/A}^2) = \text{W/m}^2$, power per area. Correct.

<div class="fig"><img src="/images/emwave.svg" alt="Transverse EM wave with E along k-hat and B along i-hat, propagating along y"/><div class="cap">Fig 1. $\vec{S} = (\vec{E}\times\vec{B})/\mu_0$ points along $+y$ when $\vec{E}\parallel\hat{k}$ and $\vec{B}\parallel\hat{\imath}$ (because $\hat{k}\times\hat{\imath} = \hat{\jmath}$).</div></div>

<h2>2. Speed and wavelength in a medium</h2>

Light slows down inside glass or water. Refractive index $n$ tells by what factor.

<div class="formula"><b>Formula 2.</b> $v = c/n$, $\lambda = \lambda_0/n$, where $c = 3\times 10^8$ m/s. Frequency $f$ does not change (wave crests must match at the boundary).</div>

<h3>Worked divisions</h3>

Water $n = 1.33$: $1.33\times 2.25 = 2.9925 \approx 3.00$, so $v \approx 2.26\times 10^8$ m/s.

Glass $n = 1.658$, $\lambda_0 = 5893$ Å: $1.658\times 3554 = 5892.57 \approx 5893$, so $\lambda \approx 3554$ Å.

Glass speed: $1.658\times 1.81 = 3.00098 \approx 3.00$, so $v \approx 1.81\times 10^8$ m/s.

<h2>3. Properties of EM waves + how to verify a given field pair</h2>

Six properties: transverse, speed $c$, ratio $E/B = c$, carries energy and momentum, needs no medium, obeys reflection/refraction/interference/diffraction/polarization.

<h3>4-point verification test</h3>

For a given $\vec{E}$, $\vec{B}$ pair, check:

1. $\vec{E}\cdot\vec{B} = 0$ (perpendicular).
2. Find propagation direction from phase $(ky - \omega t)$ — wave travels along $+y$ (constant phase $y = (\omega t + \text{const})/k$ grows with $t$).
3. $E_0/B_0 = \omega/k = c$ (amplitude ratio).
4. Faraday $\nabla\times\vec{E} = -\partial\vec{B}/\partial t$ holds component-wise.

<p class="ref"><b>Reference.</b> Brij Lal & Subrahmanyam Ch-11 (Poynting, energy density); Ajoy Ghatak Ch-7 (wave properties).</p>

<hr/>

<h2>Solved PYQs</h2>

<div class="pyq">
<span class="qno">S4-Q6</span><p class="qtext">Define Poynting vector (and its unit).</p>
<span class="yr">2018</span><span class="yr">2019</span><span class="yr">2022</span><span class="rep">×3</span>
<span class="lbl">Recall</span>
<div class="recall">$\vec{S} = (\vec{E}\times\vec{B})/\mu_0 = \vec{E}\times\vec{H}$ gives energy flux of the fields. Direction = propagation direction by right-hand rule. Unit W/m$^2$.</div>
<span class="lbl">Steps</span>
<ol class="steps">
<li>Write $\vec{S} = (\vec{E}\times\vec{B})/\mu_0 = \vec{E}\times\vec{H}$ (reason: energy flux of the fields).</li>
<li>Direction = propagation direction by right-hand rule (reason: cross product gives a perpendicular vector).</li>
<li>Unit derivation: $(\text{V/m})\times\text{T}\,\div\,(\text{N/A}^2) = \text{W/m}^2$ (reason: SI base unit check).</li>
</ol>
<span class="lbl">Answer</span>
<div class="ans">The Poynting vector is the energy flux density of an EM field. $\boxed{\vec{S} = \dfrac{1}{\mu_0}(\vec{E}\times\vec{B}) = \vec{E}\times\vec{H},\quad [\vec{S}] = \text{W/m}^2}$.</div>
<span class="lbl">Exam tip</span>
<div class="tip">Asked ×3. One-line definition + formula + unit is full marks. Always add "direction = propagation direction" for safety.</div>
</div>

<div class="pyq">
<span class="qno">S4-Q7</span><p class="qtext">Refractive index &amp; velocity of light in a medium: velocity/wavelength in water ($n = 1.33$) and glass ($n = 1.658$) for $\lambda = 5893$ Å.</p>
<span class="yr">2022</span><span class="yr">2023</span><span class="yr">2024</span><span class="rep">×3</span>
<span class="lbl">Recall</span>
<div class="recall">$v = c/n$, $\lambda = \lambda_0/n$, $c = 3.00\times 10^8$ m/s, $\lambda_0 = 5893$ Å.</div>
<span class="lbl">Steps</span>
<ol class="steps">
<li>Water: $v = 3.00\times 10^8/1.33 = 2.26\times 10^8$ m/s (reason: $1.33\times 2.25 = 2.9925 \approx 3.00$).</li>
<li>Glass wavelength: $\lambda = 5893/1.658 = 3554.3$ Å (reason: $1.658\times 3554 = 5892.57 \approx 5893$).</li>
<li>Glass speed: $v = 3.00\times 10^8/1.658 = 1.81\times 10^8$ m/s (reason: $1.658\times 1.81 = 3.00098 \approx 3.00$).</li>
<li>Convert if needed: $3554$ Å $= 3.554\times 10^{-7}$ m.</li>
</ol>
<span class="lbl">Answer</span>
<div class="ans">$\boxed{v_{\text{water}} \approx 2.26\times 10^8\text{ m/s},\quad \lambda_{\text{glass}} \approx 3554\text{ Å},\quad v_{\text{glass}} \approx 1.81\times 10^8\text{ m/s}}$.</div>
<span class="lbl">Exam tip</span>
<div class="tip">Show each multiplication check ($1.33\times 2.25$, $1.658\times 3554$) — examiners give step marks for visible division work.</div>
</div>

<div class="pyq">
<span class="qno">S4-Q8</span><p class="qtext">Write down the main properties of electromagnetic waves.</p>
<span class="yr">2023</span>
<span class="lbl">Recall</span>
<div class="recall">Six properties of EM waves: transverse, $E/B = c$, $v = c/n$, energy flux $\vec{S}$, carries momentum, travels in vacuum, obeys optical phenomena.</div>
<span class="lbl">Steps</span>
<ol class="steps">
<li>Transverse: $\vec{E}\perp\vec{B}$, both perpendicular to propagation (reason: from curl equations).</li>
<li>Speed $c = 1/\sqrt{\mu_0\varepsilon_0}$ in vacuum, $v = c/n$ in a medium (reason: wave equation).</li>
<li>Amplitude ratio $E/B = c$ (reason: substitute plane wave into Maxwell equations).</li>
<li>Carries energy (Poynting vector $\vec{S}$) and momentum (radiation pressure $p = u$ on absorption) (reason: from energy density argument).</li>
<li>Needs no medium — travels through vacuum (reason: derived from Maxwell equations alone).</li>
<li>Shows reflection, refraction, interference, diffraction, polarization (reason: light is an EM wave).</li>
</ol>
<span class="lbl">Answer</span>
<div class="ans">Transverse; $\vec{E}\perp\vec{B}$; speed $c = 1/\sqrt{\mu_0\varepsilon_0}$ in vacuum, $v = c/n$ in a medium; $E/B = c$; carries energy (Poynting vector) and momentum (radiation pressure); travels in vacuum; obeys reflection, refraction, interference, diffraction and polarization. $\boxed{\text{Transverse wave},\ E/B = c,\ v = c/n,\ \text{energy flux }\vec{S},\ \text{momentum},\ \text{vacuum travel}}$.</div>
<span class="lbl">Exam tip</span>
<div class="tip">Five to six points with two formulas ($c$ and $E/B$) is a full-marks answer. One mark per correct point.</div>
</div>

<div class="pyq">
<span class="qno">S4-Q9</span><p class="qtext">Show that $\vec{E} = E_0\cos(ky-\omega t)\,\hat{k}$ and $\vec{B} = B_0\cos(ky-\omega t)\,\hat{\imath}$ represent an electromagnetic field.</p>
<span class="yr">2023</span>
<span class="lbl">Recall</span>
<div class="recall">Use the 4-point test: perpendicular, propagation direction, amplitude ratio $E_0/B_0 = \omega/k = c$, and check Faraday's law component-wise.</div>
<span class="lbl">Steps</span>
<ol class="steps">
<li>$\vec{E}\cdot\vec{B} = E_0B_0\cos^2(ky-\omega t)(\hat{k}\cdot\hat{\imath}) = 0$ (reason: $\hat{k}\cdot\hat{\imath} = 0$, fields perpendicular).</li>
<li>Phase $(ky-\omega t)$: constant phase gives $y = (\omega t + \text{const})/k$, which grows with $t$, so propagation is $+y$ (reason: phase-front moves to larger $y$); also $\vec{S} \propto \hat{k}\times\hat{\imath} = \hat{\jmath}$ confirms $+y$.</li>
<li>Require $E_0/B_0 = \omega/k = c$ (reason: amplitude ratio for a vacuum wave).</li>
<li>Faraday check: $\nabla\times\vec{E} = -E_0k\sin(ky-\omega t)\,\hat{\imath}$ (reason: only $E_z$ varies, only with $y$), and $-\partial\vec{B}/\partial t = -B_0\omega\sin(ky-\omega t)\,\hat{\imath}$; equality needs $E_0k = B_0\omega$, i.e. $E_0/B_0 = \omega/k$. Same check works for Ampere–Maxwell.</li>
</ol>
<span class="lbl">Answer</span>
<div class="ans">All four tests pass. The given pair is a valid $y$-propagating plane EM wave with $\vec{E}\perp\vec{B}$ and amplitude ratio $E_0/B_0 = \omega/k = c$. $\boxed{\text{Valid plane wave with }\vec{E}\perp\vec{B},\ E_0/B_0 = \omega/k = c,\ \text{propagation }+\hat{\jmath}}$.</div>
<span class="lbl">Exam tip</span>
<div class="tip">Do all four checks in order. Most students skip the curl check (step 4) and lose a mark.</div>
</div>

<p class="ref"><b>Reference.</b> Brij Lal & Subrahmanyam Ch-11 (Poynting, energy density); Ajoy Ghatak Ch-7 (wave properties).</p>
