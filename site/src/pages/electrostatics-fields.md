---
layout: ../layouts/Docs.astro
title: 1B · Fields by Gauss Law — Sphere, Cylinder, Zero-Point + Solved PYQs
description: Solid sphere outside/inside with graph, U-nucleus number, charged cylinder, zero-field point. Full steps.
---

<p>This page applies Gauss's law to common charge distributions. We derive the field of a uniformly charged solid sphere (outside and inside), an infinite line charge (cylinder), and solve the zero-field-point problem for two like charges. Each application starts by naming the right Gaussian surface.</p>

<h2>1. Uniformly charged solid sphere</h2>
<p>Sphere of radius $R$ carries total charge $Q$ spread uniformly through its volume. Volume charge density $\rho = Q/(\tfrac{4}{3}\pi R^3)$. Symmetry: there is no preferred direction, so the field is purely radial and depends only on $r$.</p>

<h3>1.1 Outside the sphere ($r > R$)</h3>
<p>Take a concentric Gaussian sphere of radius $r$. It encloses the full charge $Q$. Apply Gauss's law: $E\cdot 4\pi r^2 = Q/\varepsilon_0$.</p>

<div class="formula"><b>Formula 1.</b> Field outside a uniformly charged solid sphere $\boxed{E_{\text{out}} = \dfrac{Q}{4\pi\varepsilon_0 r^2}}$ — same as a point charge $Q$ at the centre.</div>

<h3>1.2 Inside the sphere ($r < R$)</h3>
<p>The Gaussian sphere of radius $r$ encloses only the charge inside that radius. Volume scales as $r^3$, so $Q_{\text{in}} = Q\,(r/R)^3 = Q\,r^3/R^3$. Apply Gauss's law: $E\cdot 4\pi r^2 = Q\,r^3/\varepsilon_0 R^3$.</p>

<div class="formula"><b>Formula 2.</b> Field inside a uniformly charged solid sphere $\boxed{E_{\text{in}} = \dfrac{Q\,r}{4\pi\varepsilon_0 R^3}}$ — grows linearly from 0 at the centre to a maximum $E_{\max} = Q/4\pi\varepsilon_0 R^2$ at $r = R$.</div>

<div class="fig"><img src="/images/field-graph.svg" alt="Graph of E versus r for a solid charged sphere: straight-line rise from 0 to R then 1/r-squared fall" /><div class="cap">Fig 1.1: $E$ vs $r$ for the solid sphere. Straight line through the origin is Eq. (2); $1/r^2$ falling curve is Eq. (1); peak $E_{\max} = Q/4\pi\varepsilon_0 R^2$ occurs at $r = R$.</div></div>

<div class="callout"><b>Note.</b> At the centre ($r = 0$), Eq. (2) gives $E = 0$. For a thin shell, $E = 0$ everywhere inside because $Q_{\text{in}} = 0$ at every interior point.</div>

<h2>2. Other Gauss-law results</h2>
<p>Each result comes from choosing the Gaussian surface that matches the symmetry of the charge distribution.</p>

<div class="fig"><img src="/images/line-charge.svg" alt="Infinite line charge with coaxial Gaussian cylinder, radial E arrows"/><div class="cap">Fig 1.2: infinite line charge $\lambda$. The coaxial Gaussian cylinder of radius $r$ and length $l$ catches flux only through its curved face, giving $E = \lambda/2\pi\varepsilon_0 r$ (Eq. 3a).</div></div>

<div class="formula"><b>Formula 3.</b> Useful Gauss-law fields · (a) Infinite line charge, linear density $\lambda$: $\boxed{E = \lambda/2\pi\varepsilon_0 r}$ (radially out; coaxial Gaussian cylinder). · (b) Thin spherical shell of charge $Q$: outside $E = Q/4\pi\varepsilon_0 r^2$; inside $\boxed{E = 0}$. · (c) Infinite plane sheet, surface density $\sigma$: $\boxed{E = \sigma/2\varepsilon_0}$ on each side (flat Gaussian pillbox). · (d) Charged conductor: all charge on outer surface; field just outside $\boxed{E = \sigma/\varepsilon_0}$ (normal to surface); $E = 0$ inside the metal.</div>

<div class="fig"><img src="/images/sheet-charge.svg" alt="Charged sheet with Gaussian pillbox, E arrows on both sides"/><div class="cap">Fig 1.3: infinite plane sheet with surface density $\sigma$. The Gaussian pillbox straddles the sheet; flux leaves through both flat faces, giving $E = \sigma/2\varepsilon_0$ on each side (Eq. 3c).</div></div>

<h2>Solved PYQs</h2>

<div class="pyq">
<span class="qno">Q1</span>
<p class="qtext">Using Gauss's law, find the field of a uniformly charged solid sphere outside and inside. Show the graphical variation and prove the field is zero inside (at the centre).</p>
<span class="rep">×2</span><span class="yr">2018</span><span class="yr">2023</span>

<span class="lbl">Recall</span>
<div class="recall">Gauss's law $\oint \vec{E}\cdot d\vec{S} = Q_{\text{in}}/\varepsilon_0$ plus spherical symmetry: $\vec{E} = E(r)\hat{r}$, so flux on a concentric sphere is $E\cdot 4\pi r^2$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>State the symmetry: $\vec{E} = E(r)\hat{r}$, so on a concentric Gaussian sphere, $\Phi = E(r)\cdot 4\pi r^2$.</li>
<li>Outside ($r > R$): enclosed charge is the full $Q$; Gauss's law gives $E = Q/4\pi\varepsilon_0 r^2$ (point-charge form).</li>
<li>Inside ($r < R$): enclosed charge scales with volume, $Q_{\text{in}} = Q\,r^3/R^3$; Gauss's law gives $E = Q\,r/4\pi\varepsilon_0 R^3$ (linear in $r$).</li>
<li>At the centre ($r = 0$): Eq. (2) gives $E = 0$. For a thin shell, $Q_{\text{in}} = 0$ everywhere inside, so $E = 0$ throughout.</li>
<li>Graph: straight line from origin to $(R, E_{\max})$, then a $1/r^2$ falling curve — as in Fig 1.1.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{E_{\text{out}} = \dfrac{Q}{4\pi\varepsilon_0 r^2},\ E_{\text{in}} = \dfrac{Q\,r}{4\pi\varepsilon_0 R^3},\ E(0) = 0}$. Both forms give N/C.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Label $E_{\max}$ at $r = R$ on the graph — examiners look for the peak value and its location.</div>
</div>

<div class="pyq">
<span class="qno">Q2</span>
<p class="qtext">Calculate the electric field on the surface of a $^{238}_{92}$U nucleus (radius $7\times 10^{-15}$ m). Take $\varepsilon_0 = 8.85\times 10^{-12}$ C²/N·m², $e = 1.6\times 10^{-19}$ C.</p>
<span class="yr">2018</span>

<span class="lbl">Recall</span>
<div class="recall">Outside a sphere the field has the point-charge form $E = Q/4\pi\varepsilon_0 r^2$, with $1/4\pi\varepsilon_0 = 9\times 10^9$ N·m²/C².</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Charge of the nucleus: $Q = 92\,e = 92\times 1.6\times 10^{-19} = 1.472\times 10^{-17}$ C (reason: 92 protons).</li>
<li>At the surface $r = R$: $E = \dfrac{1}{4\pi\varepsilon_0}\dfrac{Q}{R^2}$ with $1/4\pi\varepsilon_0 = 9\times 10^9$ N·m²/C².</li>
<li>Numerator: $9\times 10^9\times 1.472\times 10^{-17} = 1.3248\times 10^{-7}$ N·m²/C.</li>
<li>Denominator: $R^2 = (7\times 10^{-15})^2 = 49\times 10^{-30}$ m².</li>
<li>Divide: $E = \dfrac{1.3248\times 10^{-7}}{49\times 10^{-30}} = 2.7\times 10^{21}$ N/C, radially outward (reason: positive charge pushes a test charge away).</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{E \approx 2.7\times 10^{21}\ \text{N/C, directed radially outward}}$ · Unit N/C · The huge value is reasonable: the nucleus is tiny and holds 92 protons.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Always write $Q = 92\,e$ explicitly. Forgetting the 92 is the common zero-mark error.</div>
</div>

<div class="pyq">
<span class="qno">Q3</span>
<p class="qtext">Using Gauss's theorem, find the electric field intensity at a point due to a charged cylinder (long line of charge).</p>
<span class="yr">2022</span>

<span class="lbl">Recall</span>
<div class="recall">Cylindrical symmetry → use a coaxial Gaussian cylinder. Flux only crosses the curved face (flat caps have $\vec{E}\perp d\vec{S}$, giving zero flux).</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Let charge per unit length be $\lambda$. Draw a coaxial Gaussian cylinder of radius $r$ and length $l$.</li>
<li>Flux through the curved face only: $\Phi = E\cdot 2\pi r l$ (reason: $\vec{E}\parallel d\vec{S}$ on curved face; on caps $\vec{E}\perp d\vec{S}$, so they contribute 0).</li>
<li>Enclosed charge: $Q_{\text{in}} = \lambda l$. Apply Gauss's law: $E\cdot 2\pi r l = \lambda l/\varepsilon_0$.</li>
<li>Cancel $l$: $E = \lambda/2\pi\varepsilon_0 r$, radially outward (reason: charge is positive).</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{E = \dfrac{\lambda}{2\pi\varepsilon_0 r}}$ (outside an infinite line of charge) · For a thin charged shell, $E = 0$ inside. Unit: N/C.</div>

<span class="lbl">Exam tip</span>
<div class="tip">If the question is about a solid cylinder (volume charge $\rho$), the inside field becomes $E = \rho\,r/2\varepsilon_0$ — state which case you are solving.</div>
</div>

<div class="pyq">
<span class="qno">Q4</span>
<p class="qtext">Two charges $8\ \mu$C and $2\ \mu$C are placed 50 cm apart in air. At which point is the electric field intensity zero?</p>
<span class="yr">2023</span>

<span class="lbl">Recall</span>
<div class="recall">Field of a point charge $E = kq/r^2$ with $k = 9\times 10^9$ N·m²/C². For two like charges, the zero-field point lies between them, closer to the smaller charge.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Let the point be at distance $x$ from $8\ \mu$C along the line joining the charges, so it is $(50 - x)$ cm from $2\ \mu$C. Between them the two fields point in opposite directions (reason: each charge pushes a test charge away from itself).</li>
<li>Set the magnitudes equal: $\dfrac{k\cdot 8}{x^2} = \dfrac{k\cdot 2}{(50-x)^2}$. Cancel $k$: $\dfrac{8}{x^2} = \dfrac{2}{(50-x)^2}$.</li>
<li>Take square roots (cleaner than expanding squares): $\dfrac{\sqrt{8}}{x} = \dfrac{\sqrt{2}}{50-x}$ → $\dfrac{2\sqrt{2}}{x} = \dfrac{\sqrt{2}}{50-x}$ → $\dfrac{2}{x} = \dfrac{1}{50-x}$.</li>
<li>Cross-multiply: $2(50 - x) = x$ → $100 - 2x = x$ → $3x = 100$ → $x = 33.3$ cm.</li>
<li>Check: from $2\ \mu$C, the distance is $50 - 33.3 = 16.7$ cm. Verify: $8/(33.3)^2 \approx 2/(16.7)^2 \approx 0.0072$. ✓</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{33.3\ \text{cm from the } 8\ \mu\text{C charge (16.7 cm from the } 2\ \mu\text{C), lying between them}}$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Always take the square root before expanding. Expanding the squares wastes time and invites algebra slips.</div>
</div>

<div class="pyq">
<span class="qno">Q5</span>
<p class="qtext">State Coulomb's theorem (Coulomb's law) in electrostatics.</p>
<span class="yr">2022</span>

<span class="lbl">Recall</span>
<div class="recall">Force between two point charges $q_1$, $q_2$ distance $r$ apart: $F = \dfrac{1}{4\pi\varepsilon_0}\dfrac{q_1 q_2}{r^2}$, directed along the line joining them.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>State the law: the force is proportional to the product of the charges and inversely proportional to the square of the distance between them.</li>
<li>Write the vector form: $\vec{F}_{12} = \dfrac{1}{4\pi\varepsilon_0}\dfrac{q_1 q_2}{r^2}\,\hat{r}_{12}$, where $\hat{r}_{12}$ points from $q_1$ to $q_2$.</li>
<li>Give the constant: $1/4\pi\varepsilon_0 = 9\times 10^9$ N·m²/C². Like charges repel, unlike charges attract.</li>
<li>Note the conditions: point charges (or spherically symmetric), at rest, in vacuum (in a medium replace $\varepsilon_0 \to \varepsilon$).</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{F = \dfrac{1}{4\pi\varepsilon_0}\dfrac{q_1 q_2}{r^2}}$ along the line joining the charges · $1/4\pi\varepsilon_0 = 9\times 10^9$ N·m²/C².</div>

<span class="lbl">Exam tip</span>
<div class="tip">Write the vector form with $\hat{r}_{12}$ — the direction line is a separate mark from the magnitude.</div>
</div>

<div class="pyq">
<span class="qno">Q6</span>
<p class="qtext">Calculate the force with which two electrons at a distance of $1.1$ Å in the hydrogen atom repel each other. What is the nature of the electrostatic field energy?</p>
<span class="yr">2018</span>

<span class="lbl">Recall</span>
<div class="recall">Coulomb's law $F = k e^2/r^2$ with $k = 9\times 10^9$ N·m²/C², $e = 1.6\times 10^{-19}$ C. Potential energy $U = k e^2/r$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Convert: $r = 1.1$ Å $= 1.1\times 10^{-10}$ m, so $r^2 = 1.21\times 10^{-20}$ m².</li>
<li>Numerator: $k e^2 = 9\times 10^9 \times (1.6\times 10^{-19})^2 = 9\times 10^9 \times 2.56\times 10^{-38} = 2.304\times 10^{-28}$ N·m².</li>
<li>Divide: $F = 2.304\times 10^{-28} / 1.21\times 10^{-20} = 1.90\times 10^{-8}$ N, repulsive (reason: like charges repel).</li>
<li>Field energy: the electrostatic potential energy $U = +k e^2/r > 0$ — positive because work must be done against repulsion to bring the electrons together. The energy is stored in the field.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{F \approx 1.9\times 10^{-8}\ \text{N (repulsive)}}$ · Field energy $\boxed{U = +ke^2/r > 0}$ — positive, stored in the field.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Convert Å → m first ($1$ Å $= 10^{-10}$ m). The sign of $U$ is the second mark — repulsive means positive energy.</div>
</div>

<p class="ref"><b>Reference.</b> Brij Lal &amp; Subrahmanyam, Electricity &amp; Magnetism Ch-2 (Gauss applications: sphere, line, shell, sheet, conductor); S.L. Arora Vol-1 Ch-1.</p>
