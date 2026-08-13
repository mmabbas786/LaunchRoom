"use client";

import { DemoLibraryTeaser } from "@/components/home/DemoLibraryTeaser";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { Hero } from "@/components/home/Hero";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Ticker } from "@/components/home/Ticker";
import { WhyUs } from "@/components/home/WhyUs";
import { WorkPreview } from "@/components/home/WorkPreview";
import { CTABand } from "@/components/layout/CTABand";
import { useVisitorPreferences } from "@/components/providers/VisitorPreferencesProvider";
import { getServiceFaqs } from "@/data/faqs";

export function HomePageContent() {
  const { currency } = useVisitorPreferences();
  const serviceFaqs = getServiceFaqs(currency).slice(0, 5);

  return (
    <>
      <Hero />
      <Ticker />
      <WhyUs />
      <ServicesPreview currency={currency} />
      <DemoLibraryTeaser />
      <InsightsPreview />
      <WorkPreview />
      <CTABand
        heading="Get started with LaunchRoom today."
        subtext="Need a new website, web app, redesign, or ongoing support? We can help you shape the next release."
        buttonText="Start a project"
        buttonHref="/start"
      />
      <HomeFAQ items={serviceFaqs} />
    </>
  );
}
