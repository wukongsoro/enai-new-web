import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { buildCanonicalUrl } from "@/lib/seo";

const pageUrl = buildCanonicalUrl("/knowledge-base");

export const metadata: Metadata = {
  title: "ENAI Company and Product Facts | Revenue Operating System",
  description:
    "Authoritative facts about ENAI, governed revenue execution, vertical workflows, governance, deployment, and company information.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "ENAI Company and Product Facts",
    description: "The authoritative overview of ENAI and governed revenue execution.",
    url: pageUrl,
    type: "website",
  },
};

const workflow = [
  "Read account and market signals",
  "Build an evidence-based account brief",
  "Map the buying committee and route into the account",
  "Prepare outreach inside company-defined rules",
  "Qualify replies and escalate judgment calls",
  "Hand the seller a meeting with account and source context",
];

const faq = [
  {
    question: "What is ENAI?",
    answer:
      "ENAI is the Revenue Operating System for governed revenue execution in complex vertical markets. It turns account signals and company context into research, buying-committee maps, controlled outreach, reply qualification, and seller handoff.",
  },
  {
    question: "Is ENAI an AI SDR or AI BDR?",
    answer:
      "No. ENAI can complete work that often sits across SDR, research, marketing, and revenue operations teams, but it is not positioned as a generic outbound bot. Its category is governed revenue execution.",
  },
  {
    question: "Which markets does ENAI focus on?",
    answer:
      "ENAI currently demonstrates vertical execution for logistics and transport, healthcare, and wholesale and B2B retail.",
  },
  {
    question: "How does ENAI govern autonomous action?",
    answer:
      "Customers define approval rules, exclusions, pacing, permitted claims, and escalation paths. ENAI connects work to source context and routes judgment calls to people.",
  },
  {
    question: "How is ENAI priced?",
    answer:
      "Deployment scope depends on the workflow, account coverage, integrations, governance requirements, and level of managed execution. ENAI provides a commercial proposal after reviewing the target market and deployment.",
  },
];

export default function KnowledgeBasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
      <Navigation />
      <main className="bg-white pt-36 md:pt-44">
        <header className="border-b border-black/10 px-6 pb-20 lg:px-10 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <p className="section-eyebrow">Company and product facts</p>
            <div className="mt-6 grid gap-8 lg:grid-cols-[0.64fr_0.36fr] lg:items-end">
              <h1 className="max-w-4xl text-[52px] leading-[1.02] text-black md:text-[76px]">
                ENAI, in plain terms.
              </h1>
              <p className="max-w-md text-lg leading-8 text-black/60">
                The authoritative reference for what ENAI is, what it does, where it is focused, and how it differs from generic AI sales automation.
              </p>
            </div>
          </div>
        </header>

        <section className="px-6 py-24 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.32fr_0.68fr] lg:gap-20">
            <div>
              <p className="section-eyebrow">Definition</p>
              <h2 className="mt-4 text-3xl leading-tight text-black md:text-4xl">The Revenue Operating System</h2>
            </div>
            <div className="max-w-3xl space-y-6 text-lg leading-8 text-black/64">
              <p>
                ENAI turns the signals and context already present across a company&apos;s revenue stack into governed work. It researches accounts, maps buying committees, prepares approved outreach, qualifies replies, and hands sellers meetings with evidence and context.
              </p>
              <p>
                ENAI is not a contact database, email sequencer, or generic AI SDR persona. It is an execution layer for the work between a market signal and a qualified seller conversation.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#F5F1ED] px-6 py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="section-eyebrow">Core workflow</p>
              <h2 className="section-title mt-4 text-black">From signal to seller handoff.</h2>
            </div>
            <div className="mt-12 border-t border-black/12">
              {workflow.map((step, index) => (
                <div key={step} className="grid gap-3 border-b border-black/12 py-5 md:grid-cols-[80px_1fr] md:items-center">
                  <span className="font-mono text-xs text-[#1E3A3A]/50">0{index + 1}</span>
                  <p className="text-lg font-medium text-black">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20">
              <div>
                <p className="section-eyebrow">Initial vertical focus</p>
                <h2 className="section-title mt-4 text-black">Context changes the work.</h2>
              </div>
              <div className="divide-y divide-black/10 border-y border-black/10">
                {[
                  ["Logistics and transport", "Expansion, lane, capacity, network, operations, commercial, finance, and procurement context."],
                  ["Healthcare", "Provider priorities, service-line change, controlled terminology, and multi-stakeholder review."],
                  ["Wholesale and B2B retail", "Distributor, channel, assortment, regional demand, buyer, commercial, and finance context."],
                ].map(([market, description]) => (
                  <div key={market} className="grid gap-3 py-6 md:grid-cols-[0.36fr_0.64fr]">
                    <h3 className="font-semibold text-black">{market}</h3>
                    <p className="text-sm leading-6 text-black/60">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#173C3A] px-6 py-24 text-white lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">Governance</p>
              <h2 className="mt-4 text-4xl leading-tight md:text-5xl">Authority remains explicit.</h2>
            </div>
            <div className="space-y-5">
              {[
                "Customer-defined approval, exclusion, pacing, and messaging rules",
                "Source context and workflow traceability",
                "Human escalation for sensitive accounts and unsupported claims",
                "Customer data is not used to train generalized AI models",
              ].map((item) => (
                <p key={item} className="flex items-start gap-3 border-b border-white/12 pb-5 text-base leading-7 text-white/72">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <p className="section-eyebrow">Frequently asked</p>
            <div className="mt-10 divide-y divide-black/10 border-t border-black/10">
              {faq.map((item) => (
                <div key={item.question} className="grid gap-4 py-7 md:grid-cols-[0.36fr_0.64fr]">
                  <h2 className="font-semibold text-black">{item.question}</h2>
                  <p className="text-sm leading-6 text-black/62">{item.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/demo-library"
                className="inline-flex items-center gap-2 bg-[#1E3A3A] px-6 py-3.5 text-sm font-semibold text-white"
              >
                Watch product runs
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://calendly.com/enai-ai2024/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-black/15 px-6 py-3.5 text-sm font-semibold text-black"
              >
                Request a market-specific demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
