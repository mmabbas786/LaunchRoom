import type { Metadata } from "next";

import { StackGrid } from "@/components/about/StackGrid";
import { TeamCard } from "@/components/about/TeamCard";
import { CTABand } from "@/components/layout/CTABand";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "About Us — Launchroom",
  description:
    "Meet the two-person team behind Launchroom and the principles, tools, and process behind the studio.",
};

const stackGroups = [
  {
    label: "Frontend",
    items: ["Next.js", "React Native", "Flutter", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    items: ["Supabase", "Firebase", "Node.js", "PostgreSQL"],
  },
  {
    label: "Tools",
    items: ["Figma", "Vercel", "GitHub", "Resend", "RevenueCat", "AdMob"],
  },
  {
    label: "AI",
    items: ["Claude API", "Gemini", "Cursor", "Codex"],
  },
];

const principles = [
  {
    title: "Ship it, then improve it",
    body: "Done and deployed beats perfect and pending. We launch fast, then iterate with clearer context.",
  },
  {
    title: "No dark patterns",
    body: "We do not build manipulative UX or fake urgency for clients. Trust compounds longer than hacks do.",
  },
  {
    title: "You own everything",
    body: "Code, design files, hosting accounts, and credentials belong to the client at handover.",
  },
  {
    title: "Async first",
    body: "We structure projects for clarity across time zones, not for endless live calls and status meetings.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="page-shell">
        <section className="section-shell">
          <AnimatedSection className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="panel-dark p-7 sm:p-9 lg:p-12">
              <p className="eyebrow eyebrow-invert">
                About us
              </p>
              <h1 className="page-hero-title mt-6 max-w-[9ch] text-on-dark">
                Two builders, one room, zero fake agency energy.
              </h1>
              <p className="mt-6 max-w-3xl text-[19px] leading-[1.82] text-on-dark-muted">
                Launchroom started as a way to turn freelance shipping habits into
                a sharper studio. We build things that go live and make clients look
                more credible.
              </p>
            </div>

            <div className="grid gap-5">
              <article className="panel p-7">
                <p className="card-label">Origin story</p>
                <p className="mt-4 text-[17px] leading-[1.82]">
                  Launchroom began in 2024 between two CSE students from Kolkata.
                  Mirza was already building Android apps and freelance websites,
                  and Arsh was focused on frontend and design direction.
                </p>
              </article>
              <article className="panel-accent p-7">
                <p className="card-label text-text-primary">Why it exists</p>
                <p className="mt-4 text-[17px] leading-[1.82] text-text-secondary">
                  Too many small businesses had weak digital presence, and too many
                  founders were paying big-agency prices for slower, less personal work.
                </p>
              </article>
              <article className="panel-lime p-7">
                <p className="card-label text-on-dark-muted">Where we work</p>
                <p className="mt-4 text-[17px] leading-[1.82] text-on-dark-muted">
                  Kolkata-based, remote-ready, and set up to work with India, the
                  UK, Germany, Canada, and wherever else a clear brief comes from.
                </p>
              </article>
            </div>
          </AnimatedSection>
        </section>

        <section className="section-shell-tight">
          <AnimatedSection>
            <SectionHeader eyebrow="Team" title="Meet the founders." />
          </AnimatedSection>
          <AnimatedSection className="mt-8 grid gap-5 md:grid-cols-2" delay={0.05}>
            <TeamCard
              name="Mirza"
              role="Lead Developer & Co-founder"
              bio="CSE student turned indie developer. I build apps, acquire clients, and make sure everything we ship is something we're proud of."
              skills={[
                "React Native",
                "Flutter",
                "Next.js",
                "Supabase",
                "Claude API",
                "Product Strategy",
              ]}
              avatarLabel="M"
              avatarClassName="bg-accent text-text-primary"
            />
            <TeamCard
              name="Arsh"
              role="Design & Frontend · Co-founder"
              bio="I turn briefs into interfaces. If Mirza builds the engine, I build what people actually see and touch."
              skills={[
                "Figma",
                "Tailwind CSS",
                "React",
                "UI Design",
                "Framer Motion",
                "Frontend",
              ]}
              avatarLabel="A"
              avatarClassName="bg-support text-on-dark"
            />
          </AnimatedSection>
        </section>

        <section className="section-shell-tight">
          <AnimatedSection>
            <SectionHeader eyebrow="How we work" title="Principles that keep the studio honest." />
          </AnimatedSection>
          <AnimatedSection className="horizontal-rail mt-8" delay={0.05}>
            {principles.map((value, index) => (
              <article
                key={value.title}
                className={[
                  "horizontal-card w-[min(100%,340px)] p-7 sm:w-[380px]",
                  index === 1 ? "panel-dark" : index === 3 ? "panel-lime" : "panel",
                ].join(" ")}
              >
                <p className={`card-label ${index === 1 ? "text-on-dark-muted" : ""}`}>
                  0{index + 1}
                </p>
                <h3
                  className={[
                    "mt-4 text-[28px] leading-[1.05]",
                    index === 1 ? "text-on-dark" : "text-text-primary",
                  ].join(" ")}
                >
                  {value.title}
                </h3>
                <p
                  className={[
                    "mt-4 text-[17px] leading-[1.82]",
                    index === 1 ? "text-on-dark-muted" : "text-text-secondary",
                  ].join(" ")}
                >
                  {value.body}
                </p>
              </article>
            ))}
          </AnimatedSection>
        </section>

        <section className="section-shell">
          <AnimatedSection>
            <SectionHeader eyebrow="What we use" title="The toolkit behind the builds." />
          </AnimatedSection>
          <AnimatedSection className="mt-8" delay={0.05}>
            <StackGrid groups={stackGroups} />
          </AnimatedSection>
        </section>
      </div>

      <CTABand
        heading="Ready to work together? Let's build something."
        subtext="Tell us what you want to ship and we'll help you scope a clean starting point."
        buttonText="Start a project"
        buttonHref="/start"
      />
    </>
  );
}
