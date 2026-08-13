import type { Metadata } from "next";

import { HomePageContent } from "@/components/home/HomePageContent";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "LaunchRoom | Website & Web Application Development Studio",
  description:
    "LaunchRoom builds modern, high-converting websites, SaaS web applications, and digital platforms for startups, alongside publishing tech and engineering insights.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "LaunchRoom | Website & Web Application Development Studio",
    description:
      "LaunchRoom builds modern, high-converting websites, SaaS web applications, and digital platforms for startups, alongside publishing tech and engineering insights.",
    url: siteConfig.url,
    siteName: "LaunchRoom",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/launchroom-logo.png`,
        width: 1200,
        height: 630,
        alt: "LaunchRoom Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchRoom | Website & Web Application Development Studio",
    description:
      "LaunchRoom builds modern, high-converting websites, SaaS web applications, and digital platforms for startups.",
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
    addressCountry: "IN",
  },
  description:
    "Website and web application development studio building custom business websites, Next.js applications, and SaaS platforms.",
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
