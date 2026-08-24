/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://launchroom.in",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    "/studio",
    "/studio/*",
    "/demos/*/preview",
    "/privacy",
    "/website-development",
    "/web-app-development",
    "/nextjs-development",
    "/startup-mvp-development",
    "/robots.txt",
    "/sitemap.xml",
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio", "/demos/*/preview"],
      },
    ],
  },
};
