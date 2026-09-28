---
layout: ../layouts/Docs.astro
title: 2A · Biot–Savart — Wire + Loop (Full Solutions)
description: Biot–Savart law, straight-wire derivation with 2023 numeric, loop-axis derivation. Step-by-step, SI units.
---

Biot–Savart law is the magnetic version of Coulomb law. A tiny piece of current $I\,d\vec{l}$ makes a tiny magnetic field $d\vec{B}$. We add (integrate) all such pieces to get the total field of any wire or loop.

<div class="formula"><b>Formula 1.</b> $d\vec{B} = \dfrac{\mu_0}{4\pi}\,\dfrac{I\,d\vec{l}\times\hat{r}}{r^2}$, where $d\vec{l}$ points along the current, $\hat{r}$ points from the piece to the field point, and $r$ is the distance between them.</div>

**Direction rule.** Grip the wire with the right hand, thumb along the current. The fingers curl along $\vec{B}$ (concentric circles round the wire). The cross product gives the sense without ambiguity.

**Unit check.** $[\mu_0 I\,dl/r^2] = (\text{N/A}^2)(\text{A}\cdot\text{m})/\text{m}^2 = \text{N/(A·m)} = \text{tesla (T)}$. Correct.

<div class="fig"><img src="/images/loop.svg" alt="Current loop of radius R, axial point at distance x, current I"/><div class="cap">Fig 1. Loop of radius $R$ carrying current $I$; field point on the axis at distance $x$. Diagram matches the derivation of Eq. (3) below.</div></div>

## Straight wire — field at distance r

Take an infinite straight wire along the $z$-axis. A point P sits at perpendicular distance $r$. Each current element contributes a piece of field. After integration (substitute $l = r\tan\phi$) the field forms complete loops around the wire with magnitude

<div class="formula"><b>Formula 2.</b> $B = \dfrac{\mu_0 I}{2\pi r}$ — tangent to circles around the wire.</div>

<div class="fig"><img src="/images/straight-wire.svg" alt="Straight wire with current upward, B field circles shown as into/out of page symbols"/><div class="cap">Fig 1.2: straight wire carrying current $I$ upward. By the right-hand rule, $\vec{B}$ circles the wire: into the page (⊗) on the right, out of the page (⊙) on the left, with $|B| = \mu_0 I/2\pi r$ (Eq. 2).</div></div>

## Circular loop — field on the axis

Take a loop of radius $R$ carrying current $I$. Look at a point P on the axis at distance $x$ from the centre. By symmetry the perpendicular components cancel in pairs. Only the axial component survives. Integrating round the loop gives

<div class="formula"><b>Formula 3.</b> $B(x) = \dfrac{\mu_0 I R^2}{2(R^2+x^2)^{3/2}}$, directed along the axis by the right-hand rule.</div>

At the centre ($x=0$) this reduces to $B = \mu_0 I/2R$. Far away ($x \gg R$) it falls as $1/x^3$, the dipole behaviour.

---

## Solved PYQs

<div class="pyq">

<span class="qno">Q1</span><span class="yr">2018</span><span class="yr">2019</span><span class="yr">2022</span><span class="rep">×3</span>
<p class="qtext">State Biot–Savart's law in magnetostatics.</p>

<span class="lbl">Recall</span>
<div class="recall">The vector form is $d\vec{B} = (\mu_0/4\pi)\,I\,d\vec{l}\times\hat{r}/r^2$, magnitude $dB = (\mu_0/4\pi)\,I\,dl\,\sin\theta/r^2$, direction by right-hand rule.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Write the law in vector form: $d\vec{B} = (\mu_0/4\pi)\,I\,d\vec{l}\times\hat{r}/r^2$.</li>
<li>Define every symbol: $I$ in A, $d\vec{l}$ in m along the current, $r$ in m, $\hat{r}$ from piece to field point.</li>
<li>Write the magnitude form: $dB = (\mu_0/4\pi)\,I\,dl\,\sin\theta/r^2$, where $\theta$ is the angle between $d\vec{l}$ and $\hat{r}$.</li>
<li>State the direction: $\vec{B}$ is perpendicular to the plane of $d\vec{l}$ and $\hat{r}$; right-hand rule fixes the sense.</li>
<li>Total field of a wire or loop is the integral: $\vec{B} = \int d\vec{B}$.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\,d\vec{B} = \dfrac{\mu_0}{4\pi}\,\dfrac{I\,d\vec{l}\times\hat{r}}{r^2}\,}$ — vector form, direction by right-hand rule. SI unit: tesla (T).</div>

<span class="lbl">Exam tip</span>
<div class="tip">Write the vector form first, then the $\sin\theta$ magnitude form — both versions earn marks.</div>

</div>

<div class="pyq">

<span class="qno">Q2</span><span class="yr">2019</span><span class="yr">2022</span><span class="yr">2023</span><span class="rep">×3</span>
<p class="qtext">Find the magnetic induction at distance $r$ from a long straight conductor carrying current $I$. (2023 numeric: $I = 1.5$ A, $r = 3$ cm.)</p>

<span class="lbl">Recall</span>
<div class="recall">Apply Formula 1 and integrate along the wire. The result is $B = \mu_0 I/2\pi r$, tangent to circles around the wire.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Set geometry: wire along $z$, point P at perpendicular distance $r$, a piece at angle gives $dB = (\mu_0/4\pi)\,I\,dl\,\sin\theta/r'^2$ with $r'$ the slant distance.</li>
<li>Change variable to angle $\phi$ using $l = r\tan\phi$, so $dl\,\sin\theta/r'^2 = \cos\phi\,d\phi/r$.</li>
<li>Integrate $\phi$ from $-\pi/2$ to $+\pi/2$ (infinite wire): $B = (\mu_0 I/4\pi r)\int_{-\pi/2}^{\pi/2}\cos\phi\,d\phi = (\mu_0 I/4\pi r)\times 2$.</li>
<li>Apply the 2023 numbers: $\mu_0/2\pi = 2\times 10^{-7}$ (T·m/A), $I = 1.5$ A, $r = 0.03$ m.</li>
<li>Compute: $B = 2\times 10^{-7}\times 1.5/0.03 = 3.0\times 10^{-7}/0.03 = 1.0\times 10^{-5}$ T.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">General: $\boxed{\,B = \dfrac{\mu_0 I}{2\pi r}\,}$ tangent to circles around the wire. Numeric (2023): $\boxed{\,B = 1.0\times 10^{-5}\,\text{T} = 10\,\mu\text{T}\,}$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Convert 3 cm → 0.03 m first. Forgetting this is the most common zero-mark error.</div>

</div>

<div class="pyq">

<span class="qno">Q3</span><span class="yr">2018</span><span class="yr">2023</span><span class="rep">×2</span>
<p class="qtext">Applying Biot–Savart's law, derive $\vec{B}$ at a point on the axis of a current-carrying circular loop.</p>

<span class="lbl">Recall</span>
<div class="recall">Each piece $d\vec{l}$ is perpendicular to $\hat{r}$, so $\sin\theta = 1$. Perpendicular components from opposite pieces cancel in pairs — only the axial component survives.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Geometry: loop radius $R$, current $I$, point P on the axis at distance $x$ from the centre; slant distance $\rho = \sqrt{R^2+x^2}$.</li>
<li>Field of one piece: $dB = (\mu_0/4\pi)\,I\,dl/\rho^2$ because $d\vec{l}\perp\hat{r}$.</li>
<li>Keep the axial part: $dB_x = dB\cos\alpha$ with $\cos\alpha = R/\rho = R/\sqrt{R^2+x^2}$ (perpendicular parts cancel by symmetry).</li>
<li>Integrate round the loop: $\int dl = 2\pi R$, so $B = (\mu_0/4\pi)(I/\rho^2)(R/\rho)(2\pi R) = \mu_0 I R^2/2\rho^3$.</li>
<li>Centre case $x=0$: substitute to get $B(0) = \mu_0 I/2R$.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\,B(x) = \dfrac{\mu_0 I R^2}{2(R^2+x^2)^{3/2}}\,}$ along the loop axis (sense by right-hand rule).</div>

<span class="lbl">Exam tip</span>
<div class="tip">Draw the loop with $R$, $x$, $I$ labelled as in Fig 1, then write Step 3 before integrating.</div>

</div>

<div class="pyq">

<span class="qno">Q4</span><span class="yr">2018</span>
<p class="qtext">Two parallel wires P and Q are $2r$ apart, carrying currents $i$ and $3i$ in the same direction. Find the point between the wires where the magnetic field is zero.</p>

<span class="lbl">Recall</span>
<div class="recall">Field of a long wire $B = \mu_0 I/2\pi d$. Between two same-direction currents the two fields point oppositely, so they can cancel.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Let the zero-field point be at distance $x$ from wire P (current $i$), so it is $(2r - x)$ from wire Q (current $3i$).</li>
<li>Between the wires the fields oppose (reason: right-hand rule — each wire's field circles it, so on the segment between them the two circulations run opposite).</li>
<li>Set magnitudes equal: $\dfrac{\mu_0 i}{2\pi x} = \dfrac{\mu_0 (3i)}{2\pi (2r - x)}$. Cancel $\mu_0 i/2\pi$: $\dfrac{1}{x} = \dfrac{3}{2r - x}$.</li>
<li>Cross-multiply: $2r - x = 3x$, so $4x = 2r$ and $x = r/2$.</li>
<li>The point is $r/2$ from wire P (the weaker current) and $3r/2$ from wire Q — closer to the smaller current, as expected.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\text{At } r/2 \text{ from wire P (current } i\text{), i.e. } 3r/2 \text{ from wire Q, on the line joining them}}$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Zero field needs the fields to oppose — between the wires that means same-direction currents. State this before writing equations.</div>

</div>

<p class="ref"><b>Reference.</b> Brij Lal &amp; Subrahmanyam Ch-7; H.C. Verma Vol-1 Ch-35; S.L. Arora Vol-1 Ch-4.</p>