import type { Metadata } from "next";

import { HomePageContent } from "@/components/home/HomePageContent";
import { siteConfig } from "@/lib/site";
import { generateOrganizationSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "LaunchRoom | AI, Tech & Startup Intelligence",
  description:
    "Independent news, technical analysis, and intelligence covering artificial intelligence, software engineering, cloud infrastructure, cybersecurity, and startups.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "LaunchRoom | AI, Tech & Startup Intelligence",
    description:
      "Independent news, technical analysis, and intelligence covering artificial intelligence, software engineering, cloud infrastructure, cybersecurity, and startups.",
    url: siteConfig.url,
    siteName: "LaunchRoom",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/launchroom-logo.png`,
        width: 1200,
        height: 630,
        alt: "LaunchRoom | AI, Tech & Startup Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchRoom | AI, Tech & Startup Intelligence",
    description:
      "Independent news, technical analysis, and intelligence covering artificial intelligence, software engineering, cloud infrastructure, cybersecurity, and startups.",
    images: [`${siteConfig.url}/launchroom-logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function HomePage() {
  const orgSchema = generateOrganizationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <HomePageContent />
    </>
  );
}
