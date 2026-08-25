import type { Metadata } from "next";

import { HomePageContent } from "@/components/home/HomePageContent";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "LaunchRoom | Website Development Services | Custom Websites India",
  description:
    "LaunchRoom is a website development studio based in Kolkata, building high-converting business websites, booking platforms, and custom web solutions for clients across India.",
  keywords: [
    "website development services",
    "website development company",
    "website design Kolkata",
    "website development India",
    "custom website development",
    "business website builder",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "LaunchRoom | Website Development Services | Custom Websites India",
    description:
      "Custom website development for businesses, professionals, and startups. Based in Kolkata, serving clients across India.",
    url: siteConfig.url,
    siteName: "LaunchRoom",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/launchroom-logo.png`,
        width: 1200,
        height: 630,
        alt: "LaunchRoom — Website Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchRoom | Website Development Services",
    description:
      "Custom website development for businesses, professionals, and startups across India.",
    images: [`${siteConfig.url}/launchroom-logo.png`],
  },
};

const jsonLdProfessionalService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "LaunchRoom",
  image: "https://launchroom.in/launchroom-logo.png",
  url: "https://launchroom.in",
  telephone: "+919163030285",
  email: "infolaunchroom@gmail.com",
  priceRange: "₹14999 - ₹150000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "India",
    },
    {
      "@type": "AdministrativeArea",
      name: "West Bengal",
    },
  ],
  description:
    "Website development studio based in Kolkata, West Bengal, building custom business websites, booking platforms, e-commerce stores, and web applications across India.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProfessionalService) }}
      />
      <HomePageContent />
    </>
  );
}
