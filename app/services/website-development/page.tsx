import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Code2,
  Compass,
  Globe,
  LayoutGrid,
  Newspaper,
  Rocket,
  Search,
  Server,
  Sparkles,
  Target,
  Wrench,
  Zap,
} from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { getWhatsAppHref } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Website Development Services | Custom Websites | LaunchRoom",
  description:
    "LaunchRoom builds custom, high-performing websites for businesses, creators, and professionals. From landing pages to custom web solutions, we take you from idea to launch.",
  keywords: [
    "website development services",
    "custom website development",
    "business website development",
    "website development company",
    "web development agency",
    "professional website development",
    "custom web development",
    "portfolio website builder",
    "booking website development",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/website-development`,
  },
  openGraph: {
    title: "Website Development Services | Custom Websites | LaunchRoom",
    description:
      "Custom, high-performing websites built for business credibility, fast performance, and clean mobile responsiveness.",
    url: `${siteConfig.url}/services/website-development`,
    type: "website",
  },
};

const faqs = [
  {
    q: "What types of websites can LaunchRoom build?",
    a: "We build a wide range of websites including business and corporate sites, portfolio showcases, booking and scheduling websites, blogs and content platforms, marketing landing pages, and custom web portals with tailored functionality.",
  },
  {
    q: "Can you build a website if I only have an idea and no technical specification?",
    a: "Yes. Most of our clients come to us with an idea or business requirement rather than a complete technical spec. We help you figure out what pages are needed, what features are essential for launch, and what the best technical solution is.",
  },
  {
    q: "Can you add custom functionality like booking, forms, or portals to a website?",
    a: "Yes. We can integrate interactive contact forms, online booking and appointment workflows, custom quote calculators, and private dashboards or portals when standard static pages are not enough.",
  },
  {
    q: "How long does a website development project take?",
    a: "Standard landing pages and focused business websites typically take 1 to 2 weeks. Comprehensive corporate websites take 2 to 3 weeks, while custom web applications and portals take 2 to 5 weeks depending on scope.",
  },
  {
    q: "Do you handle domain setup, hosting, and going live?",
    a: "Yes. We handle custom domain connections, SSL security certificates, cloud hosting setup (such as Vercel or cloud hosts), DNS records, and Google Search Console indexing as standard parts of our launch process.",
  },
  {
    q: "Do you provide support and maintenance after launch?",
    a: "Yes. Every project includes post-launch warranty support, complete source file handover, and optional ongoing maintenance plans for updates, security checks, bug fixes, and continuous improvements.",
  },
  {
    q: "How do we get started on a website project?",
    a: "You can submit a project brief through our Start a Project page, reach out via our Contact page, or chat directly on WhatsApp. We will discuss your goals and provide a clear scope, timeline, and quote before any work begins.",
  },
];

const jsonLdService = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/services/website-development#service`,
      name: "Website Development Services",
      serviceType: "Website Development",
      provider: {
        "@type": "Organization",
        name: "LaunchRoom",
        url: "https://launchroom.in",
      },
      areaServed: "Worldwide",
      description:
        "Custom website design, development, deployment, and ongoing maintenance for businesses, professionals, startups, and digital products.",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/services/website-development#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

const websiteTypes = [
  {
    icon: Building2,
    title: "Business Websites",
    audience: "Companies, local businesses, agencies, and professional firms",
    description:
      "Establish immediate brand credibility with a clean, modern digital presence that clearly presents your services, value proposition, and customer contact pathways.",
    benefits: [
      "Custom brand presentation",
      "Clear service breakdowns",
      "Lead inquiry forms",
      "Mobile-first responsive layout",
    ],
  },
  {
    icon: Sparkles,
    title: "Portfolio Websites",
    audience: "Creatives, designers, architects, consultants, and photographers",
    description:
      "Showcase your past work, case studies, and achievements with high visual polish, fluid transitions, and typography engineered to leave a memorable impression on potential clients.",
    benefits: [
      "Visual case study layouts",
      "Fast-loading media galleries",
      "Direct inquiry triggers",
      "Minimalist, distraction-free styling",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Booking & Scheduling Websites",
    audience: "Clinics, consultants, coaches, salons, and service specialists",
    description:
      "Allow clients to view available services, select times, submit requirements, or book consultations online without back-and-forth communication overhead.",
    benefits: [
      "Automated appointment booking",
      "Service & pricing menus",
      "Form validation & notifications",
      "Calendar and payment integration",
    ],
  },
  {
    icon: Newspaper,
    title: "Blogs & Content Websites",
    audience: "Publications, thought leaders, educators, and content-driven brands",
    description:
      "Publish articles, guides, and tutorials with structured categorization, search-friendly semantic markup, and lightning-fast page transitions that keep readers engaged.",
    benefits: [
      "Clean editorial typography",
      "Category and tag organization",
      "Structured SEO schema",
      "Modular CMS or markdown workflow",
    ],
  },
  {
    icon: Target,
    title: "High-Converting Landing Pages",
    audience: "Product launches, marketing campaigns, events, and lead capture",
    description:
      "Focused, single-purpose landing pages engineered to drive action, whether you are launching a new product, capturing waitlist signups, or running advertising campaigns.",
    benefits: [
      "Distraction-free conversion focus",
      "Optimized hero sections",
      "Clear call-to-action hierarchy",
      "Analytics & conversion tracking",
    ],
  },
  {
    icon: LayoutGrid,
    title: "Custom Web Solutions & Portals",
    audience: "Businesses requiring tailored functionality beyond standard pages",
    description:
      "When a standard informational website is not enough, we build custom functionality, interactive calculators, client dashboards, and member portals tailored to your specific workflow.",
    benefits: [
      "Interactive tools & calculators",
      "Client portals & dashboards",
      "API integrations & workflows",
      "Scalable custom logic",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    name: "Discover",
    title: "Understand your goals",
    description:
      "We discuss what you want to achieve, who your target visitors are, what problems the site should solve, and what success looks like for your business.",
  },
  {
    number: "02",
    name: "Plan",
    title: "Structure scope & content",
    description:
      "We outline the sitemap, page hierarchy, core messaging, and necessary features so you know exactly what is being built before any design begins.",
  },
  {
    number: "03",
    name: "Design",
    title: "Craft clean, modern UI",
    description:
      "We design layouts focused on visual clarity, accessible contrast, typography, and clear calls to action that guide visitors naturally.",
  },
  {
    number: "04",
    name: "Build",
    title: "Write clean, fast code",
    description:
      "We build the site using modern, efficient web standards—ensuring sub-second load times, smooth interactions, and complete mobile responsiveness.",
  },
  {
    number: "05",
    name: "Test",
    title: "Verify speed & quality",
    description:
      "We test across devices, screen sizes, and modern browsers, validating forms, links, accessibility, and Core Web Vitals performance benchmarks.",
  },
  {
    number: "06",
    name: "Launch",
    title: "Deploy & connect domain",
    description:
      "We set up your custom domain, configure DNS and SSL certificates, deploy to fast cloud hosting, and submit your sitemap to search consoles.",
  },
  {
    number: "07",
    name: "Support",
    title: "Handover & ongoing help",
    description:
      "We hand over full credentials and documentation. We remain available for ongoing updates, maintenance, and future enhancements as your business grows.",
  },
];

export default function WebsiteDevelopmentPage() {
  const whatsappUrl = getWhatsAppHref(
    "Hello LaunchRoom, I want to discuss Website Development for my business.",
  );

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />

      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="pt-6 flex items-center gap-2 font-mono text-[12px] uppercase text-text-muted"
      >
        <Link href="/" className="hover:text-accent">
          Home
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/services" className="hover:text-accent">
          Services
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-accent">Website Development</span>
      </nav>

      {/* Hero Section */}
      <section className="section-shell">
        <AnimatedSection className="panel-dark p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <span className="eyebrow eyebrow-invert">Website Development Services</span>
            <h1 className="page-hero-title mt-6 text-on-dark">
              Custom website development for real-world business needs.
            </h1>
            <p className="mt-6 text-[19px] leading-[1.8] text-on-dark-muted">
              Tell us what you need to build. LaunchRoom helps clarify your requirements,
              crafts a clean user experience, writes fast and reliable code, and handles
              everything needed to launch and support your website.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/start">
                Start a Project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href={whatsappUrl} variant="outline">
                Discuss Your Project
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 border-t border-white/10 pt-8 sm:grid-cols-4">
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Custom Solutions</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Fast Page Speed</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Mobile Responsive</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>End-to-End Launch</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Section: What We Build */}
      <section className="pb-20">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">What We Build</p>
          <h2 className="section-title mt-4">
            Websites and custom web solutions designed for purpose
          </h2>
          <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
            Every business has different goals. We build digital products based on what
            you actually need to achieve—whether that is a credible business presence,
            an appointment booking system, or a tailored web tool.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {websiteTypes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <AnimatedSection
                key={item.title}
                delay={idx * 0.04}
                className="page-card panel flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-text-primary">{item.title}</h3>
                  <p className="mt-2 text-xs font-mono text-accent">{item.audience}</p>
                  <p className="mt-3 text-[15px] leading-[1.7] text-text-secondary">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-border pt-4">
                  <ul className="space-y-2">
                    {item.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-2 text-xs text-text-secondary"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* Section: Not Sure What You Need? */}
      <section className="pb-20">
        <AnimatedSection className="panel-accent p-8 sm:p-12 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="card-label text-text-primary">Advisory &amp; Planning</p>
              <h2 className="mt-3 text-[clamp(28px,3.5vw,42px)] font-extrabold leading-[1.1]">
                Not sure what kind of website you need? That is completely normal.
              </h2>
              <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
                You do not need to arrive with a finished technical specification or know
                which framework to use. We work with you to understand your real-world
                business objectives and guide you toward the right solution.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <Compass className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-text-primary">What should be built</p>
                    <p className="text-sm text-text-secondary">
                      Determining the right page structure, messaging, and layout for your audience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-text-primary">Which features are necessary</p>
                    <p className="text-sm text-text-secondary">
                      Prioritizing features that drive results today and identifying what can wait for later.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Code2 className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-text-primary">The appropriate technical solution</p>
                    <p className="text-sm text-text-secondary">
                      Choosing the right tech for speed, ease of maintenance, and your budget.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact">Discuss What You Need</Button>
                <Button href="/pricing" variant="outline">
                  Explore Pricing
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-[20px] border border-border bg-surface-1 p-6">
                <p className="text-xs font-mono text-accent uppercase tracking-wider">
                  Common Starting Point 01
                </p>
                <p className="mt-2 text-base font-semibold text-text-primary">
                  &ldquo;I need a professional website for my business.&rdquo;
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  We structure your core services, brand story, and clear contact points into
                  a polished site that builds instant credibility with clients.
                </p>
              </div>

              <div className="rounded-[20px] border border-border bg-surface-1 p-6">
                <p className="text-xs font-mono text-accent uppercase tracking-wider">
                  Common Starting Point 02
                </p>
                <p className="mt-2 text-base font-semibold text-text-primary">
                  &ldquo;I want customers to book consultations online.&rdquo;
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  We integrate seamless, self-serve booking workflows and inquiry intake
                  forms that save you hours of administrative time.
                </p>
              </div>

              <div className="rounded-[20px] border border-border bg-surface-1 p-6">
                <p className="text-xs font-mono text-accent uppercase tracking-wider">
                  Common Starting Point 03
                </p>
                <p className="mt-2 text-base font-semibold text-text-primary">
                  &ldquo;I need a custom dashboard or member area.&rdquo;
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  We engineer secure authentication, data views, and custom interactive tools
                  designed specifically for your internal workflow.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Section: Development Process */}
      <section className="pb-20">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Our Process</p>
          <h2 className="section-title mt-4">
            A straightforward, 7-step path from idea to live website
          </h2>
          <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
            We keep our process clear, collaborative, and free of developer jargon. You
            always know what is happening, what comes next, and when your site will launch.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {processSteps.map((step, idx) => (
            <AnimatedSection
              key={step.number}
              delay={idx * 0.03}
              className={`page-card panel flex flex-col justify-between ${
                idx === 6 ? "sm:col-span-2 lg:col-span-3 xl:col-span-2" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-extrabold text-accent">
                    {step.number}
                  </span>
                  <span className="rounded-full border border-border bg-surface-2 px-3 py-0.5 text-xs font-mono text-text-muted uppercase">
                    {step.name}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-text-primary">{step.title}</h3>
                <p className="mt-2.5 text-[14px] leading-[1.7] text-text-secondary">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Section: Website vs Web Application */}
      <section className="pb-20">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Choosing The Right Fit</p>
          <h2 className="section-title mt-4">
            Do you need a website or a custom web application?
          </h2>
          <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
            Understanding the distinction helps ensure you invest in the right level of
            functionality without unnecessary engineering overhead or cost.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Website Column */}
          <AnimatedSection className="panel p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3.5 py-1 text-xs font-mono text-text-primary uppercase">
                <Globe className="h-3.5 w-3.5 text-accent" />
                <span>When you need a website</span>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-text-primary">
                Informational, Brand &amp; Lead Generation
              </h3>
              <p className="mt-3 text-[15px] leading-[1.75] text-text-secondary">
                Best suited when your primary goal is presenting your business, communicating
                your services, showcasing proof of work, and collecting client inquiries.
              </p>

              <div className="mt-6 space-y-2.5">
                {[
                  "Company & agency presence",
                  "Service descriptions & pricing tiers",
                  "Portfolio showcases & case studies",
                  "Campaign landing pages & lead magnets",
                  "Blogs & editorial articles",
                  "Appointment inquiry & consultation forms",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <Button href="/start" className="w-full sm:w-auto">
                Build a Website
              </Button>
            </div>
          </AnimatedSection>

          {/* Web App Column */}
          <AnimatedSection className="panel p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3.5 py-1 text-xs font-mono text-text-primary uppercase">
                <Code2 className="h-3.5 w-3.5 text-accent" />
                <span>When you need a web application</span>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-text-primary">
                Interactive Systems &amp; Software Platforms
              </h3>
              <p className="mt-3 text-[15px] leading-[1.75] text-text-secondary">
                Best suited when users need to sign in, manipulate data, interact with
                dashboards, or use software-driven business workflows.
              </p>

              <div className="mt-6 space-y-2.5">
                {[
                  "User accounts, authentication & roles",
                  "Interactive client dashboards & portals",
                  "Complex multi-step workflows",
                  "Internal business management tools",
                  "SaaS products & digital platforms",
                  "Database-driven web utilities",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link
                href="/services/web-app-development"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-text-primary"
              >
                <span>Explore Web App Development</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Startup MVP Callout */}
        <AnimatedSection className="mt-8 panel-dark p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-accent">
              <Rocket className="h-4 w-4" />
              <span>Building a Startup Idea?</span>
            </div>
            <h3 className="text-xl font-bold text-on-dark mt-1">
              Need a rapid prototype or Minimum Viable Product (MVP)?
            </h3>
            <p className="text-sm text-on-dark-muted mt-1 max-w-2xl">
              If you have a startup concept and need to validate it with real users in weeks
              rather than months, explore our focused MVP engineering sprint.
            </p>
          </div>
          <Button href="/services/startup-mvp-development" variant="outline" className="shrink-0">
            View Startup MVP Services
          </Button>
        </AnimatedSection>
      </section>

      {/* Section: Hosting, Deployment & Maintenance */}
      <section className="pb-20">
        <AnimatedSection className="panel p-8 sm:p-12 lg:p-14">
          <div className="max-w-3xl">
            <p className="eyebrow">Reliability &amp; Support</p>
            <h2 className="section-title mt-4">
              Deployment, hosting, and post-launch maintenance included
            </h2>
            <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
              Launching a website is not just about writing code. We manage the entire
              deployment pipeline, connect your custom domains, configure DNS settings,
              and stay available for ongoing updates and support.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-surface-2 p-5">
              <Server className="h-6 w-6 text-accent" />
              <h3 className="mt-3 text-base font-bold text-text-primary">Cloud Deployment</h3>
              <p className="mt-2 text-xs leading-[1.7] text-text-secondary">
                Deployed to reliable cloud hosting infrastructure (such as Vercel or cloud hosts) with automated SSL and global CDN delivery.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface-2 p-5">
              <Globe className="h-6 w-6 text-accent" />
              <h3 className="mt-3 text-base font-bold text-text-primary">Domain &amp; DNS Setup</h3>
              <p className="mt-2 text-xs leading-[1.7] text-text-secondary">
                Configuration of custom domain records, HTTPS security certificates, and email forwarding setup.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface-2 p-5">
              <Search className="h-6 w-6 text-accent" />
              <h3 className="mt-3 text-base font-bold text-text-primary">Search &amp; Analytics</h3>
              <p className="mt-2 text-xs leading-[1.7] text-text-secondary">
                Sitemap generation, Google Search Console registration, OpenGraph social cards, and GA4 analytics setup.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface-2 p-5">
              <Wrench className="h-6 w-6 text-accent" />
              <h3 className="mt-3 text-base font-bold text-text-primary">Ongoing Maintenance</h3>
              <p className="mt-2 text-xs leading-[1.7] text-text-secondary">
                Post-launch warranty, bug resolution, content updates, and optional monthly maintenance packages.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/pricing">View Support &amp; Package Details</Button>
            <Button href="/contact" variant="outline">
              Ask About Maintenance
            </Button>
          </div>
        </AnimatedSection>
      </section>

      {/* Section: Client Work / Portfolio */}
      <section className="pb-20">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Real Work</p>
          <h2 className="section-title mt-4">
            Built for real businesses with clear outcomes
          </h2>
          <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
            See how LaunchRoom turns client requirements into fast, reliable, and live
            websites.
          </p>
        </AnimatedSection>

        <div className="mt-12">
          <AnimatedSection className="panel p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-accent">
                  <span>Featured Case Study</span>
                  <span>•</span>
                  <span>Business Website</span>
                </div>
                <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-text-primary">
                  New India Stores
                </h3>
                <p className="mt-4 text-[16px] leading-[1.75] text-text-secondary">
                  Single-page business website for a Kolkata-based ship chandling company,
                  designed to establish immediate credibility with international maritime clients.
                  Built with a modern glassmorphism aesthetic, clear service breakdowns, and
                  deployed to Hostinger for low-maintenance reliability.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["HTML5", "CSS3", "Glassmorphism", "Hostinger Deployment", "Mobile Responsive"].map(
                    (tag) => (
                      <span key={tag} className="meta-chip text-xs">
                        {tag}
                      </span>
                    ),
                  )}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button href="/work/new-india-stores">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Link
                    href="/work"
                    className="text-sm font-semibold text-accent hover:text-text-primary"
                  >
                    View All Case Studies →
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-border bg-surface-2 p-6 space-y-4">
                  <p className="text-xs font-mono uppercase text-text-muted">Key Deliverables</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      <span className="text-sm text-text-primary">Launched in 5 days</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      <span className="text-sm text-text-primary">Full mobile responsiveness</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      <span className="text-sm text-text-primary">Clean self-contained codebase</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      <span className="text-sm text-text-primary">Direct WhatsApp &amp; inquiry links</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section: FAQs */}
      <section className="pb-20">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2 className="section-title mt-4">
            Common questions about website development
          </h2>
          <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
            Clear answers to help you understand how we scope, build, launch, and support
            your website.
          </p>
        </AnimatedSection>

        <div className="mt-12 max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <AnimatedSection key={faq.q} delay={idx * 0.03} className="page-card panel p-6 sm:p-7">
              <h3 className="text-lg font-bold text-text-primary">{faq.q}</h3>
              <p className="mt-3 text-[15px] leading-[1.75] text-text-secondary">{faq.a}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Bottom CTA Band */}
      <section className="pb-28">
        <AnimatedSection className="panel-dark p-8 sm:p-12 lg:p-16 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="eyebrow eyebrow-invert">Start Your Project</span>
            <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold text-on-dark leading-[1.1] mt-4">
              Ready to build a website that works for your business?
            </h2>
            <p className="mt-4 text-[17px] leading-[1.8] text-on-dark-muted">
              Share your requirements with us. We will help scope the right solution, choose
              an appropriate technical approach, and guide you smoothly from planning to launch.
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <Button href="/start">
                Start a Project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href="/contact" variant="outline">
                Contact Our Team
              </Button>
            </div>

            <p className="mt-6 text-xs text-on-dark-muted font-mono">
              Prefer direct messaging?{" "}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Chat with us on WhatsApp →
              </a>
            </p>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
