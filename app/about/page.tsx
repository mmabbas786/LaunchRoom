import type { Metadata } from "next";

import { StackGrid } from "@/components/about/StackGrid";
import { TeamCard } from "@/components/about/TeamCard";
import { CTABand } from "@/components/layout/CTABand";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PageHeroGrid } from "@/components/ui/PageHeroGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "About Us — LaunchRoom",
  description:
    "Meet the two-person team behind LaunchRoom and the principles, tools, and process behind the studio.",
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
      <PageHeroGrid
        label="About us"
        heading="Two builders, one room, zero fake agency energy."
        description="LaunchRoom started as a way to turn freelance shipping habits into a sharper studio. We build things that go live and make clients look more credible."
        topLeftCard={{
          label: "Origin story",
          content: (
            <p className="text-[17px] leading-[1.82]">
              LaunchRoom began in 2024 between two CSE students from Kolkata.
              Mirza was already building Android apps and freelance websites,
              and Arsh was focused on frontend and design direction.
            </p>
          ),
        }}
        topRightCard={{
          label: "Why it exists",
          content: (
            <p className="text-[17px] leading-[1.82] text-text-secondary">
              Too many small businesses had weak digital presence, and too many
              founders were paying big-agency prices for slower, less personal work.
            </p>
          ),
        }}
        bottomCard={{
          label: "Where we work",
          content: (
            <p className="text-[17px] leading-[1.82] text-on-dark-muted">
              Kolkata-based, remote-ready, and set up to work with India, the
              UK, Germany, Canada, and wherever else a clear brief comes from.
            </p>
          ),
        }}
      />

      <div className="page-shell">
        <section className="section-shell-tight">
          <AnimatedSection>
            <SectionHeader eyebrow="Team" title="Meet the founders." />
          </AnimatedSection>
          <AnimatedSection className="page-card-grid mt-8 md:grid-cols-2" delay={0.05}>
            <TeamCard
              name="Mirza"
              role="Lead Developer & Co-founder"
              bio="Full-stack developer and Computer Science student from Kolkata, West Bengal. Founded LaunchRoom with a clear vision: make professional web development accessible to Indian businesses without the typical agency confusion and markup. Currently specializes in React, Next.js, and Flutter development. Has successfully shipped 1 production app to the Play Store (PDF Vault) and completed 1 client website project (New India Stores, a Kolkata-based ship chandling business). Building in public, learning every day, and scaling systematically. Believes in founder-friendly processes: fewer meetings, faster decisions, and direct access to the person actually building your product."
              skills={[
                "React",
                "Flutter",
                "Next.js",
                "TypeScript",
                "GitHub",
                "Product Strategy",
                "Play Store Shipping",
              ]}
              avatarLabel="M"
              avatarClassName="bg-[linear-gradient(135deg,#f4c86d_0%,#e8a020_48%,#8f5d10_100%)] text-[#080808]"
              socialLinks={[
                {
                  href: "https://github.com/mmabbas786",
                  label: "Mirza on GitHub",
                  platform: "github",
                },
                {
                  href: "https://www.linkedin.com/",
                  label: "Mirza on LinkedIn",
                  platform: "linkedin",
                },
              ]}
            />
            <TeamCard
              name="Arsh"
              role="Design Lead & Co-founder"
              bio="Client relations and visual communication specialist at LaunchRoom. Handles discovery calls, project scoping, and ongoing client communication. Background in basic design work and brand identity — creates logos and promotional content for projects. Ensures every client engagement starts with clear expectations and ends with smooth handover. Manages partner-sourced projects from first contact through final delivery, acting as the bridge between technical execution and business goals."
              skills={[
                "Figma",
                "Brand Identity",
                "Tailwind CSS",
                "Client Discovery",
                "UI Design",
                "Project Scoping",
                "Creative Direction",
              ]}
              avatarLabel="A"
              avatarClassName="bg-[linear-gradient(135deg,#f0bd57_0%,#b07811_100%)] text-[#080808]"
              socialLinks={[
                {
                  href: "https://www.linkedin.com/",
                  label: "Arsh on LinkedIn",
                  platform: "linkedin",
                },
                {
                  href: "https://www.figma.com/",
                  label: "Arsh on Figma",
                  platform: "figma",
                },
              ]}
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
