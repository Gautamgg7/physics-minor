---
layout: ../layouts/Docs.astro
title: 10 · Polarization — Theory + 6 Solved PYQs
description: Polarized vs unpolarized light, Nicol test, double refraction, Huygens theory, quarter-wave plate numerics, elliptic and circular light. Easy theory then solved questions.
---

<p>Light is a transverse wave. Its electric field <span class="v">E</span> always vibrates at right angles to the travel direction. If the vibration keeps changing direction, the light is unpolarized. If it vibrates in one fixed pattern, the light is polarized. Ordinary sunlight is unpolarized; the light reflected from a wet road or passed through a Polaroid sunglass is polarized — that is why glare drops. The six solved PYQs below cover the full syllabus (×2 2018,2023 · ×2 2022,2024 · 2023 · ×2 2022,2024 · 2019).</p>

<h2>1. Polarized vs unpolarized light + Nicol prism test</h2>

<p>Unpolarized light has <span class="v">E</span> vibrating in every direction perpendicular to the ray, with no fixed phase relation. Polarized light comes in three types: (i) plane (linear) — <span class="v">E</span> stays in one plane; (ii) circularly polarized — tip of <span class="v">E</span> draws a circle (two equal perpendicular components with 90° phase difference); (iii) elliptically polarized — tip draws an ellipse (unequal components, or phase not exactly 90°).</p>

<p>A Nicol prism passes only vibrations parallel to its principal section and blocks the rest. So rotate a Nicol around the beam and watch the output: (i) plane-polarized input — intensity falls to zero twice per full rotation (extinction positions); (ii) unpolarized input — intensity stays constant (every direction is equally present); (iii) partially polarized input — intensity varies but never reaches zero.</p>

<div class="formula"><b>Formula 1.</b> <span class="v">E</span> vibration picture: unpolarized → <span class="v">E</span> in all transverse directions; plane-polarized → <span class="v">E</span> in one fixed plane; circular → equal amplitudes with 90° phase gap; elliptic → unequal amplitudes with 90° phase gap.</div>

<div class="fig"><img src="/images/polarization.svg" alt="Unpolarized light with vibrations in all directions entering a Nicol prism and leaving as plane polarized light with E in one plane"/><div class="cap">Fig 1. Unpolarized <span class="v">E</span> (many directions, dots = out-of-plane) enters the Nicol; only one direction leaves, so output <span class="v">E</span> lies in one plane.</div></div>

<div class="callout"><b>Note.</b> Polarization proves light is transverse — sound, being longitudinal, cannot be polarized. Also, "zero twice per rotation" is the signature of plane-polarized light. Constant intensity means unpolarized; varying-without-zero means partially polarized or elliptic — not unpolarized.</div>

<div class="pyq">
<span class="qno">Q1</span><p class="qtext">What is the difference between polarised and unpolarised light? How do you test it? <span class="yr">2018</span> <span class="yr">2023</span> <span class="rep">×2</span></p>

<span class="lbl">Recall</span><div class="recall">Unpolarized light has <span class="v">E</span> in all transverse directions; plane-polarized light has <span class="v">E</span> in one plane; a Nicol prism passes only one direction at a time.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>State the vibration picture — ordinary (unpolarized) light has <span class="v">E</span> vectors pointing in every direction normal to the ray [this is the definition, draw arrows plus dots].</li>
<li>State plane-polarized light — all <span class="v">E</span> vibrations lie in one plane containing the ray [one direction only, draw a single double-arrow].</li>
<li>Add circular and elliptic in one line each — equal amplitudes + 90° gives a circle, unequal amplitudes give an ellipse [this shows the full family].</li>
<li>Give the Nicol test — pass the beam through a Nicol and rotate it about the beam axis [because the Nicol transmits only the component along its principal section].</li>
<li>Read the result — intensity zero twice per rotation means plane polarized, constant intensity means unpolarized [because rotating the pass-direction samples every vibration direction].</li>
</ol>

<span class="lbl">Answer</span><div class="ans">Unpolarized light has <span class="v">E</span> in every transverse direction, so the Nicol output stays constant on rotation. Plane-polarized light has <span class="v">E</span> confined to one plane, so the Nicol output falls to zero twice per full rotation.</div>

<span class="lbl">Exam tip</span><div class="tip">Write the vibration definition first (2 marks), then the rotate-the-Nicol test with both readings (2 marks) — that is full marks for this repeat.</div>
</div>

<h2>2. Double refraction — o-ray, e-ray and the crystals</h2>

<p>Most crystals bend light once. Some crystals — calcite, quartz, tourmaline — split one incoming ray into two refracted rays inside the crystal. This is double refraction (birefringence). Daily example: put a calcite crystal on a printed letter and you see every letter doubled.</p>

<div class="formula"><b>Formula 2.</b> Incident ray → o-ray (ordinary, obeys Snell law, refractive index &mu;<sub>o</sub> fixed) + e-ray (extraordinary, in general does not obey Snell law, refractive index &mu;<sub>e</sub> varies with direction).</div>

<p>The o-ray has a fixed index &mu;<sub>o</sub> and speed v<sub>o</sub> = c/&mu;<sub>o</sub> in every direction, so it obeys Snell law. The e-ray has an index that varies with direction between &mu;<sub>o</sub> and &mu;<sub>e</sub>, so it may not obey Snell law and may leave the plane of incidence. The optic axis is the special direction along which both rays travel with the same speed, so no splitting is seen down that direction. Double-refracting crystals to remember: calcite (strong splitter, negative: &mu;<sub>e</sub> &lt; &mu;<sub>o</sub>), quartz (weak splitter, positive: &mu;<sub>e</sub> &gt; &mu;<sub>o</sub>), tourmaline (absorbs the o-ray, so the transmitted beam is plane polarized — used in tourmaline tongs).</p>

<div class="fig"><img src="/images/calcite-double.svg" alt="Calcite crystal splitting one incident ray into o-ray and e-ray with optic axis marked"/><div class="cap">Fig 2. One ray enters calcite and splits into o-ray (Snell law holds) and e-ray (bent extra); along the optic axis both rays coincide.</div></div>

<div class="callout"><b>Note.</b> The e-ray disobeys Snell law only in general — at normal incidence on a symmetric cut it can still go straight, just slower or faster than the o-ray. And the splitting is real: calcite, quartz and tourmaline are the three names examiners expect.</div>

<div class="pyq">
<span class="qno">Q2</span><p class="qtext">What is meant by double refraction of light? Name a double refracting crystal. <span class="yr">2022</span> <span class="yr">2024</span> <span class="rep">×2</span></p>

<span class="lbl">Recall</span><div class="recall">One ray in, two rays out — the ordinary (o) ray obeys Snell law, the extraordinary (e) ray in general does not. Crystals: calcite, quartz, tourmaline.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Define double refraction — when unpolarized light enters certain crystals, it divides into two refracted rays, the ordinary and the extraordinary ray.</li>
<li>Contrast the two rays — the o-ray has constant speed v<sub>o</sub> = c/&mu;<sub>o</sub> and obeys Snell law, the e-ray has direction-dependent speed and in general disobeys Snell law [because the crystal responds differently to <span class="v">E</span> along different axes].</li>
<li>Name two crystals with one word each — calcite (wide splitting), quartz, tourmaline [the paper asks to "name" — two is the minimum].</li>
<li>Add the optic-axis line — along the optic axis both rays travel with equal speed, so no doubling is seen down that direction [symmetry makes both indices equal there].</li>
</ol>

<span class="lbl">Answer</span><div class="ans">Double refraction is the splitting of one incident ray into two refracted rays — the o-ray (Snell law holds) and the e-ray (Snell law fails in general). Examples: calcite, quartz, tourmaline.</div>

<span class="lbl">Exam tip</span><div class="tip">Definition (2 marks) + o/e contrast (1 mark) + two crystal names (1 mark) is full marks for this short repeat.</div>
</div>

<h2>3. Huygens theory of double refraction (sphere + spheroid)</h2>

<p>Huygens said every point of a wavefront is a fresh source of secondary wavelets, and the new wavefront is the tangent envelope of all wavelets. Inside a doubly refracting crystal each source sends out two wavelets: a sphere for the o-ray and a spheroid (ellipsoid of revolution about the optic axis) for the e-ray. The two tangent envelopes give two refracted fronts — hence two rays.</p>

<p>Construction (tangent-envelope steps, draw as you write):</p>

<ol class="steps">
<li>Let a plane wavefront strike the crystal surface; pick several point sources on the surface inside the crystal [each surface point re-radiates].</li>
<li>About each source draw the o-wavelet — a sphere of radius v<sub>o</sub>·t [the o-ray speed is direction-independent].</li>
<li>About the same sources draw the e-wavelet — a spheroid of revolution about the optic axis, touching the sphere along the axis (polar radius v<sub>o</sub>·t, equatorial radius v<sub>e</sub>·t) [along the axis both speeds are equal, across it they differ].</li>
<li>Draw the common tangent plane to all spheres — that is the o-refracted front; draw the common tangent plane to all spheroids — that is the e-refracted front [Huygens envelope rule applied twice].</li>
<li>Join the sources to the touch points to get the o-ray and e-ray directions; the o-ray obeys Snell law, the e-ray in general does not [the ray is the line from source to envelope contact].</li>
</ol>

<div class="callout"><b>Note.</b> Negative vs positive crystal: in calcite the sphere lies inside the spheroid (v<sub>e</sub> &gt; v<sub>o</sub>, because &mu;<sub>e</sub> &lt; &mu;<sub>o</sub>) — negative crystal. In quartz the spheroid lies inside the sphere (v<sub>e</sub> &lt; v<sub>o</sub>) — positive crystal. The two wavelets must touch each other on the optic axis — draw them touching there, not crossing.</div>

<div class="pyq">
<span class="qno">Q3</span><p class="qtext">Write Huygens' theory of double refraction. <span class="yr">2023</span></p>

<span class="lbl">Recall</span><div class="recall">Huygens envelope rule + o-sphere + e-spheroid + two tangent fronts = two refracted rays.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>State Huygens principle — every wavefront point is a secondary source, and the forward tangent envelope is the new front [this is the foundation of the construction].</li>
<li>Inside the crystal each point emits two wavelets — a spherical o-wavelet (radius v<sub>o</sub>·t) and a spheroidal e-wavelet (axis = optic axis) [direction-independent vs direction-dependent speed].</li>
<li>Draw 3–4 sources on the crystal surface with both wavelets, touching on the optic axis [the diagram mark — spheres inside or outside per crystal type].</li>
<li>Draw the two common tangents — tangent to spheres = o-front, tangent to spheroids = e-front [envelope rule applied twice].</li>
<li>Read off the rays (source → contact point) and conclude — two refracted rays, o-ray obeying Snell law, e-ray generally not [this is the observed double refraction].</li>
</ol>

<span class="lbl">Answer</span><div class="ans">Each wavefront point inside the crystal emits a spherical o-wavelet (radius v<sub>o</sub>·t) and a spheroidal e-wavelet (about the optic axis). The tangent plane to the spheres gives the o-front; the tangent plane to the spheroids gives the e-front. This produces the two refracted rays.</div>

<span class="lbl">Exam tip</span><div class="tip">Half the marks are for the diagram — draw the sphere and spheroid touching on the axis, the two tangent fronts, and label every line.</div>
</div>

<h2>4. Quarter-wave plate — formula t = λ / 4|Δμ|</h2>

<p>A thin slice of a double-refracting crystal (usually quartz), cut with its faces parallel to the optic axis. The o-wave and e-wave travel the same path but at different speeds, so they leave with a fixed phase gap. A quarter-wave plate (QWP) is cut just thick enough to make that gap exactly 90° (π/2). It converts plane-polarized light into circular or elliptic light (and back).</p>

<p>Derivation (no jumps): time to cross the plate of thickness t is t<sub>o</sub> = t/v<sub>o</sub> = t&mu;<sub>o</sub>/c for the o-wave and t<sub>e</sub> = t&mu;<sub>e</sub>/c for the e-wave [because v = c/&mu;]. The optical-path difference is |&mu;<sub>e</sub> − &mu;<sub>o</sub>|·t. The phase difference from a path difference Δ is δ = (2π/λ)·Δ, so</p>

<div class="formula"><b>Formula 3.</b> Phase retardation through the plate: δ = (2π/λ) · (μ<sub>e</sub> − μ<sub>o</sub>) · t.</div>

<p>A QWP needs δ = π/2 (a quarter of a full 2π cycle, hence "quarter-wave"). Setting δ = π/2 in Formula 3 and solving for t gives</p>

<div class="formula"><b>Formula 4.</b> Quarter-wave plate thickness: t = λ / (4 · |μ<sub>e</sub> − μ<sub>o</sub>|).</div>

<p>Unit + dimension check: λ is a length L and |Δ&mu;| is a pure number, so t has dimension L ✓. Limiting check: a larger birefringence |Δ&mu;| gives a thinner plate — sensible.</p>

<div class="fig"><img src="/images/qwp-plate.svg" alt="Quarter-wave plate of thickness t splitting incident E into o and e components with quarter-wave retardation"/><div class="cap">Fig 3. Incident <span class="v">E</span> splits into o and e components inside thickness t; the plate is cut so e lags o by λ/4 (δ = π/2).</div></div>

<div class="callout"><b>Note.</b> Always write Formula 3 before Formula 4 — the formula mark is for Formula 3. Take the modulus |μ<sub>e</sub> − μ<sub>o</sub>| (the 2022 paper has μ<sub>e</sub> &lt; μ<sub>o</sub>). Convert nm to m, or keep everything in cm, before dividing — mixed units are the most common error.</div>

<div class="pyq">
<span class="qno">Q4a</span><p class="qtext">Find the thickness of a quarter-wave plate for sodium light λ = 589.6 nm with μ<sub>o</sub> = 1.544, μ<sub>e</sub> = 1.553. <span class="yr">2024</span></p>

<span class="lbl">Recall</span><div class="recall">Formula 4: t = λ / (4 · |μ<sub>e</sub> − μ<sub>o</sub>|).</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Given — λ = 589.6 nm = 589.6 × 10<sup>−9</sup> m; μ<sub>o</sub> = 1.544, μ<sub>e</sub> = 1.553 [list values with units first].</li>
<li>Birefringence — |Δμ| = |1.553 − 1.544| = 0.009 [retardation depends on the index difference].</li>
<li>Formula — from Formula 3 with δ = π/2, the thickness is t = λ / (4 · |Δμ|) [quarter-wave condition].</li>
<li>Substitute — t = 589.6 / (4 × 0.009) nm = 589.6 / 0.036 nm [because 4 × 0.009 = 0.036].</li>
<li>Divide — 0.036 × 16 377.78 ≈ 589.6, so t ≈ 16 377.8 nm [long-division rough work shown].</li>
<li>Convert for sense — 16 377.8 nm ≈ 16.38 μm, a thin foil, reasonable for a retardation plate [because 1 μm = 1000 nm].</li>
</ol>

<span class="lbl">Answer</span><div class="ans">t = 589.6 / (4 × 0.009) nm ≈ 1.64 × 10<sup>−5</sup> m ≈ 16.4 μm.</div>

<span class="lbl">Exam tip</span><div class="tip">Show the line 4 × 0.009 = 0.036 and the nm → μm conversion — both carry step marks.</div>
</div>

<div class="pyq">
<span class="qno">Q4b</span><p class="qtext">Find the thickness of a quartz quarter-wave plate for λ = 5.9 × 10<sup>−5</sup> cm with μ<sub>o</sub> = 1.544, μ<sub>e</sub> = 1.535. <span class="yr">2022</span></p>

<span class="lbl">Recall</span><div class="recall">Formula 4 with the modulus — here μ<sub>e</sub> &lt; μ<sub>o</sub>, so |Δμ| = μ<sub>o</sub> − μ<sub>e</sub>.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Given — λ = 5.9 × 10<sup>−5</sup> cm; μ<sub>o</sub> = 1.544, μ<sub>e</sub> = 1.535 (use the paper values) [list first].</li>
<li>Birefringence — |Δμ| = |1.535 − 1.544| = 0.009 [thickness needs the magnitude; the sign only tells which ray is faster].</li>
<li>Formula — t = λ / (4 · |Δμ|) = 5.9 × 10<sup>−5</sup> / (4 × 0.009) cm [Formula 4].</li>
<li>Denominator — 4 × 0.009 = 0.036 = 36 × 10<sup>−3</sup> [tidy the powers].</li>
<li>Divide — t = (5.9 / 0.036) × 10<sup>−5</sup> ≈ 163.89 × 10<sup>−5</sup> cm [because 0.036 × 163.89 ≈ 5.9].</li>
<li>Tidy — 163.89 × 10<sup>−5</sup> = 1.6389 × 10<sup>−3</sup> cm ≈ 16.4 μm, the same plate as Q4a in different units, as expected for the same |Δμ| [because 1 cm = 10<sup>4</sup> μm].</li>
</ol>

<span class="lbl">Answer</span><div class="ans">t = 5.9 × 10<sup>−5</sup> / (4 × 0.009) cm ≈ 1.64 × 10<sup>−3</sup> cm ≈ 16.4 μm.</div>

<span class="lbl">Exam tip</span><div class="tip">Write explicitly "|Δμ| = 0.009 (modulus)" — examiners deduct for a negative thickness if you use 1.535 − 1.544 without the modulus.</div>
</div>

<h2>5. Making + testing elliptic and circular light (Nicol + QWP)</h2>

<p>A Nicol gives plane-polarized light; a QWP adds a fixed 90° phase shift between its two components. Together they build every polarization type. Daily example: a 3D-cinema glass uses exactly this pair, with opposite circular handedness for the two eyes.</p>

<p>Production (write in this order): pass unpolarized light through a Nicol to get plane-polarized <span class="v">E</span> of amplitude E<sub>0</sub> [because the Nicol is the polarizer]. Send it through a QWP whose optic axis makes angle θ with <span class="v">E</span>. Inside, <span class="v">E</span> splits into E<sub>e</sub> = E<sub>0</sub> cos θ (along the axis) and E<sub>o</sub> = E<sub>0</sub> sin θ (across the axis) [because we resolve <span class="v">E</span> along and across the axis]. The QWP retards one component by δ = π/2 [Formula 3 with QWP thickness]. Reading the output: θ = 45° gives equal amplitudes plus 90° → circularly polarized; any other θ gives unequal amplitudes plus 90° → elliptically polarized [equal + quadrature = circle, unequal + quadrature = ellipse].</p>

<p>Testing (rotate a second Nicol = analyzer): circular light gives constant intensity on rotation (perfect symmetry); elliptic or partially polarized light gives intensity that varies but never hits zero; plane-polarized light gives intensity zero twice per turn. To confirm circular (not unpolarized, which is also constant): first pass the light through a QWP — circular becomes plane and then shows extinction on rotation, while unpolarized stays constant [because the QWP undoes its own 90° shift].</p>

<div class="fig"><img src="/images/nicol-prism.svg" alt="Nicol prism polarizer followed by quarter-wave plate producing circular and elliptic light"/><div class="cap">Fig 4. Nicol gives plane <span class="v">E</span>; QWP at 45° gives equal o/e with π/2 shift (circular), at other angles unequal o/e (elliptic).</div></div>

<div class="callout"><b>Note.</b> The 45° setting is the whole difference between circular and elliptic — state it. Testing needs the analyzer rotation readings: constant / varies-no-zero / zero-twice. Constant intensity alone does not prove circular — add the QWP undo-check line.</div>

<div class="pyq">
<span class="qno">Q5</span><p class="qtext">How will you prepare elliptically and circularly polarized light using a Nicol prism and a quarter-wave plate? How do you test them? <span class="yr">2019</span></p>

<span class="lbl">Recall</span><div class="recall">Nicol → plane <span class="v">E</span> of size E<sub>0</sub>; QWP at angle θ splits into E<sub>0</sub> cos θ and E<sub>0</sub> sin θ with π/2 shift; θ = 45° gives circular, any other θ gives elliptic.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Polarizer — pass unpolarized light through a Nicol to get plane-polarized light, vibrations along the Nicol principal section [because everything else is removed].</li>
<li>Retarder — pass it through a QWP with axis at angle θ to <span class="v">E</span>. Components: E<sub>e</sub> = E<sub>0</sub> cos θ and E<sub>o</sub> = E<sub>0</sub> sin θ; phase gap δ = π/2 from Formula 3 [resolution plus quarter-wave retardation].</li>
<li>Choose circular — θ = 45° makes E<sub>e</sub> = E<sub>o</sub>, combined with the 90° shift gives a rotating vector of fixed length = circularly polarized light [equal + quadrature = circle].</li>
<li>Choose elliptic — θ ≠ 45° (for example 30°) gives unequal amplitudes with 90° = elliptically polarized light [unequal + quadrature = ellipse].</li>
<li>Test with analyzer Nicol — circular gives constant intensity, elliptic gives varying-but-never-zero [plane → zero twice per turn]. To separate circular from unpolarized, insert a QWP before the analyzer: circular turns plane (extinction appears), unpolarized is unaffected [rotation readings plus QWP undo-check].</li>
</ol>

<span class="lbl">Answer</span><div class="ans">Nicol first produces plane <span class="v">E</span> of amplitude E<sub>0</sub>; the QWP at 45° to <span class="v">E</span> gives equal components with 90° shift → circular. At any other angle θ the QWP gives unequal components with 90° shift → elliptic. Test by rotating an analyzer Nicol: circular → constant, elliptic → varies but never zero, plane → zero twice; circular is confirmed by inserting a QWP before the analyzer, which turns circular into plane (extinction appears).</div>

<span class="lbl">Exam tip</span><div class="tip">Draw the Nicol → QWP → output sketch with θ marked, then give the three analyzer readings as a table — that table alone is worth at least one mark.</div>
</div>

<h2>6. Backup (syllabus-adjacent) — Malus law and Brewster angle</h2>

<p>Neither formula appeared in the 2018–2024 polarization PYQs above, but both are one-line results that can support Q1 / Q5 answers. Learn them only after Sections 1–5 are solid.</p>

<p>Malus law. Plane-polarized light of intensity I<sub>0</sub> falls on an analyzer whose pass-direction makes angle θ with <span class="v">E</span>. The transmitted component is E = E<sub>0</sub> cos θ, and intensity goes as amplitude squared, so</p>

<div class="formula"><b>Formula 5.</b> Malus law: I = I<sub>0</sub> · cos<sup>2</sup> θ.</div>

<p>So crossed Nicols (θ = 90°) give zero; parallel (θ = 0) give full I<sub>0</sub> [because only the along-axis component passes, and I ∝ E<sup>2</sup>]. Note: Malus needs polarized input — for unpolarized input the average gives I = I<sub>0</sub>/2 regardless of θ.</p>

<p>Brewster angle. Unpolarized light reflecting off glass is partially polarized; at one special incidence i<sub>p</sub> the reflected ray is fully plane polarized (vibrations perpendicular to the plane of incidence) and sits 90° from the refracted ray:</p>

<div class="formula"><b>Formula 6.</b> Brewster law: tan i<sub>p</sub> = μ, where μ is the refractive index of the denser medium.</div>

<p>For glass μ = 1.5, i<sub>p</sub> = tan<sup>−1</sup>(1.5) ≈ 56.3° [because at i<sub>p</sub> the reflected and refracted rays are perpendicular, so the in-plane vibration has nowhere to go]. The reflected light is polarized perpendicular to the plane of incidence — state the direction explicitly.</p>

<p class="ref"><b>Reference.</b> Brij Lal, Subrahmanyam & Avadhanulu — Optics Ch-19 (transverse nature, Nicol prism), Ch-20 (double refraction, Huygens theory, quarter-wave plate, elliptic and circular light); Ajoy Ghatak — Optics Ch-19 (retardation plates, Malus law, Brewster law).</p>