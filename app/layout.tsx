import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { VisitorPreferencesProvider } from "@/components/providers/VisitorPreferencesProvider";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "LaunchRoom Tech Solutions, India",
    template: "%s | LaunchRoom",
  },
  description: siteConfig.description,
  keywords: [
    "web development kolkata",
    "android app development india",
    "freelance developer india",
    "agency kolkata",
    "next.js developer india",
  ],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  icons: {
    icon: "/favicon-round.svg",
    apple: "/launchroom-logo.png",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
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
      </head>
      <body className="min-h-screen bg-bg text-text-primary">
        <VisitorPreferencesProvider>
          <SiteChrome>{children}</SiteChrome>
        </VisitorPreferencesProvider>
        <Analytics />
      </body>
    </html>
  );
}
