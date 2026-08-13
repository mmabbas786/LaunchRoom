import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  compact?: boolean;
}

export function ArticleCard({ article, compact = false }: ArticleCardProps) {
  return (
    <Link
      href={`/${article.category}/${article.slug}`}
      className="panel-hover panel flex flex-col justify-between p-6 group h-full"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="meta-chip text-[11px] text-accent border-accent/20">
            {article.categoryLabel}
          </span>
          <span className="flex items-center gap-1 font-mono text-[12px] text-text-muted">
            <Clock className="h-3 w-3" />
            {article.readTime}
          </span>
        </div>

        <h3 className={`font-bold text-text-primary group-hover:text-accent transition-colors ${compact ? "text-[16px]" : "text-[20px]"}`}>
          {article.title}
        </h3>

        <p className="text-[14px] leading-[1.65] text-text-secondary line-clamp-3">
          {article.excerpt}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between pt-4 border-t border-border/50 text-[13px] text-text-muted font-mono">
        <span>{article.relativeTime}</span>
        <span className="inline-flex items-center gap-1 text-accent group-hover:underline">
          Read Story <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
