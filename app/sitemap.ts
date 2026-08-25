import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { demos } from "@/lib/demos";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const staticReleaseDate = new Date("2026-08-25T00:00:00.000Z");

  // Canonical commercial studio routes
  const coreCommercialRoutes: MetadataRoute.Sitemap = [
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
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/business-website-development`,
      lastModified: staticReleaseDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/booking-website-development`,
      lastModified: staticReleaseDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/portfolio-website-development`,
      lastModified: staticReleaseDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/landing-page-development`,
      lastModified: staticReleaseDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/ecommerce-website-development`,
      lastModified: staticReleaseDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/custom-web-development`,
      lastModified: staticReleaseDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/website-maintenance`,
      lastModified: staticReleaseDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/web-app-development`,
      lastModified: staticReleaseDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/saas-development`,
      lastModified: staticReleaseDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/startup-mvp-development`,
      lastModified: staticReleaseDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/hosting-deployment`,
      lastModified: staticReleaseDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/nextjs-development`,
      lastModified: staticReleaseDate,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/demos`,
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
      url: `${baseUrl}/start`,
      lastModified: staticReleaseDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/pricing`,
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
  ];

  // Canonical demo niche landing pages
  const demoRoutes: MetadataRoute.Sitemap = demos.map((demo) => ({
    url: `${baseUrl}/demos/${demo.slug}`,
    lastModified: staticReleaseDate,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  return [...coreCommercialRoutes, ...demoRoutes];
}
