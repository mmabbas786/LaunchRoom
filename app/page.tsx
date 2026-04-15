import type { Metadata } from "next";

import { HomePageContent } from "@/components/home/HomePageContent";

export const metadata: Metadata = {
  title: "LaunchRoom Tech Solutions, India",
  description:
    "LaunchRoom builds websites, Android apps, and digital products for startups and growing businesses.",
};

export default function HomePage() {
  return <HomePageContent />;
}
