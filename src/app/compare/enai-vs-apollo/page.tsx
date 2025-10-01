import { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Enai.ai vs Apollo.io: Which AI Sales Tool is Right for You? | 2025 Comparison",
  description: "Comprehensive comparison of Enai.ai and Apollo.io AI sales platforms. Compare features, pricing, AI capabilities, and use cases to make an informed decision for your sales team.",
  keywords: "Enai.ai vs Apollo.io, AI BDR comparison, sales automation tools, AI sales platform comparison, best AI sales tool",
  openGraph: {
    title: "Enai.ai vs Apollo.io: Complete AI Sales Platform Comparison",
    description: "Detailed feature-by-feature comparison to help you choose the right AI sales automation platform for your team.",
    type: "article",
  },
};

export default function EnaiVsApolloPage() {
  return (
    <>
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ComparisonPage",
            "name": "Enai.ai vs Apollo.io Comparison",
            "description": "Comprehensive comparison of Enai.ai and Apollo.io AI sales automation platforms",
            "mainEntity": [
              {
                "@type": "SoftwareApplication",
                "name": "Enai.ai",
                "applicationCategory": "BusinessApplication",
                "offers": {
                  "@type": "Offer",
                  "price": "4000-10000",
                  "priceCurrency": "USD"
                }
              },
              {
                "@type": "SoftwareApplication",
                "name": "Apollo.io",
                "applicationCategory": "BusinessApplication"
              }
            ]
          })
        }}
      />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-6 mt-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enai.ai vs Apollo.io: Which AI Sales Tool is Right for You?
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A comprehensive, unbiased comparison to help you choose the best AI sales automation platform for your team
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="https://calendly.com/enai-ai2024/30min"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Schedule Enai.ai Demo
              </Link>
              <Link
                href="#comparison"
                className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-semibold transition"
              >
                View Detailed Comparison
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Summary */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-orange-100">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Enai.ai</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Best For:</strong> Organizations seeking end-to-end AI BDR automation with superior personalization
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Complete AI BDR agent suite (Prospecting + Qualification + Outreach)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Advanced AI personalization at scale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Automated meeting scheduling and qualification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Ideal for scaling without headcount growth</span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-900 font-semibold">Starting at $4,000/month</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-700">Apollo.io</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Best For:</strong> Teams needing a comprehensive database with sales engagement features
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Large B2B contact database (275M+ contacts)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Sales engagement and sequence automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>CRM functionality included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Good for manual research and list building</span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-900 font-semibold">Starting at $49/user/month</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Feature Comparison */}
        <section id="comparison" className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Feature-by-Feature Comparison</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-gray-900 font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center text-orange-600 font-semibold">Enai.ai</th>
                    <th className="px-6 py-4 text-center text-gray-700 font-semibold">Apollo.io</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">AI-Powered Prospecting</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-green-500 mx-auto" size={24} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-500">Partial</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Automated Qualification</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-green-500 mx-auto" size={24} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="text-red-500 mx-auto" size={24} />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Personalization at Scale</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-green-500 mx-auto" size={24} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-500">Basic</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Meeting Scheduling Automation</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-green-500 mx-auto" size={24} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-500">Manual</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">B2B Contact Database</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-green-500 mx-auto" size={24} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-green-500 mx-auto" size={24} />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Email Sequences</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-green-500 mx-auto" size={24} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-green-500 mx-auto" size={24} />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Multi-Channel Orchestration</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-green-500 mx-auto" size={24} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-500">Limited</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Built-in CRM</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-500">Integrates</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-green-500 mx-auto" size={24} />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">AI Conversation Handling</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-green-500 mx-auto" size={24} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="text-red-500 mx-auto" size={24} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pricing Comparison</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-orange-200">
                <h3 className="text-2xl font-bold mb-4">Enai.ai</h3>
                <p className="text-4xl font-bold text-orange-600 mb-2">$4,000 - $10,000</p>
                <p className="text-gray-600 mb-6">per month (platform fee)</p>
                <ul className="space-y-3 text-gray-700">
                  <li>• Includes all AI BDR agents</li>
                  <li>• Unlimited outreach volume</li>
                  <li>• Full automation suite</li>
                  <li>• Replaces 3-10 SDRs</li>
                  <li>• 70-85% cost reduction vs hiring</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Apollo.io</h3>
                <p className="text-4xl font-bold text-gray-700 mb-2">$49 - $149</p>
                <p className="text-gray-600 mb-6">per user/month</p>
                <ul className="space-y-3 text-gray-700">
                  <li>• Database access included</li>
                  <li>• Per-user pricing model</li>
                  <li>• Additional costs for credits</li>
                  <li>• Requires human operation</li>
                  <li>• Scales linearly with team size</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Case Recommendations */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Which One Should You Choose?</h2>
            
            <div className="space-y-8">
              <div className="bg-orange-50 p-8 rounded-xl border border-orange-200">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Choose Enai.ai if you:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                    <span>Want to scale outbound 5-10x without hiring more SDRs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                    <span>Need end-to-end automation from prospecting to meeting booking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                    <span>Prioritize AI-powered personalization and quality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                    <span>Want to reduce cost per qualified lead by 70-80%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                    <span>Are looking for an AI-first BDR replacement</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-700">Choose Apollo.io if you:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-gray-500 mt-1 flex-shrink-0" size={20} />
                    <span>Need a comprehensive B2B contact database</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-gray-500 mt-1 flex-shrink-0" size={20} />
                    <span>Prefer manual prospecting with tool support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-gray-500 mt-1 flex-shrink-0" size={20} />
                    <span>Want a built-in CRM solution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-gray-500 mt-1 flex-shrink-0" size={20} />
                    <span>Have a small team with budget constraints</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-gray-500 mt-1 flex-shrink-0" size={20} />
                    <span>Prefer human-driven outreach with basic automation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-br from-orange-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Sales with AI?</h2>
            <p className="text-xl text-gray-600 mb-8">
              See how Enai.ai can help you achieve 3-5x more qualified leads without hiring additional SDRs
            </p>
            <Link
              href="https://calendly.com/enai-ai2024/30min"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition text-lg"
            >
              Schedule Your Demo
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

