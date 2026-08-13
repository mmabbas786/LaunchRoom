import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { BLOG_CATEGORIES, BLOG_ARTICLES } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const coreRoutes = [
    "",
    "/services",
    "/services/website-development",
    "/services/web-app-development",
    "/services/nextjs-development",
    "/services/startup-mvp-development",
    "/blog",
    "/about",
    "/contact",
    "/privacy-policy",
    "/privacy",
    "/terms",
    "/disclaimer",
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
    priority: route === "" ? 1.0 : route === "/blog" || route === "/services" ? 0.9 : 0.8,
  }));

  const blogCategoryRoutes = BLOG_CATEGORIES.map((cat) => ({
    url: `${baseUrl}/blog/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.85,
  }));

  const blogArticleRoutes = BLOG_ARTICLES.map((art) => ({
    url: `${baseUrl}/blog/${art.category}/${art.slug}`,
    lastModified: new Date(art.updatedAt || art.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...coreRoutes, ...blogCategoryRoutes, ...blogArticleRoutes];
}
