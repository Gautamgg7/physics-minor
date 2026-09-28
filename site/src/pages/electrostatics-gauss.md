---
layout: ../layouts/Docs.astro
title: 1A · Gauss Law & Flux — Proof + Solved PYQs
description: Electric flux, full Gauss theorem proof (×4), differential form, dipole flux zero. Step-by-step exam solutions.
---

<p>This page covers Gauss's law in electrostatics. We define electric flux, state the theorem, and prove it step-by-step. The proof is the most repeated question in Section 1 (asked 4 times across 2018–2023), so the full derivation is given here.</p>

<h2>1. Electric flux</h2>
<p>Flux counts how many field lines cross a surface. Take a small patch $d\vec{S}$ on the surface — its arrow is the outward normal. The flux through the patch is $d\Phi = \vec{E}\cdot d\vec{S} = E\,dS\cos\theta$. Adding all patches gives the total flux through the surface:</p>

<div class="formula"><b>Formula 1.</b> Electric flux through a closed surface $\Phi = \oint \vec{E}\cdot d\vec{S} = \oint E\cos\theta\,dS$. Unit: N·m²/C (same as V·m). Only the normal component of $\vec{E}$ contributes.</div>

<p>The circle on the integral $\oint$ means the surface is closed. Think of the closed surface as a net that catches field lines.</p>

<h2>2. Gauss's theorem — statement</h2>
<p>For any closed surface in electrostatics, the total outward flux equals the enclosed charge divided by $\varepsilon_0$:</p>

<div class="formula"><b>Formula 2.</b> Gauss's law (integral form) $\boxed{\displaystyle\oint \vec{E}\cdot d\vec{S} = \frac{Q_{\text{in}}}{\varepsilon_0}}$, where $Q_{\text{in}}$ is the **net** charge inside the surface (charges outside contribute zero net flux because every field line that enters also leaves).</div>

<h2>3. Gauss's theorem — proof</h2>
<p>We use Coulomb's result: the field of a point charge $Q$ at distance $r$ is $\vec{E} = \dfrac{Q}{4\pi\varepsilon_0 r^2}\hat{r}$ (radially outward).</p>

<div class="fig"><img src="/images/gauss-sphere.svg" alt="Gaussian sphere of radius r around charge Q with E arrows parallel to dS" /><div class="cap">Fig 1.1: Gaussian sphere of radius $r$ centred on $+Q$. On the surface, $\vec{E}$ is everywhere parallel to $d\vec{S}$, so $\vec{E}\cdot d\vec{S} = E\,dS$. Integrating gives $\Phi = E\cdot 4\pi r^2 = Q/\varepsilon_0$.</div></div>

<h3>3.1 Proof for a spherical surface</h3>
<p>Take a sphere of radius $r$ centred on the charge $Q$. Every point on the sphere is at distance $r$ from $Q$.</p>

<div class="recall">Coulomb's law gives a central field $\vec{E} \parallel \hat{r}$. On the Gaussian sphere, the outward normal $d\vec{S}$ is also along $\hat{r}$, so $\vec{E}\parallel d\vec{S}$ and $\vec{E}\cdot d\vec{S} = E\,dS$. The magnitude $E = Q/4\pi\varepsilon_0 r^2$ is the same everywhere on the sphere.</div>

<ol class="steps">
<li>On the sphere, $\vec{E}\parallel d\vec{S}$, so $\vec{E}\cdot d\vec{S} = E\,dS$ (reason: $\cos 0° = 1$).</li>
<li>$E$ is constant on the sphere (reason: every point is at the same distance $r$ from $Q$).</li>
<li>Take $E$ outside the integral: $\Phi = E\oint dS = E\cdot 4\pi r^2$ (reason: area of sphere is $4\pi r^2$).</li>
<li>Substitute $E$: $\Phi = \dfrac{Q}{4\pi\varepsilon_0 r^2}\cdot 4\pi r^2 = \dfrac{Q}{\varepsilon_0}$ (reason: the $r^2$ cancels — area grows as $r^2$, field falls as $1/r^2$).</li>
</ol>

<p>This proves Gauss's law for one charge inside a sphere.</p>

<h3>3.2 Proof for any closed surface</h3>
<p>Now consider a closed surface of any shape around the same charge $Q$. A small patch $dS$ at distance $r$ from $Q$, with its normal making angle $\theta$ with $\hat{r}$, subtends a solid angle $d\Omega = dS\cos\theta/r^2$. The flux through it is:</p>

<div class="recall">Solid angle of a closed surface = $4\pi$ steradians (full sphere). A solid angle is the 3-D version of a plane angle: it measures how much of the view from a point is filled by a surface.</div>

<ol class="steps">
<li>Flux through patch: $d\Phi = E\cos\theta\,dS = \dfrac{Q}{4\pi\varepsilon_0 r^2}\cdot \dfrac{\cos\theta\,dS}{1}$ (reason: $E = Q/4\pi\varepsilon_0 r^2$).</li>
<li>Rewrite as $d\Phi = \dfrac{Q}{4\pi\varepsilon_0}\cdot \dfrac{dS\cos\theta}{r^2} = \dfrac{Q}{4\pi\varepsilon_0}\,d\Omega$ (reason: definition of solid angle).</li>
<li>Integrate over the closed surface: $\Phi = \dfrac{Q}{4\pi\varepsilon_0}\oint d\Omega = \dfrac{Q}{4\pi\varepsilon_0}\cdot 4\pi = \dfrac{Q}{\varepsilon_0}$ (reason: closed surface subtends $4\pi$ sr).</li>
<li>The shape does not change the answer — only the enclosed charge matters.</li>
</ol>

<h3>3.3 Proof for many charges (superposition)</h3>
<p>If there are $n$ charges $Q_1, Q_2, \dots, Q_n$ inside the surface, the total field is the sum $\vec{E} = \sum_i \vec{E}_i$ by superposition.</p>

<ol class="steps">
<li>Total flux: $\Phi = \oint \vec{E}\cdot d\vec{S} = \oint \sum_i \vec{E}_i\cdot d\vec{S} = \sum_i \oint \vec{E}_i\cdot d\vec{S}$ (reason: linearity of the integral).</li>
<li>Each $\oint \vec{E}_i\cdot d\vec{S} = Q_i/\varepsilon_0$ by the single-charge proof above.</li>
<li>Add: $\Phi = \sum_i Q_i/\varepsilon_0 = Q_{\text{in}}/\varepsilon_0$ (reason: sum of enclosed charges is $Q_{\text{in}}$).</li>
<li>Charges outside contribute zero net flux: every line that enters the closed surface also leaves it.</li>
</ol>

<h2>4. Differential form of Gauss's law</h2>
<p>Shrink the closed surface to a point. Use the divergence theorem $\oint \vec{E}\cdot d\vec{S} = \int (\nabla\cdot\vec{E})\,dV$ and write $Q_{\text{in}} = \int \rho\,dV$. Both sides of Gauss's law become volume integrals, so the integrands must be equal at every point:</p>

<div class="formula"><b>Formula 3.</b> Gauss's law (differential form) $\boxed{\nabla\cdot\vec{E} = \dfrac{\rho}{\varepsilon_0}}$, where $\rho$ is the volume charge density. Physical meaning: charge density is the source of diverging electric field lines.</div>

<div class="callout"><b>Note.</b> $Q_{\text{in}}$ in Eq. (2) means <i>only</i> the charge strictly inside the closed surface. Field lines from outside charges do pass through, but as many enter as leave, giving zero net flux.</div>

<h2>Solved PYQs</h2>

<div class="pyq">
<span class="qno">Q1</span>
<p class="qtext">State and prove Gauss's theorem in electrostatics. Write its differential form.</p>
<span class="rep">×4</span><span class="yr">2018</span><span class="yr">2019</span><span class="yr">2022</span><span class="yr">2023</span>

<span class="lbl">Recall</span>
<div class="recall">Coulomb's central field $\vec{E} = Q\hat{r}/4\pi\varepsilon_0 r^2$ and the fact that a closed surface subtends a solid angle $4\pi$ steradians. By superposition, fields and fluxes add linearly.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>State Gauss's law: $\oint \vec{E}\cdot d\vec{S} = Q_{\text{in}}/\varepsilon_0$, where $Q_{\text{in}}$ is the net charge inside.</li>
<li>Prove for a sphere: $\vec{E}\parallel d\vec{S}$, $E$ is constant on the sphere, so $\Phi = E\cdot 4\pi r^2 = Q/\varepsilon_0$ (the $r^2$ cancels).</li>
<li>Extend to any closed surface using solid angle: $\Phi = (Q/4\pi\varepsilon_0)\oint d\Omega = (Q/4\pi\varepsilon_0)(4\pi) = Q/\varepsilon_0$, shape-independent.</li>
<li>Extend to many charges by superposition: $\vec{E} = \sum \vec{E}_i$ so $\Phi = \sum Q_i/\varepsilon_0 = Q_{\text{in}}/\varepsilon_0$; charges outside give zero net flux.</li>
<li>Differential form: apply divergence theorem to shrink the surface, equate integrands to get $\nabla\cdot\vec{E} = \rho/\varepsilon_0$.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans"><b>Integral:</b> $\boxed{\displaystyle\oint \vec{E}\cdot d\vec{S} = \dfrac{Q_{\text{in}}}{\varepsilon_0}}$ · <b>Differential:</b> $\boxed{\nabla\cdot\vec{E} = \dfrac{\rho}{\varepsilon_0}}$ · Unit of flux: N·m²/C.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Top repeat (×4). Practise the sphere proof with the diagram in under 6 minutes — state Eq. (2) first, draw the Gaussian surface, end with Eq. (3).</div>
</div>

<div class="pyq">
<span class="qno">Q2</span>
<p class="qtext">What do you mean by electric flux? What is the flux through a closed surface enclosing an electric dipole?</p>
<span class="yr">2022</span>

<span class="lbl">Recall</span>
<div class="recall">Flux = $\oint \vec{E}\cdot d\vec{S}$. Gauss's law says flux depends only on the net charge enclosed by the surface.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Define flux by $\Phi = \oint \vec{E}\cdot d\vec{S}$: it counts field lines crossing a closed surface; unit N·m²/C.</li>
<li>A dipole has $+q$ at one end and $-q$ at the other, so net enclosed charge $Q_{\text{in}} = (+q) + (-q) = 0$ (reason: equal and opposite).</li>
<li>Apply Gauss's law: $\Phi = Q_{\text{in}}/\varepsilon_0 = 0/\varepsilon_0 = 0$ (reason: as many lines enter the surface as leave it).</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\Phi = 0}$ · Zero net flux because $Q_{\text{in}} = 0$ for a dipole.</div>

<span class="lbl">Exam tip</span>
<div class="tip">One line after the definition — write "$Q_{\text{in}} = 0$ so $\Phi = 0$" for full marks.</div>
</div>

<p class="ref"><b>Reference.</b> Brij Lal &amp; Subrahmanyam, Electricity &amp; Magnetism Ch-2 (flux, Gauss theorem, differential form).</p>
