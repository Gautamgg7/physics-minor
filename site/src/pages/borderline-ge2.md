---
layout: ../layouts/Docs.astro
title: X · GE-2 Borderline PYQs — Fully Solved (Confirm with Lecturer)
description: All 7 borderline GE-2 questions with full numeric solutions. Outside PHYS7021 text — confirm with lecturer.
---

These 7 questions (B1–B7) appeared in old GE-2 papers (2018, 2019, 2022, 2023) but are **not verbatim** in the PHYS7021 syllabus text. Your lecturer may or may not ask them. Revise them only after the core magnetostatics and EMI pages are strong. Every solution below is fully worked in SI units.

<div class="callout"><b>Outside PHYS7021.</b> These questions belong to old GE-2 papers. Confirm with your lecturer whether they will be set on the PHYS7021 exam before prioritising them.</div>

**Constants:** $e = 1.6\times 10^{-19}$ C, $\mu_0 = 4\pi\times 10^{-7}$ H/m, $\varepsilon_0 = 8.85\times 10^{-12}$ F/m.

---

## Solved borderline PYQs

<div class="pyq">

<span class="qno">B1</span><span class="yr">2018</span>
<p class="qtext">Dipole torque numeric: length 3 cm, charges $5\,\mu$C, $E = 2\times 10^4$ N/C → max and min torque.</p>

<span class="lbl">Recall</span>
<div class="recall">Dipole moment $p = q\,d$ (C·m). Torque $\vec{\tau} = \vec{p}\times\vec{E}$, magnitude $|\tau| = pE\sin\theta$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Dipole moment: $q = 5\times 10^{-6}$ C, $d = 0.03$ m, so $p = 5\times 10^{-6}\times 0.03 = 1.5\times 10^{-7}$ C·m.</li>
<li>Maximum torque at $\theta = 90°$, $\sin\theta = 1$: $\tau_{max} = pE = 1.5\times 10^{-7}\times 2\times 10^4 = 3.0\times 10^{-3}$ N·m.</li>
<li>Minimum torque at $\theta = 0°$, $\sin 0 = 0$: $\tau_{min} = 0$.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\,\tau_{max} = 3.0\times 10^{-3}\,\text{N·m}\,}$ (broadside-on), $\boxed{\,\tau_{min} = 0\,}$ (aligned).</div>

<span class="lbl">Exam tip</span>
<div class="tip">State both angles: max at $90°$, min at $0°$. Half the marks are for the angle.</div>

<div class="fig"><img src="/images/dipole-torque.svg" alt="Dipole p at angle to E with torque p cross E"/><div class="cap">Fig B1. Dipole $\vec{p}$ in field $\vec{E}$; torque $\vec{\tau} = \vec{p}\times\vec{E}$ twists it toward alignment.</div></div>

</div>

<div class="pyq">

<span class="qno">B2</span><span class="yr">2023</span>
<p class="qtext">Explain what happens when an electric dipole is placed in a uniform electric field.</p>

<span class="lbl">Recall</span>
<div class="recall">A uniform $\vec{E}$ exerts equal and opposite forces on $+q$ and $-q$. The two forces cancel as a translation; their lines of action differ, so a torque remains.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Net force: $\vec{F} = q\vec{E} + (-q\vec{E}) = \vec{0}$. The centre of the dipole does not translate in a uniform field.</li>
<li>Net torque: $\vec{\tau} = \vec{p}\times\vec{E}$, with $|\tau| = pE\sin\theta$. It rotates the dipole toward $\theta = 0$ (alignment with the field).</li>
<li>At $\theta = 0$ the torque is zero (stable equilibrium); at $\theta = 180°$ it is zero but unstable.</li>
<li>A small disturbance from $\theta = 0$ gives torsional SHM (like a pendulum).</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">In a uniform field, an electric dipole has zero translation but a torque $\boxed{\,\vec{\tau} = \vec{p}\times\vec{E}\,}$ that aligns it with the field; stable equilibrium at $\theta = 0$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">One-line summary: "uniform → no translation, only rotation."</div>

</div>

<div class="pyq">

<span class="qno">B3</span><span class="yr">2023</span>
<p class="qtext">Dipole ($+1\,\mu$C, $-1\,\mu$C, 2 cm) in field $2.5\times 10^4$ N/C → torque to rotate it by 30°.</p>

<span class="lbl">Recall</span>
<div class="recall">$|\tau| = pE\sin\theta$ with $\theta$ the angle between $\vec{p}$ and $\vec{E}$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Dipole moment: $p = 1\times 10^{-6}\times 0.02 = 2.0\times 10^{-8}$ C·m.</li>
<li>Torque at 30°: $\tau = 2.0\times 10^{-8}\times 2.5\times 10^4\times \sin 30°$.</li>
<li>Compute: $\sin 30° = 0.5$, so $\tau = 2.0\times 10^{-8}\times 2.5\times 10^4\times 0.5 = 2.5\times 10^{-4}$ N·m.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\,\tau = 2.5\times 10^{-4}\,\text{N·m}\,}$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Write $\sin 30° = 0.5$ before multiplying — keeps the calculation transparent.</div>

</div>

<div class="pyq">

<span class="qno">B4</span><span class="yr">2019</span>
<p class="qtext">Lorentz force numeric: $q = 1.6\times 10^{-19}$ C, $\vec{v} = 3\hat{i}+2\hat{j}$ m/s, $\vec{E} = 6\hat{i}+6\hat{j}+3\hat{k}$ V/m, $\vec{B} = \hat{j}+2\hat{k}$ T.</p>

<span class="lbl">Recall</span>
<div class="recall">Lorentz force: $\vec{F} = q(\vec{E} + \vec{v}\times\vec{B})$. Expand the cross product as a $3\times 3$ determinant; remember the minus sign on the $\hat{j}$ component.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Cross product $\vec{v}\times\vec{B}$: write $\vec{v}=(3,2,0)$ and $\vec{B}=(0,1,2)$. Determinant gives $\hat{i}(2\cdot2-0\cdot1) - \hat{j}(3\cdot2-0\cdot0) + \hat{k}(3\cdot1-2\cdot0) = (4,-6,3)$.</li>
<li>So $\vec{v}\times\vec{B} = 4\hat{i} - 6\hat{j} + 3\hat{k}$ (units V/m — an effective electric field).</li>
<li>Add $\vec{E}$: $\vec{E} + \vec{v}\times\vec{B} = (6+4)\hat{i} + (6-6)\hat{j} + (3+3)\hat{k} = 10\hat{i} + 0\hat{j} + 6\hat{k}$ V/m.</li>
<li>Multiply by $q$: $\vec{F} = 1.6\times 10^{-19}(10\hat{i} + 6\hat{k}) = 1.6\times 10^{-18}\hat{i} + 9.6\times 10^{-19}\hat{k}$ N.</li>
<li>Magnitude: $|\vec{F}| = \sqrt{(1.6\times 10^{-18})^2 + (9.6\times 10^{-19})^2} \approx 1.87\times 10^{-18}$ N.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\,\vec{F} = (1.6\times 10^{-18})\hat{i} + (9.6\times 10^{-19})\hat{k}\,\text{N}\,}$, magnitude $\approx 1.9\times 10^{-18}$ N.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Expand the $3\times 3$ determinant line by line — the minus sign on the $\hat{j}$ component is where marks are lost.</div>

</div>

<div class="pyq">

<span class="qno">B5</span><span class="yr">2022</span>
<p class="qtext">What is the work done by a magnetic field on a moving charge?</p>

<span class="lbl">Recall</span>
<div class="recall">The magnetic force $\vec{F}_B = q\,\vec{v}\times\vec{B}$ is always perpendicular to $\vec{v}$. A force perpendicular to velocity does no work.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Power delivered by the magnetic force: $P = \vec{F}_B\cdot\vec{v} = q(\vec{v}\times\vec{B})\cdot\vec{v} = 0$ (scalar triple product with a repeated vector is zero).</li>
<li>Integrate over time: $W = \int P\,dt = 0$.</li>
<li>Conclusion: the magnetic field changes the direction of motion but never the speed or kinetic energy.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\,W_B = 0\,}$ — a magnetic field does no work on a moving charge. It only bends the path.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Contrast with the electric force $\vec{F} = q\vec{E}$, which can do work. One line: "B bends, E speeds up."</div>

</div>

<div class="pyq">

<span class="qno">B6</span><span class="yr">2022</span>
<p class="qtext">Force between two parallel wires (10 cm long, 2 cm apart, currents 20 A and 30 A).</p>

<span class="lbl">Recall</span>
<div class="recall">Field of wire 1 at wire 2: $B = \mu_0 I_1/2\pi d$. Force on length $l$ of wire 2: $F = I_2\,l\,B$. Parallel currents attract; antiparallel currents repel.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Combined formula: $F = \mu_0 I_1 I_2\,l/(2\pi d)$ with $\mu_0/2\pi = 2\times 10^{-7}$ (in SI).</li>
<li>Convert: $l = 0.10$ m, $d = 0.02$ m.</li>
<li>Substitute: $F = 2\times 10^{-7}\times 20\times 30\times 0.10/0.02$.</li>
<li>Compute: $20\times 30 = 600$, $0.10/0.02 = 5$, so $F = 2\times 10^{-7}\times 600\times 5 = 6.0\times 10^{-4}$ N.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\,F = 6.0\times 10^{-4}\,\text{N, attractive (parallel currents)}\,}$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">State "attractive because currents are parallel; antiparallel would repel" — that line earns the direction mark.</div>

<div class="fig"><img src="/images/parallel-wires.svg" alt="Two parallel wires 2 cm apart carrying currents 20 A and 30 A in the same direction; arrows of attraction"/><div class="cap">Fig B6. Parallel currents $I_1$, $I_2$ separated by $d$ attract with $F/l = \mu_0 I_1 I_2/(2\pi d)$.</div></div>

</div>

<div class="pyq">

<span class="qno">B7</span><span class="yr">2023</span>
<p class="qtext">Parallel-plate capacitor ($A = 0.25$ m², $d = 1$ cm, 10 V battery) → force of attraction between plates.</p>

<span class="lbl">Recall</span>
<div class="recall">Each plate sits in the field of the <b>other</b> plate only, $E = \sigma/2\varepsilon_0$. For fixed voltage $V$ held by the battery, $F = \varepsilon_0 A V^2/(2 d^2)$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Field of a single sheet: $E_{one} = \sigma/(2\varepsilon_0)$. A plate does not pull on its own field, so the factor is $1/2$.</li>
<li>Fixed-voltage formula: with $V$ held constant, $F = \varepsilon_0 A V^2/(2 d^2)$.</li>
<li>Convert: $V = 10$ V, $V^2 = 100$, $d = 0.01$ m, $d^2 = 10^{-4}$ m², $A = 0.25$ m².</li>
<li>Numerator: $\varepsilon_0 A V^2 = 8.85\times 10^{-12}\times 0.25\times 100 = 2.2125\times 10^{-10}$. Denominator: $2\times 10^{-4}$.</li>
<li>Ratio: $F = 2.2125\times 10^{-10}/2\times 10^{-4} \approx 1.11\times 10^{-6}$ N.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\,F \approx 1.1\times 10^{-6}\,\text{N (attractive)}\,}$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Never use the full $E = \sigma/\varepsilon_0$ to find the force on a plate — always halve it, or use the boxed fixed-$V$ formula.</div>

</div>

<p class="ref"><b>Reference.</b> Brij Lal &amp; Subrahmanyam Ch-1, 4, 7; H.C. Verma Vol-1 Ch-29, 31, 34, 35; S.L. Arora Vol-1 Ch-1, 2, 4.</p>