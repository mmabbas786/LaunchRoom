import { formatRecurringPrice, pricingSummary } from "@/data/pricing";
import type { SupportedCurrency } from "@/data/pricing";

export type FAQItem = {
  question: string;
  answer: string;
};

export function getServiceFaqs(currency: SupportedCurrency): FAQItem[] {
  return [
    {
      question: "Do you work with international clients?",
      answer:
        "Yes. We work with clients from the UK, Germany, Canada, and beyond. Payments accepted via Wise, bank transfer, and PayPal. Invoices issued in your preferred currency.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "A standard 5-page website takes 1-2 weeks. A fuller business site takes 2-3 weeks. Custom web applications & SaaS MVPs take 2-5 weeks. Complex projects are scoped individually.",
    },
    {
      question: "Do you sign NDAs?",
      answer:
        "Absolutely. We sign client NDAs before discussing sensitive project details. We also have our own mutual NDA available.",
    },
    {
      question: "What do I need to provide to get started?",
      answer:
        "A brief describing what you need, your budget range, and a timeline. We handle everything else - design, copy structure, development, and deployment.",
    },
    {
      question: "Do you offer revisions?",
      answer:
        `Revisions depend on the selected package or proposal. Scale includes 2 free revisions, and extra revisions are available as an add-on at ${pricingSummary.extraRevision[currency]} each.`,
    },
    {
      question: "What happens after launch?",
      answer:
        `Basic and Launch include 1 month of support, while Scale includes 3 months. Ongoing monthly maintenance starts at ${formatRecurringPrice(pricingSummary.monthlyMaintenance[currency])}, and you receive full source code and credentials at handover.`,
    },
  ];
}

export const quickContactFaqs: FAQItem[] = [
  {
    question: "Do you take international clients?",
    answer:
      "Yes - UK, Germany, Canada, and more. Payments via Wise or bank transfer.",
  },
  {
    question: "What's your typical timeline?",
    answer:
      "Websites: 1-3 weeks. Web Apps & SaaS MVPs: 2-5 weeks. Scoped per project.",
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes, always. Mutual NDA available on request.",
  },
];

export const pricingFaqs: FAQItem[] = [
  {
    question: "Which package is better for a small business website?",
    answer:
      "Basic is ideal for a one-page website with the essentials in place. Launch is better for a focused brochure-style website up to 5 pages, and Scale fits businesses that want a fuller digital presence with branding, analytics, content support, and longer post-launch help.",
  },
  {
    question: "Can I pay in Indian rupees or US dollars?",
    answer:
      "Yes. Indian clients usually pay in Indian rupees, while international clients can be billed in US dollars. The final proposal confirms the agreed billing currency before work starts.",
  },
  {
    question: "Do these prices include domain and hosting?",
    answer:
      "The package includes domain and hosting setup. Third-party costs such as domain registration, hosting renewals, premium plugins, or paid tools are billed at actuals unless they are clearly included in the quote.",
  },
  {
    question: "What if I need e-commerce or more than 10 pages?",
    answer:
      "That can be added through the listed add-ons or turned into a custom scope if the project grows beyond the standard package limits.",
  },
  {
    question: "How do revisions and support work after launch?",
    answer:
      "Scale includes 2 free revisions and 3 months of support. Basic and Launch include 1 month of support, and extra revisions or monthly maintenance can be added separately when needed.",
  },
  {
    question: "Can I upgrade from Basic or Launch later?",
    answer:
      "Yes. If the scope expands during the project, we can move from Basic to Launch or Scale, or from Launch to Scale, and adjust the quote before the added work begins.",
  },
];
