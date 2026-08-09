import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "The Revenue Execution Gap — Past ENAI × IndustryGeniuses Event",
  description:
    "Archive page for the ENAI and IndustryGeniuses revenue execution event held on 24 June 2026.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "The Revenue Execution Gap — Past ENAI × IndustryGeniuses Event",
    description:
      "Archive page for the revenue execution event held on 24 June 2026.",
    type: "website",
  },
};

export default function WebinarPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-[78vh] bg-[#14201F] px-6 pb-24 pt-44 text-white md:pb-32 md:pt-52">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
            Past event · 24 June 2026
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl leading-[1.02] md:text-7xl">
            The Revenue Execution Gap
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
            This ENAI and IndustryGeniuses session has concluded. Explore current,
            market-specific ENAI product runs or request a working session built
            around your revenue workflow.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/demo-library"
              className="inline-flex min-h-12 items-center justify-center bg-white px-7 text-sm font-semibold text-[#14201F] transition-colors hover:bg-white/90"
            >
              Watch current product runs
            </Link>
            <Link
              href="https://calendly.com/enai-ai2024/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center border border-white/25 px-7 text-sm font-semibold text-white transition-colors hover:border-white/55"
            >
              Request a demo
            </Link>
          </div>
          <div className="mt-20 border-t border-white/15 pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
            ENAI × IndustryGeniuses
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
