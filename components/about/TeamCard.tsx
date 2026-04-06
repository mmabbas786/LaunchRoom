import { Tag } from "@/components/ui/Tag";

export function TeamCard({
  name,
  role,
  bio,
  skills,
  avatarLabel,
  avatarClassName,
}: {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  avatarLabel: string;
  avatarClassName: string;
}) {
  return (
    <article className="panel p-7 sm:p-8">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-[18px] border-2 border-black text-xl font-bold ${avatarClassName}`}
        >
          {avatarLabel}
        </div>
        <div>
          <p className="card-label">{role}</p>
          <h3 className="mt-2 text-[30px] leading-[1.04]">{name}</h3>
        </div>
      </div>

      <p className="mt-6 text-[17px] leading-[1.82]">{bio}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </div>
    </article>
  );
}
