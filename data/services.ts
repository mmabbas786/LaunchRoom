import { pricingSummary } from "@/data/pricing";

export type Service = {
  id: "web" | "apps" | "retainer";
  number: string;
  name: string;
  shortDescription: string;
  description: string[];
  includes: string[];
  timeline: string;
  startingPrice: string;
};

export const services: Service[] = [
  {
    id: "web",
    number: "01",
    name: "Website Development",
    shortDescription:
      "Launch and Scale website packages built for businesses that need a polished, mobile-ready online presence without agency confusion.",
    description: [
      "We design and build websites that make a business look credible quickly. That can mean a focused Launch package for a smaller brochure site or a broader Scale package when the business needs more depth, content, and visibility.",
      "Every build is scoped around clarity and speed. We handle design direction, copy structure, development, deployment, and post-launch support so the project actually ships instead of dragging on.",
    ],
    includes: [
      "Strategy & wireframing",
      "Custom design in Figma",
      "Next.js or plain HTML development",
      "SEO on-page setup",
      "Google Analytics",
      "Contact form integration",
      "Deployment (Vercel / Hostinger / Netlify)",
      "1-3 months post-launch support",
    ],
    timeline: "1-3 weeks",
    startingPrice: pricingSummary.launchCombined,
  },
  {
    id: "apps",
    number: "02",
    name: "Mobile Apps (Android/IOS)",
    shortDescription:
      "Android apps built with Flutter. From idea to Play Store, fully managed.",
    description: [
      "Launchroom builds Android/IOS apps for startups, experiments, and businesses that need something practical on the Play Store without hiring a big team.",
      "We help with product framing, UI, development, release setup, monetisation, and handover. The goal is to launch a version people can actually use and iterate on, not to overbuild before day one.",
    ],
    includes: [
      "UI/UX design",
      "Flutter development",
      "Play Store account setup & submission",
      "AdMob integration",
      "In-app purchases (RevenueCat)",
      "Push notifications",
      "Source code handover",
      "3 months post-launch support",
    ],
    timeline: "3-6 weeks",
    startingPrice: "Custom quote",
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
    startingPrice: pricingSummary.monthlyMaintenanceCombined,
  },
];
