import { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Sales Automation Seattle | AI BDR Software Seattle WA | Enai.ai",
  description: "Leading AI sales automation platform serving Seattle and PNW tech companies. Scale your sales 10x with AI BDR agents. Pacific Time (PT) support. Serving Bellevue, Redmond, and Kirkland.",
  keywords: "AI sales automation Seattle, AI BDR Seattle WA, sales automation Washington, Seattle sales software, PNW B2B automation, AI prospecting Seattle",
  openGraph: {
    title: "AI Sales Automation for Seattle Companies | Enai.ai",
    description: "Transform your Seattle sales team with AI-powered automation. 70% cost reduction, 3x more meetings. Pacific Time support.",
    url: "https://www.enai.ai/locations/seattle",
  },
};

export default function SeattlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Enai AI - Seattle",
            "image": "https://www.enai.ai/enai-logo.png",
            "description": "AI-powered sales automation platform serving Seattle and Washington companies",
            "areaServed": {
              "@type": "City",
              "name": "Seattle",
              "containedInPlace": {
                "@type": "State",
                "name": "Washington"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Sales Automation Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "ProspectorAI",
                    "description": "Automated lead identification and research for Seattle tech companies",
                    "url": "https://www.enai.ai/agents/prospectorai"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "OutreachAI",
                    "description": "Personalized multi-channel outreach automation",
                    "url": "https://www.enai.ai/agents/outreachai"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "QualifierAI",
                    "description": "Automated lead qualification and meeting scheduling",
                    "url": "https://www.enai.ai/agents/qualifierai"
                  }
                }
              ]
            },
            "url": "https://www.enai.ai/locations/seattle",
            "telephone": "",
            "priceRange": "$100-$200 per agent/month",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Seattle",
              "addressRegion": "WA",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 47.6062,
              "longitude": -122.3321
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "18:00"
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
        <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-6 mt-32">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Serving Seattle & Pacific Northwest
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Sales Automation for Seattle Companies
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join leading Seattle tech companies using Enai.ai to scale sales 10x without hiring more SDRs. Pacific Time support included.
            </p>
            <Link
              href="https://calendly.com/enai-ai2024/30min"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition inline-block"
            >
              Schedule Demo (PT Available)
            </Link>
          </div>
        </section>

        {/* Why Seattle Companies Choose Enai */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Seattle Companies Choose Enai.ai</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-semibold mb-3">Cloud Capital Ready</h3>
                <p className="text-gray-600">
                  Built for the advanced tech ecosystem of the PNW. Enterprise-grade security and scalability.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌲</div>
                <h3 className="text-xl font-semibold mb-3">Local Market Focus</h3>
                <p className="text-gray-600">
                  Understanding of the unique Seattle business culture and key industries like Cloud, Retail, and Biotech.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Automate Growth</h3>
                <p className="text-gray-600">
                  Scale your sales team efficiently. 70% cost reduction compared to hiring local sales talent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results for Seattle Companies */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Results for PNW Companies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-orange-600 mb-2">70%</div>
                <div className="text-lg font-semibold mb-2">Cost Reduction</div>
                <p className="text-gray-600">
                  Compared to hiring Seattle-based BDRs at $65-85K+ per year. AI agents work 24/7 at a fraction of the cost.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-orange-600 mb-2">3x</div>
                <div className="text-lg font-semibold mb-2">More Qualified Meetings</div>
                <p className="text-gray-600">
                  AI-powered personalization at scale. More meetings with decision-makers across the West Coast.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-orange-600 mb-2">50%</div>
                <div className="text-lg font-semibold mb-2">Pipeline Velocity Increase</div>
                <p className="text-gray-600">
                  Faster deal flow with automated follow-ups and intelligent lead qualification.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-lg font-semibold mb-2">Always-On Prospecting</div>
                <p className="text-gray-600">
                  Never miss an opportunity. AI agents work around the clock to fill your pipeline.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve in Seattle */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Industries We Serve in Seattle</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Cloud Computing', 'Retail Tech', 'Biotechnology', 'Gaming', 'Aerospace', 'Enterprise SaaS', 'AI & ML', 'Logistics'].map((industry) => (
                <div key={industry} className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="font-semibold text-gray-900">{industry}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-orange-500 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Sales?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join Seattle companies transforming their sales with AI automation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="https://calendly.com/enai-ai2024/30min" 
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition inline-block"
              >
                Book Demo (PT Support)
              </Link>
              <Link 
                href="/pricing" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition inline-block border-2 border-white"
              >
                View Pricing
              </Link>
            </div>
            <p className="mt-6 text-sm opacity-75">
              Serving Seattle, Bellevue, Redmond, Kirkland, and the Greater Seattle Area
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
