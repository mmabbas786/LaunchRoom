"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Clock, ArrowRight, BookOpen, Layers } from "lucide-react";
import { BLOG_CATEGORIES, BLOG_ARTICLES, BlogArticle } from "@/data/blog";

export function BlogLandingContent({
  articles = BLOG_ARTICLES,
  categories = BLOG_CATEGORIES,
}: {
  articles?: BlogArticle[];
  categories?: Array<{ slug: string; name?: string; label?: string }>;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const articleList = articles.length > 0 ? articles : BLOG_ARTICLES;

  const featuredArticle = useMemo(() => {
    return articleList.find((a) => a.featured) || articleList[0];
  }, [articleList]);

  const filteredArticles = useMemo(() => {
    return articleList.filter((article) => {
      const matchesCategory =
        selectedCategory === "all" || article.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const catLabel = article.categoryLabel || article.categoryName || article.category;
      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        catLabel.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [articleList, searchQuery, selectedCategory]);

  return (
    <div className="page-shell space-y-12">
      {/* Blog Landing Hero */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-dim px-4 py-1.5 text-[12px] font-mono uppercase text-accent">
          <BookOpen className="h-3.5 w-3.5" />
          <span>LaunchRoom Engineering Blog</span>
        </div>
        <h1 className="page-hero-title font-display font-extrabold text-text-primary">
          Tech Insights, AI & Software Architecture
        </h1>
        <p className="text-[18px] leading-[1.75] text-text-secondary">
          Deep technical teardowns, cloud infrastructure notes, AI model benchmarks, and SaaS engineering practices published by the LaunchRoom team.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="space-y-6">
        <div className="relative max-w-xl">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search articles by title, topic, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-border bg-surface-1 pl-12 pr-4 py-3.5 text-[15px] text-text-primary focus:border-accent focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[12px] text-text-muted hover:text-text-primary"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap gap-2 pt-1">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all ${
              selectedCategory === "all"
                ? "border border-accent-border bg-accent-dim text-accent"
                : "border border-border bg-surface-1 text-text-secondary hover:text-text-primary"
            }`}
          >
            All Articles ({articleList.length})
          </button>
          {categories.map((cat) => {
            const label = cat.name || cat.label || cat.slug;
            const count = articleList.filter((a) => a.category === cat.slug).length;
            const isSelected = selectedCategory === cat.slug;

            return (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all ${
                  isSelected
                    ? "border border-accent-border bg-accent-dim text-accent"
                    : "border border-border bg-surface-1 text-text-secondary hover:text-text-primary"
                }`}
              >
                {label} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Article (Shown when no search query is active) */}
      {!searchQuery && selectedCategory === "all" && featuredArticle && (
        <div className="panel-dark group relative overflow-hidden p-8 lg:p-12 transition-all duration-300 hover:border-accent-border">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow !mb-0 text-accent border-accent-border bg-accent-dim">
                  Featured Dispatch
                </span>
                <span className="meta-chip text-[11px] text-accent">
                  {featuredArticle.categoryLabel}
                </span>
                <span className="flex items-center gap-1 font-mono text-[12px] text-text-muted">
                  <Clock className="h-3.5 w-3.5" />
                  {featuredArticle.readTime}
                </span>
              </div>

              <h2 className="text-[clamp(26px,3.5vw,42px)] font-display font-extrabold text-text-primary group-hover:text-accent transition-colors leading-[1.15]">
                <Link href={`/blog/${featuredArticle.category}/${featuredArticle.slug}`}>
                  {featuredArticle.title}
                </Link>
              </h2>

              <p className="text-[16px] leading-[1.75] text-text-secondary">
                {featuredArticle.excerpt}
              </p>

              <div className="flex items-center gap-3 pt-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-dim border border-accent-border font-display text-xs font-bold text-accent">
                  {featuredArticle.author.name[0]}
                </div>
                <span className="text-[14px] font-medium text-text-primary">
                  {featuredArticle.author.name} • {featuredArticle.relativeTime}
                </span>
              </div>
            </div>

            <Link
              href={`/blog/${featuredArticle.category}/${featuredArticle.slug}`}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent-border bg-accent-dim text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-bg transition-all shrink-0"
            >
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      )}

      {/* Article Grid Header */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center gap-2 font-mono text-[13px] text-text-muted">
          <Layers className="h-4 w-4 text-accent" />
          <span>
            Showing {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}
          </span>
        </div>
      </div>

      {/* Article Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="panel p-12 text-center space-y-3">
          <p className="text-[18px] font-bold text-text-primary">No articles found</p>
          <p className="text-[14px] text-text-secondary max-w-md mx-auto">
            No posts matched your current filter &quot;{searchQuery}&quot;. Try clearing your search query or selecting a different category.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-dim px-4 py-2 text-[13px] font-medium text-accent hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

function BlogCard({ article }: { article: BlogArticle }) {
  return (
    <Link
      href={`/blog/${article.category}/${article.slug}`}
      className="panel-hover panel p-6 flex flex-col justify-between group h-full space-y-4"
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

      <div className="flex items-center justify-between pt-4 border-t border-border/50 text-[13px] text-text-muted font-mono">
        <span>{article.relativeTime}</span>
        <span className="inline-flex items-center gap-1 text-accent group-hover:underline">
          Read Post <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
