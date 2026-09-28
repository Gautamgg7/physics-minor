---
layout: ../layouts/Docs.astro
title: 3A · Faraday Laws + Lenz (Full Solutions)
description: Faraday laws in all forms, Lenz law, non-inductive coil, self-induction, L and M definitions. Step-by-step, SI units.
---

A magnet moved near a coil lights a bulb with no battery attached. The cause is the change of magnetic flux; the effect is the induced e.m.f. Lenz law fixes the direction. This page covers every qualitative PYQ in EMI; the inductance numerics live on the companion page.

<div class="fig"><img src="/images/faraday-coil.svg" alt="Bar magnet approaching a coil; flux N B A changes; e.m.f. e induced in coil"/><div class="cap">Fig 1. Moving magnet changes flux $\Phi = NBA$ through the coil; coil e.m.f. is $e = -N\,d\Phi/dt$. Polarity follows Lenz law.</div></div>

## Laws and definitions

**Faraday law 1.** Whenever the magnetic flux through a circuit changes, an e.m.f. is induced. The e.m.f. lasts only while the flux changes.

<div class="formula"><b>Formula 1.</b> $e = -\dfrac{d\Phi}{dt}$ for one turn; $e = -N\dfrac{d\Phi}{dt}$ for $N$ turns.</div>

<div class="formula"><b>Formula 2 (integral form).</b> $\oint\vec{E}\cdot d\vec{l} = -\dfrac{d\Phi}{dt}$ — induced $\vec{E}$ integrated round the loop equals the rate of flux fall.</div>

<div class="formula"><b>Formula 3 (differential form).</b> $\nabla\times\vec{E} = -\dfrac{\partial\vec{B}}{\partial t}$ — a changing $\vec{B}$ at a point creates a curl of $\vec{E}$ there.</div>

**Lenz law.** The minus sign in Eq. (1) is Lenz law — the induced current flows so its own field opposes the change that caused it. Energy argument: if it helped the change, we would get free energy (a magnet would accelerate on its own). Since energy is conserved, it must oppose.

**Self induction.** Flux of a coil due to its own current: $\Phi = LI$. Then $e = -L\,dI/dt$. The constant $L$ is called "electric inertia" (see Q4 below).

**Mutual induction.** Flux in coil 2 due to current in coil 1: $\Phi_2 = MI_1$. Then $e_2 = -M\,dI_1/dt$.

---

## Solved PYQs

<div class="pyq">

<span class="qno">Q1</span><span class="yr">2019</span><span class="yr">2022</span><span class="rep">×2</span>
<p class="qtext">State (and explain) Faraday's laws of electromagnetic induction.</p>

<span class="lbl">Recall</span>
<div class="recall">Law 1 is the qualitative "change of flux is needed". Law 2 is the size and sign: $e = -N\,d\Phi/dt$ (Eq. 1).</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Law 1: change of flux through a coil induces an e.m.f.; no change → no e.m.f. (Reason: experiment with moving magnet and coil.)</li>
<li>Law 2: $e = -d\Phi/dt$ for one turn; $e = -N\,d\Phi/dt$ for $N$ turns. The minus sign is Lenz law (opposition).</li>
<li>Explain symbols: $\Phi = BA\cos\theta$ in weber (Wb), $t$ in seconds, $e$ in volts.</li>
<li>Faster change gives bigger e.m.f.; the e.m.f. exists only while the flux is changing.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\,e = -N\dfrac{d\Phi}{dt}\,}$ — e.m.f. in volts, flux in weber, time in seconds.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Give one example: push magnet in → deflection; hold still → zero; pull out → opposite deflection.</div>

</div>

<div class="pyq">

<span class="qno">Q2</span><span class="yr">2018</span>
<p class="qtext">Write down the integral and differential forms of Faraday's law.</p>

<span class="lbl">Recall</span>
<div class="recall">Equation (2) is the integral form; Equation (3) is the differential form. Get (3) from (2) by Stokes' theorem.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Integral form: $\oint\vec{E}\cdot d\vec{l} = -d\Phi/dt$ — induced $\vec{E}$ integrated round the loop is the e.m.f.</li>
<li>Apply Stokes: $\oint\vec{E}\cdot d\vec{l} = \int(\nabla\times\vec{E})\cdot d\vec{S}$.</li>
<li>Write flux as surface integral: $\Phi = \int\vec{B}\cdot d\vec{S}$, so $-d\Phi/dt = -\int(\partial\vec{B}/\partial t)\cdot d\vec{S}$.</li>
<li>The two surfaces are arbitrary and identical, so the integrands must match: $\nabla\times\vec{E} = -\partial\vec{B}/\partial t$.</li>
<li>This holds at every point even with no wire present — it is a statement about fields, not a circuit.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">Integral: $\boxed{\,\oint\vec{E}\cdot d\vec{l} = -\dfrac{d\Phi}{dt}\,}$. Differential: $\boxed{\,\nabla\times\vec{E} = -\dfrac{\partial\vec{B}}{\partial t}\,}$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">State that the differential form holds even with no wire present — that line earns the "field" mark.</div>

</div>

<div class="pyq">

<span class="qno">Q3</span><span class="yr">2018</span><span class="yr">2023</span><span class="rep">×2</span>
<p class="qtext">What do you mean by non-inductive coil?</p>

<span class="lbl">Recall</span>
<div class="recall">A coil wound so that its own magnetic fields cancel inside the coil — net flux and self-inductance are nearly zero.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Construction: bifilar winding — the wire is doubled back on itself; current goes out in one strand and returns in the neighbour.</li>
<li>Effect: the two strands carry equal and opposite currents, so their magnetic fields cancel inside the coil.</li>
<li>Result: net flux $\approx 0$, so $L \approx 0$ and the induced e.m.f. $e = -L\,dI/dt \approx 0$.</li>
<li>Use: resistance boxes and standard resistors, where we want pure resistance with no inductive kick when the current changes.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">A <b>non-inductive coil</b> uses a bifilar (doubled-back) winding so that opposite strands cancel each other's field, giving $\boxed{\,L \approx 0\,}$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Draw two adjacent strands with arrows in opposite directions — one sketch earns the construction mark.</div>

</div>

<div class="pyq">

<span class="qno">Q4</span><span class="yr">2019</span>
<p class="qtext">Define self induction. Why is it called electric inertia?</p>

<span class="lbl">Recall</span>
<div class="recall">$\Phi = LI$ and $e = -L\,dI/dt$. Compare with Newton's second law $F = m\,dv/dt$ and kinetic energy $K = \tfrac{1}{2}mv^2$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Definition: self induction is the induction of e.m.f. in a coil by the change of its own current: $e = -L\,dI/dt$.</li>
<li>Inertia parallel: $L$ opposes the rise or fall of current, just as mass $m$ opposes the rise or fall of velocity.</li>
<li>Examples: at switch-on $L$ holds current back; at switch-off $L$ tries to keep current going (spark across the switch).</li>
<li>Energy parallel: $U = \tfrac{1}{2}LI^2$ matches $K = \tfrac{1}{2}mv^2$ — work done against the induced e.m.f. is stored in the field.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">Self induction: e.m.f. induced by a coil's own changing current, $\boxed{\,e = -L\,dI/dt\,}$. Called <b>electric inertia</b> because $L$ resists $dI/dt$ the way $m$ resists $dv/dt$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Write the pair side by side: $e = -L\,dI/dt$ and $F = m\,dv/dt$. The symmetry is the mark.</div>

</div>

<div class="pyq">

<span class="qno">Q5</span><span class="yr">2022</span>
<p class="qtext">Define coefficients of self and mutual inductance.</p>

<span class="lbl">Recall</span>
<div class="recall">Both coefficients are flux per ampere. Unit: henry (H) = Wb/A = V·s/A.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Self inductance: $L = \Phi/I$ for a coil's own flux linked with its own current. Also $e = -L\,dI/dt$.</li>
<li>Mutual inductance: $M = \Phi_2/I_1$ — flux linked with coil 2 per ampere in coil 1. Also $e_2 = -M\,dI_1/dt$.</li>
<li>Units and dependence: $[L] = [M] = 1$ H = 1 Wb/A. $L$ depends on turns, area, length and core; $M$ depends on the same plus coupling and distance between coils.</li>
<li>Coupling factor $k = M/\sqrt{L_1 L_2}$ lies between 0 and 1 (perfect coupling $k=1$).</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\,L = \dfrac{\Phi}{I}\,,\quad M = \dfrac{\Phi_2}{I_1}\,,\quad [L] = [M] = \text{henry (H)}\,}$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Add the e.m.f. forms ($e = -L\,dI/dt$, $e_2 = -M\,dI_1/dt$) — a definition without these loses one mark.</div>

</div>

<p class="ref"><b>Reference.</b> Brij Lal &amp; Subrahmanyam Ch-10; H.C. Verma Vol-1 Ch-38; S.L. Arora Vol-1 Ch-6.</p>