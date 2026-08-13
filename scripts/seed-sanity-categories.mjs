import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "86z4ipp6",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const categories = [
  { _id: "category-ai-automation", _type: "category", title: "AI & Automation", slug: { _type: "slug", current: "ai-automation" }, description: "Frontier LLM deployment, multi-agent frameworks, and autonomous workflow engineering." },
  { _id: "category-tech-news", _type: "category", title: "Tech News", slug: { _type: "slug", current: "tech-news" }, description: "Real-time industry dispatches, strategic tech updates, and corporate developments." },
  { _id: "category-software-saas", _type: "category", title: "Software & SaaS", slug: { _type: "slug", current: "software-saas" }, description: "Next.js architecture, TypeScript patterns, and high-growth SaaS product engineering." },
  { _id: "category-cloud-devops", _type: "category", title: "Cloud & DevOps", slug: { _type: "slug", current: "cloud-devops" }, description: "Serverless infrastructures, edge computing, container orchestrations, and cost optimization." },
  { _id: "category-cybersecurity", _type: "category", title: "Cybersecurity", slug: { _type: "slug", current: "cybersecurity" }, description: "Threat intelligence, session vulnerability defense, OAuth security, and zero-day advisories." },
  { _id: "category-startups-business-tech", _type: "category", title: "Startups & Business Tech", slug: { _type: "slug", current: "startups-business-tech" }, description: "Venture capital trends, founder briefings, MVP strategy, and scalable business models." },
  { _id: "category-web-app-industry", _type: "category", title: "Web & App Industry", slug: { _type: "slug", current: "web-app-industry" }, description: "Modern web standards, performance benchmarks, Core Web Vitals, and UI frameworks." },
  { _id: "category-tool-reviews", _type: "category", title: "Tool Reviews", slug: { _type: "slug", current: "tool-reviews" }, description: "Developer productivity tools, API platforms, and technical benchmarks." },
];

async function seed() {
  console.log("Seeding categories into Sanity dataset 86z4ipp6...");
  for (const cat of categories) {
    try {
      await client.createOrReplace(cat);
      console.log(`✓ Created category: ${cat.title}`);
    } catch (err) {
      console.error(`✗ Error creating category ${cat.title}:`, err.message);
    }
  }
}

seed();
