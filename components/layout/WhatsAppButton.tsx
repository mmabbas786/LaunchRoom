"use client";

import { MessageCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { getWhatsAppHref, buildProjectInquiryWhatsAppMessage } from "@/lib/whatsapp";

const whatsappOptions = [
  {
    label: "Website",
    description: "Website development inquiry",
    href: getWhatsAppHref(buildProjectInquiryWhatsAppMessage("Website")),
  },
  {
    label: "App",
    description: "App development inquiry",
    href: getWhatsAppHref(buildProjectInquiryWhatsAppMessage("Mobile App")),
  },
  {
    label: "Both",
    description: "Website + app inquiry",
    href: getWhatsAppHref(buildProjectInquiryWhatsAppMessage("Both website + app")),
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
    <div ref={containerRef} className="fixed bottom-5 right-5 z-40">
      {open ? (
        <div className="mb-3 w-[min(92vw,320px)] rounded-[24px] border border-accent-border bg-[rgba(8,8,8,0.94)] p-3 shadow-[0_28px_70px_rgba(0,0,0,0.42)] backdrop-blur-xl">
          <p className="px-2 pb-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-text-muted">
            WhatsApp inquiry
          </p>
          <div className="space-y-2">
            {whatsappOptions.map((option) => (
              <a
                key={option.label}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block rounded-[18px] border border-accent-border bg-accent-dim px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent"
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
        className="inline-flex items-center gap-3 rounded-full border border-accent-border bg-[linear-gradient(135deg,#f4c86d_0%,#e8a020_48%,#8f5d10_100%)] px-4 py-3 text-[14px] font-semibold text-[#080808] shadow-[0_18px_40px_rgba(232,160,32,0.24)] hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(232,160,32,0.28)]"
      >
        {open ? <X className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
        <span className="hidden sm:inline">{open ? "Close" : "WhatsApp"}</span>
      </button>
    </div>
  );
}
