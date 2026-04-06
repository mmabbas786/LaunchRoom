import { MessageCircle } from "lucide-react";

import { getWhatsAppHref } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const href = getWhatsAppHref("Hello Launchroom, I want to discuss a project.");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full border border-accent-border bg-[linear-gradient(135deg,#f4c86d_0%,#e8a020_48%,#8f5d10_100%)] px-4 py-3 text-[14px] font-semibold text-[#080808] shadow-[0_18px_40px_rgba(232,160,32,0.24)] hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(232,160,32,0.28)]"
    >
      <MessageCircle className="h-4 w-4" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
