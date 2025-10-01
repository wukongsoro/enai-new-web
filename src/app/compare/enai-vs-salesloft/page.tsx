import { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enai.ai vs SalesLoft: AI BDR vs Sales Engagement Platform | 2025",
  description: "Compare Enai.ai AI-powered BDR automation with SalesLoft sales engagement platform. Find the right solution for scaling your sales team.",
  keywords: "Enai.ai vs SalesLoft, AI BDR, sales engagement comparison",
};

export default function EnaiVsSalesLoftPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-6 mt-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enai.ai vs SalesLoft: AI BDR vs Sales Engagement Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              AI-powered autonomous agents vs traditional sales engagement tools
            </p>
            <Link
              href="https://calendly.com/enai-ai2024/30min"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition inline-block"
            >
              See Enai.ai in Action
            </Link>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Automate Your BDR Function?</h2>
            <Link
              href="https://calendly.com/enai-ai2024/30min"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition inline-block"
            >
              Book Your Demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

