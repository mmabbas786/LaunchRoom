import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Editorial & Publication Disclaimer | LaunchRoom",
  description: "Editorial integrity, independent journalism guidelines, and sponsorship disclosure for LaunchRoom.",
  alternates: {
    canonical: `${siteConfig.url}/disclaimer`,
  },
  openGraph: {
    title: "Editorial & Publication Disclaimer | LaunchRoom",
    description: "Editorial integrity, independent journalism guidelines, and sponsorship disclosure for LaunchRoom.",
    url: `${siteConfig.url}/disclaimer`,
    type: "website",
  },
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen py-14">
      <div className="page-shell">
        <div className="prose-legal space-y-6">
          <div className="space-y-2">
            <span className="card-label">Publication Standards</span>
            <h1 className="font-display font-extrabold text-text-primary">Editorial Disclaimer</h1>
            <p className="text-[14px] font-mono text-text-muted">Last Updated: August 13, 2026</p>
          </div>

          <div className="panel p-8 space-y-6 text-text-secondary">
            <section className="space-y-3">
              <h2 className="text-[20px] font-bold text-text-primary">1. Editorial Independence</h2>
              <p>
                LaunchRoom is an independent technology news and analysis publication. Our coverage of artificial intelligence, software releases, cloud developments, cybersecurity, and tech startups is based on objective technical research, newsroom analysis, and factual documentation.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[20px] font-bold text-text-primary">2. Financial & Investment Disclosure</h2>
              <p>
                Articles, news dispatches, and technical tear-downs on LaunchRoom do not constitute financial, investment, legal, or professional software buying advice. Readers should verify technical specifications directly with vendors before making enterprise commitments.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[20px] font-bold text-text-primary">3. Ecosystem Partners & LaunchRoom Studio</h2>
              <p>
                LaunchRoom shares ownership with ToolzTotal (toolztotal.com) and operates LaunchRoom Studio for custom engineering services. References to ToolzTotal or LaunchRoom Studio are clearly designated as ecosystem components.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
