---
layout: ../layouts/Docs.astro
title: 1E · Dielectrics — D, P, E + Solved PYQs
description: Polarization vector, D = epsilon0 E + P full slab derivation, polar versus non-polar, field falls with slab. Full steps.
---

<p>This page is about dielectric materials — insulators that respond to an applied field by developing tiny dipoles inside. We define the polarization vector $\vec{P}$, derive the central relation $\vec{D} = \varepsilon_0\vec{E} + \vec{P}$ from a slab picture, and distinguish polar from non-polar dielectrics. We also show why the field falls when a slab is inserted between capacitor plates.</p>

<h2>1. Polarization of a dielectric</h2>
<p>A dielectric is an insulator (glass, oil, plastic). Its molecules have no free charges. Under an external electric field, each molecule either rotates or stretches into a tiny dipole. The polarization vector is the total dipole moment per unit volume:</p>

<div class="formula"><b>Formula 1.</b> Polarization vector $\boxed{\vec{P} = \dfrac{\sum \vec{p}}{\Delta V}}$ · Direction: from $-$ to $+$ inside the dielectric (same sense as each molecular dipole). Unit: C/m² (reason: C·m ÷ m³).</div>

<p>There are two response types. <b>Polar molecules</b> (H₂O, HCl, NH₃) have permanent dipoles that partly align with the field against thermal disorder. <b>Non-polar molecules</b> (H₂, O₂, N₂) have no permanent dipole — the field induces one, $\vec{p} = \alpha\vec{E}$. The medium stays neutral overall: equal induced $+q$ and $-q$ appear on its two faces.</p>

<h2>2. The relation $\vec{D} = \varepsilon_0\vec{E} + \vec{P}$</h2>
<div class="fig"><img src="/images/capacitor.svg" alt="Parallel plates with free charge sigma; with a dielectric slab, bound charge sigma-p appears and net field falls" /><div class="cap">Fig 2.1: plates carry free charge $\sigma$ (this defines $D$). With a dielectric slab in the gap, bound charge $\sigma_p$ (this defines $P$) appears on the slab faces and opposes $\sigma$. Net field falls to $E = (\sigma - \sigma_p)/\varepsilon_0 = E_0/K$.</div></div>

<p>Three fields are in play. <b>$\vec{D}$</b> is the displacement linked to the free charge on the plates: $D = \sigma_{\text{free}}$. <b>$\vec{P}$</b> is the response of the medium — bound dipoles per unit volume. <b>$\vec{E}$</b> is the net field a test charge feels.</p>

<div class="formula"><b>Formula 2.</b> Displacement–field relation $\boxed{\vec{D} = \varepsilon_0\vec{E} + \vec{P}}$ · In a linear dielectric, $\vec{P} = \varepsilon_0\chi_e\vec{E}$, so $\vec{D} = \varepsilon\vec{E}$ with $\varepsilon = K\varepsilon_0$.</div>

<h3>2.1 Slab derivation</h3>
<p>Insert a dielectric slab between the capacitor plates. Bound charges $\pm\sigma_p$ appear on the two faces of the slab. We work out the net field.</p>

<ol class="steps">
<li>Slab in the gap: bound charges $\pm\sigma_p$ appear on its two faces (reason: molecular dipoles line up; interior charges cancel, only the surface layers survive).</li>
<li>Two sheet fields superpose: free $\sigma$ drives one way, bound $\sigma_p$ drives back. Net field $E = (\sigma_{\text{free}} - \sigma_p)/\varepsilon_0$.</li>
<li>Identify the two terms: $D = \sigma_{\text{free}}$ and $P = \sigma_p$ (proved in Q3 below). So $\varepsilon_0 E = D - P$.</li>
<li>Rearrange: $\boxed{\vec{D} = \varepsilon_0\vec{E} + \vec{P}}$.</li>
<li>Gauss's law in a dielectric uses free charge only: $\boxed{\oint \vec{D}\cdot d\vec{S} = Q_{\text{free}}}$.</li>
</ol>

<div class="callout"><b>Note.</b> All three quantities $\vec{D}$, $\vec{E}$, $\vec{P}$ have the same C/m² unit. The vector form of Eq. (2) is $\vec{D} = \varepsilon_0\vec{E} + \vec{P}$.</div>

<h2>Solved PYQs</h2>

<div class="pyq">
<span class="qno">Q1</span>
<p class="qtext">Write the relation between $\vec{D}$, $\vec{P}$ and $\vec{E}$ in a dielectric; define them and show $\vec{D} = \varepsilon_0\vec{E} + \vec{P}$.</p>
<span class="rep">×3</span><span class="yr">2018</span><span class="yr">2019</span><span class="yr">2023</span>

<span class="lbl">Recall</span>
<div class="recall">$D$ = free-charge field (C/m²), $P$ = bound dipoles per volume (C/m²), $E$ = net field (N/C). The slab picture gives $E = (\sigma_{\text{free}} - \sigma_p)/\varepsilon_0$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Define each quantity with units: $\vec{D}$ — displacement linked to free charge on the plates, $D = \sigma_{\text{free}}$, unit C/m². $\vec{P}$ — dipole moment per unit volume of the dielectric, unit C/m². $\vec{E}$ — net field a test charge feels, unit N/C.</li>
<li>Place a slab between the plates: bound charges $\pm\sigma_p$ appear on its two faces. Net field: $E = (\sigma_{\text{free}} - \sigma_p)/\varepsilon_0$ (reason: superposition of the two sheet fields).</li>
<li>Identify terms: $D = \sigma_{\text{free}}$ and $P = \sigma_p$ (proved in Q3). So $\varepsilon_0 E = D - P$.</li>
<li>Rearrange: $\boxed{\vec{D} = \varepsilon_0\vec{E} + \vec{P}}$. Add the linear case $\vec{D} = \varepsilon\vec{E}$ and the free-charge Gauss law $\oint \vec{D}\cdot d\vec{S} = Q_{\text{free}}$.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\vec{D} = \varepsilon_0\vec{E} + \vec{P}}$ and $\boxed{\oint \vec{D}\cdot d\vec{S} = Q_{\text{free}}}$ · All three terms have unit C/m².</div>

<span class="lbl">Exam tip</span>
<div class="tip">Repeated ×3. Draw the slab diagram plus all four steps — the diagram alone can earn a third of the marks.</div>
</div>

<div class="pyq">
<span class="qno">Q2</span>
<p class="qtext">What do you mean by polarization of a dielectric medium? Define the polarization vector.</p>
<span class="yr">2023</span>

<span class="lbl">Recall</span>
<div class="recall">Eq. (1): $\vec{P} = \sum\vec{p}/\Delta V$. External field stretches/aligns molecules into tiny dipoles.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Meaning: an external field stretches or aligns the molecules of the dielectric into tiny dipoles. The medium gains bound surface charge on its faces, but stays neutral overall (equal $+q$ and $-q$).</li>
<li>Define $\vec{P} = \sum\vec{p}/\Delta V$, the dipole moment per unit volume. Direction: from $-$ to $+$ inside the dielectric.</li>
<li>Unit: C/m² (C·m ÷ m³). For linear media: $\vec{P} = \varepsilon_0\chi_e\vec{E}$.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\vec{P} = \text{dipole moment per unit volume, unit C/m}^2}$. The dielectric stays neutral overall — only the surface layers carry induced charge.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Add the phrase "stays neutral overall" — it separates polarization from simply charging the medium.</div>
</div>

<div class="pyq">
<span class="qno">Q3</span>
<p class="qtext">Show that the magnitude of polarization equals the surface density of induced (bound) charge.</p>
<span class="yr">2019</span>

<span class="lbl">Recall</span>
<div class="recall">$P$ = dipole moment per volume; $\sigma_p$ = bound charge per face area. Take a slab of area $A$ and thickness $d$ with $N$ aligned molecular dipoles, each of charge $q$ and separation $x$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Take a slab of area $A$ and thickness $d$, containing $N$ aligned molecular dipoles of charge $q$ and tip-to-tip separation $x$. Total dipole moment of the slab: $N q x$ (reason: moments of identical dipoles add).</li>
<li>By definition: $P = \dfrac{N q x}{A d}$ (reason: divide the total moment by the volume $A d$).</li>
<li>Bound charge on one face: each dipole deposits $+q$ on one face and $-q$ on the other. Total $N q$ spreads over area $A$, giving $\sigma_p = \dfrac{N q}{A}$ — but to relate it to $P$, note that shifting $N q$ across the slab thickness $d$ deposits charge $N q$ on the face of area $A$: $\sigma_p = \dfrac{N q x}{A d}$ (reason: charge × shift per volume = charge per area).</li>
<li>Compare with step 2: $\sigma_p = P$. ✓</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{P = \sigma_p}$ · Both have unit C/m². This identity is the bridge between the microscopic dipole picture and the macroscopic slab charge.</div>

<span class="lbl">Exam tip</span>
<div class="tip">This lemma is the key step in the ×3 $D$–$E$–$P$ proof — learn it as part of that answer, not separately.</div>
</div>

<div class="pyq">
<span class="qno">Q4</span>
<p class="qtext">Distinguish between polar and non-polar dielectrics. Give examples.</p>
<span class="yr">2019</span>

<span class="lbl">Recall</span>
<div class="recall">Polar = permanent dipoles. Non-polar = no permanent dipole; field induces one, $\vec{p} = \alpha\vec{E}$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Polar dielectrics: molecules have a permanent $\vec{p} \neq 0$ even at zero field (reason: centres of positive and negative charge do not coincide, e.g. bent H₂O, HCl, NH₃). Without field, thermal motion randomises the orientations → net $P = 0$. A field partly aligns them against thermal disorder, so the effect falls as temperature rises.</li>
<li>Non-polar dielectrics: molecules have symmetric charge centres, so $\vec{p} = 0$ at $E = 0$ (reason: positive and negative centres coincide, e.g. H₂, O₂, N₂, CO₂). An applied field stretches them: induced $\vec{p} = \alpha\vec{E}$, almost independent of temperature.</li>
<li>Tabulate: permanent $\vec{p}$ vs zero $\vec{p}$; alignment vs stretching; temperature dependent vs not; examples on each side.</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{\text{Polar: H}_2\text{O, HCl, NH}_3\ \text{(permanent } \vec{p}\text{); Non-polar: H}_2\text{, O}_2\text{, N}_2\ \text{(induced } \vec{p} = \alpha\vec{E}\text{)}}$. Polarizability $\alpha$ has unit F·m².</div>

<span class="lbl">Exam tip</span>
<div class="tip">Give at least two examples per side — one example risks a half mark.</div>
</div>

<div class="pyq">
<span class="qno">Q5</span>
<p class="qtext">Show that the electric field decreases when a dielectric slab is introduced between the plates of a capacitor.</p>
<span class="yr">2023</span>

<span class="lbl">Recall</span>
<div class="recall">Bound charges oppose the free charge on the plates (see Fig 2.1). The bound surface density is $\sigma_p$ and it acts against $\sigma_{\text{free}}$.</div>

<span class="lbl">Steps</span>
<ol class="steps">
<li>Before the slab: air-filled, $E_0 = \sigma/\varepsilon_0$ (reason: field of a single charged sheet, by Gauss's law on a pillbox).</li>
<li>After inserting the slab: bound charges $\pm\sigma_p$ appear on the two faces, with $\sigma_p$ opposite in sign to the adjacent free charge $\sigma$ (reason: dipoles align against the field).</li>
<li>Net field at any point in the gap: $E = (\sigma - \sigma_p)/\varepsilon_0 < E_0$ (reason: $\sigma_p > 0$ subtracts).</li>
<li>With dielectric constant $K$: $E = E_0/K = \sigma/(K\varepsilon_0)$. Limit: $K = 1$ (air) gives $E = E_0$. ✓</li>
</ol>

<span class="lbl">Answer</span>
<div class="ans">$\boxed{E = \dfrac{E_0}{K} < E_0}$ at fixed free charge $\sigma$.</div>

<span class="lbl">Exam tip</span>
<div class="tip">Always write "at fixed free charge $\sigma$". If the battery stays connected, $V$ is fixed instead and the free charge rises — the same $E = E_0/K$ still holds, but the argument flips.</div>
</div>

<p class="ref"><b>Reference.</b> Brij Lal &amp; Subrahmanyam, Electricity &amp; Magnetism Ch-5 (polarization, D–E–P, dielectrics in capacitors); S.L. Arora Vol-1 Ch-2.</p>
