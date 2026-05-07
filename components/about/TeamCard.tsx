import type { ReactNode } from "react";
import { ExternalLink, Figma, Github, Instagram, Linkedin, MessageCircle, Twitter } from "lucide-react";

import { Tag } from "@/components/ui/Tag";

type SocialPlatform = "github" | "linkedin" | "figma" | "instagram" | "threads" | "twitter" | "whatsapp" | "external";

type SocialLink = {
  href: string;
  label: string;
  platform: SocialPlatform;
};

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  figma: Figma,
  instagram: Instagram,
  threads: MessageCircle, // Use MessageCircle as a placeholder for Threads if not in Lucide
  twitter: Twitter,
  whatsapp: MessageCircle,
  external: ExternalLink,
};

export function TeamCard({
  name,
  role,
  bio,
  skills,
  avatarLabel,
  avatarClassName,
  socialLinks = [],
}: {
  name: string;
  role: string;
  bio: ReactNode;
  skills: string[];
  avatarLabel: string;
  avatarClassName: string;
  socialLinks?: SocialLink[];
}) {
  return (
    <article className="page-card-roomy-lg panel">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-full border border-accent-border text-xl font-bold shadow-[0_12px_30px_rgba(0,0,0,0.24)] ${avatarClassName}`}
        >
          {avatarLabel}
        </div>
        <div>
          <p className="card-label">{role}</p>
          <h3 className="mt-2 text-[30px] leading-[1.04]">{name}</h3>
        </div>
      </div>

      <div className="preserve-case mt-6 flex-1 space-y-4 text-[17px] leading-[1.82]">
        {bio}
      </div>

      {socialLinks.length ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {socialLinks.map((item) => {
            const Icon = socialIcons[item.platform];

            return (
              <a
                key={`${name}-${item.label}`}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="social-icon-button"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            );
          })}
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Tag key={skill} className="preserve-case">
            {skill}
          </Tag>
        ))}
      </div>
    </article>
  );
}
