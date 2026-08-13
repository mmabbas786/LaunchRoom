import { pricingSummary } from "@/data/pricing";
import type { CurrencyAmount } from "@/data/pricing";

export type Service = {
  id: "web" | "webapps" | "retainer";
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
    number: "01",
    name: "Website Development",
    shortDescription:
      "Basic, Launch, and Scale website packages built for businesses that need a polished, mobile-ready online presence without agency confusion.",
    description: [
      "We design and build websites that make a business look credible quickly. That can mean a focused Basic package for a one-page presence, a stronger Launch package for a fuller brochure site, or a broader Scale package when the business needs more depth, content, and visibility.",
      "Every build is scoped around clarity and speed. We handle design direction, copy structure, development, deployment, and post-launch support so the project actually ships instead of dragging on.",
    ],
    includes: [
      "Strategy & wireframing",
      "Custom design in Figma",
      "Next.js or modern HTML5 development",
      "SEO on-page setup & Schema.org markup",
      "Google Analytics GA4 integration",
      "Contact form & lead routing",
      "Vercel / Netlify cloud deployment",
      "1-3 months post-launch support",
    ],
    timeline: "1-3 weeks",
    startingPrice: pricingSummary.basic,
  },
  {
    id: "webapps",
    number: "02",
    name: "Web Applications & SaaS",
    shortDescription:
      "Custom web platforms, customer portals, and interactive dashboards built with Next.js and TypeScript.",
    description: [
      "LaunchRoom builds scalable, high-performance web applications for startups and businesses needing custom functionality, portals, or SaaS products.",
      "We handle frontend UX engineering, API development, database architecture, authentication, and cloud infrastructure deployment.",
    ],
    includes: [
      "Custom UI/UX & Interactive Design",
      "Next.js App Router & React 19 Development",
      "Database & Auth Integration (Supabase / Firebase)",
      "Stripe / Payment Gateway Integration",
      "Admin Dashboards & Customer Portals",
      "API Development & Webhooks",
      "Source Code Handover & GitHub Setup",
      "3 months post-launch technical support",
    ],
    timeline: "2-5 weeks",
    startingPrice: {
      INR: "Custom quote",
      USD: "Custom quote",
    },
  },
  {
    id: "retainer",
    number: "03",
    name: "Maintenance & Retainer",
    shortDescription:
      "Monthly maintenance and support for businesses that need quick updates, monitoring, and a dependable team after launch.",
    description: [
      "Launch is not the end of the project. Clients usually need updates, small edits, monitoring, and someone dependable when something breaks or needs changing.",
      "Our retainer work keeps things stable without forcing you into a large agency relationship. You get quick support, clear reporting, and a team that already knows the product.",
    ],
    includes: [
      "Unlimited small content edits",
      "Monthly performance & SEO report",
      "Uptime monitoring",
      "Security updates",
      "Hosting & domain management",
      "Priority support response",
    ],
    timeline: "Ongoing",
    startingPrice: pricingSummary.monthlyMaintenance,
  },
];
