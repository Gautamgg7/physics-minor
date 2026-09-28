---
layout: ../layouts/Docs.astro
title: Formula Sheet — Every Formula, One Page
description: All 55 exam formulas from every unit on one page, grouped by topic with links back to full solutions. Revise fast before the exam.
---

<p>Every formula used anywhere on this site, collected for last-minute revision. Each block links back to its page for the full derivation and solved PYQs.</p>

## 1A · Gauss law & flux — <a href="/electrostatics-gauss">full page →</a>

<div class="formula"><b>Formula 1.</b> Electric flux through a closed surface $\Phi = \oint \vec{E}\cdot d\vec{S} = \oint E\cos\theta\,dS$. Unit: N·m²/C (same as V·m). Only the normal component of $\vec{E}$ contributes.</div>

<div class="formula"><b>Formula 2.</b> Gauss's law (integral form) $\boxed{\displaystyle\oint \vec{E}\cdot d\vec{S} = \frac{Q_{\text{in}}}{\varepsilon_0}}$, where $Q_{\text{in}}$ is the **net** charge inside the surface (charges outside contribute zero net flux because every field line that enters also leaves).</div>

<div class="formula"><b>Formula 3.</b> Gauss's law (differential form) $\boxed{\nabla\cdot\vec{E} = \dfrac{\rho}{\varepsilon_0}}$, where $\rho$ is the volume charge density. Physical meaning: charge density is the source of diverging electric field lines.</div>

## 1B · Fields by Gauss — <a href="/electrostatics-fields">full page →</a>

<div class="formula"><b>Formula 1.</b> Field outside a uniformly charged solid sphere $\boxed{E_{\text{out}} = \dfrac{Q}{4\pi\varepsilon_0 r^2}}$ — same as a point charge $Q$ at the centre.</div>

<div class="formula"><b>Formula 2.</b> Field inside a uniformly charged solid sphere $\boxed{E_{\text{in}} = \dfrac{Q\,r}{4\pi\varepsilon_0 R^3}}$ — grows linearly from 0 at the centre to a maximum $E_{\max} = Q/4\pi\varepsilon_0 R^2$ at $r = R$.</div>

<div class="formula"><b>Formula 3.</b> Useful Gauss-law fields · (a) Infinite line charge, linear density $\lambda$: $\boxed{E = \lambda/2\pi\varepsilon_0 r}$ (radially out; coaxial Gaussian cylinder). · (b) Thin spherical shell of charge $Q$: outside $E = Q/4\pi\varepsilon_0 r^2$; inside $\boxed{E = 0}$. · (c) Infinite plane sheet, surface density $\sigma$: $\boxed{E = \sigma/2\varepsilon_0}$ on each side (flat Gaussian pillbox). · (d) Charged conductor: all charge on outer surface; field just outside $\boxed{E = \sigma/\varepsilon_0}$ (normal to surface); $E = 0$ inside the metal.</div>

## 1C · Potential & dipole — <a href="/electrostatics-potential">full page →</a>

<div class="formula"><b>Formula 1.</b> Electric dipole moment $\boxed{\vec{p} = q\cdot 2\vec{l}}$, where $2\vec{l}$ points from $-q$ to $+q$. Unit: C·m. It is a true vector — it has both size and direction.</div>

<div class="formula"><b>Formula 2.</b> Dipole potential and field · $V(r,\theta) = \dfrac{p\cos\theta}{4\pi\varepsilon_0 r^2}$ · $E_r = \dfrac{2p\cos\theta}{4\pi\varepsilon_0 r^3}$ · $E_\theta = \dfrac{p\sin\theta}{4\pi\varepsilon_0 r^3}$.</div>

## 1D · Capacitors & energy — <a href="/electrostatics-capacitors">full page →</a>

<div class="formula"><b>Formula 1.</b> Field between parallel plates $\boxed{E = \dfrac{\sigma}{\varepsilon_0} = \dfrac{Q}{\varepsilon_0 A}}$ · The voltage across the plates is $V = Ed = \dfrac{Q d}{\varepsilon_0 A}$.</div>

<div class="formula"><b>Formula 2.</b> Parallel-plate capacitance (air gap) $\boxed{C = \dfrac{\varepsilon_0 A}{d}}$ · Unit: farad (F).</div>

<div class="formula"><b>Formula 3.</b> Parallel-plate capacitance with dielectric $\boxed{C_K = \dfrac{K\varepsilon_0 A}{d} = K C}$.</div>

<div class="formula"><b>Formula 4.</b> Energy stored in a capacitor $\boxed{U = \tfrac{1}{2}CV^2 = \dfrac{Q^2}{2C} = \tfrac{1}{2}QV}$ · Energy density in the field: $u = \tfrac{1}{2}\varepsilon_0 E^2$.</div>

## 1E · Dielectrics — <a href="/electrostatics-dielectrics">full page →</a>

<div class="formula"><b>Formula 1.</b> Polarization vector $\boxed{\vec{P} = \dfrac{\sum \vec{p}}{\Delta V}}$ · Direction: from $-$ to $+$ inside the dielectric (same sense as each molecular dipole). Unit: C/m² (reason: C·m ÷ m³).</div>

<div class="formula"><b>Formula 2.</b> Displacement–field relation $\boxed{\vec{D} = \varepsilon_0\vec{E} + \vec{P}}$ · In a linear dielectric, $\vec{P} = \varepsilon_0\chi_e\vec{E}$, so $\vec{D} = \varepsilon\vec{E}$ with $\varepsilon = K\varepsilon_0$.</div>

## 2A · Biot–Savart — <a href="/magnetostatics-biot-savart">full page →</a>

<div class="formula"><b>Formula 1.</b> $d\vec{B} = \dfrac{\mu_0}{4\pi}\,\dfrac{I\,d\vec{l}\times\hat{r}}{r^2}$, where $d\vec{l}$ points along the current, $\hat{r}$ points from the piece to the field point, and $r$ is the distance between them.</div>

<div class="formula"><b>Formula 2.</b> $B = \dfrac{\mu_0 I}{2\pi r}$ — tangent to circles around the wire.</div>

<div class="formula"><b>Formula 3.</b> $B(x) = \dfrac{\mu_0 I R^2}{2(R^2+x^2)^{3/2}}$, directed along the axis by the right-hand rule.</div>

## 2B · Ampere & vector potential — <a href="/magnetostatics-ampere">full page →</a>

<div class="formula"><b>Formula 1.</b> $\vec{B} = \nabla\times\vec{A} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ \partial_x & \partial_y & \partial_z \\ A_x & A_y & A_z \end{vmatrix}$.</div>

<div class="formula"><b>Formula 2.</b> Ampère law, integral form: $\oint\vec{B}\cdot d\vec{l} = \mu_0 I_{in}$, where $I_{in}$ is the current passing through the loop (steady current).</div>

<div class="formula"><b>Formula 3.</b> Ampère law, differential form: $\nabla\times\vec{B} = \mu_0\vec{J}$, where $\vec{J}$ is the current density (A/m²). Eq. (3) follows from Eq. (2) by Stokes' theorem.</div>

<div class="formula"><b>Formula 4.</b> $\nabla\cdot\vec{B} = 0$ — magnetic field lines close on themselves; net flux through any closed surface is zero.</div>

## 3A · Faraday & Lenz — <a href="/emi-faraday">full page →</a>

<div class="formula"><b>Formula 1.</b> $e = -\dfrac{d\Phi}{dt}$ for one turn; $e = -N\dfrac{d\Phi}{dt}$ for $N$ turns.</div>

<div class="formula"><b>Formula 2 (integral form).</b> $\oint\vec{E}\cdot d\vec{l} = -\dfrac{d\Phi}{dt}$ — induced $\vec{E}$ integrated round the loop equals the rate of flux fall.</div>

<div class="formula"><b>Formula 3 (differential form).</b> $\nabla\times\vec{E} = -\dfrac{\partial\vec{B}}{\partial t}$ — a changing $\vec{B}$ at a point creates a curl of $\vec{E}$ there.</div>

## 3B · Inductance — <a href="/emi-inductance">full page →</a>

<div class="formula"><b>Formula 1.</b> Solenoid inductance: $L = \dfrac{\mu_0 N^2 A}{l}$, where $A = \pi r^2$ is the cross-section and $\mu_0 = 4\pi\times 10^{-7}$ H/m.</div>

<div class="formula"><b>Formula 2.</b> Similar-coil scaling: $L \propto N^2$ (same shape, area and length, only turns change).</div>

<div class="formula"><b>Formula 3.</b> Series combination: $L = L_1 + L_2 \pm 2M$ (upper sign <b>aiding</b>, lower sign <b>opposing</b>).</div>

<div class="formula"><b>Formula 4.</b> Magnetic energy stored in an inductor: $U = \dfrac{1}{2}LI^2$ (work done against the induced e.m.f. while building the current).</div>

## 4A · Maxwell equations — <a href="/maxwell-equations">full page →</a>

<div class="formula"><b>Formula 1.</b> Conduction current density $\vec{J}_c = \sigma\vec{E}$ (unit A/m$^2$). Displacement current density $\vec{J}_d = \varepsilon_0\,\partial\vec{E}/\partial t$ (unit A/m$^2$). Total current density $\vec{J} = \vec{J}_c + \vec{J}_d$.</div>

<div class="formula"><b>Formula 2.</b> Ampere–Maxwell law: $\nabla\times\vec{B} = \mu_0\vec{J} + \mu_0\varepsilon_0\,\partial\vec{E}/\partial t$, integral $\oint\vec{B}\cdot d\vec{l} = \mu_0(I_c + \varepsilon_0\,d\Phi_E/dt)$.</div>

<div class="formula"><b>Formula 3.</b> Free-space wave equation: $\nabla^2\vec{E} = \mu_0\varepsilon_0\,\partial^2\vec{E}/\partial t^2$, with speed $c = 1/\sqrt{\mu_0\varepsilon_0} \approx 3\times 10^8$ m/s.</div>

## 4B · EM waves & Poynting — <a href="/maxwell-waves">full page →</a>

<div class="formula"><b>Formula 1.</b> $\vec{S} = \dfrac{1}{\mu_0}(\vec{E}\times\vec{B}) = \vec{E}\times\vec{H}$, unit W/m$^2$, points along the direction of propagation.</div>

<div class="formula"><b>Formula 2.</b> $v = c/n$, $\lambda = \lambda_0/n$, where $c = 3\times 10^8$ m/s. Frequency $f$ does not change (wave crests must match at the boundary).</div>

## 5 · Beats & sonometer — <a href="/beats">full page →</a>

<div class="formula"><b>Formula 1.</b> $A^2 = a_1^2 + a_2^2 + 2a_1a_2\cos\phi$, and $\tan\theta = \dfrac{a_2\sin\phi}{a_1 + a_2\cos\phi}$.</div>

<div class="formula"><b>Formula 2.</b> Beat rate $f_{\text{beat}} = |f_1 - f_2|$ per second.</div>

<div class="formula"><b>Formula 3.</b> $n = \dfrac{1}{2l}\sqrt{\dfrac{T}{\mu}}$, with $\mu = \text{mass/length} = \rho\pi d^2/4$. Here $n$ = frequency (Hz), $l$ = length (m), $T$ = tension (N), $\mu$ = mass per length (kg/m), $\rho$ = density (kg/m$^3$), $d$ = diameter (m).</div>

## 6 · Lissajous — <a href="/lissajous">full page →</a>

<div class="formula"><b>Formula 1.</b> $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} - \dfrac{2xy}{ab}\cos\phi = \sin^2\phi$ — an ellipse (tilted unless $\phi = \pi/2$).</div>

<div class="formula"><b>Formula 2.</b> $\dfrac{\omega_x}{\omega_y} = \dfrac{f_x}{f_y} = \dfrac{N_y}{N_x}$ (crossed ratio — $x$-frequency uses $y$-touches).</div>

## 7 · Huygens — <a href="/huygens">full page →</a>

<div class="formula"><b>Formula 1.</b> $\dfrac{\sin i}{\sin r} = \dfrac{v_1}{v_2} = \dfrac{n_2}{n_1}$, since $v = c/n$.</div>

## 8A · YDSE — <a href="/interference-ydse">full page →</a>

<div class="formula"><b>Formula 1.</b> Resultant intensity in YDSE — $I = I_1 + I_2 + 2\sqrt{I_1 I_2}\cos\delta$</div>

<div class="formula"><b>Formula 2.</b> Fringe width and positions — $y_n = \dfrac{n\lambda D}{d}$ (bright), $\beta = \dfrac{\lambda D}{d}$</div>

## 8B · Newton rings — <a href="/interference-newton">full page →</a>

<div class="formula"><b>Formula 1.</b> Air-film thickness and path difference — $t = \dfrac{r^2}{2R},\qquad \Delta = 2t + \dfrac{\lambda}{2}$ (reflected, normal incidence)</div>

<div class="formula"><b>Formula 2.</b> Ring diameters — dark: $D_n^2 = 4n\lambda R$ &nbsp; (exact); bright: $D_n^2 = 4\!\left(n-\tfrac{1}{2}\right)\!\lambda R$</div>

## 8C · Biprism — <a href="/interference-biprism">full page →</a>

<div class="formula"><b>Formula 1.</b> Fringe width and wavelength — $\beta = \dfrac{\lambda D}{d},\qquad \lambda = \dfrac{\beta d}{D}$</div>

## 9 · Diffraction — <a href="/diffraction">full page →</a>

<div class="formula"><b>Formula 1.</b> Zone plate — zone radii and primary focal length: $r_n^2 = n\lambda b,\qquad f = \dfrac{r_1^2}{\lambda}$</div>

<div class="formula"><b>Formula 2.</b> Plane grating — grating equation: $(a+b)\sin\theta_n = n\lambda,\qquad n_{\max} < \dfrac{a+b}{\lambda}$</div>

## 10 · Polarization — <a href="/polarization">full page →</a>

<div class="formula"><b>Formula 1.</b> <span class="v">E</span> vibration picture: unpolarized → <span class="v">E</span> in all transverse directions; plane-polarized → <span class="v">E</span> in one fixed plane; circular → equal amplitudes with 90° phase gap; elliptic → unequal amplitudes with 90° phase gap.</div>

<div class="formula"><b>Formula 2.</b> Incident ray → o-ray (ordinary, obeys Snell law, refractive index &mu;<sub>o</sub> fixed) + e-ray (extraordinary, in general does not obey Snell law, refractive index &mu;<sub>e</sub> varies with direction).</div>

<div class="formula"><b>Formula 3.</b> Phase retardation through the plate: δ = (2π/λ) · (μ<sub>e</sub> − μ<sub>o</sub>) · t.</div>

<div class="formula"><b>Formula 4.</b> Quarter-wave plate thickness: t = λ / (4 · |μ<sub>e</sub> − μ<sub>o</sub>|).</div>

<div class="formula"><b>Formula 5.</b> Malus law: I = I<sub>0</sub> · cos<sup>2</sup> θ.</div>

<div class="formula"><b>Formula 6.</b> Brewster law: tan i<sub>p</sub> = μ, where μ is the refractive index of the denser medium.</div>

## Borderline · Visibility & resolving power — <a href="/borderline-ge4">full page →</a>

<div class="formula"><b>Formula B8.</b> Michelson fringe visibility: $V = \dfrac{I_{max}-I_{min}}{I_{max}+I_{min}} = \dfrac{2\sqrt{I_1 I_2}}{I_1+I_2}$</div>

<div class="formula"><b>Formula B9a.</b> Grating resolving power: $R = \dfrac{\lambda}{\Delta\lambda} = Nn$</div>

<div class="formula"><b>Formula B9b.</b> Optical instrument (circular aperture $D$): $\theta_{\min} = \dfrac{1.22\lambda}{D},\qquad R = \dfrac{1}{\theta_{\min}} = \dfrac{D}{1.22\lambda}$</div>

<p class="ref"><b>Total:</b> 55 formula blocks. Constant to memorise: $\mu_0 = 4\pi\times 10^{-7}$ H/m, $\varepsilon_0 = 8.85\times 10^{-12}$ F/m, $c = 3\times 10^8$ m/s, $1/4\pi\varepsilon_0 = 9\times 10^9$ N·m²/C².</p>
