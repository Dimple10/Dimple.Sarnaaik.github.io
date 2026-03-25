# Claude Code Prompt — Astrophysics Personal Website

---

## Project Overview

Build a personal academic website for a 5th-year astrophysics PhD student specializing in dark matter research, currently applying for postdocs. The site will be deployed via **GitHub Pages using GitHub Actions**, built with **Next.js (App Router)**. It is a showcase for the academic job market.

---

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS + CSS Modules for custom animations
- **Animations**: Framer Motion for scroll reveals and transitions
- **Canvas/Viz**: Vanilla Canvas API (no Three.js overhead) for particle/density simulations
- **Deployment**: GitHub Actions → GitHub Pages (`gh-pages` branch)
- **Fonts**: Load via `next/font` — use a refined serif for display (e.g. Playfair Display or DM Serif Display) paired with a monospace (JetBrains Mono or IBM Plex Mono) for labels/nav/UI elements

---

## Design System

### Color Palette
```
--bg-primary:     #080808
--bg-secondary:   #0d0d0d
--bg-surface:     #111111
--border:         #1e1e1e
--border-accent:  #2a2a2a
--gold-bright:    #c8a96e
--gold-mid:       #9a7a4a
--gold-dim:       #5c4a2a
--text-primary:   #f0e6c8
--text-secondary: #9a8a6a
--text-muted:     #555555
```

### Typography Rules
- **Display / headings**: serif font (e.g. DM Serif Display), font-weight 300–400, generous letter-spacing
- **UI / nav / labels / code**: monospace font, uppercase, letter-spacing 2–4px, font-size 10–12px
- **Body text**: serif or a humanist sans (not Inter/Roboto), 14–15px, line-height 1.7
- **Section eyebrows**: monospace, uppercase, `--gold-bright`, letter-spacing 4px, font-size 10px

### Motion Principles
- Scroll-triggered reveals: `opacity: 0 → 1` + `translateY(24px → 0)`, staggered children, threshold 0.15
- Navigation active-section highlight: use IntersectionObserver on all sections, update nav link underline in gold
- Custom cursor: small gold dot (6px) + larger ghost ring (28px) that lags behind; on hover over interactive elements, the ring expands to 48px and fills with `rgba(200,169,110,0.1)`
- No cursor on mobile/touch

---

## Site Architecture

```
/                    → one-page scroll (About → Research → CV → Talks → Blog → Interests)
/blog/[slug]         → individual blog post pages (MDX)
/research/[slug]     → optional deep-dive research project pages
```

### Navigation
- Fixed top nav, `backdrop-filter: blur(12px)` + dark bg at 95% opacity on scroll
- Links: About · Research · CV · Talks · Blog · Interests
- Active section highlighted in `--gold-bright` with a 1px bottom border in gold
- "Download CV" button (monospace, gold border, top-right)
- Mobile: hamburger → full-screen dark overlay menu

---

## Sections (in order)

### 1. HERO — Interactive Dark Matter Density Map

**The concept**: A full-viewport canvas that simulates a dark matter density field. Particles cluster gravitationally toward the center forming a halo. Users can drag to perturb particles (they respond to mouse position like gravitational attraction/repulsion). A subtle density heatmap renders underneath the particles in amber tones.

**Implementation**:
- Canvas fills 100vh
- ~250–300 particles initialized with NFW-profile-like radial distribution (`r ~ power-law with index ~0.5`)
- Each frame: render a downsampled density field (iterate over a grid, sum `brightness / (dist² + softening)` per pixel), then draw particle dots on top
- Mouse interaction: particles within radius 120px are attracted toward mouse position; on click, a brief repulsion burst ripples outward
- Small monospace label top-right: `"drag to explore · click to perturb"`
- Overlay text (centered, above canvas):
  - Eyebrow: `[YOUR FIELD] · DARK MATTER RESEARCH` (monospace, gold)
  - Name: large serif display, font-weight 300
  - Subtitle: `5th Year PhD · [Your University]` (monospace, muted)
  - One-liner: brief poetic description of research (serif, `--text-secondary`)
  - Two CTA buttons: `View Research` (gold border) + `Download CV` (muted border)
- Scroll arrow at bottom center

### 2. ABOUT

- Two-column layout on desktop: left = portrait photo (grayscale with gold tint on hover), right = bio text
- Bio written in first person, warm and personal voice
- Small stat cards below bio: `[University]`, `[Advisor]`, `[Year]`, `[Location]`
- A subtle animated starfield background (separate from hero canvas — just faint static dots, no interaction here)

### 3. RESEARCH

Three subsections, each scroll-revealed:

#### 3a. N-body Dark Matter Halo Simulation (animated banner)
- A full-width canvas (height ~200px) showing an animated dark matter halo
- Particles orbit the center with realistic angular momentum
- Density field rendered underneath in amber
- Label: `"N-body dark matter halo simulation · live"` (monospace, bottom-right)
- This is decorative/atmospheric, not interactive

#### 3b. Two Interactive Plots (side by side)

**Left — Techniques Radar Chart**:
- SVG/Canvas radar chart
- Three axes: `Gravitational / Astrophysical Probes` · `Theory & Model Building` · `Simulations (N-body / Hydro)`
- Gold filled polygon showing proficiency level on each axis
- Axis labels in monospace, gridlines in `--border`
- Subtle pulsing animation on the filled polygon (scale 0.98 → 1.02, 3s loop)

**Right — DM Models Interactive Grid**:
- 2×2 card grid for: `WIMPs` · `Fuzzy / Ultra-light DM` · `SIDM` · `Primordial Black Holes`
- Each card: model name (monospace), a thin horizontal bar showing relative experience level (gold fill), and a 2-word descriptor
- Clicking a card expands a detail panel below the grid with a brief 2-3 sentence description of your work/approach with that model
- Active card gets `border-color: --gold-bright` + subtle gold background tint

#### 3c. Research Projects (card list)
- 2–3 featured research project cards
- Each: project title (serif), 1-sentence description, technique + model tags (monospace badges), and a link to `/research/[slug]` for a detail page

### 4. PUBLICATIONS — Interactive Timeline

- Vertical timeline, left-anchored
- Each entry: year label (monospace, muted) · dot on timeline line · publication title (serif) · journal + arXiv link · tags (DM model + technique, gold outline badges)
- On hover, the dot turns gold and the entry slides right by 4px
- Filter buttons above timeline: `All · SIDM · Fuzzy DM · PBHs · WIMPs` — clicking filters visible entries with a fade transition
- "View on NASA ADS / arXiv" link at bottom

### 5. CV / RESUME

- Inline section (not just a PDF link, though include a PDF download button)
- Clean two-column layout: left = timeline of education + experience, right = skills, awards, service
- Timeline entries same visual style as publications section
- Monospace labels, serif content text
- "Download full CV (PDF)" button — gold bordered, top of section

### 6. TALKS & PRESENTATIONS

- Card grid (3 columns on desktop)
- Each card: talk title, venue, date, location, talk type badge (`Invited` / `Contributed` / `Seminar`)
- Cards have a subtle hover: border goes from `--border` to `--gold-dim`, slight upward translate
- Link to slides (PDF) or recording where available

### 7. BLOG / NOTES

- Card grid, 2 columns
- Each card: post title (serif), date (monospace), 1-sentence excerpt, reading time, tags
- Categories: `Research Notes` · `Explainers` · `Field Thoughts`
- Links to `/blog/[slug]` — MDX-powered, same dark aesthetic, serif body text, syntax highlighting in gold tones for any code blocks
- Writing tone: personal, first-person, exploratory

### 8. INTERESTS / SIDE QUESTS

- More relaxed section, slight visual break from the dense academic content
- Grid of interest cards (hobbies, side projects, non-research passions)
- Warmer tone, slightly larger body text
- You fill in the content — placeholder: photography, music, hiking, etc.

---

## GitHub Actions Deployment

Create `.github/workflows/deploy.yml`:

```yaml
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

In `next.config.js`, set:
```js
output: 'export'
basePath: '/your-repo-name'  // replace with your actual GitHub repo name
trailingSlash: true
images: { unoptimized: true }
```

---

## File Structure to Create

```
/
├── app/
│   ├── layout.tsx           (global fonts, cursor, nav)
│   ├── page.tsx             (one-page scroll, all sections)
│   ├── blog/[slug]/page.tsx
│   └── research/[slug]/page.tsx
├── components/
│   ├── Nav.tsx
│   ├── CustomCursor.tsx
│   ├── sections/
│   │   ├── Hero.tsx         (canvas + overlay)
│   │   ├── About.tsx
│   │   ├── Research.tsx
│   │   ├── Publications.tsx
│   │   ├── CV.tsx
│   │   ├── Talks.tsx
│   │   ├── Blog.tsx
│   │   └── Interests.tsx
│   ├── viz/
│   │   ├── DensityCanvas.tsx    (hero interactive canvas)
│   │   ├── NBodyBanner.tsx      (research section banner)
│   │   ├── TechniquesRadar.tsx
│   │   └── ModelsGrid.tsx
│   └── ui/
│       ├── ScrollReveal.tsx     (Framer Motion wrapper)
│       ├── TagBadge.tsx
│       └── TimelineItem.tsx
├── content/
│   ├── publications.ts      (your pubs data)
│   ├── talks.ts
│   ├── research.ts
│   └── blog/                (MDX files)
├── public/
│   ├── cv.pdf
│   └── headshot.jpg
├── styles/
│   └── globals.css          (CSS vars, cursor styles, scrollbar)
└── .github/workflows/deploy.yml
```

---

## Content Placeholders to Fill In

When building, use these placeholders and add comments like `// TODO: replace with real content`:

- `YOUR_NAME` — your full name
- `YOUR_UNIVERSITY` — e.g. "University of California, Santa Cruz"
- `YOUR_ADVISOR` — advisor name
- `YOUR_TAGLINE` — 1-sentence poetic research description, e.g. "Searching for the invisible scaffolding of the universe."
- `YOUR_BIO` — 2–3 paragraph personal first-person bio
- `YOUR_PUBLICATIONS[]` — array of publication objects `{ title, journal, year, arxiv, models[], techniques[] }`
- `YOUR_TALKS[]` — array `{ title, venue, date, type, slides_url }`
- `YOUR_INTERESTS[]` — array of interest cards

---

## Quality Checklist

Before finishing, ensure:
- [ ] Canvas animations run at 60fps (use `requestAnimationFrame`, avoid per-frame layout reads)
- [ ] All text is readable at all scroll positions (overlay text on canvas has sufficient contrast)
- [ ] IntersectionObserver correctly highlights active nav section
- [ ] Custom cursor is hidden on mobile (`@media (pointer: coarse)`)
- [ ] GitHub Actions workflow deploys successfully to `gh-pages` branch
- [ ] `next/image` is configured for static export
- [ ] All external links open in new tab
- [ ] Site looks good at 1280px, 1440px, and 768px (tablet)
- [ ] MDX blog posts render correctly with custom components
- [ ] Publications filter works with fade transition
- [ ] Clicking DM model cards shows correct detail text

---

## Reference Mockups

Two interactive mockups were provided showing:
1. **Hero section**: dark canvas density field, name overlay, CTA buttons, nav
2. **Research section**: N-body banner, radar chart (techniques), model cards (DM models), publication timeline

Match the visual language: black backgrounds, warm gold (`#c8a96e`) accents, serif display type, monospace UI labels, thin 0.5px borders, no gradients on UI surfaces (only on canvas density fields).
