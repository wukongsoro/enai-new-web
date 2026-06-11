import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { ArrowRight, ArrowUpRight, CornerDownLeft } from "lucide-react";
import DemoGrid from "./demo-grid";

export const metadata: Metadata = {
  title: "Demo Library | ENAI",
  description:
    "Watch ENAI revenue workflow demos for B2B teams and logistics operators.",
  keywords: [
    "ENAI demo library",
    "revenue workflow demos",
    "B2B revenue demo",
    "logistics revenue workflow",
    "transport revenue workflow",
  ],
  openGraph: {
    title: "Demo Library | ENAI",
    description:
      "Watch ENAI revenue workflow demos for B2B teams and logistics operators.",
    type: "website",
  },
};

const quickPrompts = [
  { text: "Show me the B2B revenue motion…", href: "#library" },
  { text: "How does ENAI sell into logistics lanes…", href: "#library" },
  { text: "Watch the founders at Web Summit Qatar…", href: "#library" },
];

export default function DemoLibraryPage() {
  return (
    <>
      <Navigation />
      <main id="all" className="min-h-screen bg-[#F5F1ED] pt-36 md:pt-44">
        {/* Hero */}
        <section className="px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-black/45">
                  Demo Library <span className="mx-2 text-black/20">/</span> 06 sessions
                </p>
                <h1 className="mt-5 max-w-3xl text-[44px] leading-[1.02] text-black md:text-[64px] lg:text-[76px]">
                  Watch ENAI run the motion.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-black/60">
                  Short product walkthroughs showing how ENAI handles account research,
                  stakeholder mapping, governed outreach, qualification, and handoff in
                  specific revenue motions.
                </p>
              </div>

              {/* Command dialog */}
              <div className="min-w-0 lg:justify-self-end w-full max-w-lg">
                <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_24px_60px_-24px_rgba(30,58,58,0.25)]">
                  <div className="flex items-center justify-between border-b border-black/[0.07] px-5 py-3.5">
                    <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-black/40">
                      Ask ENAI
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#1E3A3A]/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1E3A3A]" />
                      Online
                    </span>
                  </div>
                  <div className="flex items-center gap-3 px-5 py-4">
                    <p className="min-w-0 flex-1 truncate text-[15px] text-black/45">
                      Ask for a walkthrough, type <span className="font-mono text-black/60">@</span> to add context
                    </p>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1E3A3A] text-white">
                      <CornerDownLeft className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <div className="border-t border-black/[0.07] px-2 py-2">
                    {quickPrompts.map((prompt) => (
                      <Link
                        key={prompt.text}
                        href={prompt.href}
                        className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-black/65 transition-colors hover:bg-[#F5F1ED] hover:text-black"
                      >
                        {prompt.text}
                        <ArrowUpRight className="h-3.5 w-3.5 text-black/25 transition-colors group-hover:text-black/60" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Library */}
        <section id="library" className="bg-[#14201F] px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <DemoGrid />
          </div>
        </section>

        {/* Closing CTA */}
        <section className="px-6 pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] bg-[#1E3A3A] text-white">
            <div className="grid gap-10 p-10 md:p-14 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-white/50">
                  Live session <span className="mx-2 text-white/20">/</span> 30 min
                </p>
                <h2 className="mt-4 max-w-2xl text-3xl text-white md:text-[40px] md:leading-[1.1]">
                  See it running on your market, not a sample one.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65">
                  Bring your ICP and one workflow you want off your team&apos;s plate.
                  We&apos;ll run ENAI against it live.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  href="https://calendly.com/enai-ai2024/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#1E3A3A] transition-colors hover:bg-white/90"
                >
                  Book a live walkthrough
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50"
                >
                  View pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
