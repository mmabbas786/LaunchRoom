import Link from "next/link";
import { ArrowUpRight, Flame } from "lucide-react";
import { getTrendingArticles } from "@/data/articles";

export function TrendingNow() {
  const trending = getTrendingArticles();

  return (
    <section className="py-8">
      <div className="page-shell">
        <div className="mb-6 flex items-center gap-2">
          <Flame className="h-4 w-4 text-accent" />
          <p className="card-label">Trending Now</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {trending.map((item, index) => (
            <Link
              key={item.slug}
              href={`/${item.category}/${item.slug}`}
              className="panel-hover panel flex flex-col justify-between p-6 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="meta-chip text-[11px] text-accent border-accent/20">
                    {item.categoryLabel}
                  </span>
                  <span className="font-mono text-[12px] font-bold text-text-muted">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-[18px] font-bold leading-[1.3] text-text-primary group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-[14px] leading-[1.65] text-text-secondary line-clamp-2">
                  {item.excerpt}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between pt-4 border-t border-border/50 text-[13px] text-text-muted font-mono">
                <span>{item.relativeTime}</span>
                <span className="inline-flex items-center gap-1 text-accent group-hover:underline">
                  Read <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
