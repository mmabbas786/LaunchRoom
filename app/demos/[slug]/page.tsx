import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DemoDetailExperience } from "@/components/demos/DemoDetailExperience";
import { demos, getDemoBySlug } from "@/lib/demos";

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
