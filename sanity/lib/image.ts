import { createImageUrlBuilder } from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlForImage = (source: Image | string | undefined | null) => {
  if (!source) return undefined;
  if (typeof source === "string") return source;
  return imageBuilder?.image(source).auto("format").fit("max").url();
};
