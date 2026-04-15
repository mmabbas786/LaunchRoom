import type { Metadata } from "next";

import { TermsPageContent } from "@/components/terms/TermsPageContent";

export const metadata: Metadata = {
  title: "Terms of Service — LaunchRoom",
  description: "Terms of service for LaunchRoom web development, app development, and support work.",
};

export default function TermsPage() {
  return <TermsPageContent />;
}
