import { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Sales Automation New York | AI BDR Software NYC | Enai.ai",
  description: "Top AI sales automation platform for New York companies. Scale your NYC sales team 10x with AI BDR agents. ET timezone support. Serving Manhattan, Brooklyn, Queens, and the Tri-State Area.",
  keywords: "AI sales automation New York, AI BDR NYC, sales automation Manhattan, New York sales software, NYC B2B automation, AI prospecting New York",
  openGraph: {
    title: "AI Sales Automation for New York Companies | Enai.ai",
    description: "Transform your NYC sales team with AI-powered automation. 70% cost reduction, 3x more meetings. ET timezone support.",
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
            "description": "AI-powered sales automation platform serving New York companies",
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
              "name": "Sales Automation Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI BDR Automation",
                    "description": "Automated prospecting, qualification, and outreach for NYC B2B companies"
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
        <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-6 mt-32">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Serving New York & Tri-State Area
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Sales Automation for New York Companies
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join leading NYC enterprises using Enai.ai to transform sales operations. Eastern timezone support included for Manhattan, Brooklyn, Queens, and beyond.
            </p>
            <Link
              href="https://calendly.com/enai-ai2024/30min"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition inline-block"
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
                <div className="text-4xl mb-4">🗽</div>
                <h3 className="text-xl font-semibold mb-3">Local Market Expertise</h3>
                <p className="text-gray-600">
                  Optimized for the fast-paced New York business environment. ET timezone support for real-time engagement.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold mb-3">Scale at NYC Speed</h3>
                <p className="text-gray-600">
                  10x your pipeline without the NYC-level salaries. 70% cost reduction compared to hiring local BDRs.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
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
                <div className="text-4xl font-bold text-orange-600 mb-2">70%</div>
                <div className="text-lg font-semibold mb-2">Cost Reduction</div>
                <p className="text-gray-600">
                  Compared to hiring NYC-based BDRs at $60-80K+ per year. AI agents work 24/7 at a fraction of the cost.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-orange-600 mb-2">3x</div>
                <div className="text-lg font-semibold mb-2">More Qualified Meetings</div>
                <p className="text-gray-600">
                  AI-powered personalization at scale. More meetings with decision-makers across NYC and beyond.
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
        <section className="py-16 px-6 bg-orange-500 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Scale Your NYC Sales?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join New York companies transforming their sales with AI automation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="https://calendly.com/enai-ai2024/30min" 
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition inline-block"
              >
                Book Demo (ET Support)
              </Link>
              <Link 
                href="/pricing" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition inline-block border-2 border-white"
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
