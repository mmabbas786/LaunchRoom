import type { Metadata } from "next";

import { ServicesPageContent } from "@/components/services/ServicesPageContent";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website & App Development Services",
  description:
    "Explore LaunchRoom services for website development, mobile apps, SaaS tools, and ongoing maintenance with transparent pricing and timelines.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Development Services | LaunchRoom",
    description:
      "Explore LaunchRoom services for website development, mobile apps, SaaS tools, and ongoing maintenance with transparent pricing.",
    url: `${siteConfig.url}/services`,
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
