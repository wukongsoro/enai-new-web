import { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Sales Automation San Francisco | AI BDR Software SF Bay Area | Enai.ai",
  description: "Leading AI sales automation platform serving San Francisco and Bay Area companies. Scale your sales 10x with AI BDR agents. Trusted by SF tech startups and enterprises.",
  keywords: "AI sales automation San Francisco, AI BDR SF, sales automation Bay Area, San Francisco sales software",
};

export default function SanFranciscoPage() {
  return (
    <>
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Enai.ai - San Francisco",
            "description": "AI Sales Automation for San Francisco Companies",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "San Francisco",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.7749",
              "longitude": "-122.4194"
            },
            "areaServed": {
              "@type": "City",
              "name": "San Francisco"
            }
          })
        }}
      />
      
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-6 mt-32">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Serving San Francisco & Bay Area
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Sales Automation for San Francisco Companies
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join leading SF tech companies using Enai AI to scale sales 10x without hiring more SDRs. Pacific timezone support included.
            </p>
            <Link
              href="https://calendly.com/enai-ai2024/30min"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition inline-block"
            >
              Schedule Demo (PT Available)
            </Link>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why SF Companies Choose Enai AI</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Built for SF Tech Scene</h3>
                <p className="text-gray-600">
                  Optimized for fast-growth startups and tech companies in the Bay Area market.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Pacific Time Support</h3>
                <p className="text-gray-600">
                  Full coverage during SF business hours with AI agents working 24/7.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Local Success Stories</h3>
                <p className="text-gray-600">
                  Trusted by SF-based Series A-C companies to scale ARR efficiently.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your SF Sales Team?</h2>
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

