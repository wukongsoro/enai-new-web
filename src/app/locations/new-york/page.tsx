import { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Revenue Workflows New York | Revenue OS NYC | Enai.ai",
  description: "Top revenue workflows platform for New York companies. Coordinate account research, outreach, qualification, and handoff for New York revenue teams. ET timezone support. Serving Manhattan, Brooklyn, Queens, and the Tri-State Area.",
  keywords: "revenue workflows New York, Revenue Workflow NYC, revenue workflows Manhattan, New York revenue software, NYC B2B revenue workflows, account research New York",
  openGraph: {
    title: "Revenue Workflows for New York Companies | Enai.ai",
    description: "Transform your NYC sales team with governed revenue workflows. 70% cost reduction, 3x more meetings. ET timezone support.",
    url: "https://www.enai.ai/locations/new-york",
  },
};

export default function NewYorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Enai AI - New York",
            "image": "https://www.enai.ai/enai-logo.png",
            "description": "Revenue Operating System serving New York companies",
            "areaServed": {
              "@type": "City",
              "name": "New York",
              "containedInPlace": {
                "@type": "State",
                "name": "New York"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Revenue Workflow Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Revenue Workflow Automation",
                    "description": "Governed account research, qualification, and outreach for NYC B2B companies"
                  }
                }
              ]
            },
            "url": "https://www.enai.ai/locations/new-york",
            "telephone": "",
            "priceRange": "$100-$200 per agent/month",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00-05:00",
              "closes": "18:00-05:00"
            },
            "sameAs": [
              "https://www.linkedin.com/company/enai-ai",
              "https://twitter.com/enai_ai"
            ]
          })
        }}
      />
      
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-[#F5F1ED] py-20 px-6 mt-32">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-white border border-black/10 text-[#1E3A3A] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Serving New York & Tri-State Area
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revenue Workflows for New York Companies
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join leading NYC enterprises using Enai.ai to run revenue workflows. Eastern timezone support included for Manhattan, Brooklyn, Queens, and beyond.
            </p>
            <Link
              href="https://calendly.com/enai-ai2024/30min"
              className="bg-[#1E3A3A] hover:bg-[#16302F] text-white px-8 py-4 rounded-lg font-semibold transition inline-block"
            >
              Schedule Demo (ET Available)
            </Link>
          </div>
        </section>

        {/* Why NYC Companies Choose Enai */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why NYC Companies Choose Enai.ai</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Local Market Expertise</h3>
                <p className="text-gray-600">
                  Optimized for the fast-paced New York business environment. ET timezone support for real-time engagement.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Scale at NYC Speed</h3>
                <p className="text-gray-600">
                  Build more consistent pipeline without adding unnecessary headcount. 70% cost reduction compared to hiring local BDRs.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Enterprise Ready</h3>
                <p className="text-gray-600">
                  Trusted by NYC startups and enterprises. GDPR, CCPA compliant with enterprise-grade security.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results for NYC Companies */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Results for New York Companies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-[#1E3A3A] mb-2">70%</div>
                <div className="text-lg font-semibold mb-2">Cost Reduction</div>
                <p className="text-gray-600">
                  Compared to hiring NYC-based BDRs at $60-80K+ per year. ENAI workflows run across time zones at a fraction of the cost.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-[#1E3A3A] mb-2">3x</div>
                <div className="text-lg font-semibold mb-2">More Qualified Meetings</div>
                <p className="text-gray-600">
                  Context-led outreach with approved messaging. More meetings with decision-makers across NYC and beyond.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-[#1E3A3A] mb-2">50%</div>
                <div className="text-lg font-semibold mb-2">Pipeline Velocity Increase</div>
                <p className="text-gray-600">
                  Faster deal flow with automated follow-ups and intelligent lead qualification.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-[#1E3A3A] mb-2">24/7</div>
                <div className="text-lg font-semibold mb-2">Always-On Workflow Coverage</div>
                <p className="text-gray-600">
                  Keep follow-up moving across time zones with governed workflow coverage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve in NYC */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Industries We Serve in NYC</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['FinTech', 'SaaS & Tech', 'Professional Services', 'Media & Advertising', 'Real Estate Tech', 'Healthcare Tech', 'E-commerce', 'Consulting'].map((industry) => (
                <div key={industry} className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="font-semibold text-gray-900">{industry}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-[#1E3A3A] text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Scale Your NYC Sales?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join New York companies running revenue work with ENAI.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="https://calendly.com/enai-ai2024/30min" 
                className="bg-white text-[#1E3A3A] hover:bg-[#F5F1ED] px-8 py-4 rounded-lg font-semibold transition inline-block"
              >
                Book Demo (ET Support)
              </Link>
              <Link 
                href="/pricing" 
                className="bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition inline-block border-2 border-white"
              >
                View Pricing
              </Link>
            </div>
            <p className="mt-6 text-sm opacity-75">
              Serving Manhattan, Brooklyn, Queens, Bronx, Staten Island, and the Greater NYC Metro Area
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
