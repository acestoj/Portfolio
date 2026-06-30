# Aleksandar Stojkoski — Engineering Portfolio

A static HTML/CSS/JS portfolio site, built to host for free on GitHub Pages. No build step, no framework — just `index.html`, one stylesheet, and a small script.

```
portfolio/
├── index.html          ← all the content lives here
├── css/style.css        ← all the styling/colors/layout
├── js/main.js             ← galleries, scroll-reveal, active-tab highlighting
└── assets/
    ├── resume.pdf                       ← already in here, linked from the Download Résumé buttons
    │
    ├── spiderguide-fea-combined.jpg     ← ADD — combined ABAQUS results (static/freq/buckling)
    ├── spiderguide-cad.jpg              ← ADD — final CAD assembly
    ├── spiderguide-exploded.jpg         ← ADD — exploded view, side & front
    ├── spiderguide-prototype.jpg        ← ADD — 3D-printed prototype
    │
    ├── bridge-model.jpg                 ← ADD — SPACE GASS structural model
    ├── bridge-hand-calcs.jpg            ← ADD — hand-calculation / FBD-SFD-BMD sketch
    │
    ├── warman-collapsed.jpg             ← ADD — arm in collapsed/stowed position
    ├── warman-extended.jpg              ← ADD — arm fully extended
    ├── warman-underneath.jpg            ← ADD — drivetrain/cog mechanism, underside
    ├── warman-competition.jpg           ← ADD — on the table, competition day
    └── warman-arm-cad.jpg               ← ADD — arm mechanism CAD assembly
```

---

## 1. Add your own images

Each project has a small **gallery** — Previous/Next arrows under the image, with a counter. Open `index.html` and search for `media-placeholder` — every slot names the exact file it expects, e.g.:

```html
<div class="media-placeholder">
  <span>Drop image here</span>
  <code>assets/spiderguide-fea-combined.jpg</code>
</div>
```

To swap a placeholder for a real photo, drop the file into `assets/` with that exact filename, then replace just the `<div class="media-placeholder">...</div>` line inside that slide with:

```html
<img src="assets/spiderguide-fea-combined.jpg" alt="Combined ABAQUS results showing static, frequency and buckling analysis">
```

Leave the rest of the `<div class="gallery-slide">` wrapper and caption alone — only the placeholder div needs swapping for an `<img>`. Want to add or remove a slide? Copy or delete an existing `<div class="gallery-slide">...</div>` block within that gallery — the counter and arrows update automatically.

Keep filenames lowercase with no spaces — `spiderguide-cad.jpg` not `SpiderGuide CAD.jpg` — GitHub Pages is case-sensitive about paths in a way Windows isn't, which is the single most common reason images "work locally but not online."

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
