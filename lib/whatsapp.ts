import { siteConfig } from "@/lib/site";
import type { ContactInput, StartInput, StartProjectType } from "@/lib/validation";

function cleanPhone(phone: string) {
  return phone.replace(/\D/g, "");
}

export function getWhatsAppHref(message: string) {
  return `https://wa.me/${cleanPhone(siteConfig.phone)}?text=${encodeURIComponent(message)}`;
}

export function getProjectInquiryLabel(projectType: StartProjectType) {
  switch (projectType) {
    case "Business website":
    case "Landing page":
    case "Portfolio website":
    case "Booking website":
    case "E-commerce website":
      return "Website inquiry";
    case "Custom website":
    case "Web application":
      return "Web solution inquiry";
    case "SaaS":
      return "SaaS platform inquiry";
    case "Startup MVP":
      return "Startup MVP inquiry";
    case "Website maintenance":
      return "Maintenance inquiry";
    case "Hosting/deployment":
      return "Hosting & deployment inquiry";
    default:
      return "Project consultation inquiry";
  }
}

export function buildProjectInquiryWhatsAppMessage(projectType: StartProjectType) {
  switch (projectType) {
    case "Business website":
    case "Landing page":
    case "Portfolio website":
    case "Booking website":
    case "E-commerce website":
      return `Hello LaunchRoom, I want to discuss a ${projectType.toLowerCase()} project.`;
    case "Custom website":
    case "Web application":
      return `Hello LaunchRoom, I want to discuss building a ${projectType.toLowerCase()}.`;
    case "SaaS":
      return "Hello LaunchRoom, I want to discuss building a SaaS platform.";
    case "Startup MVP":
      return "Hello LaunchRoom, I want to discuss building a Startup MVP.";
    case "Website maintenance":
      return "Hello LaunchRoom, I want to discuss ongoing website maintenance.";
    case "Hosting/deployment":
      return "Hello LaunchRoom, I want to discuss hosting and domain deployment.";
    default:
      return "Hello LaunchRoom, I need advice on the best website or web solution to build first.";
  }
}

export function buildContactWhatsAppMessage(values: ContactInput) {
  return [
    "Hello LaunchRoom, I want to discuss a project.",
    "",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    values.company ? `Company: ${values.company}` : null,
    `Subject: ${values.subject}`,
    "",
    "Message:",
    values.message,
  ]
    .filter(Boolean)
    .join("\n");
}

export function buildStartWhatsAppMessage(values: StartInput) {
  return [
    values.demoNiche
      ? `Hello LaunchRoom, I want to discuss a project based on your ${values.demoNiche} demo.`
      : buildProjectInquiryWhatsAppMessage(values.projectType),
    "",
    `Full name: ${values.fullName}`,
    `Email: ${values.email}`,
    values.company ? `Company: ${values.company}` : null,
    `Country: ${values.country}`,
    `Project type: ${values.projectType}`,
    values.hasExistingWebsite ? `Existing website: ${values.hasExistingWebsite}` : null,
    values.demoNiche ? `Demo inspiration: ${values.demoNiche}` : null,
    values.sourceRef ? `Source reference: ${values.sourceRef}` : null,
    `Budget: ${values.budget}`,
    `Timeline: ${values.timeline}`,
    `Brand assets: ${values.brandAssets}`,
    `Referral source: ${values.referralSource}`,
    values.referenceUrl ? `Reference URL: ${values.referenceUrl}` : null,
    "",
    `Project name: ${values.projectName}`,
    "",
    "Brief:",
    values.brief,
  ]
    .filter(Boolean)
    .join("\n");
}
