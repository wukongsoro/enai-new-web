import Link from "next/link";
import { ArrowRight } from "lucide-react";

const rows = [
  {
    dimension: "Annual cost",
    sdr: "$380–480K for a four-person team, fully loaded",
    enai: "$4K per month, flat",
  },
  {
    dimension: "Ramp time",
    sdr: "3–6 months to full productivity, per hire",
    enai: "Live in hours",
  },
  {
    dimension: "Coverage",
    sdr: "Business hours, one territory per rep",
    enai: "24/7, every market you sell into",
  },
  {
    dimension: "Consistency",
    sdr: "Varies by rep, resets with every departure",
    enai: "Same playbook on every account",
  },
  {
    dimension: "Audit trail",
    sdr: "Scattered across inboxes and tools",
    enai: "Every action logged and traceable",
  },
];

export default function SdrMathSection() {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-black/45">
            The math
          </p>
          <h2 className="mt-4 text-[34px] leading-[1.1] text-[#1E3A3A] md:text-[48px]">
            An SDR team costs $400K a year.
            <span className="block text-[#1E3A3A]/45">
              The work costs $4K a month.
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/60 md:text-lg">
            ENAI does the research, outreach, and qualification a four-person
            SDR team does — governed, auditable, and live in hours instead of
            quarters.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-black/10">
          <div className="hidden md:grid grid-cols-3 bg-[#1E3A3A] text-white">
            <p className="px-5 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
              Dimension
            </p>
            <p className="px-5 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
              Hiring SDRs
            </p>
            <p className="px-5 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white">
              ENAI
            </p>
          </div>
          {rows.map((row) => (
            <div
              key={row.dimension}
              className="grid grid-cols-1 border-t border-black/10 bg-white first:border-t-0 md:grid-cols-3 md:first:border-t"
            >
              <p className="px-5 pt-4 text-sm font-semibold text-black/75 md:py-4">
                {row.dimension}
              </p>
              <p className="px-5 py-2 text-sm text-black/55 md:py-4">
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-black/40 md:hidden">
                  Hiring SDRs
                </span>
                {row.sdr}
              </p>
              <p className="px-5 pb-4 pt-2 text-sm font-semibold text-[#1E3A3A] md:py-4">
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-black/40 md:hidden">
                  ENAI
                </span>
                {row.enai}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-xl text-xs leading-relaxed text-black/40">
            Headcount estimate based on $80–100K+ fully loaded cost per SDR in
            major US markets, before tooling and management overhead.
          </p>
          <Link
            href="https://calendly.com/enai-ai2024/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#1E3A3A] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#16302F]"
          >
            See the math on your team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
