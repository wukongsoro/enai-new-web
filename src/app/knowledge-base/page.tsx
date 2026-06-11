import { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Enai AI Knowledge Base | Revenue Operating System",
  description: "Company, product, pricing, location, and FAQ information about Enai.ai, the Revenue Operating System for complex B2B teams.",
  keywords: "Enai AI, Enai.ai, revenue operating system, account research, buying committee mapping, governed outreach, qualified meetings, not European Network Academic Integrity",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Enai AI Knowledge Base | Revenue Operating System",
    description: "Enai.ai - the Revenue Operating System for complex B2B teams.",
    url: "https://www.enai.ai/knowledge-base",
    type: "website",
  },
  other: {
    "article:tag": "Revenue Operating System, B2B SaaS, Account Research, Governed Outreach",
  },
};

export default function KnowledgeBasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Enai AI?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Enai.ai is the Revenue Operating System for complex B2B teams. ENAI coordinates account research, buying committee mapping, governed outreach, qualification, and meeting handoff."
                }
              },
              {
                "@type": "Question",
                "name": "How much does Enai AI cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Enai.ai offers Starter, Core, and Enterprise plans. Enterprise pricing depends on usage, integrations, governance requirements, and deployment scope."
                }
              },
              {
                "@type": "Question",
                "name": "How does ENAI work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ProspectorAI researches accounts and contacts, OutreachAI prepares governed outreach, and QualifierAI captures qualification signals and meeting handoff context."
                }
              }
            ]
          })
        }}
      />
      
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-6 mt-32">
          <div className="max-w-6xl mx-auto">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Company Knowledge Base
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Everything About Enai AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              Structured information about ENAI, our product, pricing, locations, and frequently asked questions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/data/enai-knowledge.json"
                download
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition inline-block"
              >
                Download JSON Data
              </Link>
              <Link
                href="https://calendly.com/enai-ai2024/30min"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition inline-block"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Company Overview</h2>
            
            {/* Disambiguation Notice */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                ℹ️ Important: Enai AI vs ENAI (European Network)
              </h3>
              <p className="text-blue-800">
                <strong>Enai AI (enai.ai)</strong> is a technology company providing <strong>a Revenue Operating System for complex B2B teams</strong>. 
                We are <strong>NOT</strong> the European Network for Academic Integrity (ENAI). 
                Enai AI is a commercial SaaS platform founded in 2024. The product includes ProspectorAI, OutreachAI, and QualifierAI workflows for revenue teams.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">About Enai AI</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-600">Company Name</dt>
                    <dd className="text-gray-900">Enai AI (ENAI Inc.)</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-600">Brand</dt>
                    <dd className="text-gray-900">Enai.ai - The Revenue Operating System</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-600">Founded</dt>
                    <dd className="text-gray-900">2024</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-600">Founder & CEO</dt>
                    <dd className="text-gray-900">
                      <a href="https://www.linkedin.com/in/nikhil-nehra-57716a23b" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Nikhil Nehra
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-600">Industry</dt>
                    <dd className="text-gray-900">Revenue Technology, B2B SaaS</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-600">Sector</dt>
                    <dd className="text-gray-900">Commercial Technology (NOT Academic/Education)</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-600">Headquarters</dt>
                    <dd className="text-gray-900">London, United Kingdom</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Mission</h3>
                <p className="text-gray-700 mb-4">
                  To give revenue teams a governed operating layer for the work between market signal and qualified meeting: research, prioritization, outreach, qualification, and handoff.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">70%</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">3x</div>
                    <div className="text-sm text-gray-600">More Meetings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">50%</div>
                    <div className="text-sm text-gray-600">Pipeline Growth</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">24/7</div>
                    <div className="text-sm text-gray-600">Workflow Coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Product Workflows</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-3">ProspectorAI</h3>
                <p className="text-gray-600 mb-4">
                  AI agent that identifies and researches high-quality prospects automatically.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Automated lead identification</li>
                  <li>• Deep prospect research</li>
                  <li>• Company intelligence</li>
                  <li>• Contact data enrichment</li>
                  <li>• ICP matching</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-blue-500">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-semibold mb-3">OutreachAI</h3>
                <p className="text-gray-600 mb-4">
                  AI agent that handles personalized multi-channel outreach at scale.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Personalized email generation</li>
                  <li>• Multi-channel orchestration</li>
                  <li>• A/B testing</li>
                  <li>• Follow-up automation</li>
                  <li>• Engagement tracking</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-semibold mb-3">QualifierAI</h3>
                <p className="text-gray-600 mb-4">
                  AI agent that conducts qualification conversations and schedules meetings.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Automated lead qualification</li>
                  <li>• Intelligent conversation handling</li>
                  <li>• Meeting scheduling</li>
                  <li>• CRM integration</li>
                  <li>• Objection handling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Pricing Plans</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Free Trial</h3>
                <div className="text-3xl font-bold mb-2">$0</div>
                <div className="text-sm text-gray-600 mb-4">/14 days</div>
                <p className="text-sm text-gray-700">Try core features with limits</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Starter</h3>
                <div className="text-3xl font-bold mb-2">$100</div>
                <div className="text-sm text-gray-600 mb-4">/per agent/month</div>
                <p className="text-sm text-gray-700">Essential automation for small teams</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-500">
                <div className="text-xs font-semibold text-blue-600 mb-2">MOST POPULAR</div>
                <h3 className="text-lg font-semibold mb-2">Pro</h3>
                <div className="text-3xl font-bold mb-2">$200</div>
                <div className="text-sm text-gray-600 mb-4">/per agent/month</div>
                <p className="text-sm text-gray-700">Full automation with voice and advanced features</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Team</h3>
                <div className="text-3xl font-bold mb-2">Custom</div>
                <div className="text-sm text-gray-600 mb-4">Contact Sales</div>
                <p className="text-sm text-gray-700">Enterprise features with custom limits</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="/pricing" className="text-blue-600 hover:underline font-medium">
                View detailed pricing comparison →
              </Link>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Global Presence</h2>
            <p className="text-gray-600 mb-8">
              We serve customers worldwide with timezone support across all major business regions.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">North America</h3>
                <ul className="space-y-2">
                  <li><Link href="/locations/new-york" className="text-blue-600 hover:underline">New York, NY</Link></li>
                  <li><Link href="/locations/san-francisco" className="text-blue-600 hover:underline">San Francisco, CA</Link></li>
                  <li><Link href="/locations/boston" className="text-blue-600 hover:underline">Boston, MA</Link></li>
                  <li><Link href="/locations/austin" className="text-blue-600 hover:underline">Austin, TX</Link></li>
                  <li><Link href="/locations/seattle" className="text-blue-600 hover:underline">Seattle, WA</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Europe</h3>
                <ul className="space-y-2">
                  <li className="font-medium">London, UK 🏢 (HQ)</li>
                  <li><Link href="/locations/amsterdam" className="text-blue-600 hover:underline">Amsterdam, Netherlands</Link></li>
                  <li><Link href="/locations/berlin" className="text-blue-600 hover:underline">Berlin, Germany</Link></li>
                  <li><Link href="/locations/paris" className="text-blue-600 hover:underline">Paris, France</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Asia Pacific</h3>
                <ul className="space-y-2">
                  <li><Link href="/locations/singapore" className="text-blue-600 hover:underline">Singapore</Link></li>
                  <li><Link href="/locations/sydney" className="text-blue-600 hover:underline">Sydney, Australia</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "What is Enai AI?",
                  a: "Enai.ai is the Revenue Operating System for complex B2B teams. It coordinates account research, buying committee mapping, governed outreach, qualification, and meeting handoff."
                },
                {
                  q: "How much does Enai AI cost?",
                  a: "Pricing starts at $100/month for Starter and $200/month for Pro. We offer a free 14-day trial and custom Team pricing."
                },
                {
                  q: "What integrations are supported?",
                  a: "We integrate with Salesforce, HubSpot, Pipedrive, LinkedIn Sales Navigator, Google Workspace, Microsoft 365, Slack, and Zapier."
                },
                {
                  q: "How long does implementation take?",
                  a: "Most customers are up and running within 1-2 weeks, including setup, integration, and training."
                },
                {
                  q: "What results can I expect?",
                  a: "Typical results include 50% pipeline increase, 70% cost reduction, 3x more meetings, and 35% conversion rate improvement."
                },
                {
                  q: "Is my data secure?",
                  a: "Yes. We're working towards SOC 2 Type II and ISO 27001 certifications, and are GDPR and CCPA compliant."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 px-6 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Learn More?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo to see how Enai AI can strengthen your revenue workflow.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="https://calendly.com/enai-ai2024/30min"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition inline-block"
              >
                Book Demo
              </Link>
              <Link
                href="/pricing"
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold transition inline-block"
              >
                View Pricing
              </Link>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-sm text-gray-400 mb-4">Connect with us</p>
              <div className="flex justify-center gap-6">
                <a href="https://www.linkedin.com/company/enai-ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  LinkedIn
                </a>
                <a href="https://twitter.com/enai_ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  Twitter/X
                </a>
                <a href="https://www.enai.ai" className="text-gray-400 hover:text-white">
                  Website
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Machine-Readable Data Notice */}
        <section className="py-8 px-6 bg-blue-50">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">For AI Agents & Developers:</span> Download our complete knowledge base as structured JSON data at{" "}
              <Link href="/data/enai-knowledge.json" className="text-blue-600 hover:underline font-mono">
                /data/enai-knowledge.json
              </Link>
              {" "}for easy integration and programmatic access.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
