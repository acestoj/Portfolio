# Aleksandar Stojkoski — Engineering Portfolio

A static HTML/CSS/JS portfolio site, built to host for free on GitHub Pages. No build step, no framework — just `index.html`, one stylesheet, and a small script.

```
portfolio/
├── index.html          ← all the content lives here
├── css/style.css        ← all the styling/colors/layout
├── js/main.js             ← galleries, scroll-reveal, active-tab highlighting
└── assets/
    ├── resume.pdf                            ← linked from the Download Résumé buttons
    │
    ├── spiderguide-clamp-fea.jpg             ← clamp bracket FEA (stress/PEEQ/displacement)
    ├── spiderguide-chain-fea.jpg             ← chain bracket FEA (stress/PEEQ/frequency mode)
    ├── spiderguide-cad-exploded.jpg          ← final CAD assembly + exploded views
    │
    ├── bridge-hand-calcs-verification.jpg    ← main girder hand calcs vs. software output
    ├── bridge-drawing-elevation.jpg          ← Drawing A-1, full elevation
    ├── bridge-drawing-tower.jpg              ← Drawing A-3, A-frame tower
    │
    ├── warman-collapsed.jpg                  ← arm collapsed — CAD + physical build
    └── warman-extended.jpg                   ← drivetrain detail + arm extended
```

All eight project images are now real and already in `assets/` — nothing left to drop in for SpiderGuide, Bridge or Warman. Two optional gaps if you want to fill them later: a 3D-printed SpiderGuide prototype shot, and an actual SPACE GASS 3D model render for the Bridge gallery (currently represented by the hand-calc/verification image instead). Neither is required — the site is complete without them.

---

## 1. Adding more images later

Each project has a small **gallery** — Previous/Next arrows under the image, with a counter. To add another slide to any gallery, open `index.html`, find the relevant `data-gallery` block, and copy an existing `<div class="gallery-slide">...</div>` entry, swapping in your new filename and caption:

```html
<div class="gallery-slide">
  <img src="assets/your-new-image.jpg" alt="Describe the image for accessibility">
  <p class="gallery-caption">Your caption here</p>
</div>
```

Drop the actual file into `assets/` with that exact filename. The counter and arrows update automatically — no other code changes needed.

Keep filenames lowercase with no spaces — GitHub Pages is case-sensitive about paths in a way Windows isn't, which is the single most common reason images "work locally but not online."

## 2. The Warman Challenge section

There's a placeholder sheet (`warman-challenge.f3d` tab) waiting for real content — it's intentionally left as a visible "🚧 placeholder" note in `index.html` (search for `todo-block`) rather than filled with guessed content. Once you've got the details sorted, that section follows the same Objective/Result/verification-table pattern as the other three — easiest to ask for it to be filled in properly rather than hand-writing it from scratch.

## 3. Fill in the placeholder links

Search `index.html` for `your-username` and `your-profile` — there are two:

```html
<a href="https://github.com/your-username" ...>GitHub ↗</a>
<a href="https://www.linkedin.com/in/your-profile" ...>LinkedIn ↗</a>
```

Swap those for your actual GitHub and LinkedIn URLs.

---

## 4. Put it on GitHub Pages

**If you don't have a GitHub account yet:** create one at github.com first.

**Create the repository:**
1. On GitHub, click **New repository**.
2. Name it anything you like — e.g. `portfolio`. (There's one special name: a repo literally named `your-username.github.io` gets served at the root domain `your-username.github.io` instead of `your-username.github.io/portfolio`. Either works fine; the special name is just shorter.)
3. Leave it public, don't initialise with a README (you already have one).

**Push your files** — open a terminal in this `portfolio` folder and run:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/your-username/portfolio.git
git push -u origin main
```

(Replace the URL with the one GitHub shows you after creating the repo.)

**Turn on Pages:**
1. In your repo on GitHub, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Branch: **main**, folder: **/ (root)**. Save.
4. Wait ~1 minute, then refresh — GitHub shows you the live URL (something like `https://your-username.github.io/portfolio/`).

That's it — no build tools, no CI config. GitHub just serves the files as-is.

## 5. Making changes later

Every time you edit a file and want the live site updated:

```bash
git add .
git commit -m "describe what you changed"
git push
```

GitHub Pages rebuilds automatically within about a minute of any push to `main`.

---

## Notes on the design

The whole site borrows the visual language of an engineering drawing sheet — title blocks, sheet numbers, verification tables — because that's genuinely what your project work looks like, not because it's a generic portfolio template. The tabs at the top are styled as open files in CAD software (`.f3d` for projects, `.bom` for the skills page) rather than a generic nav bar, and they highlight automatically as you scroll past each section. The colour for "critical" / pass / in-progress states follows the same logic as a stress contour plot: blue/teal = comfortable margin, orange/red = where it actually matters. If you add more projects later, copy an existing `<article class="sheet">...</article>` block in `index.html`, give it a new tab in the header, and edit its content — the styling and scroll-highlighting will carry over automatically.
