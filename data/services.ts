import { pricingSummary } from "@/data/pricing";
import type { CurrencyAmount } from "@/data/pricing";

export type Service = {
  id:
    | "web"
    | "business-web"
    | "booking-web"
    | "portfolio-web"
    | "landing-page"
    | "ecommerce-web"
    | "custom"
    | "webapps"
    | "saas"
    | "mvp"
    | "retainer"
    | "hosting"
    | "nextjs";
  slug: string;
  number: string;
  name: string;
  shortDescription: string;
  description: string[];
  includes: string[];
  timeline: string;
  startingPrice: CurrencyAmount;
};

export const services: Service[] = [
  {
    id: "web",
    slug: "website-development",
    number: "01",
    name: "Website Development Services",
    shortDescription:
      "Comprehensive website design and development for businesses, professionals, and startups. Fast loading, mobile responsive, and built to convert.",
    description: [
      "We design, build, and launch bespoke websites that establish immediate credibility and drive client inquiries. From focused one-page launches to complete multi-page business websites and interactive booking platforms, every website is engineered for speed, clean aesthetics, and seamless mobile responsiveness.",
      "We handle every aspect of the project: structure planning, visual UI design, copy structuring, modern development, domain DNS setup, SSL security, search engine indexing, and post-launch maintenance.",
    ],
    includes: [
      "Page structure & content planning",
      "Custom UI/UX design in Figma",
      "Fast, mobile-first responsive coding",
      "On-page SEO & Schema.org markup",
      "Lead inquiry forms & WhatsApp triggers",
      "Domain connection, SSL & cloud hosting",
      "Google Analytics & Search Console setup",
      "1-3 months post-launch warranty support",
    ],
    timeline: "1-3 weeks",
    startingPrice: pricingSummary.basic,
  },
  {
    id: "business-web",
    slug: "business-website-development",
    number: "02",
    name: "Business Website Development",
    shortDescription:
      "Professional websites for companies, MSMEs, agencies, consultancies, and local businesses designed to build trust and acquire customers.",
    description: [
      "Your website is often the first impression a potential customer or partner has of your business. We build authoritative, clean business websites that clearly explain what you offer, why clients should choose you, and how they can reach you.",
      "Whether you are an established company in Kolkata, an agency in Mumbai, or a consultancy serving clients worldwide, we tailor the structure, messaging, and visual design to fit your target market.",
    ],
    includes: [
      "Company profile & service breakdowns",
      "Brand credibility & trust-building layouts",
      "Mobile-optimized responsive layouts",
      "Lead capture & WhatsApp inquiry buttons",
      "Google Business profile linking & local SEO",
      "Domain setup & reliable cloud hosting",
      "Direct founder communication throughout",
    ],
    timeline: "1-2 weeks",
    startingPrice: pricingSummary.basic,
  },
  {
    id: "booking-web",
    slug: "booking-website-development",
    number: "03",
    name: "Booking & Appointment Websites",
    shortDescription:
      "Automated scheduling and appointment booking websites for salons, clinics, fitness trainers, consultants, and service specialists.",
    description: [
      "Eliminate back-and-forth phone calls and scheduling friction. We build custom appointment booking websites that allow clients to view services, choose time slots, and submit inquiries or pay upfront seamlessly.",
      "Engineered with intuitive calendars, WhatsApp notifications, and mobile-first navigation so your clients can easily book from their phones in seconds.",
    ],
    includes: [
      "Interactive appointment booking flow",
      "Service menus, durations & pricing displays",
      "WhatsApp & email booking notifications",
      "Calendar integrations & availability rules",
      "Customer detail collection forms",
      "Optional payment gateway integration",
      "Mobile-optimized customer booking portal",
    ],
    timeline: "1-3 weeks",
    startingPrice: pricingSummary.launch,
  },
  {
    id: "portfolio-web",
    slug: "portfolio-website-development",
    number: "04",
    name: "Portfolio Website Development",
    shortDescription:
      "Visually polished portfolio websites for designers, architects, photographers, creators, freelancers, and executives.",
    description: [
      "Showcase your past projects and creative work with stunning visual presentations, fluid page transitions, and elegant typography that impress high-value clients.",
      "We design distraction-free portfolio sites focused on high-resolution image galleries, organized case studies, and clear inquiry paths.",
    ],
    includes: [
      "High-impact visual case study layouts",
      "Fast-loading image & media galleries",
      "About, resume & client list sections",
      "Direct project inquiry & contact triggers",
      "Minimalist, modern dark/light styling",
      "Search-friendly metadata & social share cards",
    ],
    timeline: "1-2 weeks",
    startingPrice: pricingSummary.basic,
  },
  {
    id: "landing-page",
    slug: "landing-page-development",
    number: "05",
    name: "High-Converting Landing Pages",
    shortDescription:
      "Focused single-page websites engineered for advertising campaigns, product launches, lead magnets, and maximum conversion rates.",
    description: [
      "When running Google Ads, Meta campaigns, or launching a new product, sending traffic to a generic homepage loses leads. We build distraction-free, high-converting landing pages designed around a single persuasive call-to-action.",
      "Optimized for sub-second loading speed, clear value propositions, social proof placement, and frictionless lead intake.",
    ],
    includes: [
      "Conversion-focused copy hierarchy",
      "High-impact hero section & CTA buttons",
      "Visual social proof & feature blocks",
      "Frictionless lead capture & WhatsApp triggers",
      "Google Ads & Meta Pixel tracking setup",
      "Sub-second mobile loading speed",
    ],
    timeline: "3-7 days",
    startingPrice: pricingSummary.basic,
  },
  {
    id: "ecommerce-web",
    slug: "ecommerce-website-development",
    number: "06",
    name: "E-Commerce Website Development",
    shortDescription:
      "Custom online stores, product catalogues, and secure payment checkout systems for direct-to-consumer (D2C) brands and retail businesses.",
    description: [
      "Sell products online with a fast, modern e-commerce storefront. We build product catalogues, shopping carts, and automated payment gateway integrations (Razorpay, Stripe, UPI).",
      "Built for smooth mobile shopping, clean order management, and zero monthly template bloat.",
    ],
    includes: [
      "Product catalogue & category filtering",
      "Shopping cart & seamless checkout flow",
      "Razorpay / Stripe / UPI payment integration",
      "Automated order confirmation & WhatsApp alerts",
      "Inventory & basic product management setup",
      "Mobile-first responsive commerce UI",
    ],
    timeline: "2-4 weeks",
    startingPrice: pricingSummary.scale,
  },
  {
    id: "custom",
    slug: "custom-web-development",
    number: "07",
    name: "Custom Web Solutions",
    shortDescription:
      "Bespoke web tools, quotation calculators, client portals, internal dashboards, and custom business workflow automations.",
    description: [
      "When off-the-shelf templates and SaaS plugins cannot solve your specific business workflow, LaunchRoom engineers bespoke web tools tailored precisely to how your business operates.",
      "From dynamic price calculators and document generators to internal staff portals and third-party CRM integrations, we build lightweight, dependable software.",
    ],
    includes: [
      "Custom workflow analysis & scoping",
      "Dynamic calculators, forms & generators",
      "Third-party API & CRM integrations",
      "Internal team portals & dashboards",
      "Automated lead routing & data exports",
      "Secure cloud infrastructure deployment",
    ],
    timeline: "1-4 weeks",
    startingPrice: {
      INR: "Custom quote",
      USD: "Custom quote",
    },
  },
  {
    id: "webapps",
    slug: "web-app-development",
    number: "08",
    name: "Web Application Development",
    shortDescription:
      "Scalable full-stack web applications, customer portals, interactive dashboards, and business platforms engineered for high performance.",
    description: [
      "LaunchRoom builds scalable, type-safe web applications for businesses needing interactive functionality beyond a static brochure site.",
      "We handle complete frontend UX engineering, secure authentication, database architecture, API integrations, and cloud infrastructure deployment.",
    ],
    includes: [
      "Interactive UI/UX & component system",
      "Next.js App Router & TypeScript frontend",
      "Database architecture (Supabase / PostgreSQL / Firebase)",
      "User authentication, sessions & role permissions",
      "Stripe / Razorpay payment gateway integration",
      "Admin portals & customer dashboards",
      "API integrations & webhook handling",
      "Complete source code ownership & documentation",
    ],
    timeline: "2-5 weeks",
    startingPrice: {
      INR: "Custom quote",
      USD: "Custom quote",
    },
  },
  {
    id: "saas",
    slug: "saas-development",
    number: "09",
    name: "SaaS Development",
    shortDescription:
      "End-to-end engineering for SaaS products: multi-tenant architecture, user authentication, subscription billing, onboarding flows, and scalable cloud databases.",
    description: [
      "Turn your software idea into a recurring-revenue SaaS product. LaunchRoom designs and engineers scalable software-as-a-service platforms with clean multi-user architectures.",
      "From subscription tier management and Stripe checkout to interactive analytics dashboards and team permission roles, we build SaaS applications engineered to scale smoothly.",
    ],
    includes: [
      "Multi-tenant database schema & tenancy isolation",
      "User authentication, team workspaces & RBAC roles",
      "Stripe / Razorpay recurring subscription billing & webhooks",
      "Interactive product dashboards & data visualizations",
      "Automated email onboarding & transactional notifications",
      "Vercel edge deployment, automated CI/CD & logging",
      "Complete code repository handover & developer documentation",
    ],
    timeline: "3-6 weeks",
    startingPrice: {
      INR: "Custom quote",
      USD: "Custom quote",
    },
  },
  {
    id: "mvp",
    slug: "startup-mvp-development",
    number: "10",
    name: "Startup MVP Development",
    shortDescription:
      "Rapid 2 to 4-week product engineering sprint for founders looking to validate ideas, acquire early users, and raise capital.",
    description: [
      "Stop over-engineering before Day 1. LaunchRoom helps early-stage founders turn product concepts into live, working software in 2 to 4 weeks.",
      "We focus strictly on the core features required to test your value proposition with real customers, eliminating unnecessary bloat and keeping your launch on time and on budget.",
    ],
    includes: [
      "Lean MVP scope definition & feature prioritization",
      "Interactive prototype & UI design in Figma",
      "Full-stack web application development",
      "Auth, database & payment integrations",
      "Vercel cloud deployment & DNS configuration",
      "Conversion tracking & analytics integration",
      "Zero equity required / 100% IP ownership",
      "Handover walkthrough & technical documentation",
    ],
    timeline: "2-4 weeks",
    startingPrice: {
      INR: "Custom quote",
      USD: "Custom quote",
    },
  },
  {
    id: "retainer",
    slug: "website-maintenance",
    number: "11",
    name: "Website Maintenance & Support",
    shortDescription:
      "Monthly maintenance retainers, security monitoring, content updates, and ongoing technical support to keep your digital assets fast, secure, and current.",
    description: [
      "Launch is just the beginning. Websites and digital tools require regular updates, security monitoring, content additions, and dependable technical backup.",
      "Our maintenance retainers keep your digital assets stable and optimized without requiring an expensive in-house engineering team or bloated agency contract.",
    ],
    includes: [
      "Content, text, and media updates",
      "24/7 uptime monitoring & rapid response",
      "Security patches & dependency updates",
      "Performance & Core Web Vitals checks",
      "Domain DNS & SSL certificate management",
      "Monthly SEO & traffic performance reports",
      "Direct communication channel for priority requests",
    ],
    timeline: "Ongoing monthly",
    startingPrice: pricingSummary.monthlyMaintenance,
  },
  {
    id: "hosting",
    slug: "hosting-deployment",
    number: "12",
    name: "Hosting & Cloud Deployment",
    shortDescription:
      "High-availability cloud hosting, Vercel edge deployment, domain DNS management, SSL certificates, zero-downtime CI/CD, and serverless database setups.",
    description: [
      "Deploy your website or web application on modern, lightning-fast edge infrastructure. We configure and manage production hosting on Vercel, Cloudflare, Supabase, and AWS.",
      "Get global CDN caching, automatic SSL certificates, continuous deployment pipelines from GitHub, and automated database backups with zero server administration headaches.",
    ],
    includes: [
      "Vercel / Cloudflare edge hosting architecture",
      "Custom domain connection & DNS configuration",
      "Automated SSL / HTTPS certificates & security headers",
      "Continuous deployment (CI/CD) via GitHub",
      "Serverless database provisioning & backup routines",
      "Uptime monitoring & edge caching optimization",
    ],
    timeline: "1-3 days",
    startingPrice: {
      INR: "Included with build",
      USD: "Included with build",
    },
  },
  {
    id: "nextjs",
    slug: "nextjs-development",
    number: "13",
    name: "Next.js & React Engineering",
    shortDescription:
      "Technical engineering specialization: Next.js App Router, React 19, Server Components, TypeScript, and edge rendering optimizations.",
    description: [
      "Deep technical capability in modern React and Next.js. We engineer blazing-fast frontend systems with partial pre-rendering, server-side caching, and sub-second page transitions.",
      "Positioned as our core engineering framework to deliver maximum SEO visibility, fast loading speeds, and maintainable enterprise codebases.",
    ],
    includes: [
      "Next.js App Router architecture",
      "React Server Components & streaming SSR",
      "Strict TypeScript type safety & automated linting",
      "Core Web Vitals & Google PageSpeed optimization",
      "Headless CMS integration (Sanity / Contentful)",
      "Edge rendering & Vercel deployment setup",
    ],
    timeline: "Sprint-based",
    startingPrice: {
      INR: "Custom quote",
      USD: "Custom quote",
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
