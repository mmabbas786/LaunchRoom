import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { demos } from "@/lib/demos";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/blog",
    "/services",
    "/website-development",
    "/web-app-development",
    "/startup-mvp-development",
    "/nextjs-development",
    "/pricing",
    "/work",
    "/demos",
    "/about",
    "/contact",
    "/start",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "daily" : "weekly" as const,
    priority: path === "" ? 1.0 : path.includes("-development") ? 0.9 : 0.8,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/work/${project.slug}`,
    lastModified: new Date(),
  }));

  const demoRoutes = demos.map((demo) => ({
    url: `${siteConfig.url}/demos/${demo.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...projectRoutes, ...demoRoutes];
}
