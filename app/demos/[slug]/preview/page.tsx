import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { DemoSite } from "@/components/demos/DemoSite";
import { demos, getDemoBySlug } from "@/lib/demos";

type Params = { slug: string };
type RouteProps = { params: Promise<Params> };

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export function generateStaticParams() {
  return demos.map((demo) => ({ slug: demo.slug }));
}

export default async function DemoPreviewPage({ params }: RouteProps) {
  const { slug } = await params;
  const demo = getDemoBySlug(slug);

  if (!demo) {
    notFound();
  }

  if (demo.externalUrl) {
    redirect(demo.externalUrl);
  }

  return (
    <div className="min-h-screen bg-[#050505]">
      <DemoSite demo={demo} navStickyOffsetClass="top-0" />
    </div>
  );
}
