export type ProjectCategory = "All" | "Web" | "Web Applications" | "Ongoing";

export type Project = {
  slug: string;
  name: string;
  category: Exclude<ProjectCategory, "All">;
  desc: string;
  tags: string[];
  thumbGradient: string;
  thumbEmoji: string;
  thumbImageSrc?: string;
  thumbImageAlt?: string;
  client: string;
  timeline: string;
  role: string;
  tech: string[];
  overview: string;
  problem: string;
  solution: string;
  results: string[];
  summary: string;
  liveUrl?: string | null;
  liveLabel?: string;
};

export const projects: Project[] = [
  {
    slug: "new-india-stores",
    name: "New India Stores",
    category: "Web",
    desc: "Single-page business website for a Kolkata-based ship chandling company, designed to look credible and stay easy to maintain after launch.",
    tags: ["HTML", "CSS", "Glassmorphism", "Hostinger"],
    thumbGradient: "linear-gradient(135deg,#0f1e2e,#1a3a5c)",
    thumbEmoji: "⚓",
    thumbImageSrc: "/new-india-stores-thumbnail.png",
    thumbImageAlt: "Homepage screenshot of the New India Stores website",
    client: "New India Stores, Kolkata",
    timeline: "1 week",
    role: "Full design & development",
    tech: ["HTML5", "CSS3", "JavaScript"],
    overview:
      "New India Stores is an established ship chandling company based on Strand Road, Kolkata. They needed a professional online presence to reach international shipping clients.",
    problem:
      "The client had no web presence at all. Their international clients had no practical way to verify their services or contact them digitally before speaking to the team.",
    solution:
      "We built a single, self-contained HTML site with a glassmorphism visual style, focused service sections, trust-building copy, and a clear contact path. The site was deployed to Hostinger so it could go live quickly without introducing a heavy maintenance burden.",
    results: [
      "Launched in 5 days",
      "Mobile responsive",
      "Self-contained build with no extra dependencies",
      "A shareable link for international contacts",
    ],
    summary:
      "A fast, credible web presence for a Kolkata ship chandling business serving international buyers.",
    liveUrl: "https://newindiastores.com/",
    liveLabel: "Visit live website",
  },
  {
    slug: "pdf-vault",
    name: "PDF Vault",
    category: "Web Applications",
    desc: "A lightweight, fast 6-in-1 browser-based PDF utility platform engineered with Next.js and client-side processing.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Web App"],
    thumbGradient: "linear-gradient(135deg,#1f1a10,#3d2f14)",
    thumbEmoji: "📄",
    client: "LaunchRoom Internal Utility",
    timeline: "2 weeks",
    role: "Product design & frontend engineering",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    overview:
      "PDF Vault is a web-based productivity application that allows users to compress, merge, split, scan, sign, and convert PDF documents directly in their browser.",
    problem:
      "Most existing online PDF tools are bloated with ad scripts, upload size restrictions, and privacy concerns when handling sensitive documents.",
    solution:
      "We engineered a clean, dark-mode web application that processes files efficiently with zero server data retention and instant response times.",
    results: [
      "6 core utility modules in one unified interface",
      "Sub-second client-side interaction speed",
      "Zero server file storage for strict user privacy",
      "100% responsive across mobile and desktop devices",
    ],
    summary:
      "A high-speed 6-in-1 PDF processing web tool built with Next.js.",
    liveUrl: null,
    liveLabel: "View Case Study",
  },
];
