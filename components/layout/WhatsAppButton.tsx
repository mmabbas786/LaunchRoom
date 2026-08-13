"use client";

import { MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { getWhatsAppHref, buildProjectInquiryWhatsAppMessage } from "@/lib/whatsapp";

const whatsappOptions = [
  {
    label: "Website",
    description: "Website development inquiry",
    href: getWhatsAppHref(buildProjectInquiryWhatsAppMessage("Website")),
  },
  {
    label: "Web App / SaaS",
    description: "Custom web app inquiry",
    href: getWhatsAppHref(buildProjectInquiryWhatsAppMessage("Web Application / SaaS")),
  },
  {
    label: "Startup MVP",
    description: "Rapid MVP launch inquiry",
    href: getWhatsAppHref(buildProjectInquiryWhatsAppMessage("Startup MVP")),
  },
];

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {open ? (
        <div className="mb-4 w-[min(92vw,320px)] rounded-[26px] border border-accent-border bg-[rgba(8,8,8,0.94)] p-3 shadow-[0_28px_72px_rgba(0,0,0,0.5),0_0_28px_rgba(232,160,32,0.1)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3 px-2 pb-2">
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-accent">
              WhatsApp inquiry
            </p>
            <button
              type="button"
              aria-label="Close WhatsApp options"
              onClick={() => setOpen(false)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-accent-border bg-white/[0.04] text-white/76 hover:border-accent hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-2">
            {whatsappOptions.map((option) => (
              <a
                key={option.label}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block rounded-[18px] border border-accent-border bg-accent-dim px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_18px_34px_rgba(232,160,32,0.14)]"
              >
                <span className="block text-[15px] font-semibold text-text-primary">
                  {option.label}
                </span>
                <span className="mt-1 block text-[13px] leading-[1.7] text-text-secondary">
                  {option.description}
                </span>
              </a>
            ))}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close WhatsApp options" : "Open WhatsApp options"}
        onClick={() => setOpen((value) => !value)}
        className={[
          "group relative inline-flex h-16 w-16 items-center justify-center rounded-full border border-accent-border",
          "bg-[linear-gradient(135deg,#f4c86d_0%,#e8a020_48%,#8f5d10_100%)]",
          "shadow-[0_18px_42px_rgba(232,160,32,0.26),0_0_0_1px_rgba(255,255,255,0.08)]",
          "transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_26px_58px_rgba(232,160,32,0.32),0_0_34px_rgba(232,160,32,0.2)]",
          "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(232,160,32,0.24)]",
          open ? "scale-[1.02]" : "",
        ].join(" ")}
      >
        <span className="pointer-events-none absolute inset-[-8px] rounded-full bg-[rgba(232,160,32,0.22)] blur-xl transition-opacity duration-200 group-hover:bg-[rgba(232,160,32,0.28)]" />
        <span className="absolute inset-[1px] rounded-full bg-[radial-gradient(circle_at_28%_28%,rgba(255,255,255,0.34),rgba(255,255,255,0)_34%),linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0)_52%)]" />
        <MessageCircle
          className="absolute h-8 w-8 text-[#0a0803] drop-shadow-[0_8px_18px_rgba(255,255,255,0.08)]"
          strokeWidth={2.2}
        />
        <Phone
          className="relative h-[15px] w-[15px] translate-y-[0.5px] text-[#0a0803]"
          strokeWidth={2.4}
        />
      </button>
    </div>
  );
}
