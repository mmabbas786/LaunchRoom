"use client";

type AnalyticsEventName =
  | "start_project_click"
  | "service_cta_click"
  | "demo_view"
  | "demo_start_project"
  | "work_view"
  | "contact_submit"
  | "intake_step_completed"
  | "intake_completed"
  | "whatsapp_click";

interface AnalyticsEventParams {
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    gtag?: (
      command: "event",
      action: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}

/**
 * Track custom user engagement events across Google Analytics (GA4)
 */
export function trackEvent(
  eventName: AnalyticsEventName,
  params?: AnalyticsEventParams,
) {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }
  } catch {
    // Fail silently in development/test environments
  }
}

export function trackStartProjectClick(source: string, additional?: AnalyticsEventParams) {
  trackEvent("start_project_click", { source, ...additional });
}

export function trackServiceCtaClick(serviceSlug: string, ctaName: string) {
  trackEvent("service_cta_click", { service: serviceSlug, cta: ctaName });
}

export function trackDemoView(demoSlug: string, industry: string) {
  trackEvent("demo_view", { demo: demoSlug, industry });
}

export function trackDemoStartProject(demoSlug: string) {
  trackEvent("demo_start_project", { demo: demoSlug });
}

export function trackWorkView(caseStudySlug: string) {
  trackEvent("work_view", { case_study: caseStudySlug });
}

export function trackWhatsAppClick(source: string) {
  trackEvent("whatsapp_click", { source });
}

export function trackIntakeStepCompleted(stepNumber: number, stepName: string) {
  trackEvent("intake_step_completed", { step_number: stepNumber, step_name: stepName });
}

export function trackIntakeCompleted(projectType: string, currency: string) {
  trackEvent("intake_completed", { project_type: projectType, currency });
}
