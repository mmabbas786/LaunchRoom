import Link from "next/link";
import { Code2, ArrowRight } from "lucide-react";

export function LaunchRoomStudioSection() {
  return (
    <section className="py-10">
      <div className="page-shell">
        <div className="panel border-border/80 bg-surface-1 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[12px] font-mono text-accent uppercase tracking-widest">
              <Code2 className="h-4 w-4" />
              <span>Engineering Services</span>
            </div>
            <h2 className="text-[22px] font-display font-extrabold text-text-primary sm:text-[26px]">
              LaunchRoom Studio
            </h2>
            <p className="text-[15px] leading-[1.7] text-text-secondary">
              “Custom websites, SaaS MVPs, and web applications for startups and growing businesses.”
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/services/website-development"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-5 py-2.5 text-[14px] font-medium text-text-primary hover:border-accent-border hover:text-accent transition-all"
            >
              <span>Explore Studio Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
