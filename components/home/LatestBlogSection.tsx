import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { getLatestBlogArticles } from "@/data/blog";
import { Button } from "@/components/ui/Button";

export function LatestBlogSection() {
  const articles = getLatestBlogArticles(3);

  return (
    <section className="py-16 border-t border-border/60">
      <div className="page-shell">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-dim px-3 py-1 text-[11px] font-mono uppercase text-accent">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Engineering Insights</span>
            </div>
            <h2 className="text-[28px] font-display font-extrabold text-text-primary sm:text-[36px]">
              Latest from the Blog
            </h2>
            <p className="mt-2 text-[15px] text-text-secondary max-w-2xl">
              Technical teardowns, cloud architecture notes, AI model benchmarks, and SaaS engineering insights written by our lead engineers.
            </p>
          </div>

          <Button href="/blog" variant="outline" className="shrink-0 w-fit">
            <span>View all articles</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.category}/${article.slug}`}
              className="panel-hover panel p-6 flex flex-col justify-between group h-full"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="meta-chip text-[10px] text-accent border-accent/20">
                    {article.categoryLabel}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[12px] text-text-muted">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-[18px] font-bold text-text-primary group-hover:text-accent transition-colors leading-[1.3]">
                  {article.title}
                </h3>

                <p className="text-[14px] leading-[1.65] text-text-secondary line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between pt-4 border-t border-border/50 text-[13px] text-text-muted font-mono">
                <span>{article.relativeTime}</span>
                <span className="inline-flex items-center gap-1 text-accent group-hover:underline">
                  Read Article <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
