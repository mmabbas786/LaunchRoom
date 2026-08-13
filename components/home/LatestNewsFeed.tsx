import Link from "next/link";
import { Clock, Newspaper, ChevronRight } from "lucide-react";
import { getLatestArticles } from "@/data/articles";

export function LatestNewsFeed() {
  const articles = getLatestArticles(8);

  return (
    <section id="latest-news" className="py-10">
      <div className="page-shell">
        <div className="mb-8 flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <Newspaper className="h-5 w-5 text-accent" />
            <h2 className="text-[24px] font-display font-extrabold text-text-primary sm:text-[28px]">
              Latest Newsroom Feed
            </h2>
          </div>
          <span className="font-mono text-[12px] uppercase text-text-muted">Daily Dispatch</span>
        </div>

        <div className="space-y-4">
          {articles.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.category}/${item.slug}`}
              className="panel-hover panel flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 sm:p-6 group"
            >
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="meta-chip text-[10px] py-1 px-3 text-accent border-accent/20">
                    {item.categoryLabel}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[12px] text-text-muted">
                    <Clock className="h-3 w-3" />
                    {item.relativeTime}
                  </span>
                  <span className="font-mono text-[12px] text-text-muted">
                    {item.readTime}
                  </span>
                </div>

                <h3 className="text-[18px] font-bold text-text-primary group-hover:text-accent transition-colors sm:text-[20px]">
                  {item.title}
                </h3>

                <p className="text-[14px] leading-[1.65] text-text-secondary line-clamp-2 max-w-4xl">
                  {item.excerpt}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2 text-[14px] font-medium text-accent group-hover:translate-x-1 transition-transform">
                <span>Read Story</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
