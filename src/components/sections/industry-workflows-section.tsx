import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/lib/industry-data";

export default function IndustryWorkflowsSection() {
  return (
    <section className="bg-[#173C3A] px-6 py-20 text-white md:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/15 pb-14 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white/45">
              Vertical execution
            </p>
            <h2 className="mt-5 max-w-4xl text-[42px] leading-[1.04] md:text-[64px]">
              Different markets. Different buying systems.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-white/65 lg:justify-self-end md:text-lg">
            ENAI is configured around what creates demand, who owns the decision, what can be said, and what evidence a seller needs before taking over.
          </p>
        </div>

        <div className="grid md:grid-cols-2 md:gap-x-12">
          {industries.map((industry, index) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group grid grid-cols-[38px_1fr_auto] items-center gap-4 border-b border-white/12 py-5 transition-colors hover:border-white/35"
            >
              <span className="font-mono text-[10px] text-white/30">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-lg text-white md:text-xl">{industry.name}</span>
              <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-white/40">
                <span className="hidden sm:inline">{industry.proof}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/industries"
          className="mt-10 inline-flex items-center gap-2 border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#173C3A]"
        >
          Explore industry workflows
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
