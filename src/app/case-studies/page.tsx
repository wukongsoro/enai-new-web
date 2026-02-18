import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { ArrowRight, Zap, Brain, Globe, Clock, Target, Users, TrendingUp, Shield, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "What ENAI Can Do | AI Sales Automation Capabilities",
  description: "Explore ENAI's AI BDR capabilities: autonomous prospecting, multi-channel outreach, intelligent qualification, and 24/7 global coverage for B2B sales teams.",
  keywords: "AI BDR capabilities, sales automation features, B2B prospecting AI, AI sales agent, autonomous outreach",
  openGraph: {
    title: "What ENAI Can Do | AI Sales Automation Capabilities",
    description: "Discover the full potential of AI-powered sales development.",
    type: "website",
  },
};

const capabilities = [
  {
    icon: Brain,
    title: "Intelligent Prospect Research",
    description: "AI agents that deeply research every prospect. We analyze company news, funding rounds, job postings, tech stack, and organizational changes to craft perfectly timed, relevant outreach.",
    highlights: [
      "Real-time company intelligence gathering",
      "Buying signal detection and prioritization",
      "Stakeholder mapping across organizations",
      "Competitive landscape analysis",
    ],
  },
  {
    icon: Zap,
    title: "Autonomous Multi-Channel Outreach",
    description: "Deploy AI agents across email, LinkedIn, and phone with coordinated sequences that adapt based on prospect engagement and response patterns.",
    highlights: [
      "Personalized messaging at scale",
      "Dynamic sequence optimization",
      "A/B testing and continuous improvement",
      "Channel preference learning",
    ],
  },
  {
    icon: Target,
    title: "Smart Lead Qualification",
    description: "AI-powered qualification that goes beyond basic criteria: understanding budget authority, timeline, and genuine fit before passing to your sales team.",
    highlights: [
      "BANT and custom framework scoring",
      "Intent signal analysis",
      "Conversation-based qualification",
      "CRM enrichment and sync",
    ],
  },
  {
    icon: Globe,
    title: "24/7 Global Coverage",
    description: "AI agents that never sleep, engaging prospects across every timezone with culturally-aware, localized communication in multiple languages.",
    highlights: [
      "Multi-timezone engagement",
      "Localized messaging and cultural nuance",
      "Follow-up timing optimization",
      "Holiday and business hour awareness",
    ],
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Compliance",
    description: "Built-in guardrails for regulated industries with audit trails, approval workflows, and messaging controls that keep your outreach compliant.",
    highlights: [
      "GDPR and CCPA compliance",
      "Industry-specific regulations (FINRA, HIPAA)",
      "Message approval workflows",
      "Complete audit trails",
    ],
  },
  {
    icon: Sparkles,
    title: "Continuous Learning",
    description: "AI agents that improve with every interaction. They learn from successful conversions, refine targeting, and optimize messaging based on real results.",
    highlights: [
      "Response pattern analysis",
      "Conversion optimization",
      "Persona refinement",
      "Messaging effectiveness tracking",
    ],
  },
];

const useCaseScenarios = [
  {
    industry: "Software & SaaS",
    scenario: "Scale from PLG to Enterprise",
    description: "Convert free trial users to paid customers while simultaneously building enterprise pipeline with multi-threaded account engagement.",
    outcomes: ["Product-qualified lead activation", "Enterprise account mapping", "Technical buyer engagement"],
  },
  {
    industry: "Professional Services",
    scenario: "Partner-Level Business Development",
    description: "Extend partner rainmaking capacity with AI that maintains the personal touch and relationship quality your firm is known for.",
    outcomes: ["Alumni network engagement", "Referral program automation", "Thought leadership distribution"],
  },
  {
    industry: "Private Equity",
    scenario: "Proprietary Deal Sourcing",
    description: "Identify and qualify acquisition targets at scale, building relationships with founders and operators before deals go to market.",
    outcomes: ["Target company research", "Founder outreach sequences", "LP relationship management"],
  },
  {
    industry: "Industrial & Manufacturing",
    scenario: "Complex B2B Sales Cycles",
    description: "Navigate multi-stakeholder buying committees with coordinated outreach to engineering, procurement, and operations decision-makers.",
    outcomes: ["Account mapping automation", "Technical qualification", "Trade show follow-up"],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "ENAI Capabilities",
            "description": "AI BDR capabilities and use cases for sales automation",
          })
        }}
      />
      <Navigation />
      <main className="bg-[#F5F1ED]">
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-[#F5F1ED] overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-caption uppercase tracking-wider text-black/60 px-4 py-2 bg-white/50 border border-black/10 rounded-full mb-8">
                <Sparkles className="w-4 h-4" />
                Capabilities
              </div>
              <h1 className="h1 text-black mb-6">
                What ENAI Can Do
              </h1>
              <p className="text-body-lg text-black/60 leading-relaxed max-w-2xl">
                Discover the full potential of AI-powered sales development. Our AI BDR agents handle everything from prospect research to qualified meeting booking.
              </p>
            </div>
          </div>
        </section>

        {/* Core Capabilities Grid */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="h2 text-black mb-6">
                Core Capabilities
              </h2>
              <p className="text-body-lg text-black/60 leading-relaxed">
                Six powerful capabilities that transform how your team generates pipeline.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="bg-[#F5F1ED] p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#1E3A3A] rounded-lg flex items-center justify-center mb-6">
                    <capability.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-black mb-4">{capability.title}</h3>
                  <p className="text-body-sm text-black/60 mb-6">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2 text-body-sm text-black/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1E3A3A] flex-shrink-0 mt-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Case Scenarios */}
        <section className="py-20 md:py-28 bg-[#E8DDD4]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="h2 text-black mb-6">
                Use Case Scenarios
              </h2>
              <p className="text-body-lg text-black/60 leading-relaxed">
                See how ENAI adapts to different industries and sales motions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCaseScenarios.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white p-8 md:p-10 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-caption uppercase tracking-wider text-[#1E3A3A]/60 mb-2">
                    {useCase.industry}
                  </div>
                  <h3 className="text-xl font-medium text-black mb-4">{useCase.scenario}</h3>
                  <p className="text-body-sm text-black/60 mb-6">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.outcomes.map((outcome, oIndex) => (
                      <span
                        key={oIndex}
                        className="text-caption bg-[#F5F1ED] px-3 py-1.5 rounded-full text-black/70"
                      >
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="h2 text-black mb-6">
                How It Works
              </h2>
              <p className="text-body-lg text-black/60 leading-relaxed">
                From setup to qualified meetings in three simple steps.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#1E3A3A] rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-medium text-black mb-3">Define Your ICP</h3>
                <p className="text-body-sm text-black/60">
                  Tell us who you want to reach. We&apos;ll configure AI agents with your ideal customer profile, messaging, and qualification criteria.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#1E3A3A] rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-medium text-black mb-3">Deploy AI Agents</h3>
                <p className="text-body-sm text-black/60">
                  Your AI BDR agents begin researching prospects, crafting personalized outreach, and engaging across email, LinkedIn, and phone.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#1E3A3A] rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-medium text-black mb-3">Book Qualified Meetings</h3>
                <p className="text-body-sm text-black/60">
                  Qualified prospects are booked directly on your calendar. Your sales team focuses on closing, not prospecting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-[#1E3A3A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="h2 text-white mb-6">
                Ready to See ENAI in Action?
              </h2>
              <p className="text-body-lg text-white/70 leading-relaxed mb-10">
                Book a demo to see how AI BDR agents can transform your sales pipeline.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="https://calendly.com/enai-ai2024/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 justify-center bg-white text-[#1E3A3A] px-8 py-4 text-sm font-medium hover:bg-white/90 transition-all duration-300"
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 text-sm font-medium hover:bg-white/10 transition-all duration-300"
                >
                  View Pricing
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
