import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_CATEGORIES, getBlogArticlesByCategory, BLOG_ARTICLES, BlogArticle } from "@/data/blog";
import { siteConfig } from "@/lib/site";
import { generateBreadcrumbSchema } from "@/lib/jsonld";
import { ArrowRight, Clock } from "lucide-react";

interface BlogCategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: BlogCategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const catObj = BLOG_CATEGORIES.find((c) => c.slug === category);

  if (!catObj) {
    return {
      title: "Blog Category Not Found | LaunchRoom",
    };
  }

  const title = `${catObj.label} Articles & Insights | LaunchRoom Blog`;
  const description = `${catObj.description} Technical tear-downs and engineering briefs on ${catObj.label.toLowerCase()}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.url}/blog/${category}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/blog/${category}`,
      type: "website",
    },
  };
}

export default async function BlogCategoryPage({ params }: BlogCategoryPageProps) {
  const { category } = await params;
  const catObj = BLOG_CATEGORIES.find((c) => c.slug === category);

  if (!catObj) {
    notFound();
  }

  const categoryArticles = getBlogArticlesByCategory(category);
  const displayArticles = categoryArticles.length > 0 ? categoryArticles : BLOG_ARTICLES.slice(0, 3);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
    { name: catObj.label, url: `${siteConfig.url}/blog/${catObj.slug}` },
  ]);

  return (
    <main className="min-h-screen py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="page-shell space-y-10">
        <div className="space-y-4 border-b border-border pb-8">
          <div className="flex items-center gap-2 font-mono text-[12px] uppercase text-text-muted">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-accent">Blog</Link>
            <span>/</span>
            <span className="text-accent">{catObj.label}</span>
          </div>

          <h1 className="page-hero-title font-display font-extrabold text-text-primary">
            {catObj.label}
          </h1>

          <p className="max-w-2xl text-[18px] text-text-secondary">
            {catObj.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayArticles.map((article) => (
            <BlogCategoryCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </main>
  );
}

function BlogCategoryCard({ article }: { article: BlogArticle }) {
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
