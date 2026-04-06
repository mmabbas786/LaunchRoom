"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { serviceFaqs } from "@/data/faqs";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function HomeFAQ() {
  const items = serviceFaqs.slice(0, 5);
  const [open, setOpen] = useState<string | null>(items[0]?.question ?? null);

  return (
    <section className="page-shell section-shell pt-10">
      <AnimatedSection className="text-center">
        <p className="eyebrow mx-auto">FAQ</p>
        <h2 className="section-title mx-auto max-w-[13ch]">
          Frequently asked questions.
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <div className="panel-dark mx-auto mt-10 max-w-4xl overflow-hidden px-4 py-4 sm:px-6 sm:py-6">
          {items.map((item, index) => {
            const isOpen = open === item.question;

            return (
              <div
                key={item.question}
                className={index === items.length - 1 ? "" : "border-b border-border"}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : item.question)}
                  className="flex w-full items-center justify-between gap-6 px-2 py-5 text-left sm:px-4"
                >
                  <span className="text-[19px] font-medium leading-[1.3] text-text-primary sm:text-[22px]">
                    {item.question}
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent-border bg-accent-dim text-accent">
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                    >
                      <div className="px-2 pb-5 sm:px-4">
                        <p className="max-w-3xl text-[15px] leading-[1.82] text-text-secondary">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </AnimatedSection>
    </section>
  );
}
