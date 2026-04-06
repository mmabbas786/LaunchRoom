import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";

import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Launchroom — Web & App Studio, Kolkata",
    template: "%s | Launchroom",
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
      <body className="site-copy-capitalize min-h-screen bg-bg text-text-primary">
        <div className="flex min-h-screen flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <WhatsAppButton />
          <Footer />
        </div>
      </body>
    </html>
  );
}
