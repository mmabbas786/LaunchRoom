import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { CATEGORIES, ARTICLES } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const coreRoutes = [
    "",
    "/about",
    "/contact",
    "/privacy-policy",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/services",
    "/services/website-development",
    "/services/web-app-development",
    "/services/nextjs-development",
    "/services/startup-mvp-development",
    "/website-development",
    "/web-app-development",
    "/nextjs-development",
    "/startup-mvp-development",
    "/work",
    "/pricing",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const categoryRoutes = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  const articleRoutes = ARTICLES.map((art) => ({
    url: `${baseUrl}/${art.category}/${art.slug}`,
    lastModified: new Date(art.updatedAt || art.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...coreRoutes, ...categoryRoutes, ...articleRoutes];
}
