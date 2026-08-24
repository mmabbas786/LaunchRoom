import type { Metadata } from "next";

import { TermsPageContent } from "@/components/terms/TermsPageContent";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service — LaunchRoom",
  description: "Terms of service for LaunchRoom web development, app development, and support work.",
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
  openGraph: {
    title: "Terms of Service — LaunchRoom",
    description: "Terms of service for LaunchRoom web development, app development, and support work.",
    url: `${siteConfig.url}/terms`,
    type: "website",
  },
};

export default function TermsPage() {
  return <TermsPageContent />;
}
