/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/website-development",
        destination: "/services/website-development",
        permanent: true,
      },
      {
        source: "/websites",
        destination: "/services/website-development",
        permanent: true,
      },
      {
        source: "/business-website-development",
        destination: "/services/business-website-development",
        permanent: true,
      },
      {
        source: "/business-websites",
        destination: "/services/business-website-development",
        permanent: true,
      },
      {
        source: "/booking-website-development",
        destination: "/services/booking-website-development",
        permanent: true,
      },
      {
        source: "/booking-websites",
        destination: "/services/booking-website-development",
        permanent: true,
      },
      {
        source: "/portfolio-website-development",
        destination: "/services/portfolio-website-development",
        permanent: true,
      },
      {
        source: "/portfolio-websites",
        destination: "/services/portfolio-website-development",
        permanent: true,
      },
      {
        source: "/landing-page-development",
        destination: "/services/landing-page-development",
        permanent: true,
      },
      {
        source: "/landing-pages",
        destination: "/services/landing-page-development",
        permanent: true,
      },
      {
        source: "/ecommerce-website-development",
        destination: "/services/ecommerce-website-development",
        permanent: true,
      },
      {
        source: "/ecommerce",
        destination: "/services/ecommerce-website-development",
        permanent: true,
      },
      {
        source: "/ecommerce-websites",
        destination: "/services/ecommerce-website-development",
        permanent: true,
      },
      {
        source: "/web-app-development",
        destination: "/services/web-app-development",
        permanent: true,
      },
      {
        source: "/web-apps",
        destination: "/services/web-app-development",
        permanent: true,
      },
      {
        source: "/nextjs-development",
        destination: "/services/nextjs-development",
        permanent: true,
      },
      {
        source: "/startup-mvp-development",
        destination: "/services/startup-mvp-development",
        permanent: true,
      },
      {
        source: "/mvp",
        destination: "/services/startup-mvp-development",
        permanent: true,
      },
      {
        source: "/saas",
        destination: "/services/saas-development",
        permanent: true,
      },
      {
        source: "/saas-development",
        destination: "/services/saas-development",
        permanent: true,
      },
      {
        source: "/hosting",
        destination: "/services/hosting-deployment",
        permanent: true,
      },
      {
        source: "/hosting-deployment",
        destination: "/services/hosting-deployment",
        permanent: true,
      },
      {
        source: "/maintenance",
        destination: "/services/website-maintenance",
        permanent: true,
      },
      {
        source: "/custom",
        destination: "/services/custom-web-development",
        permanent: true,
      },
      {
        source: "/custom-website-development",
        destination: "/services/custom-web-development",
        permanent: true,
      },
      {
        source: "/services/custom-website-development",
        destination: "/services/custom-web-development",
        permanent: true,
      },
      // Topic-specific legacy article redirects to relevant commercial service pages
      {
        source: "/insights/software-saas/nextjs-16-partial-prerendering-production-patterns",
        destination: "/services/nextjs-development",
        permanent: true,
      },
      {
        source: "/insights/software-saas/:slug*",
        destination: "/services/web-app-development",
        permanent: true,
      },
      {
        source: "/insights/software-saas",
        destination: "/services/web-app-development",
        permanent: true,
      },
      {
        source: "/insights/startups-business-tech/india-ai-startup-funding-trends-2026",
        destination: "/services/startup-mvp-development",
        permanent: true,
      },
      {
        source: "/insights/startups-business-tech/:slug*",
        destination: "/services/startup-mvp-development",
        permanent: true,
      },
      {
        source: "/insights/startups-business-tech",
        destination: "/services/startup-mvp-development",
        permanent: true,
      },
      {
        source: "/insights/cloud-devops/aws-graviton4-cost-optimization-strategies",
        destination: "/services/hosting-deployment",
        permanent: true,
      },
      {
        source: "/insights/cloud-devops/:slug*",
        destination: "/services/hosting-deployment",
        permanent: true,
      },
      {
        source: "/insights/cloud-devops",
        destination: "/services/hosting-deployment",
        permanent: true,
      },
      {
        source: "/insights/cybersecurity/mitigating-session-hijacking-in-modern-web-apps",
        destination: "/services/website-maintenance",
        permanent: true,
      },
      {
        source: "/insights/cybersecurity/:slug*",
        destination: "/services/website-maintenance",
        permanent: true,
      },
      {
        source: "/insights/cybersecurity",
        destination: "/services/website-maintenance",
        permanent: true,
      },
      {
        source: "/insights/ai-automation/openai-gpt-6-enterprise-deployment-guide",
        destination: "/services/custom-web-development",
        permanent: true,
      },
      {
        source: "/insights/ai-automation/:slug*",
        destination: "/services/custom-web-development",
        permanent: true,
      },
      {
        source: "/insights/ai-automation",
        destination: "/services/custom-web-development",
        permanent: true,
      },
      {
        source: "/insights/tool-reviews/top-developer-productivity-tools-2026-teardown",
        destination: "/services/custom-web-development",
        permanent: true,
      },
      {
        source: "/insights/tool-reviews/:slug*",
        destination: "/services/custom-web-development",
        permanent: true,
      },
      {
        source: "/insights/tool-reviews",
        destination: "/services/custom-web-development",
        permanent: true,
      },
      {
        source: "/insights/tech-news/:slug*",
        destination: "/services/website-development",
        permanent: true,
      },
      {
        source: "/insights/tech-news",
        destination: "/services/website-development",
        permanent: true,
      },
      {
        source: "/insights/web-app-industry/:slug*",
        destination: "/services/web-app-development",
        permanent: true,
      },
      {
        source: "/insights/web-app-industry",
        destination: "/services/web-app-development",
        permanent: true,
      },
      {
        source: "/insights/:path*",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/insights",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "launch-room.vercel.app",
          },
        ],
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "(?<host>.*\\.vercel\\.app)",
          },
        ],
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
