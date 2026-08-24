import { BLOG_ARTICLES, BLOG_CATEGORIES, type BlogArticle, type BlogCategory } from "@/data/blog";
import { client } from "@/sanity/lib/client";
import { projectId } from "@/sanity/env";
import { urlForImage } from "@/sanity/lib/image";
import {
  categoriesQuery,
  featuredPostsQuery,
  postBySlugQuery,
  postsByCategoryQuery,
  postsQuery,
  relatedPostsQuery,
} from "@/sanity/lib/queries";

export type SanityPost = {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  mainImage?: any;
  imageAlt?: string;
  featured?: boolean;
  readingTime?: string;
  tags?: string[];
  publishedAt: string;
  updatedAt?: string;
  body?: any;
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: any;
  category: {
    title: string;
    slug: string;
    description?: string;
  };
};

function hasSanityConfigured(): boolean {
  return Boolean(
    (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "placeholder-project-id") ||
      (projectId && projectId !== "placeholder-project-id"),
  );
}

export async function getBlogArticles(): Promise<BlogArticle[]> {
  if (hasSanityConfigured()) {
    try {
      const sanityPosts: SanityPost[] = await client.fetch(postsQuery);
      if (sanityPosts && sanityPosts.length > 0) {
        return sanityPosts.map(transformSanityPostToArticle);
      }
    } catch (error) {
      console.warn("Sanity fetch failed, falling back to local dataset:", error);
    }
  }

  return BLOG_ARTICLES;
}

export async function getFeaturedBlogArticles(): Promise<BlogArticle[]> {
  if (hasSanityConfigured()) {
    try {
      const sanityPosts: SanityPost[] = await client.fetch(featuredPostsQuery);
      if (sanityPosts && sanityPosts.length > 0) {
        return sanityPosts.map(transformSanityPostToArticle);
      }
    } catch (error) {
      console.warn("Sanity featured fetch failed:", error);
    }
  }

  return BLOG_ARTICLES.filter((a) => a.featured).slice(0, 3);
}

export async function getBlogArticleBySlug(slug: string): Promise<BlogArticle | null> {
  if (hasSanityConfigured()) {
    try {
      const post: SanityPost | null = await client.fetch(postBySlugQuery, { slug });
      if (post) {
        return transformSanityPostToArticle(post);
      }
    } catch (error) {
      console.warn(`Sanity fetch for slug ${slug} failed:`, error);
    }
  }

  const local = BLOG_ARTICLES.find((a) => a.slug === slug);
  return local ?? null;
}

export async function getBlogArticlesByCategory(categorySlug: string): Promise<BlogArticle[]> {
  if (hasSanityConfigured()) {
    try {
      const sanityPosts: SanityPost[] = await client.fetch(postsByCategoryQuery, {
        categorySlug,
      });
      if (sanityPosts && sanityPosts.length > 0) {
        return sanityPosts.map(transformSanityPostToArticle);
      }
    } catch (error) {
      console.warn(`Sanity fetch for category ${categorySlug} failed:`, error);
    }
  }

  return BLOG_ARTICLES.filter((a) => a.category === categorySlug);
}

export async function getRelatedBlogArticles(
  categorySlug: string,
  currentSlug: string,
): Promise<BlogArticle[]> {
  if (hasSanityConfigured()) {
    try {
      const sanityPosts: SanityPost[] = await client.fetch(relatedPostsQuery, {
        categorySlug,
        currentSlug,
      });
      if (sanityPosts && sanityPosts.length > 0) {
        return sanityPosts.map(transformSanityPostToArticle);
      }
    } catch (error) {
      console.warn("Sanity related fetch failed:", error);
    }
  }

  return BLOG_ARTICLES.filter(
    (a) => a.category === categorySlug && a.slug !== currentSlug,
  ).slice(0, 3);
}

export async function getBlogCategories(): Promise<BlogCategory[]> {
  if (hasSanityConfigured()) {
    try {
      const sanityCats: Array<{ title: string; slug: string; description?: string }> =
        await client.fetch(categoriesQuery);
      if (sanityCats && sanityCats.length > 0) {
        return sanityCats.map((cat) => ({
          slug: cat.slug,
          label: cat.title,
          name: cat.title,
          description: cat.description || "",
        }));
      }
    } catch (error) {
      console.warn("Sanity categories fetch failed:", error);
    }
  }

  return BLOG_CATEGORIES;
}

function transformSanityPostToArticle(post: SanityPost): BlogArticle {
  const imageUrl = urlForImage(post.mainImage) || "/og-image.svg";
  const pubDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Recently Published";

  const extractedToc = extractTocFromPortableText(post.body);

  return {
    id: post._id || post.slug,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category.slug,
    categoryLabel: post.category.title,
    categoryName: post.category.title,
    author: {
      name: "LaunchRoom Editorial Desk",
      role: "Engineering & Technical Analysis",
    },
    publishedAt: post.publishedAt || new Date().toISOString(),
    relativeTime: pubDate,
    updatedAt: post.updatedAt,
    readTime: post.readingTime || "5 min read",
    readingTime: post.readingTime || "5 min read",
    featuredImage: imageUrl,
    imageAlt: post.imageAlt || post.title,
    featured: Boolean(post.featured),
    tags: post.tags || [],
    seoTitle: post.seoTitle,
    seoDescription: post.seoDescription,
    ogImage: post.ogImage,
    portableTextBody: post.body,
    toc: extractedToc,
    tableOfContents: extractedToc.map((t) => ({ id: t.id, title: t.text })),
    content: [
      {
        heading: "Executive Analysis",
        body: post.excerpt,
      },
    ],
  };
}

function extractTocFromPortableText(body: any): Array<{ id: string; text: string }> {
  if (!Array.isArray(body)) return [];

  const toc: Array<{ id: string; text: string }> = [];
  body.forEach((block) => {
    if (block._type === "block" && (block.style === "h2" || block.style === "h3")) {
      const text = block.children?.map((c: any) => c.text).join("") || "";
      if (text) {
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
        toc.push({ id, text });
      }
    }
  });

  return toc;
}
