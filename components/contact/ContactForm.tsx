"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/Button";
import {
  buildContactWhatsAppMessage,
  getWhatsAppHref,
} from "@/lib/whatsapp";
import type { ContactInput } from "@/lib/validation";
import { contactSchema } from "@/lib/validation";

type SubmitState = "idle" | "success" | "whatsapp" | "error";

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [whatsappHref, setWhatsappHref] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      subject: "New website",
      message: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setState("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setState("success");
      reset();
    } catch {
      setState("error");
      setErrorMessage("Something went wrong. Please email us directly.");
    }
  });

  const onWhatsApp = handleSubmit((values) => {
    setState("idle");
    setErrorMessage("");

    const href = getWhatsAppHref(buildContactWhatsAppMessage(values));
    setWhatsappHref(href);

    window.open(href, "_blank", "noopener,noreferrer");
    setState("whatsapp");
    reset();
  });

  return (
    <form onSubmit={onSubmit} className="panel p-7 md:p-8">
      <div className="mb-7">
        <p className="card-label">Contact form</p>
        <h2 className="mt-3 text-[clamp(30px,3vw,42px)] leading-[1.04]">
          Send the brief.
        </h2>
      </div>

      <div className="grid gap-5">
        <Field label="Name" error={errors.name?.message}>
          <input {...register("name")} placeholder="Your name" />
        </Field>

        <Field label="Email" error={errors.email?.message}>
          <input {...register("email")} type="email" placeholder="you@example.com" />
        </Field>

        <Field label="Company" error={errors.company?.message}>
          <input {...register("company")} placeholder="Optional" />
        </Field>

        <Field label="Subject" error={errors.subject?.message}>
          <select {...register("subject")}>
            <option>New website</option>
            <option>Mobile app</option>
            <option>Retainer</option>
            <option>Other</option>
          </select>
        </Field>

        <Field label="Message" error={errors.message?.message}>
          <textarea
            {...register("message")}
            rows={6}
            placeholder="Tell us what you're building, your timeline, and your budget range."
          />
        </Field>
      </div>

      <div className="mt-7 flex flex-col gap-4">
        <Button type="submit" className="w-full justify-center" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send message"
          )}
        </Button>

        <Button
          type="button"
          variant="outline"
          className="w-full justify-center"
          onClick={onWhatsApp}
          disabled={isSubmitting}
        >
          <MessageCircle className="h-4 w-4" />
          Send on WhatsApp
        </Button>

        {state === "success" ? (
          <div className="rounded-[18px] border border-accent-border bg-accent-dim px-4 py-3 text-[15px] font-semibold text-text-primary">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5" />
              <span>We got your message. We&apos;ll reply within 24 hours.</span>
            </div>
          </div>
        ) : null}

        {state === "whatsapp" ? (
          <div className="rounded-[18px] border border-accent-border bg-accent-dim px-4 py-3 text-[15px] font-semibold text-text-primary">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5" />
              <div>
                <span className="block">
                  WhatsApp opened with your prefilled message. Hit send there and
                  we&apos;ll pick it up.
                </span>
                {whatsappHref ? (
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex text-[14px] font-medium text-accent"
                  >
                    Open WhatsApp again
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}

        {state === "error" ? (
          <p className="text-sm text-red-500">{errorMessage}</p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.08em] text-text-muted">
        {label}
      </span>
      {children}
      {error ? <span className="mt-2 block text-sm text-red-500">{error}</span> : null}
    </label>
  );
}
