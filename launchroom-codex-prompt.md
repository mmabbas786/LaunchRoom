# Launchroom — Full Website Build Prompt for Codex AI

You are building a complete, production-ready agency website for **Launchroom** (launchroom.in) — a web and app development studio based in Kolkata, India, run by two founders: **Mirza** (lead developer, client acquisition) and **Arsh** (co-founder, frontend & design). They serve both Indian SMB clients and international clients from the UK, Germany, and Canada.

Execute every instruction in this prompt fully and autonomously. Do not ask for clarification. Make all decisions yourself based on the spec below. Deliver a complete, working Next.js project.

---

## TECH STACK

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v3 with a custom design token layer in `globals.css`
- **Fonts:** Google Fonts — Syne (800) for display, DM Sans (300, 400, 500) for body
- **Animations:** Framer Motion for page transitions and scroll reveals
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend (for contact and /start form submissions) — use `RESEND_API_KEY` env var
- **Exchange rates:** `open.er-api.com/v6/latest/INR` (free, no key needed)
- **Deployment target:** Vercel
- **Icons:** Lucide React only — no other icon libraries
- **No UI libraries** (no shadcn, no MUI, no Chakra) — all components built from scratch using the design system below

---

## DESIGN SYSTEM

### CSS Custom Properties — add to `globals.css` on `:root`

```css
:root {
  --bg:        #080808;
  --surface-1: #101010;
  --surface-2: #161616;
  --surface-3: #1e1e1e;
  --accent:        #E8A020;
  --accent-dim:    rgba(232,160,32,0.10);
  --accent-border: rgba(232,160,32,0.22);
  --text-primary:   #F0ECE4;
  --text-secondary: #A8A49C;
  --text-muted:     #808078;
  --text-disabled:  #4a4a46;
  --border:         rgba(255,255,255,0.07);
  --border-hover:   rgba(255,255,255,0.13);
  --border-strong:  rgba(255,255,255,0.20);
  --radius-xs:   6px;
  --radius-sm:   8px;
  --radius-md:  12px;
  --radius-lg:  16px;
  --radius-xl:  20px;
  --radius-2xl: 24px;
  --radius-full: 100px;
}
```

### Tailwind Config Extensions

Extend `tailwind.config.js` to expose all CSS variables as Tailwind tokens:
- Colors: `bg`, `surface-1`, `surface-2`, `surface-3`, `accent`, `accent-dim`, `text-primary`, `text-secondary`, `text-muted`
- Border colors: `border`, `border-hover`, `border-strong`
- Border radius: `xs` through `full` matching the variables above
- Font families: `display` → Syne, `body` → DM Sans

### Typography Rules
- All headings: `font-display font-extrabold tracking-tight`
- Hero H1: `text-[clamp(46px,6.5vw,84px)] leading-[1.01]`
- Section titles: `text-[clamp(28px,3.2vw,44px)] leading-[1.1]`
- Body: `font-body font-light text-[15px] leading-[1.7]`
- Eyebrow labels: `font-body text-[12px] font-medium tracking-[0.14em] uppercase text-text-muted`
- Every eyebrow must have a 24px amber horizontal line before it (use a CSS ::before or a `<span>` with amber background)

### Global Styles
- `body { background: var(--bg); color: var(--text-primary); }`
- Scrollbar: custom thin scrollbar with `--surface-2` track and `--accent` thumb
- Selection: `--accent-dim` background, `--text-primary` color
- All transitions: `transition-all duration-200`
- Focus rings: `outline: 2px solid var(--accent); outline-offset: 2px`

---

## PROJECT STRUCTURE

```
/app
  layout.tsx
  page.tsx                        ← Home
  /services/page.tsx
  /work/page.tsx
  /work/[slug]/page.tsx
  /apps/page.tsx
  /about/page.tsx
  /contact/page.tsx
  /start/page.tsx
  /privacy/page.tsx
  /terms/page.tsx
  /api/contact/route.ts           ← API route for contact form
  /api/start/route.ts             ← API route for project intake form
  globals.css

/components
  /layout
    Nav.tsx
    Footer.tsx
    CTABand.tsx
  /ui
    Button.tsx
    Badge.tsx
    Card.tsx
    Tag.tsx
    SectionHeader.tsx             ← eyebrow + title pattern
    AnimatedSection.tsx           ← scroll reveal wrapper using Framer Motion
  /home
    Hero.tsx
    Ticker.tsx
    ServicesPreview.tsx
    WorkPreview.tsx
    AppsStrip.tsx
    WhyUs.tsx
  /services
    ServiceDetail.tsx
    ProcessSteps.tsx
    PricingCurrency.tsx           ← multi-currency pricing (see full spec below)
    FAQ.tsx
  /work
    ProjectGrid.tsx
    FilterBar.tsx
    ProjectCard.tsx
  /apps
    AppCard.tsx
  /about
    TeamCard.tsx
    StackGrid.tsx
  /contact
    ContactForm.tsx
    ISTClock.tsx
  /start
    IntakeForm.tsx

/data
  projects.ts
  apps.ts
  faqs.ts
  services.ts

/public
  /og-image.png                   ← create a simple dark card with Launchroom logo text
```

---

## SHARED COMPONENTS (build these first)

### `Nav.tsx`
- Sticky, `backdrop-blur-md`, `bg-[rgba(8,8,8,0.88)]`, border-bottom `--border`
- Left: logo — `Launchroom` in Syne 800, where `room` is in `--accent` color
- Center: navigation links — Services, Work, Apps, About
- Right: `Start a project` button (primary amber pill)
- Active page link gets a 4px amber dot below it using `usePathname()`
- Mobile: hamburger icon (Lucide `Menu`), drawer slides in from right with all links
- Drawer backdrop closes on click outside

### `Footer.tsx`
- Two rows: top row has logo + tagline left, nav links right
- Bottom row: copyright left, Privacy + Terms links right
- Border-top `--border`, padding `py-8`
- Tagline: "Web & App Studio · Kolkata, India"

### `CTABand.tsx`
- Accepts `heading`, `subtext`, `buttonText`, `buttonHref` props
- Background: `--accent` (amber), border-radius `--radius-2xl`
- Heading: Syne 800, `color: #000`
- Button: dark pill (`bg-black text-accent`)
- Flex row on desktop, column on mobile

### `Button.tsx`
Variants: `primary` (amber fill, black text), `ghost` (transparent + muted text + arrow), `outline` (transparent + border), `dark` (black fill + amber text)
All: pill shape `border-radius: var(--radius-full)`, smooth hover transitions

### `SectionHeader.tsx`
Props: `eyebrow`, `title`, `className?`
Renders the amber-line eyebrow above a bold section title. Reused on every page.

### `AnimatedSection.tsx`
Wraps children in a Framer Motion `motion.div` that fades up (`y: 20 → 0`, `opacity: 0 → 1`) when scrolled into view using `whileInView` with `once: true` and `viewport: { margin: "-80px" }`.

---

## PAGE 1: HOME `/`

### Hero section
```
Eyebrow: "Web & App Studio · Kolkata, India"
H1 (3 lines):
  Line 1: "We"
  Line 2: "build things" ← "build" in --accent color
  Line 3: "that ship."
Sub: "Websites, mobile apps, and digital products for startups and growing businesses. Fast, clean, and built to convert."
Two CTAs: [Start a project →] (primary) and [See our work] (ghost with arrow)
```

Stats row below CTAs — 4 blocks in a row, each with border:
- `8+` Apps on Play Store
- `12+` Happy clients
- `2` Founders
- `100%` Remote-ready

Hero section animates in with staggered Framer Motion delays (0.05s, 0.15s, 0.25s, 0.35s per element).

### Ticker / Marquee
Full-width strip, `bg-surface-1`, border top and bottom.
Scrolling text items separated by amber dots:
`React Native · Next.js · Flutter · Supabase · Play Store · AdMob · Tailwind CSS · Firebase · RevenueCat · Figma · TypeScript · Vercel`
Duplicate the items so the scroll is seamless. Pause on hover.
Use CSS `@keyframes` animation, not a JS library.

### Services Preview
Eyebrow: "What we do" | Title: "Services"
3-column divided grid (gap: 1px, background: `--border`, overflow hidden, border-radius `--radius-xl`):

**01 — Web Development**
Desc: "Custom websites and web apps that are fast, SEO-ready, and built to grow with your business. No templates."
Tags: Landing pages · Business sites · E-commerce · Web apps

**02 — Mobile Apps**
Desc: "Android apps built with Flutter or React Native. From idea to Play Store, fully managed."
Tags: Android · Flutter · AdMob · Play Store

**03 — Maintenance & Support**
Desc: "Monthly retainer plans so your site stays fast, updated, and secure. We're on call."
Tags: Updates · Hosting · Analytics · Support

Each card hover: background transitions from `--surface-1` to `--surface-2`.
Bottom of section: ghost button "View full services & pricing →" linking to `/services`.

### Work Preview
Eyebrow: "Recent projects" | Title: "Our work"
Asymmetric 2-col grid: `grid-cols-[1.3fr_0.7fr]`

**Card 1 — New India Stores**
Thumb: dark navy gradient `#0f1e2e → #1a3a5c` with an anchor emoji centered
Category: Web Development
Name: New India Stores
Desc: "Single-page glassmorphism website for a Kolkata-based ship chandling company. Deployed to Hostinger."
CTA: "View case study →"

**Card 2 — PDF Vault**
Thumb: dark purple gradient `#1a0f2e → #2d1a5c` with 📄 emoji
Category: Mobile App · Flutter
Name: PDF Vault
Desc: "6-in-1 Android PDF toolkit — compress, merge, split, scan, sign, convert."
CTA: "View on Play Store →"

Bottom: ghost button "View all projects →" → `/work`

### Apps Strip
Full-width section with `bg-surface-1` background, border top and bottom.
Eyebrow: "Play Store" | Title: "Apps we've built & launched"
3-col grid of app cards (icon + name + category + status badge).

App cards data:
1. PDF Vault · Productivity · Live ✓
2. Roast My IPL · Sports · Coming soon
3. Your next app · — · In development

Below grid: Play Store badge link (green dot + "View all apps on Google Play")
Bottom: ghost button "See all apps →" → `/apps`

### Why Us
Eyebrow: "Why Launchroom" | Title: "Built different."
4-col grid of reason cards on `--surface-1`:
1. **We ship fast** — "Most projects delivered in 2–4 weeks. No endless feedback loops."
2. **Remote-first** — "We work with clients from Kolkata to London. Async updates, weekly Loom walkthroughs."
3. **Transparent pricing** — "Fixed quotes. No surprise invoices. Ever."
4. **You own everything** — "Source code, hosting, domains — all yours at handover. No vendor lock-in."

### CTA Band
`<CTABand heading="Got a project? Let's talk." subtext="We respond within 24 hours. No agency fluff." buttonText="hello@launchroom.in →" buttonHref="mailto:hello@launchroom.in" />`

---

## PAGE 2: SERVICES `/services`

### Page Hero
Eyebrow: "Services" | H1: "Everything you need to launch." | Sub: "Web, apps, and ongoing support — scoped clearly, delivered fast."

### Service Detail Sections
Three full-width alternating sections (text left / tags right), each with:
- Service number (01, 02, 03) in `--accent`
- Name in Syne 800
- 2-paragraph description
- "What's included" tag cloud
- Timeline and starting price
- "Get a quote →" button linking to `/start`

**Service 01 — Web Development**
Includes: Strategy & wireframing, Custom design in Figma, Next.js or plain HTML development, SEO on-page setup, Google Analytics, Contact form integration, Deployment (Vercel / Hostinger / Netlify), 1–3 months post-launch support
Timeline: 1–3 weeks | Starting: ₹15,000

**Service 02 — Mobile Apps (Android)**
Includes: UI/UX design, Flutter development, Play Store account setup & submission, AdMob integration, In-app purchases (RevenueCat), Push notifications, Source code handover, 3 months post-launch support
Timeline: 3–6 weeks | Starting: ₹60,000

**Service 03 — Maintenance & Retainer**
Includes: Unlimited small content edits, Monthly performance & SEO report, Uptime monitoring, Security updates, Hosting & domain management, Priority support response
Timeline: Ongoing | Starting: ₹5,000/month

### How We Work (Process)
Eyebrow: "Our process" | Title: "Simple. Transparent. Repeatable."
4 steps in a horizontal numbered timeline:
1. Discovery call → 2. Proposal & scope → 3. Build & review → 4. Launch & handover

Each step: number in amber, bold title, 1-sentence description below.

### Pricing Section — `PricingCurrency.tsx` (CRITICAL COMPONENT)

This is the multi-currency pricing switcher. Build it exactly as follows:

**State:**
- `activeCurrency`: string, default `"INR"`
- `rates`: object, default fallback rates `{ INR: 1, USD: 0.012, GBP: 0.0094, EUR: 0.011, CAD: 0.016 }`
- `ratesLoaded`: boolean
- `ratesLive`: boolean
- `updatedAt`: Date | null

**On mount:** fetch `https://open.er-api.com/v6/latest/INR`. On success, update `rates` with response `data.rates`, set `ratesLive: true`, `updatedAt: new Date()`. On failure, use fallback rates silently.

**Currencies:** INR 🇮🇳, USD 🇺🇸, GBP 🇬🇧, EUR 🇩🇪, CAD 🇨🇦

**Currency Switcher UI:**
Row of pill buttons, one per currency, showing flag + code. Active button: amber border + amber-dim background + amber text. Inactive: muted text + default border. Right of switcher: small text showing "Live rates · HH:MM" or "Approximate rates" or "Fetching...".

**Packages data (base in INR):**
```typescript
const packages = [
  { id: "starter",  name: "Starter",     desc: "Perfect for small businesses",          priceINR: 15000, suffix: "onwards", featured: false,
    items: ["5-page responsive website","Contact form + Google Maps","Mobile optimised","Basic SEO setup","1 month free support"] },
  { id: "business", name: "Business",    desc: "CMS-powered with lead capture",         priceINR: 30000, suffix: "onwards", featured: true,
    items: ["Everything in Starter","CMS (edit content yourself)","Lead capture + email setup","Google Analytics","3 months support"] },
  { id: "app",      name: "Mobile App",  desc: "Android app built and published",       priceINR: 60000, suffix: "onwards", featured: false,
    items: ["Android app (Flutter)","Play Store submission","AdMob or in-app purchase","Source code handover","3 months support"] },
  { id: "retainer", name: "Retainer",    desc: "Monthly maintenance and support",       priceINR: 5000,  suffix: "/ month", featured: false,
    items: ["Unlimited small edits","Uptime monitoring","Monthly performance report","Priority response","Hosting management"] },
]
```

**Price display logic:**
```typescript
function formatPrice(priceINR: number, currency: string): string {
  const rate = rates[currency] ?? 1
  const converted = Math.round(priceINR * rate)
  const symbols: Record<string, string> = { INR: "₹", USD: "$", GBP: "£", EUR: "€", CAD: "CA$" }
  return symbols[currency] + converted.toLocaleString()
}
```

Show INR equivalent below price when non-INR selected: `"≈ ₹XX,XXX INR"` in muted small text.

Disclaimer below cards (dynamic): "Prices are starting rates. Final quote depends on scope." + when non-INR: append "Exchange rates are indicative — invoices agreed in your local currency before project start."

**Loading state:** Show animated skeleton pulse on the price number while rates are being fetched.

### FAQ Section
Eyebrow: "Questions" | Title: "Things people usually ask."
Accordion component — click to expand, only one open at a time, chevron rotates on open.

Questions:
1. Do you work with international clients? → "Yes. We work with clients from the UK, Germany, Canada, and beyond. Payments accepted via Wise, bank transfer, and PayPal. Invoices issued in your preferred currency."
2. How long does a typical project take? → "A standard 5-page website takes 1–2 weeks. A CMS-powered business site takes 2–3 weeks. Android apps take 3–6 weeks. Complex projects are scoped individually."
3. Do you sign NDAs? → "Absolutely. We sign client NDAs before discussing sensitive project details. We also have our own mutual NDA available."
4. What do I need to provide to get started? → "A brief describing what you need, your budget range, and a timeline. We handle everything else — design, copy structure, development, and deployment."
5. Do you offer revisions? → "Every project includes 2 rounds of revisions. Additional rounds are billed at ₹2,000/hr (international clients: $30/hr)."
6. What happens after launch? → "We offer monthly retainer plans starting at ₹5,000/month. You also receive full source code and credentials at handover — no lock-in."

---

## PAGE 3: WORK `/work`

### Page Hero
Eyebrow: "Our work" | H1: "Projects we're proud of." | Sub: "From ship chandling websites to Android PDF tools — here's what we've built."

### Filter Bar
Pills: All · Web · Apps · Ongoing
Clicking filters the project grid using client-side JS (no page reload). Active pill: amber fill.

### Project Grid
2-col grid `gap-4`. Each card:
- Colored thumbnail div (200px height) with gradient and centered emoji
- Category badge (amber pill)
- Project name (Syne 800, 21px)
- 2-line description
- Tech tags row
- "View case study →" amber link

**Projects data** (`/data/projects.ts`):
```typescript
export const projects = [
  {
    slug: "new-india-stores",
    name: "New India Stores",
    category: "Web",
    desc: "Single-page glassmorphism website for a Kolkata-based ship chandling company. Self-contained HTML, deployed to Hostinger.",
    tags: ["HTML", "CSS", "Glassmorphism", "Hostinger"],
    thumbGradient: "linear-gradient(135deg,#0f1e2e,#1a3a5c)",
    thumbEmoji: "⚓",
    client: "New India Stores, Kolkata",
    timeline: "1 week",
    role: "Full design & development",
    tech: ["HTML5", "CSS3", "JavaScript"],
    overview: "New India Stores is an established ship chandling company based on Strand Road, Kolkata. They needed a professional online presence to reach international shipping clients.",
    problem: "The client had no web presence at all. Their international clients — ship captains and procurement officers — had no way to verify their services or contact them digitally.",
    solution: "Built a single, self-contained HTML file with glassmorphism design, smooth scroll sections, a services list, contact form, and Google Maps embed. Hosted on Hostinger for reliability.",
    results: ["Launched in 5 days", "Mobile responsive", "Self-contained — no dependencies", "Client can share the URL with international contacts"],
    liveUrl: "#",
  },
  {
    slug: "pdf-vault",
    name: "PDF Vault",
    category: "Apps",
    desc: "6-in-1 Android PDF toolkit. Compress, merge, split, scan, sign, convert. Production build on Play Store.",
    tags: ["Flutter", "Android", "PDF", "AdMob"],
    thumbGradient: "linear-gradient(135deg,#1a0f2e,#3a1a5c)",
    thumbEmoji: "📄",
    client: "Personal project",
    timeline: "4 weeks",
    role: "Full development & Play Store management",
    tech: ["Flutter", "Dart", "AdMob", "MediaStore API", "Android"],
    overview: "PDF Vault is a personal project and flagship Play Store app. It packages six commonly-needed PDF utilities into a single clean Android app.",
    problem: "Most PDF apps on the Play Store are either bloated with ads, require subscriptions for basic features, or have poor UX on Android. Users need a simple, offline-capable tool.",
    solution: "Built with Flutter for cross-device compatibility. Uses Android MediaStore API for proper file storage on Android 10+. AdMob banner ads monetise the free tier.",
    results: ["Live on Google Play Store", "6 tools in one app", "Native Android file storage", "AdMob monetised"],
    liveUrl: "#",
  },
]
```

---

## PAGE 4: CASE STUDY `/work/[slug]`

Dynamic page — reads from `projects` data array by slug.

Sections:
1. **Case hero** — project name (Syne 80px), category badge, 1-line summary
2. **Meta block** — 4-col grid: Client / Timeline / Role / Tech Stack (tags)
3. **Overview** — "The brief" eyebrow, paragraph from `overview`
4. **Problem** — amber left-border callout block, text from `problem`
5. **Solution** — paragraph from `solution`
6. **Results** — 2x2 grid of result stat/bullet cards
7. **Next project** — link to next case study (cycle through array)
8. **CTA Band** — "Like what you see? Let's build yours."

Generate static params from the projects array using `generateStaticParams`.

---

## PAGE 5: APPS `/apps`

### Page Hero
Eyebrow: "Play Store" | H1: "Apps we've built and launched." | Sub: "From productivity tools to sports apps — shipped and live on Google Play."

### Apps Grid
3-col grid. App cards:

**App data** (`/data/apps.ts`):
```typescript
export const apps = [
  { name: "PDF Vault",     category: "Productivity · Tools",      desc: "6-in-1 PDF toolkit. Compress, merge, split, scan, sign, convert.",  status: "live",    iconBg: "#1a1f2e", iconEmoji: "📄", playUrl: "#"  },
  { name: "Roast My IPL",  category: "Sports · Entertainment",    desc: "AI-powered IPL 2026 team roast generator. Viral, funny, shareable.", status: "soon",    iconBg: "#1f1a0a", iconEmoji: "🏏", playUrl: "#"  },
  { name: "Coming soon",   category: "Utility",                   desc: "Next app in the pipeline. Stay tuned.",                              status: "dev",     iconBg: "#0a1f14", iconEmoji: "⚡", playUrl: null },
]
```

Status badges: `live` → green "Live on Play Store", `soon` → amber "Coming soon", `dev` → muted "In development"

Each card: icon block (64px square, rounded-xl, colored bg) + name + category + desc + status badge + conditional Play Store link.

### Play Store CTA
Full-width centered section: green dot + "View all our apps on Google Play" button.

### Build Your App crosslink
Card section: "Want us to build your app?" with a description and "See App Development pricing →" button to `/services#app`.

---

## PAGE 6: ABOUT `/about`

### Page Hero
Eyebrow: "About us" | H1: "Two builders, one studio." | Sub: "We started Launchroom because good software shouldn't be expensive or slow."

### Story
2–3 paragraphs written conversationally:

"Launchroom started in 2024 as a side project between two CSE students from Kolkata. Mirza was building Android apps and freelance websites; Arsh was doing frontend and design work. At some point we looked at our project list and thought — this is already an agency, it just doesn't have a name yet.

We built Launchroom because we were tired of seeing small Indian businesses with no web presence, and international founders paying Western agency prices for work that could be done better, faster, and cheaper here. We're not a big firm. We're two people who care about what we ship.

We're based in Kolkata and work remotely with clients across India, the UK, Germany, and Canada. If you're reading this, we probably already want to work with you."

### Team Section
2-col grid of team cards on `--surface-1`:

**Mirza** (you — co-founder)
Role: Lead Developer & Co-founder
Bio: "CSE student turned indie developer. I build apps, acquire clients, and make sure everything we ship is something we're proud of."
Skills tags: React Native · Flutter · Next.js · Supabase · Claude API · Product Strategy
Avatar: Circle with initials "M" — amber background `--accent-dim`, amber text

**Arsh** (co-founder)
Role: Design & Frontend · Co-founder
Bio: "I turn briefs into interfaces. If Mirza builds the engine, I build what people actually see and touch."
Skills tags: Figma · Tailwind CSS · React · UI Design · Framer Motion · Frontend
Avatar: Circle with initials "A" — blue-ish dim background, blue text

### Values
Eyebrow: "How we work" | Title: "Our principles."
4 values in 2x2 grid:
1. **Ship it, then improve it** — "Done and deployed beats perfect and pending. We launch fast, then iterate."
2. **No dark patterns** — "We don't build spam forms, fake urgency, or deceptive UX. Ever."
3. **You own everything** — "Code, design files, domains, hosting accounts — all yours at handover."
4. **Async first** — "We work in IST but communicate for every timezone. Weekly Loom updates, no endless meetings."

### Stack Grid
Eyebrow: "What we use" | Title: "Our toolkit."
4 groups displayed as tag clouds:
- **Frontend:** Next.js · React Native · Flutter · Tailwind CSS · Framer Motion
- **Backend:** Supabase · Firebase · Node.js · PostgreSQL
- **Tools:** Figma · Vercel · GitHub · Resend · RevenueCat · AdMob
- **AI:** Claude API · Gemini · Cursor · Codex

### CTA Band
"Ready to work together? Let's build something."

---

## PAGE 7: CONTACT `/contact`

### Page Hero
Eyebrow: "Contact" | H1: "Let's talk." | Sub: "We respond within 24 hours. Usually much faster."

### Contact Layout — 2-col `grid-cols-[2fr_3fr]`

**Left column — Contact info:**
- Email: hello@launchroom.in (amber link)
- WhatsApp: Add +91 number placeholder
- Location: Kolkata, West Bengal, India
- Response time: "< 24 hours on weekdays"
- `ISTClock` component: shows current IST time, live updating every minute. Label: "Current time for our team"
- Small note: "We're available Mon–Sat, 10 AM – 8 PM IST. For urgent project matters, WhatsApp is fastest."

**Right column — Contact Form (`ContactForm.tsx`):**
Fields: Name (required), Email (required, validated), Company (optional), Subject (select: New website / Mobile app / Retainer / Other), Message (required, min 20 chars), Submit button (primary amber)

Form submission: POST to `/api/contact` which uses Resend to email `hello@launchroom.in`. Show success state: green checkmark + "We got your message! We'll reply within 24 hours." Show error state: red text + "Something went wrong. Please email us directly."

### Quick FAQ below form (3 inline cards):
1. "Do you take international clients?" → "Yes — UK, Germany, Canada, and more. Payments via Wise or bank transfer."
2. "What's your typical timeline?" → "Websites: 1–3 weeks. Apps: 3–6 weeks. Scoped per project."
3. "Do you sign NDAs?" → "Yes, always. Mutual NDA available on request."

**No CTABand on this page** — this page IS the CTA.

### `ISTClock.tsx`
Client component. Uses `useEffect` to update every 60 seconds.
```typescript
const now = new Date()
const ist = now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true })
const day = now.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', weekday: 'long' })
```
Display: large time + day label. Use `suppressHydrationWarning` on the time span.

---

## PAGE 8: START A PROJECT `/start`

### Page Hero
Eyebrow: "Get started" | H1: "Tell us about your project." | Sub: "Fill in the details below. We'll send you a tailored proposal within 48 hours."

### Multi-Step Intake Form (`IntakeForm.tsx`)
5 steps with a progress bar at top showing step X of 5.

**Step 1 — Project type**
Heading: "What do you need built?"
Large card selectors (not a dropdown):
- Website (description: landing page, business site, e-commerce)
- Mobile App (Android, Play Store)
- Both website + app
- Not sure yet

**Step 2 — Budget**
Heading: "What's your budget?"
Card selectors:
- Under ₹15,000 / $200
- ₹15,000–₹35,000 / $200–$450
- ₹35,000–₹80,000 / $450–$1,000
- ₹80,000+ / $1,000+
- Let's discuss

**Step 3 — Timeline**
Heading: "When do you need it?"
Card selectors:
- ASAP (within 2 weeks)
- 1 month
- 2–3 months
- Flexible / no rush

**Step 4 — Tell us more**
Heading: "Describe your project"
Fields: Project name/working title (text), Brief description (textarea, required, min 50 chars), Do you have existing brand assets? (Yes / No / Partial — toggle), Website or app reference (URL, optional)

**Step 5 — Your details**
Heading: "Almost there."
Fields: Full name (required), Email (required), Company/organisation (optional), Country (select: India / United Kingdom / Germany / Canada / Other), How did you hear about us? (select: Google / Referral / Social media / Upwork / Fiverr / Other)

**Navigation:** Back + Next buttons on each step. Back disabled on step 1. "Submit project brief" button on step 5.

**Submission:** POST to `/api/start`. On success: full-page success state with large checkmark, "Your brief is with us! 🚀", "We'll review it and send a proposal within 48 hours." + "While you wait, check out our work →" button.

### API Routes

**`/api/contact/route.ts`:**
```typescript
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  await resend.emails.send({
    from: 'Launchroom Website <noreply@launchroom.in>',
    to: 'hello@launchroom.in',
    subject: `New contact: ${body.subject} from ${body.name}`,
    html: `<p><b>Name:</b> ${body.name}</p><p><b>Email:</b> ${body.email}</p><p><b>Company:</b> ${body.company || 'N/A'}</p><p><b>Message:</b> ${body.message}</p>`
  })
  return Response.json({ ok: true })
}
```

**`/api/start/route.ts`:**
Same pattern — format all 5 steps into a readable HTML email and send to `hello@launchroom.in`.

---

## PAGE 9: PRIVACY POLICY `/privacy`

Static page. Prose layout, max-width 720px, centered.
Heading: "Privacy Policy" | Last updated: April 2026

Content sections:
1. What data we collect (contact form data: name, email, company, message; project brief data from /start)
2. How we use it (to respond to enquiries, send proposals — never sold or shared)
3. Cookies (none beyond essential analytics)
4. Third-party services (Google Analytics, Resend for email)
5. GDPR rights (right to access, delete, correct data — email hello@launchroom.in)
6. Data retention (enquiry data kept for 12 months, then deleted)
7. Contact (hello@launchroom.in for any privacy questions)

---

## PAGE 10: TERMS OF SERVICE `/terms`

Static page. Same prose layout as Privacy.
Heading: "Terms of Service" | Last updated: April 2026

Sections:
1. Services (Launchroom provides web development, app development, and maintenance services)
2. Payments (50% advance required before work begins; remaining balance due at project completion)
3. Revisions (2 rounds included; additional rounds billed at ₹2,000/hr / $30/hr)
4. Intellectual Property (full IP transfers to client on final payment; Launchroom retains right to show work in portfolio unless NDA signed)
5. Timelines (estimated timelines provided in proposals; delays caused by client feedback latency extend the timeline accordingly)
6. Limitation of Liability (Launchroom not liable for indirect or consequential damages)
7. Governing Law (disputes subject to courts of Kolkata, West Bengal, India; international clients may opt for Singapore arbitration)
8. Contact (hello@launchroom.in)

---

## SEO & METADATA

Create a `metadata` export for every page using Next.js `generateMetadata` or static `metadata` object.

Root layout metadata:
```typescript
export const metadata: Metadata = {
  title: { default: "Launchroom — Web & App Studio, Kolkata", template: "%s | Launchroom" },
  description: "Web and app development studio based in Kolkata. We build websites, Android apps, and digital products for growing businesses worldwide.",
  keywords: ["web development kolkata", "android app development india", "freelance developer india", "agency kolkata", "next.js developer india"],
  openGraph: {
    type: "website",
    url: "https://launchroom.in",
    siteName: "Launchroom",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
}
```

Per-page titles:
- Home: "Launchroom — Web & App Studio, Kolkata"
- Services: "Services & Pricing — Launchroom"
- Work: "Our Work — Launchroom"
- Apps: "Play Store Apps — Launchroom"
- About: "About Us — Launchroom"
- Contact: "Contact — Launchroom"
- Start: "Start a Project — Launchroom"

---

## ANIMATIONS & INTERACTIONS

1. **Page load:** Hero elements animate in with staggered `fadeUp` using Framer Motion. Delay sequence: 0.05s, 0.15s, 0.25s, 0.35s.
2. **Scroll reveal:** All section headers and card grids use `AnimatedSection` wrapper — fades up when entering viewport.
3. **Nav:** On scroll past 60px, nav background becomes more opaque (`bg-opacity-95`).
4. **Card hover:** All project/app/service cards have `border-color` transition to `--border-hover`.
5. **Button active:** Scale down to `0.97` on active/click.
6. **Ticker:** CSS `@keyframes` horizontal scroll, pauses on hover.
7. **FAQ accordion:** Smooth `height` animation using `motion.div` with `AnimatePresence`.
8. **Intake form steps:** Slide in from right (`x: 40 → 0`) using Framer Motion between steps.
9. **Currency switcher:** Prices animate with a subtle fade when currency changes.
10. **Mobile menu:** Drawer slides in from right with backdrop fade.

---

## RESPONSIVE DESIGN

All layouts must be fully responsive. Key breakpoints:

- **Mobile (< 640px):** Single column everywhere. Page padding: `px-5`. Hero H1: use clamp. Nav: hamburger drawer. Stats: 2×2 grid. CTA band: stacked column. Services divided grid: 1 col. Pricing grid: 1 col. Work grid: 1 col. Contact: 1 col.
- **Tablet (640–1024px):** 2-col grids where appropriate. Pricing: 2 cols. Services: 2 cols.
- **Desktop (1024px+):** All multi-column layouts as specified.

---

## ENVIRONMENT VARIABLES

Create `.env.local.example`:
```
RESEND_API_KEY=your_resend_api_key_here
NEXT_PUBLIC_SITE_URL=https://launchroom.in
```

---

## `package.json` DEPENDENCIES

```json
{
  "dependencies": {
    "next": "14.2.x",
    "react": "^18",
    "react-dom": "^18",
    "framer-motion": "^11",
    "react-hook-form": "^7",
    "zod": "^3",
    "@hookform/resolvers": "^3",
    "lucide-react": "^0.400.0",
    "resend": "^3",
    "clsx": "^2",
    "tailwind-merge": "^2"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "tailwindcss": "^3",
    "autoprefixer": "^10",
    "postcss": "^8"
  }
}
```

---

## FINAL CHECKLIST — verify before completing

- [ ] All 10 pages render without errors
- [ ] Nav active state works on all pages using `usePathname()`
- [ ] Mobile hamburger menu opens and closes
- [ ] Currency switcher fetches live rates and falls back gracefully
- [ ] Contact form submits and shows success/error state
- [ ] Intake form completes all 5 steps and submits
- [ ] Case study dynamic route works for `new-india-stores` and `pdf-vault`
- [ ] All images use `next/image` or graceful fallbacks
- [ ] `generateStaticParams` defined for `/work/[slug]`
- [ ] No TypeScript errors (`tsc --noEmit` passes)
- [ ] No console errors or warnings
- [ ] All external links open in `target="_blank" rel="noopener noreferrer"`
- [ ] Privacy and Terms pages are accessible from footer
- [ ] `sitemap.xml` generated (use `next-sitemap` or manual route)
- [ ] `robots.txt` allows all crawlers
- [ ] OG image at `/public/og-image.png` — create a 1200×630 dark card with "Launchroom" in Syne 800 white text and the tagline below in amber

---

## STARTING INSTRUCTION

Begin by scaffolding the project:
1. `npx create-next-app@latest launchroom --typescript --tailwind --app --src-dir=false --import-alias="@/*"`
2. Install all dependencies listed above
3. Set up `globals.css` with all CSS custom properties
4. Configure `tailwind.config.js` with all token extensions and font families
5. Build shared components (Nav, Footer, CTABand, Button, SectionHeader, AnimatedSection)
6. Build all 10 pages in order: Home → Services → Work → Case Study → Apps → About → Contact → Start → Privacy → Terms
7. Build all API routes
8. Run `tsc --noEmit` and fix all type errors
9. Run `next build` and fix any build errors
10. Output the complete project file tree when done

Do not stop between steps. Complete the entire project.
