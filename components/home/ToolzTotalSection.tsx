import { ExternalLink, Terminal, Code, KeyRound, Calculator } from "lucide-react";

const toolzTotalCards = [
  {
    title: "Cron Generator",
    description: "Visual cron expression builder & schedule analyzer for backend engineers.",
    href: "https://toolztotal.com",
    icon: Terminal,
  },
  {
    title: "JSON Formatter",
    description: "Instant JSON validator, beautifier, diff tool & TypeScript interface generator.",
    href: "https://toolztotal.com",
    icon: Code,
  },
  {
    title: "Password Generator",
    description: "Cryptographically secure random password, token, and API key generator.",
    href: "https://toolztotal.com",
    icon: KeyRound,
  },
  {
    title: "Calculators",
    description: "Cloud compute cost, bandwidth throughput, and developer utility calculators.",
    href: "https://toolztotal.com",
    icon: Calculator,
  },
];

export function ToolzTotalSection() {
  return (
    <section className="py-14 bg-surface-1/40 border-y border-border/60">
      <div className="page-shell">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1 text-[11px] font-mono uppercase text-text-muted">
              <span>Ecosystem Partner</span>
            </div>
            <h2 className="text-[26px] font-display font-extrabold text-text-primary sm:text-[32px]">
              ToolzTotal Developer Suite
            </h2>
            <p className="mt-2 text-[15px] text-text-secondary max-w-2xl">
              Free web-based developer tools and utilities built by our founding team to accelerate daily engineering workflows.
            </p>
          </div>

          <a
            href="https://toolztotal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-dim px-5 py-2.5 text-[14px] font-medium text-accent hover:border-accent hover:text-text-primary transition-all shrink-0 w-fit"
          >
            <span>Visit ToolzTotal ↗</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {toolzTotalCards.map((tool) => {
            const Icon = tool.icon;
            return (
              <a
                key={tool.title}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="panel-hover panel p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface-2 border border-border text-accent group-hover:border-accent-border transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <ExternalLink className="h-4 w-4 text-text-muted group-hover:text-accent transition-colors" />
                  </div>

                  <h3 className="text-[17px] font-bold text-text-primary group-hover:text-accent transition-colors">
                    {tool.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-[1.65] text-text-secondary">
                    {tool.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/40 text-[12px] font-mono text-accent">
                  toolztotal.com →
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
