"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function NewsHero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 lg:pt-14 lg:pb-16">
      <div className="page-shell">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-dim px-4 py-2 text-[12px] font-medium uppercase tracking-[0.14em] text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Tech & Intelligence Desk</span>
          </div>

          <h1 className="hero-title tracking-tight text-text-primary">
            AI, Tech & Startup Intelligence
          </h1>

          <p className="mt-6 text-[17px] font-normal leading-[1.75] text-text-secondary sm:text-[20px]">
            “Independent coverage of artificial intelligence, software, cloud, cybersecurity, startups, and the companies shaping the future of technology.”
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="#latest-news" className="min-h-[50px] px-7 text-[15px]">
              <span>Read Today’s Briefing</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/ai" variant="outline" className="min-h-[50px] px-7 text-[15px]">
              <span>Explore AI Stories</span>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl border border-border bg-surface-1/60 px-6 py-3.5 text-[13px] text-text-secondary backdrop-blur-md">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-accent" />
              <span className="font-mono text-accent">LIVE BRIEFING:</span>
            </div>
            <Link href="/ai/openai-launches-gpt-6-what-changes-for-enterprises" className="hover:text-text-primary hover:underline transition-all truncate max-w-md">
              OpenAI launches GPT-6: what changes for enterprises?
            </Link>
            <span className="text-text-muted font-mono text-[11px]">Updated 2h ago</span>
          </div>
        </div>
      </div>
    </section>
  );
}
