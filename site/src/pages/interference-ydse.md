---
layout: ../layouts/Docs.astro
title: 8A · Interference — YDSE, Coherence, Energy, Fringe Shift
description: Coherence conditions, why two sources fail, full YDSE intensity derivation, fringe width and equal-width proof, energy conservation, two solved numerics.
---

YDSE means Young's double-slit experiment. One lamp lights two narrow slits. The two beams overlap on a screen and give equal bright and dark stripes. Daily example: two water ripples crossing in a pond.

<div class="formula"><b>Formula 1.</b> Resultant intensity in YDSE — $I = I_1 + I_2 + 2\sqrt{I_1 I_2}\cos\delta$</div>

<div class="formula"><b>Formula 2.</b> Fringe width and positions — $y_n = \dfrac{n\lambda D}{d}$ (bright), $\beta = \dfrac{\lambda D}{d}$</div>

Here $I_1$, $I_2$ = intensities from slit 1 and slit 2. $\delta$ = phase difference between the two beams. $\lambda$ = wavelength of light. $d$ = slit separation. $D$ = slit-to-screen distance. $y_n$ = position of the $n$-th bright fringe from the centre. $\beta$ = fringe width (one full stripe spacing).

<div class="fig"><img src="/images/ydse.svg" alt="Young double slit geometry with slit separation d, screen distance D, fringe width beta" /><div class="cap">Fig: YDSE — two slits ($d$ apart) send waves to a screen ($D$ away); path difference $d\sin\theta$ gives $I(\theta)$ in Eq. (1).</div></div>

## How YDSE works (short derivation)

**Step 1 — Coherent waves.** At a screen point, the two displacements are $y_1 = a_1\sin\omega t$ and $y_2 = a_2\sin(\omega t + \delta)$. Same $\omega$ and fixed $\delta$ make them coherent.

**Step 2 — Add them.** By superposition, $y = y_1 + y_2 = A\sin(\omega t + \phi)$ with $A^2 = a_1^2 + a_2^2 + 2a_1 a_2\cos\delta$.

**Step 3 — Amplitude → intensity.** Light intensity $I \propto A^2$, so with $I_1 \propto a_1^2$, $I_2 \propto a_2^2$ we get Eq. (1): $I = I_1 + I_2 + 2\sqrt{I_1 I_2}\cos\delta$. The $\cos\delta$ term is the interference term — it is missing for incoherent light.

**Step 4 — Phase from path.** Path difference $\Delta = S_2P - S_1P = d\sin\theta \approx dy/D$ for small angles. Phase $\delta = (2\pi/\lambda)\Delta$.

**Step 5 — Bright/dark.** Bright (max): $\cos\delta = +1$, so $\delta = 2n\pi$, $\Delta = n\lambda$, positions $y_n = n\lambda D/d$. Dark (min): $\cos\delta = -1$, so $\delta = (2n+1)\pi$, $\Delta = (2n+1)\lambda/2$, positions $y_n' = (2n+1)\lambda D/2d$.

**Step 6 — Fringe width.** $\beta = y_{n+1} - y_n = \lambda D/d$. Dark spacing is the same: $y_{n+1}' - y_n' = \lambda D/d$. So bright and dark bands have equal width.

**Unit check:** $[\lambda D/d] = (L \cdot L)/L = L$, correct for $\beta$. Limit: $d \to 0$ gives $\beta \to \infty$ (slits merge, no stripes — sensible).

**Plot:** $I$ vs $y$ is a $\cos^2$ curve — peaks $I_{max} = I_1+I_2+2\sqrt{I_1I_2}$ (equals $4I_0$ if $I_1 = I_2 = I_0$), valleys $I_{min} = I_1+I_2-2\sqrt{I_1I_2}$ (zero if equal). Draw equal-height peaks, equal spacing $\beta$.

**Trap:** $\beta$ uses $d$ (slit gap), not slit width. Do not mix them.

## Solved PYQs

<div class="pyq">
<span class="qno">Q1</span><p class="qtext">What is interference of light? State the fundamental conditions for a steady observable interference pattern.</p>
<span class="yr">2019</span>

<span class="lbl">Recall</span>
<div class="recall">Interference = redistribution of intensity by superposition of two coherent waves. Without coherence the $\cos\delta$ term averages to zero.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Define interference: when two coherent waves overlap, intensity varies point to point — bright and dark fringes appear.</li>
<li>Condition (i) — coherent sources: same frequency and a constant phase difference, else $\delta$ jumps $\sim 10^8$ times per second and the eye sees only the average $I_1+I_2$.</li>
<li>Condition (ii) — comparable intensities, else minima stay bright ($I_{min} = (\sqrt{I_1}-\sqrt{I_2})^2$ large) and contrast is poor.</li>
<li>Condition (iii) — same state of polarization, because perpendicular vibrations do not interfere and intensities just add.</li>
<li>Condition (iv) — narrow slits close together and (ideally) monochromatic light, because wide or polychromatic sources overlap many patterns and wash fringes out.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">Steady fringes need coherence + comparable amplitudes + same polarization + narrow slits (monochromatic for sharp fringes). $\boxed{\text{4 conditions: coherence, equal amplitude, same polarization, narrow slits (monochromatic)}}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">Write the 4 conditions as 4 numbered lines — examiners give one mark per condition.</div>
</div>

<div class="pyq">
<span class="qno">Q2</span><p class="qtext">"Two separate sources of light cannot produce interference of light" — explain.</p>
<span class="yr">2022</span>

<span class="lbl">Recall</span>
<div class="recall">Atoms emit in short bursts ($\sim 10^{-8}$ s). Each burst has a random starting phase, so two independent lamps have a random phase difference.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Two independent lamps = billions of independent atoms, each emitting in bursts of $\sim 10^{-8}$ s with random starting phase.</li>
<li>So the phase difference $\delta(t)$ between the lamps changes randomly $\sim 10^8$ times per second — not coherent.</li>
<li>Eye or screen averages over milliseconds, so $\langle\cos\delta\rangle = 0$ and observed $I = I_1 + I_2$ — uniform light, no fringes.</li>
<li>Cure: take ONE source and split it — division of wavefront (YDSE, biprism) or division of amplitude (thin films, Newton rings) — so both beams share the same random jumps and $\delta$ stays fixed.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\text{Two separate sources are incoherent; split one source in two to get steady fringes.}}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">Draw the contrast: independent sources (random $\delta$) vs split source (fixed $\delta$). One diagram earns full marks.</div>
</div>

<div class="pyq">
<span class="qno">Q3</span><p class="qtext">Young's double slit experiment: coherent waves, resultant intensity pattern, conditions of maxima and minima (both phase and path), and the intensity distribution plot.</p>
<span class="yr">2019</span>

<span class="lbl">Recall</span>
<div class="recall">Eqs. (1)–(2): $I = I_1+I_2+2\sqrt{I_1I_2}\cos\delta$ and $\beta = \lambda D/d$. Bright when $\cos\delta = +1$, dark when $\cos\delta = -1$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Take coherent waves $a_1\sin\omega t$ and $a_2\sin(\omega t+\delta)$ — coherence assumed else there is no steady $\delta$.</li>
<li>Derive $I = I_1+I_2+2\sqrt{I_1I_2}\cos\delta$ using superposition and $I \propto A^2$.</li>
<li>Maxima: $\cos\delta = +1$, so $\delta = 2n\pi$ (phase) and $\Delta = n\lambda$ (path); $I_{max} = (\sqrt{I_1}+\sqrt{I_2})^2$.</li>
<li>Minima: $\cos\delta = -1$, so $\delta = (2n+1)\pi$ (phase) and $\Delta = (2n+1)\lambda/2$ (path); $I_{min} = (\sqrt{I_1}-\sqrt{I_2})^2$.</li>
<li>Plot $I$ vs $y$: a $\cos^2$ curve with equal peaks spaced $\beta = \lambda D/d$, touching zero if $I_1 = I_2$.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{I = I_1+I_2+2\sqrt{I_1I_2}\cos\delta;\quad \text{bright }\Delta = n\lambda;\quad \text{dark }\Delta = (2n+1)\lambda/2}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">Always give BOTH the phase form ($\delta$) and the path form ($\Delta$) — the paper asks for both and missing one loses a mark.</div>
</div>

<div class="pyq">
<span class="qno">Q4</span><p class="qtext">State the conditions for a steady interference pattern. Find the fringe width in YDSE and prove that the dark and bright bands are of equal width.</p>
<span class="yr">2024</span>

<span class="lbl">Recall</span>
<div class="recall">Steady-pattern conditions from Q1 + bright positions $y_n = n\lambda D/d$ and dark positions $y_n' = (2n+1)\lambda D/2d$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>State the 4 steady-pattern conditions briefly: coherence, comparable amplitudes, same polarization, narrow slits (monochromatic).</li>
<li>Path difference $\Delta = dy/D$ and phase $\delta = 2\pi\Delta/\lambda$ from small-angle geometry.</li>
<li>Bright positions: $y_n = n\lambda D/d$, so $\beta_{bright} = y_{n+1}-y_n = \lambda D/d$.</li>
<li>Dark positions: $y_n' = (2n+1)\lambda D/2d$, so $\beta_{dark} = y_{n+1}'-y_n' = \lambda D/d$.</li>
<li>Hence $\beta_{bright} = \beta_{dark} = \lambda D/d$ — equal width proved.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\beta = \dfrac{\lambda D}{d}\ \text{for bright and dark alike.}}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">The proof is two explicit subtractions — write both out, never say "similarly" without showing.</div>
</div>

<div class="pyq">
<span class="qno">Q5</span><p class="qtext">What are constructive and destructive interference? Does destructive interference violate the law of conservation of energy?</p>
<span class="yr">2022</span><span class="yr">2023</span><span class="rep">×2</span>

<span class="lbl">Recall</span>
<div class="recall">Constructive = in phase ($\delta = 2n\pi$); destructive = out of phase ($\delta = (2n+1)\pi$). The average $\langle\cos\delta\rangle = 0$ over one fringe.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Constructive: waves in step, amplitudes add — $I_{max} = I_1+I_2+2\sqrt{I_1I_2}$ (equals $4I_0$ if $I_1=I_2=I_0$).</li>
<li>Destructive: waves opposite, amplitudes subtract — $I_{min} = I_1+I_2-2\sqrt{I_1I_2}$ (zero if equal).</li>
<li>Energy is not destroyed: average intensity over one fringe pair = $I_1 + I_2$ (the $\cos\delta$ term averages to zero).</li>
<li>So energy is REDISTRIBUTED — taken from dark places and piled onto bright places; total stays $I_1+I_2$ times area.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">No violation. Energy is redistributed, not destroyed. $\boxed{\langle I\rangle = I_1+I_2}$ — over a full fringe, dark loses and bright gains; total is the same.</div>

<span class="lbl">Exam tip</span>
<div class="tip">This is a repeat (×2). Memorise one line: "dark loses, bright gains, total same."</div>
</div>

<div class="pyq">
<span class="qno">Q6</span><p class="qtext">In YDSE the slit separation $d = 0.1$ mm, the fringe width $\beta = 5$ mm, and the screen distance $D = 1$ m. Find the wavelength $\lambda$.</p>
<span class="yr">2024</span>

<span class="lbl">Recall</span>
<div class="recall">From $y_n = n\lambda D/d$ the spacing is $\beta = \lambda D/d$, so $\lambda = \beta d/D$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Convert to metres: $d = 0.1\ \text{mm} = 1.0\times 10^{-4}$ m; $\beta = 5\ \text{mm} = 5.0\times 10^{-3}$ m; $D = 1$ m.</li>
<li>Formula: from $\beta = \lambda D/d$, rearrange to $\lambda = \beta d/D$.</li>
<li>Substitute: $\lambda = (5.0\times 10^{-3})(1.0\times 10^{-4})/1 = 5.0\times 10^{-7}$ m.</li>
<li>Convert for sense: $5.0\times 10^{-7}$ m $= 500$ nm — green light, inside the visible band (400–700 nm).</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\lambda = 5\times 10^{-7}\ \text{m} = 500\ \text{nm}}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">Always convert mm to m before multiplying — most errors come from mixing mm and m in one line.</div>
</div>

<div class="pyq">
<span class="qno">Q7</span><p class="qtext">In YDSE a glass plate ($\mu_g = 1.5$, thickness $t_g = 12\times 10^{-5}$ mm) is placed over one slit and a diamond plate ($\mu_d = 2.5$) over the other. The central fringe does not shift. Find the thickness of the diamond plate.</p>
<span class="yr">2023</span>

<span class="lbl">Recall</span>
<div class="recall">A plate of index $\mu$ and thickness $t$ adds extra path $(\mu-1)t$ and shifts fringes by $(\mu-1)tD/d$ toward that side.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Glass adds extra path $(\mu_g-1)t_g$ on the slit-1 side; diamond adds $(\mu_d-1)t_d$ on the slit-2 side.</li>
<li>No shift of central fringe means the two extra paths cancel: $(\mu_g-1)t_g = (\mu_d-1)t_d$.</li>
<li>Solve for $t_d = (\mu_g-1)t_g/(\mu_d-1) = (1.5-1)(12\times 10^{-5})/(2.5-1)$.</li>
<li>Arithmetic: numerator $= 0.5 \times 12 \times 10^{-5} = 6 \times 10^{-5}$; divided by $1.5$ gives $t_d = 4 \times 10^{-5}$ mm.</li>
<li>Sense: diamond bends more ($\mu$ larger), so a thinner piece balances the glass — $4 < 12$, sensible.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{t_d = 4\times 10^{-5}\ \text{mm}}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">"No shift" always means "extra paths equal". Write that line first, then substitute — that ordering is what gets the first mark.</div>
</div>

<div class="pyq">
<span class="qno">Q8</span><p class="qtext">What is meant by interference fringes? Give the theory of interference fringes.</p>
<span class="yr">2019</span><span class="yr">2022</span><span class="yr">2023</span><span class="yr">2024</span><span class="rep">×4</span>

<span class="lbl">Recall</span>
<div class="recall">Fringes = the alternate bright and dark bands on the screen. Theory: $I = I_1+I_2+2\sqrt{I_1I_2}\cos\delta$ with $\delta = 2\pi\Delta/\lambda$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Define fringes: when two coherent beams overlap, the screen shows alternate bright and dark stripes — these stripes are the interference fringes [because intensity varies point to point].</li>
<li>Write the intensity law: $I = I_1+I_2+2\sqrt{I_1I_2}\cos\delta$, where $\delta$ is the phase difference at each screen point [superposition, Eqs. (1)–(2)].</li>
<li>Connect phase to position: $\delta = (2\pi/\lambda)\Delta$ and $\Delta = dy/D$, so $\delta$ grows linearly with screen position $y$ [small-angle geometry].</li>
<li>Bright fringes where $\cos\delta = +1$: $\Delta = n\lambda$, positions $y_n = n\lambda D/d$ [constructive].</li>
<li>Dark fringes where $\cos\delta = -1$: $\Delta = (2n+1)\lambda/2$, positions $y_n' = (2n+1)\lambda D/2d$ [destructive].</li>
<li>Spacing: $\beta = y_{n+1}-y_n = \lambda D/d$ — equal bright and dark widths, proved in Q4.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\text{Fringes = alternate bright/dark bands; } y_n = n\lambda D/d,\ \beta = \lambda D/d.}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">Asked ×4 — the most repeated 2-marker on this page. Define fringes in one line, then write the $y_n$ and $\beta$ formulas.</div>
</div>

<div class="pyq">
<span class="qno">Q9</span><p class="qtext">In Young's double slit experiment, the screen is placed $2$ m from the two sources separated by $1.5$ mm. The interference fringes are obtained with monochromatic source of wavelength $6000$ Å. Find the fringe width.</p>
<span class="yr">2019</span>

<span class="lbl">Recall</span>
<div class="recall">$\beta = \lambda D/d$ — convert everything to metres first.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Given: $D = 2$ m; $d = 1.5$ mm $= 1.5\times 10^{-3}$ m; $\lambda = 6000$ Å $= 6000\times 10^{-10}$ m $= 6.0\times 10^{-7}$ m.</li>
<li>Formula: $\beta = \lambda D/d$ [Eq. (2)].</li>
<li>Substitute: $\beta = (6.0\times 10^{-7}\times 2)/(1.5\times 10^{-3}) = 12.0\times 10^{-7}/1.5\times 10^{-3}$.</li>
<li>Arithmetic: $12.0/1.5 = 8.0$; $10^{-7}/10^{-3} = 10^{-4}$; so $\beta = 8.0\times 10^{-4}$ m $= 0.8$ mm.</li>
<li>Sense: $0.8$ mm spacing is easily visible — about 12 fringes per cm.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\beta = 8.0\times 10^{-4}\ \text{m} = 0.8\ \text{mm}}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">Convert Å to m ($1$ Å $= 10^{-10}$ m) and mm to m before dividing — the paper mixes all three units deliberately.</div>
</div>

<p class="ref"><b>Reference.</b> Brij Lal, Subrahmanyam &amp; Avadhanulu — Optics Ch-13 (coherence), Ch-14 (YDSE, fringe shift, energy); Ajoy Ghatak — Optics Ch-13.</p>