import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, HelpCircle, Key, Layers, ExternalLink, Sparkles, List } from "lucide-react";

import { BLOG_ARTICLES } from "@/data/blog";
import { getBlogArticleBySlug, getRelatedBlogArticles } from "@/lib/sanity/service";
import { AuthorByline } from "@/components/news/AuthorByline";
import { AdSlot } from "@/components/news/AdSlot";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { PortableTextRenderer } from "@/components/blog/PortableTextRenderer";
import { siteConfig } from "@/lib/site";
import { generateNewsArticleSchema, generateBreadcrumbSchema } from "@/lib/jsonld";

interface BlogArticlePageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_ARTICLES.map((art) => ({
    category: art.category,
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const article = await getBlogArticleBySlug(slug);

  if (!article) {
    return {
      title: "Blog Article Not Found | LaunchRoom",
    };
  }

  const url = `${siteConfig.url}/blog/${category}/${slug}`;
  const catLabel = article.categoryLabel || article.categoryName || article.category;
  const imageUrl = typeof article.featuredImage === "string" ? article.featuredImage : `${siteConfig.url}/launchroom-logo.png`;

  return {
    title: `${article.title} | LaunchRoom Blog`,
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
      section: catLabel,
      images: [
        {
          url: imageUrl,
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
      images: [imageUrl],
    },
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { category, slug } = await params;
  const article = await getBlogArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const url = `${siteConfig.url}/blog/${category}/${slug}`;
  const catLabel = article.categoryLabel || article.categoryName || article.category;
  const time = article.readTime || article.readingTime || "5 min read";

  const newsSchema = generateNewsArticleSchema({
    title: article.title,
    description: article.excerpt,
    url,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    authorName: article.author.name,
    category: catLabel,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
    { name: catLabel, url: `${siteConfig.url}/blog/${article.category}` },
    { name: article.title, url },
  ]);

  const relatedArticles = await getRelatedBlogArticles(article.category, article.slug);

  const tocItems = article.toc || (article.tableOfContents ? article.tableOfContents.map(t => ({ id: t.id, text: t.title })) : []);

  const imageUrl = typeof article.featuredImage === "string" ? article.featuredImage : null;
  const imageObj = typeof article.featuredImage === "object" ? article.featuredImage : null;

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
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 font-mono text-[12px] uppercase text-text-muted">
            <Link href="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/blog" className="hover:text-accent">Blog</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href={`/blog/${article.category}`} className="hover:text-accent">{catLabel}</Link>
          </nav>

          {/* Category Badge & H1 Title */}
          <div className="space-y-3">
            <span className="eyebrow text-accent border-accent-border bg-accent-dim">
              {catLabel}
            </span>

            <h1 className="text-[clamp(32px,4.5vw,56px)] font-display font-extrabold leading-[1.1] text-text-primary">
              {article.title}
            </h1>
          </div>

          {/* Excerpt */}
          <p className="text-[18px] leading-[1.75] text-text-secondary sm:text-[20px]">
            {article.excerpt}
          </p>

          {/* Author Byline */}
          <AuthorByline
            author={article.author}
            publishedAt={article.publishedAt}
            updatedAt={article.updatedAt}
            readTime={time}
          />

          {/* Featured Image Container */}
          {imageUrl ? (
            <div className="my-8 overflow-hidden rounded-2xl border border-border bg-surface-1 aspect-[16/9] relative w-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <Image
                src={imageUrl}
                alt={article.imageAlt || article.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          ) : imageObj ? (
            <div className={`my-8 relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${imageObj.gradient} p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-end min-h-[260px] sm:min-h-[340px]`}>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,160,32,0.15),transparent_60%)] pointer-events-none" />
              <div className="relative z-10 space-y-2">
                <span className="font-mono text-[11px] uppercase tracking-widest text-accent font-bold">
                  1200x630 Technical Briefing Visual
                </span>
                <p className="font-display text-[20px] font-extrabold text-text-primary sm:text-[26px]">
                  {article.title}
                </p>
                {imageObj.caption && (
                  <p className="text-[13px] text-text-muted font-mono">
                    {imageObj.caption}
                  </p>
                )}
              </div>
            </div>
          ) : null}

          <AdSlot position="below-headline" />

          {/* Grid Layout: Main Article Content + Sticky Table of Contents */}
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_260px] pt-4">
            {/* Main Article Body */}
            <div className="space-y-8 min-w-0">
              {article.portableTextBody ? (
                <PortableTextRenderer value={article.portableTextBody} />
              ) : Array.isArray(article.content) ? (
                article.content.map((sec, idx) => (
                  <div key={idx} className="space-y-3">
                    <h2 className="text-[24px] font-display font-bold text-text-primary sm:text-[28px]">
                      {sec.heading}
                    </h2>
                    <p className="text-[16px] leading-[1.8] text-text-secondary">
                      {sec.body}
                    </p>
                  </div>
                ))
              ) : (
                <>
                  <p className="text-[17px] leading-[1.8] text-text-primary font-normal">
                    {article.content.introduction}
                  </p>

                  {article.content.keyTakeaways && article.content.keyTakeaways.length > 0 && (
                    <div className="panel-accent p-6 rounded-2xl space-y-3">
                      <div className="flex items-center gap-2 text-[12px] font-mono uppercase text-accent font-bold">
                        <Key className="h-4 w-4" />
                        <span>Key Architectural Takeaways</span>
                      </div>
                      <ul className="space-y-2 text-[15px] text-text-secondary list-disc pl-5">
                        {article.content.keyTakeaways.map((takeaway, idx) => (
                          <li key={idx}>{takeaway}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {article.content.sections.map((section, idx) => (
                    <div key={section.id || idx} id={section.id} className="space-y-4 scroll-mt-24">
                      <h2 className="text-[24px] font-display font-bold text-text-primary sm:text-[28px]">
                        {section.heading}
                      </h2>
                      <p className="text-[16px] leading-[1.8] text-text-secondary">
                        {section.body}
                      </p>

                      {idx === 0 && <AdSlot position="mid-article" />}
                    </div>
                  ))}
                </>
              )}

              {/* ToolzTotal Integration Box (Subtle "Useful tool from ToolzTotal" Callout) */}
              <div className="panel p-6 sm:p-7 rounded-2xl border-accent-border bg-gradient-to-r from-accent-dim to-surface-1 my-8 space-y-3">
                <div className="flex items-center gap-2 text-[12px] font-mono uppercase text-accent font-bold">
                  <Sparkles className="h-4 w-4" />
                  <span>Useful Tool from ToolzTotal</span>
                </div>
                <h4 className="text-[18px] font-bold text-text-primary">
                  {article.toolzTotalTool?.name || "ToolzTotal Developer Suite"}
                </h4>
                <p className="text-[14px] leading-[1.65] text-text-secondary">
                  {article.toolzTotalTool?.description || "Need a quick utility while reading? Try our free web tools, generators, and calculators on ToolzTotal."}
                </p>
                <a
                  href={article.toolzTotalTool?.href || "https://toolztotal.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[14px] font-medium text-accent hover:underline pt-1"
                >
                  <span>{article.toolzTotalTool?.ctaLabel || "Try Free Tool on ToolzTotal"}</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* FAQs Section */}
              {!Array.isArray(article.content) && article.content?.faqs && article.content.faqs.length > 0 && (
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

            {/* Table of Contents Sticky Sidebar */}
            {tocItems.length > 0 && (
              <aside className="sticky top-28 hidden lg:block space-y-6">
                <div className="panel p-5 rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 border-b border-border pb-3 text-[13px] font-mono uppercase text-text-primary font-bold">
                    <List className="h-4 w-4 text-accent" />
                    <span>Table of Contents</span>
                  </div>
                  <nav className="space-y-2 text-[13px]">
                    {tocItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-text-secondary hover:text-accent transition-colors leading-[1.5]"
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>
                </div>

                <AdSlot position="sidebar" />
              </aside>
            )}
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <div className="mt-16 border-t border-border pt-10">
            <div className="mb-6 flex items-center gap-2">
              <Layers className="h-5 w-5 text-accent" />
              <h3 className="text-[22px] font-display font-bold text-text-primary">
                Related {catLabel} Articles
              </h3>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedArticles.map((rel) => {
                const relCatLabel = rel.categoryLabel || rel.categoryName || rel.category;
                return (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.category}/${rel.slug}`}
                    className="panel-hover panel p-5 flex flex-col justify-between group h-full space-y-3"
                  >
                    <div className="space-y-2">
                      <span className="meta-chip text-[10px] text-accent border-accent/20">
                        {relCatLabel}
                      </span>
                      <h4 className="text-[16px] font-bold text-text-primary group-hover:text-accent transition-colors">
                        {rel.title}
                      </h4>
                      <p className="text-[13px] text-text-secondary line-clamp-2">
                        {rel.excerpt}
                      </p>
                    </div>
                    <span className="text-[12px] font-mono text-accent group-hover:underline">
                      Read Article →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </article>

      <NewsletterSection />
    </main>
  );
}
