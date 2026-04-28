# Launchroom — Complete Design System & Site Spec
> Hand this document to your coding agent as-is. Everything needed to build the full site.

---

## 1. Design Philosophy

**Direction:** Dark editorial studio. Think a high-end creative agency meets a developer's portfolio — serious, confident, not flashy.

**Three principles driving every decision:**

1. **Credibility over creativity.** The audience is Indian SMB owners and potential clients — they need to trust you immediately. Dark + structured + clean achieves this faster than colorful/playful.
2. **Amber as signal, not decoration.** The accent color (amber/golden) is used exclusively for things that matter: CTAs, highlights, active states, numbers. Never as a decorative fill.
3. **Typography does the heavy lifting.** Syne at 800 weight is bold enough that you don't need gradients or illustrations to make pages feel designed.

**What this site is NOT:**
- Not a resume/CV site (no timeline of education)
- Not a typical dev portfolio with GitHub stats
- Not a generic agency template with stock photos
- Not light-mode-default (dark is the primary, intentional theme)

---

## 2. Color Tokens

Use as CSS custom properties on `:root`. Every color in the project comes from here — no hardcoded hex anywhere else.

```css
:root {
  /* Backgrounds — layered depth system */
  --color-bg:        #080808;   /* Page background. Deepest layer. */
  --color-surface-1: #101010;   /* Cards, sections. One step up. */
  --color-surface-2: #161616;   /* Featured/hover cards. Two steps up. */
  --color-surface-3: #1e1e1e;   /* Inputs, nested elements. */

  /* Accent — amber/golden. Used sparingly and intentionally. */
  --color-accent:        #E8A020;
  --color-accent-dim:    rgba(232, 160, 32, 0.10);  /* Badge backgrounds */
  --color-accent-border: rgba(232, 160, 32, 0.22);  /* Badge borders, featured card borders */
  --color-accent-hover:  #F0AA28;                   /* Hover state of accent */

  /* Text — three levels */
  --color-text-primary:   #F0ECE4;  /* Headings, important body */
  --color-text-secondary: #A8A49C;  /* Subheadings, card descriptions */
  --color-text-muted:     #808078;  /* Labels, nav links, captions */
  --color-text-disabled:  #4a4a46;  /* Placeholder text */

  /* Borders — white at low opacity */
  --color-border:       rgba(255, 255, 255, 0.07);  /* Default borders */
  --color-border-hover: rgba(255, 255, 255, 0.13);  /* Hover state */
  --color-border-strong:rgba(255, 255, 255, 0.20);  /* Emphasis borders */

  /* Semantic colors */
  --color-success: #22c55e;
  --color-error:   #ef4444;

  /* On-accent (text on amber background) */
  --color-on-accent: #000000;
}
```

**Color usage rules:**
- `--color-bg` → `<body>` background only
- `--color-surface-1` → standard cards, section fills
- `--color-surface-2` → featured cards, hover state of surface-1 cards
- `--color-accent` → primary buttons, links, eyebrow labels, numbers, arrows
- `--color-accent-dim` + `--color-accent-border` → badge/pill backgrounds only
- Never use `--color-accent` as a large background fill (the CTA band is the only exception and uses it intentionally for contrast)

---

## 3. Typography

**Font pairing:**
```
Display / Headings:  Syne        — weights 400, 500, 700, 800
Body / UI:           DM Sans     — weights 300, 400, 500
```

**Google Fonts import:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet"/>
```

**Type scale:**
```css
:root {
  --font-display: 'Syne', sans-serif;
  --font-body:    'DM Sans', sans-serif;

  /* Scale */
  --text-xs:    11px;   /* Tags, legal, tiny labels */
  --text-sm:    13px;   /* Captions, footer links, small body */
  --text-base:  15px;   /* Standard body copy */
  --text-md:    18px;   /* Lead paragraphs, hero sub */
  --text-lg:    22px;   /* Card headings, large labels */
  --text-xl:    clamp(28px, 3.2vw, 44px);   /* Section titles */
  --text-2xl:   clamp(36px, 5vw, 64px);     /* Page heroes */
  --text-hero:  clamp(46px, 6.5vw, 84px);   /* Homepage hero only */
}
```

**Typography rules:**
- All display text (`font-family: var(--font-display)`) is `font-weight: 800` unless noted otherwise
- `letter-spacing: -0.03em` on all Syne 800 text (tightens the large type)
- `line-height: 1.01` on hero H1 (tight), `1.1` on section titles, `1.6-1.75` on body
- Eyebrow labels: `font-size: 12px`, `font-weight: 500`, `letter-spacing: 0.14em`, `text-transform: uppercase`, `color: var(--color-text-muted)` — always with a short amber line before them
- Never use Syne at weight 400 for headings — it looks weak. Minimum 700 for any display use.

---

## 4. Spacing System

Base unit: **4px**. All spacing values are multiples.

```
4px   → xs   (icon gaps, tight internal)
8px   → sm   (between badge and text)
12px  → md   (internal card gaps)
16px  → lg   (between elements in a row)
20px  → xl   (between inline items)
24px  → 2xl  (card internal padding small)
32px  → 3xl  (card internal padding standard)
40px  → 4xl  (between card rows)
48px  → 5xl  (section padding horizontal / page side padding)
64px  → 6xl  (gap between sections vertically)
80px  → 7xl  (section top/bottom padding standard)
96px  → 8xl  (hero top padding)
120px → 9xl  (large hero breathing room)
```

**Page layout:**
- Max content width: `1160px`
- Horizontal page padding: `48px` (desktop), `20px` (mobile)
- Use `max-width: 1160px; margin: 0 auto; padding: 0 48px;` wrapper on all sections

---

## 5. Border Radius

```css
:root {
  --radius-xs:  6px;    /* Tags, small badges */
  --radius-sm:  8px;    /* Small UI elements */
  --radius-md:  12px;   /* Medium cards */
  --radius-lg:  16px;   /* Standard cards */
  --radius-xl:  20px;   /* Large cards, service cards */
  --radius-2xl: 24px;   /* CTA sections, big containers */
  --radius-full: 100px; /* Buttons, pills — always rounded */
}
```

---

## 6. Shadows

None on dark-theme surfaces. Instead, use borders that brighten on hover.

```css
/* The only "shadow" in this design system */
--shadow-none: none;

/* Focus ring for accessibility */
--focus-ring: 0 0 0 2px var(--color-accent);
```

---

## 7. Component Library

### 7.1 Buttons

```css
/* Primary — amber fill, black text */
.btn-primary {
  background: var(--color-accent);
  color: var(--color-on-accent);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 700;
  padding: 13px 28px;
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  transition: opacity 0.18s;
  text-decoration: none;
  display: inline-block;
}
.btn-primary:hover { opacity: 0.88; }
.btn-primary:active { transform: scale(0.98); }

/* Ghost — transparent, muted, with arrow icon */
.btn-ghost {
  background: transparent;
  color: var(--color-text-muted);
  font-size: 14px;
  font-weight: 400;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  text-decoration: none;
  transition: color 0.18s;
}
.btn-ghost:hover { color: var(--color-text-primary); }
.btn-ghost svg { transition: transform 0.18s; }
.btn-ghost:hover svg { transform: translateX(3px); }

/* Dark — used only on amber/accent backgrounds */
.btn-dark {
  background: #000;
  color: var(--color-accent);
  font-size: 14px;
  font-weight: 700;
  padding: 14px 30px;
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.18s;
}
.btn-dark:hover { opacity: 0.85; }

/* Outline — for secondary actions */
.btn-outline {
  background: transparent;
  color: var(--color-text-secondary);
  font-size: 14px;
  font-weight: 500;
  padding: 11px 24px;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border-hover);
  cursor: pointer;
  transition: border-color 0.18s, color 0.18s;
  text-decoration: none;
}
.btn-outline:hover {
  border-color: var(--color-border-strong);
  color: var(--color-text-primary);
}
```

### 7.2 Cards

```css
/* Standard card */
.card {
  background: var(--color-surface-1);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: 32px;
  transition: border-color 0.2s;
}
.card:hover { border-color: var(--color-border-hover); }

/* Featured card (highlighted, e.g. pricing) */
.card-featured {
  background: var(--color-surface-2);
  border-color: var(--color-accent-border);
}
.card-featured:hover { border-color: var(--color-accent); }

/* Clickable card (work, apps) */
.card-link {
  display: block;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
```

### 7.3 Badges & Tags

```css
/* Accent badge — used for "Live", "Most popular", status */
.badge-accent {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: var(--color-accent-dim);
  color: var(--color-accent);
  border: 1px solid var(--color-accent-border);
  padding: 4px 12px;
  border-radius: var(--radius-full);
  display: inline-block;
}

/* Neutral tag — tech stack, categories */
.tag {
  font-size: 11px;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  padding: 5px 12px;
  border-radius: var(--radius-full);
  display: inline-block;
}
```

### 7.4 Eyebrow + Section Title Pattern

Every section that needs a heading uses this exact pattern:

```html
<p class="eyebrow">What we do</p>
<h2 class="section-title">Services</h2>
```

```css
.eyebrow {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
}
/* Optional: amber line before eyebrow */
.eyebrow::before {
  content: '';
  width: 24px;
  height: 1.5px;
  background: var(--color-accent);
  flex-shrink: 0;
}

.section-title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.1;
  color: var(--color-text-primary);
  margin-bottom: 48px;
}
```

### 7.5 Navigation

```css
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 48px;
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  background: rgba(8, 8, 8, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  z-index: 100;
}

/* Logo */
.logo {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 19px;
  letter-spacing: -0.03em;
  color: var(--color-text-primary);
  text-decoration: none;
}
.logo em { font-style: normal; color: var(--color-accent); }

/* Nav links */
.nav-links {
  display: flex;
  gap: 30px;
  list-style: none;
}
.nav-links a {
  font-size: 14px;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color 0.18s;
}
.nav-links a:hover,
.nav-links a[aria-current="page"] {
  color: var(--color-text-primary);
}
/* Active page indicator */
.nav-links a[aria-current="page"]::after {
  content: '';
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-accent);
  margin: 3px auto 0;
}
```

### 7.6 Stat Block

```css
.stat-num {
  font-family: var(--font-display);
  font-size: 36px;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--color-text-primary);
}
.stat-num span { color: var(--color-accent); }  /* The +, %, y suffix */
.stat-label {
  font-size: 13px;
  color: var(--color-text-muted);
  margin-top: 6px;
}
```

### 7.7 Ticker / Marquee

```css
.ticker-wrap {
  overflow: hidden;
  padding: 16px 0;
  background: var(--color-surface-1);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}
.ticker-track {
  display: flex;
  width: max-content;
  animation: ticker-scroll 24s linear infinite;
}
.ticker-track:hover { animation-play-state: paused; }
.ticker-item {
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: 0 28px;
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
}
.ticker-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-accent);
  flex-shrink: 0;
}
@keyframes ticker-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
/* Duplicate all items in HTML to fill the scroll seamlessly */
```

### 7.8 Divider Grid (Services pattern)

Services are displayed in a grid where the gutters are 1px lines, not margins. Creates a seamless table-like layout:

```css
.grid-divided {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--color-border);  /* The border color becomes the gap */
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  overflow: hidden;
}
.grid-divided > * {
  background: var(--color-surface-1);
  padding: 40px 32px;
  transition: background 0.2s;
}
.grid-divided > *:hover { background: var(--color-surface-2); }
```

### 7.9 CTA Band

```css
.cta-band {
  background: var(--color-accent);
  border-radius: var(--radius-2xl);
  padding: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}
.cta-band h2 {
  font-family: var(--font-display);
  font-size: clamp(26px, 3vw, 42px);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.08;
  color: #000;
}
.cta-band p {
  font-size: 15px;
  color: rgba(0, 0, 0, 0.55);
  margin-top: 10px;
}
```

### 7.10 Form Inputs

```css
.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}
.form-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text-secondary);
}
.form-input,
.form-textarea,
.form-select {
  background: var(--color-surface-2);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 12px 16px;
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--color-text-primary);
  transition: border-color 0.18s;
  outline: none;
  width: 100%;
}
.form-input::placeholder { color: var(--color-text-disabled); }
.form-input:focus {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px var(--color-accent-dim);
}
.form-textarea { min-height: 140px; resize: vertical; }
```

---

## 8. Animation Patterns

All animations use `animation-fill-mode: both` so elements start invisible:

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Apply on elements with stagger delays */
.anim-fade-up {
  opacity: 0;
  animation: fadeUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) both;
}
.delay-1 { animation-delay: 0.05s; }
.delay-2 { animation-delay: 0.15s; }
.delay-3 { animation-delay: 0.25s; }
.delay-4 { animation-delay: 0.35s; }
.delay-5 { animation-delay: 0.45s; }

/* Scroll-reveal: use IntersectionObserver to add class 'in-view' */
/* Elements start with opacity:0, translateY(20px) */
/* Add class 'in-view' to trigger the animation */
.scroll-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.scroll-reveal.in-view {
  opacity: 1;
  transform: translateY(0);
}
```

**IntersectionObserver setup (paste in main JS):**
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('in-view');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
```

---

## 9. Page Structure — All Pages

### Page 1: Home `/`
**Purpose:** First impression. Convert visitors to clients or at least get them to contact you.

**Sections in order:**
1. `<Nav>` — sticky, logo + links + CTA button
2. `<Hero>` — eyebrow, H1 (3 lines), sub paragraph, two CTAs, stats row (4 blocks)
3. `<Ticker>` — scrolling tech stack labels
4. `<ServicesPreview>` — eyebrow + title + 3-column divided grid (brief, no pricing)
5. `<WorkPreview>` — eyebrow + title + 2-col work grid (2 featured projects)
6. `<AppsStrip>` — eyebrow + title + 3-col app cards + Play Store badge CTA
7. `<WhyUs>` — eyebrow + title + 3-4 reason blocks (text-only, no icons needed)
8. `<CTABand>` — amber background, headline + email button
9. `<Footer>` — logo, nav links, copyright

---

### Page 2: Services `/services`
**Purpose:** Convert already-interested visitors. Answer "what exactly do you do and how much does it cost?"

**Sections:**
1. `<Nav>`
2. `<PageHero>` — eyebrow "Services", large H1, one-line description. No CTAs yet.
3. `<ServiceDetail id="web">` — full-width section for Web Development
   - Name, description paragraph, what's included (bullet list as tags), timeline, starting price
4. `<ServiceDetail id="apps">` — same pattern for Mobile Apps
5. `<ServiceDetail id="retainer">` — same for Maintenance
6. `<Process>` — "How we work" — 4 steps in a horizontal numbered list:
   - 01 Discovery call → 02 Proposal & scope → 03 Build & review → 04 Launch & handover
7. `<PricingTable>` — 3-col grid (Starter / Business / App). Featured card in center.
8. `<FAQ>` — accordion, 5-6 questions. Typical: "Do you do redesigns?", "How long does it take?", etc.
9. `<CTABand>`
10. `<Footer>`

---

### Page 3: Work `/work`
**Purpose:** Social proof. Show range of projects, quality, and types of clients.

**Sections:**
1. `<Nav>`
2. `<PageHero>` — eyebrow "Our work", H1, short description
3. `<FilterBar>` — category filter pills: All / Web / Apps / Ongoing
   - These filter the project grid below using JS (no page reload)
4. `<ProjectGrid>` — 2-col grid of project cards, each with:
   - Thumbnail (colored block + emoji or screenshot)
   - Category badge
   - Project name (Syne 800)
   - 1-2 line description
   - Tags (tech used)
   - "View case study →" link
5. `<CTABand>` — "Have a project in mind?"
6. `<Footer>`

---

### Page 4: Case Study `/work/[slug]`
**Purpose:** Deep proof. Clients who reach case studies are serious.

**Sections:**
1. `<Nav>`
2. `<CaseHero>` — project name in large Syne, category badge, 1-sentence summary
3. `<ProjectMeta>` — 4-col grid: Client / Timeline / Role / Tech Stack
4. `<Overview>` — "The brief" — 2-3 paragraphs about the client and what they needed
5. `<Problem>` — what the challenge was (with amber accent line on the left of quote/callout)
6. `<Solution>` — what was built and why those decisions were made
7. `<Visuals>` — screenshots or mockup images (use aspect-ratio: 16/9 containers)
8. `<Results>` — 3-4 stat blocks (if quantifiable) or bullet outcomes
9. `<NextProject>` — link to next case study
10. `<CTABand>`
11. `<Footer>`

---

### Page 5: Apps `/apps`
**Purpose:** Showcase the product side. Useful for both Play Store credibility and potential app-development clients.

**Sections:**
1. `<Nav>`
2. `<PageHero>` — eyebrow "Play Store", H1 "Apps we've built and launched", sub
3. `<AppsGrid>` — 3-col grid of detailed app cards:
   - App icon (square, rounded, colored background)
   - Name, category
   - Short description (2 lines)
   - Status badge (Live / Coming Soon / In Development)
   - Download count or rating (if available)
   - "View on Play Store →" link
4. `<PlayStoreCTA>` — full-width section: "Find all our apps on Google Play" + badge
5. `<BuildYourApp>` — crosslink: "Want us to build your app?" → links to Services
6. `<Footer>`

---

### Page 6: About `/about`
**Purpose:** Build trust and connection. Clients buy from people, not companies.

**Sections:**
1. `<Nav>`
2. `<PageHero>` — eyebrow "About", H1 something human like "Two developers, one mission.", sub
3. `<Story>` — 2-3 paragraphs. Who you are, where you're based, why you started this, what drives you. Write it conversationally, not corporate.
4. `<Team>` — 2-col cards (you + friend):
   - Name, role, short bio (2 lines), skills as tags
   - Photo or avatar (initials circle if no photo)
5. `<Values>` — 3-4 principles you work by (e.g. "Ship fast, fix fast", "No dark patterns", "Code you can actually read")
6. `<Stack>` — "What we use" — grouped tags: Frontend / Backend / Mobile / Tools
7. `<CTABand>`
8. `<Footer>`

---

### Page 7: Contact `/contact`
**Purpose:** Remove all friction from getting in touch.

**Sections:**
1. `<Nav>`
2. `<PageHero>` — eyebrow "Contact", H1 "Let's talk.", sub "We respond within 24 hours."
3. `<ContactLayout>` — 2-col layout:
   - **Left (40%):** Contact info
     - Email: infolaunchroom@gmail.com
     - WhatsApp/phone (optional)
     - Location: Kolkata, India
     - Response time promise
     - Short "what to expect" note
   - **Right (60%):** Contact form
     - Name, Email, Company (optional), Budget range (select), Message, Submit button
4. `<QuickFAQ>` — 3 small questions below form: "Do you take international clients?", "What's your typical timeline?", "Do you sign NDAs?"
5. `<Footer>` (no CTABand — this page IS the CTA)

---

## 10. Responsive Breakpoints

```css
/* Mobile first */
/* Default: mobile (< 640px) */

@media (min-width: 640px)  { /* sm: tablet portrait */ }
@media (min-width: 768px)  { /* md: tablet landscape */ }
@media (min-width: 1024px) { /* lg: desktop */ }
@media (min-width: 1280px) { /* xl: wide desktop */ }

/* Key adjustments at mobile: */
/* - Nav: hide links, show hamburger menu */
/* - Hero H1: use clamp(), already responsive */
/* - Grids: all go to 1 column */
/* - Page padding: 48px → 20px */
/* - CTA band: flex-direction: column */
/* - Stats row: 2x2 grid instead of 1x4 */
```

---

## 11. Grid Patterns Reference

```css
/* Services, Pricing */
.grid-3col { grid-template-columns: repeat(3, 1fr); }

/* Work featured (asymmetric) */
.grid-work  { grid-template-columns: 1.3fr 0.7fr; }

/* Work grid (uniform) */
.grid-2col  { grid-template-columns: repeat(2, 1fr); }

/* Apps */
.grid-3col  { grid-template-columns: repeat(3, 1fr); }

/* Contact */
.grid-contact { grid-template-columns: 2fr 3fr; }

/* Team */
.grid-team  { grid-template-columns: repeat(2, 1fr); }

/* All gaps: 16px between cards */
gap: 16px;
```

---

## 12. Meta & SEO Defaults

Use these on every page. Update the title and description per page.

```html
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="description" content="Launchroom — Web and app development studio based in Kolkata. We build websites, Android apps, and digital products for growing businesses."/>
  <meta name="theme-color" content="#080808"/>

  <!-- Open Graph (for link previews) -->
  <meta property="og:title"       content="Launchroom — Web & App Studio"/>
  <meta property="og:description" content="Websites, mobile apps, and digital products for startups and growing businesses."/>
  <meta property="og:type"        content="website"/>
  <meta property="og:url"         content="https://launchroom.in"/>
  <meta property="og:image"       content="https://launchroom.in/og-image.png"/>

  <title>Launchroom — Web & App Studio, Kolkata</title>
</head>
```

---

## 13. File / Folder Structure (Next.js App Router)

```
/app
  layout.tsx          ← Root layout: Nav + Footer wrappers, font imports
  page.tsx            ← Home /
  globals.css         ← All CSS tokens (this file), base resets
  /services
    page.tsx          ← Services /services
  /work
    page.tsx          ← Work index /work
    /[slug]
      page.tsx        ← Case study /work/new-india-stores
  /apps
    page.tsx          ← Apps /apps
  /about
    page.tsx          ← About /about
  /contact
    page.tsx          ← Contact /contact

/components
  Nav.tsx
  Footer.tsx
  CTABand.tsx         ← Reused on every page
  Button.tsx
  Card.tsx
  Badge.tsx
  Ticker.tsx
  SectionHeader.tsx   ← Eyebrow + Title pattern

/data
  projects.ts         ← Array of project objects for /work
  apps.ts             ← Array of app objects for /apps

/public
  /images
    og-image.png
    /projects
    /apps
```

---

## 14. Quick-Reference Cheatsheet

| Token | Value |
|---|---|
| Page bg | `#080808` |
| Card bg | `#101010` |
| Featured card | `#161616` |
| Accent | `#E8A020` |
| Text primary | `#F0ECE4` |
| Text muted | `#808078` |
| Border default | `rgba(255,255,255,0.07)` |
| Border hover | `rgba(255,255,255,0.13)` |
| Display font | Syne 800, -0.03em tracking |
| Body font | DM Sans 300/400/500 |
| Border radius (card) | 16–20px |
| Border radius (button) | 100px |
| Max content width | 1160px |
| Page horizontal padding | 48px desktop / 20px mobile |
| Section vertical padding | 80px top + bottom |
| Transition speed | 0.18–0.2s ease |
| Animation curve | cubic-bezier(0.16, 1, 0.3, 1) |

---

*End of spec. All values are final and internally consistent. Do not introduce new colors, fonts, or radii outside this system.*
