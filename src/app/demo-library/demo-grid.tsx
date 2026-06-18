"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const categories = ["All", "Product demos", "Industries", "Founders & events"] as const;
type Category = (typeof categories)[number];

interface DemoEntry {
  id: string;
  coverTitle: [string, string];
  cover: string;
  title: string;
  by: string;
  category: Exclude<Category, "All">;
  youtubeId?: string;
  video?: string;
  href?: string;
  description: string;
  features: string[];
  meta: { label: string; value: string }[];
}

const entries: DemoEntry[] = [
  {
    id: "b2b",
    coverTitle: ["B2B Revenue", "Workflow"],
    cover: "bg-gradient-to-br from-[#0F1B1A] via-[#1E3A3A] to-[#46615C]",
    title: "B2B Revenue Workflow",
    by: "Nikhil Nehra",
    category: "Product demos",
    youtubeId: "eK7Qt-ep4_A",
    description:
      "From account signal to researched account, mapped stakeholders, governed outreach, and qualified handoff — one continuous run.",
    features: [
      "Researches accounts before outreach",
      "Maps the full buying committee",
      "Runs governed, on-brand sequences",
      "Books meetings with context attached",
    ],
    meta: [
      { label: "Motion", value: "Outbound + inbound" },
      { label: "Runtime", value: "2 min" },
      { label: "Audience", value: "Revenue teams" },
    ],
  },
  {
    id: "logistics",
    coverTitle: ["Logistics &", "Transport"],
    cover: "bg-gradient-to-br from-[#101817] via-[#27403C] to-[#5C7A52]",
    title: "Logistics & Transport Workflow",
    by: "Nikhil Nehra",
    category: "Industries",
    youtubeId: "NIvogHJK9wM",
    description:
      "A market-specific walkthrough for teams selling across lanes, shippers, carriers, and time-sensitive transport opportunities.",
    features: [
      "Reads lane, route, and capacity context",
      "Researches shippers and decision makers",
      "Localizes outreach by region",
      "Hands off with lane economics attached",
    ],
    meta: [
      { label: "Motion", value: "Lane-based outbound" },
      { label: "Runtime", value: "1 min" },
      { label: "Audience", value: "Logistics operators" },
    ],
  },
  {
    id: "healthcare",
    coverTitle: ["Healthcare", "Revenue Workflow"],
    cover: "bg-gradient-to-br from-[#0F1B1A] via-[#234440] to-[#4C7268]",
    title: "Healthcare Revenue Workflow",
    by: "Nikhil Nehra",
    category: "Industries",
    youtubeId: "FgM6f3LeLVI",
    description:
      "A market-specific walkthrough for teams selling into healthcare — mapping complex buying committees and running compliant, governed outreach to the right decision makers.",
    features: [
      "Maps complex healthcare buying committees",
      "Adds clinical and operational context",
      "Keeps outreach compliant and governed",
      "Hands off qualified, sales-ready meetings",
    ],
    meta: [
      { label: "Motion", value: "Committee-led outbound" },
      { label: "Runtime", value: "1 min" },
      { label: "Audience", value: "Healthcare revenue teams" },
    ],
  },
  {
    id: "wholesale",
    coverTitle: ["Wholesale &", "B2B Retail"],
    cover: "bg-gradient-to-br from-[#15110D] via-[#33291A] to-[#7A6A3E]",
    title: "Wholesale & B2B Retail Workflow",
    by: "Nikhil Nehra",
    category: "Industries",
    youtubeId: "thDNJlTN0og",
    description:
      "Built for wholesale and B2B retail teams — finding buyers across distributors and channels, then running governed outreach that turns demand signals into booked meetings.",
    features: [
      "Finds buyers across distributors and channels",
      "Reads demand and reorder signals",
      "Runs governed, account-aware sequences",
      "Books meetings with buyer context attached",
    ],
    meta: [
      { label: "Motion", value: "Channel outbound" },
      { label: "Runtime", value: "1 min" },
      { label: "Audience", value: "Wholesale & B2B retail" },
    ],
  },
  {
    id: "founders",
    coverTitle: ["Founders at", "Web Summit Qatar"],
    cover: "bg-gradient-to-br from-[#171310] via-[#3A2B1A] to-[#8A5B2B]",
    title: "ENAI at Web Summit Qatar 2026",
    by: "Nikhil Nehra & Zeeshan Idrees",
    category: "Founders & events",
    video: "https://www.omnitech.capital/nikhil-zeeshan-doha-summit-2026.mp4",
    description:
      "Co-founders Nikhil Nehra and Zeeshan Idrees on stage at Doha — one of ten agentic AI companies selected from London — on governed autonomous execution.",
    features: [
      "Why autonomous execution needs governance",
      "How revenue teams adopt agents safely",
      "Top 10 Agentic AI selection, London 2026",
      "The road to Web Summit Qatar 2026",
    ],
    meta: [
      { label: "Format", value: "Stage talk" },
      { label: "Runtime", value: "1 min" },
      { label: "Location", value: "Doha, Qatar" },
    ],
  },
  {
    id: "webinar",
    coverTitle: ["The Revenue", "Execution Gap"],
    cover: "bg-gradient-to-br from-[#121A19] via-[#1E3A3A] to-[#A88A57]",
    title: "Live Webinar: Revenue Execution in Practice",
    by: "ENAI Team",
    category: "Founders & events",
    href: "/webinar/revenue-execution-gap",
    description:
      "A live working session on closing the gap between revenue strategy and day-to-day execution — 24 June 2026.",
    features: [],
    meta: [],
  },
];

function DemoCard({ entry, onOpen }: { entry: DemoEntry; onOpen: () => void }) {
  // YouTube serves a 120x90 gray placeholder for scheduled/unpublished videos.
  // We only reveal the thumbnail once a real (>200px wide) frame loads.
  const [thumbReady, setThumbReady] = useState(false);
  const thumb = entry.youtubeId
    ? `https://i.ytimg.com/vi/${entry.youtubeId}/maxresdefault.jpg`
    : null;

  const card = (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] text-left transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]">
      {/* Cover */}
      <div className={`relative aspect-video overflow-hidden ${entry.cover}`}>
        {thumb && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumb}
            alt=""
            aria-hidden
            loading="lazy"
            onLoad={(e) => {
              if (e.currentTarget.naturalWidth > 200) setThumbReady(true);
            }}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              thumbReady ? "opacity-45 group-hover:opacity-55" : "opacity-0"
            }`}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/25" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-white/75 backdrop-blur-sm">
          {entry.category}
        </span>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="font-display text-[26px] leading-[1.08] text-white md:text-[30px]">
            {entry.coverTitle[0]}
            <br />
            <em>{entry.coverTitle[1]}</em>
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <p className="text-[17px] font-medium leading-snug text-white">{entry.title}</p>
        <div className="mt-5 flex items-center justify-between gap-3 text-sm">
          <span className="truncate text-white/45">By: {entry.by}</span>
          <span className="flex shrink-0 items-center gap-1.5 font-medium text-white/85 transition-colors group-hover:text-white">
            {entry.href ? "View event" : "Watch video"}
            {entry.href ? (
              <ArrowUpRight className="h-4 w-4" />
            ) : (
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            )}
          </span>
        </div>
      </div>
    </article>
  );

  if (entry.href) {
    return (
      <Link href={entry.href} className="block h-full">
        {card}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onOpen} className="block h-full text-left">
      {card}
    </button>
  );
}

export default function DemoGrid() {
  const [active, setActive] = useState<Category>("All");
  const [open, setOpen] = useState<DemoEntry | null>(null);

  const visible = entries.filter(
    (entry) => active === "All" || entry.category === active
  );

  return (
    <div>
      {/* Header row */}
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="text-3xl text-white md:text-4xl">Browse by category</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === category
                  ? "border-white bg-white text-[#14201F]"
                  : "border-white/15 text-white/65 hover:border-white/35 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((entry) => (
          <DemoCard key={entry.id} entry={entry} onOpen={() => setOpen(entry)} />
        ))}
      </div>

      {/* Dialog */}
      <Dialog open={open !== null} onOpenChange={(value) => !value && setOpen(null)}>
        <DialogContent className="max-h-[92vh] w-[calc(100%-2rem)] gap-0 overflow-y-auto border-white/10 bg-[#1B2423] p-0 text-white sm:max-w-4xl [&_[data-slot=dialog-close]]:right-6 [&_[data-slot=dialog-close]]:top-6 [&_[data-slot=dialog-close]]:rounded-lg [&_[data-slot=dialog-close]]:bg-white/10 [&_[data-slot=dialog-close]]:p-2 [&_[data-slot=dialog-close]]:text-white">
          {open && (
            <div className="p-7 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white/45">
                    {open.category}
                  </p>
                  <DialogTitle className="mt-3 font-display text-3xl font-normal leading-tight text-white md:text-4xl">
                    {open.title}
                  </DialogTitle>
                  <DialogDescription className="mt-4 text-base leading-relaxed text-white/60">
                    {open.description}
                  </DialogDescription>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href="https://calendly.com/enai-ai2024/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#14201F] transition-colors hover:bg-white/90"
                    >
                      Book a demo
                    </Link>
                    <Link
                      href="/pricing"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/45"
                    >
                      View pricing
                    </Link>
                  </div>
                </div>
                <ul className="space-y-3 lg:pr-10 lg:pt-1">
                  {open.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[15px] text-white/80">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10">
                        <Check className="h-3 w-3 text-white/80" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {open.youtubeId ? (
                <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-black">
                  <iframe
                    key={open.id}
                    className="aspect-video w-full"
                    src={`https://www.youtube-nocookie.com/embed/${open.youtubeId}?rel=0`}
                    title={open.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : open.video ? (
                <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-black">
                  <video
                    key={open.id}
                    className="aspect-video w-full object-contain"
                    src={open.video}
                    controls
                    playsInline
                    preload="metadata"
                  />
                </div>
              ) : null}

              {open.meta.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-x-10 gap-y-3">
                  {open.meta.map((item) => (
                    <div key={item.label}>
                      <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white/35">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-white/80">{item.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
