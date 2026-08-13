export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: "ai" | "startups" | "software" | "cloud" | "cybersecurity" | "research" | "news" | "analysis";
  categoryLabel: string;
  publishedAt: string;
  updatedAt?: string;
  relativeTime: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
  featured?: boolean;
  trending?: boolean;
  content: {
    introduction: string;
    sections: {
      heading: string;
      body: string;
    }[];
    keyTakeaways: string[];
    faqs?: {
      question: string;
      answer: string;
    }[];
  };
}

export const CATEGORIES = [
  { slug: "ai", label: "Artificial Intelligence", description: "Coverage on frontier LLMs, enterprise AI deployments, and foundational research." },
  { slug: "startups", label: "Startups", description: "Venture capital trends, founder briefings, and emerging tech business models." },
  { slug: "software", label: "Software", description: "Developer tools, language ecosystems, frameworks, and product releases." },
  { slug: "cloud", label: "Cloud", description: "Infrastructure engineering, serverless paradigms, edge computing, and cost optimization." },
  { slug: "cybersecurity", label: "Cybersecurity", description: "Threat intelligence, zero-day vulnerabilities, data privacy, and defensive security." },
  { slug: "research", label: "Research", description: "Academic breakthroughs, whitepapers, benchmarks, and deep-tech innovations." },
  { slug: "news", label: "News", description: "Real-time updates, corporate developments, and breaking tech dispatches." },
  { slug: "analysis", label: "Analysis", description: "In-depth editorial teardowns, market intelligence, and long-term industry outlooks." },
] as const;

export const ARTICLES: Article[] = [
  {
    slug: "openai-launches-gpt-6-what-changes-for-enterprises",
    title: "OpenAI launches GPT-6: what changes for enterprises?",
    excerpt:
      "The latest model architectural leap focuses on native multi-modal reasoning, deterministic function execution, and 80% reduction in inference latency for enterprise workloads.",
    category: "ai",
    categoryLabel: "AI Intelligence",
    publishedAt: "2026-08-12T14:30:00Z",
    updatedAt: "2026-08-13T06:15:00Z",
    relativeTime: "2 hours ago",
    readTime: "5 min read",
    author: {
      name: "Mirza Mehedi Abbas",
      role: "Editor-in-Chief & Tech Analyst",
    },
    featured: true,
    trending: true,
    content: {
      introduction:
        "OpenAI has officially released GPT-6, marking a pivotal transition in enterprise artificial intelligence deployment. Unlike incremental updates of prior model generations, GPT-6 addresses core enterprise bottlenecks: execution reliability, latency guarantees, and deep system-level integration.",
      sections: [
        {
          heading: "Deterministic Function Calling & Native Reasoning",
          body: "For Fortune 500 engineering teams, non-deterministic model outputs have historically required extensive guardrail layers. GPT-6 incorporates a hybrid reasoning architecture that separates abstract creative synthesis from structured code execution. Benchmark testing across complex API workflows shows a 94.2% reduction in hallucination rates during tool usage.",
        },
        {
          heading: "Latency & Compute Optimization",
          body: "Through new sparse activation layers and specialized hardware kernel tuning, inference costs for standard 128k context windows have dropped by approximately 65%. Enterprise SLAs now guarantee response times under 180ms for real-time customer and developer pipelines.",
        },
        {
          heading: "Governance and On-Premises Isolation",
          body: "Addressing European Union and strict financial sector compliance, OpenAI is releasing dedicated private cloud instances with cryptographic data isolation. Enterprise telemetry remains strictly within customer virtual private networks (VPNs).",
        },
      ],
      keyTakeaways: [
        "94.2% accuracy improvement in structured API tool execution.",
        "65% reduction in enterprise token compute overhead.",
        "Dedicated private cloud isolation options for regulated sectors.",
      ],
      faqs: [
        {
          question: "When will GPT-6 API access be available globally?",
          answer: "API access is rolling out immediately to tier-4 and tier-5 developer accounts, with broad availability scheduled over the next two weeks.",
        },
        {
          question: "Is GPT-6 backward compatible with existing GPT-4o prompts?",
          answer: "Yes, standard endpoints maintain strict API compatibility, while offering new parameters for explicit deterministic reasoning bounds.",
        },
      ],
    },
  },
  {
    slug: "google-expands-gemini-integrations-for-businesses",
    title: "Google expands Gemini integrations for businesses",
    excerpt:
      "Google Workspace and Cloud infrastructure receive deep Gemini multi-agent capabilities, enabling autonomous data processing across enterprise siloes.",
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    publishedAt: "2026-08-12T10:00:00Z",
    relativeTime: "4 hours ago",
    readTime: "4 min read",
    author: {
      name: "Editorial Team",
      role: "Senior AI Correspondent",
    },
    trending: true,
    content: {
      introduction:
        "Google Cloud announced a comprehensive expansion of its Gemini ecosystem today, bringing autonomous multi-agent orchestration directly into Google Workspace, BigQuery, and Vertex AI.",
      sections: [
        {
          heading: "Unified Knowledge Graph Querying",
          body: "The updated Gemini Enterprise connector establishes automated semantic search indexing across Drive, Slack, Jira, and internal SQL databases, allowing employees to query organizational knowledge using natural dialogue.",
        },
        {
          heading: "Vertex AI Agent Builder Enhancements",
          body: "Developers can now deploy stateful background agents that automatically monitor data streams, process invoice pipelines, and trigger CI/CD deployment routines without continuous human polling.",
        },
      ],
      keyTakeaways: [
        "Native multi-agent orchestration inside Vertex AI and BigQuery.",
        "Zero-retention data privacy guarantees for enterprise subscribers.",
      ],
    },
  },
  {
    slug: "indias-ai-startup-funding-momentum-continues-in-2026",
    title: "India’s AI startup funding momentum continues in 2026",
    excerpt:
      "Domestic and international venture firms deploy over $1.4B into Indic language models, autonomous agent frameworks, and vertical SaaS startups across Bengaluru and NCR.",
    category: "startups",
    categoryLabel: "Startups",
    publishedAt: "2026-08-11T18:45:00Z",
    relativeTime: "1 day ago",
    readTime: "6 min read",
    author: {
      name: "Mirza Mehedi Abbas",
      role: "Editor-in-Chief",
    },
    featured: false,
    trending: true,
    content: {
      introduction:
        "India's technology startup ecosystem has witnessed a surge in seed and Series A capital allocation directed toward specialized AI research and vertical infrastructure. Capital flow analysis reveals a strategic tilt toward domain-specific LLMs and developer tooling.",
      sections: [
        {
          heading: "Indic Language Infrastructure Gains Ground",
          body: "With over 22 official languages, startups focusing on multilingual voice processing and low-resource language fine-tuning have secured major backing from global funds looking at South Asian scale.",
        },
        {
          heading: "B2B AI SaaS Export Expansion",
          body: "Indian founders leveraging efficient engineering hubs in Bengaluru, Pune, and Hyderabad are shipping global AI developer platforms with net dollar retention rates exceeding 130%.",
        },
      ],
      keyTakeaways: [
        "$1.4B deployed across Indian AI startups in Q2/Q3 2026.",
        "Strong institutional appetite for specialized Indic language infrastructure.",
      ],
    },
  },
  {
    slug: "aws-introduces-new-infrastructure-pricing-updates",
    title: "AWS introduces new infrastructure pricing updates",
    excerpt:
      "Amazon Web Services unveils revised EC2 Graviton4 pricing models and reduced egress costs to support high-throughput AI inference workloads.",
    category: "cloud",
    categoryLabel: "Cloud Computing",
    publishedAt: "2026-08-11T11:20:00Z",
    relativeTime: "1 day ago",
    readTime: "4 min read",
    author: {
      name: "Cloud Architecture Desk",
      role: "Infrastructure Reporter",
    },
    trending: true,
    content: {
      introduction:
        "Amazon Web Services (AWS) announced competitive structural price updates across its compute and networking tiers, directly addressing cloud cost optimization demands from enterprise customers.",
      sections: [
        {
          heading: "Graviton4 Instance Cost Reductions",
          body: "Next-generation Graviton4 ARM-based instances receive an immediate 18% cost-performance optimization, encouraging workloads migrating away from legacy x86 architectures.",
        },
        {
          heading: "Inter-Region Data Egress Relief",
          body: "In response to regulatory pressure and multi-cloud architectures, AWS has adjusted inter-region data transfer fees for multi-availability-zone deployments.",
        },
      ],
      keyTakeaways: [
        "18% price-performance gain on Graviton4 instances.",
        "Simplified egress tiering for multi-region cloud applications.",
      ],
    },
  },
  {
    slug: "cybersecurity-researchers-warn-of-rising-credential-theft-attacks",
    title: "Cybersecurity researchers warn of rising credential theft attacks",
    excerpt:
      "Sophisticated session hijacking vectors bypassing hardware FIDO2 keys and MFA prompts emerge across corporate engineering environments.",
    category: "cybersecurity",
    categoryLabel: "Cybersecurity",
    publishedAt: "2026-08-10T16:00:00Z",
    relativeTime: "2 days ago",
    readTime: "5 min read",
    author: {
      name: "Security Intelligence Desk",
      role: "Threat Analyst",
    },
    trending: false,
    content: {
      introduction:
        "Threat intelligence firms have published a joint advisory detailing an increase in adversary-in-the-middle (AiTM) phishing kits targeting OAuth tokens and active browser session keys.",
      sections: [
        {
          heading: "Anatomy of Cookie Hijacking Attacks",
          body: "Rather than attempting to crack multi-factor authentication, modern threat actors utilize malicious browser extensions and dev-dependency supply-chain compromises to extract active authorization tokens.",
        },
        {
          heading: "Defensive Measures for Dev Teams",
          body: "Security operations teams are urged to enforce short-lived access tokens, device trust compliance checks, and continuous session verification protocols.",
        },
      ],
      keyTakeaways: [
        "Session token theft bypassing conventional MFA mechanisms.",
        "Immediate necessity for continuous authorization auditing in CI/CD environments.",
      ],
    },
  },
  {
    slug: "nextjs-16-compiler-breakthroughs-and-server-component-patterns",
    title: "Next.js 16 compiler breakthroughs and server component patterns",
    excerpt:
      "Vercel delivers sub-10ms server side renders through progressive partial pre-rendering and optimized Turbopack bundle splitting.",
    category: "software",
    categoryLabel: "Software Engineering",
    publishedAt: "2026-08-09T09:30:00Z",
    relativeTime: "3 days ago",
    readTime: "5 min read",
    author: {
      name: "Mirza Mehedi Abbas",
      role: "Editor-in-Chief",
    },
    trending: false,
    content: {
      introduction:
        "Next.js 16 brings refined streaming primitives, zero-overhead client hydration boundaries, and instant dynamic routing performance for modern web applications.",
      sections: [
        {
          heading: "Partial Pre-rendering (PPR) Production Ready",
          body: "By combining static shell generation with server-streamed dynamic suspense boundaries, applications achieve static CDN load speeds with real-time server rendering flexibility.",
        },
        {
          heading: "Memory Efficiency in Node & Edge Runtimes",
          body: "Turbopack's revised tree-shaking algorithms eliminate unused module overhead, reducing server memory footprints by up to 40%.",
        },
      ],
      keyTakeaways: [
        "Production-grade Partial Pre-rendering for hybrid static/dynamic pages.",
        "40% reduction in server memory footprint during high concurrency.",
      ],
    },
  },
  {
    slug: "quantum-error-correction-milestone-published-in-nature",
    title: "Quantum error correction milestone published in Nature",
    excerpt:
      "Researchers achieve sub-threshold logical qubit error rates using topological surface codes, bringing fault-tolerant quantum computing closer.",
    category: "research",
    categoryLabel: "Deep Tech Research",
    publishedAt: "2026-08-08T15:10:00Z",
    relativeTime: "4 days ago",
    readTime: "7 min read",
    author: {
      name: "Research Desk",
      role: "Scientific Correspondent",
    },
    trending: false,
    content: {
      introduction:
        "A multi-institutional physics collaboration has demonstrated logical qubits operating with lower physical error rates than individual physical qubits, marking a critical milestone in fault-tolerant quantum hardware.",
      sections: [
        {
          heading: "The Fault-Tolerance Horizon",
          body: "For decades, physical noise in superconducting qubits prevented long-chain quantum algorithms. Surface code error correction allows redundant physical qubits to protect quantum information deterministically.",
        },
      ],
      keyTakeaways: [
        "First physical demonstration of logical qubit lifetime exceeding physical qubit constituents.",
        "Clear technical path toward 1,000 logical qubit quantum processors.",
      ],
    },
  },
  {
    slug: "silicon-valley-vc-trends-q3-2026-market-tear-down",
    title: "Silicon Valley VC trends Q3 2026: market teardown",
    excerpt:
      "An analytical teardown of venture capital deployment showing record valuation discipline and aggressive appetite for revenue-backed vertical software.",
    category: "analysis",
    categoryLabel: "Market Intelligence",
    publishedAt: "2026-08-07T12:00:00Z",
    relativeTime: "5 days ago",
    readTime: "8 min read",
    author: {
      name: "Mirza Mehedi Abbas",
      role: "Editor-in-Chief",
    },
    trending: false,
    content: {
      introduction:
        "Venture capital metrics for Q3 2026 reveal an ecosystem prioritizing capital efficiency, durable net expansion revenue, and clear AI defensibility over pure user acquisition metrics.",
      sections: [
        {
          heading: "Valuation Multiples Normalize",
          body: "Series A and Series B rounds have recalibrated to 10-14x ARR multiples for top-quartile SaaS companies, while pre-revenue hype rounds have largely diminished.",
        },
      ],
      keyTakeaways: [
        "Capital shifts toward revenue-generating vertical software platforms.",
        "Rigorous emphasis on gross margin sustainability in AI infrastructure.",
      ],
    },
  },
];

export function getFeaturedArticle(): Article {
  return ARTICLES.find((a) => a.featured) || ARTICLES[0];
}

export function getTrendingArticles(): Article[] {
  return ARTICLES.filter((a) => a.trending).slice(0, 3);
}

export function getLatestArticles(limit: number = 6): Article[] {
  return ARTICLES.slice(0, limit);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return ARTICLES.filter((a) => a.category === categorySlug);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
