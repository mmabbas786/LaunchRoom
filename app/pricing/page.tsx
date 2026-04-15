import type { Metadata } from "next";

import { PricingPageContent } from "@/components/pricing/PricingPageContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Explore LaunchRoom website packages, add-on pricing, payment terms, and support for Indian and international clients.",
};

export default function PricingPage() {
  return <PricingPageContent />;
}
