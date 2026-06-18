import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BarChart3, Heart, ShieldCheck, Zap } from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Company | ENAI",
  description:
    "ENAI is building governed revenue execution infrastructure for complex B2B markets. Learn about our mission, operating principles, and Web Summit Qatar 2026 selection.",
  openGraph: {
    title: "Company | ENAI",
    description:
      "Governed revenue execution infrastructure for complex B2B markets.",
    type: "website",
    images: [
      {
        url: "/GauJDBnXcAAkNUg.jpeg",
        width: 1200,
        height: 630,
        alt: "ENAI company visual",
      },
    ],
  },
};

const companySignals = [
  { label: "Company", value: "ENAI" },
  { label: "Category", value: "Governed revenue execution" },
  { label: "Base", value: "London" },
  { label: "Recognition", value: "Selected for Web Summit Qatar 2026" },
];

const principles = [
  {
    title: "Execution, not dashboards",
    icon: Zap,
    body: "The product is built to complete account research, buyer mapping, outreach, qualification, and handoff instead of giving teams another system to watch.",
  },
  {
    title: "Governance before autonomy",
    icon: ShieldCheck,
    body: "Autonomous work only belongs in serious companies when actions are explainable, controlled, and reversible.",
  },
  {
    title: "Vertical context matters",
    icon: BarChart3,
    body: "Complex markets require different signals, buyer committees, approval paths, and handoff context.",
  },
  {
    title: "Human authority stays intact",
    icon: Heart,
    body: "ENAI executes repeatable work inside defined boundaries. Commercial judgment, policy, and escalation stay with the company.",
  },
];

const nonNegotiables = [
  "No black-box action without source context",
  "No outreach outside approved rules",
  "No generic automation where vertical context is required",
  "No replacement of human commercial judgment",
];

const markets = [
  "Industrials",
  "Professional Services",
  "Private Equity",
  "Financial Services",
  "Software",
  "Hardware",
  "AI-Native",
  "Sovereign AI",
  "Logistics",
  "Healthcare",
  "Wholesale",
];

export default function AboutUs() {
  return (
    <>
      <Navigation />
      <main className="bg-[#F7F3EE] text-black">
        <section className="px-6 pt-44 pb-20 lg:px-10 lg:pt-52 lg:pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
              <div className="max-w-4xl">
                <p className="section-eyebrow">Company</p>
                <h1 className="mt-5 font-[family-name:var(--font-display)] text-[clamp(40px,6vw,72px)] leading-[1.02] tracking-[-0.01em] text-black">
                  Building the execution layer for revenue teams.
                </h1>
              </div>
              <div>
                <p className="text-lg leading-8 text-black/66">
                  ENAI builds governed AI systems for the work that happens before a
                  qualified meeting: account research, buyer mapping, controlled
                  outreach, reply qualification, and seller handoff. The ambition is
                  not to add another tool to the stack. It is to make revenue work
                  executable under company-defined rules.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="rounded-full bg-[#1E3A3A] px-7 text-white hover:bg-[#16302F]">
                    <Link href="https://calendly.com/enai-ai2024/30min" target="_blank" rel="noopener noreferrer">
                      Request a demo
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full border-black/15 bg-transparent px-7 text-black hover:bg-black hover:text-white">
                    <Link href="/blog/founder-enterprise-autonomous-governance">
                      Read founder letter
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative aspect-[16/7] min-h-[280px] overflow-hidden rounded-2xl bg-black sm:min-h-[360px]">
              <Image
                src="/GauJDBnXcAAkNUg.jpeg"
                alt="ENAI company visual"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
              {companySignals.map((signal) => (
                <div key={signal.label} className="bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/38">{signal.label}</p>
                  <p className="mt-3 text-base font-medium leading-snug text-black">{signal.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-black/10 bg-white px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="section-eyebrow">Founder Thesis</p>
              <h2 className="section-title mt-4 text-black">
                The enterprise will not adopt autonomous execution without governance.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-black/66">
              <p>
                ENAI was built from a simple observation: the bottleneck in enterprise
                AI is no longer generation. It is trust. Companies can generate copy,
                research, and recommendations quickly. What they cannot accept is a
                system acting without clear evidence, policy boundaries, and human
                authority.
              </p>
              <p>
                That is why ENAI focuses on governed execution. The system must act
                inside rules the company defines, show its sources, know when to stop,
                and preserve institutional judgment rather than replacing it with
                opaque automation.
              </p>
              <Link href="/blog/founder-enterprise-autonomous-governance" className="inline-flex items-center text-sm font-semibold text-[#1E3A3A] hover:text-black">
                Read the full founder letter
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
              <div>
                <p className="section-eyebrow">Principles</p>
                <h2 className="section-title mt-4 text-black">
                  Built for serious revenue teams.
                </h2>
                <p className="section-copy mt-5">
                  ENAI is designed around the work that happens before a seller enters
                  the room: account research, buyer mapping, controlled outreach,
                  qualification, and handoff.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {principles.map((principle) => (
                  <div key={principle.title} className="rounded-xl border border-black/10 bg-white p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900">
                      <principle.icon className="h-5 w-5 text-white" />
                    </div>
                    <p className="font-[family-name:var(--font-display)] text-xl text-black">{principle.title}</p>
                    <p className="mt-3 text-sm leading-6 text-black/58">{principle.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-black/10 bg-[#101312] px-6 py-20 text-white lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="section-eyebrow text-white/45">Standard</p>
              <h2 className="section-title mt-4 text-white">
                What we will not compromise.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/62">
                If AI is going to execute revenue work, the standard has to be higher
                than speed. It has to be accountable enough for serious companies to
                use in front of customers, boards, and regulators.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {nonNegotiables.map((item) => (
                <div key={item} className="bg-[#101312] p-6">
                  <p className="text-base font-medium leading-7 text-white/86">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="section-eyebrow">Markets</p>
              <h2 className="section-title mt-4 text-black">
                Built for vertical revenue motions.
              </h2>
              <p className="section-copy mt-5">
                Complex markets require different signals, buying committees, risk
                boundaries, and handoff context. ENAI is being built as a vertical
                execution layer, not a one-size-fits-all outbound bot.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {markets.map((market) => (
                <span key={market} className="rounded-full border border-black/10 bg-[#F7F3EE] px-4 py-2 text-sm font-medium text-black/70">
                  {market}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="section-eyebrow">Standard</p>
            <h2 className="section-title mt-4 text-black">
              We want ENAI to be judged by the quality of work it can safely complete.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/62">
              Not by activity volume. Not by generic personalization. By whether a
              serious company can trust the system to understand the account, respect
              the rules, surface the evidence, and hand the seller a conversation
              worth having.
            </p>
            <div className="mt-10">
              <Button asChild className="rounded-full bg-[#1E3A3A] px-8 text-white hover:bg-[#16302F]">
                <Link href="https://calendly.com/enai-ai2024/30min" target="_blank" rel="noopener noreferrer">
                  See ENAI on your market
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
