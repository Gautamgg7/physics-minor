---
layout: ../layouts/Docs.astro
title: 8E · Interference — Thin Films, Stokes, Haidinger & Fizeau
description: Parallel-film interference in reflected and transmitted light, Stokes relations, wedge films, Haidinger and Fizeau fringes, soap-film numeric, all solved.
---

A soap bubble shows colours without any pigment. Light reflects off the front surface of the thin film and off the back surface; the two reflections interfere. Film thickness decides which colour survives. This is interference by division of amplitude.

<div class="formula"><b>Formula 1.</b> Parallel film, reflected light — bright: $2\mu t\cos r = (2n+1)\dfrac{\lambda}{2}$; dark: $2\mu t\cos r = n\lambda$</div>

<div class="formula"><b>Formula 2.</b> Parallel film, transmitted light — bright: $2\mu t\cos r = n\lambda$; dark: $2\mu t\cos r = (2n+1)\dfrac{\lambda}{2}$ (opposite of reflected)</div>

Here $\mu$ = film index, $t$ = film thickness, $r$ = angle of refraction inside the film, $\lambda$ = wavelength. $2\mu t\cos r$ = optical path difference between the two reflections.

## Why reflected and transmitted are opposite (Stokes' treatment)

**Step 1 — Two reflections.** In reflected light, ray 1 bounces off the top surface (air→film: rarer→denser) and ray 2 bounces off the bottom surface (film→air: denser→rarer, after crossing the film twice).

**Step 2 — One flip.** By Stokes' rule, reflection at the rarer→denser face flips the phase by $\pi$ (= $\lambda/2$ path); reflection at the denser→rarer face flips nothing. So the reflected pair differs by one $\lambda/2$.

**Step 3 — Stokes relations.** Let $r$, $t$ be the amplitude reflection/transmission coefficients going in, and $r'$, $t'$ coming back out. Reversing any ray must give back the original beam, which forces $r = -r'$ (the minus IS the $\pi$ flip) and $tt' + r^2 = 1$ (energy conserved). These are the Stokes relations.

**Step 4 — Effective path.** Geometric round trip $2\mu t\cos r$ plus the one flip: $\Delta = 2\mu t\cos r + \lambda/2$. Bright when $\Delta = n\lambda$, dark when $\Delta = (2n+1)\lambda/2$ — giving Formula 1.

**Step 5 — Transmitted light.** Both transmitted rays cross faces in the same sense with no net flip, so $\Delta = 2\mu t\cos r$ with no added $\lambda/2$ — bright and dark swap (Formula 2). Energy check: bright-in-reflection + bright-in-transmission would exceed the input; the swap keeps total = input ✓.

**Unit check:** $[2\mu t\cos r] = L$ ✓. Limit: $t \to 0$ gives $\Delta = \lambda/2$ (reflected) = dark — an extremely thin film looks dark in reflection, which is why a breaking soap film goes black before it pops.

**Trap:** the flip happens at the RARER→DENSER face only. Count flips before writing any condition.

## Wedge-shaped film

If the film thickness grows linearly ($t = x\tan\alpha \approx x\alpha$ for small wedge angle $\alpha$), fringes of equal thickness appear — each fringe marks one contour of constant $t$. Dark fringes (reflected): $2\mu t = n\lambda$. Spacing between adjacent dark fringes:

<div class="formula"><b>Formula 3.</b> Wedge fringe width — $\beta = \dfrac{\lambda}{2\mu\alpha}$ ($\alpha$ in radians).</div>

Straight, parallel, equally spaced fringes — the air wedge between two glass plates is the standard lab example.

## Haidinger fringes (equal inclination)

With a parallel film viewed in reflected light, $2\mu t\cos r = $ constant decides brightness. For fixed $t$ and $\lambda$, each angle $r$ gives one ring: fringes of EQUAL INCLINATION. Seen by the naked eye (or a telescope focused at infinity) as concentric circular rings centred on the normal — these are Haidinger fringes. Each ring = one value of $r$.

## Fizeau fringes (equal thickness)

With a film of varying thickness viewed at near-normal incidence, $2\mu t = $ constant decides brightness: fringes of EQUAL THICKNESS. Each fringe traces a contour of constant $t$. Newton rings are the circular example; wedge fringes are the straight example. These are Fizeau fringes.

## Solved PYQs

<div class="pyq">
<span class="qno">Q1</span><p class="qtext">Explain the formation of interference fringes due to a thin film when observed in reflected light.</p>
<span class="yr">2022</span><span class="yr">2023</span><span class="rep">×2</span>

<span class="lbl">Recall</span>
<div class="recall">Two reflections (top: flip; bottom: no flip) + round trip $2\mu t\cos r$ give $\Delta = 2\mu t\cos r + \lambda/2$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Draw the film: ray hits the top face — part reflects (ray 1, rarer→denser: $\pi$ flip), part enters.</li>
<li>The entered ray crosses the film, reflects at the bottom face (denser→rarer: no flip), and exits as ray 2.</li>
<li>Optical path between them: $2\mu t\cos r$ for the down-and-up trip at refraction angle $r$.</li>
<li>Add the one Stokes flip: effective $\Delta = 2\mu t\cos r + \lambda/2$.</li>
<li>Bright: $\Delta = n\lambda \Rightarrow 2\mu t\cos r = (2n+1)\lambda/2$; dark: $2\mu t\cos r = n\lambda$ — Formula 1.</li>
<li>Note the division-of-amplitude point: one parent ray split by partial reflection, so the pair is coherent.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\text{Reflected: bright }2\mu t\cos r = (2n+1)\lambda/2,\ \text{dark }2\mu t\cos r = n\lambda}$ — one $\lambda/2$ flip at the top face.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Draw the two rays with the flip marked $\pi$ on ray 1 only — the diagram carries the flip mark.</div>
</div>

<div class="pyq">
<span class="qno">Q2</span><p class="qtext">Discuss Stokes' treatment of phase change on reflection.</p>
<span class="yr">2022</span><span class="yr">2023</span><span class="rep">×2</span>

<span class="lbl">Recall</span>
<div class="recall">Reversibility forces $r = -r'$ (the $\pi$ flip) and $tt' + r^2 = 1$ (energy).</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Set up: amplitude $a$ hits a surface; reflected $ar$, transmitted $at$; reversed coefficients $r'$, $t'$.</li>
<li>Reverse the two outgoing rays and demand the original beam $a$ reappears with nothing going the other way.</li>
<li>Collecting amplitudes gives $r^2 + tt' = 1$ and $r + r' = 0$ (for a lossless surface).</li>
<li>Read the physics: $r = -r'$ means reflection one way flips phase by $\pi$ relative to the other way — the Stokes $\lambda/2$ rule.</li>
<li>$tt' + r^2 = 1$ is energy conservation at the surface (reflected + transmitted fractions = 1).</li>
<li>Apply: in Newton rings / thin films the rarer→denser reflection carries the flip, the denser→rarer one does not — hence the dark centre.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{r = -r',\qquad tt' + r^2 = 1}$ — the minus sign is the $\pi$ phase flip on rarer→denser reflection.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Write both relations boxed, then state in words which reflection flips — relation plus application = full marks.</div>
</div>

<div class="pyq">
<span class="qno">Q3</span><p class="qtext">What are Haidinger fringes? Explain the formation of these fringes.</p>
<span class="yr">2023</span>

<span class="lbl">Recall</span>
<div class="recall">Equal-inclination fringes: fixed $t$, varying $r$; rings centred on the normal, seen at infinity.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Take a parallel film ($t$ fixed) in reflected light: brightness follows $2\mu t\cos r + \lambda/2$.</li>
<li>For fixed $t$ and $\lambda$, each angle of refraction $r$ gives a fixed $\Delta$ — so each direction carries its own bright/dark state.</li>
<li>Rays with the same $r$ form a cone about the normal; on a screen at infinity (telescope / relaxed eye) each cone is one circular ring.</li>
<li>Hence concentric rings centred on the normal — fringes of equal inclination = Haidinger fringes.</li>
<li>Contrast with Fizeau: Haidinger needs a parallel film + varied angle; Fizeau needs a wedge film + fixed (normal) angle.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\text{Haidinger = equal-inclination rings from a parallel film; each ring is one angle }r.}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">One line separates the pair: "Haidinger varies the angle, Fizeau varies the thickness."</div>
</div>

<div class="pyq">
<span class="qno">Q4</span><p class="qtext">Explain the formation of Fizeau fringes.</p>
<span class="yr">2023</span>

<span class="lbl">Recall</span>
<div class="recall">Equal-thickness fringes: fixed (normal) incidence, varying $t$; each fringe = one contour of constant $t$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Take a film of varying thickness (wedge, or Newton-rings air film) at near-normal incidence: brightness follows $2\mu t + \lambda/2$ (reflected).</li>
<li>For fixed $\lambda$ and normal incidence, each thickness $t$ gives a fixed $\Delta$ — so each contour of constant $t$ is one fringe.</li>
<li>Examples: Newton rings (circular contours of the air film), wedge fringes (straight parallel lines, $\beta = \lambda/2\mu\alpha$).</li>
<li>These are fringes of equal thickness = Fizeau fringes — localized at the film surface (seen by focusing on the film).</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\text{Fizeau = equal-thickness fringes; each fringe traces constant }t\text{ (Newton rings, wedge lines).}}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">Name both examples (Newton rings + wedge) — examiners expect the pair.</div>
</div>

<div class="pyq">
<span class="qno">Q5</span><p class="qtext">A soap film of refractive index $1.333$ and thickness $5\times 10^{-7}$ m is observed at an angle of incidence of $40°$. Find the wavelength of light in the visible spectrum which will be strongly reflected.</p>
<span class="yr">2019</span>

<span class="lbl">Recall</span>
<div class="recall">Reflected bright: $2\mu t\cos r = (2n+1)\lambda/2$. Get $r$ from Snell: $\sin r = \sin i/\mu$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Given: $\mu = 1.333$, $t = 5\times 10^{-7}$ m, $i = 40°$.</li>
<li>Snell: $\sin r = \sin 40°/1.333 = 0.6428/1.333 = 0.4823$, so $r = 28.86°$ and $\cos r = 0.8761$.</li>
<li>Path: $2\mu t\cos r = 2\times 1.333\times 5\times 10^{-7}\times 0.8761 = 1.1677\times 10^{-6}$ m.</li>
<li>Bright condition: $\lambda = 2(1.1677\times 10^{-6})/(2n+1) = 2.3354\times 10^{-6}/(2n+1)$ m.</li>
<li>Try $n$: $n=0 \to 2335$ nm (IR); $n=1 \to 778$ nm (deep red edge); $n=2 \to 467$ nm (blue, visible ✓); $n=3 \to 334$ nm (UV).</li>
<li>Visible answer: $\lambda \approx 467$ nm — blue light is strongly reflected.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\lambda \approx 467\ \text{nm (blue)}}$ — from $2\mu t\cos r = (2n+1)\lambda/2$ with $n = 2$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Always test $n = 0,1,2,3$ and keep only 400–700 nm — the paper asks for the visible one, not all of them.</div>
</div>

<div class="pyq">
<span class="qno">Q6</span><p class="qtext">Explain the phenomenon of interference in thin films.</p>
<span class="yr">2024</span>

<span class="lbl">Recall</span>
<div class="recall">Division of amplitude: front + back reflections interfere; colour/thickness rules from Formula 1.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>State the setup: a thin transparent film (soap, oil) — light reflects partially at the front face and at the back face.</li>
<li>Coherence: both reflections come from the same parent ray (division of amplitude), so they interfere.</li>
<li>Path difference: $2\mu t\cos r$ plus one Stokes $\lambda/2$ flip at the front (rarer→denser) face.</li>
<li>Conditions: reflected bright $2\mu t\cos r = (2n+1)\lambda/2$, dark $2\mu t\cos r = n\lambda$ — Formula 1.</li>
<li>Colours: white light contains all $\lambda$; at each $t$ only the $\lambda$ satisfying bright is reinforced — hence soap-bubble colours; transmitted colours are complementary.</li>
<li>Needs: film thin ($t \sim \lambda$) else the two reflections separate beyond the coherence length and no fringes form.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\text{Front + back reflections (one with }\lambda/2\text{ flip) interfere; }2\mu t\cos r\text{ picks the surviving colour.}}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">Mention division of amplitude by name and the coherence-length limit — both are easy marks most students miss.</div>
</div>

<p class="ref"><b>Reference.</b> Brij Lal, Subrahmanyam &amp; Avadhanulu — Optics Ch-15 (thin films, Stokes, Haidinger/Fizeau); Ajoy Ghatak — Optics Ch-14.</p>
