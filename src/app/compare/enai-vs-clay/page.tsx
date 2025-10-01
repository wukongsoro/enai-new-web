import { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enai.ai vs Clay: End-to-End Solution vs Data Enrichment | 2025 Comparison",
  description: "Compare Enai.ai's complete AI BDR platform with Clay's data enrichment tool. See which solution fits your sales automation needs.",
  keywords: "Enai.ai vs Clay, AI BDR comparison, data enrichment vs automation",
};

export default function EnaiVsClayPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-6 mt-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enai.ai vs Clay: Complete AI BDR vs Data Enrichment
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Understanding the difference between end-to-end automation and data enrichment tools
            </p>
            <Link
              href="https://calendly.com/enai-ai2024/30min"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition inline-block"
            >
              Explore Enai.ai
            </Link>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">The Key Difference</h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              <strong>Enai.ai</strong> is a complete AI BDR platform that handles prospecting, outreach, qualification, and booking.
              <br /><br />
              <strong>Clay</strong> is a data enrichment and research tool that helps with prospecting but requires separate tools for outreach and engagement.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need Complete Automation?</h2>
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

