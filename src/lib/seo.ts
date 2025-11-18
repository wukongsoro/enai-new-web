export const SITE_URL = "https://www.enai.ai";

export const buildAbsoluteUrl = (path?: string) => {
  if (!path) return `${SITE_URL}/social-share-image.png`;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export const buildCanonicalUrl = (path: string = "/") => {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export const defaultKeywords = [
  "AI sales automation",
  "AI BDR software",
  "autonomous SDR platform",
  "AI prospecting tools",
  "AI outbound sales",
  "B2B sales automation",
];

export const primaryGeoRegion = "GB-LND";
