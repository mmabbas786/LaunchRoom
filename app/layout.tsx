import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

import "@/app/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { VisitorPreferencesProvider } from "@/components/providers/VisitorPreferencesProvider";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "LaunchRoom | Website & Web Application Development Studio",
    template: "%s | LaunchRoom",
  },
  description:
    "LaunchRoom builds modern websites, SaaS web applications, and custom digital portals for startups and growing businesses.",
  keywords: [
    "website development",
    "web application development",
    "custom website builder",
    "startup mvp development",
    "next.js development agency",
    "react developer india",
    "saas web development studio",
    "web agency kolkata",
    "launchroom",
  ],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "LaunchRoom | Website & Web Application Development Studio",
    description:
      "LaunchRoom builds modern websites, SaaS web applications, and custom digital portals for startups and growing businesses.",
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "LaunchRoom Website & Web Application Development Studio",
      },
    ],
  },
  icons: {
    icon: "/favicon-round.svg",
    apple: "/launchroom-logo.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchRoom | Website & Web Application Development Studio",
    description:
      "LaunchRoom builds modern websites, SaaS web applications, and custom digital portals for startups and growing businesses.",
    images: [`${siteConfig.url}/og-image.png`],
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

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LaunchRoom",
  url: "https://launchroom.in",
  logo: "https://launchroom.in/launchroom-logo.png",
  sameAs: [
    "https://www.instagram.com/launchroom.in/",
    "https://www.linkedin.com/in/mirzamehediabbas/",
    "https://github.com/mmabbas786",
    "https://x.com/mmabbasofficial",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "infolaunchroom@gmail.com",
    contactType: "customer support",
  },
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "LaunchRoom",
  url: "https://launchroom.in",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Chonburi&family=Domine:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="min-h-screen bg-bg text-text-primary">
        <VisitorPreferencesProvider>
          <SiteChrome>{children}</SiteChrome>
        </VisitorPreferencesProvider>
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-B18EVDXMSG" />
      </body>
    </html>
  );
}
