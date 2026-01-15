import { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Sales Automation London | AI BDR Software UK | Enai.ai",
  description: "Top AI sales automation platform for London and UK companies. Scale your sales team 10x with AI BDR agents. GMT/BST timezone support. Serving City of London, Canary Wharf, and Greater London.",
  keywords: "AI sales automation London, AI BDR UK, sales automation London, UK sales software, London B2B automation, AI prospecting UK",
  openGraph: {
    title: "AI Sales Automation for London Companies | Enai.ai",
    description: "Transform your UK sales team with AI-powered automation. 70% cost reduction, 3x more meetings. GMT timezone support.",
    url: "https://www.enai.ai/locations/london",
  },
};

export default function LondonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Enai AI - London HQ",
            "image": "https://www.enai.ai/enai-logo.png",
            "description": "AI-powered sales automation platform serving London and UK companies",
            "areaServed": {
              "@type": "City",
              "name": "London",
              "containedInPlace": {
                "@type": "Country",
                "name": "United Kingdom"
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
                    "description": "Automated prospecting, qualification, and outreach for UK B2B companies"
                  }
                }
              ]
            },
            "url": "https://www.enai.ai/locations/london",
            "telephone": "",
            "priceRange": "$100-$200 per agent/month",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "128 City Road",
              "addressLocality": "London",
              "postalCode": "EC1V 2NX",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.5271,
              "longitude": -0.0857
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
              Serving London & United Kingdom
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Sales Automation for London Companies
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join leading UK enterprises using Enai.ai to transform sales operations. GMT/BST timezone support included for London and beyond.
            </p>
            <Link
              href="https://calendly.com/enai-ai2024/30min"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition inline-block"
            >
              Schedule Demo (GMT Available)
            </Link>
          </div>
        </section>

        {/* Why London Companies Choose Enai */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why UK Companies Choose Enai.ai</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🇬🇧</div>
                <h3 className="text-xl font-semibold mb-3">UK Market Expertise</h3>
                <p className="text-gray-600">
                  Optimized for the UK business environment. Local support and understanding of GDPR compliance.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Scale Rapidly</h3>
                <p className="text-gray-600">
                  10x your pipeline without the London-level salaries. Significant cost reduction compared to hiring local BDRs.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-3">Enterprise Ready</h3>
                <p className="text-gray-600">
                  Trusted by London startups and enterprises. GDPR compliant with enterprise-grade security.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results for UK Companies */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Results for UK Companies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-orange-600 mb-2">70%</div>
                <div className="text-lg font-semibold mb-2">Cost Reduction</div>
                <p className="text-gray-600">
                  Compared to hiring London-based BDRs at £35-50K+ per year. AI agents work 24/7 at a fraction of the cost.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-orange-600 mb-2">3x</div>
                <div className="text-lg font-semibold mb-2">More Qualified Meetings</div>
                <p className="text-gray-600">
                  AI-powered personalization at scale. More meetings with decision-makers across the UK and Europe.
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

        {/* Industries We Serve in London */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Industries We Serve in London</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['FinTech', 'SaaS & Tech', 'Legal Tech', 'Financial Services', 'Recruitment', 'Healthcare', 'E-commerce', 'Consulting'].map((industry) => (
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
              Join UK companies transforming their sales with AI automation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="https://calendly.com/enai-ai2024/30min"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition inline-block"
              >
                Book Demo (GMT Support)
              </Link>
              <Link
                href="/pricing"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition inline-block border-2 border-white"
              >
                View Pricing
              </Link>
            </div>
            <p className="mt-6 text-sm opacity-75">
              Serving City of London, Canary Wharf, Shoreditch, and the Greater London Area
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
