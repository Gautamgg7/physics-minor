---
layout: ../layouts/Docs.astro
title: 2B · Ampère Law + Vector Potential (Full Solutions)
description: Magnetic vector potential with 2018 casework, Ampère law with proof, ∇·B meaning and proof. Step-by-step, SI units.
---

The magnetic field $\vec{B}$ can be written as the curl of a helper field $\vec{A}$, called the **magnetic vector potential**. Many different $\vec{A}$ give the same $\vec{B}$ — this freedom is called gauge freedom. Ampère law then gives a fast way to read off $\vec{B}$ whenever the geometry has symmetry (straight wire, solenoid, toroid).

<div class="formula"><b>Formula 1.</b> $\vec{B} = \nabla\times\vec{A} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ \partial_x & \partial_y & \partial_z \\ A_x & A_y & A_z \end{vmatrix}$.</div>

**Reading the determinant.** Expanding term by term gives the components:
$B_x = \partial_y A_z - \partial_z A_y$, $\;B_y = \partial_z A_x - \partial_x A_z$, $\;B_z = \partial_x A_y - \partial_y A_x$.

<div class="formula"><b>Formula 2.</b> Ampère law, integral form: $\oint\vec{B}\cdot d\vec{l} = \mu_0 I_{in}$, where $I_{in}$ is the current passing through the loop (steady current).</div>

<div class="formula"><b>Formula 3.</b> Ampère law, differential form: $\nabla\times\vec{B} = \mu_0\vec{J}$, where $\vec{J}$ is the current density (A/m²). Eq. (3) follows from Eq. (2) by Stokes' theorem.</div>

<div class="formula"><b>Formula 4.</b> $\nabla\cdot\vec{B} = 0$ — magnetic field lines close on themselves; net flux through any closed surface is zero.</div>

---

## Solved PYQs

<div class="pyq">

<span class="qno">Q1</span><span class="yr">2018</span><span class="yr">2022</span><span class="rep">×2</span>
<p class="qtext">What is magnetic vector potential? (2018 adds: given $\vec{A}$, calculate $\vec{B}$.)</p>

<span class="lbl">Recall</span>
<div class="recall">$\vec{B} = \nabla\times\vec{A}$ by definition. The unit of $\vec{A}$ is T·m (also Wb/m). Expand the determinant term by term to get the components.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Define $\vec{A}$ as the field whose curl equals $\vec{B}$; unit T·m. Many $\vec{A}$ give the same $\vec{B}$ (gauge freedom).</li>
<li>Write components: $B_x = \partial_y A_z - \partial_z A_y$, $B_y = \partial_z A_x - \partial_x A_z$, $B_z = \partial_x A_y - \partial_y A_x$.</li>
<li><b>Case 1 (2018):</b> $\vec{A} = x^2\hat{i}$ only, so $A_x = x^2$, $A_y = A_z = 0$.</li>
<li>Apply to Case 1: $B_y = \partial_z(x^2) - 0 = 0$, $B_z = 0 - \partial_y(x^2) = 0$, $B_x = 0 - 0 = 0$.</li>
<li><b>Case 2 (2018):</b> $\vec{A} = (x^2+y^2+z^2)\hat{i}$, so $A_x = x^2+y^2+z^2$, $A_y = A_z = 0$.</li>
<li>Apply to Case 2: $B_x = 0$, $B_y = \partial_z A_x = 2z$, $B_z = -\partial_y A_x = -2y$.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">Case 1 ($\vec{A} = x^2\hat{i}$): $\boxed{\,\vec{B} = \vec{0}\,}$. Case 2 ($\vec{A} = (x^2+y^2+z^2)\hat{i}$): $\boxed{\,\vec{B} = 2z\hat{j} - 2y\hat{k}\,}$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Always start with "$A_x = \ldots$, $A_y = 0$, $A_z = 0$". Examiners deduct marks for jumping straight to numbers.</div>

</div>

<div class="pyq">

<span class="qno">Q2</span><span class="yr">2018</span><span class="yr">2019</span><span class="yr">2023</span><span class="rep">×3</span>
<p class="qtext">State Ampère's circuital law; mathematical form / show $\nabla\times\vec{B} = \mu_0\vec{J}$.</p>

<span class="lbl">Recall</span>
<div class="recall">Equations (2) and (3) above. Proof uses the long-wire field $B = \mu_0 I/2\pi r$ from the Biot–Savart page.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Statement: $\oint\vec{B}\cdot d\vec{l} = \mu_0 I_{in}$ — line integral of $\vec{B}$ round any closed loop equals $\mu_0$ times the enclosed current.</li>
<li>Proof for a long wire: take an Amperian circle of radius $r$ around it. $B = \mu_0 I/2\pi r$ is tangent to the circle and constant on it.</li>
<li>Integrate: $\oint\vec{B}\cdot d\vec{l} = B(2\pi r) = \mu_0 I$. By superposition this holds for any loop shape and any set of steady currents.</li>
<li>Get the differential form: by Stokes' theorem $\oint\vec{B}\cdot d\vec{l} = \int(\nabla\times\vec{B})\cdot d\vec{S}$ and $I_{in} = \int\vec{J}\cdot d\vec{S}$.</li>
<li>Since the surface is arbitrary, the integrands must match: $\nabla\times\vec{B} = \mu_0\vec{J}$.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">Integral: $\boxed{\,\oint\vec{B}\cdot d\vec{l} = \mu_0 I_{in}\,}$. Differential: $\boxed{\,\nabla\times\vec{B} = \mu_0\vec{J}\,}$ (steady current).</div>

<span class="lbl">Exam tip</span>
<div class="tip">Draw the Amperian circle, mark $I_{in}$ with dots (out) or crosses (in), then write Step 3.</div>

</div>

<div class="pyq">

<span class="qno">Q3</span><span class="yr">2022</span>
<p class="qtext">What is the meaning of $\nabla\cdot\vec{B} = 0$? Using Biot–Savart law prove $\nabla\cdot\vec{B} = 0$.</p>

<span class="lbl">Recall</span>
<div class="recall">Divergence measures the net outflow of field lines from a point. Zero means no source or sink — magnetic field lines have no beginnings or ends.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>State the meaning in three points: (a) no magnetic monopoles — field lines never start or end; (b) lines close on themselves (circles round currents); (c) net flux through any closed surface is zero, $\oint\vec{B}\cdot d\vec{S} = 0$.</li>
<li>Biot–Savart integrand is a curl: write $d\vec{l}\times\hat{r}/r^2$ as the curl (with respect to the field point) of $d\vec{l}/r$.</li>
<li>Hence the total $\vec{B}$ equals $\nabla\times\vec{A}$ for some vector potential $\vec{A}$ (the vector potential from Q1).</li>
<li>Apply the identity: divergence of any curl is identically zero, $\nabla\cdot(\nabla\times\vec{A}) = 0$, because mixed partials cancel ($\partial_x\partial_y = \partial_y\partial_x$).</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\,\nabla\cdot\vec{B} = 0\,}$ because $\vec{B}$ is itself a curl. No monopoles, no net flux through any closed surface.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Write the meaning first (it carries half the marks), then Steps 2–4 as the proof.</div>

</div>

<p class="ref"><b>Reference.</b> Brij Lal &amp; Subrahmanyam Ch-7, 8; H.C. Verma Vol-1 Ch-35; S.L. Arora Vol-1 Ch-4.</p>