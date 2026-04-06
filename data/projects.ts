export type ProjectCategory = "All" | "Web" | "Apps" | "Ongoing";

export type Project = {
  slug: string;
  name: string;
  category: Exclude<ProjectCategory, "All">;
  desc: string;
  tags: string[];
  thumbGradient: string;
  thumbEmoji: string;
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
    desc: "Single-page glassmorphism website for a Kolkata-based ship chandling company. Self-contained HTML, deployed to Hostinger.",
    tags: ["HTML", "CSS", "Glassmorphism", "Hostinger"],
    thumbGradient: "linear-gradient(135deg,#0f1e2e,#1a3a5c)",
    thumbEmoji: "⚓",
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
    liveUrl: null,
    liveLabel: "Project available on request",
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
    overview:
      "PDF Vault is a personal product and one of Launchroom's strongest proof points for Android shipping. It combines six common PDF actions into one straightforward utility app.",
    problem:
      "Many PDF apps on the Play Store are bloated, overly aggressive with ads, or lock basic features behind subscriptions. Users need a simple, useful PDF tool that feels practical on Android.",
    solution:
      "The app was built with Flutter for speed and maintainability, with Android-friendly file handling and AdMob support for monetisation. The product focuses on common user tasks instead of padding the experience with unnecessary complexity.",
    results: [
      "Live on Google Play",
      "6 tools in one app",
      "Android-friendly file handling",
      "Monetisation-ready foundation",
    ],
    summary:
      "A utility-first Android product built around real PDF workflows and repeatable Play Store shipping.",
    liveUrl: "https://play.google.com/store",
    liveLabel: "View on Play Store",
  },
  {
    slug: "roast-my-ipl",
    name: "Roast My IPL",
    category: "Ongoing",
    desc: "An AI-led IPL roast generator concept designed for fast iteration, shareability, and fun seasonal traffic.",
    tags: ["AI", "React", "Content", "Sports"],
    thumbGradient: "linear-gradient(135deg,#231a08,#4b3008)",
    thumbEmoji: "🏏",
    client: "Internal experiment",
    timeline: "In progress",
    role: "Concept, product direction & frontend",
    tech: ["Next.js", "AI APIs", "Tailwind CSS"],
    overview:
      "Roast My IPL is an internal Launchroom experiment exploring fast-moving sports content, shareable interactions, and lightweight AI entertainment products.",
    problem:
      "Seasonal content projects move quickly. The challenge is creating something fun enough to spread while still being cheap and fast to build.",
    solution:
      "We designed a lean concept that focuses on viral shareability, strong copy tone, and quick frontend iteration rather than a complex backend-heavy product.",
    results: [
      "Concept defined and scoped",
      "Positioned for seasonal launches",
      "Strong internal sandbox for rapid experiments",
      "Useful proof for future AI-based client work",
    ],
    summary:
      "An in-progress seasonal experiment built to test fast content products and lightweight AI experiences.",
    liveUrl: null,
    liveLabel: "Launching soon",
  },
];
