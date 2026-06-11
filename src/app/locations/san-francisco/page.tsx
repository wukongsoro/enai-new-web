import { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Revenue Workflows San Francisco | Revenue OS SF Bay Area | Enai.ai",
  description: "Leading revenue workflows platform serving San Francisco and Bay Area companies. Coordinate account research, outreach, qualification, and handoff. Pacific Time (PT) support. Serving Silicon Valley, Oakland, and San Jose.",
  keywords: "revenue workflows San Francisco, Revenue Workflow SF, revenue workflows Bay Area, San Francisco revenue software, Silicon Valley B2B revenue workflows, account research California",
  openGraph: {
    title: "Revenue Workflows for San Francisco Companies | Enai.ai",
    description: "Transform your SF sales team with governed revenue workflows. 70% cost reduction, 3x more meetings. Pacific Time support.",
    url: "https://www.enai.ai/locations/san-francisco",
  },
};

export default function SanFranciscoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Enai AI - San Francisco",
            "image": "https://www.enai.ai/enai-logo.png",
            "description": "Revenue Operating System serving San Francisco and Bay Area companies",
            "areaServed": {
              "@type": "City",
              "name": "San Francisco",
              "containedInPlace": {
                "@type": "State",
                "name": "California"
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
                    "name": "ProspectorAI",
                    "description": "Automated lead identification and research for SF tech companies",
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
            "url": "https://www.enai.ai/locations/san-francisco",
            "telephone": "",
            "priceRange": "$100-$200 per agent/month",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "San Francisco",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 37.7749,
              "longitude": -122.4194
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
        <section className="bg-[#F5F1ED] py-20 px-6 mt-32">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-white border border-black/10 text-[#1E3A3A] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Serving San Francisco & Bay Area
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revenue Workflows for San Francisco Companies
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join leading SF tech companies using Enai.ai to coordinate account research, outreach, qualification, and handoff with regional context. Pacific Time support included.
            </p>
            <Link
              href="https://calendly.com/enai-ai2024/30min"
              className="bg-[#1E3A3A] hover:bg-[#16302F] text-white px-8 py-4 rounded-lg font-semibold transition inline-block"
            >
              Schedule Demo (PT Available)
            </Link>
          </div>
        </section>

        {/* Why SF Companies Choose Enai */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why SF Tech Companies Choose Enai.ai</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Silicon Valley Ready</h3>
                <p className="text-gray-600">
                  Built for high-growth startups and enterprises. Integrate seamlessly with your modern tech stack.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Hyper-Growth Scaling</h3>
                <p className="text-gray-600">
                  Coordinate outbound programs with governed volume and pacing. 70% cost reduction vs Bay Area BDR salaries.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Pacific Time Support</h3>
                <p className="text-gray-600">
                  Real-time support during your business hours. ENAI workflows run across time zones to cover global markets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results for SF Companies */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Results for Bay Area Companies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-[#1E3A3A] mb-2">70%</div>
                <div className="text-lg font-semibold mb-2">Cost Reduction</div>
                <p className="text-gray-600">
                  Compared to hiring SF-based BDRs at $80-100K+ per year. ENAI provides governed workflow coverage at a fraction of the cost.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-[#1E3A3A] mb-2">3x</div>
                <div className="text-lg font-semibold mb-2">More Qualified Meetings</div>
                <p className="text-gray-600">
                  Context-led outreach replaces generic templates and helps teams reach hard-to-engage decision makers.
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
                  ENAI workflows run across time zones, ensuring you capture leads in every timezone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve in SF */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Industries We Serve in the Bay Area</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Enterprise SaaS', 'FinTech', 'Biotech & Health', 'Deep Tech', 'Venture Capital', 'Cybersecurity', 'Cloud Infrastructure', 'DevTools'].map((industry) => (
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
            <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Sales?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the Bay Area's top companies running revenue work with ENAI.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="https://calendly.com/enai-ai2024/30min" 
                className="bg-white text-[#1E3A3A] hover:bg-[#F5F1ED] px-8 py-4 rounded-lg font-semibold transition inline-block"
              >
                Book Demo (PT Support)
              </Link>
              <Link 
                href="/pricing" 
                className="bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition inline-block border-2 border-white"
              >
                View Pricing
              </Link>
            </div>
            <p className="mt-6 text-sm opacity-75">
              Serving San Francisco, Oakland, San Jose, Palo Alto, and the entire Bay Area
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
