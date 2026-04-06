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
      "Custom websites and web apps that are fast, SEO-ready, and built to grow with your business. No templates.",
    description: [
      "We design and build websites that make a business look credible quickly. That can mean a sharp landing page, a brochure-style business website, or a custom web experience that needs more structure than a template can give you.",
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
    startingPrice: "$469",
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
    startingPrice: "$1,699",
  },
  {
    id: "retainer",
    number: "03",
    name: "Maintenance & Retainer",
    shortDescription:
      "Monthly retainer plans so your site stays fast, updated, and secure. We're on call.",
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
    startingPrice: "$69/month",
  },
];
