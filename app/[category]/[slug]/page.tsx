import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, HelpCircle, Key, Layers } from "lucide-react";

import { ARTICLES, getArticleBySlug, getArticlesByCategory } from "@/data/articles";
import { AuthorByline } from "@/components/news/AuthorByline";
import { AdSlot } from "@/components/news/AdSlot";
import { ArticleCard } from "@/components/news/ArticleCard";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { siteConfig } from "@/lib/site";
import { generateNewsArticleSchema, generateBreadcrumbSchema } from "@/lib/jsonld";

interface ArticlePageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((art) => ({
    category: art.category,
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article || article.category !== category) {
    return {
      title: "Article Not Found | LaunchRoom",
    };
  }

  const url = `${siteConfig.url}/${category}/${slug}`;

  return {
    title: `${article.title} | LaunchRoom Tech Intelligence`,
    description: article.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      authors: [article.author.name],
      section: article.categoryLabel,
      images: [
        {
          url: `${siteConfig.url}/launchroom-logo.png`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [`${siteConfig.url}/launchroom-logo.png`],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { category, slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article || article.category !== category) {
    notFound();
  }

  const url = `${siteConfig.url}/${category}/${slug}`;
  const newsSchema = generateNewsArticleSchema({
    title: article.title,
    description: article.excerpt,
    url,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    authorName: article.author.name,
    category: article.categoryLabel,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: article.categoryLabel, url: `${siteConfig.url}/${article.category}` },
    { name: article.title, url },
  ]);

  const relatedArticles = getArticlesByCategory(article.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="page-shell">
        <div className="mx-auto max-w-4xl space-y-6">
          <nav className="flex items-center gap-2 font-mono text-[12px] uppercase text-text-muted">
            <Link href="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href={`/${article.category}`} className="hover:text-accent">{article.categoryLabel}</Link>
          </nav>

          <h1 className="text-[clamp(32px,5vw,60px)] font-display font-extrabold leading-[1.08] text-text-primary">
            {article.title}
          </h1>

          <p className="text-[18px] leading-[1.75] text-text-secondary sm:text-[21px]">
            {article.excerpt}
          </p>

          <AuthorByline
            author={article.author}
            publishedAt={article.publishedAt}
            updatedAt={article.updatedAt}
            readTime={article.readTime}
          />

          <AdSlot position="below-headline" />

          <div className="prose-legal space-y-8 pt-4">
            <p className="text-[17px] leading-[1.8] text-text-primary font-normal">
              {article.content.introduction}
            </p>

            {article.content.keyTakeaways && article.content.keyTakeaways.length > 0 && (
              <div className="panel-accent p-6 rounded-2xl space-y-3 my-8">
                <div className="flex items-center gap-2 text-[12px] font-mono uppercase text-accent font-bold">
                  <Key className="h-4 w-4" />
                  <span>Key Executive Takeaways</span>
                </div>
                <ul className="space-y-2 text-[15px] text-text-secondary list-disc pl-5">
                  {article.content.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx}>{takeaway}</li>
                  ))}
                </ul>
              </div>
            )}

            {article.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-[24px] font-display font-bold text-text-primary sm:text-[28px]">
                  {section.heading}
                </h2>
                <p className="text-[16px] leading-[1.8] text-text-secondary">
                  {section.body}
                </p>

                {idx === 0 && <AdSlot position="mid-article" />}
              </div>
            ))}

            {article.content.faqs && article.content.faqs.length > 0 && (
              <div className="space-y-6 pt-6 border-t border-border mt-10">
                <AdSlot position="before-faqs" />

                <div className="flex items-center gap-2 text-[20px] font-display font-bold text-text-primary">
                  <HelpCircle className="h-5 w-5 text-accent" />
                  <h3>Frequently Asked Questions</h3>
                </div>

                <div className="space-y-4">
                  {article.content.faqs.map((faq, idx) => (
                    <div key={idx} className="panel p-5 space-y-2">
                      <h4 className="text-[16px] font-bold text-text-primary">{faq.question}</h4>
                      <p className="text-[14px] text-text-secondary">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {relatedArticles.length > 0 && (
          <div className="mt-16 border-t border-border pt-10">
            <div className="mb-6 flex items-center gap-2">
              <Layers className="h-5 w-5 text-accent" />
              <h3 className="text-[22px] font-display font-bold text-text-primary">
                Related {article.categoryLabel} Stories
              </h3>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedArticles.map((rel) => (
                <ArticleCard key={rel.slug} article={rel} compact />
              ))}
            </div>
          </div>
        )}
      </article>

      <NewsletterSection />
    </main>
  );
}
