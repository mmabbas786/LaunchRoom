import { Check } from "lucide-react";

import { Button } from "@/components/ui/Button";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServiceDetail({
  service,
  reverse = false,
}: {
  service: Service;
  reverse?: boolean;
}) {
  return (
    <section
      id={service.id}
      className="panel grid gap-7 p-7 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10"
    >
      <div className={cn(reverse && "lg:order-2")}>
        <p className="card-label">{service.number}</p>
        <h2 className="mt-4 text-[clamp(32px,3.3vw,48px)] leading-[1.03]">
          {service.name}
        </h2>
        <p className="mt-5 max-w-3xl text-[18px] leading-[1.8] text-text-secondary">
          {service.shortDescription}
        </p>
        <div className="mt-6 space-y-4">
          {service.description.map((paragraph) => (
            <p key={paragraph} className="text-[17px] leading-[1.82]">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className={cn("space-y-6", reverse && "lg:order-1")}>
        <div className="rounded-[22px] border border-accent-border bg-surface-3 p-6 text-on-dark shadow-[0_18px_36px_rgba(232,160,32,0.12)]">
          <p className="card-label text-on-dark-muted">What's included</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {service.includes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent-border bg-accent-dim text-accent">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-[15px] leading-[1.75] text-on-dark">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[22px] border border-border bg-surface-2 p-5 shadow-[0_16px_30px_rgba(0,0,0,0.22)]">
            <p className="card-label text-on-dark-muted">Timeline</p>
            <p className="mt-3 text-[28px] leading-[1.04] text-on-dark">
              {service.timeline}
            </p>
          </div>
          <div className="rounded-[22px] border border-accent-border bg-accent p-5 shadow-[0_16px_30px_rgba(232,160,32,0.18)]">
            <p className="card-label text-[#080808]">Pricing</p>
            <p className="preserve-case mt-3 text-[28px] leading-[1.04] text-[#080808]">
              {service.startingPrice}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button href="/start">Start this project</Button>
          <Button href="/contact" variant="outline">
            Ask a question
          </Button>
        </div>
      </div>
    </section>
  );
}
