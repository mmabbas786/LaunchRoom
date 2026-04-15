import { z } from "zod";

import type { SupportedCurrency } from "@/data/pricing";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  subject: z.enum(["New website", "Mobile app", "Retainer", "Other"]),
  message: z.string().min(20, "Please share at least a little more detail."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const startBudgetOptionsByCurrency: Record<
  SupportedCurrency,
  ReadonlyArray<{ value: StartBudget; description: string }>
> = {
  INR: [
    {
      value: "Under INR 25,000",
      description: "Close to the Launch package range",
    },
    {
      value: "INR 25,000-INR 50,000",
      description: "Fits Launch to Scale website packages",
    },
    {
      value: "INR 50,000-INR 1,00,000",
      description: "For larger website builds or app scope",
    },
    {
      value: "INR 1,00,000+",
      description: "For bigger apps or product work",
    },
    {
      value: "Let's discuss",
      description: "You want to talk through options",
    },
  ],
  USD: [
    {
      value: "Under $800",
      description: "Close to the Launch package range",
    },
    {
      value: "$800-$1,500",
      description: "Fits Launch to Scale website packages",
    },
    {
      value: "$1,500-$3,000",
      description: "For larger website builds or app scope",
    },
    {
      value: "$3,000+",
      description: "For bigger apps or product work",
    },
    {
      value: "Let's discuss",
      description: "You want to talk through options",
    },
  ],
};

export const startBudgetValues = [
  "Under INR 25,000",
  "INR 25,000-INR 50,000",
  "INR 50,000-INR 1,00,000",
  "INR 1,00,000+",
  "Under $800",
  "$800-$1,500",
  "$1,500-$3,000",
  "$3,000+",
  "Let's discuss",
] as const;

export type StartBudget = (typeof startBudgetValues)[number];

export const startSchema = z.object({
  projectType: z.enum([
    "Website",
    "Mobile App",
    "Both website + app",
    "Not sure yet",
  ]),
  budget: z.enum(startBudgetValues),
  timeline: z.enum([
    "ASAP (within 2 weeks)",
    "1 month",
    "2-3 months",
    "Flexible / no rush",
  ]),
  projectName: z.string().min(2, "Please add a project name or working title."),
  brief: z
    .string()
    .min(50, "Please share at least 50 characters so we can scope this properly."),
  brandAssets: z.enum(["Yes", "No", "Partial"]),
  referenceUrl: z
    .string()
    .url("Please enter a valid URL.")
    .optional()
    .or(z.literal("")),
  fullName: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  country: z.enum([
    "India",
    "United Kingdom",
    "Germany",
    "Canada",
    "Other",
  ]),
  referralSource: z.enum([
    "Google",
    "Referral",
    "Demo library",
    "Social media",
    "Upwork",
    "Fiverr",
    "Other",
  ]),
  demoNiche: z.string().optional(),
  sourceRef: z.string().optional(),
});

export type StartInput = z.infer<typeof startSchema>;
