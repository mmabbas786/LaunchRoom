"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Wand2 } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
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

const websiteService = services.find((service) => service.id === "web");

const stats = [
  { value: "2", label: "Founders" },
  { value: `${demos.length}`, label: "Niche Demos Built" },
  { value: websiteService?.timeline ?? "1-3 weeks", label: "Website Launch Range" },
  { value: "<24h", label: "Weekday Reply Goal" },
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
            {siteConfig.studioLabel}
          </motion.p>

          <motion.h1
            className="hero-title mx-auto mt-6 max-w-[15ch] text-text-primary"
            initial="hidden"
            animate="show"
            variants={item}
            custom={0.18}
          >
            Welcome to the Launch<span className="text-accent">Room</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.85] text-text-secondary md:text-[16px]"
            initial="hidden"
            animate="show"
            variants={item}
            custom={0.26}
          >
            Websites, Web Apps, SaaS Platforms, And Digital Products For Startups And Growing
            Businesses. Modern, Fast, Clean, And Launch Ready.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
            initial="hidden"
            animate="show"
            variants={item}
            custom={0.34}
          >
            <Button href="/start">Start a Project</Button>
            <Button href="/work" variant="ghost">
              See Our Work
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
            <div className="absolute left-0 top-14 hidden w-56 -translate-x-6 rounded-[20px] border border-border bg-[rgba(255,255,255,0.03)] p-4 backdrop-blur-sm xl:block">
              <p className="card-label">Launch Checklist</p>
              <div className="mt-4 space-y-3">
                {["Positioning", "Conversion Flow", "Deployment"].map((label) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-[16px] border border-border bg-surface-1 px-4 py-3 text-[13px] font-medium text-text-secondary"
                  >
                    <span>{label}</span>
                    <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute right-0 top-20 hidden w-60 translate-x-6 rounded-[20px] border border-border bg-[rgba(255,255,255,0.03)] p-4 backdrop-blur-sm xl:block">
              <p className="card-label">Studio Signal</p>
              <div className="mt-5 rounded-[18px] border border-border bg-surface-1 p-4">
                <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-text-muted">
                  Conversion-Ready
                </p>
                <p className="mt-2 text-[30px] font-extrabold tracking-[-0.06em] text-accent">
                  +32%
                </p>
                <div className="mt-4 grid grid-cols-6 items-end gap-2">
                  {[22, 42, 36, 56, 48, 74].map((height) => (
                    <div
                      key={height}
                      className="rounded-full bg-[linear-gradient(180deg,#f4c86d_0%,#e8a020_54%,#8f5d10_100%)]"
                      style={{ height }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-3xl rounded-[28px] border border-accent-border bg-[linear-gradient(180deg,rgba(232,160,32,0.08),rgba(255,255,255,0)),#0f0f10] p-4 shadow-[0_26px_90px_rgba(0,0,0,0.5)] sm:p-6">
              <div className="rounded-[24px] border border-border bg-surface-1 p-4 sm:p-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#f77b7b]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#f0c15f]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#7fdd91]" />
                  </div>
                  <span className="preserve-case rounded-full border border-accent-border bg-accent-dim px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-accent">
                    launchroom.in
                  </span>
                </div>

                <div className="mt-6 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="rounded-[22px] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0)),#121212] p-5">
                    <p className="card-label">Premium Interface Systems</p>
                    <h2 className="mt-3 text-[clamp(26px,3vw,36px)] leading-[1.05] text-text-primary">
                      Modern Websites That Look Custom, Not Templated.
                    </h2>
                    <div className="mt-6 space-y-3">
                      {[
                        "Position The Offer Clearly",
                        "Design Confidence Into The Layout",
                        "Ship Fast With Clean Development",
                      ].map((line) => (
                        <div
                          key={line}
                          className="flex items-center justify-between rounded-[16px] border border-border bg-surface-2 px-4 py-3 text-[14px] font-medium text-text-secondary"
                        >
                          <span>{line}</span>
                          <ArrowUpRight className="h-4 w-4 text-accent" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[22px] border border-border bg-[linear-gradient(180deg,rgba(232,160,32,0.08),rgba(255,255,255,0)),#121212] p-5">
                      <p className="card-label">Design Stack</p>
                      <div className="mt-4 grid gap-3">
                        {[
                          ["UI Systems", "Gold-Accented Dark Visuals"],
                          ["Build Flow", "Next.js, Tailwind, Motion"],
                          ["Support", "QA, Launch, And Post-Launch Updates"],
                        ].map(([title, desc]) => (
                          <div key={title} className="rounded-[16px] border border-border bg-surface-2 px-4 py-3">
                            <p className="text-[14px] font-medium text-text-primary">{title}</p>
                            <p className="mt-1 text-[13px] leading-[1.65] text-text-secondary">
                              {desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[22px] border border-border bg-surface-2 p-5">
                      <p className="card-label">Response Window</p>
                      <p className="mt-3 text-[28px] font-extrabold tracking-[-0.06em] text-text-primary">
                        Within 24 Hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative z-10 mt-8 grid gap-4 md:grid-cols-4"
          initial="hidden"
          animate="show"
          variants={item}
          custom={0.5}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="panel-lime px-5 py-5 text-center">
              <div className="font-display text-[34px] font-extrabold tracking-[-0.06em] text-accent">
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
