# Website Update Notes

This note records the key decisions, implemented changes, and maintenance rules from the recent redesign of `ZeyuGaoAi.github.io`.

## Current Positioning

- Homepage positioning sentence:
  - `Research Associate, University of Cambridge. Current research support from GE HealthCare.`
- Research identity:
  - Computational pathology
  - Multimodal AI
  - Whole-slide image analysis
  - Spatial omics / molecular prediction
  - Robust and clinically relevant pathology AI

## What Was Cleaned Up

- Removed placeholder template content that reduced credibility:
  - `Teaching` navigation entry
  - teaching placeholder pages
  - portfolio placeholder pages
- Result:
  - top navigation is now focused on real content only
  - no fake or demo content should be reintroduced

## Talks Maintenance Logic

- Talks on the homepage should also be represented in `_talks/` when they are real events.
- Relevant event types to include:
  - invited talks
  - lectures
  - webinars
  - posters
  - flash talks
  - presentations
- Current `_talks/` archive has been expanded to cover homepage-reported activities from 2024-2026.
- If a new talk appears in homepage news, also create a corresponding file in `_talks/`.

## Homepage Structure

Homepage file:
- `_pages/about.md`

Homepage style:
- `_sass/custom/_home.scss`
- imported from `assets/css/main.scss`

Current homepage sections:
- Hero
- Research Directions
- Featured Publications
- Selected Talks and Presentations
- Recent Highlights
- Background

## Homepage Content Rules

- The homepage should not read like a full CV pasted into one page.
- Prefer concise, high-signal sections over long chronological text blocks.
- Avoid self-promotional phrasing like:
  - `A first-author ...`
  - `I proudly ...`
  - `This groundbreaking work ...`
- Publication descriptions should explain the method or contribution, not authorship status.
- The homepage should surface:
  - strongest current research identity
  - best papers
  - selected recent talks
  - a short background summary

## Featured Publications Logic

- `Featured Publications` is a curated section, not a full list.
- It should prioritize:
  - strongest representative work
  - papers that reflect current research direction
  - a mix of recent high-visibility work and foundational earlier first-author work
- User preference from this session:
  - remove `WWW 2026 HAAF` from featured publications
  - include own key `TMI`, `MedIA`, and `MICCAI` papers
- Current featured set includes:
  - `CARE`
  - `PH2ST`
  - `SMMILe`
  - `TMI 2023`
  - `MedIA 2023`
  - `TMI 2022`
  - `MICCAI 2020`
  - `MICCAI 2021 (two papers)`

If this section becomes too long later, reduce it to the best 6-8 items.

## Publications Page Logic

Publications page:
- `_pages/publications.html`

Custom publication card include:
- `_includes/archive-publication-card.html`

Publication page styles:
- `_sass/custom/_publications.scss`
- imported from `assets/css/main.scss`

The publications page is no longer intended to be a plain template list.

Current design goals:
- card-based layout
- clearer venue/year metadata
- stronger visual hierarchy
- action buttons such as `Paper`, `Slides`, `BibTeX`, `Details`
- image-first presentation when a paper figure is available

## Publication Image Logic

- If a paper has a good figure / graphical abstract / representative main figure, use it as:
  - `header.teaser`
- This is added in each publication markdown file.
- If no figure is available yet:
  - publication cards fall back to a styled placeholder block using venue/year
- This means missing images do not block page quality.

Already connected with teaser images:
- `MedIA2023.md`
- `SMMILe2025.md`
- `SciRep2024_EffusionViT.md`
- `HiESD.md`

Still missing user-supplied main figures for many papers, especially from:
- IEEE
- Springer / MICCAI
- arXiv
- some newer ScienceDirect papers without easily accessible graphical abstracts

Priority papers to supply figures for:
- `CVPR2026_CARE.md`
- `MedIA2026_PH2ST.md`
- `MedIA_Megaseg.md`
- `MedIA_StaDis.md`
- `TMI2022.md`
- `TMI2023.md`
- `TMI2023_MGTrans.md`
- `TMI2023_SGMF.md`
- `TMI2025.md`
- `MICCAI2020.md`
- `MICCAI2021_0.md`
- `MICCAI2021_1.md`
- `MICCAI2024.md`

## Background Section Rule

- Background should remain short and factual.
- Supervisor names can include links.
- Current linked advisors:
  - Chen Li
  - Deyu Meng
  - Xiangrong Zhang

## What Not To Reintroduce

- no placeholder template content
- no empty nav entries
- no generic portfolio demos
- no long homepage news dump
- no list-only publications page if card layout already exists
- no repetitive self-labeling like `first-author` in homepage summaries

## Good Update Workflow

When updating the website later, use this order:

1. Update content files first:
   - `_pages/about.md`
   - `_talks/*.md`
   - `_publications/*.md`
2. If a new paper should appear strongly on the site:
   - decide whether it belongs in `Featured Publications`
   - add `header.teaser` if a representative figure exists
3. If a new talk is mentioned on the homepage:
   - add a corresponding `_talks/` entry
4. Only then refine style if needed
5. Keep homepage curated rather than exhaustive

## Suggested Next Improvements

- continue adding main figures to high-priority publications
- refine publication card layout after more teaser images are supplied
- possibly reduce homepage featured publications count if the section becomes visually dense
- improve SEO / social preview metadata later
- unify title / bio wording in `_config.yml` with current homepage identity

## Useful Files

- Homepage content:
  - `_pages/about.md`
- Homepage styles:
  - `_sass/custom/_home.scss`
- Publications page:
  - `_pages/publications.html`
- Publications card include:
  - `_includes/archive-publication-card.html`
- Publications styles:
  - `_sass/custom/_publications.scss`
- Talks archive:
  - `_talks/`
- Publication entries:
  - `_publications/`

## Maintenance Principle

The site should look like a curated academic research homepage, not a default Jekyll template and not a raw CV dump.
