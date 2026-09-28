---
layout: ../layouts/Docs.astro
title: 6 · Lissajous Figures — Theory + 2 Solved PYQs
description: Perpendicular SHM superposition, ellipse/circle/line by phase, tangency frequency ratio, CRO demo. Easy theory then solved questions.
---

This page covers superposition of two perpendicular SHMs. It has four short theory sections, one figure, and two solved PYQs.

<h2>1. What are Lissajous figures? Formation</h2>

Shake a light spot left-right and up-down at the same time. The spot draws a looping pattern on the screen. That pattern is a Lissajous figure. Its shape tells the frequency ratio and phase gap of the two shakes.

For $x = a\sin(\omega_1 t+\phi)$, $y = b\sin(\omega_2 t)$, the spot $(x,y)$ traces a curve fixed by ratio $\omega_1:\omega_2$ and phase $\phi$.

<h3>Graphical method</h3>

Plot $x(t)$ and $y(t)$ sine strips on the top and side of a square. At each instant $t$, drop a line from the $x$-strip and run a line from the $y$-strip; their crossing point is the spot. Join the crossings over one full period. Changing $\phi$ slides the side strip and morphs the figure.

<h3>Uses</h3>

1. Measure unknown frequency: feed known $f$ to one axis, unknown to the other, read the ratio from the figure.
2. Measure phase gap between two signals.
3. Calibrate a CRO (check amplifiers and time base).
4. Study vibrations (turntable wobble, tuning-fork comparison).

<h2>2. Analytical method: 1:1 case</h2>

Remove time $t$ from the two equations. For equal frequencies the path is always an ellipse; phase picks circle or line.

For $x = a\sin(\omega t+\phi)$, $y = b\sin\omega t$, expand $x/a = \sin\omega t\cos\phi + \cos\omega t\sin\phi$, use $\sin^2+\cos^2 = 1$ and square to kill the root:

<div class="formula"><b>Formula 1.</b> $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} - \dfrac{2xy}{ab}\cos\phi = \sin^2\phi$ — an ellipse (tilted unless $\phi = \pi/2$).</div>

<h3>Phase table (1:1)</h3>

- $\phi = 0$: $(x/a - y/b)^2 = 0$, so $y = (b/a)x$ — straight line through origin.
- $\phi = \pi/2$, equal $a$: $x^2+y^2 = a^2$ — circle.
- $\phi = \pi$: line $y = -(b/a)x$ — other diagonal.

<div class="fig"><img src="/images/lissajous.svg" alt="Lissajous circle for 1:1 with phase pi-by-2 and figure-8 for 2:1"/><div class="cap">Fig 1. Left — 1:1, $\phi = \pi/2$, equal amplitudes gives a circle. Right — 2:1 gives a figure-8.</div></div>

<h2>3. Frequency ratio by tangency method</h2>

Count touches on the bounding box. $N_x$ = touches on a vertical side, $N_y$ = touches on a horizontal side.

<div class="formula"><b>Formula 2.</b> $\dfrac{\omega_x}{\omega_y} = \dfrac{f_x}{f_y} = \dfrac{N_y}{N_x}$ (crossed ratio — $x$-frequency uses $y$-touches).</div>

Worked example: figure-8 lying sideways ($\infty$). Left wall touched once ($N_x = 1$), top wall touched twice ($N_y = 2$). Ratio $f_x:f_y = 2:1$. So if the $y$-plates get $50$ Hz, the $x$-plates get $100$ Hz.

<h2>4. Electrical demonstration (CRO)</h2>

Wiring: Generator 1 → CRO X-input (horizontal plates). Generator 2 → CRO Y-input (vertical plates). Set CRO to X-Y mode (no internal time base; the spot position is directly $(V_x, V_y)$). Common ground all three chassis. Start near $50$ Hz with equal gains. Adjust one generator until the figure stands still — drifting figure means frequencies not in exact ratio.

<hr/>

<h2>Solved PYQs</h2>

<div class="pyq">
<span class="qno">S6-Q1</span><p class="qtext">What are Lissajous figures? <i>(two practical applications / demonstration by electrical experiment)</i></p>
<span class="yr">2023</span><span class="yr">2024</span><span class="rep">×2</span>
<span class="lbl">Recall</span>
<div class="recall">Lissajous figures are the paths traced by a particle under two perpendicular SHMs $x = a\sin(\omega_1 t+\phi)$, $y = b\sin\omega_2 t$. Shape is fixed by the ratio $\omega_1:\omega_2$ and phase $\phi$.</div>
<span class="lbl">Steps</span>
<ol class="steps">
<li>Define: the path of $(a\sin(\omega_1 t+\phi), b\sin\omega_2 t)$ from perpendicular SHM superposition (reason: each instant gives one spot).</li>
<li>Shape fixed by frequency ratio + phase (reason: Eqs. 1–2 above).</li>
<li>Application 1: unknown-frequency measurement by tangency ratio $f_x/f_y = N_y/N_x$ (reason: count box-touches).</li>
<li>Application 2: phase measurement or CRO calibration using a still figure (reason: shape encodes phase).</li>
<li>CRO wiring: two signal generators → X-input and Y-input, CRO in X-Y mode, common ground, still figure means locked ratio (reason: no time base; spot is $(V_x, V_y)$).</li>
</ol>
<span class="lbl">Answer</span>
<div class="ans">Lissajous figures are the looping paths traced by superposition of two perpendicular SHMs. Shape depends on the frequency ratio and phase. $\boxed{\text{Path of perpendicular SHMs};\ \text{ratio }f_x/f_y = N_y/N_x;\ \text{CRO X-Y demo}}$.</div>
<span class="lbl">Exam tip</span>
<div class="tip">Asked ×2 with "applications" explicit in 2024. Always write two uses plus a short CRO wiring note.</div>
</div>

<div class="pyq">
<span class="qno">S6-Q2</span><p class="qtext">Two SHMs of same frequency and amplitude, phase difference $\pi/2$, in perpendicular directions. What is the shape of the resultant motion?</p>
<span class="yr">2023</span>
<span class="lbl">Recall</span>
<div class="recall">For equal $\omega$ and equal $a$, phase $\phi = \pi/2$ gives Formula 1 with $\cos\phi = 0$, $\sin^2\phi = 1$: a circle of radius $a$.</div>
<span class="lbl">Steps</span>
<ol class="steps">
<li>$y = a\sin(\omega t+\pi/2) = a\cos\omega t$ (reason: $\sin(x+\pi/2) = \cos x$).</li>
<li>$x = a\sin\omega t$ gives $\sin\omega t = x/a$; $y = a\cos\omega t$ gives $\cos\omega t = y/a$.</li>
<li>Square and add: $x^2/a^2 + y^2/a^2 = \sin^2\omega t + \cos^2\omega t = 1$ (reason: identity $\sin^2 + \cos^2 = 1$ kills $t$).</li>
<li>Multiply by $a^2$: $x^2 + y^2 = a^2$.</li>
</ol>
<span class="lbl">Answer</span>
<div class="ans">$\boxed{x^2 + y^2 = a^2}$ — a circle of radius $a$, traced anticlockwise (the $y$-motion leads the $x$-motion by $90°$).</div>
<span class="lbl">Exam tip</span>
<div class="tip">State all three circle conditions (1:1 ratio, equal amplitudes, $90°$ phase). The examiner checks you know it is not always a circle.</div>
</div>

<p class="ref"><b>Reference.</b> Subrahmanyam & Brij Lal — Waves & Oscillations Ch-5 (graphical and analytical methods, uses).</p>
