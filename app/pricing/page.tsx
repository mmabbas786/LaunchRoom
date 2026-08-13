import type { Metadata } from "next";

import { PricingPageContent } from "@/components/pricing/PricingPageContent";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing & Web Development Packages",
  description:
    "Transparent pricing for LaunchRoom website packages, custom web application engineering, monthly retainers, and international currency toggles (INR/USD).",
  alternates: {
    canonical: `${siteConfig.url}/pricing`,
  },
  openGraph: {
    title: "Pricing & Development Packages | LaunchRoom",
    description:
      "Transparent pricing for LaunchRoom website packages, custom web application engineering, and monthly retainers.",
    url: `${siteConfig.url}/pricing`,
    type: "website",
  },
};

export default function PricingPage() {
  return <PricingPageContent />;
}
