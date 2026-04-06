import {
  Code2,
  Database,
  Globe,
  Rocket,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const items = [
  { label: "Next.js", icon: Globe },
  { label: "React Native", icon: Smartphone },
  { label: "Flutter", icon: Rocket },
  { label: "Supabase", icon: Database },
  { label: "TypeScript", icon: Code2 },
  { label: "Launch Support", icon: ShieldCheck },
];

export function Ticker() {
  const loop = [...items, ...items];

  return (
    <section className="page-shell -mt-2 pb-6 sm:pb-10">
      <div className="panel overflow-hidden px-4 py-4 sm:px-6">
        <div className="ticker-track flex w-max items-center gap-3">
          {loop.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={`${item.label}-${index}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-4 py-2 text-[13px] font-medium text-text-secondary"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-dim text-accent">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <span className="whitespace-nowrap">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
