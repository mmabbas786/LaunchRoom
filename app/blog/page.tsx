import type { Metadata } from "next";
import { BlogLandingContent } from "@/components/blog/BlogLandingContent";
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

export default function BlogPage() {
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
      <BlogLandingContent />
    </main>
  );
}
