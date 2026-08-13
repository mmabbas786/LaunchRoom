import Link from "next/link";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { getFeaturedArticle } from "@/data/articles";

export function FeaturedStory() {
  const story = getFeaturedArticle();

  return (
    <section id="featured-story" className="py-8">
      <div className="page-shell">
        <div className="mb-4 flex items-center justify-between">
          <p className="card-label">Top Lead Story</p>
          <span className="text-[12px] font-mono text-accent uppercase tracking-widest">Editor&apos;s Pick</span>
        </div>

        <div className="panel-dark group relative overflow-hidden p-8 lg:p-12 transition-all duration-300 hover:border-accent-border">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-3xl space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow !mb-0 text-accent border-accent-border bg-accent-dim">
                  {story.categoryLabel}
                </span>
                <span className="flex items-center gap-1.5 text-[13px] text-text-muted font-mono">
                  <Calendar className="h-3.5 w-3.5" />
                  {story.relativeTime}
                </span>
                <span className="flex items-center gap-1.5 text-[13px] text-text-muted font-mono">
                  <Clock className="h-3.5 w-3.5" />
                  {story.readTime}
                </span>
              </div>

              <h2 className="text-[clamp(28px,3.8vw,48px)] font-display font-extrabold leading-[1.12] text-text-primary group-hover:text-accent transition-colors">
                <Link href={`/${story.category}/${story.slug}`}>
                  {story.title}
                </Link>
              </h2>

              <p className="text-[16px] leading-[1.8] text-text-secondary sm:text-[18px]">
                {story.excerpt}
              </p>

              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-dim border border-accent-border font-display text-sm font-bold text-accent">
                    {story.author.name[0]}
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-text-primary leading-tight">{story.author.name}</p>
                    <p className="text-[12px] text-text-muted">{story.author.role}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="shrink-0">
              <Link
                href={`/${story.category}/${story.slug}`}
                className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-accent-border bg-accent-dim text-accent transition-all duration-200 group-hover:scale-110 group-hover:bg-accent group-hover:text-bg"
              >
                <ArrowUpRight className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
