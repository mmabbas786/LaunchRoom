import { siteConfig } from "./site";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "LaunchRoom",
    alternateName: "LaunchRoom Studio",
    url: siteConfig.url,
    logo: `${siteConfig.url}/launchroom-logo.png`,
    sameAs: [
      "https://x.com/mmabbasofficial",
      "https://www.linkedin.com/in/mirzamehediabbas/",
      "https://github.com/mmabbas786",
    ],
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "AdministrativeArea",
        name: "West Bengal",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: "customer service",
    },
    description: siteConfig.description,
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
