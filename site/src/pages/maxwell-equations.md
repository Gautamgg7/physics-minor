---
layout: ../layouts/Docs.astro
title: 4A · Maxwell Equations + Wave Equation — Theory + 5 Solved PYQs
description: Conduction vs displacement current, Ampere law correction, all four Maxwell equations, EM wave equation with c formula. Easy theory then solved questions.
---

This page covers the equations side of Maxwell's theory. It has four short theory sections, one figure, and five solved PYQs.

<h2>1. Conduction current vs displacement current</h2>

In a wire charges move. That is conduction current. In the gap of a charging capacitor no charges move, but the electric field between the plates changes with time. Maxwell said this changing field acts like a current. That is displacement current.

<div class="formula"><b>Formula 1.</b> Conduction current density $\vec{J}_c = \sigma\vec{E}$ (unit A/m$^2$). Displacement current density $\vec{J}_d = \varepsilon_0\,\partial\vec{E}/\partial t$ (unit A/m$^2$). Total current density $\vec{J} = \vec{J}_c + \vec{J}_d$.</div>

<h3>Capacitor-gap argument</h3>

Take a capacitor charging with current $I_c$. Draw an Amperian loop around the wire. Surface 1 cuts the wire: current through it is $I_c$. Surface 2 passes through the gap between the plates: conduction current through it is zero, but the electric flux $\Phi_E = EA$ grows with time. So $I_d$ in the gap continues the conduction current in the wire.

$$I_d = \varepsilon_0\frac{d\Phi_E}{dt} = \frac{dQ}{dt} = I_c$$

<h3>Unit check</h3>

$[\varepsilon_0\,\partial E/\partial t] = (\text{C}^2/\text{N·m}^2)(\text{N/C·s}) = \text{C/s·m}^2 = \text{A/m}^2$, same as $J_c$. Correct.

<div class="callout"><b>Note.</b> Displacement current also produces a magnetic field. It is not imaginary.</div>

<h2>2. Ampere law for non-steady currents + Maxwell correction</h2>

Old Ampere law $\oint\vec{B}\cdot d\vec{l} = \mu_0 I$ works for steady currents only. For a charging capacitor the same loop gives two answers, so it must be corrected.

<h3>Derivation of the correction</h3>

Take divergence of $\nabla\times\vec{B} = \mu_0\vec{J}$. The left side is zero (div of a curl is zero). So $\nabla\cdot\vec{J} = 0$. But continuity says

$$\nabla\cdot\vec{J} + \frac{\partial\rho}{\partial t} = 0$$

For non-steady currents $\partial\rho/\partial t \ne 0$, so Ampere law contradicts continuity. Fix: use Gauss law $\nabla\cdot\vec{E} = \rho/\varepsilon_0$ to replace $\rho$. Then

$$\nabla\times\vec{B} = \mu_0\vec{J} + \mu_0\varepsilon_0\frac{\partial\vec{E}}{\partial t}$$

This is the Ampere–Maxwell law. The integral form is $\oint\vec{B}\cdot d\vec{l} = \mu_0(I_c + I_d)$.

<div class="formula"><b>Formula 2.</b> Ampere–Maxwell law: $\nabla\times\vec{B} = \mu_0\vec{J} + \mu_0\varepsilon_0\,\partial\vec{E}/\partial t$, integral $\oint\vec{B}\cdot d\vec{l} = \mu_0(I_c + \varepsilon_0\,d\Phi_E/dt)$.</div>

<h3>Unit check</h3>

$[\mu_0\varepsilon_0\,\partial E/\partial t] = \text{T/m}$, same as $\nabla\times\vec{B}$. Correct.

<h2>3. All four Maxwell equations</h2>

Four laws that contain all of electricity and magnetism.

| No. | Name | Differential form | Meaning |
|---|---|---|---|
| 1 | Gauss law (E) | $\nabla\cdot\vec{E} = \rho/\varepsilon_0$ | Charges are sources of $\vec{E}$ |
| 2 | Gauss law (B) | $\nabla\cdot\vec{B} = 0$ | No magnetic monopoles |
| 3 | Faraday law | $\nabla\times\vec{E} = -\partial\vec{B}/\partial t$ | Changing $\vec{B}$ makes a curly $\vec{E}$ |
| 4 | Ampere–Maxwell | $\nabla\times\vec{B} = \mu_0\vec{J} + \mu_0\varepsilon_0\,\partial\vec{E}/\partial t$ | Currents + changing $\vec{E}$ make a curly $\vec{B}$ |

In a material medium, replace $\varepsilon_0 \to \varepsilon = K\varepsilon_0$ and $\mu_0 \to \mu$, with $\vec{D} = \varepsilon\vec{E}$ and $\vec{H} = \vec{B}/\mu$: $\nabla\cdot\vec{D} = \rho_f$, $\nabla\cdot\vec{B} = 0$, $\nabla\times\vec{E} = -\partial\vec{B}/\partial t$, $\nabla\times\vec{H} = \vec{J}_f + \partial\vec{D}/\partial t$.

<h2>4. EM wave equation in free space + speed of light</h2>

In free space ($\rho = 0$, $\vec{J} = 0$) the two curl equations combine to give a wave whose speed is the speed of light.

<div class="formula"><b>Formula 3.</b> Free-space wave equation: $\nabla^2\vec{E} = \mu_0\varepsilon_0\,\partial^2\vec{E}/\partial t^2$, with speed $c = 1/\sqrt{\mu_0\varepsilon_0} \approx 3\times 10^8$ m/s.</div>

<div class="fig"><img src="/images/emwave.svg" alt="Transverse EM wave with E along k-hat and B along i-hat, propagating along y"/><div class="cap">Fig 1. Free-space EM wave: $\vec{E}\perp\vec{B}$, both perpendicular to propagation. Speed $c = 1/\sqrt{\mu_0\varepsilon_0}$.</div></div>

<h3>Quick derivation steps</h3>

In free space Faraday and Ampere–Maxwell give

$$\nabla\times\vec{E} = -\frac{\partial\vec{B}}{\partial t}, \qquad \nabla\times\vec{B} = \mu_0\varepsilon_0\frac{\partial\vec{E}}{\partial t}$$

Take curl of Faraday (to remove $\vec{B}$): $\nabla\times(\nabla\times\vec{E}) = -\partial(\nabla\times\vec{B})/\partial t$. Left side by identity $\nabla\times(\nabla\times\vec{E}) = \nabla(\nabla\cdot\vec{E}) - \nabla^2\vec{E}$. In free space $\nabla\cdot\vec{E} = 0$, so left side $= -\nabla^2\vec{E}$. Right side using Ampere–Maxwell $= -\mu_0\varepsilon_0\,\partial^2\vec{E}/\partial t^2$. Equate:

$$\nabla^2\vec{E} = \mu_0\varepsilon_0\frac{\partial^2\vec{E}}{\partial t^2}$$

Compare with $\nabla^2 f = (1/v^2)\partial^2 f/\partial t^2$. So $1/v^2 = \mu_0\varepsilon_0$ and $c = 1/\sqrt{\mu_0\varepsilon_0}$. Putting $\mu_0 = 4\pi\times 10^{-7}$ H/m, $\varepsilon_0 = 8.85\times 10^{-12}$ F/m gives $c \approx 3.00\times 10^8$ m/s.

<hr/>

<h2>Solved PYQs</h2>

<div class="pyq">
<span class="qno">S4-Q1</span><p class="qtext">What do you mean by conduction current and displacement current?</p>
<span class="yr">2022</span>
<span class="lbl">Recall</span>
<div class="recall">Conduction current density $\vec{J}_c = \sigma\vec{E}$ comes from real charge flow. Displacement current density $\vec{J}_d = \varepsilon_0\,\partial\vec{E}/\partial t$ comes from a changing electric field and needs no charges. Both have unit A/m$^2$.</div>
<span class="lbl">Steps</span>
<ol class="steps">
<li>Define $\vec{J}_c = \sigma\vec{E}$ with $\sigma$ = conductivity (reason: charge flow per unit area).</li>
<li>Define $\vec{J}_d = \varepsilon_0\,\partial\vec{E}/\partial t$ (reason: Maxwell added this so Ampere law also works for non-steady currents).</li>
<li>Show on a charging capacitor that $I_d = \varepsilon_0\,d\Phi_E/dt = dQ/dt = I_c$ (reason: flux $\Phi_E = Q/\varepsilon_0$ grows as charge builds up, so the gap current matches the wire current).</li>
</ol>
<span class="lbl">Answer</span>
<div class="ans">Conduction current $\vec{J}_c = \sigma\vec{E}$ is the real flow of charges. Displacement current $\vec{J}_d = \varepsilon_0\,\partial\vec{E}/\partial t$ is the rate of change of electric flux and exists even where no charges move. $\boxed{I_d = \varepsilon_0\,d\Phi_E/dt = I_c\text{ in the gap}}$.</div>
<span class="lbl">Exam tip</span>
<div class="tip">Always draw the Amperian loop with two surfaces (one through the wire, one through the gap). That picture carries half the marks.</div>
</div>

<div class="pyq">
<span class="qno">S4-Q2</span><p class="qtext">Alternating emf $E = E_0\cos\omega t$ of frequency $10^{15}$ Hz applied to a conductor ($\sigma = 10^7$ mho/m). Ratio of conduction to displacement current?</p>
<span class="yr">2019</span>
<span class="lbl">Recall</span>
<div class="recall">$J_c = \sigma E_0\cos\omega t$, $J_d = \varepsilon_0\,\partial E/\partial t = -\varepsilon_0 E_0\omega\sin\omega t$. Take peak ratio $J_{c0}/J_{d0} = \sigma/(\varepsilon_0\omega)$.</div>
<span class="lbl">Steps</span>
<ol class="steps">
<li>$\omega = 2\pi f = 2\pi\times 10^{15} = 6.28\times 10^{15}$ rad/s (reason: $\omega = 2\pi f$).</li>
<li>$\varepsilon_0\omega = (8.85\times 10^{-12})(6.28\times 10^{15}) = 5.56\times 10^4$ S/m (reason: multiply).</li>
<li>$J_c/J_d = \sigma/(\varepsilon_0\omega) = 10^7/(5.56\times 10^4) = 179.9 \approx 180$ (reason: divide).</li>
</ol>
<span class="lbl">Answer</span>
<div class="ans">The conduction current amplitude is $\sigma E_0$ and the displacement current amplitude is $\varepsilon_0\omega E_0$. $\boxed{J_c/J_d \approx 180}$. Conduction dominates because $\sigma$ is large.</div>
<span class="lbl">Exam tip</span>
<div class="tip">Displacement current wins only in insulators or vacuum. At low frequency the ratio is even larger than 180.</div>
</div>

<div class="pyq">
<span class="qno">S4-Q3</span><p class="qtext">Can we apply Ampere's law for non-steady currents? What is Maxwell's correction in this context?</p>
<span class="yr">2021</span>
<span class="lbl">Recall</span>
<div class="recall">Old Ampere law $\nabla\times\vec{B} = \mu_0\vec{J}$ forces $\nabla\cdot\vec{J} = 0$. Continuity needs $\nabla\cdot\vec{J} + \partial\rho/\partial t = 0$. They clash for non-steady currents. Fix by adding $\mu_0\varepsilon_0\,\partial\vec{E}/\partial t$.</div>
<span class="lbl">Steps</span>
<ol class="steps">
<li>Show the contradiction at the capacitor gap: surface through wire gives $I_c$, surface through gap gives $0$ for the same loop (reason: conduction current is broken across the gap).</li>
<li>Add the term $\mu_0\varepsilon_0\,\partial\vec{E}/\partial t$ (reason: Gauss law lets this term carry the divergence, restoring $\nabla\cdot(\vec{J}+\varepsilon_0\,\partial\vec{E}/\partial t) = 0$).</li>
<li>Write the new integral form $\oint\vec{B}\cdot d\vec{l} = \mu_0(I_c + \varepsilon_0\,d\Phi_E/dt)$.</li>
</ol>
<span class="lbl">Answer</span>
<div class="ans">No, old Ampere law fails for non-steady currents. Maxwell added the displacement term. $\boxed{\nabla\times\vec{B} = \mu_0\vec{J} + \mu_0\varepsilon_0\,\partial\vec{E}/\partial t}$, integral $\oint\vec{B}\cdot d\vec{l} = \mu_0(I_c + I_d)$.</div>
<span class="lbl">Exam tip</span>
<div class="tip">One line "Ampere law holds only for steady currents" + the capacitor example is the full answer. Do not forget the integral form.</div>
</div>

<div class="pyq">
<span class="qno">S4-Q4</span><p class="qtext">Write down Maxwell's equations (free space / with symbols / inside material / with Maxwell's modification of Ampère's law).</p>
<span class="yr">2018</span><span class="yr">2019</span><span class="yr">2020</span><span class="yr">2022</span><span class="yr">2023</span><span class="rep">×5</span>
<span class="lbl">Recall</span>
<div class="recall">Four laws: Gauss-E, Gauss-B, Faraday, Ampere–Maxwell. Names + forms + one-line meaning.</div>
<span class="lbl">Steps</span>
<ol class="steps">
<li>Gauss-E: $\nabla\cdot\vec{E} = \rho/\varepsilon_0$ (reason: charges are sources of $\vec{E}$).</li>
<li>Gauss-B: $\nabla\cdot\vec{B} = 0$ (reason: no magnetic monopoles, field lines close).</li>
<li>Faraday: $\nabla\times\vec{E} = -\partial\vec{B}/\partial t$ (reason: changing $\vec{B}$ drives an emf).</li>
<li>Ampere–Maxwell: $\nabla\times\vec{B} = \mu_0\vec{J} + \mu_0\varepsilon_0\,\partial\vec{E}/\partial t$ (reason: currents + changing $\vec{E}$ make $\vec{B}$).</li>
<li>Inside a material: replace $\varepsilon_0 \to \varepsilon$, $\mu_0 \to \mu$, write $\vec{D} = \varepsilon\vec{E}$, $\vec{H} = \vec{B}/\mu$: $\nabla\cdot\vec{D} = \rho_f$, $\nabla\cdot\vec{B} = 0$, $\nabla\times\vec{E} = -\partial\vec{B}/\partial t$, $\nabla\times\vec{H} = \vec{J}_f + \partial\vec{D}/\partial t$.</li>
</ol>
<span class="lbl">Answer</span>
<div class="ans">Free space: $\nabla\cdot\vec{E} = \rho/\varepsilon_0$, $\nabla\cdot\vec{B} = 0$, $\nabla\times\vec{E} = -\partial\vec{B}/\partial t$, $\nabla\times\vec{B} = \mu_0\vec{J} + \mu_0\varepsilon_0\,\partial\vec{E}/\partial t$. Inside material: $\nabla\cdot\vec{D} = \rho_f$, $\nabla\cdot\vec{B} = 0$, $\nabla\times\vec{E} = -\partial\vec{B}/\partial t$, $\nabla\times\vec{H} = \vec{J}_f + \partial\vec{D}/\partial t$.</div>
<span class="lbl">Exam tip</span>
<div class="tip">Asked ×5 — memorise names, differential forms, and one-line meanings. Write the material forms only if the question says "inside material".</div>
</div>

<div class="pyq">
<span class="qno">S4-Q5</span><p class="qtext">From Maxwell's equations derive the EM wave equation in free space; express the speed in terms of $\varepsilon_0$ and $\mu_0$.</p>
<span class="yr">2018</span><span class="yr">2022</span><span class="rep">×2</span>
<span class="lbl">Recall</span>
<div class="recall">In free space $\rho = 0$, $\vec{J} = 0$. Use curl-curl identity $\nabla\times(\nabla\times\vec{E}) = \nabla(\nabla\cdot\vec{E}) - \nabla^2\vec{E}$. Compare with $\nabla^2 f = (1/v^2)\partial^2 f/\partial t^2$.</div>
<span class="lbl">Steps</span>
<ol class="steps">
<li>Write free-space equations: $\nabla\times\vec{E} = -\partial\vec{B}/\partial t$, $\nabla\times\vec{B} = \mu_0\varepsilon_0\,\partial\vec{E}/\partial t$.</li>
<li>Take curl of Faraday: $\nabla\times(\nabla\times\vec{E}) = -\partial(\nabla\times\vec{B})/\partial t$ (reason: need $\nabla\times\vec{B}$, which Ampere law gives).</li>
<li>Left side by identity $= \nabla(\nabla\cdot\vec{E}) - \nabla^2\vec{E}$; in free space $\nabla\cdot\vec{E} = 0$, so left side $= -\nabla^2\vec{E}$ (reason: Gauss law with $\rho = 0$).</li>
<li>Right side using Ampere law $= -\partial(\mu_0\varepsilon_0\,\partial\vec{E}/\partial t)/\partial t = -\mu_0\varepsilon_0\,\partial^2\vec{E}/\partial t^2$.</li>
<li>Equate and cancel minus: $\nabla^2\vec{E} = \mu_0\varepsilon_0\,\partial^2\vec{E}/\partial t^2$.</li>
<li>Compare with wave form: $1/v^2 = \mu_0\varepsilon_0$, so $c = 1/\sqrt{\mu_0\varepsilon_0}$. Putting $\mu_0 = 4\pi\times 10^{-7}$ H/m, $\varepsilon_0 = 8.85\times 10^{-12}$ F/m gives $c \approx 3.00\times 10^8$ m/s.</li>
</ol>
<span class="lbl">Answer</span>
<div class="ans">$\boxed{\nabla^2\vec{E} = \mu_0\varepsilon_0\,\partial^2\vec{E}/\partial t^2,\qquad c = \dfrac{1}{\sqrt{\mu_0\varepsilon_0}} \approx 3.00\times 10^8\text{ m/s}}$.</div>
<span class="lbl">Exam tip</span>
<div class="tip">Write the six steps in order. Examiners check the curl-curl identity line and the $\rho = 0$, $\vec{J} = 0$ condition.</div>
</div>

<p class="ref"><b>Reference.</b> Brij Lal & Subrahmanyam Ch-11 (Maxwell equations, displacement current); Ajoy Ghatak Ch-7 (wave equation).</p>
