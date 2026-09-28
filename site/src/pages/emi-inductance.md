---
layout: ../layouts/Docs.astro
title: 3B · Inductance Numerics + Proofs (Full Solutions)
description: Solenoid L and energy numerics, parallel-coil proof, series-opposing numeric, U = ½Li² proof. Step-by-step, SI units.
---

This page covers every inductance numeric in the GE-2 papers (2022, 2019, 2023) plus the two proofs (parallel coils 2022, energy ×2 in 2018 and 2023). Four master formulas solve everything.

<div class="formula"><b>Formula 1.</b> Solenoid inductance: $L = \dfrac{\mu_0 N^2 A}{l}$, where $A = \pi r^2$ is the cross-section and $\mu_0 = 4\pi\times 10^{-7}$ H/m.</div>

<div class="formula"><b>Formula 2.</b> Similar-coil scaling: $L \propto N^2$ (same shape, area and length, only turns change).</div>

<div class="formula"><b>Formula 3.</b> Series combination: $L = L_1 + L_2 \pm 2M$ (upper sign <b>aiding</b>, lower sign <b>opposing</b>).</div>

<div class="formula"><b>Formula 4.</b> Magnetic energy stored in an inductor: $U = \dfrac{1}{2}LI^2$ (work done against the induced e.m.f. while building the current).</div>

<div class="fig"><img src="/images/mutual-inductance.svg" alt="Two coils with flux linkage from coil 1 to coil 2"/><div class="cap">Fig 2. Mutual inductance: current $I_1$ in coil 1 ($N_1$ turns) sends flux through coil 2 ($N_2$ turns). $M = N_2\Phi_2/I_1$ and $e_2 = -M\,dI_1/dt$.</div></div>

<div class="fig"><img src="/images/solenoid.svg" alt="Solenoid with inside field B, length l, area A, N turns"/><div class="cap">Fig 1. Solenoid: inside field $B = \mu_0 NI/l$, flux linkage $N\Phi = NBA$, hence $L = \mu_0 N^2 A/l$.</div></div>

---

## Solved PYQs

<div class="pyq">

<span class="qno">Q1</span><span class="yr">2022</span>
<p class="qtext">A coil of 800 turns has self-inductance 400 mH. What will be the self-inductance of a similar coil with 500 turns?</p>

<span class="lbl">Recall</span>
<div class="recall">Same shape and size means only $N$ changes. Then $L \propto N^2$, so $L_2/L_1 = (N_2/N_1)^2$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Write the ratio: $L_2/L_1 = (N_2/N_1)^2$ (Eq. 2 — "similar coil" means only $N$ changes).</li>
<li>Substitute $N_2/N_1 = 500/800 = 0.625$.</li>
<li>Square: $0.625^2 = 0.390625$.</li>
<li>Multiply: $L_2 = 400 \times 0.390625 = 156.25$ mH.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\,L_2 \approx 156\,\text{mH}\,}$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Write "$L \propto N^2$, not $N$" first — that single line is the mark.</div>

</div>

<div class="pyq">

<span class="qno">Q2</span><span class="yr">2019</span>
<p class="qtext">Solenoid 1 m long, 10 cm diameter, 5000 turns: (i) inductance, (ii) energy stored with 2 A current.</p>

<span class="lbl">Recall</span>
<div class="recall">$L = \mu_0 N^2 A/l$ with $A = \pi r^2$; energy $U = \tfrac{1}{2}LI^2$. Diameter 10 cm → $r = 0.05$ m.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Radius and area: $r = 0.05$ m, $A = \pi(0.05)^2 = 7.854\times 10^{-3}$ m² (diameter must be halved first).</li>
<li>Inductance: $L = (4\pi\times 10^{-7})(5000^2)(7.854\times 10^{-3})/1.0$.</li>
<li>Compute numerator: $4\pi\times 10^{-7}\times 25\times 10^6 \times 7.854\times 10^{-3} = 0.2467$ H.</li>
<li>Energy with $I = 2$ A: $U = \tfrac{1}{2}(0.2467)(2^2) = 0.5\times 0.2467 \times 4 = 0.4934$ J.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">(i) $\boxed{\,L \approx 0.247\,\text{H}\,}$. (ii) $\boxed{\,U \approx 0.49\,\text{J}\,}$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Show $A = \pi(0.05)^2$ explicitly — diameter-vs-radius is the classic trap.</div>

</div>

<div class="pyq">

<span class="qno">Q3</span><span class="yr">2023</span>
<p class="qtext">Find the self-inductance of a solenoid 40 cm long and radius 4 cm having 200 turns ($\mu_r = 1$).</p>

<span class="lbl">Recall</span>
<div class="recall">Same Eq. (1); air core ($\mu_r = 1$) so $\mu = \mu_0$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Convert: $l = 0.40$ m, $r = 0.04$ m, $N = 200$. $A = \pi(0.04)^2 = 5.0265\times 10^{-3}$ m².</li>
<li>Substitute: $L = (4\pi\times 10^{-7})(200^2)(5.0265\times 10^{-3})/0.40$.</li>
<li>Compute $200^2 = 40\,000$ and the numerator: $4\pi\times 10^{-7}\times 40\,000\times 5.0265\times 10^{-3} = 2.5266\times 10^{-4}$.</li>
<li>Divide by $0.40$: $L = 6.3166\times 10^{-4}$ H.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\,L \approx 6.3\times 10^{-4}\,\text{H} = 0.63\,\text{mH}\,}$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Write $\mu_r = 1$ explicitly so the examiner sees the air-core assumption.</div>

</div>

<div class="pyq">

<span class="qno">Q4</span><span class="yr">2022</span>
<p class="qtext">Show that the equivalent inductance of two coils $L_1$, $L_2$ in parallel is $(L_1 L_2 − M^2)/(L_1 + L_2 − 2M)$.</p>

<span class="lbl">Recall</span>
<div class="recall">Parallel means the same voltage across both coils; total current splits $i = i_1 + i_2$. Sign of $M$ follows aiding vs opposing connection.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Write voltage equations: $V = L_1\,di_1/dt \pm M\,di_2/dt$ and $V = L_2\,di_2/dt \pm M\,di_1/dt$ (each coil sees its own plus mutual e.m.f.).</li>
<li>Solve the two-equation system for the slopes $di_1/dt$, $di_2/dt$. The determinant is $L_1 L_2 - M^2$.</li>
<li>Apply Cramer's rule: $di_1/dt = V(L_2 \mp M)/(L_1 L_2 - M^2)$ and $di_2/dt = V(L_1 \mp M)/(L_1 L_2 - M^2)$.</li>
<li>Add for total: $di/dt = di_1/dt + di_2/dt = V(L_1 + L_2 \mp 2M)/(L_1 L_2 - M^2)$.</li>
<li>Define $V = L_{eq}\,di/dt$ and read off $L_{eq}$.</li>
<li>Sanity check: set $M = 0$ and recover $L_{eq} = L_1 L_2/(L_1 + L_2)$ — the resistor-parallel form.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\,L_{eq} = \dfrac{L_1 L_2 - M^2}{L_1 + L_2 \mp 2M}\,}$ — upper sign ($-2M$) is the <b>aiding</b> case; the lower sign ($+2M$) is <b>opposing</b>.</div>

<span class="lbl">Exam tip</span>
<div class="tip">End with the $M = 0$ sanity check — it proves your algebra and earns the last mark.</div>

</div>

<div class="pyq">

<span class="qno">Q5</span><span class="yr">2023</span>
<p class="qtext">Coils of 50 mH and 100 mH in series give effective inductance 75 mH. Determine the coefficient of mutual inductance.</p>

<span class="lbl">Recall</span>
<div class="recall">Series combination: $L = L_1 + L_2 \pm 2M$ — upper sign aiding, lower sign opposing.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Compare $L_1 + L_2 = 150$ mH with measured $75$ mH. The measured value is <b>less</b> than the sum, so the minus sign applies (opposing).</li>
<li>Write the equation: $75 = 150 - 2M$.</li>
<li>Solve: $2M = 150 - 75 = 75$, so $M = 37.5$ mH.</li>
<li>Sanity: $M \le \sqrt{L_1 L_2} = \sqrt{50\times 100} = \sqrt{5000} \approx 70.7$ mH, and $37.5 < 70.7$ — physically allowed.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\,M = 37.5\,\text{mH, opposing connection}\,}$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">First line must be "$75 < 150$, hence opposing" — that justifies the minus sign.</div>

</div>

<div class="pyq">

<span class="qno">Q6</span><span class="yr">2018</span><span class="yr">2023</span><span class="rep">×2</span>
<p class="qtext">Find the magnetic energy stored in an inductor of self-inductance $L$ carrying current $i$.</p>

<span class="lbl">Recall</span>
<div class="recall">Work done against the induced e.m.f. $e = -L\,di/dt$ while building the current from 0 to $i$ is stored as field energy.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Power needed to push current against $e$: $P = e_{applied}\times i = L\,i\,(di/dt)$ (the applied voltage must overcome $L\,di/dt$).</li>
<li>Small work in time $dt$: $dW = P\,dt = L\,i\,di$.</li>
<li>Integrate from $0$ to $i$: $W = \int_0^i L\,i\,di = \tfrac{1}{2}Li^2$.</li>
<li>No heat loss in an ideal coil — all the work sits in the magnetic field.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\,U = \dfrac{1}{2}Li^2\,}$, in joules.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Mention "no heat loss, ideal coil — energy stored in the field" to nail the energy-conservation line.</div>

</div>

<div class="pyq">

<span class="qno">Q7</span><span class="yr">2018</span>
<p class="qtext">Define mutual induction. Calculate the mutual inductance of two coils wound on a cylinder of length $l$, cross-section $A$, with $N_1$ and $N_2$ turns respectively.</p>

<span class="lbl">Recall</span>
<div class="recall">Mutual inductance $M = \Phi_2/I_1$ — flux linked with coil 2 per ampere in coil 1. Field inside a long solenoid $B = \mu_0 N_1 I_1/l$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Define mutual induction: a changing current $I_1$ in coil 1 induces $e_2 = -M\,dI_1/dt$ in coil 2; $M = N_2\Phi_2/I_1$ where $\Phi_2$ is the flux through one turn of coil 2.</li>
<li>Field from coil 1: treat it as a solenoid, $B_1 = \mu_0 N_1 I_1/l$, uniform over the cross-section $A$ (reason: long cylinder).</li>
<li>Flux through one turn of coil 2: $\Phi_2 = B_1 A = \mu_0 N_1 I_1 A/l$ (reason: coil 2 sits in coil 1's field).</li>
<li>Total linkage with coil 2: $N_2\Phi_2 = \mu_0 N_1 N_2 A I_1/l$.</li>
<li>Divide by $I_1$: $M = \mu_0 N_1 N_2 A/l$. Unit: henry (H). Symmetry: swapping the coils gives the same $M$.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{M = \dfrac{\mu_0 N_1 N_2 A}{l}}$ · Unit: H · Symmetric in $1 \leftrightarrow 2$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Write "$M = N_2\Phi_2/I_1$" first, then find $\Phi_2$ from coil 1's solenoid field — that order is the mark scheme.</div>

</div>

<p class="ref"><b>Reference.</b> Brij Lal &amp; Subrahmanyam Ch-10; H.C. Verma Vol-1 Ch-38; S.L. Arora Vol-1 Ch-6.</p>