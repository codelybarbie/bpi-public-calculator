# BPI · Body Proportion Index

> **An exploratory visible-body proportion observation framework. (Silhouette Calculator)**  
> By Sarang Kang | Silhouette Intelligence, S-Scale Founder


[![Version](https://img.shields.io/badge/version-1.1.0-c8f0c0.svg?style=flat-square)](package.json)
[![Deploy: Vercel](https://img.shields.io/badge/deploy-Vercel-000000.svg?style=flat-square&logo=vercel)](https://vercel.com)
[![Stack: Next.js](https://img.shields.io/badge/stack-Next.js_14-000000.svg?style=flat-square&logo=next.js)](https://nextjs.org)

---

## Citation

If you use this framework, calculator, BG-10 table, terminology, or related concepts in research, software, educational materials, or applied projects, please cite the related DOI records.

Kang S. Body Mass Is Not Body Shape: An Exploratory Framework for Visible-Body Proportion Interpretation. Zenodo. Published May 2026. doi:10.5281/zenodo.20336763

Kang S. Exploring Visible-Body Proportion as a Potential Observational Dimension: BPI Conceptual Equation Layer v0.2. Zenodo. Published May 2026. doi:10.5281/zenodo.20341176

Kang S. Exploring Relational Concepts for Visible-Body Proportion Observation: BPI Relational Equation Layer v0.3. Zenodo. Published May 2026. doi:10.5281/zenodo.20343650

Kang S. A Preliminary Descriptive Reference Scale for Balance Gap: BG-10 Exploratory Coding Layer. Zenodo. Published May 2026. doi:10.5281/zenodo.20345268

---

### BibTeX

```bibtex
@misc{kang2026bpi_visible_body_framework,
  author = {Kang, Sarang},
  title = {Body Mass Is Not Body Shape: An Exploratory Framework for Visible-Body Proportion Interpretation},
  year = {2026},
  publisher = {Zenodo},
  doi = {10.5281/zenodo.20336763}
}

@misc{kang2026bpi_conceptual_equation_layer,
  author = {Kang, Sarang},
  title = {Exploring Visible-Body Proportion as a Potential Observational Dimension: BPI Conceptual Equation Layer v0.2},
  year = {2026},
  publisher = {Zenodo},
  doi = {10.5281/zenodo.20341176}
}

@misc{kang2026bpi_relational_equation_layer,
  author = {Kang, Sarang},
  title = {Exploring Relational Concepts for Visible-Body Proportion Observation: BPI Relational Equation Layer v0.3},
  year = {2026},
  publisher = {Zenodo},
  doi = {10.5281/zenodo.20343650}
}

@misc{kang2026bg10_exploratory_coding_layer,
  author = {Kang, Sarang},
  title = {A Preliminary Descriptive Reference Scale for Balance Gap: BG-10 Exploratory Coding Layer},
  year = {2026},
  publisher = {Zenodo},
  doi = {10.5281/zenodo.20345268}
}
```

---

## What is BPI?

BPI (Body Proportion Index) is an **exploratory visible-body proportion observation framework** — a public measurement language for understanding how upper and lower body frames expand relative to a common waist anchor.

It is not:
- ❌ A fitness scoring system
- ❌ A beauty ranking tool
- ❌ A medical diagnostic engine
- ❌ A body grading platform

It is:
- ✓ A lightweight public research interface
- ✓ A visible-body proportion measurement language
- ✓ An exploratory observational coding framework
- ✓ An educational visualization layer

---

## Why Visible-Body Proportion?

Most body measurement tools focus on weight or composition. BPI addresses a different question: **how does the visible silhouette balance across three structural anchors — shoulder, waist, and hip?**

The relationship between these three circumference points creates a distinct visual proportion signature. BPI makes this signature legible as a public measurement language.

---

## Mathematical Definitions

```
UD (Upper Difference)  =  Shoulder − Waist
LD (Lower Difference)  =  Hip − Waist
BG (Balance Gap)       =  | UD − LD |
```

**BG** represents the discrepancy between upper and lower frame expansion tendencies relative to waist.

---

## BG-10 Observational Coding Table

BG-10 is a **simplified observational coding reference layer** for educational and visualization purposes.

### Locked Direction

> **Lower BG-10 Coding Level** = smaller Balance Gap / stronger proportional balance  
> **Higher BG-10 Coding Level** = larger Balance Gap / broader relational discrepancy requiring contextual review

| BG Range (inch) | BG-10 Coding Level | Operational Label            |
|:---------------:|:------------------:|:-----------------------------|
| 0.0 – 0.9       | 1                  | Near-Perfect Balance         |
| 1.0 – 1.9       | 2                  | High Balance                 |
| 2.0 – 2.9       | 3                  | Balanced                     |
| 3.0 – 3.9       | 4                  | Balanced Tendency            |
| 4.0 – 5.9       | 5                  | Balanced Stability Range   |
| 6.0 – 7.9       | 6                  | Noticeable Gap               |
| 8.0 – 9.9       | 7                  | Strong Gap                   |
| 10.0 – 11.9     | 8                  | High Gap                     |
| 12.0 – 13.9     | 9                  | Very High Gap                |
| > 14.0          | 10                 | Outlier / Review             |

> ⚠️ BG-10 is NOT a medical score, attractiveness score, health score, or human value ranking.  
> This table is observational, non-diagnostic, and for educational use only.

---

## Public vs Protected Layer

This repository exposes **only the public measurement language layer**.

### ✓ PUBLIC (This Repository)

| Layer | Contents |
|-------|----------|
| Measurement language | UD, LD, BG mathematical formulas |
| BG-10 Coding Table | Observational reference ranges |
| Educational visualization | Calculator UI and proportion bar |
| Operational labels | Non-diagnostic, non-judgmental labels |

### 🔒 PROTECTED (Not Included)

| Layer | Contents |
|-------|----------|
| Protected architecture | Patent-pending interpretation architecture |
| S-Scale / S.A.A. layer | Protected non-public interpretation logic |
| Internal systems | Internal calibration and review systems |
| Platform infrastructure | Non-public grading and platform infrastructure |

> Measurement language is public. Interpretation infrastructure is protected.

---

## Ethical Statement

- **BPI does not define human worth, attractiveness, or medical status.**
- Visible-body interpretation should remain contextual, non-diagnostic, and ethically applied.
- BG-10 coding ranges are defined for educational and observational purposes only.
- No output from this system should be used for clinical, diagnostic, or discriminatory purposes.

---

## Research Disclaimer

BPI is an exploratory research-stage framework. All outputs are:

- **Observational**, not diagnostic
- **Educational**, not prescriptive
- **Exploratory**, not definitive
- **Non-clinical**, for visualization purposes only

---

## Future Platform Vision

BPI is the public measurement language layer of a larger visible-body intelligence infrastructure:

```
BPI Public Layer              ←  This repository
    ↓
Protected Interpretation Engine  (not public)
    ↓
S-Scale Platform  (future)
    ↓
Certified Silhouette Profile  (future)
    ↓
Partner API / Hardware Integration  (future)
```

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Fonts | Syne (display) · DM Mono (body) |
| Deploy | Vercel / GitHub Pages |

---

## Local Development

```bash
# Clone
git clone https://github.com/your-org/bpi-public.git
cd bpi-public

# Install
npm install

# Run dev server
npm run dev
# → http://localhost:3000
```

---

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository directly at [vercel.com](https://vercel.com) for automatic deploys.

### GitHub Pages (Static Export)

```bash
npm run build
# → Generates /out directory
```

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

---

## Project Structure

```
bpi-public/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with fonts/metadata
│   │   ├── page.tsx          # Main page
│   │   └── globals.css       # Design tokens + color bands
│   ├── components/
│   │   ├── Hero.tsx          # Landing hero with founder credit
│   │   ├── Calculator.tsx    # BPI input + BG-10 result display
│   │   ├── BGTable.tsx       # BG-10 coding reference table
│   │   └── Footer.tsx        # Ethical footer
│   └── lib/
│       └── bpi.ts            # Public calculation logic (UD/LD/BG/BG-10)
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## License and Use

This repository is publicly available for research viewing, educational reference, and exploratory discussion.

No open-source license is currently granted for commercial reuse, derivative systems, redistribution, or incorporation into commercial products without prior written permission.

The public materials in this repository include only the simplified BPI/BG/BG-10 measurement and visualization layer.

If you use this framework, calculator, BG-10 table, terminology, or related concepts in research, software, educational materials, content, or applied projects, please cite the related DOI records listed above.

---

## Patent-Pending Notice

The public calculator in this repository exposes only a simplified BPI/BG/BG-10 measurement and visualization layer.

The broader S-Scale interpretation infrastructure is related to a patent-pending system titled:

**“Silhouette measurement and quantitative analysis system and silhouette measurement and quantitative analysis method using the same.”**

This repository does not disclose, license, or reproduce the protected interpretation architecture, proprietary calibration logic, non-public grading systems, or full S-Scale platform infrastructure.


---

<p align="center">
  <sub>BPI · Public Research Layer · By Sarang Kang | Silhouette Intelligence, S-Scale Founder</sub><br/>
  <sub>An exploratory visible-body proportion observation framework. (Silhouette Calculator)</sub>
</p>
