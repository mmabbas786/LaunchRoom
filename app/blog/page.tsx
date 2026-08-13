import type { Metadata } from "next";
import { BlogLandingContent } from "@/components/blog/BlogLandingContent";
import { getBlogArticles, getBlogCategories } from "@/lib/sanity/service";
import { siteConfig } from "@/lib/site";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Blog | AI, Tech & Software Engineering Insights | LaunchRoom",
  description:
    "Explore LaunchRoom's technical blog covering artificial intelligence, Next.js architecture, cloud DevOps, cybersecurity advisories, and startup tech engineering.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Blog | AI, Tech & Software Engineering Insights | LaunchRoom",
    description:
      "Explore LaunchRoom's technical blog covering artificial intelligence, Next.js architecture, cloud DevOps, cybersecurity advisories, and startup tech engineering.",
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
};

export default async function BlogPage() {
  const articles = await getBlogArticles();
  const categories = await getBlogCategories();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
  ]);

  return (
    <main className="min-h-screen py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogLandingContent articles={articles} categories={categories} />
    </main>
  );
}
