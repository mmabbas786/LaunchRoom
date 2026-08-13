import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WorkPreview } from "@/components/home/WorkPreview";
import { DemoLibraryTeaser } from "@/components/home/DemoLibraryTeaser";
import { WhyUs } from "@/components/home/WhyUs";
import { ToolzTotalSection } from "@/components/home/ToolzTotalSection";
import { LatestBlogSection } from "@/components/home/LatestBlogSection";
import { CTABand } from "@/components/layout/CTABand";

export function HomePageContent() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesPreview currency="USD" />
      <WorkPreview />
      <DemoLibraryTeaser />
      <WhyUs />
      <ToolzTotalSection />
      <LatestBlogSection />
      <CTABand
        heading="Start a project with LaunchRoom."
        subtext="Tell us what you want to build and we'll help you scope the cleanest version to launch first."
        buttonText="Start a project"
        buttonHref="/start"
      />
    </main>
  );
}
