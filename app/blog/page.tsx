import type { Metadata } from "next";

import { Button } from "@/components/ui/Button";
import { PageHeroGrid } from "@/components/ui/PageHeroGrid";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "LaunchRoom notes on websites, launch process, product thinking, and lessons from shipped work.",
};

const plannedTopics = [
  "Website strategy and launch notes",
  "Build breakdowns from shipped projects",
  "Studio process and client workflow",
  "Product experiments and lessons learned",
];

export default function BlogPage() {
  return (
    <PageHeroGrid
      label="Blog"
      heading="Studio notes are on the way."
      description="This section will collect practical write-ups on websites, launch process, product thinking, and what we learn while building in public."
      ctaButtons={
        <div className="flex flex-wrap gap-4">
          <Button href="/work">See shipped work</Button>
          <Button href="/start" variant="outline">
            Ask about a project
          </Button>
        </div>
      }
      topLeftCard={{
        label: "Status",
        content: (
          <p className="text-[28px] leading-[1.06] text-on-dark">
            First articles are being planned now.
          </p>
        ),
      }}
      topRightCard={{
        label: "What to expect",
        content: (
          <p className="text-[28px] leading-[1.06] text-text-primary">
            Clear, practical notes.
          </p>
        ),
      }}
      bottomCard={{
        label: "Planned topics",
        content: (
          <div className="grid gap-3 sm:grid-cols-2">
            {plannedTopics.map((topic) => (
              <div
                key={topic}
                className="rounded-[18px] border border-white/10 bg-white/[0.04] px-4 py-3 text-[15px] leading-[1.7] text-text-primary"
              >
                {topic}
              </div>
            ))}
          </div>
        ),
      }}
    />
  );
}
