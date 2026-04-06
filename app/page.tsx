import { HomeFAQ } from "@/components/home/HomeFAQ";
import { Hero } from "@/components/home/Hero";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Ticker } from "@/components/home/Ticker";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyUs } from "@/components/home/WhyUs";
import { WorkPreview } from "@/components/home/WorkPreview";
import { CTABand } from "@/components/layout/CTABand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Launchroom — Web & App Studio, Kolkata",
  description:
    "Launchroom builds websites, Android apps, and digital products for startups and growing businesses.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <WhyUs />
      <ServicesPreview />
      <Testimonials />
      <InsightsPreview />
      <WorkPreview />
      <CTABand
        heading="Get started with Launchroom today."
        subtext="Need a new website, app interface, redesign, or ongoing support? We can help you shape the next release."
        buttonText="Start a project"
        buttonHref="/start"
      />
      <HomeFAQ />
    </>
  );
}
