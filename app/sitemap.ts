import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getBlogArticles, getBlogCategories } from "@/lib/sanity/service";
import { demos } from "@/lib/demos";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;
  const staticReleaseDate = new Date("2026-08-13T00:00:00.000Z");

  // Canonical core commercial, studio, and company routes
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: staticReleaseDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: staticReleaseDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/website-development`,
      lastModified: staticReleaseDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/web-app-development`,
      lastModified: staticReleaseDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/nextjs-development`,
      lastModified: staticReleaseDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/startup-mvp-development`,
      lastModified: staticReleaseDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: staticReleaseDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work/new-india-stores`,
      lastModified: staticReleaseDate,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/work/pdf-vault`,
      lastModified: staticReleaseDate,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: staticReleaseDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/demos`,
      lastModified: staticReleaseDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: staticReleaseDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: staticReleaseDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: staticReleaseDate,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: staticReleaseDate,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: staticReleaseDate,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: staticReleaseDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  // Canonical demo niche landing pages (EXCLUDES raw noindex /preview iframe routes)
  const demoRoutes: MetadataRoute.Sitemap = demos.map((demo) => ({
    url: `${baseUrl}/demos/${demo.slug}`,
    lastModified: staticReleaseDate,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Categories dynamically fetched from Sanity / data layer
  const categories = await getBlogCategories();
  const blogCategoryRoutes: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/blog/${cat.slug}`,
    lastModified: staticReleaseDate,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  // Articles dynamically fetched from Sanity / data layer with genuine document timestamps
  const articles = await getBlogArticles();
  const blogArticleRoutes: MetadataRoute.Sitemap = articles.map((art) => {
    const rawDate = art.updatedAt || art.publishedAt;
    const lastMod = rawDate ? new Date(rawDate) : staticReleaseDate;

    return {
      url: `${baseUrl}/blog/${art.category}/${art.slug}`,
      lastModified: isNaN(lastMod.getTime()) ? staticReleaseDate : lastMod,
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });

  return [
    ...coreRoutes,
    ...demoRoutes,
    ...blogCategoryRoutes,
    ...blogArticleRoutes,
  ];
}
