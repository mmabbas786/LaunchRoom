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

export const apps: AppItem[] = [
  {
    name: "PDF Vault",
    category: "Productivity / Tools",
    desc: "6-in-1 PDF toolkit. Compress, merge, split, scan, sign, convert.",
    status: "live",
    iconBg: "#1a1f2e",
    iconEmoji: "📄",
    playUrl: "https://play.google.com/store/apps/developer?id=Launchroom",
  },
  {
    name: "Roast My IPL",
    category: "Sports / Entertainment",
    desc: "AI-powered IPL 2026 team roast generator. Viral, funny, shareable.",
    status: "soon",
    iconBg: "#1f1a0a",
    iconEmoji: "🏏",
    playUrl: null,
  },
];
