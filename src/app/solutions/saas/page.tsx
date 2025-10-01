import { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { Check, ArrowRight, Zap, TrendingUp, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Sales Automation for SaaS Companies | Scale MRR Growth with Enai.ai",
  description: "Transform your SaaS sales with AI BDR agents. Increase trial signups 3x, reduce CAC by 70%, and scale ARR without hiring. Built specifically for SaaS go-to-market.",
  keywords: "AI sales automation for SaaS, SaaS sales tools, AI BDR for SaaS companies, SaaS lead generation, MRR growth automation",
  openGraph: {
    title: "AI Sales Automation Built for SaaS Companies",
    description: "Scale your SaaS ARR 5-10x without hiring more SDRs. AI-powered prospecting, qualification, and trial conversion.",
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
            "name": "AI Sales Automation for SaaS",
            "provider": {
              "@type": "Organization",
              "name": "Enai.ai"
            },
            "description": "AI-powered sales automation specifically designed for SaaS companies",
            "audience": {
              "@type": "Audience",
              "audienceType": "SaaS Companies"
            }
          })
        }}
      />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20 px-6 mt-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Built for SaaS
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Scale Your SaaS ARR 5-10x
                <br />
                <span className="text-orange-500">Without Hiring More SDRs</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                AI-powered sales automation designed specifically for SaaS companies. Increase trial signups, reduce CAC, and accelerate time-to-revenue.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link
                  href="https://calendly.com/enai-ai2024/30min"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition text-lg inline-flex items-center gap-2"
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
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-orange-500" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">High CAC, Low Conversion</h3>
                <p className="text-gray-600">
                  Traditional SDRs cost $150K+ per year but generate only 50-80 SQLs. AI reduces CAC by 70-80% while increasing trial signups 3x.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-orange-500" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Slow Time-to-Revenue</h3>
                <p className="text-gray-600">
                  Long sales cycles delay ARR growth. AI accelerates qualification and trial conversion, reducing time-to-revenue by 40-60%.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-orange-500" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Scaling Bottleneck</h3>
                <p className="text-gray-600">
                  Can't scale outbound without proportional headcount growth. AI enables 10x outreach capacity with same team size.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SaaS-Specific Features */}
        <section id="saas-features" className="py-16 px-6 bg-orange-50">
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
                  AI-powered personalization using SaaS metrics, tech stack, and growth indicators.
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
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-12 rounded-2xl text-white">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">SaaS Success Story</h2>
                <p className="text-orange-100 text-lg">
                  Mid-market SaaS company (Series B, $15M ARR)
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-4xl font-bold mb-2">320%</div>
                  <div className="text-orange-100">Increase in trial signups</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">75%</div>
                  <div className="text-orange-100">Reduction in CAC</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">$4.2M</div>
                  <div className="text-orange-100">Additional ARR in 12 months</div>
                </div>
              </div>
              <p className="text-orange-50">
                "Enai.ai allowed us to scale our outbound motion 5x without adding headcount. The AI agents understand our SaaS value proposition and speak fluently to technical buyers. Game changer for our growth."
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
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition text-lg"
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

