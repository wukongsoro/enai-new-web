import { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Sales Automation for Marketing & Service Agencies | Scale Client Acquisition",
  description: "Scale your agency's client acquisition 5x with AI-powered outreach. Perfect for marketing agencies, consulting firms, and service providers.",
  keywords: "AI for marketing agencies, agency sales automation, client acquisition automation, consulting firm sales tools",
};

export default function AgenciesSolutionPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-6 mt-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Scale Your Agency Sales with AI Automation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Win 5x more clients without scaling your sales team. Built for marketing agencies, consultancies, and service providers.
            </p>
            <Link
              href="https://calendly.com/enai-ai2024/30min"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition inline-block"
            >
              Book Agency Demo
            </Link>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Built for Agency Growth</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Multi-Client Management</h3>
                <p className="text-gray-600">
                  Manage outreach for multiple service lines and client types with intelligent campaign orchestration.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Case Study Automation</h3>
                <p className="text-gray-600">
                  Automatically match prospects with relevant case studies and success stories based on industry and needs.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Retainer Pipeline Building</h3>
                <p className="text-gray-600">
                  Focus on high-value retainer opportunities with AI handling initial qualification and discovery scheduling.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Agency?</h2>
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

