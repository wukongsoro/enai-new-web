import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { industries } from "@/lib/industry-data";

export const metadata: Metadata = {
  title: "Industries | ENAI Vertical Revenue Execution",
  description:
    "See how ENAI configures governed revenue execution across logistics, healthcare, wholesale, industrials, professional services, private equity, financial services, technology, recruitment, energy, and telecommunications.",
  openGraph: {
    title: "Industries | ENAI Vertical Revenue Execution",
    description: "Vertical revenue workflows where context, controls, and buying committees change the work.",
    type: "website",
  },
};

export default function IndustriesPage() {
  const demonstratedIndustries = industries.filter((industry) => industry.proof === "Demo available");
  const additionalModels = industries.filter((industry) => industry.proof === "Workflow model");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "ENAI industry workflows",
            description: "Governed revenue execution for complex vertical markets.",
            mainEntity: industries.map((industry) => ({
              "@type": "Service",
              name: `ENAI for ${industry.name}`,
              description: industry.summary,
              url: `https://enai.ai/industries/${industry.slug}`,
            })),
          }),
        }}
      />
      <Navigation />
      <main className="bg-white">
        <section className="bg-[#173C3A] px-6 pb-24 pt-40 text-white md:pb-32 md:pt-48 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white/45">Vertical execution</p>
            <div className="mt-7 grid gap-10 lg:grid-cols-[0.7fr_0.3fr] lg:items-end">
              <h1 className="max-w-5xl text-[48px] leading-[1.02] md:text-[76px] lg:text-[88px]">
                The market changes the work.
              </h1>
              <p className="max-w-sm text-base leading-7 text-white/64 md:text-lg">
                Signals, buying committees, permitted claims, and seller context differ by industry. ENAI is configured around those differences.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="section-eyebrow">Initial focus</p>
              <h2 className="section-title mt-4 text-black">Three markets you can watch today.</h2>
            </div>

            <div className="mt-16 divide-y divide-black/10 border-y border-black/10">
              {demonstratedIndustries.map((industry, index) => (
                <article key={industry.slug} className="grid gap-8 py-10 md:grid-cols-[64px_0.85fr_1.15fr] md:items-center md:py-14">
                  <span className="font-mono text-xs text-black/30">0{index + 1}</span>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F1ED]">
                    <Image src={industry.image} alt={`${industry.name} revenue workflow`} fill className="object-cover" />
                  </div>
                  <div className="md:pl-8">
                    <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#1E3A3A]/55">{industry.name}</p>
                    <h3 className="mt-4 text-3xl leading-tight text-black md:text-4xl">{industry.headline}</h3>
                    <p className="mt-5 max-w-xl text-base leading-7 text-black/60">{industry.summary}</p>
                    <Link href={`/industries/${industry.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1E3A3A]">
                      Explore the workflow
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-black/8 bg-[#F7F3EE] px-6 py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
              <div>
                <p className="section-eyebrow">Additional market models</p>
                <h2 className="section-title mt-4 text-black">The same execution standard, configured for different buying systems.</h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-black/60 lg:justify-self-end">
                These workflow models show how ENAI adapts the signal, stakeholder route, review boundary, and handoff without presenting generic outbound as vertical expertise.
              </p>
            </div>

            <div className="mt-14 grid border-l border-t border-black/10 md:grid-cols-2">
              {additionalModels.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group grid grid-cols-[112px_1fr] gap-5 border-b border-r border-black/10 bg-white p-5 transition-colors hover:bg-[#F5F1ED] sm:grid-cols-[148px_1fr] sm:p-6"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                    <Image src={industry.image} alt={`${industry.name} workflow model`} fill className="object-cover" />
                  </div>
                  <div className="flex min-w-0 flex-col justify-between py-1">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-black/38">Workflow model</p>
                      <h3 className="mt-2 text-xl leading-tight text-black">{industry.name}</h3>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1E3A3A]">
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F5F1ED] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="section-eyebrow">Product evidence</p>
              <h2 className="mt-4 max-w-3xl text-4xl leading-tight text-black md:text-5xl">
                Watch the workflow, then test it on your market.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/demo-library" className="inline-flex items-center gap-2 bg-[#1E3A3A] px-6 py-3.5 text-sm font-semibold text-white">
                Watch industry runs
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://calendly.com/enai-ai2024/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-black/15 px-6 py-3.5 text-sm font-semibold text-black"
              >
                Request a market demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
