import { z } from "zod";

import type { SupportedCurrency } from "@/data/pricing";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  subject: z.string().min(2, "Please choose a subject."),
  message: z.string().min(20, "Please share at least a little more detail."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const startProjectTypes = [
  "Business website",
  "Portfolio website",
  "Booking website",
  "E-commerce website",
  "Landing page",
  "Custom website",
  "Web application",
  "SaaS",
  "Startup MVP",
  "Website maintenance",
  "Hosting/deployment",
  "Not sure yet",
] as const;

export type StartProjectType = (typeof startProjectTypes)[number];

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
      description: "For custom web application builds",
    },
    {
      value: "INR 1,00,000+",
      description: "For SaaS platforms or full digital product scope",
    },
    {
      value: "Let's discuss",
      description: "You want to talk through options & scope",
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
      description: "For custom web application builds",
    },
    {
      value: "$3,000+",
      description: "For SaaS platforms or full digital product scope",
    },
    {
      value: "Let's discuss",
      description: "You want to talk through options & scope",
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
  projectType: z.enum(startProjectTypes),
  hasExistingWebsite: z.enum(["Yes", "No", "Needs redesign"]).default("No"),
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
    .min(30, "Please share at least 30 characters so we can understand what you want to build."),
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
    "United States",
    "Australia",
    "Other",
  ]),
  referralSource: z.enum([
    "Google",
    "Referral",
    "Demo library",
    "Insights article",
    "Social media",
    "Upwork",
    "Fiverr",
    "Other",
  ]),
  demoNiche: z.string().optional(),
  sourceRef: z.string().optional(),
});

export type StartInput = z.infer<typeof startSchema>;
