import type { Metadata } from "next";

import { StartPageContent } from "@/components/start/StartPageContent";
import { getDemoBySlug } from "@/lib/demos";

export const metadata: Metadata = {
  title: "Start a Project — LaunchRoom",
  description:
    "Share your project brief with LaunchRoom and open a WhatsApp-ready message with all the key details filled in.",
};

type SearchParams = Promise<{
  niche?: string | string[];
  ref?: string | string[];
}>;

function firstParam(value?: string | string[]) {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

export default async function StartPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const niche = firstParam(params.niche);
  const ref = firstParam(params.ref);
  const demo = niche ? getDemoBySlug(niche) : undefined;

  return (
    <StartPageContent
      prefillDemo={
        demo
          ? {
              slug: demo.slug,
              niche: demo.niche,
              ref,
            }
          : null
      }
    />
  );
}
