"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/Button";
import {
  buildStartWhatsAppMessage,
  getWhatsAppHref,
} from "@/lib/whatsapp";
import type { StartInput } from "@/lib/validation";
import { startSchema } from "@/lib/validation";

const steps = [
  {
    title: "What do you need built?",
    description: "Choose the best fit for the project you have in mind.",
    field: "projectType" as const,
    options: [
      {
        value: "Website",
        description: "Landing page, business site, e-commerce",
      },
      {
        value: "Mobile App",
        description: "Android app, Play Store launch",
      },
      {
        value: "Both website + app",
        description: "A combined product and web presence",
      },
      {
        value: "Not sure yet",
        description: "You need help deciding what to build first",
      },
    ],
  },
  {
    title: "What's your budget?",
    description: "This helps us scope the right version first.",
    field: "budget" as const,
    options: [
      { value: "Under INR 15,000 / $200", description: "Small starter scope" },
      {
        value: "INR 15,000-INR 35,000 / $200-$450",
        description: "Lean business website range",
      },
      {
        value: "INR 35,000-INR 80,000 / $450-$1,000",
        description: "Stronger website or MVP scope",
      },
      {
        value: "INR 80,000+ / $1,000+",
        description: "Bigger app or product build",
      },
      { value: "Let's discuss", description: "You want to talk through options" },
    ],
  },
  {
    title: "When do you need it?",
    description: "Timeline helps us plan availability and delivery approach.",
    field: "timeline" as const,
    options: [
      { value: "ASAP (within 2 weeks)", description: "Fast turnaround" },
      { value: "1 month", description: "A near-term launch target" },
      { value: "2-3 months", description: "A more deliberate schedule" },
      { value: "Flexible / no rush", description: "Exploration first" },
    ],
  },
];

const detailFields: Array<keyof StartInput> = [
  "projectName",
  "brief",
  "brandAssets",
  "referenceUrl",
];

export function IntakeForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "success" | "whatsapp" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const [whatsappHref, setWhatsappHref] = useState("");

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<StartInput>({
    resolver: zodResolver(startSchema),
    defaultValues: {
      projectType: "Website",
      budget: "INR 15,000-INR 35,000 / $200-$450",
      timeline: "1 month",
      projectName: "",
      brief: "",
      brandAssets: "Partial",
      referenceUrl: "",
      fullName: "",
      email: "",
      company: "",
      country: "India",
      referralSource: "Google",
    },
  });

  const progress = useMemo(() => (step / 5) * 100, [step]);

  const nextStep = async () => {
    if (step <= 3) {
      const valid = await trigger([steps[step - 1].field]);
      if (valid) setStep((value) => value + 1);
      return;
    }

    if (step === 4) {
      const valid = await trigger(detailFields);
      if (valid) setStep(5);
    }
  };

  const previousStep = () => setStep((value) => Math.max(1, value - 1));

  const onSubmit = handleSubmit(async (values) => {
    setStatus("idle");
    setServerError("");

    try {
      const response = await fetch("/api/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setServerError("Something Went Wrong. Please Email Us Directly.");
    }
  });

  const onWhatsApp = handleSubmit((values) => {
    setStatus("idle");
    setServerError("");

    const href = getWhatsAppHref(buildStartWhatsAppMessage(values));
    setWhatsappHref(href);

    window.open(href, "_blank", "noopener,noreferrer");
    setStatus("whatsapp");
    setStep(1);
    reset();
  });

  if (status === "success") {
    return (
      <div className="panel-lime p-8 text-center md:p-12">
        <CheckCircle2 className="mx-auto h-14 w-14 text-text-primary" />
        <h2 className="mt-6 text-[clamp(32px,3vw,46px)] leading-[1.04] text-text-primary">
          Your brief is with us.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[18px] leading-[1.8] text-text-secondary">
          We&apos;ll review it and send a proposal within 48 hours.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/work">While you wait, check out our work</Button>
        </div>
      </div>
    );
  }

  if (status === "whatsapp") {
    return (
      <div className="panel-accent p-8 text-center md:p-12">
        <MessageCircle className="mx-auto h-14 w-14 text-accent" />
        <h2 className="mt-6 text-[clamp(32px,3vw,46px)] leading-[1.04] text-text-primary">
          Your brief is ready in WhatsApp.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[18px] leading-[1.8] text-text-secondary">
          We opened a prefilled WhatsApp message for you. Send it there and we&apos;ll
          review the brief quickly.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          {whatsappHref ? (
            <Button href={whatsappHref}>Open WhatsApp again</Button>
          ) : null}
          <Button href="/work" variant="outline">
            Check our work
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="panel p-6 md:p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between text-[13px] font-semibold uppercase tracking-[0.08em] text-text-muted">
          <span>Step {step} of 5</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="mt-3 h-3 overflow-hidden rounded-full border-2 border-black bg-surface-2">
          <div
            className="h-full rounded-full bg-accent transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          {step <= 3 ? (
            <OptionStep
              title={steps[step - 1].title}
              description={steps[step - 1].description}
              options={steps[step - 1].options}
              selected={watch(steps[step - 1].field)}
              onSelect={(value) =>
                setValue(steps[step - 1].field, value as never, {
                  shouldValidate: true,
                })
              }
            />
          ) : null}

          {step === 4 ? (
            <div>
              <h2 className="text-[clamp(32px,3vw,46px)] leading-[1.04]">
                Describe your project
              </h2>
              <p className="mt-3 max-w-2xl text-[17px] leading-[1.82]">
                Tell us enough that we can understand what you are building and
                what a first version should look like.
              </p>

              <div className="mt-8 grid gap-5">
                <Field label="Project name / working title" error={errors.projectName?.message}>
                  <input
                    {...register("projectName")}
                    placeholder="Launchroom v2, PDF app, company website..."
                  />
                </Field>

                <Field label="Brief description" error={errors.brief?.message}>
                  <textarea
                    {...register("brief")}
                    rows={7}
                    placeholder="What are you building, who is it for, and what should it do?"
                  />
                </Field>

                <Field
                  label="Do you have existing brand assets?"
                  error={errors.brandAssets?.message}
                >
                  <div className="grid gap-3 sm:grid-cols-3">
                    {["Yes", "No", "Partial"].map((option) => (
                      <SelectorCard
                        key={option}
                        active={watch("brandAssets") === option}
                        label={option}
                        description=""
                        onClick={() =>
                          setValue("brandAssets", option as StartInput["brandAssets"], {
                            shouldValidate: true,
                          })
                        }
                      />
                    ))}
                  </div>
                </Field>

                <Field label="Website or app reference" error={errors.referenceUrl?.message}>
                  <input {...register("referenceUrl")} placeholder="https://example.com" />
                </Field>
              </div>
            </div>
          ) : null}

          {step === 5 ? (
            <div>
              <h2 className="text-[clamp(32px,3vw,46px)] leading-[1.04]">Almost there.</h2>
              <p className="mt-3 max-w-2xl text-[17px] leading-[1.82]">
                Add your contact details and we will send a tailored proposal
                within 48 hours.
              </p>

              <div className="mt-8 grid gap-5">
                <Field label="Full name" error={errors.fullName?.message}>
                  <input {...register("fullName")} placeholder="Your name" />
                </Field>

                <Field label="Email" error={errors.email?.message}>
                  <input {...register("email")} type="email" placeholder="you@example.com" />
                </Field>

                <Field label="Company / organisation" error={errors.company?.message}>
                  <input {...register("company")} placeholder="Optional" />
                </Field>

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Country" error={errors.country?.message}>
                    <select {...register("country")}>
                      <option>India</option>
                      <option>United Kingdom</option>
                      <option>Germany</option>
                      <option>Canada</option>
                      <option>Other</option>
                    </select>
                  </Field>

                  <Field
                    label="How did you hear about us?"
                    error={errors.referralSource?.message}
                  >
                    <select {...register("referralSource")}>
                      <option>Google</option>
                      <option>Referral</option>
                      <option>Social media</option>
                      <option>Upwork</option>
                      <option>Fiverr</option>
                      <option>Other</option>
                    </select>
                  </Field>
                </div>
              </div>
            </div>
          ) : null}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={previousStep}
          disabled={step === 1 || isSubmitting}
          className="justify-center"
        >
          Back
        </Button>

        {step < 5 ? (
          <Button type="button" onClick={nextStep} className="justify-center">
            Next
          </Button>
        ) : (
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              type="button"
              variant="outline"
              className="justify-center"
              onClick={onWhatsApp}
              disabled={isSubmitting}
            >
              <MessageCircle className="h-4 w-4" />
              Send on WhatsApp
            </Button>

            <Button type="submit" className="justify-center" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Submit project brief"
              )}
            </Button>
          </div>
        )}
      </div>

      {status === "error" ? (
        <div className="mt-5 space-y-2">
          <p className="text-sm text-red-500">{serverError}</p>
          <a
            href="mailto:hello@launchroom.in"
            className="preserve-case inline-flex text-sm font-medium text-red-400 hover:text-red-300"
          >
            hello@launchroom.in
          </a>
        </div>
      ) : null}
    </form>
  );
}

function OptionStep({
  title,
  description,
  options,
  selected,
  onSelect,
}: {
  title: string;
  description: string;
  options: Array<{ value: string; description: string }>;
  selected?: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div>
      <h2 className="text-[clamp(32px,3vw,46px)] leading-[1.04]">{title}</h2>
      <p className="mt-3 max-w-2xl text-[17px] leading-[1.82]">{description}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {options.map((option) => (
          <SelectorCard
            key={option.value}
            active={selected === option.value}
            label={option.value}
            description={option.description}
            onClick={() => onSelect(option.value)}
          />
        ))}
      </div>
    </div>
  );
}

function SelectorCard({
  active,
  label,
  description,
  onClick,
}: {
  active: boolean;
  label: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-[22px] border-2 p-5 text-left shadow-[5px_5px_0_rgba(0,0,0,0.18)] transition-all duration-200",
        active
          ? "border-black bg-accent text-text-primary"
          : "border-black bg-surface-1 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none",
      ].join(" ")}
    >
      <span className="block text-[22px] leading-[1.1] text-text-primary">{label}</span>
      {description ? (
        <span className="mt-3 block text-[15px] leading-[1.72] text-text-secondary">
          {description}
        </span>
      ) : null}
    </button>
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
