import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { AppItem } from "@/data/apps";

function statusConfig(status: AppItem["status"]) {
  switch (status) {
    case "live":
      return { label: "Live on Play Store", variant: "success" as const };
    case "soon":
      return { label: "Coming soon", variant: "accent" as const };
    default:
      return { label: "In development", variant: "muted" as const };
  }
}

export function AppCard({
  app,
  compact = false,
}: {
  app: AppItem;
  compact?: boolean;
}) {
  const status = statusConfig(app.status);

  return (
    <Card
      className={[
        compact
          ? "horizontal-card w-[min(100%,340px)] shrink-0 p-6 sm:w-[360px]"
          : "h-full p-7 sm:p-8",
        "flex flex-col",
      ].join(" ")}
      featured={app.status === "live" && !compact}
    >
      <div className="flex items-start justify-between gap-4">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-[18px] border-2 border-black text-2xl shadow-[4px_4px_0_rgba(0,0,0,0.16)]"
          style={{ background: app.iconBg }}
        >
          {app.iconEmoji}
        </div>
        <Badge variant={status.variant}>{status.label}</Badge>
      </div>

      <div className="mt-6">
        <p className="card-label">{app.category}</p>
        <h3 className="mt-3 text-[28px] leading-[1.05]">{app.name}</h3>
        <p className="mt-4 text-[17px] leading-[1.78]">{app.desc}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="meta-chip">Android-first</span>
        <span className="meta-chip">Launchroom build</span>
      </div>

      {!compact && app.playUrl ? (
        <div className="mt-8">
          <Button href={app.playUrl} variant="ghost">
            View on Play Store
          </Button>
        </div>
      ) : null}
    </Card>
  );
}
