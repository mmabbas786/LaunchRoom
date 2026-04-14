"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import type { FAQItem } from "@/data/faqs";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

type FAQProps = {
  items: FAQItem[];
  eyebrow?: string;
  title?: string;
};

export function FAQ({
  items,
  eyebrow = "Questions",
  title = "Things clients usually want clear before they start.",
}: FAQProps) {
  const [open, setOpen] = useState<string | null>(items[0]?.question ?? null);

  return (
    <section className="section-shell">
      <AnimatedSection>
        <SectionHeader eyebrow={eyebrow} title={title} />
      </AnimatedSection>

      <AnimatedSection className="mt-8 space-y-4" delay={0.05}>
        {items.map((item) => {
          const isOpen = open === item.question;

          return (
            <div key={item.question} className="panel overflow-hidden">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : item.question)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7"
              >
                <span className="text-[22px] leading-[1.15] text-text-primary">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-text-muted transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                  >
                    <div className="border-t-2 border-black/10 px-6 py-5 sm:px-7">
                      <p className="text-[17px] leading-[1.84]">{item.answer}</p>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </AnimatedSection>
    </section>
  );
}
