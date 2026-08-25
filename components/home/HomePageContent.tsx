import { Hero } from "@/components/home/Hero";
import { WhatWeBuildSection } from "@/components/home/WhatWeBuildSection";
import { WhyUs } from "@/components/home/WhyUs";
import { DemoLibraryTeaser } from "@/components/home/DemoLibraryTeaser";
import { WorkPreview } from "@/components/home/WorkPreview";
import { HomeProcessSection } from "@/components/home/HomeProcessSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { HomePricingPreview } from "@/components/home/HomePricingPreview";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { CTABand } from "@/components/layout/CTABand";
import { getServiceFaqs } from "@/data/faqs";

export function HomePageContent() {
  const faqs = getServiceFaqs("INR");

  return (
    <main className="min-h-screen">
      {/* 1. Hero */}
      <Hero />

      {/* 2. What We Build */}
      <WhatWeBuildSection />

      {/* 3. Why LaunchRoom */}
      <WhyUs />

      {/* 4. Website examples/demos */}
      <DemoLibraryTeaser />

      {/* 5. Real client work */}
      <WorkPreview />

      {/* 6. How the process works */}
      <HomeProcessSection />

      {/* 7. Services Overview */}
      <ServicesPreview currency="INR" />

      {/* 8. Pricing / starting information */}
      <HomePricingPreview />

      {/* 9. FAQs */}
      <HomeFAQ items={faqs} />

      {/* 10. Final CTA */}
      <CTABand
        heading="Start your website project with LaunchRoom."
        subtext="Tell us what you want to build and we'll help you scope the cleanest, most effective version to launch first."
        buttonText="Start a project"
        buttonHref="/start"
      />
    </main>
  );
}
