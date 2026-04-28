export type DemoSection =
  | {
      type: "hero";
      headline: string;
      subheadline: string;
      cta: string;
    }
  | {
      type: "services";
      title: string;
      items: { name: string; desc: string; price?: string }[];
    }
  | {
      type: "gallery";
      title: string;
      images: string[];
    }
  | {
      type: "testimonials";
      items: { name: string; text: string; rating: number }[];
    }
  | {
      type: "contact";
      mapEmbed?: string;
    };

export type Demo = {
  slug: string;
  niche: string;
  tagline: string;
  description: string;
  accentColor: string;
  coverEmoji: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
  industry: string;
  tags: string[];
  sections: DemoSection[];
  businessName: string;
  location: string;
  phone: string;
  email: string;
  whatsapp: string;
  externalUrl?: string;
};

export function hexToRgba(hex: string, alpha: number) {
  const normalized = hex.replace("#", "");
  const fullHex =
    normalized.length === 3
      ? normalized
          .split("")
          .map((part) => `${part}${part}`)
          .join("")
      : normalized;

  const intValue = Number.parseInt(fullHex, 16);
  const r = (intValue >> 16) & 255;
  const g = (intValue >> 8) & 255;
  const b = intValue & 255;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export const featuredDemoSlugs = ["ca-firm", "clinic", "law-firm"] as const;

export const demos: Demo[] = [
  {
    slug: "law-firm",
    niche: "Law Firm",
    tagline: "A credible legal website that builds trust before the first consultation call.",
    description:
      "A clean law firm website demo with practice areas, proof points, consultation CTA, and a strong professional tone.",
    accentColor: "#d4a843",
    coverEmoji: "⚖️",
    thumbnailSrc: "/law-firm-thumbnail.png",
    thumbnailAlt: "Homepage screenshot of the Bose & Partners law firm demo website",
    industry: "Legal Services",
    tags: ["Practice areas", "Consultation CTA", "Trust signals", "Professional layout"],
    businessName: "Bose & Partners",
    location: "Business District, Kolkata",
    phone: "+91 00000 00002",
    email: "contact@bosepartners.example",
    whatsapp: "910000000002",
    externalUrl: "https://law-firm-demo-site.netlify.app/",
    sections: [
      {
        type: "hero",
        headline: "Trusted counsel. Clear advice.",
        subheadline:
          "Corporate, civil, and family law guidance with responsive communication and a modern, confidence-building digital presence.",
        cta: "Book a Consultation",
      },
      {
        type: "services",
        title: "Practice areas",
        items: [
          { name: "Corporate law", desc: "Company formation, commercial contracts, strategic advisory." },
          { name: "Civil litigation", desc: "Property disputes, recovery matters, and injunction support." },
          { name: "Family law", desc: "Divorce, custody, mediation, and maintenance proceedings." },
          { name: "Real estate", desc: "Title review, due diligence, and transaction guidance." },
        ],
      },
      {
        type: "gallery",
        title: "What the site showcases",
        images: ["Practice area overview", "Consultation booking flow", "Trust-focused contact panel"],
      },
      {
        type: "testimonials",
        items: [
          { name: "Suresh B.", text: "A serious, professional web presence that immediately communicates credibility.", rating: 5 },
          { name: "Meera D.", text: "The structure makes it easy to understand services without reading walls of text.", rating: 5 },
          { name: "Arun P.", text: "Exactly the kind of site a boutique firm could win clients with.", rating: 5 },
        ],
      },
      { type: "contact" },
    ],
  },
  {
    slug: "ca-firm",
    niche: "CA Firm",
    tagline: "A modern chartered accountant website that feels credible before the first consultation.",
    description:
      "A polished CA firm website demo with service clarity, trust-focused sections, and a clean consultation flow.",
    accentColor: "#0f766e",
    coverEmoji: "📊",
    thumbnailSrc: "/ca-firm-thumbnail.png",
    thumbnailAlt: "Homepage screenshot of the CA Firm chartered accountant demo website",
    industry: "Finance & Compliance",
    tags: ["Service clarity", "Trust signals", "Consultation CTA", "Professional positioning"],
    businessName: "CA FIRM",
    location: "Kolkata",
    phone: "+91 00000 00013",
    email: "hello@ledgerpeak.example",
    whatsapp: "910000000013",
    externalUrl: "https://ca-firm-demo.netlify.app/",
    sections: [
      {
        type: "hero",
        headline: "Clarity for your compliance and growth decisions.",
        subheadline:
          "A trust-first digital presence for chartered accountant firms that need to look modern, credible, and consultation-ready.",
        cta: "Book a Consultation",
      },
      {
        type: "services",
        title: "What the firm offers",
        items: [
          { name: "GST and compliance", desc: "Returns, filings, reconciliations, and ongoing advisory." },
          { name: "Income tax support", desc: "Personal and business filing with clear next-step guidance." },
          { name: "Audit and assurance", desc: "Process-ready documentation and professional review." },
          { name: "Business advisory", desc: "Entity setup, accounting structure, and financial clarity." },
        ],
      },
      {
        type: "gallery",
        title: "What the demo highlights",
        images: ["Trust-led hero layout", "Service overview cards", "Consultation-first contact flow"],
      },
      {
        type: "testimonials",
        items: [
          { name: "Ritika S.", text: "Clean, credible, and exactly the tone a modern CA firm needs.", rating: 5 },
          { name: "Sanjay D.", text: "The services and CTA flow feel clear without becoming corporate sludge.", rating: 5 },
          { name: "Abhinav M.", text: "A very strong demo for firms that want to look current and trustworthy.", rating: 5 },
        ],
      },
      { type: "contact" },
    ],
  },
  {
    slug: "clinic",
    niche: "Clinic / Doctor",
    tagline: "A clean medical website that builds trust and drives appointment enquiries.",
    description:
      "A clinic website demo with services, consultation pricing, patient trust cues, and a simple appointment-first structure.",
    accentColor: "#0d7a5f",
    coverEmoji: "🏥",
    thumbnailSrc: "/clinic-demo-thumbnail.png",
    thumbnailAlt: "Homepage screenshot of the Wellnest clinic and doctor demo website",
    industry: "Healthcare",
    tags: ["Doctor profile", "Consultation pricing", "Appointments", "Patient trust"],
    businessName: "Wellnest",
    location: "North Kolkata",
    phone: "+91 00000 00003",
    email: "appointments@wellnestclinic.example",
    whatsapp: "910000000003",
    externalUrl: "https://doctor-demo-site.netlify.app/",
    sections: [
      {
        type: "hero",
        headline: "Your health, handled with clarity.",
        subheadline:
          "General medicine and preventive care with a calm, reassuring website experience designed to reduce friction for new patients.",
        cta: "Book an Appointment",
      },
      {
        type: "services",
        title: "Services offered",
        items: [
          { name: "General consultation", desc: "Fever, infection, fatigue, and routine follow-up care.", price: "₹500" },
          { name: "Health check package", desc: "Basic screening, reports review, and next-step guidance.", price: "₹2,500" },
          { name: "Diabetes management", desc: "Monitoring, medication review, and practical care planning.", price: "₹650" },
          { name: "Family wellness visits", desc: "Preventive support for adults, children, and seniors.", price: "₹450" },
        ],
      },
      {
        type: "gallery",
        title: "Visual direction",
        images: ["Welcoming reception desk", "Doctor profile highlight", "Appointment information blocks"],
      },
      {
        type: "testimonials",
        items: [
          { name: "Ratan G.", text: "The site feels trustworthy, organised, and easy for patients to act on.", rating: 5 },
          { name: "Sumita L.", text: "Perfect balance between professionalism and warmth.", rating: 5 },
          { name: "Deepak R.", text: "This would absolutely work for a modern family clinic.", rating: 5 },
        ],
      },
      { type: "contact" },
    ],
  },
  {
    slug: "gym",
    niche: "Gym / Fitness",
    tagline: "A high-energy fitness website with membership plans and a clear join CTA.",
    description:
      "A gym website demo with membership cards, social proof, bold hero messaging, and WhatsApp-led lead capture.",
    accentColor: "#c0392b",
    coverEmoji: "🏋️",
    industry: "Health & Fitness",
    tags: ["Membership plans", "Free trial CTA", "Trainer feel", "Social proof"],
    businessName: "IronEdge Fitness",
    location: "East Kolkata",
    phone: "+91 00000 00004",
    email: "join@ironedgefitness.example",
    whatsapp: "910000000004",
    sections: [
      {
        type: "hero",
        headline: "Build the strongest version of yourself.",
        subheadline:
          "A bold, conversion-focused fitness site for studios and gyms that need people to act, not just browse.",
        cta: "Start Free Trial",
      },
      {
        type: "services",
        title: "Membership plans",
        items: [
          { name: "Basic", desc: "Open gym access, six days a week.", price: "₹1,200/mo" },
          { name: "Pro", desc: "Gym + group classes + one trainer check-in.", price: "₹2,500/mo" },
          { name: "Elite", desc: "Unlimited access and personal training support.", price: "₹5,000/mo" },
          { name: "Annual", desc: "Best-value yearly membership with bonus weeks.", price: "₹12,000/yr" },
        ],
      },
      {
        type: "gallery",
        title: "Brand moments",
        images: ["Strength floor focus", "Morning HIIT class", "Member success wall"],
      },
      {
        type: "testimonials",
        items: [
          { name: "Vikram S.", text: "You can feel the energy immediately. This is built to convert trial signups.", rating: 5 },
          { name: "Pooja N.", text: "The plans, CTA hierarchy, and testimonials all feel on-point.", rating: 5 },
          { name: "Arjun M.", text: "A strong gym homepage with none of the usual clutter.", rating: 5 },
        ],
      },
      { type: "contact" },
    ],
  },
  {
    slug: "real-estate",
    niche: "Real Estate",
    tagline: "A property website that generates enquiries before you make a single call.",
    description:
      "A real estate website demo with featured listings, lead-oriented property cards, and a clean enquiry flow.",
    accentColor: "#2c3e50",
    coverEmoji: "🏠",
    industry: "Real Estate",
    tags: ["Featured listings", "Property cards", "Lead capture", "Agent trust"],
    businessName: "Homes by Ghosh",
    location: "Metro Corridor, Kolkata",
    phone: "+91 00000 00005",
    email: "hello@homesbyghosh.example",
    whatsapp: "910000000005",
    sections: [
      {
        type: "hero",
        headline: "Find your next home with more confidence.",
        subheadline:
          "A focused real-estate layout designed to showcase properties, highlight location value, and turn interest into conversations.",
        cta: "View Properties",
      },
      {
        type: "services",
        title: "Featured listings",
        items: [
          { name: "3BHK Skyline Residence", desc: "Move-in ready apartment with bright living spaces.", price: "₹85L" },
          { name: "2BHK Parkview Home", desc: "Smartly planned family apartment in a gated complex.", price: "₹62L" },
          { name: "Commercial workspace", desc: "Ground-floor office shell with parking access.", price: "₹1.2Cr" },
          { name: "Corner development plot", desc: "Approved plot for custom residential build.", price: "₹28L" },
        ],
      },
      {
        type: "gallery",
        title: "Preview moments",
        images: ["Listing highlights", "Neighbourhood value section", "Broker contact CTA"],
      },
      {
        type: "testimonials",
        items: [
          { name: "Abhijit D.", text: "This makes the listings feel credible and much easier to enquire about.", rating: 5 },
          { name: "Swati M.", text: "Clear enough for buyers, polished enough for developers.", rating: 5 },
          { name: "Rajesh K.", text: "A strong template for property-led lead generation.", rating: 5 },
        ],
      },
      { type: "contact" },
    ],
  },
  {
    slug: "salon",
    niche: "Salon / Beauty",
    tagline: "A stylish beauty site with services, pricing, and WhatsApp booking built in.",
    description:
      "A salon website demo with premium visual styling, service menu cards, testimonials, and easy booking calls to action.",
    accentColor: "#8e44ad",
    coverEmoji: "💇",
    industry: "Beauty & Wellness",
    tags: ["Service menu", "Price list", "Booking CTA", "Luxury feel"],
    businessName: "Blush Studio",
    location: "South Kolkata",
    phone: "+91 00000 00006",
    email: "book@blushstudio.example",
    whatsapp: "910000000006",
    sections: [
      {
        type: "hero",
        headline: "Look your best. Every day.",
        subheadline:
          "A premium-feeling salon site that helps clients browse services, understand pricing, and book without hesitation.",
        cta: "Book a Session",
      },
      {
        type: "services",
        title: "Services and pricing",
        items: [
          { name: "Haircut and styling", desc: "Wash, cut, and blow-dry for all hair types.", price: "from ₹499" },
          { name: "Keratin treatment", desc: "Long-lasting smoothing treatment with aftercare advice.", price: "from ₹3,500" },
          { name: "Full facial", desc: "Cleanse, exfoliate, hydrate, and finish with glow care.", price: "from ₹999" },
          { name: "Bridal package", desc: "Makeup, hair, and a planning consult for the big day.", price: "₹12,000" },
        ],
      },
      {
        type: "gallery",
        title: "Beauty-led moments",
        images: ["Mirror station detail", "Bridal prep suite", "Treatment menu cards"],
      },
      {
        type: "testimonials",
        items: [
          { name: "Rima B.", text: "The branding and layout make the studio feel premium before you even book.", rating: 5 },
          { name: "Sneha P.", text: "Exactly the right tone for a modern salon or bridal specialist.", rating: 5 },
          { name: "Tina G.", text: "Beautiful without becoming confusing. That balance matters.", rating: 5 },
        ],
      },
      { type: "contact" },
    ],
  },
  {
    slug: "coaching",
    niche: "Coaching / Tutor",
    tagline: "A clean education site with course details, fees, and enquiry-first structure.",
    description:
      "An education website demo with course plans, admissions-oriented CTAs, trust signals, and structured information hierarchy.",
    accentColor: "#1565c0",
    coverEmoji: "🎓",
    industry: "Education",
    tags: ["Courses and batches", "Admissions CTA", "Fee clarity", "Parent trust"],
    businessName: "Apex Academy",
    location: "North Suburban Kolkata",
    phone: "+91 00000 00007",
    email: "admissions@apexacademy.example",
    whatsapp: "910000000007",
    sections: [
      {
        type: "hero",
        headline: "Results-focused coaching for serious students.",
        subheadline:
          "A clear, parent-friendly website that helps coaching institutes explain batches, fees, and outcomes with confidence.",
        cta: "Enquire Now",
      },
      {
        type: "services",
        title: "Courses offered",
        items: [
          { name: "Foundation programme", desc: "Early prep for Class 9 and 10 science students.", price: "₹3,500/mo" },
          { name: "JEE advanced batch", desc: "Structured PCM coaching with tests and revision cycles.", price: "₹5,000/mo" },
          { name: "NEET programme", desc: "Biology-led preparation with mentor tracking.", price: "₹4,500/mo" },
          { name: "Board exam crash course", desc: "High-focus revision for final exam season.", price: "₹8,000" },
        ],
      },
      {
        type: "gallery",
        title: "What the site helps explain",
        images: ["Course structure snapshot", "Faculty credibility block", "Admissions enquiry card"],
      },
      {
        type: "testimonials",
        items: [
          { name: "Souvik D.", text: "A much clearer way to present courses than the typical coaching-centre flyer website.", rating: 5 },
          { name: "Ishita R.", text: "Parents would actually understand the offer here.", rating: 5 },
          { name: "Arnab M.", text: "Simple, clear, and built around enquiries instead of clutter.", rating: 5 },
        ],
      },
      { type: "contact" },
    ],
  },
  {
    slug: "photographer",
    niche: "Photographer",
    tagline: "A striking portfolio site that sells the work before the pitch starts.",
    description:
      "A photographer website demo with premium portfolio presentation, package options, and high-trust booking flow.",
    accentColor: "#212121",
    coverEmoji: "📸",
    industry: "Photography",
    tags: ["Portfolio feel", "Package pricing", "Booking CTA", "Editorial layout"],
    businessName: "Frames by Krishanu",
    location: "Creative District, Kolkata",
    phone: "+91 00000 00008",
    email: "book@framesbykrishanu.example",
    whatsapp: "910000000008",
    sections: [
      {
        type: "hero",
        headline: "Stories told in light.",
        subheadline:
          "A visual-first portfolio built for photographers who need their site to feel artistic, premium, and easy to book from.",
        cta: "Check Availability",
      },
      {
        type: "services",
        title: "Photography packages",
        items: [
          { name: "Wedding essential", desc: "One-day coverage with edited gallery delivery.", price: "₹35,000" },
          { name: "Wedding premium", desc: "Two-day coverage, highlights film, and album planning.", price: "₹75,000" },
          { name: "Portrait session", desc: "One-hour guided shoot with edited selects.", price: "₹4,500" },
          { name: "Brand product shoot", desc: "Commercial photography day rate for product teams.", price: "₹12,000/day" },
        ],
      },
      {
        type: "gallery",
        title: "Portfolio cues",
        images: ["Editorial wedding frame", "Portrait storytelling set", "Product shoot showcase"],
      },
      {
        type: "testimonials",
        items: [
          { name: "Aditi and Rohan", text: "This feels like a real creative portfolio, not a templated business site.", rating: 5 },
          { name: "Tanmoy S.", text: "The package cards and gallery styling are especially strong.", rating: 5 },
          { name: "Priyanka G.", text: "A photographer could absolutely win enquiries with this.", rating: 5 },
        ],
      },
      { type: "contact" },
    ],
  },
  {
    slug: "construction",
    niche: "Construction / Interior",
    tagline: "A project-led portfolio site built to win new contracts on first impression.",
    description:
      "A construction and interior website demo with service depth, proof-oriented layout, and quote-led CTA placement.",
    accentColor: "#e67e22",
    coverEmoji: "🏗️",
    industry: "Construction & Design",
    tags: ["Project portfolio", "Estimate CTA", "Service depth", "Trust-first layout"],
    businessName: "BuildRight Interiors",
    location: "West Kolkata",
    phone: "+91 00000 00009",
    email: "quote@buildrightinteriors.example",
    whatsapp: "910000000009",
    sections: [
      {
        type: "hero",
        headline: "Spaces built to last. Designed to impress.",
        subheadline:
          "A solid lead-generation site for interior and construction firms that need to look capable, organised, and premium.",
        cta: "Get a Free Quote",
      },
      {
        type: "services",
        title: "What we do",
        items: [
          { name: "Home interiors", desc: "Kitchen, wardrobes, ceilings, storage, and finishes.", price: "from ₹800/sqft" },
          { name: "Office fit-out", desc: "Workspace planning, cabins, reception, and brand-led interiors.", price: "from ₹1,200/sqft" },
          { name: "Renovation projects", desc: "Room upgrades, full-home refreshes, and phased rebuilds.", price: "Custom quote" },
          { name: "Planning and 3D visualisation", desc: "Concept development before execution begins.", price: "Custom quote" },
        ],
      },
      {
        type: "gallery",
        title: "Project storytelling",
        images: ["Living room transformation", "Office fit-out concept", "Materials and finishes board"],
      },
      {
        type: "testimonials",
        items: [
          { name: "Amit R.", text: "This gives the firm a much stronger sense of capability and polish.", rating: 5 },
          { name: "Kavita S.", text: "The quote flow and service cards are especially useful here.", rating: 5 },
          { name: "Nikhil P.", text: "A very practical lead-gen direction for design and fit-out work.", rating: 5 },
        ],
      },
      { type: "contact" },
    ],
  },
  {
    slug: "auto-garage",
    niche: "Auto / Garage",
    tagline: "A trustworthy garage website with pricing, services, and WhatsApp booking.",
    description:
      "An automotive service website demo with pricing-led service cards, trust-building messaging, and frictionless contact options.",
    accentColor: "#37474f",
    coverEmoji: "🚗",
    industry: "Automotive",
    tags: ["Service menu", "Pricing cues", "WhatsApp booking", "Trust-focused copy"],
    businessName: "MotorCare Garage",
    location: "South-East Kolkata",
    phone: "+91 00000 00010",
    email: "book@motorcaregarage.example",
    whatsapp: "910000000010",
    sections: [
      {
        type: "hero",
        headline: "Your car deserves honest service.",
        subheadline:
          "An automotive site designed to reassure customers with clear pricing, practical services, and direct booking options.",
        cta: "Book a Service",
      },
      {
        type: "services",
        title: "Services and pricing",
        items: [
          { name: "General service", desc: "Oil, filter, fluid top-up, and safety inspection.", price: "from ₹1,999" },
          { name: "AC service and regas", desc: "Cooling system checks and refill support.", price: "₹2,500" },
          { name: "Dent and paint", desc: "Panel repair, colour matching, and finishing.", price: "Custom quote" },
          { name: "Full detailing", desc: "Interior deep clean and exterior gloss restoration.", price: "from ₹4,999" },
        ],
      },
      {
        type: "gallery",
        title: "Garage proof points",
        images: ["Service bay readiness", "Detailing finish", "Booking-friendly service cards"],
      },
      {
        type: "testimonials",
        items: [
          { name: "Saurav D.", text: "This layout makes the business feel honest and easy to trust.", rating: 5 },
          { name: "Reena M.", text: "Very strong fit for local garages that rely on repeat customers.", rating: 5 },
          { name: "Ajay K.", text: "The pricing and contact flow are exactly what customers need.", rating: 5 },
        ],
      },
      { type: "contact" },
    ],
  },
  {
    slug: "vet-petcare",
    niche: "Vet / Pet Care",
    tagline: "A warm, trustworthy site for pet owners who care deeply about their animals.",
    description:
      "A veterinary website demo with gentle tone, appointment CTA, emergency-first contact cues, and approachable service structure.",
    accentColor: "#27ae60",
    coverEmoji: "🐾",
    industry: "Pet Care",
    tags: ["Appointment booking", "Emergency contact", "Service list", "Warm tone"],
    businessName: "Happy Paws Clinic",
    location: "South Kolkata",
    phone: "+91 00000 00011",
    email: "care@happypawsclinic.example",
    whatsapp: "910000000011",
    sections: [
      {
        type: "hero",
        headline: "Because they deserve the best care.",
        subheadline:
          "A warm, reassuring pet-care website that helps owners feel safe reaching out for appointments and urgent support.",
        cta: "Book an Appointment",
      },
      {
        type: "services",
        title: "Services",
        items: [
          { name: "Vet consultation", desc: "Routine health visits, illness support, and diet guidance.", price: "₹400" },
          { name: "Vaccination", desc: "Puppy and kitten schedules plus annual booster support.", price: "from ₹600" },
          { name: "Grooming session", desc: "Bath, trim, nail care, and gentle handling.", price: "from ₹800" },
          { name: "Emergency care", desc: "Urgent advice routing through WhatsApp-first contact.", price: "Call for pricing" },
        ],
      },
      {
        type: "gallery",
        title: "Care-focused details",
        images: ["Pet-friendly waiting area", "Vet profile emphasis", "Emergency contact prompt"],
      },
      {
        type: "testimonials",
        items: [
          { name: "Sunita B.", text: "Warm and reassuring without losing clarity. Exactly right for pet care.", rating: 5 },
          { name: "Kartik R.", text: "The tone and layout make it easy to trust the clinic.", rating: 5 },
          { name: "Nandita P.", text: "A great example of how to design for anxious pet owners.", rating: 5 },
        ],
      },
      { type: "contact" },
    ],
  },
];

export function getDemoBySlug(slug: string) {
  return demos.find((demo) => demo.slug === slug);
}
