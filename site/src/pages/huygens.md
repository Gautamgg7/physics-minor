---
layout: ../layouts/Docs.astro
title: 7 · Huygens Principle — Theory + 1 Solved PYQ (×3)
description: Wavefront types, three Huygens rules, refraction and reflection proofs. Easy theory then solved question.
---

This page covers wavefronts and Huygens' construction. It has three short theory sections, two figures, and one solved PYQ (asked three times).

<h2>1. Wavefront: definition + three types</h2>

Freeze a wave and mark all points swinging exactly together (same phase). The surface joining them is the wavefront. Light is an EM wave (from Maxwell), so it has wavefronts.

A wavefront is a surface of constant phase, always perpendicular to the rays.

<h3>Three types</h3>

1. Spherical — point source nearby. Ripples on a pond after a stone drop; rays point outward radially.
2. Plane — source very far (sunlight). Parallel rays, flat fronts. A small piece of a big sphere looks flat (curvature $\approx 1/R \to 0$ as $R \to \infty$).
3. Cylindrical — line source (long slit). Tube-shaped fronts spreading sideways.

<div class="fig"><img src="/images/huygens.svg" alt="Huygens secondary wavelets spreading from points on a wavefront"/><div class="cap">Fig 1. Each point of a wavefront re-radiates; the forward envelope is the next front.</div></div>

<h2>2. Huygens principle: three rules</h2>

A construction rule that builds tomorrow's wavefront from today's one, using small imaginary ripples.

The three rules:

1. Every point on a wavefront acts as a fresh source of secondary wavelets spreading at the wave speed $v$.
2. The forward tangent surface (envelope) of these wavelets after time $t$ is the new wavefront.
3. Wavelet amplitude is maximum forward and falls to zero backward (added by Stokes; explains why light goes forward only).

What it explains: reflection, refraction (Snell law, Section 3), interference, diffraction — qualitatively. (Polarization needed Fresnel's transverse-wave theory; Huygens' original longitudinal picture could not explain it.)

<div class="callout"><b>Note.</b> Rule (3) is what kills the backward wave. Always mention it.</div>

<h2>3. Refraction proof (Snell law) + reflection sketch</h2>

Snell law from wavelet speeds: a slower medium bends the front.

<div class="formula"><b>Formula 1.</b> $\dfrac{\sin i}{\sin r} = \dfrac{v_1}{v_2} = \dfrac{n_2}{n_1}$, since $v = c/n$.</div>

<h3>Refraction proof</h3>

Plane front AB hits the boundary at angle of incidence $i$. Point A enters medium 2 first and sends a wavelet of radius $v_2 t$; point B still travels in medium 1 covering $v_1 t$ before entering. The new front is the tangent from B's position to A's wavelet (Huygens envelope). From the two right triangles sharing the boundary intercept $L$: $\sin i = v_1 t/L$ and $\sin r = v_2 t/L$. Divide ($t$ and $L$ cancel) to get $\sin i/\sin r = v_1/v_2 = n_2/n_1$.

<h3>Reflection sketch</h3>

Same construction with one medium: incident front AB, A reflects first with wavelet $vt$, B covers $vt$ along the surface. Triangles are congruent (same speed $v$ both sides), so angle of incidence = angle of reflection.

<div class="fig"><img src="/images/huygens-snells.svg" alt="Huygens refraction construction with incident front, refracted front, angles i and r, speeds v1 and v2"/><div class="cap">Fig 2. Eq. 1 drawn — incident front spans $v_1 t$, refracted wavelet spans $v_2 t$; shared intercept $L$ gives $\sin i/\sin r = v_1/v_2$.</div></div>

<hr/>

<h2>Solved PYQ</h2>

<div class="pyq">
<span class="qno">S7-Q1</span><p class="qtext">State (and explain) Huygens' principle. <i>(2024 couples it with "dual character of light" — that half is NOT in your syllabus)</i></p>
<span class="yr">2019</span><span class="yr">2022</span><span class="yr">2024</span><span class="rep">×3</span>
<span class="lbl">Recall</span>
<div class="recall">A wavefront is the surface of constant phase. Huygens' construction has three rules: every point is a secondary source, the forward envelope is the new wavefront, and backward amplitude is zero (Stokes).</div>
<span class="lbl">Steps</span>
<ol class="steps">
<li>Define wavefront + give one type (e.g. spherical for a point source) (reason: sets up what the rules act on).</li>
<li>State rule 1: every point on the wavefront is a fresh source of secondary wavelets at speed $v$ (reason: needed to build the new front).</li>
<li>State rule 2: the forward envelope of these wavelets after time $t$ is the new wavefront (reason: defines where the wave is at the next instant).</li>
<li>State rule 3: amplitude is maximum forward, zero backward (Stokes) (reason: kills the back-wave that geometry would otherwise allow).</li>
<li>Draw secondary wavelets + forward envelope (reason: the question asks to "explain").</li>
<li>One use: derive Snell law $n_1\sin i = n_2\sin r$ from wavelet speeds $v_1$, $v_2$ (reason: shows you can apply the principle).</li>
</ol>
<span class="lbl">Answer</span>
<div class="ans">Wavefront = surface of constant phase. Rules: (i) every point is a secondary source, (ii) forward envelope is the new wavefront, (iii) no backward amplitude (Stokes). Use: Snell law $n_1\sin i = n_2\sin r$ from the envelope construction. $\boxed{\text{3 rules + envelope diagram} + n_1\sin i = n_2\sin r}$.</div>
<span class="lbl">Exam tip</span>
<div class="tip">Asked ×3. In 2024 the paper couples it with "dual character of light" — that half is out of syllabus. Answer only the Huygens part and add one line "wave side is in syllabus, particle side is not".</div>
</div>

<p class="ref"><b>Reference.</b> Brij Lal, Subrahmanyam & Avadhanulu — A Textbook of Optics Ch-12; Ajoy Ghatak Ch-2 (wavefronts).</p>
