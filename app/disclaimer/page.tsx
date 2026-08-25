import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial & Studio Disclaimer | LaunchRoom",
  description: "Commercial service guidelines, professional scope, and project terms for LaunchRoom Studio.",
  alternates: {
    canonical: `${siteConfig.url}/disclaimer`,
  },
  openGraph: {
    title: "Commercial & Studio Disclaimer | LaunchRoom",
    description: "Commercial service guidelines, professional scope, and project terms for LaunchRoom Studio.",
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
            <span className="card-label">Studio Standards</span>
            <h1 className="font-display font-extrabold text-text-primary">Commercial Disclaimer</h1>
            <p className="text-[14px] font-mono text-text-muted">Last Updated: August 25, 2026</p>
          </div>

          <div className="panel p-8 space-y-6 text-text-secondary">
            <section className="space-y-3">
              <h2 className="text-[20px] font-bold text-text-primary">1. Studio Practice &amp; Services</h2>
              <p>
                LaunchRoom is a website development and digital product studio based in Kolkata, West Bengal. All services, project timelines, deliverables, and pricing are confirmed in writing through customized proposals prior to project kickoff.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[20px] font-bold text-text-primary">2. Conceptual Demos vs. Client Work</h2>
              <p>
                Demonstration prototypes listed in our demo library are conceptual sample builds created to illustrate visual design, layout architectures, and functional patterns across various industries. They are clearly designated as demo concepts and do not represent active client engagements unless explicitly noted as a delivered case study.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[20px] font-bold text-text-primary">3. Third-Party Hosting &amp; Domain Services</h2>
              <p>
                LaunchRoom assists clients with cloud hosting deployment, domain connection, and DNS configuration. Recurring fees for third-party hosting providers, domain registrars, or external paid APIs remain the direct responsibility of the respective account holder.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
