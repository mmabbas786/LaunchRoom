"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Wand2 } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { demos } from "@/lib/demos";
import { siteConfig } from "@/lib/site";

const item = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

const stats = [
  { value: "1-2 Wks", label: "Typical Website Launch" },
  { value: `${demos.length}`, label: "Live Niche Demos" },
  { value: "100%", label: "Code & Asset Ownership" },
  { value: "< 24h", label: "Direct Founder Response" },
];

export function Hero() {
  return (
    <section className="page-shell pb-10 pt-4 sm:pb-14 lg:pb-16">
      <motion.div
        className="panel-dark relative overflow-hidden px-6 pb-12 pt-10 sm:px-8 lg:px-12 lg:pb-16 lg:pt-14"
        initial="hidden"
        animate="show"
        variants={item}
        custom={0.05}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(232,160,32,0.28),transparent_18%),radial-gradient(circle_at_14%_24%,rgba(255,255,255,0.08),transparent_12%),radial-gradient(circle_at_88%_76%,rgba(232,160,32,0.12),transparent_20%)]" />
        <Sparkles className="absolute left-6 top-20 hidden h-4 w-4 text-accent lg:block" />
        <Wand2 className="absolute right-10 top-28 hidden h-5 w-5 text-accent lg:block" />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.p
            className="eyebrow eyebrow-invert mx-auto"
            initial="hidden"
            animate="show"
            variants={item}
            custom={0.1}
          >
            Website Development Studio • Kolkata &amp; Pan-India
          </motion.p>

          <motion.h1
            className="hero-title mx-auto mt-6 max-w-[17ch] text-text-primary"
            initial="hidden"
            animate="show"
            variants={item}
            custom={0.18}
          >
            Custom website development for <span className="text-accent">businesses, professionals &amp; startups.</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.85] text-text-secondary md:text-[17px]"
            initial="hidden"
            animate="show"
            variants={item}
            custom={0.26}
          >
            Tell us what your business needs. LaunchRoom helps you plan, design, build, and launch
            high-converting websites without requiring technical specifications or coding knowledge.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
            initial="hidden"
            animate="show"
            variants={item}
            custom={0.34}
          >
            <Button href="/start">
              Start a Project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="/demos" variant="ghost">
              Explore Demos
            </Button>
            <Button href="/work" variant="ghost">
              View Our Work
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto mt-14 max-w-5xl"
          initial="hidden"
          animate="show"
          variants={item}
          custom={0.42}
        >
          <div className="absolute left-1/2 top-10 h-48 w-48 -translate-x-1/2 rounded-full bg-[rgba(232,160,32,0.18)] blur-[90px]" />

          <div className="relative">
            <div className="mx-auto max-w-3xl rounded-[28px] border border-accent-border bg-[linear-gradient(180deg,rgba(232,160,32,0.08),rgba(255,255,255,0)),#0f0f10] p-4 shadow-[0_26px_90px_rgba(0,0,0,0.5)] sm:p-6">
              <div className="rounded-[24px] border border-border bg-surface-1 p-4 sm:p-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#f77b7b]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#f0c15f]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#7fdd91]" />
                  </div>
                  <span className="preserve-case rounded-full border border-accent-border bg-accent-dim px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-accent font-mono">
                    LaunchRoom Website Studio
                  </span>
                </div>

                <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[22px] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0)),#121212] p-5 flex flex-col justify-between">
                    <div>
                      <p className="card-label">Client-First Approach</p>
                      <h2 className="mt-3 text-[clamp(24px,2.6vw,32px)] leading-[1.1] text-text-primary">
                        Tell us what you need. We handle the rest.
                      </h2>
                      <p className="mt-3 text-[14px] leading-[1.7] text-text-secondary">
                        Whether you need a business site, a booking calendar, an online store, or a portfolio, we guide you through the simplest version to build.
                      </p>
                    </div>

                    <div className="mt-6 space-y-2.5">
                      {[
                        "No technical specifications needed to start",
                        "Custom UI design & mobile-first responsiveness",
                        "End-to-end launch (Domain, DNS, SSL & Google)",
                        "100% full source code & asset handover",
                      ].map((line) => (
                        <div
                          key={line}
                          className="flex items-center gap-2.5 rounded-[14px] border border-border bg-surface-2 px-3.5 py-2.5 text-[13px] font-medium text-text-secondary"
                        >
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                          <span>{line}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[22px] border border-border bg-[linear-gradient(180deg,rgba(232,160,32,0.08),rgba(255,255,255,0)),#121212] p-5">
                      <p className="card-label">What We Build</p>
                      <div className="mt-3 space-y-2">
                        {[
                          ["Business Websites", "Credibility, service menus & lead capture"],
                          ["Booking Websites", "Salons, clinics & automated appointments"],
                          ["Portfolios & Stores", "Creators, architects & product checkouts"],
                        ].map(([title, desc]) => (
                          <div key={title} className="rounded-[14px] border border-border bg-surface-2 p-3">
                            <p className="text-[13px] font-bold text-text-primary">{title}</p>
                            <p className="text-[12px] text-text-secondary mt-0.5">{desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[22px] border border-border bg-surface-2 p-4 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-mono uppercase text-text-muted">Kolkata Studio • India-wide</p>
                        <p className="text-[15px] font-bold text-text-primary mt-0.5">Direct Founder Delivery</p>
                      </div>
                      <ShieldCheck className="h-6 w-6 text-accent shrink-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4"
          initial="hidden"
          animate="show"
          variants={item}
          custom={0.5}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="panel-lime px-5 py-5 text-center">
              <div className="font-display text-[30px] sm:text-[34px] font-extrabold tracking-[-0.06em] text-accent">
                {stat.value}
              </div>
              <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.14em] text-text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
