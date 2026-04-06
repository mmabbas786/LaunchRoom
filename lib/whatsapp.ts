import { siteConfig } from "@/lib/site";
import type { ContactInput, StartInput } from "@/lib/validation";

function cleanPhone(phone: string) {
  return phone.replace(/\D/g, "");
}

export function getWhatsAppHref(message: string) {
  return `https://wa.me/${cleanPhone(siteConfig.phone)}?text=${encodeURIComponent(message)}`;
}

export function buildContactWhatsAppMessage(values: ContactInput) {
  return [
    "Hello Launchroom, I want to discuss a project.",
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
    "Hello Launchroom, here is my project brief.",
    "",
    `Full name: ${values.fullName}`,
    `Email: ${values.email}`,
    values.company ? `Company: ${values.company}` : null,
    `Country: ${values.country}`,
    `Project type: ${values.projectType}`,
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
