import { NewsHero } from "@/components/home/NewsHero";
import { FeaturedStory } from "@/components/home/FeaturedStory";
import { TrendingNow } from "@/components/home/TrendingNow";
import { LatestNewsFeed } from "@/components/home/LatestNewsFeed";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { ToolzTotalSection } from "@/components/home/ToolzTotalSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { LaunchRoomStudioSection } from "@/components/home/LaunchRoomStudioSection";

export function HomePageContent() {
  return (
    <main className="min-h-screen">
      <NewsHero />
      <FeaturedStory />
      <TrendingNow />
      <LatestNewsFeed />
      <CategoryGrid />
      <ToolzTotalSection />
      <NewsletterSection />
      <LaunchRoomStudioSection />
    </main>
  );
}
