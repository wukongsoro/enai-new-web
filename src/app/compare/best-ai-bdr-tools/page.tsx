import { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best AI BDR Tools 2025: Complete Comparison Guide | Top 10 Platforms",
  description: "Comprehensive comparison of the top 10 AI BDR tools in 2025. Compare features, pricing, and capabilities to find the best AI sales automation platform for your team.",
  keywords: "best AI BDR tools 2025, AI sales automation platforms, top AI BDR software, AI SDR tools comparison",
};

export default function BestAIBDRToolsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-6 mt-32">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Best AI BDR Tools in 2025
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive comparison of the top AI-powered sales automation platforms
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Top AI BDR Platforms</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-orange-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-orange-600">1. Enai.ai</h3>
                    <p className="text-gray-600">Complete AI BDR Platform</p>
                  </div>
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">Best Overall</span>
                </div>
                <p className="text-gray-700 mb-4">
                  End-to-end AI BDR automation with ProspectorAI, QualifierAI, and OutreachAI agents.
                  Best for organizations seeking complete automation from prospecting to meeting booking.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="https://calendly.com/enai-ai2024/30min"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Additional platforms would be listed here */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <p className="text-gray-600 text-center">
                  Compare Enai.ai with other leading platforms to find the best fit for your sales team.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-orange-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Sales Development?</h2>
            <Link
              href="https://calendly.com/enai-ai2024/30min"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition inline-block"
            >
              Schedule Demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

