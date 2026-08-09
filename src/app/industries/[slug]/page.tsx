import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { getIndustry, industries } from "@/lib/industry-data";

type IndustryPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return { title: "Industry not found | ENAI" };

  return {
    title: `ENAI for ${industry.name} | Governed Revenue Execution`,
    description: industry.summary,
    alternates: { canonical: `https://enai.ai/industries/${industry.slug}` },
    openGraph: {
      title: `ENAI for ${industry.name}`,
      description: industry.summary,
      images: [{ url: industry.image, alt: `${industry.name} revenue workflow` }],
      type: "website",
    },
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <Navigation />
      <main className="bg-white">
        <section className="px-6 pb-24 pt-40 md:pb-32 md:pt-48 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <Link href="/industries" className="inline-flex items-center gap-2 text-sm font-semibold text-black/55">
              <ArrowLeft className="h-4 w-4" />
              All industries
            </Link>
            <div className="mt-10 grid gap-12 lg:grid-cols-[0.55fr_0.45fr] lg:items-end">
              <div>
                <p className="section-eyebrow">ENAI for {industry.name} / {industry.proof}</p>
                <h1 className="mt-5 text-[48px] leading-[1.02] text-black md:text-[72px]">{industry.headline}</h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-black/62">{industry.summary}</p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F1ED]">
                <Image src={industry.image} alt={`${industry.name} revenue workflow`} fill priority className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#173C3A] px-6 py-24 text-white lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-px border-l border-t border-white/12 md:grid-cols-3">
              {[
                ["Signals", industry.signals],
                ["Buying committee", industry.stakeholders],
                ["Execution controls", industry.controls],
              ].map(([title, items]) => (
                <div key={title as string} className="border-b border-r border-white/12 p-7 md:p-8">
                  <h2 className="text-xl font-semibold text-white">{title as string}</h2>
                  <ul className="mt-7 space-y-4">
                    {(items as string[]).map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/65">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
            <div>
              <p className="section-eyebrow">Seller handoff</p>
              <h2 className="section-title mt-4 text-black">The output is a decision-ready account, not more activity.</h2>
            </div>
            <div>
              <p className="text-xl leading-9 text-black/65">{industry.handoff}</p>
              <div className="mt-10 border-y border-black/10">
                {["Source context retained", "Buying route made explicit", "Claims checked against rules", "Human owner receives the next action"].map((item, index) => (
                  <div key={item} className="grid grid-cols-[48px_1fr] border-t border-black/10 py-5 first:border-t-0">
                    <span className="font-mono text-[11px] text-black/30">0{index + 1}</span>
                    <p className="font-medium text-black">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F5F1ED] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-4xl leading-tight text-black md:text-5xl">See ENAI run the work before discussing the deployment.</h2>
            <Link href="/demo-library" className="inline-flex shrink-0 items-center gap-2 bg-[#1E3A3A] px-6 py-3.5 text-sm font-semibold text-white">
              Watch industry runs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
