import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CATEGORIES, getArticlesByCategory, ARTICLES } from "@/data/articles";
import { ArticleCard } from "@/components/news/ArticleCard";
import { siteConfig } from "@/lib/site";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const catObj = CATEGORIES.find((c) => c.slug === category);

  if (!catObj) {
    return {
      title: "Category Not Found | LaunchRoom",
    };
  }

  const title = `${catObj.label} News & Technical Intelligence | LaunchRoom`;
  const description = `${catObj.description} Read daily editorial briefings, analysis, and breaking stories on ${catObj.label.toLowerCase()}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.url}/${category}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/${category}`,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const catObj = CATEGORIES.find((c) => c.slug === category);

  if (!catObj) {
    notFound();
  }

  const categoryArticles = getArticlesByCategory(category);
  const displayArticles = categoryArticles.length > 0 ? categoryArticles : ARTICLES.slice(0, 4);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: catObj.label, url: `${siteConfig.url}/${catObj.slug}` },
  ]);

  return (
    <main className="min-h-screen py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="page-shell">
        <div className="mb-10 space-y-4 border-b border-border pb-8">
          <div className="flex items-center gap-2 font-mono text-[12px] uppercase text-text-muted">
            <Link href="/" className="hover:text-accent">Home</Link>
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
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </main>
  );
}
