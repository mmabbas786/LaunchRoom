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
];
