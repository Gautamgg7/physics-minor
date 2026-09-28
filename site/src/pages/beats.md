---
layout: ../layouts/Docs.astro
title: 5 · Beats — Theory + 3 Solved PYQs
description: Collinear SHM superposition, phasor result, beat derivation, sonometer numeric with full steps. Easy theory then solved questions.
---

This page covers superposition of two collinear SHMs. It has three short theory sections, two figures, and three solved PYQs.

<h2>1. Same frequency → resultant amplitude and phase</h2>

Two vibrations along the same line with the same frequency join into one vibration. Like two people pushing a swing together: the pushes add.

For $y_1 = a_1\sin\omega t$ and $y_2 = a_2\sin(\omega t+\phi)$, the result is $y = A\sin(\omega t+\theta)$ with

<div class="formula"><b>Formula 1.</b> $A^2 = a_1^2 + a_2^2 + 2a_1a_2\cos\phi$, and $\tan\theta = \dfrac{a_2\sin\phi}{a_1 + a_2\cos\phi}$.</div>

<h3>Derivation in one line</h3>

Expand $y_2 = a_2\sin\omega t\cos\phi + a_2\cos\omega t\sin\phi$. Collect $\sin\omega t$ and $\cos\omega t$ terms, then match with $A\sin(\omega t+\theta) = A\sin\omega t\cos\theta + A\cos\omega t\sin\theta$. Compare coefficients, square and add to eliminate $\theta$: gives $A^2$. Divide to get $\tan\theta$.

<h3>Special cases</h3>

- $\phi = 0$: $A = a_1 + a_2$ (loudest).
- $\phi = \pi$: $A = |a_1-a_2|$ (quietest).
- $\phi = \pi/2$, equal $a$: $A = a\sqrt{2}$.

<h2>2. Different frequencies → beats + mine-gas use</h2>

Two nearly equal frequencies go in and out of step. Sound gets loud, then soft, then loud again. Each loud-soft cycle is one beat. Like two fans nearly in sync: the hum swells and fades.

For equal amplitudes $y_1 = a\sin\omega_1 t$, $y_2 = a\sin\omega_2 t$, the sum-to-product identity gives

$$y = 2a\cos\!\left(\frac{\Delta\omega\,t}{2}\right)\sin(\bar{\omega}t)$$

where $\bar{\omega} = (\omega_1+\omega_2)/2$ is the fast carrier and $\Delta\omega = \omega_1-\omega_2$ is the slow envelope. The amplitude $2a\cos(\Delta\omega t/2)$ swells to $2a$ and sinks to $0$. Intensity $\propto (\text{amplitude})^2$ peaks twice per envelope cycle, so

<div class="formula"><b>Formula 2.</b> Beat rate $f_{\text{beat}} = |f_1 - f_2|$ per second.</div>

<h3>Mine-gas detector (2022)</h3>

A reference tuning fork sounds with a resonator filled with mine air. Clean air gives no beats. Poisonous gas changes the air density, which shifts the resonator frequency by a tiny amount. Even a 1–2 Hz shift gives audible beats. So beats detect gas before instruments show it (the ear hears $|f_1-f_2|$ easily).

<div class="fig"><img src="/images/beats.svg" alt="Beats envelope: fast oscillation inside slow waxing-waning envelope"/><div class="cap">Fig 1. Eq. 2 drawn — fast $\sin(\bar{\omega}t)$ inside a slow $\cos(\Delta\omega t/2)$ envelope. Loudness peaks $|f_1-f_2|$ times per second.</div></div>

<h2>3. Sonometer frequency law</h2>

A stretched string sings higher when pulled tighter, shorter, thinner, or lighter. One formula joins all four effects.

<div class="formula"><b>Formula 3.</b> $n = \dfrac{1}{2l}\sqrt{\dfrac{T}{\mu}}$, with $\mu = \text{mass/length} = \rho\pi d^2/4$. Here $n$ = frequency (Hz), $l$ = length (m), $T$ = tension (N), $\mu$ = mass per length (kg/m), $\rho$ = density (kg/m$^3$), $d$ = diameter (m).</div>

<h3>Ratio form</h3>

Drop constants ($\pi/4$ and $1/2$ cancel in ratios): $n \propto \sqrt{T}/(l\,d\sqrt{\rho})$. For two strings: $\dfrac{n_1}{n_2} = \dfrac{l_2}{l_1}\sqrt{\dfrac{T_1}{T_2}}\dfrac{d_2}{d_1}\sqrt{\dfrac{\rho_2}{\rho_1}}$.

<div class="fig"><img src="/images/sonometer.svg" alt="Sonometer wire of length l over bridges with pulley weights giving tension T"/><div class="cap">Fig 2. Sonometer setup — wire length $l$ between bridges, tension $T$ from weights, frequency $n$ matched to a fork.</div></div>

<hr/>

<h2>Solved PYQs</h2>

<div class="pyq">
<span class="qno">S5-Q1</span><p class="qtext">Find the resultant amplitude and phase due to superposition of $y_1 = 3\sin(50\pi t)$ cm and $y_2 = \sqrt{3}\cos(50\pi t)$ cm.</p>
<span class="yr">2019</span><span class="yr">2023</span><span class="rep">×2</span>
<span class="lbl">Recall</span>
<div class="recall">Two same-frequency collinear SHMs, $a_1 = 3$ cm, $a_2 = \sqrt{3}$ cm, phase gap $\pi/2$. Use Formula 1. First convert the cosine to a sine so the phase gap is clear.</div>
<span class="lbl">Steps</span>
<ol class="steps">
<li>$y_2 = \sqrt{3}\cos(50\pi t) = \sqrt{3}\sin(50\pi t + \pi/2)$ (reason: $\cos x = \sin(x+\pi/2)$, so $\phi = \pi/2$).</li>
<li>$A^2 = 3^2 + (\sqrt{3})^2 + 2(3)(\sqrt{3})\cos(\pi/2) = 9 + 3 + 0 = 12$ (reason: $\cos 90° = 0$ kills the cross term).</li>
<li>$A = \sqrt{12} = 2\sqrt{3} \approx 3.46$ cm.</li>
<li>$\tan\theta = (\sqrt{3}\sin 90°)/(3 + \sqrt{3}\cos 90°) = \sqrt{3}/3 = 1/\sqrt{3}$, so $\theta = 30°$ (first quadrant, both numerator and denominator positive).</li>
</ol>
<span class="lbl">Answer</span>
<div class="ans">$\boxed{A = 2\sqrt{3}\text{ cm} \approx 3.46\text{ cm},\quad \theta = 30°,\quad y = 2\sqrt{3}\sin(50\pi t + 30°)\text{ cm}}$.</div>
<span class="lbl">Exam tip</span>
<div class="tip">Asked ×2. Always show the sin-shift step (i). Without it the phase is wrong.</div>
</div>

<div class="pyq">
<span class="qno">S5-Q2</span><p class="qtext">What are beats? How are they applied in the determination of poisonous gases in mines?</p>
<span class="yr">2022</span>
<span class="lbl">Recall</span>
<div class="recall">Beats = periodic loud-soft pattern from two close frequencies. Beat rate $f_{\text{beat}} = |f_1 - f_2|$. A small frequency shift in a resonator produces audible beats.</div>
<span class="lbl">Steps</span>
<ol class="steps">
<li>Define beats: periodic loud-soft pattern from superposition of two close frequencies (reason: Eq. 2 above).</li>
<li>State the beat formula $f_{\text{beat}} = |f_1 - f_2|$ per second.</li>
<li>Mine use: a reference tuning fork drives a resonator filled with mine air (reason: density of air sets the resonator frequency).</li>
<li>Poisonous gas changes the air density, shifts the resonator frequency by a small amount, and the ear hears $|f_1-f_2|$ beats even at 1–2 Hz shift (reason: ear resolves beat rate, not absolute pitch).</li>
</ol>
<span class="lbl">Answer</span>
<div class="ans">Beats are the periodic swell-and-fade pattern heard when two close frequencies superpose. $\boxed{f_{\text{beat}} = |f_1 - f_2|\text{ per second}}$. For mine gas: a reference fork and a gas-filled resonator give beats as soon as the gas density changes; even a 1–2 Hz shift is heard.</div>
<span class="lbl">Exam tip</span>
<div class="tip">The question has two halves. Never skip the gas part — it carries separate marks.</div>
</div>

<div class="pyq">
<span class="qno">S5-Q3</span><p class="qtext">Sonometer numerical: tensions in ratio $8:1$, lengths $36:35$, diameters $4:1$, densities $1:2$; higher pitch $360$ Hz. Find beats produced.</p>
<span class="yr">2023</span>
<span class="lbl">Recall</span>
<div class="recall">Ratio form: $n_1/n_2 = (l_2/l_1)\sqrt{T_1/T_2}\,(d_2/d_1)\sqrt{\rho_2/\rho_1}$. Then $f_{\text{beat}} = |n_1 - n_2|$.</div>
<span class="lbl">Steps</span>
<ol class="steps">
<li>$n_1/n_2 = (l_2/l_1)\sqrt{T_1/T_2}\,(d_2/d_1)\sqrt{\rho_2/\rho_1}$ (reason: ratio form of Formula 3).</li>
<li>$l_2/l_1 = 35/36$ (reason: invert $36:35$), $\sqrt{T_1/T_2} = \sqrt{8} = 2\sqrt{2}$, $d_2/d_1 = 1/4$, $\sqrt{\rho_2/\rho_1} = \sqrt{2}$.</li>
<li>Multiply: $n_1/n_2 = (35/36)\times 2\sqrt{2}\times(1/4)\times\sqrt{2} = (35/36)\times(2\times 2/4) = (35/36)\times 1 = 35/36$ (reason: $\sqrt{2}\times\sqrt{2} = 2$).</li>
<li>$n_1/n_2 < 1$, so $n_2$ is higher; $n_2 = 360$ Hz and $n_1 = 360\times 35/36 = 10\times 35 = 350$ Hz (reason: $360/36 = 10$).</li>
<li>Beats $= |360 - 350| = 10$ per second.</li>
</ol>
<span class="lbl">Answer</span>
<div class="ans">$\boxed{n_1 = 350\text{ Hz},\ n_2 = 360\text{ Hz},\ \text{beats} = 10/\text{s}}$.</div>
<span class="lbl">Exam tip</span>
<div class="tip">Invert the length ratio ($l_2/l_1$) and the diameter ratio ($d_2/d_1$) — that is the classic trap.</div>
</div>

<p class="ref"><b>Reference.</b> Subrahmanyam & Brij Lal — Waves & Oscillations Ch-4 (superposition, beats, sonometer).</p>
