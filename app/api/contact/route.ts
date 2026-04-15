import { Resend } from "resend";

import { siteConfig } from "@/lib/site";
import { contactSchema } from "@/lib/validation";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        { error: "Please fill in all required contact form fields." },
        { status: 400 },
      );
    }

    if (!resend) {
      return Response.json(
        { error: "RESEND_API_KEY is not configured on the server." },
        { status: 500 },
      );
    }

    const { name, email, company, subject, message } = parsed.data;

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "LaunchRoom Contact <onboarding@resend.dev>",
      to: siteConfig.email,
      reply_to: email,
      subject: `New contact: ${subject} from ${name}`,
      html: `
        <h2>New LaunchRoom contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "N/A")}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br/>")}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending the email.",
      },
      { status: 500 },
    );
  }
}
