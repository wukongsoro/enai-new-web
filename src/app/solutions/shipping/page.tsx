import { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { Check, ArrowRight, Clock, Globe, Package, TrendingUp, Ship, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Sales Automation for Shipping & Logistics | Enai.ai",
  description:
    "Transform shipping and logistics sales with AI BDR agents. Automate lane research, shipper outreach, and deal qualification while staying compliant across regions.",
  keywords:
    "shipping sales automation, logistics ai bdr, ai for freight brokerages, maritime sales automation, supply chain prospecting",
};

export default function ShippingIndustryPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#E8DDD4]">
        {/* Hero Section */}
        <section className="pt-40 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block bg-[#F5F1ED] text-black px-4 py-2 rounded-full text-sm font-medium mb-6 border border-black/5">
              Built for Shipping & Logistics
            </div>
            <h1 className="text-[40px] md:text-[64px] heading-strong leading-[1.1] mb-6 text-black max-w-4xl mx-auto">
              Fill Containers Faster with AI Associates Fluent in Every Trade Lane
            </h1>
            <p className="text-lg md:text-xl text-[#666666] max-w-2xl mx-auto mb-10 leading-relaxed">
              Stop manually researching sailing schedules and prospect lists. Activate AI agents that monitor capacity, identify high-volume shippers, and book qualified meetings 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://calendly.com/enai-ai2024/30min"
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-3xl font-medium transition-all hover:bg-gray-800 hover:scale-105"
              >
                Book Shipping Demo
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#shipping-features"
                className="inline-flex items-center justify-center gap-2 bg-[#F5F1ED] text-black px-8 py-4 rounded-3xl font-medium transition-all hover:bg-white hover:shadow-sm"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </section>

        {/* Problem/Agitation Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[32px] md:text-[48px] heading-strong text-black mb-4">
                The Old Way of Selling Freight is Broken
              </h2>
              <p className="text-[#666666] text-lg max-w-2xl mx-auto">
                Manual prospecting can't keep up with the speed of global logistics.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#F5F1ED] p-8 rounded-2xl transition-transform hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="text-black" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">Missed RFPs & Spot Ops</h3>
                <p className="text-[#666666] leading-relaxed">
                  Your sales team can't monitor every blank sailing or spot rate change. You miss pure profit opportunities because you aren't first to the inbox.
                </p>
              </div>

              <div className="bg-[#F5F1ED] p-8 rounded-2xl transition-transform hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="text-black" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">Fragmented Coverage</h3>
                <p className="text-[#666666] leading-relaxed">
                  Shippers operate in every timezone. Hiring regional SDR pods in Asia, Europe, and the Americas is expensive and hard to manage.
                </p>
              </div>

              <div className="bg-[#F5F1ED] p-8 rounded-2xl transition-transform hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6">
                  <Package className="text-black" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">Low-Context Outreach</h3>
                <p className="text-[#666666] leading-relaxed">
                  Generic "do you have freight?" emails get deleted. Shippers demand partners who know their lanes, commodities, and pain points upfront.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Workflows */}
        <section id="shipping-features" className="py-20 px-6 bg-[#F5F1ED] rounded-[40px] mx-4 md:mx-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[32px] md:text-[48px] heading-strong text-black mb-6">
                The Enai Advantage
              </h2>
              <p className="text-[#666666] text-lg max-w-2xl mx-auto">
                Precision logistics sales powered by AI agents that understand the nuances of global trade.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-8 md:p-10 rounded-3xl hover:shadow-lg transition-shadow duration-300">
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#E8DDD4]">
                  <Ship className="text-black" size={24} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-black">Lane-Level Intelligence</h3>
                <p className="text-[#666666] mb-8 leading-relaxed">
                  Don't just blast emails. Target shippers moving volume on YOUR specific lanes with data-backed insights.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                      <Check className="text-black w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-black/80">Identify shippers by HS Code and trade lane volume</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                      <Check className="text-black w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-black/80">Trigger outreach based on sailing schedule changes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                      <Check className="text-black w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-black/80">Prioritize high-yield commodities automatically</span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 md:p-10 rounded-3xl hover:shadow-lg transition-shadow duration-300">
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#E8DDD4]">
                  <Globe className="text-black" size={24} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-black">24/7 Global "Always-On"</h3>
                <p className="text-[#666666] mb-8 leading-relaxed">
                  Your AI associates work while your competitors sleep, ensuring you're the first response to every inquiry in every market.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                      <Check className="text-black w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-black/80">Multilingual fluency (English, Mandarin, Spanish)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                      <Check className="text-black w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-black/80">Instant response to inbound quotes and questions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                      <Check className="text-black w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-black/80">Seamless handoff to local commercial teams</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 md:p-10 rounded-3xl hover:shadow-lg transition-shadow duration-300">
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#E8DDD4]">
                  <ShieldCheck className="text-black" size={24} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-black">Compliance & Trust Built-In</h3>
                <p className="text-[#666666] mb-8 leading-relaxed">
                  Freight sales requires strict governance. We built the safeguards so you can automate with confidence.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                      <Check className="text-black w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-black/80">SOC 2 Type II compliant security standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                      <Check className="text-black w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-black/80">Automated PII redaction in transcripts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                      <Check className="text-black w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-black/80">Complete audit trails for legal review</span>
                  </li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-8 md:p-10 rounded-3xl hover:shadow-lg transition-shadow duration-300">
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#E8DDD4]">
                  <TrendingUp className="text-black" size={24} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-black">CRM That Actually Updates Itself</h3>
                <p className="text-[#666666] mb-8 leading-relaxed">
                  Never chase a sales rep for notes again. Enai automatically logs every interaction, quote, and detail.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                      <Check className="text-black w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-black/80">Real-time sync with Salesforce, HubSpot, and more</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                      <Check className="text-black w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-black/80">Structured meeting briefs delivered to Slack/Teams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                      <Check className="text-black w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-black/80">Auto-enrichment of account data</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KPIs / Proof */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-6 rounded-2xl border border-black/5 bg-white/50">
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">45%</div>
                <div className="text-[#666666] font-medium">Faster RFP Cycles</div>
              </div>
              <div className="p-6 rounded-2xl border border-black/5 bg-white/50">
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">70%</div>
                <div className="text-[#666666] font-medium">Cost Savings</div>
              </div>
              <div className="p-6 rounded-2xl border border-black/5 bg-white/50">
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">3x</div>
                <div className="text-[#666666] font-medium">Qualified Shippers</div>
              </div>
              <div className="p-6 rounded-2xl border border-black/5 bg-white/50">
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">24/7</div>
                <div className="text-[#666666] font-medium">Coverage Hours</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study - Real Platform Data */}
        <section className="py-20 px-6 bg-white rounded-[40px] mx-4 md:mx-8 mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-[#d7dedf] text-black px-4 py-2 rounded-full text-sm font-medium mb-6 border border-black/5">
                  Real World Impact
                </div>
                <h2 className="text-[32px] md:text-[40px] heading-strong text-black mb-6 leading-tight">
                  Scale your commercial team without the headcount
                </h2>
                <p className="text-[#666666] text-lg mb-8 leading-relaxed">
                  Deploying AI associates reduces prospecting time by 70%, allowing your team to focus on high-value negotiations and closing deals.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F5F1ED] flex items-center justify-center">
                    <span className="font-bold text-black">VP</span>
                  </div>
                  <div>
                    <p className="font-semibold text-black">VP Sales</p>
                    <p className="text-sm text-[#666666]">Enterprise Customer</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#d7dedf] p-8 md:p-10 rounded-3xl border border-black/5">
                <div className="grid gap-8">
                  <div>
                    <div className="text-5xl font-bold text-black mb-2">3x</div>
                    <div className="text-[#666666]">Increase in qualified pipeline</div>
                  </div>
                  <div className="h-px bg-black/10" style={{ backgroundColor: '#c1c9cb' }}></div>
                  <div>
                    <div className="text-5xl font-bold text-black mb-2">70%</div>
                    <div className="text-[#666666]">Reduction in prospecting time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[32px] md:text-[48px] heading-strong text-black mb-6">
              Ready to Modernize Your Shipping Sales?
            </h2>
            <p className="text-xl text-[#666666] mb-10 max-w-2xl mx-auto leading-relaxed">
              Launch AI commercial associates that speak the language of ports, customs, and global shippers. Set up in under two weeks.
            </p>
            <Link
              href="https://calendly.com/enai-ai2024/30min"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-10 py-5 rounded-3xl font-medium transition-all hover:bg-gray-800 hover:scale-105 shadow-xl"
            >
              Schedule Shipping Demo
              <ArrowRight size={20} />
            </Link>
            <p className="mt-6 text-sm text-[#666666]">
              No credit card required. SOC 2 Type II Compliant.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
