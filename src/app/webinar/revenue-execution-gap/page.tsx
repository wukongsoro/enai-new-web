import type { Metadata } from "next";
import WebinarClient from "./webinar-client";

export const metadata: Metadata = {
  title: "The Revenue Execution Gap — ENAI × IndustryGeniuses Live Webinar",
  description:
    "Join ENAI & IndustryGeniuses for a free live webinar on 24 June 2026. Three senior operators. One live session. A blueprint you can act on the next morning.",
  openGraph: {
    title: "The Revenue Execution Gap — ENAI × IndustryGeniuses Live Webinar",
    description:
      "Why CPG & B2B leaders have the data, the tools — and still miss the number. Free live webinar 24 June 2026 · 2:00 PM GMT.",
    type: "website",
  },
};

export default function WebinarPage() {
  return <WebinarClient />;
}
