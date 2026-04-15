import { ExternalLink, Figma, Github, Linkedin } from "lucide-react";

import { Tag } from "@/components/ui/Tag";

type SocialPlatform = "github" | "linkedin" | "figma" | "external";

type SocialLink = {
  href: string;
  label: string;
  platform: SocialPlatform;
};

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  figma: Figma,
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
  bio: string;
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

      <p className="preserve-case mt-6 flex-1 text-[17px] leading-[1.82]">{bio}</p>

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
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent-border bg-accent-dim text-accent hover:-translate-y-0.5 hover:border-accent hover:text-text-primary"
              >
                <Icon className="h-4 w-4" />
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
