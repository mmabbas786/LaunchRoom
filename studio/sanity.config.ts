import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schema } from "../sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "86z4ipp6";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  title: "LaunchRoom Editorial Studio",
  schema,
  plugins: [structureTool()],
});
