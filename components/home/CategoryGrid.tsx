import Link from "next/link";
import { ArrowRight, Cpu, Rocket, Code2, Cloud, ShieldCheck, Layers } from "lucide-react";
import { CATEGORIES } from "@/data/articles";

const categoryIcons = {
  ai: Cpu,
  startups: Rocket,
  software: Code2,
  cloud: Cloud,
  cybersecurity: ShieldCheck,
  research: Layers,
  news: Layers,
  analysis: Layers,
};

export function CategoryGrid() {
  const categoriesToDisplay = CATEGORIES.filter((c) =>
    ["ai", "startups", "software", "cloud", "cybersecurity"].includes(c.slug)
  );

  return (
    <section className="py-12">
      <div className="page-shell">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="card-label">Topical Authority</p>
            <h2 className="mt-2 text-[26px] font-display font-extrabold text-text-primary sm:text-[32px]">
              Explore by Tech Sector
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categoriesToDisplay.map((cat) => {
            const IconComponent = categoryIcons[cat.slug as keyof typeof categoryIcons] || Layers;

            return (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="panel-hover panel p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-dim border border-accent-border text-accent">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-[12px] uppercase text-text-muted">Section</span>
                  </div>

                  <h3 className="text-[20px] font-bold text-text-primary group-hover:text-accent transition-colors">
                    {cat.label}
                  </h3>

                  <p className="mt-2 text-[14px] leading-[1.65] text-text-secondary">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-[14px] font-medium text-accent pt-4 border-t border-border/50">
                  <span>View All {cat.label} Stories</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
