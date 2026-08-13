interface AdSlotProps {
  position: "below-headline" | "mid-article" | "before-faqs" | "sidebar";
  className?: string;
}

export function AdSlot({ position, className = "" }: AdSlotProps) {
  const positionLabels = {
    "below-headline": "Sponsored Intelligence / Ad Slot",
    "mid-article": "Advertisement / Industry Partner Slot",
    "before-faqs": "Sponsored Content Slot",
    sidebar: "Partner Briefing Slot",
  };

  return (
    <div
      className={`my-8 overflow-hidden rounded-xl border border-dashed border-white/10 bg-surface-1/40 p-4 text-center ${className}`}
      aria-label="Advertisement"
    >
      <div className="flex flex-col items-center justify-center py-4 space-y-1">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-disabled">
          ADVERTISEMENT
        </span>
        <span className="text-[12px] font-medium text-text-muted">
          {positionLabels[position]}
        </span>
      </div>
    </div>
  );
}
