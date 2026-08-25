import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Cpu,
  Database,
  Globe,
  Lock,
  RefreshCw,
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { getWhatsAppHref } from "@/lib/whatsapp";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Cloud Hosting & Vercel Edge Deployment Services | LaunchRoom Studio",
  description:
    "LaunchRoom configures high-speed cloud hosting, Vercel edge deployment, domain DNS routing, automated SSL, and serverless databases for websites and web apps.",
  keywords: [
    "cloud hosting services",
    "Vercel deployment agency",
    "domain DNS setup service",
    "SSL certificate installation",
    "serverless hosting developers",
    "Next.js cloud hosting",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/hosting-deployment`,
  },
  openGraph: {
    title: "Cloud Hosting & Vercel Edge Deployment Services | LaunchRoom Studio",
    description:
      "Lightning-fast edge hosting, custom domain connection, automated SSL, and zero-downtime deployments configured by LaunchRoom.",
    url: `${siteConfig.url}/services/hosting-deployment`,
    type: "website",
  },
};

const faqs = [
  {
    q: "Where will my website or web app be hosted?",
    a: "We deploy primarily to Vercel's global edge network and Cloudflare CDN, backed by serverless cloud databases on Supabase (AWS) or Firebase (Google Cloud). This ensures sub-second response times worldwide with zero server administration overhead.",
  },
  {
    q: "Do you help with purchasing and connecting custom domains?",
    a: "Yes. Whether you already own a domain on GoDaddy, Namecheap, or Google Domains, or need help purchasing one, we configure all DNS records (A, CNAME, TXT, MX) and verify SSL certificate generation for seamless routing.",
  },
  {
    q: "How does continuous deployment (CI/CD) work?",
    a: "Every project is linked to a private GitHub repository. Whenever code updates or new features are pushed to the main branch, automated build pipelines test and deploy the changes to production in seconds with zero downtime.",
  },
  {
    q: "What happens if our website experiences a surge in traffic?",
    a: "Our serverless edge infrastructure automatically scales compute resources to handle traffic spikes smoothly without crashing or requiring manual server resizing.",
  },
  {
    q: "Is hosting and deployment included with your development projects?",
    a: "Yes. Production hosting setup, domain routing, and SSL certificate installation are standard deliverables included in all LaunchRoom website and web application builds.",
  },
];

const jsonLdHosting = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/services/hosting-deployment#service`,
      name: "Hosting & Cloud Deployment Services",
      serviceType: "Cloud Hosting and Deployment",
      provider: {
        "@type": "Organization",
        name: "LaunchRoom",
        url: siteConfig.url,
      },
      areaServed: "Worldwide",
      description:
        "High-performance cloud hosting, Vercel edge deployment, domain DNS management, and SSL certificate setup by LaunchRoom Studio.",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/services/hosting-deployment#faq`,
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

const hostingFeatures = [
  {
    icon: Globe,
    title: "Global Edge CDN Network",
    description: "Cached static assets and serverless execution points located close to your users worldwide for sub-second page loads.",
  },
  {
    icon: Lock,
    title: "Automated SSL & Security Headers",
    description: "Automatic HTTPS certificate issuance, auto-renewals, HSTS protection, and secure HTTP response headers.",
  },
  {
    icon: RefreshCw,
    title: "Zero-Downtime Deployments",
    description: "Instant atomic rollouts and one-click rollbacks via Git integration so updates never interrupt live users.",
  },
  {
    icon: Server,
    title: "Custom Domain & DNS Setup",
    description: "Seamless nameserver, A-record, CNAME, and MX mail record configuration across any domain registrar.",
  },
  {
    icon: Database,
    title: "Serverless Database Backups",
    description: "Automated daily snapshots, point-in-time recovery, and connection pooling for PostgreSQL and Supabase instances.",
  },
  {
    icon: ShieldCheck,
    title: "DDoS & Firewall Protection",
    description: "Enterprise-grade threat protection, automated bot mitigations, and rate-limiting rules.",
  },
];

export default function HostingDeploymentPage() {
  const whatsappUrl = getWhatsAppHref(
    "Hello LaunchRoom, I want to discuss Hosting and Deployment for my website.",
  );

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: "Hosting & Deployment", url: `${siteConfig.url}/services/hosting-deployment` },
  ]);

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHosting) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="pt-6 flex items-center gap-2 font-mono text-[12px] uppercase text-text-muted">
        <Link href="/" className="hover:text-accent">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/services" className="hover:text-accent">Services</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-accent">Hosting &amp; Deployment</span>
      </nav>

      {/* Hero Section */}
      <section className="section-shell">
        <AnimatedSection className="panel-dark p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <span className="eyebrow eyebrow-invert">Cloud Infrastructure</span>
            <h1 className="page-hero-title mt-6 text-on-dark">
              Fast, secure, maintenance-free cloud hosting and deployment.
            </h1>
            <p className="mt-6 text-[19px] leading-[1.8] text-on-dark-muted">
              Stop dealing with slow shared servers and complicated cPanel dashboards.
              LaunchRoom configures high-speed global edge networks, automated SSL certificates, and zero-downtime CI/CD pipelines so your digital product runs smoothly 24/7.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/start?service=hosting">
                Deploy Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href={whatsappUrl} variant="outline">
                Discuss on WhatsApp
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 border-t border-white/10 pt-8 sm:grid-cols-4">
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Global Edge CDN</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Automated SSL</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Zero-Downtime CI/CD</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Included with Builds</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Feature Grid */}
      <section className="pb-20">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Infrastructure Benefits</p>
          <h2 className="section-title mt-4">
            Engineered for speed, security, and effortless reliability
          </h2>
          <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
            Modern serverless hosting eliminates manual server updates, security vulnerabilities, and unpredictable downtime.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hostingFeatures.map((item, idx) => {
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
                  <p className="mt-3 text-[15px] leading-[1.7] text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* Deployment Workflow */}
      <section className="pb-20">
        <AnimatedSection className="panel-accent p-8 sm:p-12 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="card-label text-text-primary">Deployment Flow</p>
              <h2 className="mt-3 text-[clamp(28px,3.5vw,42px)] font-extrabold leading-[1.1]">
                Continuous delivery from code push to global live launch.
              </h2>
              <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
                We connect your code directly to production deployment pipelines. Every update is automatically checked, built, optimized, and pushed live in seconds.
              </p>

              <div className="mt-6 space-y-2.5">
                {[
                  "Domain purchase & DNS record configuration",
                  "Automated SSL security certificate setup",
                  "Vercel Edge & Cloudflare caching optimization",
                  "Database backup routines & monitoring alerts",
                  "Google Search Console domain ownership verification",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/start?service=hosting">Deploy With Us</Button>
                <Button href="/services/website-maintenance" variant="outline">
                  Website Maintenance
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-[24px] border border-border bg-surface-1 p-6 sm:p-8 space-y-4">
              <p className="text-xs font-mono uppercase text-accent tracking-wider">Cloud Platforms We Use</p>
              <div className="space-y-3">
                <div className="rounded-[16px] border border-border p-4 bg-surface-2">
                  <p className="font-semibold text-text-primary text-sm">Vercel Global Edge</p>
                  <p className="mt-1 text-xs text-text-secondary">Sub-second Next.js edge rendering with automatic asset caching worldwide.</p>
                </div>
                <div className="rounded-[16px] border border-border p-4 bg-surface-2">
                  <p className="font-semibold text-text-primary text-sm">Supabase &amp; AWS</p>
                  <p className="mt-1 text-xs text-text-secondary">Enterprise PostgreSQL hosting with automated backups and real-time streams.</p>
                </div>
                <div className="rounded-[16px] border border-border p-4 bg-surface-2">
                  <p className="font-semibold text-text-primary text-sm">Cloudflare DNS &amp; Security</p>
                  <p className="mt-1 text-xs text-text-secondary">Ultra-fast authoritative DNS lookup and web application firewall protection.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* FAQs */}
      <section className="pb-20">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2 className="section-title mt-4">
            Common questions about cloud hosting and deployment
          </h2>
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
            <span className="eyebrow eyebrow-invert">Fast &amp; Reliable</span>
            <h2 className="text-[clamp(32px,4vw,50px)] font-extrabold text-on-dark leading-[1.1] mt-4">
              Need help deploying your website or app?
            </h2>
            <p className="mt-4 text-[17px] leading-[1.8] text-on-dark-muted">
              Let our team handle your domain DNS, SSL certificates, edge hosting, and database configuration.
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <Button href="/start?service=hosting">
                Start Hosting Setup <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href="/contact" variant="outline">
                Contact Our Team
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
