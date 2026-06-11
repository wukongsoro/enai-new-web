import { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { Check, ArrowRight, Zap, TrendingUp, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Revenue Workflows for SaaS Companies | ENAI",
  description: "Use ENAI to connect product signals, account research, qualification, and sales handoff for SaaS go-to-market teams.",
  keywords: "revenue workflows for SaaS, SaaS sales tools, Revenue Workflow for SaaS companies, SaaS lead generation, MRR growth automation",
  openGraph: {
    title: "Revenue Workflows Built for SaaS Companies",
    description: "Connect product signals, account research, qualification, and sales handoff for SaaS go-to-market teams.",
    type: "website",
  },
};

export default function SaaSSolutionPage() {
  return (
    <>
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Revenue Workflows for SaaS",
            "provider": {
              "@type": "Organization",
              "name": "Enai.ai"
            },
            "description": "Revenue Operating System specifically designed for SaaS companies",
            "audience": {
              "@type": "Audience",
              "audienceType": "SaaS Companies"
            }
          })
        }}
      />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-[#F5F1ED] py-20 px-6 mt-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-white border border-black/10 text-[#1E3A3A] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Built for SaaS
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Turn SaaS Signals Into Revenue Meetings
                <br />
                <span className="text-[#1E3A3A]">Without Hiring More SDRs</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                ENAI connects product usage, account research, stakeholder mapping, qualification, and handoff for SaaS go-to-market teams.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link
                  href="https://calendly.com/enai-ai2024/30min"
                  className="bg-[#1E3A3A] hover:bg-[#16302F] text-white px-8 py-4 rounded-lg font-semibold transition text-lg inline-flex items-center gap-2"
                >
                  Book SaaS Demo
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="#saas-features"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-lg font-semibold transition text-lg"
                >
                  See SaaS Features
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SaaS-Specific Challenges */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">SaaS Sales Challenges We Solve</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="bg-[#F5F1ED] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-[#1E3A3A]" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">High CAC, Low Conversion</h3>
                <p className="text-gray-600">
                  Traditional SDR capacity is expensive and inconsistent. ENAI gives teams a governed workflow for turning account signals into qualified meetings.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="bg-[#F5F1ED] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-[#1E3A3A]" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Slow Time-to-Revenue</h3>
                <p className="text-gray-600">
                  Long sales cycles delay ARR growth. ENAI accelerates qualification and handoff by keeping account context, stakeholder data, and next steps in one workflow.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="bg-[#F5F1ED] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-[#1E3A3A]" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Scaling Bottleneck</h3>
                <p className="text-gray-600">
                  Outbound should not require a new tool or hire for every step. ENAI gives the team consistent research, outreach, and follow-up coverage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SaaS-Specific Features */}
        <section id="saas-features" className="py-16 px-6 bg-[#F5F1ED]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Built for SaaS Go-To-Market</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Product-Led Growth Integration</h3>
                <p className="text-gray-600 mb-4">
                  Identify trial users showing buying signals and automatically trigger personalized outreach sequences.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Monitor trial usage patterns and engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Trigger outreach based on feature adoption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Accelerate free-to-paid conversion</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold mb-4">SaaS-Specific Messaging</h3>
                <p className="text-gray-600 mb-4">
                  AI-assisted personalization using SaaS metrics, tech stack, and growth indicators.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Reference funding rounds and growth stage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Highlight integration ecosystem fit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Emphasize ROI and time-to-value</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Expansion Revenue Automation</h3>
                <p className="text-gray-600 mb-4">
                  Identify upsell and cross-sell opportunities within existing customer base.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Monitor usage approaching plan limits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Automate upgrade conversations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Increase NRR automatically</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Multi-Product Coordination</h3>
                <p className="text-gray-600 mb-4">
                  Orchestrate outreach across multiple product lines with intelligent prioritization.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Match prospects to relevant products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Coordinate cross-sell sequences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Avoid messaging conflicts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SaaS Case Study */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#1E3A3A] p-12 rounded-2xl text-white">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">SaaS Success Story</h2>
                <p className="text-white/75 text-lg">
                  Mid-market SaaS company (Series B, $15M ARR)
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-4xl font-bold mb-2">320%</div>
                  <div className="text-white/75">Increase in trial signups</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">75%</div>
                  <div className="text-white/75">Reduction in CAC</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">$4.2M</div>
                  <div className="text-white/75">Additional ARR in 12 months</div>
                </div>
              </div>
              <p className="text-white/75">
                "Enai.ai allowed us to scale our outbound motion 5x without adding headcount. The AI agents understand our SaaS value proposition and speak fluently to technical buyers. Strategic advantage for our growth."
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Scale Your SaaS ARR with AI?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join leading SaaS companies using Enai.ai to 3-5x their sales pipeline without hiring more SDRs
            </p>
            <Link
              href="https://calendly.com/enai-ai2024/30min"
              className="inline-flex items-center gap-2 bg-[#1E3A3A] hover:bg-[#16302F] text-white px-8 py-4 rounded-lg font-semibold transition text-lg"
            >
              Schedule Your SaaS Demo
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
