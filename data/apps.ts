export type AppStatus = "live" | "soon" | "dev";

export type AppItem = {
  name: string;
  category: string;
  desc: string;
  status: AppStatus;
  iconBg: string;
  iconEmoji: string;
  playUrl: string | null;
};

export const pdfVaultFeatures = [
  "Compress",
  "Merge",
  "Split",
  "Scan",
  "Sign",
  "Convert",
] as const;

export const apps: AppItem[] = [];
