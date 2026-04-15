import type { Metadata } from "next";

import { ServicesPageContent } from "@/components/services/ServicesPageContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore LaunchRoom services for website development, app builds, and ongoing support with clear scope, timelines, and starting prices.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
