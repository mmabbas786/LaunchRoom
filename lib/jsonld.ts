import { siteConfig } from "./site";

export interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  updatedAt?: string;
  authorName: string;
  category: string;
  imageUrl?: string;
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: "LaunchRoom",
    alternateName: "LaunchRoom Tech Intelligence",
    url: siteConfig.url,
    logo: `${siteConfig.url}/launchroom-logo.png`,
    sameAs: [
      "https://x.com/mmabbasofficial",
      "https://www.linkedin.com/in/mirzamehediabbas/",
      "https://github.com/mmabbas786",
      "https://toolztotal.com",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      contactType: "editorial",
    },
    description: siteConfig.description,
  };
}

export function generateNewsArticleSchema(props: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": props.url,
    },
    headline: props.title,
    description: props.description,
    image: props.imageUrl || `${siteConfig.url}/launchroom-logo.png`,
    datePublished: props.publishedAt,
    dateModified: props.updatedAt || props.publishedAt,
    articleSection: props.category,
    author: {
      "@type": "Person",
      name: props.authorName,
      url: `${siteConfig.url}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "LaunchRoom",
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/launchroom-logo.png`,
      },
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
