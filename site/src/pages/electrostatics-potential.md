---
layout: ../layouts/Docs.astro
title: 1C · Potential & Dipole — V(r,θ), E from V + Solved PYQs
description: Dipole moment, potential derivation, E = −grad V, three 2019 gradient problems, conservative proof. Full steps.
---

<p>This page is about electric potential and the electric dipole. We start with the dipole moment vector, then derive the dipole potential $V(r,\theta)$ and its field. After that we solve three short 2019 gradient problems (Q20, Q21, Q22) and prove that the electrostatic field is conservative.</p>

<h2>1. Electric dipole and dipole moment</h2>
<p>A dipole is a pair of equal and opposite charges $+q$ and $-q$ separated by a small distance $2l$. Daily example: an HCl molecule. The dipole moment vector is defined as</p>

<div class="formula"><b>Formula 1.</b> Electric dipole moment $\boxed{\vec{p} = q\cdot 2\vec{l}}$, where $2\vec{l}$ points from $-q$ to $+q$. Unit: C·m. It is a true vector — it has both size and direction.</div>

<div class="fig"><img src="/images/dipole.svg" alt="Dipole with charges +q and -q, moment arrow p from minus to plus, field point P at (r, theta)" /><div class="cap">Fig 1.1: dipole geometry. The arrow $\vec{p} = q\cdot 2\vec{l}$ points from $-q$ toward $+q$. Field point $P(r,\theta)$ uses Eq. (2) below. Verified: the arrow direction matches Eq. (1).</div></div>

<h2>2. Potential and field of a dipole</h2>
<p>Electric potential is work per unit positive test charge to bring it from infinity to the point. For a point charge, $V = q/4\pi\varepsilon_0 r$. For a dipole at field point $(r,\theta)$ with $r \gg l$:</p>

<div class="formula"><b>Formula 2.</b> Dipole potential and field · $V(r,\theta) = \dfrac{p\cos\theta}{4\pi\varepsilon_0 r^2}$ · $E_r = \dfrac{2p\cos\theta}{4\pi\varepsilon_0 r^3}$ · $E_\theta = \dfrac{p\sin\theta}{4\pi\varepsilon_0 r^3}$.</div>

<h3>2.1 Derivation of $V(r,\theta)$</h3>
<p>The point $P$ is far away, so $r \gg l$. The distances from $P$ to $+q$ and $-q$ differ only by the projection of $2l$ on the line to $P$.</p>

<ol class="steps">
<li>Approximate distances: $r_1 \approx r - l\cos\theta$ (to $+q$) and $r_2 \approx r + l\cos\theta$ (to $-q$) — reason: projection of half-separation $l$ on $\hat{r}$.</li>
<li>Total potential (principle of superposition): $V = \dfrac{q}{4\pi\varepsilon_0}\left(\dfrac{1}{r_1} - \dfrac{1}{r_2}\right)$.</li>
<li>Combine the fractions: $\dfrac{1}{r_1} - \dfrac{1}{r_2} = \dfrac{r_2 - r_1}{r_1 r_2} \approx \dfrac{2l\cos\theta}{r^2}$ — reason: $r_1 r_2 \approx r^2$ when $r \gg l$.</li>
<li>Insert $p = q\cdot 2l$: $V = \dfrac{p\cos\theta}{4\pi\varepsilon_0 r^2}$ (Eq. 2). Limit: $V \to 0$ as $r \to \infty$. ✓</li>
</ol>

<h3>2.2 Field from potential</h3>
<p>From $\vec{E} = -\nabla V$ in spherical coordinates, the radial and angular components are $E_r = -\partial V/\partial r$ and $E_\theta = -(1/r)\partial V/\partial\theta$.</p>

<ol class="steps">
<li>$\partial V/\partial r = -\dfrac{2p\cos\theta}{4\pi\varepsilon_0 r^3}$, so $E_r = +\dfrac{2p\cos\theta}{4\pi\varepsilon_0 r^3}$ (reason: minus times minus).</li>
<li>$\partial V/\partial\theta = -\dfrac{p\sin\theta}{4\pi\varepsilon_0 r^2}$, so $E_\theta = +\dfrac{p\sin\theta}{4\pi\varepsilon_0 r^3}$ (reason: same).</li>
<li>Special cases — on the axis ($\theta = 0$): $E = 2p/4\pi\varepsilon_0 r^3$; on the equator ($\theta = 90°$): $E = p/4\pi\varepsilon_0 r^3$ (opposite to $\vec{p}$).</li>
</ol>

<div class="callout"><b>Note.</b> Always state $r \gg l$ before doing the dipole approximation — the approximation mark depends on it.</div>

<h2>Solved PYQs</h2>

<div class="pyq">
<span class="qno">Q1</span>
<p class="qtext">What is an electric dipole? Define electric dipole moment.</p>
<span class="rep">×2</span><span class="yr">2018</span><span class="yr">2019</span>

<span class="lbl">Recall</span>
<div class="recall">Eq. (1): $\vec{p} = q\cdot 2\vec{l}$, direction from $-q$ to $+q$, unit C·m.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Define the dipole: two equal and opposite charges $\pm q$ separated by a small distance $2l$.</li>
<li>Define the dipole moment $\vec{p} = q\cdot 2\vec{l}$ — a vector pointing from $-q$ toward $+q$.</li>
<li>State the unit (C·m) and give one daily-life example (HCl, H₂O).</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\vec{p} = q\cdot 2\vec{l}\ \text{(from } -q\ \text{to } +q,\ \text{unit C·m})}$ · Examples: HCl, H₂O molecules.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Draw the arrow from $-$ to $+$. A reversed arrow loses the definition mark.</div>
</div>

<div class="pyq">
<span class="qno">Q2</span>
<p class="qtext">Deduce the electric potential (and field) at any point $(r,\theta)$ due to an electric dipole.</p>
<span class="rep">×2</span><span class="yr">2018</span><span class="yr">2022</span>

<span class="lbl">Recall</span>
<div class="recall">Point-charge potential $V = q/4\pi\varepsilon_0 r$ + far-field condition $r \gg l$ + relation $\vec{E} = -\nabla V$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Write $V = \dfrac{q}{4\pi\varepsilon_0}\left(\dfrac{1}{r_1} - \dfrac{1}{r_2}\right)$ with $r_1 \approx r - l\cos\theta$, $r_2 \approx r + l\cos\theta$.</li>
<li>Combine: $\dfrac{1}{r_1} - \dfrac{1}{r_2} = \dfrac{2l\cos\theta}{r_1 r_2} \approx \dfrac{2l\cos\theta}{r^2}$ (reason: $r_1 r_2 \approx r^2$ for $r \gg l$).</li>
<li>Insert $p = 2ql$: $V = \dfrac{p\cos\theta}{4\pi\varepsilon_0 r^2}$ — Eq. (2) first part.</li>
<li>Differentiate: $E_r = -\partial V/\partial r = \dfrac{2p\cos\theta}{4\pi\varepsilon_0 r^3}$ and $E_\theta = -(1/r)\partial V/\partial\theta = \dfrac{p\sin\theta}{4\pi\varepsilon_0 r^3}$ — Eq. (2) rest.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{V = \dfrac{p\cos\theta}{4\pi\varepsilon_0 r^2},\quad E_r = \dfrac{2p\cos\theta}{4\pi\varepsilon_0 r^3},\quad E_\theta = \dfrac{p\sin\theta}{4\pi\varepsilon_0 r^3}}$. Unit: $V$ for potential, N/C for $E$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">State $r \gg l$ at the start — that single line carries the approximation mark.</div>
</div>

<div class="pyq">
<span class="qno">Q3</span>
<p class="qtext">Potential $V(x,y,z) = -k(x^2+y^2+z^2)$, $k$ a constant. Find $\vec{E}$ at $(1,1,1)$.</p>
<span class="yr">2019</span>

<span class="lbl">Recall</span>
<div class="recall">$\vec{E} = -\nabla V = -\left(\dfrac{\partial V}{\partial x}\hat{i} + \dfrac{\partial V}{\partial y}\hat{j} + \dfrac{\partial V}{\partial z}\hat{k}\right)$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Differentiate: $\partial V/\partial x = -2kx$, $\partial V/\partial y = -2ky$, $\partial V/\partial z = -2kz$ (reason: power rule, other variables held constant).</li>
<li>Apply the minus sign of $-\nabla V$: $\vec{E} = 2k\,(x\hat{i} + y\hat{j} + z\hat{k})$.</li>
<li>Insert $(x,y,z) = (1,1,1)$: $\vec{E} = 2k\,(\hat{i} + \hat{j} + \hat{k})$, magnitude $|E| = 2k\sqrt{3}$.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\vec{E}(1,1,1) = 2k\,(\hat{i} + \hat{j} + \hat{k})}$ · Unit: V/m = N/C (so $[k] = $ V/m²). · Magnitude $2\sqrt{3}\,k$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Keep the minus sign of $-\nabla V$ until the last line — sign errors are the most common trap here.</div>
</div>

<div class="pyq">
<span class="qno">Q4</span>
<p class="qtext">Find $\nabla\phi$ where $\phi = 1/r$.</p>
<span class="yr">2019</span>

<span class="lbl">Recall</span>
<div class="recall">$r = \sqrt{x^2+y^2+z^2}$, so $\partial r/\partial x = x/r$ (chain rule on the square root).</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Differentiate the $x$-component: $\dfrac{\partial}{\partial x}\!\left(\dfrac{1}{r}\right) = -\dfrac{1}{r^2}\dfrac{\partial r}{\partial x} = -\dfrac{x}{r^3}$ (reason: chain rule).</li>
<li>By symmetry, the $y$- and $z$-components are $-y/r^3$ and $-z/r^3$.</li>
<li>Combine: $\nabla(1/r) = -\dfrac{x\hat{i}+y\hat{j}+z\hat{k}}{r^3} = -\dfrac{\vec{r}}{r^3} = -\dfrac{\hat{r}}{r^2}$.</li>
<li>Therefore the field of a point charge $Q$ is $\vec{E} = -\dfrac{Q}{4\pi\varepsilon_0}\nabla(1/r) = \dfrac{Q}{4\pi\varepsilon_0 r^2}\hat{r}$.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\nabla(1/r) = -\dfrac{\hat{r}}{r^2}}$ · Used to convert any $1/r$ potential into a $1/r^2$ field.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Memorise this identity — every $1/r$ Coulomb potential becomes a $1/r^2$ field in one line.</div>
</div>

<div class="pyq">
<span class="qno">Q5</span>
<p class="qtext">Find the potential at $(x,y,z)$ for the conservative field $\vec{F} = (2xy+z^2)\hat{i} + x^2\hat{j} + 2xz\hat{k}$.</p>
<span class="yr">2019</span>

<span class="lbl">Recall</span>
<div class="recall">For a conservative field, $V$ satisfies $F_x = -\partial V/\partial x$, $F_y = -\partial V/\partial y$, $F_z = -\partial V/\partial z$. A conservative field has $\nabla\times\vec{F} = 0$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Check it is conservative: $\partial_y F_z - \partial_z F_y = 0 - 0 = 0$, $\partial_z F_x - \partial_x F_z = 2z - 2z = 0$, $\partial_x F_y - \partial_y F_x = 2x - 2x = 0$. So $\nabla\times\vec{F} = 0$ — a potential $V$ exists.</li>
<li>Integrate $F_x$: $V = -\int (2xy+z^2)\,dx = -(x^2 y + x z^2) + f(y,z)$ (reason: integral of $2xy$ is $x^2 y$, of $z^2$ is $xz^2$; $y$ and $z$ are constants under $x$-integration).</li>
<li>Match $F_y$: $-\partial V/\partial y = x^2 - \partial_y f$ must equal $F_y = x^2$, so $\partial_y f = 0$.</li>
<li>Match $F_z$: $-\partial V/\partial z = 2xz - \partial_z f$ must equal $F_z = 2xz$, so $\partial_z f = 0$.</li>
<li>Hence $f = $ constant $C$. Final: $V(x,y,z) = -(x^2 y + x z^2) + C$.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{V(x,y,z) = -(x^2 y + x z^2) + C}$ · Verified by differentiating back: all three components match $\vec{F}$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Always verify by computing $-\nabla V$ at the end — it catches integration-constant slips.</div>
</div>

<div class="pyq">
<span class="qno">Q6</span>
<p class="qtext">Prove that the electrostatic field is conservative.</p>
<span class="yr">2019</span>

<span class="lbl">Recall</span>
<div class="recall">A field is conservative iff $\oint \vec{E}\cdot d\vec{l} = 0$ around every closed loop, equivalently $\nabla\times\vec{E} = 0$. Coulomb's force is central and $\propto 1/r^2$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Coulomb force on a test charge $q_0$ at distance $r$ from $Q$ is $\vec{F} = \dfrac{Q q_0}{4\pi\varepsilon_0 r^2}\hat{r}$ — central and $\propto 1/r^2$ (reason: depends only on the distance $r$, no angular part).</li>
<li>Work moving $q_0$ from A to B along any path: $W_{AB} = \int_A^B \vec{F}\cdot d\vec{l} = \dfrac{Q q_0}{4\pi\varepsilon_0}\!\int_{r_A}^{r_B}\!\dfrac{dr}{r^2} = \dfrac{Q q_0}{4\pi\varepsilon_0}\!\left(\dfrac{1}{r_A} - \dfrac{1}{r_B}\right)$. The answer depends only on $r_A$ and $r_B$, not the path.</li>
<li>Round trip A → B → A: $W = W_{AB} + W_{BA} = 0$. So $\oint \vec{E}\cdot d\vec{l} = 0$ for any closed loop.</li>
<li>By Stokes' theorem, $\oint \vec{E}\cdot d\vec{l} = \int (\nabla\times\vec{E})\cdot d\vec{S} = 0$ for every surface, so $\nabla\times\vec{E} = 0$. A scalar potential exists with $\vec{E} = -\nabla V$.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\oint \vec{E}\cdot d\vec{l} = 0 \;\text{ and }\; \nabla\times\vec{E} = 0 \;\Rightarrow\; \vec{E} = -\nabla V}$ · Both forms hold because Coulomb's force is central and $\propto 1/r^2$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Quote both forms (loop integral and curl) — one line each, both carry marks.</div>
</div>

<p class="ref"><b>Reference.</b> Brij Lal &amp; Subrahmanyam, Electricity &amp; Magnetism Ch-1 (dipole, potential, conservative field); S.L. Arora Vol-1 Ch-1.</p>
