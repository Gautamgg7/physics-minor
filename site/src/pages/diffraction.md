---
layout: ../layouts/Docs.astro
title: 9 · Diffraction — Zone Plate and Grating
description: Fresnel half-period zones, zone plate with lens comparison, plane transmission grating element and spectrometer method, highest-order and lines-per-cm numerics.
---

Light bends round small obstacles and spreads after a narrow opening. This bending and spreading is diffraction. Daily example: sound heard round a corner; light fringes at a razor edge. Interference is few waves; diffraction is many tiny waves adding up.

**The one idea behind everything below: Fresnel half-period zones.** Take a wavefront and cut it into rings so that each next ring is $\lambda/2$ farther from the screen point. Neighbour rings arrive out of phase and nearly cancel; the first zone dominates. Blocking alternate zones (zone plate) or adding many slits (grating) controls this sum.

<div class="formula"><b>Formula 1.</b> Zone plate — zone radii and primary focal length: $r_n^2 = n\lambda b,\qquad f = \dfrac{r_1^2}{\lambda}$</div>

<div class="formula"><b>Formula 2.</b> Plane grating — grating equation: $(a+b)\sin\theta_n = n\lambda,\qquad n_{\max} < \dfrac{a+b}{\lambda}$</div>

Here $r_n$ = radius of the $n$-th zone boundary. $b$ = plate-to-screen (image) distance for a plane wave from infinity. $f$ = first (primary) focal length. $r_1$ = first zone radius. $(a+b)$ = grating element (one slit width $a$ + one opaque gap $b$ = grating period). $N = 1/(a+b)$ = lines per unit length. $\theta_n$ = angle of the $n$-th principal maximum. $n = 0, \pm1, \pm2\ldots$ = order.

<div class="fig"><img src="/images/zone-plate.svg" alt="Fresnel zone plate with concentric zones radii r1 to rn focusing at f equals r1 squared over lambda" /><div class="cap">Fig: Zone plate — alternate zones blocked so the open set adds up in phase at $f = r_1^2/\lambda$.</div></div>

<div class="fig"><img src="/images/grating.svg" alt="Plane transmission grating with element a plus b sending orders at angles theta n" /><div class="cap">Fig: Grating — neighbouring slits differ by $(a+b)\sin\theta_n = n\lambda$ for the bright orders.</div></div>

## Zone plate — construction, foci, vs convex lens

**Construction (exam steps).** (i) Compute $r_n = \sqrt{n\lambda b}$ for chosen $\lambda$ and $b$. (ii) Draw concentric circles of radii $r_n$ on paper. (iii) Blacken alternate rings (all odd or all even). (iv) Photograph it reduced to get a fine plate.

**Why it focuses.** Open zones differ by $2\times\lambda/2 = \lambda$ in path, so they all arrive in phase at $f$ — bright spot. Other points give extra foci at $f/3$, $f/5$, … (odd fractions) where the phase still lines up.

**Zone plate vs convex lens (memorise the table):**

| Point | Zone plate | Convex lens |
|---|---|---|
| Works by | diffraction (blocking zones) | refraction (glass bending) |
| Foci | many: $f$, $f/3$, $f/5$, … | one (nearly) |
| Colour | highly chromatic ($f \propto 1/\lambda$) | nearly achromatic |
| Brightness | dimmer (half the light blocked) | bright (all light through) |
| Image | diffracted orders + background | single clean image |

**Trap:** longer wavelength gives SHORTER focal length ($f = r_1^2/\lambda$), so red focuses nearer than violet, opposite of a glass lens.

## Plane grating — element and spectrometer method

**Spectrometer method (exam steps).** (i) Collimator gives a parallel beam on the grating at normal incidence. (ii) Turn the telescope to order $n$ on the left, read angle; repeat on the right; half the difference = $\theta_n$. (iii) With known $(a+b) = 1/N$, compute $\lambda = (a+b)\sin\theta_n/n$. Use several orders and average.

**Highest order:** $|\sin\theta_n| \le 1$ gives $n_{max} < (a+b)/\lambda$ — take the integer below the ratio.

## Solved PYQs

<div class="pyq">
<span class="qno">Q1</span><p class="qtext">What is a zone plate? Explain its construction. Compare it with a convex lens.</p>
<span class="yr">2019</span><span class="yr">2024</span><span class="rep">×2</span>

<span class="lbl">Recall</span>
<div class="recall">Zone plate = concentric rings, alternate zones transparent/opaque, focusing light by diffraction. Eq. (1): $r_n^2 = n\lambda b$ and $f = r_1^2/\lambda$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Definition: a plate of concentric rings, alternate zones transparent/opaque, which focuses light by diffraction.</li>
<li>Zone radii: the "next ring $\lambda/2$ farther" condition gives $r_n^2 = n\lambda b + n^2\lambda^2/4 \approx n\lambda b$ since $\lambda \ll b$.</li>
<li>Construction: compute, draw, blacken alternate, photo-reduce (4 steps above).</li>
<li>Focus: open zones agree in phase → bright image at $f = r_1^2/\lambda$, plus $f/3$, $f/5$, … (odd fractions).</li>
<li>Table: diffraction vs refraction, many foci vs one, chromatic vs achromatic, dimmer vs brighter (5 rows).</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{r_n^2 = n\lambda b,\quad f = \dfrac{r_1^2}{\lambda};\quad \text{foci: } f,\ f/3,\ f/5,\ldots}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">Repeat (×2). Draw the rings AND write the table — diagram plus table = full marks even if words are short.</div>
</div>

<div class="pyq">
<span class="qno">Q2</span><p class="qtext">What is a plane diffraction grating? Define grating element (grating constant). Describe the method of determining the wavelength of monochromatic light using a grating and a spectrometer.</p>
<span class="yr">2023</span>

<span class="lbl">Recall</span>
<div class="recall">Eq. (3): $(a+b)\sin\theta_n = n\lambda$. Grating element $= (a+b) = 1/N$. Spectrometer: telescope reads $\theta_n$ left and right; average.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Define grating: many parallel equal slits, $N$ lines/cm, so the grating element is $(a+b) = 1/N$.</li>
<li>Quote the grating equation $(a+b)\sin\theta_n = n\lambda$ — neighbouring slits differ by $(a+b)\sin\theta_n$, in-phase when $= n\lambda$.</li>
<li>Spectrometer: collimator → normal incidence on grating; telescope reads $\theta_n$ on the left and on the right; $\theta_n$ = half the difference.</li>
<li>Compute $\lambda = (a+b)\sin\theta_n/n$ for orders $n = 1, 2$ and average; higher $n$ spreads more, so precision is better.</li>
<li>Validity: normal incidence, monochromatic source, grating plane vertical.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{(a+b)\sin\theta_n = n\lambda;\quad \lambda = \dfrac{\sin\theta_n}{nN}.}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">Define the element FIRST: "$(a+b) = 1/N$". Papers deduct for jumping straight to the equation.</div>
</div>

<div class="pyq">
<span class="qno">Q3</span><p class="qtext">Find the highest order of the spectrum with sodium light, given (i) $\lambda = 5.89\times 10^{-5}$ cm and $3000$ lines/cm (2022); (ii) $\lambda = 5896$ Å and $2000$ lines/cm (2023).</p>
<span class="yr">2022</span><span class="yr">2023</span><span class="rep">×2</span>

<span class="lbl">Recall</span>
<div class="recall">$n_{max}$ = largest integer below $(a+b)/\lambda$ because $\sin\theta \le 1$.</div>

<span class="lbl">Steps (2022)</span>
<ol class="steps">
<li>Element: $(a+b) = 1/3000$ cm $= 3.333 \times 10^{-4}$ cm.</li>
<li>Ratio: $(a+b)/\lambda = 3.333 \times 10^{-4}/5.89 \times 10^{-5} = 33.33/5.89 = 5.658$.</li>
<li>Integer below: $n_{max} = 5$ — order $6$ would need $\sin\theta > 1$.</li>
</ol>

<span class="lbl">Steps (2023)</span>
<ol class="steps">
<li>Convert: $\lambda = 5896$ Å $= 5896 \times 10^{-8}$ cm $= 5.896 \times 10^{-5}$ cm; element $(a+b) = 1/2000 = 5.0 \times 10^{-4}$ cm.</li>
<li>Ratio: $5.0 \times 10^{-4}/5.896 \times 10^{-5} = 50.0/5.896 = 8.480$.</li>
<li>Integer below: $n_{max} = 8$ — 9th order cannot emerge.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{2022:\ n_{\max} = 5;\qquad 2023:\ n_{\max} = 8.}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">Always round DOWN, never to the nearest integer — physics gives the largest integer below the ratio.</div>
</div>

<div class="pyq">
<span class="qno">Q4</span><p class="qtext">In a plane transmission grating the wavelength of light is $500$ nm and the second-order principal maximum is obtained at $30^\circ$. Find the number of lines per cm on the grating.</p>
<span class="yr">2019</span>

<span class="lbl">Recall</span>
<div class="recall">From $(a+b)\sin\theta_n = n\lambda$, get $(a+b) = n\lambda/\sin\theta_n$, then $N = 1/(a+b)$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Given: $\lambda = 500$ nm, $n = 2$, $\theta_2 = 30^\circ$, $\sin 30^\circ = 0.5$.</li>
<li>Element: $(a+b) = n\lambda/\sin\theta = 2 \times 500/0.5 = 2000$ nm.</li>
<li>Convert: $2000$ nm $= 2000 \times 10^{-7}$ cm $= 2.0 \times 10^{-4}$ cm.</li>
<li>Lines: $N = 1/(2.0 \times 10^{-4}) = 5000$ per cm.</li>
<li>Sense: $5000$/cm is a standard coarse grating — fine gratings run $\sim 15000$/cm.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{N = 5000\ \text{lines/cm}}$</div>

<span class="lbl">Exam tip</span>
<div class="tip">Work in nm through Step 2, convert to cm only at the end — fewer zeros means fewer slips.</div>
</div>

<p class="ref"><b>Reference.</b> Brij Lal, Subrahmanyam &amp; Avadhanulu — Optics Ch-16 (Fresnel zones, zone plate), Ch-17 (grating, spectrometer); Ajoy Ghatak — Optics Ch-15, 16.</p>