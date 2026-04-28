import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DemoDetailExperience } from "@/components/demos/DemoDetailExperience";
import { demos, getDemoBySlug } from "@/lib/demos";
import { siteConfig } from "@/lib/site";

type Params = { slug: string };
type RouteProps = { params: Promise<Params> };

export function generateStaticParams() {
  return demos.map((demo) => ({ slug: demo.slug }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const demo = getDemoBySlug(slug);

  if (!demo) {
    return { title: "Demo not found" };
  }

  return {
    title: `${demo.niche} Website Demo`,
    description: demo.description,
    openGraph: {
      title: `${demo.niche} Website Demo`,
      description: demo.description,
      url: `${siteConfig.url}/demos/${demo.slug}`,
      type: "website",
      images: demo.thumbnailSrc
        ? [
            {
              url: `${siteConfig.url}${demo.thumbnailSrc}`,
              alt: demo.thumbnailAlt ?? `${demo.niche} website demo`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: demo.thumbnailSrc ? "summary_large_image" : "summary",
      title: `${demo.niche} Website Demo`,
      description: demo.description,
      images: demo.thumbnailSrc ? [`${siteConfig.url}${demo.thumbnailSrc}`] : undefined,
    },
  };
}

export default async function DemoPage({ params }: RouteProps) {
  const { slug } = await params;
  const demo = getDemoBySlug(slug);

  if (!demo) {
    notFound();
  }

  return <DemoDetailExperience demo={demo} />;
}
