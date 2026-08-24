/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  reactStrictMode: true,
  transpilePackages: ["sanity", "next-sanity"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/website-development",
        destination: "/services/website-development",
        permanent: true,
      },
      {
        source: "/web-app-development",
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
