import type { StartProjectType } from "@/lib/validation";
import {
  buildProjectInquiryWhatsAppMessage,
  getWhatsAppHref,
} from "@/lib/whatsapp";

const inquiryOptions: Array<{
  label: string;
  description: string;
  projectType: StartProjectType;
}> = [
  {
    label: "Business Website",
    description: "Open WhatsApp with a website development inquiry.",
    projectType: "Business website",
  },
  {
    label: "Web App / SaaS",
    description: "Open WhatsApp with a custom web app or SaaS platform inquiry.",
    projectType: "Web application",
  },
  {
    label: "Startup MVP",
    description: "Open WhatsApp with a rapid 2-4 week MVP launch inquiry.",
    projectType: "Startup MVP",
  },
];

export function ProjectWhatsAppSelector() {
  return (
    <div
      id="project-whatsapp-selector"
      className="equal-height-grid mt-6 sm:grid-cols-3"
    >
      {inquiryOptions.map((option) => (
        <a
          key={option.label}
          href={getWhatsAppHref(buildProjectInquiryWhatsAppMessage(option.projectType))}
          className="flex h-full flex-col rounded-[22px] border border-accent-border bg-accent-dim p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-accent"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="block text-[18px] font-semibold text-text-primary">
            {option.label}
          </span>
          <span className="mt-2 block text-[14px] leading-[1.7] text-text-secondary">
            {option.description}
          </span>
        </a>
      ))}
    </div>
  );
}
