export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  note?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "A clean testimonial section is ready here. Replace this with the final approved quote from New India Stores once you have it in writing.",
    name: "New India Stores",
    role: "Client review slot",
    company: "Kolkata",
    note: "Best replaced with a real approved quote before launch.",
  },
  {
    quote:
      "Use this card for a strong website client quote that mentions speed, communication, and how easy the process felt from first call to launch.",
    name: "Website client",
    role: "Review placeholder",
    company: "International or India client",
    note: "Add a real review once collected.",
  },
  {
    quote:
      "Use this slot for an app or retainer client quote about reliability, ownership handover, and clear pricing after launch.",
    name: "App / retainer client",
    role: "Review placeholder",
    company: "Launchroom client",
    note: "Swap with real feedback when available.",
  },
];
