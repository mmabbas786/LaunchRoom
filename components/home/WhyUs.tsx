import { AnimatedSection } from "@/components/ui/AnimatedSection";

const pillars = [
  {
    title: "Offer positioning",
    description: "Sharper messaging so the homepage explains value fast.",
  },
  {
    title: "Visual hierarchy",
    description: "Premium direction without losing structure or clarity.",
  },
  {
    title: "Launch support",
    description: "Design, build, QA, and handover all handled in one flow.",
  },
];

export function WhyUs() {
  return (
    <section className="page-shell section-shell pt-10 lg:pt-14">
      <AnimatedSection className="text-center">
        <p className="eyebrow mx-auto">Creative Process</p>
        <h2 className="section-title mx-auto max-w-[15ch]">
          We help you find the best launch system for your business.
        </h2>
      </AnimatedSection>

      <AnimatedSection className="mt-10 grid gap-5 lg:grid-cols-2" delay={0.05}>
        <article className="panel-accent p-6 sm:p-7">
          <p className="card-label">Strategy map</p>
          <div className="mt-5 rounded-[22px] border border-border bg-surface-1 p-5">
            <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[18px] border border-border bg-surface-2 p-4">
                <div className="h-2 w-24 rounded-full bg-accent" />
                <div className="mt-4 space-y-3">
                  <div className="h-2 rounded-full bg-white/10" />
                  <div className="h-2 w-4/5 rounded-full bg-white/10" />
                  <div className="h-2 w-2/3 rounded-full bg-white/10" />
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-[16px] border border-border bg-surface-1 px-3 py-3 text-[13px] font-medium text-text-secondary">
                    Discovery
                  </div>
                  <div className="rounded-[16px] border border-accent-border bg-accent-dim px-3 py-3 text-[13px] font-medium text-accent">
                    Positioning
                  </div>
                </div>
              </div>

              <div className="rounded-[18px] border border-border bg-surface-2 p-4">
                <div className="grid h-full grid-cols-3 gap-3">
                  {[0, 1, 2, 3, 4, 5].map((item) => (
                    <div
                      key={item}
                      className={[
                        "rounded-[14px]",
                        item === 1 || item === 4
                          ? "bg-[linear-gradient(135deg,#f4c86d_0%,#e8a020_48%,#8f5d10_100%)]"
                          : "bg-surface-1",
                      ].join(" ")}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-[15px] leading-[1.8] text-text-secondary">
            We start by shaping what the site needs to communicate, then translate
            that into a visual system that feels polished and actually converts.
          </p>
        </article>

        <article className="panel p-6 sm:p-7">
          <p className="card-label">Frontend execution</p>
          <div className="mt-5 rounded-[22px] border border-border bg-[#0d0d0d] p-5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f77b7b]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#f0c15f]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#7fdd91]" />
            </div>
            <div className="mt-5 space-y-3 font-mono text-[12px] text-text-secondary">
              <div>
                <span className="text-accent">const</span> hero = {"{"}
              </div>
              <div className="pl-4">
                title: <span className="text-text-primary">&quot;Launch-ready UI&quot;</span>,
              </div>
              <div className="pl-4">
                style: <span className="text-text-primary">&quot;dark + gold accent&quot;</span>,
              </div>
              <div className="pl-4">
                focus: <span className="text-text-primary">&quot;clarity, motion, conversion&quot;</span>,
              </div>
              <div>{"};"}</div>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-[15px] leading-[1.8] text-text-secondary">
            The build phase keeps the visuals intentional while still staying light,
            fast, and maintainable in production.
          </p>
        </article>
      </AnimatedSection>

      <AnimatedSection className="mt-5 grid gap-5 md:grid-cols-3" delay={0.08}>
        {pillars.map((pillar) => (
          <article key={pillar.title} className="panel-lime p-6">
            <p className="card-label">Launchroom system</p>
            <h3 className="mt-4 text-[24px] leading-[1.08]">{pillar.title}</h3>
            <p className="mt-3 text-[15px] leading-[1.78] text-text-secondary">
              {pillar.description}
            </p>
          </article>
        ))}
      </AnimatedSection>
    </section>
  );
}
