import type { Metadata } from "next";

import { TeamCard } from "@/components/about/TeamCard";
import { CTABand } from "@/components/layout/CTABand";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "About Us - LaunchRoom",
  description:
    "No bloat. No middlemen. Just two people who give a damn about what gets built.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-shell section-shell">
        <AnimatedSection>
          <div className="panel-dark p-7 sm:p-8 lg:p-10">
            <p className="eyebrow eyebrow-invert">About us</p>
            <h1 className="page-hero-title mt-5 max-w-[12ch] text-on-dark">
              No bloat. No middlemen. Just two people who give a damn about what gets
              built.
            </h1>
            <p className="mt-6 max-w-3xl text-[18px] leading-[1.82] text-on-dark-muted">
              LaunchRoom exists because good digital work shouldn&apos;t require a
              big-agency budget, a 12-week timeline, or three rounds of &quot;let me
              check with the team.&quot; We move fast, we ship clean, and the person you
              talk to is the person building your product.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-8" delay={0.05}>
          <article className="page-card-roomy panel">
            <p className="card-label">Origin story</p>
            <p className="mt-4 max-w-3xl text-[17px] leading-[1.82] text-text-secondary">
              Mirza started building long before LaunchRoom had a name — freelance
              projects, late nights, and a growing frustration with how disconnected
              most agencies were from the actual work. LaunchRoom became the answer:
              a studio built around shipping, not selling.
            </p>
          </article>
        </AnimatedSection>
      </section>

      <div className="page-shell">
        <section className="section-shell-tight">
          <AnimatedSection>
            <p className="eyebrow">Team</p>
            <h2 className="section-title">Meet the team</h2>
          </AnimatedSection>

          <AnimatedSection className="page-card-grid mt-8 md:grid-cols-2" delay={0.05}>
            <TeamCard
              name="Mirza"
              role="Founder & Lead Developer"
              bio={
                <>
                  <p>
                    Mirza is LaunchRoom. He scopes the project, writes the code, and
                    ships it — no layers, no delegation, no surprises. When you work
                    with LaunchRoom, you&apos;re working directly with the developer who
                    cares whether it actually works.
                  </p>
                  <p>
                    He&apos;s built for founders who want speed without chaos and quality
                    without the agency markup.
                  </p>
                </>
              }
              skills={[
                "React",
                "Next.js",
                "Flutter",
                "TypeScript",
                "Node.js",
                "Supabase",
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
              role="Co-founder & Business Lead"
              bio={
                <>
                  <p>
                    Arsh is why projects don&apos;t fall apart on the business side. He
                    handles discovery, scoping, timelines, and client communication —
                    making sure every engagement starts with clarity and ends with a
                    clean handover.
                  </p>
                  <p>
                    The reason LaunchRoom runs smoothly behind the scenes.
                  </p>
                </>
              }
              skills={[
                "Client Discovery",
                "Project Scoping",
                "Brand & Design Direction",
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
      </div>

      <CTABand
        heading="Start a project with LaunchRoom."
        subtext="Tell us what you want to build and we&apos;ll help you scope the cleanest version to launch first."
        buttonText="Start a project"
        buttonHref="/start"
      />
    </>
  );
}
