import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { buildCanonicalUrl, buildAbsoluteUrl, defaultKeywords } from "@/lib/seo";

const agentProfiles = {
  prospectorai: {
    name: "ProspectorAI",
    role: "Lead Discovery Agent",
    description:
      "Automatically discovers, enriches, and prioritizes high-fit accounts using 50+ firmographic, intent, and technographic signals.",
    heroImage: "/GZxcAKMXUAIYRGT.jpeg",
    metrics: [
      { label: "Accounts monitored", value: "Always on" },
      { label: "ICP alignment", value: "Continuously tuned" },
      { label: "Signals tracked", value: "Full spectrum" },
    ],
    highlights: [
      "Connects to LinkedIn, ZoomInfo, 6sense, and owned product/usage data",
      "Scores each prospect with adaptive intent models",
      "Delivers ready-to-run buying committees to OutreachAI & CRM",
    ],
    valuePillars: [
      { title: "Qualified pipeline", detail: "Net-new ICP accounts surfaced across every territory without manual research." },
      { title: "Research time removed", detail: "List building, enrichment, and scoring happen automatically in the background." },
      { title: "Signal freshness", detail: "Funding, hiring, and tech-stack shifts are re-evaluated multiple times a day." },
    ],
    capabilities: [
      { title: "Multi-signal enrichment", copy: "Combines website, hiring, product telemetry, and firmographics to keep records actionable." },
      { title: "Adaptive ICP guardrails", copy: "Learns from closed-won data to refine qualification logic without manual spreadsheet work." },
      { title: "Buying intent scoring", copy: "Weights keywords, competitor buzz, and product usage to rank every account daily." },
      { title: "Instant export + sync", copy: "Push prioritized buying committees into HubSpot, Salesforce, or Outreach in one click." },
    ],
    workflow: [
      "Detects in-market accounts via live intent feeds",
      "Auto-enriches buying committees with verified contacts",
      "Routes qualified targets to OutreachAI programs",
      "Monitors engagement and re-scores as signals shift",
    ],
    industries: ["SaaS", "Cybersecurity", "FinTech", "Professional Services", "Manufacturing"],
    testimonial: {
      quote:
        "ProspectorAI replaced a four-person research pod. We now ship 2,000 qualified accounts to sales every Monday, each with battlecard-level context.",
      person: "Sr. Director of Revenue Ops, Growth SaaS",
    },
    heroTagline: "Precision account intelligence that never sleeps",
    automationGuardrails: [
      "Auto-syncs enriched contacts + notes to Salesforce/HubSpot",
      "Scores accounts hourly based on intent + activity",
      "Alerts SDRs in Slack the moment new ICP-fit companies emerge",
    ],
    integrations: ["Salesforce", "HubSpot", "6sense", "Apollo", "LinkedIn", "Snowflake"],
    keywords: [...defaultKeywords, "ProspectorAI", "AI prospecting", "lead research automation"],
  },
  outreachai: {
    name: "OutreachAI",
    role: "Personalized Outreach Agent",
    description:
      "Launches hyper-personalized, multi-channel sequences that reference live prospect triggers and optimize every touch for response.",
    heroImage: "/GZxcAKLXEAgrNfr.jpeg",
    metrics: [
      { label: "Channels orchestrated", value: "Email · LinkedIn · SMS" },
      { label: "Experiment speed", value: "5x faster" },
    ],
    highlights: [
      "Understands tone and brand voice using on-brand training data",
      "Auto tests subject lines, CTAs, and send windows",
      "Escalates warm replies to humans with context and recommendations",
    ],
    valuePillars: [
      { title: "Reply quality", detail: "Messages reference live signals like funding, product usage, and hiring so prospects engage faster." },
      { title: "Speed to launch", detail: "Campaigns roll out in hours with review and approval layers for compliance." },
      { title: "Meeting yield", detail: "Warm responses are triaged with next-step guidance before they hit an AE inbox." },
    ],
    capabilities: [
      { title: "Adaptive messaging", copy: "References prospect news, funding, tech stack, and job changes in every opener." },
      { title: "Channel routing", copy: "Chooses the best mix of email, LinkedIn, SMS, or phone nudges per persona and time zone." },
      { title: "Objection handling", copy: "Responds to common pushbacks with data-backed answers, looping in humans when needed." },
      { title: "Experiment engine", copy: "Continuously learns what copy, visuals, and cadences convert for each segment." },
    ],
    workflow: [
      "Pulls enriched targets directly from ProspectorAI",
      "Auto-drafts tailored sequences with compliance guardrails",
      "Launches multi-channel plays + watches sentiment",
      "Routes hot replies to reps or QualifierAI with recommended next steps",
    ],
    industries: ["B2B SaaS", "Logistics", "Healthcare", "Climate Tech"],
    testimonial: {
      quote:
        "Our reply rates jumped from 3% to 14% in four weeks. OutreachAI adapts messaging the moment a prospect posts on LinkedIn or gets funding.",
      person: "VP Sales, Series B Infrastructure"
    },
    heroTagline: "Every touch feels handcrafted even when you send 100k a month",
    automationGuardrails: [
      "Routes positive replies to AEs with recommended follow-ups",
      "Transcribes + summarizes Loom/voice notes for sequences",
      "Pauses prospects automatically when meetings book or deals open",
    ],
    integrations: ["Salesforce", "HubSpot", "Outreach", "Gmail", "LinkedIn", "Slack"],
    keywords: [...defaultKeywords, "OutreachAI", "AI email personalization", "sales sequence automation"],
  },
  qualifierai: {
    name: "QualifierAI",
    role: "Qualification & Scheduling Agent",
    description:
      "Runs human-like qualification conversations, handles objections, and books meetings directly on rep calendars without delays.",
    heroImage: "/GaIPMq1WUAAEuV2.jpeg",
    metrics: [
      { label: "Meetings booked", value: "Pipeline ready" },
      { label: "Response speed", value: "Real time" },
      { label: "Calendars supported", value: "Google · Outlook · HubSpot" },
    ],
    highlights: [
      "Understands product FAQs, ROI proof points, and legal notes",
      "Coordinates multi-party scheduling with timezone awareness",
      "Pushes structured call notes + CRM updates automatically",
    ],
    valuePillars: [
      { title: "Meetings booked", detail: "Async conversations qualify prospects and provide time slots instantly." },
      { title: "Response time", detail: "Prospects receive human-quality replies regardless of timezone." },
      { title: "CRM hygiene", detail: "MEDDICC/BANT fields, objections, and context land in CRM and Slack automatically." },
    ],
    capabilities: [
      { title: "NLP-driven dialogue", copy: "Handles open-ended questions, qualifies budget/timeline, and keeps tone on-brand." },
      { title: "Smart scheduling", copy: "Books directly on AE calendars, sends reminders, and updates invites when prospects reschedule." },
      { title: "CRM sync", copy: "Logs every conversation snippet, captured fields, and disposition reason instantly." },
      { title: "Compliance guardrails", copy: "Maintains GDPR/CCPA-friendly disclosures and hands off sensitive topics to humans." },
    ],
    workflow: [
      "Receives handoffs from OutreachAI or inbound forms",
      "Runs async or live chat conversations to qualify",
      "Books demos, sends recap + resources",
      "Hands context, objections, and buyer intel to AEs",
    ],
    industries: ["Enterprise SaaS", "AI Infrastructure", "Consulting", "Telecom"],
    testimonial: {
      quote:
        "QualifierAI books meetings faster than any SDR we’ve trained. Our pipeline grew 68% without hiring a single new rep.",
      person: "Chief Revenue Officer, Global Services",
    },
    heroTagline: "Instant qualification and scheduling without losing human warmth",
    automationGuardrails: [
      "Detects duplicate meetings and merges context",
      "Sends personalized prep packets before every call",
      "Triggers nurture tracks automatically when prospects defer",
    ],
    integrations: ["Google Calendar", "Outlook", "Calendly", "Zoom", "Teams", "Salesforce"],
    keywords: [...defaultKeywords, "QualifierAI", "AI meeting scheduler", "sales qualification automation"],
  },
} as const;

type AgentSlug = keyof typeof agentProfiles;

const tileClass = "rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm";
const schedulingUrl = "https://calendly.com/enai-ai2024/30min?month=2025-09" as const;

export function generateStaticParams() {
  return Object.keys(agentProfiles).map((slug) => ({ agent: slug }));
}

export async function generateMetadata({ params }: { params: { agent: string } }): Promise<Metadata> {
  const { agent } = params;
  const profile = agentProfiles[agent as AgentSlug];

  if (!profile) {
    return {
      title: "ENAI AI Agent",
    } satisfies Metadata;
  }

  const canonical = buildCanonicalUrl(`/agents/${agent}`);
  const ogImage = buildAbsoluteUrl(profile.heroImage);
  const mutableKeywords = [...profile.keywords];

  return {
    title: `${profile.name} | ENAI ${profile.role}`,
    description: profile.description,
    keywords: mutableKeywords,
    alternates: { canonical },
    openGraph: {
      title: `${profile.name} | ENAI ${profile.role}`,
      description: profile.description,
      url: canonical,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${profile.name} hero`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${profile.name} | ENAI ${profile.role}`,
      description: profile.description,
      images: [ogImage],
      creator: "@enai_ai",
    },
  } satisfies Metadata;
}

export default async function AgentPage({ params }: { params: { agent: string } }) {
  const { agent } = params;
  const profile = agentProfiles[agent as AgentSlug];

  if (!profile) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#F7F7F9] text-gray-900 pt-24 pb-24">
        {/* Hero grid */}
        <section className="max-w-6xl mx-auto px-6 grid gap-6 md:grid-cols-2 items-stretch">
          <div className={`${tileClass} h-full flex flex-col justify-between`}>
            <p className="text-xs uppercase tracking-[0.35em] text-gray-500 mb-4">ENAI DIGITAL WORKER</p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4 text-gray-900">
              {profile.name}
              <span className="block text-gray-500 text-2xl md:text-3xl">{profile.role}</span>
            </h1>
            <p className="text-xl text-gray-700 mb-4">{profile.heroTagline}</p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">{profile.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="px-8">
                <Link href={schedulingUrl} target="_blank" rel="noreferrer">
                  Book a live build
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8">
                <Link href="/pricing">View plans</Link>
              </Button>
            </div>
          </div>
          <div className={`${tileClass} h-full flex flex-col gap-6`}>
            <div className="rounded-[28px] bg-gray-50 border border-gray-100 aspect-[4/3] overflow-hidden relative">
              <Image
                src={profile.heroImage}
                alt={`${profile.name} interface`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {profile.metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-gray-100 bg-white p-4">
                  <p className="text-sm uppercase tracking-[0.35em] text-gray-500">{metric.label}</p>
                  <p className="text-2xl font-semibold mt-2 text-gray-900">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Narrative */}
        <section className="max-w-6xl mx-auto px-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr] mt-12">
          <div className={`${tileClass} space-y-4`}>
            <h2 className="text-3xl font-semibold">Build a workforce, not one-off automations</h2>
            <p className="text-gray-600 leading-relaxed">
              ENAI’s digital workers stay aligned with your guardrails. We orchestrate approvals, data governance, and human feedback loops so you scale
              responsibly.
            </p>
            <div className="space-y-3">
              {profile.highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gray-900" />
                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`${tileClass} space-y-6`}>
            <h3 className="text-xl font-semibold">Guardrails we configure</h3>
            <div className="space-y-3">
              {profile.automationGuardrails.map((automation) => (
                <div key={automation} className="px-4 py-3 rounded-2xl border border-gray-100 bg-gray-50 text-gray-600">
                  {automation}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value pillars */}
        <section className="max-w-6xl mx-auto px-6 mt-12">
          <div className="grid gap-6 md:grid-cols-3">
            {profile.valuePillars.map((pillar) => (
              <div key={pillar.title} className={`${tileClass} flex flex-col`}>
                <p className="text-sm uppercase tracking-[0.35em] text-gray-500">{pillar.title}</p>
                <p className="text-gray-600 leading-relaxed flex-1 mt-4">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section className="max-w-6xl mx-auto px-6 mt-12 grid gap-6">
          <div className={`${tileClass}`}>
            <div className="flex flex-col gap-3">
              <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Capabilities</p>
              <h2 className="text-3xl font-semibold text-gray-900">How {profile.name} operates</h2>
              <p className="text-gray-600">
                {profile.name} pairs reasoning models with battle-tested guardrails so every output respects your brand, compliance rules, and sales process.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {profile.capabilities.map((capability) => (
                <div key={capability.title} className="rounded-2xl border border-gray-100 bg-white p-5">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{capability.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{capability.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="max-w-6xl mx-auto px-6 mt-12">
          <div className={`${tileClass}`}>
            <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Workflow</p>
                <h2 className="text-3xl font-semibold text-gray-900">How {profile.name} moves with humans</h2>
              </div>
              <Button asChild variant="outline">
                <Link href={schedulingUrl} target="_blank" rel="noreferrer">
                  Review workflow live
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 lg:grid-cols-4">
              {profile.workflow.map((step, index) => (
                <div key={step} className="rounded-2xl border border-gray-100 bg-white p-5">
                  <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Phase {index + 1}</p>
                  <p className="text-gray-800 font-semibold mt-2">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations + testimonial */}
        <section className="max-w-6xl mx-auto px-6 mt-12 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className={`${tileClass}`}>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Native integrations</h2>
            <div className="flex flex-wrap gap-3">
              {profile.integrations.map((integration) => (
                <span key={integration} className="px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-sm text-gray-700">
                  {integration}
                </span>
              ))}
            </div>
          </div>
          <div className={`${tileClass} space-y-6`}>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Customer proof</p>
              <p className="text-2xl leading-snug italic text-gray-900">“{profile.testimonial.quote}”</p>
            </div>
            <p className="font-semibold text-gray-700">{profile.testimonial.person}</p>
            <div className="flex flex-wrap gap-3">
              {profile.industries.map((industry) => (
                <span key={industry} className="px-3 py-1.5 rounded-full bg-gray-100 text-xs uppercase tracking-wide text-gray-600">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-6 mt-12">
          <div className={`${tileClass} text-center space-y-6`}>
            <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Launch in under 14 days</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Deploy {profile.name} safely, with humans in the loop</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our solutions team configures prompts, approvals, CRM sync, and observability dashboards so you control every message before it leaves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8">
                <Link href={schedulingUrl} target="_blank" rel="noreferrer">
                  Book a live build
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8">
                <Link href="/pricing">Compare plans</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
