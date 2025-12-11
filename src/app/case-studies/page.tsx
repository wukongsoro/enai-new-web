import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { ArrowRight, TrendingUp, Clock, Users, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies | ENAI - AI Sales Automation Success Stories",
  description: "Discover how leading companies use ENAI AI BDR agents to increase pipeline by 3x, reduce costs by 70%, and scale their sales operations globally.",
  keywords: "AI BDR case studies, sales automation results, B2B sales success stories, AI prospecting ROI, sales pipeline growth",
  openGraph: {
    title: "Case Studies | ENAI - AI Sales Automation Success Stories",
    description: "See real results from companies using ENAI AI BDR agents.",
    type: "website",
  },
};

const caseStudies = [
  {
    company: "TechScale Solutions",
    domain: "techcrunch.com",
    industry: "Software",
    challenge: "Struggling to scale outbound with a lean SDR team while maintaining personalization quality.",
    solution: "Deployed 3 AI BDR agents for prospecting and outreach across North America and EMEA markets.",
    results: [
      { metric: "3x", label: "Pipeline Growth" },
      { metric: "67%", label: "Cost Reduction" },
      { metric: "2 weeks", label: "Time to Deploy" },
    ],
    quote: "ENAI transformed our entire outbound strategy. We went from 50 meetings/month to 180 without adding headcount.",
    author: "VP of Sales",
    featured: true,
  },
  {
    company: "Global Freight Partners",
    domain: "flexport.com",
    industry: "Shipping & Logistics",
    challenge: "Manual prospecting couldn't keep up with global shipping demand across multiple time zones.",
    solution: "24/7 AI agents covering APAC, EMEA, and Americas with lane-specific intelligence.",
    results: [
      { metric: "45%", label: "Faster RFP Response" },
      { metric: "70%", label: "Cost Savings" },
      { metric: "24/7", label: "Coverage" },
    ],
    quote: "Our AI agents now monitor capacity changes and reach shippers before our competitors even wake up.",
    author: "Commercial Director",
    featured: true,
  },
  {
    company: "Meridian Capital",
    domain: "blackstone.com",
    industry: "Private Equity",
    challenge: "Deal sourcing was bottlenecked by limited bandwidth to research and qualify opportunities.",
    solution: "AI agents for deal flow qualification and LP outreach automation.",
    results: [
      { metric: "5x", label: "Deal Flow" },
      { metric: "40%", label: "Time Saved" },
      { metric: "200+", label: "Qualified Leads/Month" },
    ],
    quote: "The AI's ability to research and qualify targets at scale has completely changed our sourcing capabilities.",
    author: "Managing Partner",
    featured: false,
  },
  {
    company: "Apex Manufacturing",
    domain: "ge.com",
    industry: "Industrials",
    challenge: "Complex sales cycles with multiple stakeholders required extensive manual research.",
    solution: "AI-powered account mapping and multi-threaded outreach sequences.",
    results: [
      { metric: "55%", label: "Faster Qualification" },
      { metric: "3.2x", label: "Meeting Rate" },
      { metric: "6 weeks", label: "Sales Cycle Reduction" },
    ],
    quote: "The depth of account research our AI agents deliver rivals what a dedicated analyst would produce.",
    author: "CRO",
    featured: false,
  },
];

const metrics = [
  { icon: TrendingUp, value: "3x", label: "Average Pipeline Increase", description: "Qualified opportunities generated" },
  { icon: Clock, value: "70%", label: "Cost Reduction", description: "Compared to traditional SDR teams" },
  { icon: Users, value: "500+", label: "Companies Trust ENAI", description: "Across 40+ countries" },
  { icon: Target, value: "10M+", label: "Prospects Contacted", description: "With personalized outreach" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "ENAI Case Studies",
            "description": "Success stories from companies using ENAI AI BDR agents",
          })
        }}
      />
      <Navigation />
      <main className="bg-[#F5F1ED]">
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-[#F5F1ED] overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-caption uppercase tracking-wider text-black/60 px-4 py-2 bg-white/50 border border-black/10 rounded-full mb-8">
                <TrendingUp className="w-4 h-4" />
                Customer Success
              </div>
              <h1 className="h1 text-black mb-6">
                Real Results from Real Companies
              </h1>
              <p className="text-body-lg text-black/60 leading-relaxed max-w-2xl">
                See how leading organizations across industries use ENAI AI BDR agents to transform their sales operations and accelerate growth.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-[#1E3A3A] rounded-lg">
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-stat text-[#1E3A3A] mb-1">{metric.value}</div>
                  <div className="text-sm font-medium text-black mb-1">{metric.label}</div>
                  <div className="text-caption text-black/50">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[#E8DDD4]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="h2 text-black mb-6">
                Featured Case Studies
              </h2>
              <p className="text-body-lg text-black/60 leading-relaxed">
                Deep dives into how companies transformed their sales with AI.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.filter(cs => cs.featured).map((study, index) => (
                <div
                  key={index}
                  className="bg-white p-8 md:p-10 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-[#F5F1ED] rounded-lg flex items-center justify-center p-2">
                        <Image
                          src={`https://logo.clearbit.com/${study.domain}`}
                          alt={study.company}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-black">{study.company}</h3>
                        <span className="text-caption text-black/50 uppercase tracking-wider">{study.industry}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="text-sm font-medium text-black/70 mb-2">Challenge</div>
                    <p className="text-body-sm text-black/60">{study.challenge}</p>
                  </div>
                  <div className="mb-6">
                    <div className="text-sm font-medium text-black/70 mb-2">Solution</div>
                    <p className="text-body-sm text-black/60">{study.solution}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6 py-6 border-y border-black/10">
                    {study.results.map((result, rIndex) => (
                      <div key={rIndex} className="text-center">
                        <div className="text-2xl font-bold text-[#1E3A3A]">{result.metric}</div>
                        <div className="text-caption text-black/50">{result.label}</div>
                      </div>
                    ))}
                  </div>
                  <blockquote className="italic text-black/70 mb-4">
                    &ldquo;{study.quote}&rdquo;
                  </blockquote>
                  <div className="text-body-sm text-black/50">— {study.author}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="h2 text-black mb-6">
                More Success Stories
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.filter(cs => !cs.featured).map((study, index) => (
                <div
                  key={index}
                  className="bg-[#F5F1ED] p-8 rounded-xl hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                      <Image
                        src={`https://logo.clearbit.com/${study.domain}`}
                        alt={study.company}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-black">{study.company}</h3>
                      <span className="text-caption text-black/50">{study.industry}</span>
                    </div>
                  </div>
                  <div className="flex gap-6 mb-4">
                    {study.results.slice(0, 2).map((result, rIndex) => (
                      <div key={rIndex}>
                        <div className="text-xl font-bold text-[#1E3A3A]">{result.metric}</div>
                        <div className="text-caption text-black/50">{result.label}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-body-sm text-black/60 italic">&ldquo;{study.quote}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[#1E3A3A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="h2 text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-body-lg text-white/70 leading-relaxed mb-10">
                Join hundreds of companies transforming their sales with ENAI AI BDR agents.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="https://calendly.com/enai-ai2024/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 justify-center bg-white text-[#1E3A3A] px-8 py-4 text-sm font-medium hover:bg-white/90 transition-all duration-300"
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 text-sm font-medium hover:bg-white/10 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
