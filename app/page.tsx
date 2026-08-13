import type { Metadata } from "next";

import { HomePageContent } from "@/components/home/HomePageContent";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "LaunchRoom | Website & Web Application Development Studio",
  description:
    "LaunchRoom builds modern, high-converting websites, SaaS web applications, and digital platforms for startups and growing businesses worldwide.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "LaunchRoom | Website & Web Application Development Studio",
    description:
      "LaunchRoom builds modern, high-converting websites, SaaS web applications, and digital platforms for startups and growing businesses worldwide.",
    url: siteConfig.url,
    type: "website",
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
