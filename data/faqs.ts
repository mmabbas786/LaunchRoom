export type FAQItem = {
  question: string;
  answer: string;
};

export const serviceFaqs: FAQItem[] = [
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We work with clients from the UK, Germany, Canada, and beyond. Payments accepted via Wise, bank transfer, and PayPal. Invoices issued in your preferred currency.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A standard 5-page website takes 1-2 weeks. A CMS-powered business site takes 2-3 weeks. Android apps take 3-6 weeks. Complex projects are scoped individually.",
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
      "Every project includes 2 rounds of revisions. Additional rounds are billed at INR 2,000/hr (international clients: $30/hr).",
  },
  {
    question: "What happens after launch?",
    answer:
      "We offer monthly retainer plans starting at INR 5,000/month. You also receive full source code and credentials at handover - no lock-in.",
  },
];

export const quickContactFaqs: FAQItem[] = [
  {
    question: "Do you take international clients?",
    answer:
      "Yes - UK, Germany, Canada, and more. Payments via Wise or bank transfer.",
  },
  {
    question: "What's your typical timeline?",
    answer:
      "Websites: 1-3 weeks. Apps: 3-6 weeks. Scoped per project.",
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes, always. Mutual NDA available on request.",
  },
];
