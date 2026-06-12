"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

// Live, public product recording (Wholesale & B2B Retail run).
const VIDEO_ID = "thDNJlTN0og";

export default function RealRunSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="real-run" className="bg-[#14201F] px-6 py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-white/45">
              Proof <span className="mx-2 text-white/20">/</span> Unedited recording
            </p>
            <h2 className="mt-4 text-[36px] leading-[1.08] text-white md:text-[52px]">
              Watch a real run.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/60 md:text-lg">
              No deck, no diagram. This is ENAI working a live workflow —
              finding buyers, writing governed outreach, and booking the
              meeting.
            </p>
            <Link
              href="/demo-library"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/45"
            >
              Browse the demo library
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Viewer */}
          <div className="min-w-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-black/40">
            <div className="flex items-center justify-between px-5 py-3">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </span>
                <span className="hidden font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white/50 sm:block">
                  ENAI — WHOLESALE_B2B_RETAIL.RUN
                </span>
              </div>
              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                Rec
              </span>
            </div>

            {playing ? (
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&autoplay=1`}
                title="ENAI product run — Wholesale & B2B Retail workflow"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label="Play the product recording"
                className="group relative block aspect-video w-full"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/20" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#14201F] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)] transition-transform duration-300 group-hover:-translate-y-0.5">
                    <PlayCircle className="h-5 w-5" />
                    Watch the run · 2 min
                  </span>
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
