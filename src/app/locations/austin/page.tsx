import { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Revenue Workflows Austin | Revenue OS Austin TX | Enai.ai",
  description: "Leading revenue workflows platform serving Austin and Texas tech companies. Coordinate account research, outreach, qualification, and handoff. Central Time (CT) support. Serving Silicon Hills, Downtown, and Domain.",
  keywords: "revenue workflows Austin, Revenue Workflow Austin TX, revenue workflows Texas, Austin revenue software, Silicon Hills B2B revenue workflows, account research Texas",
  openGraph: {
    title: "Revenue Workflows for Austin Companies | Enai.ai",
    description: "Transform your Austin sales team with governed revenue workflows. 70% cost reduction, 3x more meetings. Central Time support.",
    url: "https://www.enai.ai/locations/austin",
  },
};

export default function AustinPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Enai AI - Austin",
            "image": "https://www.enai.ai/enai-logo.png",
            "description": "Revenue Operating System serving Austin and Texas companies",
            "areaServed": {
              "@type": "City",
              "name": "Austin",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
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
                    "description": "Automated lead identification and research for Austin tech companies",
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
            "url": "https://www.enai.ai/locations/austin",
            "telephone": "",
            "priceRange": "$100-$200 per agent/month",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Austin",
              "addressRegion": "TX",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 30.2672,
              "longitude": -97.7431
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
              Serving Austin & Texas
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revenue Workflows for Austin Companies
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join leading Austin tech companies using Enai.ai to coordinate account research, outreach, qualification, and handoff with regional context. Central Time support included.
            </p>
            <Link
              href="https://calendly.com/enai-ai2024/30min"
              className="bg-[#1E3A3A] hover:bg-[#16302F] text-white px-8 py-4 rounded-lg font-semibold transition inline-block"
            >
              Schedule Demo (CT Available)
            </Link>
          </div>
        </section>

        {/* Why Austin Companies Choose Enai */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Austin Companies Choose Enai.ai</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Silicon Hills Expert</h3>
                <p className="text-gray-600">
                  Optimized for the booming Austin tech ecosystem. Local market understanding for effective outreach.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Scale Efficiently</h3>
                <p className="text-gray-600">
                  Build more consistent pipeline without adding unnecessary headcount. 70% cost reduction compared to hiring local sales teams.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Rapid Implementation</h3>
                <p className="text-gray-600">
                  Get up and running in days, not months. Perfect for fast-moving Texas startups.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results for Austin Companies */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Results for Texas Companies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-[#1E3A3A] mb-2">70%</div>
                <div className="text-lg font-semibold mb-2">Cost Reduction</div>
                <p className="text-gray-600">
                  Compared to hiring Austin-based BDRs at $50-70K+ per year. ENAI workflows run across time zones at a fraction of the cost.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-[#1E3A3A] mb-2">3x</div>
                <div className="text-lg font-semibold mb-2">More Qualified Meetings</div>
                <p className="text-gray-600">
                  Context-led outreach with approved messaging. More meetings with decision-makers across Texas and beyond.
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

        {/* Industries We Serve in Austin */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Industries We Serve in Austin</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Enterprise Software', 'E-commerce Tech', 'Digital Health', 'Cybersecurity', 'Real Estate Tech', 'EdTech', 'Consumer Tech', 'IT Services'].map((industry) => (
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
              Join Texas companies running revenue work with ENAI.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="https://calendly.com/enai-ai2024/30min" 
                className="bg-white text-[#1E3A3A] hover:bg-[#F5F1ED] px-8 py-4 rounded-lg font-semibold transition inline-block"
              >
                Book Demo (CT Support)
              </Link>
              <Link 
                href="/pricing" 
                className="bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition inline-block border-2 border-white"
              >
                View Pricing
              </Link>
            </div>
            <p className="mt-6 text-sm opacity-75">
              Serving Austin, Round Rock, San Marcos, and the Greater Austin Area
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
