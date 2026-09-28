---
layout: ../layouts/Docs.astro
title: 1D · Capacitors & Energy — C Proofs, Numericals + Solved PYQs
description: Half-CV-squared proof, parallel-plate plus slab, three numericals, spherical and cylindrical, sharing loss. Full steps.
---

<p>This page is about capacitors — how they store charge and energy. We start with the parallel-plate geometry, derive $C = \varepsilon_0 A/d$ and the energy $U = \tfrac{1}{2}CV^2$. Then we cover spherical and cylindrical capacitors, the half-in-oil numerical, and the energy loss when two charged capacitors share charge.</p>

<h2>1. Parallel-plate capacitor</h2>
<p>Two parallel plates, each of area $A$, separated by distance $d$, carry equal and opposite charges $\pm Q$. Surface density $\sigma = Q/A$. The field between the plates is uniform (we ignore edge effects):</p>

<div class="formula"><b>Formula 1.</b> Field between parallel plates $\boxed{E = \dfrac{\sigma}{\varepsilon_0} = \dfrac{Q}{\varepsilon_0 A}}$ · The voltage across the plates is $V = Ed = \dfrac{Q d}{\varepsilon_0 A}$.</div>

<p>The capacitance is defined as $C = Q/V$, so</p>

<div class="formula"><b>Formula 2.</b> Parallel-plate capacitance (air gap) $\boxed{C = \dfrac{\varepsilon_0 A}{d}}$ · Unit: farad (F).</div>

<div class="fig"><img src="/images/capacitor.svg" alt="Parallel plates with +sigma and -sigma, uniform field E = sigma/epsilon0 between them" /><div class="cap">Fig 1.1: air-filled parallel plates give $E = \sigma/\varepsilon_0$ and Eq. (2). Filling the gap with a dielectric of constant $K$ drops $E$ to $E/K$ and raises $C$ to $KC$ — Eq. (3).</div></div>

<h3>1.1 Effect of a dielectric slab</h3>
<p>Insert a dielectric slab of constant $K$ filling the gap. The field falls to $E = \sigma/(K\varepsilon_0)$, so the voltage $V = Ed$ falls by a factor $K$ at the same charge $Q$. Hence $C$ rises by a factor $K$:</p>

<div class="formula"><b>Formula 3.</b> Parallel-plate capacitance with dielectric $\boxed{C_K = \dfrac{K\varepsilon_0 A}{d} = K C}$.</div>

<div class="callout"><b>Note.</b> At fixed free charge $\sigma$ (battery disconnected), the field falls to $E_0/K$. If the battery stays connected, $V$ is fixed and the free charge rises to $\sigma = K\sigma_0$ instead — both pictures give $C_K = KC$.</div>

<h2>2. Energy stored in a capacitor</h2>
<p>To charge a capacitor, we move small amounts of charge $dq$ from one plate to the other against the voltage $v$ that builds up. At the moment when the charge on the plates is $q$, the voltage is $v = q/C$, and the work to add $dq$ is $dW = v\,dq$.</p>

<div class="formula"><b>Formula 4.</b> Energy stored in a capacitor $\boxed{U = \tfrac{1}{2}CV^2 = \dfrac{Q^2}{2C} = \tfrac{1}{2}QV}$ · Energy density in the field: $u = \tfrac{1}{2}\varepsilon_0 E^2$.</div>

<ol class="steps">
<li>At charge $q$, voltage $v = q/C$. Adding $dq$ costs work $dW = v\,dq = (q/C)\,dq$ (reason: work = voltage × charge moved).</li>
<li>Integrate from $q = 0$ to $q = Q$: $U = \dfrac{1}{C}\!\int_0^Q q\,dq = \dfrac{1}{C}\cdot\dfrac{Q^2}{2} = \dfrac{Q^2}{2C}$.</li>
<li>Use $Q = CV$: $U = \dfrac{(CV)^2}{2C} = \tfrac{1}{2}CV^2 = \tfrac{1}{2}QV$.</li>
</ol>

<p>Equivalently, picture the charging as filling a $v$–$q$ triangle: stored energy is its area, $\tfrac{1}{2}\cdot Q \cdot V$.</p>

<h2>Solved PYQs</h2>

<div class="pyq">
<span class="qno">Q1</span>
<p class="qtext">Prove that the energy stored in a capacitor of capacitance $C$ is $\tfrac{1}{2}CV^2$, where $V$ is the potential.</p>
<span class="yr">2019</span>

<span class="lbl">Recall</span>
<div class="recall">At intermediate charge $q$, voltage across the plates is $v = q/C$. The work to add $dq$ is $dW = v\,dq$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Start uncharged ($q = 0$). Move a small charge $dq$ against the voltage $v = q/C$: $dW = (q/C)\,dq$.</li>
<li>Integrate $q = 0 \to Q$: $U = \dfrac{1}{C}\!\int_0^Q q\,dq = \dfrac{Q^2}{2C}$ (reason: $\int q\,dq = q^2/2$, evaluated gives $Q^2/2$).</li>
<li>Substitute $Q = CV$: $U = \dfrac{(CV)^2}{2C} = \tfrac{1}{2}CV^2 = \tfrac{1}{2}QV$.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{U = \tfrac{1}{2}CV^2 = \dfrac{Q^2}{2C} = \tfrac{1}{2}QV}$ · Unit: F·V² = J.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Draw the $v$–$q$ triangle — stored energy is its area, $\tfrac{1}{2}\times Q \times V$. One diagram covers the whole proof.</div>
</div>

<div class="pyq">
<span class="qno">Q2</span>
<p class="qtext">Show that the capacitance of a parallel-plate capacitor is $C = \varepsilon_0 A/d$. What changes if a slab of dielectric constant $K$ is introduced?</p>
<span class="yr">2018</span>

<span class="lbl">Recall</span>
<div class="recall">$E = \sigma/\varepsilon_0$ between plates; $V = Ed$; $C = Q/V$. With a dielectric, $E$ falls to $E/K$ at fixed free charge.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Surface density $\sigma = Q/A$. Field between plates: $E = \sigma/\varepsilon_0 = Q/(\varepsilon_0 A)$ (reason: Gauss's law on a pillbox, uniform field, edges ignored).</li>
<li>Voltage across the gap: $V = Ed = Q d/(\varepsilon_0 A)$.</li>
<li>Capacitance: $C = Q/V = Q/(Q d/\varepsilon_0 A) = \varepsilon_0 A/d$ — Eq. (2).</li>
<li>With dielectric slab: $E$ drops to $E/K$ at the same $Q$, so $V$ drops to $V/K$, and $C \to K C$ — Eq. (3).</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{C_{\text{air}} = \dfrac{\varepsilon_0 A}{d}}$ and $\boxed{C_{\text{slab}} = \dfrac{K\varepsilon_0 A}{d} = K C_{\text{air}}}$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Write "same charge $Q$" in step 4 — the $K$ factor follows only at fixed $Q$, not at fixed $V$.</div>
</div>

<div class="pyq">
<span class="qno">Q3</span>
<p class="qtext">Find the energy stored in a capacitor of capacitance 2 pF with potential 1 kV.</p>
<span class="yr">2018</span>

<span class="lbl">Recall</span>
<div class="recall">Eq. (4): $U = \tfrac{1}{2}CV^2$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Convert to SI: $C = 2$ pF $= 2\times 10^{-12}$ F and $V = 1$ kV $= 10^3$ V.</li>
<li>Write the formula: $U = \tfrac{1}{2}CV^2$.</li>
<li>Substitute: $U = 0.5\times 2\times 10^{-12}\times (10^3)^2 = 10^{-12}\times 10^6 = 10^{-6}$ J.</li>
<li>Convert: $10^{-6}$ J $= 1\ \mu$J. The small energy is reasonable — pF is a tiny capacitance.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{U = 1\ \mu\text{J} = 10^{-6}\ \text{J}}$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Convert pF → F and kV → V first; wrong powers of 10 are the main trap.</div>
</div>

<div class="pyq">
<span class="qno">Q4</span>
<p class="qtext">An air-filled parallel-plate capacitor has capacitance $C$. What will it be if immersed half in oil of dielectric constant 1.6?</p>
<span class="yr">2019</span>

<span class="lbl">Recall</span>
<div class="recall">Side-by-side regions (same voltage, half the area each) combine in parallel: capacitances add. Stacked layers (same charge) combine in series: $1/C$ adds.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>State the assumption: plates dipped vertically so the lower half is in oil and the upper half is in air — two regions side by side → <b>parallel</b> combination. (If oil filled the bottom half of the gap depth-wise, it would be series — but the vertical-dip reading is the standard one.)</li>
<li>Each region has area $A/2$: $C_{\text{air}} = \varepsilon_0 (A/2)/d = C/2$ and $C_{\text{oil}} = K\varepsilon_0 (A/2)/d = KC/2$.</li>
<li>Parallel sum: $C' = C/2 + KC/2 = C(1+K)/2 = C(1+1.6)/2 = C(2.6)/2 = 1.3\,C$.</li>
<li>Limit check: $K = 1$ (pure air) gives $C' = C$. ✓</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{C' = 1.3\,C}$ (vertical dip → parallel assumption).</div>

<span class="lbl">Exam tip</span>
<div class="tip">Write the assumption line first — the parallel-vs-series choice is the main marking step.</div>
</div>

<div class="pyq">
<span class="qno">Q5</span>
<p class="qtext">Capacitance of a spherical capacitor: two concentric metallic spheres, outer earthed. (2018: diameters 20 cm and 30 cm.)</p>
<span class="rep">×2</span><span class="yr">2018</span><span class="yr">2023</span>

<span class="lbl">Recall</span>
<div class="recall">Field between spheres $E = Q/4\pi\varepsilon_0 r^2$; the voltage is $V = \int_a^b E\,dr$.</div>

<div class="fig"><img src="/images/spherical-capacitor.svg" alt="Two concentric spheres of radii a and b, inner +Q, outer earthed, radial E between them" /><div class="cap">Fig 1.2: inner sphere of radius $a$ holds $+Q$, outer sphere of radius $b$ is earthed. Between them $E = Q/4\pi\varepsilon_0 r^2$; integrating from $a$ to $b$ gives $C = 4\pi\varepsilon_0 ab/(b-a)$.</div></div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Let inner radius be $a$, outer radius be $b$. Charge $+Q$ sits on the inner sphere; $-Q$ is induced on the inside of the outer sphere (reason: the outer sphere is earthed, so its outer surface carries no net charge).</li>
<li>Potential difference: $V = \int_a^b E\,dr = \dfrac{Q}{4\pi\varepsilon_0}\!\int_a^b\!\dfrac{dr}{r^2} = \dfrac{Q}{4\pi\varepsilon_0}\!\left(\dfrac{1}{a} - \dfrac{1}{b}\right) = \dfrac{Q(b-a)}{4\pi\varepsilon_0 ab}$.</li>
<li>Capacitance: $C = Q/V = \dfrac{4\pi\varepsilon_0 ab}{b-a}$. Limit: $b \to \infty$ gives $4\pi\varepsilon_0 a$ (isolated sphere). ✓</li>
<li>2018 numbers: diameters 20 cm and 30 cm → radii $a = 0.10$ m, $b = 0.15$ m. $b - a = 0.05$ m. Substitute: $C = 4\pi\times 8.85\times 10^{-12}\times (0.10\times 0.15)/0.05 = 33.3$ pF.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{C = \dfrac{4\pi\varepsilon_0 ab}{b-a}}$ · With 2018 numbers, $C \approx \boxed{33.3\ \text{pF}}$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Convert diameters to radii first — using diameters directly doubles the error.</div>
</div>

<div class="pyq">
<span class="qno">Q6</span>
<p class="qtext">Find the capacitance per unit length of a cylindrical capacitor, the outer cylinder being earthed.</p>
<span class="yr">2019</span>

<span class="lbl">Recall</span>
<div class="recall">Field of a long line charge $\lambda$ per unit length is $E = \lambda/2\pi\varepsilon_0 r$. The voltage between two coaxial cylinders is $V = \int_a^b E\,dr$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Inner radius $a$, outer radius $b$, outer cylinder earthed. A coaxial Gaussian cylinder gives $E = \lambda/2\pi\varepsilon_0 r$ between the conductors (reason: cylindrical symmetry, flux only through the curved face).</li>
<li>Potential difference: $V = \int_a^b E\,dr = \dfrac{\lambda}{2\pi\varepsilon_0}\!\int_a^b\!\dfrac{dr}{r} = \dfrac{\lambda}{2\pi\varepsilon_0}\ln(b/a)$ (reason: $\int dr/r = \ln r$, evaluated gives $\ln b - \ln a = \ln(b/a)$).</li>
<li>Charge on length $l$ is $\lambda l$. Total capacitance: $C = \dfrac{\lambda l}{V} = \dfrac{2\pi\varepsilon_0 l}{\ln(b/a)}$.</li>
<li>Per unit length: $C/l = 2\pi\varepsilon_0/\ln(b/a)$. Unit: F/m. Limit: thin gap ($b \approx a$) gives a large $C$, as expected.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\dfrac{C}{l} = \dfrac{2\pi\varepsilon_0}{\ln(b/a)}}$ · Unit: F/m.</div>

<span class="lbl">Exam tip</span>
<div class="tip">The logarithm comes only from $\int dr/r$ — write that line explicitly to earn the integration mark.</div>
</div>

<div class="pyq">
<span class="qno">Q7</span>
<p class="qtext">Two capacitors $C_1, C_2$ charged to potentials $V_1, V_2$ are connected together. Calculate the loss of energy on sharing of charges.</p>
<span class="yr">2022</span>

<span class="lbl">Recall</span>
<div class="recall">Charge is conserved when the two capacitors are joined (same polarity). Energy is not — the difference is radiated as a spark or dissipated as heat in the wires.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Initial energy: $U_i = \tfrac{1}{2}C_1 V_1^2 + \tfrac{1}{2}C_2 V_2^2$.</li>
<li>After connection, total charge $Q = C_1 V_1 + C_2 V_2$ spreads over $C_1 + C_2$ (reason: charge conservation, same polarity). Common voltage: $V = (C_1 V_1 + C_2 V_2)/(C_1 + C_2)$.</li>
<li>Final energy: $U_f = \tfrac{1}{2}(C_1 + C_2)V^2 = \tfrac{1}{2}\dfrac{(C_1 V_1 + C_2 V_2)^2}{C_1 + C_2}$.</li>
<li>Difference: $\Delta U = U_i - U_f = \tfrac{1}{2}C_1 V_1^2 + \tfrac{1}{2}C_2 V_2^2 - \tfrac{1}{2}\dfrac{(C_1 V_1 + C_2 V_2)^2}{C_1 + C_2}$. Expand and simplify: $\Delta U = \dfrac{C_1 C_2\,(V_1 - V_2)^2}{2(C_1 + C_2)}$.</li>
<li>Limit check: $V_1 = V_2 \Rightarrow \Delta U = 0$. ✓ The loss is non-negative and zero only when the voltages already match.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\text{Loss} = \dfrac{C_1 C_2\,(V_1 - V_2)^2}{2(C_1 + C_2)}}$ · Unit: J · The energy leaves as heat or a spark.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Write the limit check "$V_1 = V_2 \Rightarrow$ loss = 0" — it confirms the algebra and earns an extra mark.</div>
</div>

<p class="ref"><b>Reference.</b> Brij Lal &amp; Subrahmanyam, Electricity &amp; Magnetism Ch-4 (capacitance, energy); S.L. Arora Vol-1 Ch-2.</p>
