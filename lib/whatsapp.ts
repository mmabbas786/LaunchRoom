import { siteConfig } from "@/lib/site";
import type { ContactInput, StartInput } from "@/lib/validation";

function cleanPhone(phone: string) {
  return phone.replace(/\D/g, "");
}

export function getWhatsAppHref(message: string) {
  return `https://wa.me/${cleanPhone(siteConfig.phone)}?text=${encodeURIComponent(message)}`;
}

export function getProjectInquiryLabel(projectType: StartInput["projectType"]) {
  switch (projectType) {
    case "Website":
      return "Website inquiry";
    case "Mobile App":
      return "App inquiry";
    case "Both website + app":
      return "Website + app inquiry";
    default:
      return "Project inquiry";
  }
}

export function buildProjectInquiryWhatsAppMessage(projectType: StartInput["projectType"]) {
  switch (projectType) {
    case "Website":
      return "Hello LaunchRoom, I want to discuss website development.";
    case "Mobile App":
      return "Hello LaunchRoom, I want to discuss app development.";
    case "Both website + app":
      return "Hello LaunchRoom, I want to discuss website and app development.";
    default:
      return "Hello LaunchRoom, I need help deciding whether to start with a website, an app, or both.";
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
    values.demoNiche ? `Demo inspiration: ${values.demoNiche}` : null,
    values.sourceRef ? `Source reference: ${values.sourceRef}` : null,
    `Budget: ${values.budget}`,
    `Timeline: ${values.timeline}`,
    `Brand assets: ${values.brandAssets}`,
    `Referral source: ${values.referralSource}`,
    values.referenceUrl ? `Reference: ${values.referenceUrl}` : null,
    "",
    `Project name: ${values.projectName}`,
    "",
    "Brief:",
    values.brief,
  ]
    .filter(Boolean)
    .join("\n");
}
