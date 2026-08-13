"use client";

import { useState } from "react";
import { Mail, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-14">
      <div className="page-shell">
        <div className="panel-accent relative overflow-hidden p-8 sm:p-12 lg:p-14">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-dim border border-accent-border text-accent">
              <Mail className="h-6 w-6" />
            </div>

            <h2 className="text-[30px] font-display font-extrabold text-text-primary sm:text-[40px]">
              Get the LaunchRoom Brief
            </h2>

            <p className="text-[16px] leading-[1.75] text-text-secondary sm:text-[18px]">
              “A concise daily email covering AI, startups, software launches, cloud, and the most important tech stories.”
            </p>

            {submitted ? (
              <div className="inline-flex items-center gap-3 rounded-2xl border border-accent/40 bg-accent-dim px-6 py-4 text-accent font-medium">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <span>You&apos;re subscribed to the LaunchRoom Brief. Check your inbox daily!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto flex flex-col sm:flex-row gap-3 max-w-md pt-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-h-[50px] px-4 text-[15px]"
                />
                <Button type="submit" className="min-h-[50px] px-6 text-[15px] shrink-0 justify-center">
                  <span>Subscribe</span>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            )}

            <p className="text-[12px] text-text-muted font-mono">
              Zero spam. Unsubscribe anytime in 1-click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
