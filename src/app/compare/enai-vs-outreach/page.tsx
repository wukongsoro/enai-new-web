import { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Enai.ai vs Outreach.io: AI-First vs Traditional Sales Engagement | 2025 Comparison",
  description: "Compare Enai.ai and Outreach.io: AI-powered automation vs traditional sales engagement. See which platform delivers better ROI for your sales team.",
  keywords: "Enai.ai vs Outreach.io, AI BDR vs sales engagement, sales automation comparison",
};

export default function EnaiVsOutreachPage() {
  return (
    <>
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ComparisonPage",
            "name": "Enai.ai vs Outreach.io Comparison",
            "mainEntity": [
              {
                "@type": "SoftwareApplication",
                "name": "Enai.ai",
                "applicationCategory": "BusinessApplication"
              },
              {
                "@type": "SoftwareApplication",
                "name": "Outreach.io",
                "applicationCategory": "BusinessApplication"
              }
            ]
          })
        }}
      />
      
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-6 mt-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enai.ai vs Outreach.io: AI-First vs Traditional Sales Engagement
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Compare AI-powered BDR automation with traditional sales engagement platforms
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="https://calendly.com/enai-ai2024/30min"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Try Enai.ai
              </Link>
              <Link
                href="#comparison"
                className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-semibold transition"
              >
                See Comparison
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Key Differences</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-orange-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Enai.ai: AI-First Automation</h3>
                <p className="mb-4 text-gray-700">Complete AI BDR replacement that handles prospecting, qualification, and booking autonomously.</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2"><Check className="text-green-500" size={20} /> Fully autonomous operation</li>
                  <li className="flex gap-2"><Check className="text-green-500" size={20} /> AI-powered personalization</li>
                  <li className="flex gap-2"><Check className="text-green-500" size={20} /> Automated qualification</li>
                  <li className="flex gap-2"><Check className="text-green-500" size={20} /> 70-85% cost reduction</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-700">Outreach.io: Sales Engagement Platform</h3>
                <p className="mb-4 text-gray-700">Human-operated platform for managing sales sequences and workflows.</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2"><Check className="text-green-500" size={20} /> Sequence automation</li>
                  <li className="flex gap-2"><Check className="text-green-500" size={20} /> Team collaboration tools</li>
                  <li className="flex gap-2"><Check className="text-green-500" size={20} /> Enterprise features</li>
                  <li className="flex gap-2"><X className="text-red-500" size={20} /> Requires human operation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Scale with AI Automation?</h2>
            <Link
              href="https://calendly.com/enai-ai2024/30min"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition"
            >
              Schedule Demo
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

