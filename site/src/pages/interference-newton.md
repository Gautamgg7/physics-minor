---
layout: ../layouts/Docs.astro
title: 8B · Interference — Newton Rings
description: Characteristics of Newton rings, formation with Stokes half-wave step, Dn squared derivation, and the 2019 wavelength numeric with full arithmetic.
---

A curved lens rests on a flat glass plate. The thin air film between them gives round dark and bright rings. Daily example: the colour rings you see when a lens presses on glass. Centre is dark.

<div class="formula"><b>Formula 1.</b> Air-film thickness and path difference — $t = \dfrac{r^2}{2R},\qquad \Delta = 2t + \dfrac{\lambda}{2}$ (reflected, normal incidence)</div>

<div class="formula"><b>Formula 2.</b> Ring diameters — dark: $D_n^2 = 4n\lambda R$ &nbsp; (exact); bright: $D_n^2 = 4\!\left(n-\tfrac{1}{2}\right)\!\lambda R$</div>

Here $R$ = radius of curvature of the lens surface. $t$ = air-film thickness at ring radius $r$. $D_n = 2r_n$ = diameter of the $n$-th ring. $\lambda$ = wavelength. $\Delta$ = effective path difference (includes one Stokes $\lambda/2$).

<div class="fig"><img src="/images/newton.svg" alt="Plano-convex lens of radius R on glass plate with air film thickness t and circular fringes" /><div class="cap">Fig: Newton rings — film thickness $t = r^2/2R$; centre dark because of one $\lambda/2$ reversal.</div></div>

<div class="fig"><img src="/images/thin-film.svg" alt="Thin air film showing Stokes half-wave reversal at the denser reflection" /><div class="cap">Fig: Why one $\lambda/2$ appears — reflection at the denser (air→glass) face flips phase by $\pi$ (= $\lambda/2$ path); the glass→air face has no flip.</div></div>

## Formation and derivation (no jumps)

**Step 1 — Setup.** A plano-convex lens of large radius $R$ sits on a flat glass plate. An air film of thickness $t$ (zero at contact, growing outward) lies between them. Monochromatic light falls from above at near-normal incidence.

**Step 2 — Two reflections.** Ray reflects (a) at the top of the film — glass→air: denser→rarer — NO phase flip, and (b) at the bottom of the film — air→glass: rarer→denser — phase flip of $\pi$, i.e. extra path $\lambda/2$ by Stokes' rule.

**Step 3 — Effective path difference.** Geometric round trip is $2t$ (down and up, normal incidence so $\cos r = 1$). Add the one flip: $\Delta = 2t + \lambda/2$.

**Step 4 — Bright/dark conditions.** Bright: $\Delta = n\lambda \Rightarrow 2t = (n-\tfrac12)\lambda$. Dark: $\Delta = (2n-1)\lambda/2 \Rightarrow 2t = n\lambda$. At the centre $t = 0$, $\Delta = \lambda/2$ — destructive, hence centre is dark.

**Step 5 — Film geometry $t = r^2/2R$.** From the lens circle: $R^2 = r^2 + (R-t)^2 = r^2 + R^2 - 2Rt + t^2$. Cancel $R^2$: $r^2 = 2Rt - t^2 \approx 2Rt$ (since $t \ll R$, drop $t^2$). So $t = r^2/2R$.

**Step 6 — Ring diameters.** Dark: $2(r_n^2/2R) = n\lambda \Rightarrow r_n^2 = n\lambda R \Rightarrow D_n^2 = 4n\lambda R$ (exact). Bright: $r_n^2 = (n-\tfrac12)\lambda R \Rightarrow D_n^2 = 4(n-\tfrac12)\lambda R$.

**Unit check:** $[4n\lambda R] = L\cdot L = L^2$, an area — correct for $D_n^2$. Limit: $R \to \infty$ (flat plate) gives no rings ($t$ constant) — sensible.

**Trap:** transmitted rings are opposite (centre bright — no flip there). If the question says "reflected", centre is dark.

## Solved PYQs

<div class="pyq">
<span class="qno">Q1</span><p class="qtext">Write down the characteristics of Newton's rings.</p>
<span class="yr">2024</span>

<span class="lbl">Recall</span>
<div class="recall">Rings come from $t = r^2/2R$ growing outward, with $\Delta = 2t + \lambda/2$ in reflected light.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Rings are circular and concentric, centred on the contact point — because $t$ depends only on radius $r$.</li>
<li>Centre is dark in reflected light — at $t = 0$, $\Delta = \lambda/2$ which is destructive.</li>
<li>Rings crowd together outward — width falls as $1/\sqrt{n}$ because $r_n \propto \sqrt{n}$.</li>
<li>With white light, coloured rings appear (few) — violet inside, red outside — because $r_n \propto \sqrt{\lambda}$.</li>
<li>$D_n^2$ grows linearly with $n$ — a straight-line graph of $D_n^2$ vs $n$ with slope $4\lambda R$.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\text{Circular + dark centre + crowd outward + white-light colours + }D_n^2\propto n.}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">Give 4–5 points as short lines — each point is roughly one mark.</div>
</div>

<div class="pyq">
<span class="qno">Q2</span><p class="qtext">Explain the formation of Newton's rings. Deduce the expression for the diameter (radius) of the $n$-th bright and dark ring by reflection in an air film.</p>
<span class="yr">2019</span><span class="yr">2022</span><span class="rep">×2</span>

<span class="lbl">Recall</span>
<div class="recall">Formation: a plano-convex lens on a flat plate traps an air film; one reflection is at a denser medium (Stokes $\lambda/2$). Derivation uses $t = r^2/2R$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Setup + two reflections: $\Delta = 2t + \lambda/2$ because the air→glass face adds $\lambda/2$ (Stokes).</li>
<li>Bright $2t = (n-\tfrac12)\lambda$, dark $2t = n\lambda$, centre dark (substitute $n = 0$ in dark condition).</li>
<li>Geometry: $R^2 = r^2 + (R-t)^2$, drop $t^2$ because $t \ll R$, giving $t = r^2/2R$.</li>
<li>Substitute: $D_n^2 = 4n\lambda R$ for dark rings (exact); bright rings use $n \to n-\tfrac12$.</li>
<li>State validity: normal incidence, monochromatic light, air film ($\mu = 1$), $R \gg t$.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{D_n^2 = 4n\lambda R\ \text{(dark, exact); bright: }D_n^2 = 4(n-\tfrac12)\lambda R.}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">This is a repeat (×2) — practise the 6-step chain until it takes under 6 minutes. Never skip the reason for dropping $t^2$.</div>
</div>

<div class="pyq">
<span class="qno">Q3</span><p class="qtext">In Newton's rings $R = 100$ cm; the diameter of the 3rd ring is $0.181$ cm and the diameter of the 13th ring is $0.501$ cm. Find the wavelength of light used.</p>
<span class="yr">2019</span>

<span class="lbl">Recall</span>
<div class="recall">Subtracting two rings cancels the half-order: $\lambda = (D_m^2 - D_n^2)/[4(m-n)R]$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Given: $R = 100$ cm, $D_3 = 0.181$ cm, $D_{13} = 0.501$ cm, $m-n = 13-3 = 10$.</li>
<li>Difference form: $D_{13}^2 - D_3^2 = 4(13-3)\lambda R = 40\lambda R$.</li>
<li>Rearrange: $\lambda = (D_{13}^2 - D_3^2)/40R$.</li>
<li>Arithmetic: $D_{13}^2 = 0.501^2 = 0.251001$; $D_3^2 = 0.181^2 = 0.032761$; difference $= 0.218240$ cm$^2$; denominator $40 \times 100 = 4000$ cm; $\lambda = 0.218240/4000 = 5.456 \times 10^{-5}$ cm.</li>
<li>Sense: $5.456 \times 10^{-5}$ cm $= 545.6$ nm $\approx 546$ nm — green-yellow light, visible (400–700 nm).</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\lambda \approx 5.46\times 10^{-5}\ \text{cm} \approx 546\ \text{nm}}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">Square BEFORE subtracting. The common wrong answer uses $(D_{13}-D_3)^2$ — that is wrong; it must be $D_{13}^2 - D_3^2$.</div>
</div>

<p class="ref"><b>Reference.</b> Brij Lal, Subrahmanyam &amp; Avadhanulu — Optics Ch-15 (thin films, Newton rings, Stokes rule); Ajoy Ghatak — Optics Ch-14.</p>