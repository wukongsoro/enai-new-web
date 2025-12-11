import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { ArrowRight, ArrowLeft, Building2, Briefcase, TrendingUp, DollarSign, Code, Cpu, Sparkles, Globe, CheckCircle2 } from "lucide-react";

const industries = {
  industrials: {
    name: "Industrials",
    icon: Building2,
    domain: "ge.com",
    heroColor: "#1E3A3A",
    shortDesc: "Manufacturing, Construction & Heavy Industry",
    headline: "AI Sales Automation for Industrial Companies",
    subheadline: "Navigate complex B2B industrial sales cycles with AI agents built for manufacturing, construction, energy, and infrastructure sectors.",
    description: "The industrials sector encompasses manufacturing, construction, aerospace & defense, electrical equipment, and industrial conglomerates. ENAI's AI agents are trained to understand long procurement cycles (6-18 months), technical RFP requirements, and the multiple stakeholders involved in capital equipment purchases.",
    challenges: [
      "Long sales cycles requiring persistent, coordinated outreach",
      "Multiple stakeholders across engineering, procurement, and operations",
      "Complex technical requirements and specification matching",
      "Trade show and industry event follow-up at scale",
      "Distributor and channel partner management",
    ],
    solutions: [
      "Multi-threaded account engagement across buying committees",
      "Technical qualification using product specification databases",
      "Automated trade show lead capture and nurturing sequences",
      "RFP and RFQ response coordination workflows",
      "Distributor enablement and co-selling automation",
    ],
    useCases: [
      "Account mapping across large organizations",
      "Technical requirement qualification",
      "Multi-threaded outreach sequences",
      "Trade show follow-up automation",
      "Distributor and reseller engagement",
      "RFQ response management",
    ],
    stats: [
      { metric: "55%", label: "Faster Sales Cycles" },
      { metric: "3.2x", label: "More Qualified Meetings" },
      { metric: "40%", label: "Larger Deal Sizes" },
    ],
    testimonial: {
      quote: "ENAI transformed how we approach enterprise manufacturing accounts. What used to take weeks of manual research now happens automatically.",
      author: "VP of Sales",
      company: "Industrial Equipment Manufacturer",
    },
    relatedIndustries: ["hardware", "professional-services"],
  },
  "professional-services": {
    name: "Professional Services",
    icon: Briefcase,
    domain: "deloitte.com",
    heroColor: "#2D4A5E",
    shortDesc: "Consulting, Legal, Accounting & Advisory",
    headline: "AI-Powered Business Development for Professional Firms",
    subheadline: "Scale rainmaking activities without diluting the personal relationships that define consulting, legal, and accounting success.",
    description: "Professional services firms—including management consulting, legal services, accounting, and advisory—rely on relationships and reputation. ENAI agents are designed to support rainmaking activities without diluting brand equity, handling initial outreach and qualification while maintaining the white-glove experience clients expect.",
    challenges: [
      "Partner time constraints limiting business development",
      "Maintaining relationship quality while scaling outreach",
      "Cross-selling services across practice areas",
      "Alumni and referral network management",
      "Industry event and conference follow-up",
    ],
    solutions: [
      "Partner-level messaging with AI personalization",
      "Alumni network engagement and tracking",
      "Cross-sell opportunity identification across clients",
      "Thought leadership distribution to target accounts",
      "Conference and event lead nurturing sequences",
    ],
    useCases: [
      "Client referral outreach",
      "Industry event follow-up",
      "Proposal request qualification",
      "Cross-sell opportunity identification",
      "Alumni network engagement",
      "Thought leadership distribution",
    ],
    stats: [
      { metric: "3x", label: "Pipeline Growth" },
      { metric: "60%", label: "Time Saved on BD" },
      { metric: "2.5x", label: "Referral Conversion" },
    ],
    testimonial: {
      quote: "Our partners can now focus on client work while ENAI handles the top-of-funnel activities that drive new business.",
      author: "Managing Partner",
      company: "Management Consulting Firm",
    },
    relatedIndustries: ["financial-services", "private-equity"],
  },
  "private-equity": {
    name: "Private Equity",
    icon: TrendingUp,
    domain: "blackstone.com",
    heroColor: "#1A365D",
    shortDesc: "PE, VC, Growth Equity & Fund Services",
    headline: "AI Deal Sourcing for Private Equity",
    subheadline: "Automate proprietary deal flow generation and LP relationship management with AI agents built for investment professionals.",
    description: "Private equity firms, venture capital, and growth equity investors face intense competition for deals and LP capital. ENAI agents support the entire investment lifecycle: sourcing proprietary deal flow, qualifying targets against investment criteria, managing LP outreach, and facilitating portfolio company introductions.",
    challenges: [
      "Generating proprietary deal flow in competitive markets",
      "Maintaining LP relationships and communication",
      "Portfolio company business development support",
      "Add-on acquisition sourcing for platform companies",
      "Operating partner network building and engagement",
    ],
    solutions: [
      "Thesis-driven company identification and outreach",
      "LP update automation and relationship tracking",
      "Portfolio company intro facilitation",
      "Add-on target mapping and founder outreach",
      "Executive and advisor network building",
    ],
    useCases: [
      "Proprietary deal flow generation",
      "LP relationship management",
      "Portfolio company introductions",
      "Market intelligence gathering",
      "Add-on acquisition sourcing",
      "Operating partner network building",
    ],
    stats: [
      { metric: "5x", label: "Deal Flow" },
      { metric: "70%", label: "Sourcing Cost Reduction" },
      { metric: "4x", label: "LP Touchpoints" },
    ],
    testimonial: {
      quote: "ENAI helps us find deals before they hit the market. Our proprietary deal flow has increased significantly since implementation.",
      author: "Partner",
      company: "Middle Market PE Firm",
    },
    relatedIndustries: ["financial-services", "software"],
  },
  "financial-services": {
    name: "Financial Services",
    icon: DollarSign,
    domain: "jpmorgan.com",
    heroColor: "#0D3B66",
    shortDesc: "Banking, Insurance, Wealth & Asset Management",
    headline: "Compliant AI Prospecting for Financial Services",
    subheadline: "Deploy AI agents with built-in regulatory guardrails across banking, insurance, and wealth management.",
    description: "Financial services—including commercial and retail banking, insurance carriers, asset management, and wealth advisory—operate under strict regulatory oversight. ENAI agents are configured with compliance-first messaging, FINRA/SEC-aware guardrails, and audit trails for every client interaction.",
    challenges: [
      "Regulatory compliance in client communications",
      "High-net-worth prospect identification and qualification",
      "Commercial banking relationship development",
      "Insurance lead qualification and routing",
      "Audit trail requirements for all interactions",
    ],
    solutions: [
      "Compliance-approved message templates and guardrails",
      "HNW prospect enrichment and qualification",
      "Commercial banker territory automation",
      "Insurance product matching and lead scoring",
      "Full audit logging for regulatory review",
    ],
    useCases: [
      "HNW prospect identification",
      "Commercial banking outreach",
      "Insurance lead qualification",
      "Compliance-approved messaging",
      "Wealth management client acquisition",
      "Mortgage and lending campaigns",
    ],
    stats: [
      { metric: "70%", label: "Cost Reduction" },
      { metric: "100%", label: "Compliance Rate" },
      { metric: "2.8x", label: "Qualified Leads" },
    ],
    testimonial: {
      quote: "The compliance guardrails give us confidence that every outreach meets regulatory standards while still converting at high rates.",
      author: "Head of Digital Banking",
      company: "Regional Bank",
    },
    relatedIndustries: ["private-equity", "professional-services"],
  },
  software: {
    name: "Software",
    icon: Code,
    domain: "salesforce.com",
    heroColor: "#0A4D68",
    shortDesc: "SaaS, Enterprise Software & Developer Tools",
    headline: "AI Sales Automation for Software Companies",
    subheadline: "Scale from PLG to enterprise sales with AI agents that understand the full software buying journey.",
    description: "Software companies—SaaS platforms, enterprise software vendors, and developer tool providers—require flexible go-to-market approaches. ENAI agents adapt to product-led growth motions (activating free users), sales-assisted models (qualifying inbound), and outbound enterprise sales (multi-threading into large accounts).",
    challenges: [
      "Activating free trial users into paying customers",
      "Qualifying product-qualified leads (PQLs) at scale",
      "Enterprise expansion and multi-threading",
      "Technical buyer engagement and POC coordination",
      "Security and procurement process navigation",
    ],
    solutions: [
      "Free trial activation sequences based on product usage",
      "PQL scoring and automated sales handoff",
      "Enterprise account mapping and expansion plays",
      "Developer and technical buyer engagement",
      "Security questionnaire and procurement support",
    ],
    useCases: [
      "Free trial user activation",
      "Product-qualified lead outreach",
      "Enterprise account expansion",
      "Technical buyer engagement",
      "Developer advocate targeting",
      "Security questionnaire routing",
    ],
    stats: [
      { metric: "180%", label: "Meeting Increase" },
      { metric: "45%", label: "Trial Conversion" },
      { metric: "3x", label: "Enterprise Pipeline" },
    ],
    testimonial: {
      quote: "ENAI helped us crack enterprise sales. We went from struggling with outbound to booking 10+ enterprise meetings per week.",
      author: "Head of Sales",
      company: "B2B SaaS Company",
    },
    relatedIndustries: ["hardware", "ai-native"],
  },
  hardware: {
    name: "Hardware",
    icon: Cpu,
    domain: "nvidia.com",
    heroColor: "#1F2937",
    shortDesc: "Semiconductors, Devices & Physical Products",
    headline: "AI Sales for Hardware Companies",
    subheadline: "Navigate technical complexity with AI that understands specs, certifications, and engineering buyers.",
    description: "Hardware companies—semiconductors, computer hardware, electronic equipment, and IoT devices—sell into complex technical environments with long evaluation cycles. ENAI agents are trained on technical specification matching, certification requirements, and the unique dynamics of distributor and OEM relationships.",
    challenges: [
      "Technical specification matching for diverse use cases",
      "Distributor and channel partner coordination",
      "OEM partnership development",
      "Engineering sample request management",
      "Long evaluation and certification cycles",
    ],
    solutions: [
      "Spec-based prospect matching and qualification",
      "Distributor co-selling and enablement automation",
      "OEM partnership outreach sequences",
      "Sample request tracking and follow-up",
      "Design-win opportunity identification",
    ],
    useCases: [
      "Technical specification matching",
      "Distributor relationship management",
      "OEM partnership outreach",
      "Channel partner enablement",
      "Engineering sample requests",
      "Supply chain decision-maker targeting",
    ],
    stats: [
      { metric: "40%", label: "Faster Qualification" },
      { metric: "2.5x", label: "Design Wins" },
      { metric: "60%", label: "Channel Efficiency" },
    ],
    testimonial: {
      quote: "ENAI understands our technical products and can engage engineers in meaningful conversations. It's like having a technical sales team at scale.",
      author: "VP Sales",
      company: "Semiconductor Company",
    },
    relatedIndustries: ["software", "industrials"],
  },
  "ai-native": {
    name: "AI-Native Companies",
    icon: Sparkles,
    domain: "openai.com",
    heroColor: "#3A5A5A",
    shortDesc: "AI/ML Platforms, Foundation Models & AI Tooling",
    headline: "AI Agents for AI Companies",
    subheadline: "Sell AI to AI-savvy buyers with agents that understand the technical landscape.",
    description: "AI-native companies—foundation model providers, AI/ML platforms, MLOps tools, and AI application vendors—sell to technically sophisticated buyers. ENAI agents are trained on the AI ecosystem, understand technical differentiators, and can engage in meaningful conversations about model performance, integration complexity, and use case fit.",
    challenges: [
      "Engaging highly technical ML engineering buyers",
      "Differentiating in a crowded AI market",
      "Enterprise AI adoption sales cycles",
      "Developer community building and outreach",
      "Research and academic partnership development",
    ],
    solutions: [
      "Technical buyer personas with ML-fluent messaging",
      "Use case qualification and matching",
      "Enterprise AI readiness assessment automation",
      "Developer community outreach sequences",
      "Research partnership identification and outreach",
    ],
    useCases: [
      "Developer community outreach",
      "Enterprise AI adoption pitches",
      "Technical use case qualification",
      "Research partnership sourcing",
      "ML engineer targeting",
      "AI ethics and governance discussions",
    ],
    stats: [
      { metric: "4x", label: "Qualified Meetings" },
      { metric: "65%", label: "Technical Win Rate" },
      { metric: "3x", label: "Developer Signups" },
    ],
    testimonial: {
      quote: "Finally, an AI sales tool that can actually talk to our technical buyers. ENAI gets the nuances of selling AI to AI people.",
      author: "CEO",
      company: "AI Infrastructure Startup",
    },
    relatedIndustries: ["software", "sovereign-ai"],
  },
  "sovereign-ai": {
    name: "Sovereign AI",
    icon: Globe,
    domain: "anthropic.com",
    heroColor: "#1E3A3A",
    shortDesc: "Government AI, Defense & National Infrastructure",
    headline: "Secure AI Sales for Government & Defense",
    subheadline: "Support national AI initiatives with compliant, auditable sales automation built for public sector requirements.",
    description: "Sovereign AI encompasses government AI programs, defense contractors, national AI infrastructure, and regulated critical systems. ENAI agents for this sector operate with enhanced security controls, support complex compliance frameworks (FedRAMP, ITAR, CMMC), and understand the unique procurement processes of government and defense buyers.",
    challenges: [
      "Complex government procurement processes",
      "FedRAMP, ITAR, and CMMC compliance requirements",
      "Long RFP and contract cycles",
      "Security clearance and classification handling",
      "Allied nation partnership development",
    ],
    solutions: [
      "Government procurement process automation",
      "Compliance-first messaging and audit trails",
      "RFP response coordination and tracking",
      "Cleared personnel engagement workflows",
      "International government partnership outreach",
    ],
    useCases: [
      "Government RFP response",
      "Public sector compliance",
      "Defense contractor outreach",
      "National security clearance workflows",
      "GovCon BD automation",
      "Allied nation partnerships",
    ],
    stats: [
      { metric: "24/7", label: "Global Coverage" },
      { metric: "100%", label: "Compliance Rate" },
      { metric: "3x", label: "RFP Response Capacity" },
    ],
    testimonial: {
      quote: "ENAI's security controls and compliance features made it the only AI sales tool we could deploy for government work.",
      author: "Director of Federal Sales",
      company: "Defense Contractor",
    },
    relatedIndustries: ["ai-native", "financial-services"],
  },
};

type IndustrySlug = keyof typeof industries;

export async function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries[slug as IndustrySlug];
  if (!industry) return {};
  
  return {
    title: `${industry.name} | ENAI - AI Sales Automation`,
    description: industry.description,
    keywords: `${industry.name} AI sales, ${industry.shortDesc.toLowerCase()}, sales automation, AI BDR`,
    openGraph: {
      title: `${industry.name} | ENAI`,
      description: industry.subheadline,
      type: "website",
    },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries[slug as IndustrySlug];
  
  if (!industry) {
    notFound();
  }

  const Icon = industry.icon;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `ENAI for ${industry.name}`,
            "description": industry.description,
            "provider": {
              "@type": "Organization",
              "name": "ENAI",
            },
          })
        }}
      />
      <Navigation />
      <main className="bg-[#F5F1ED]">
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: industry.heroColor }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F1ED] to-transparent" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center pt-40 pb-20">
            <Link href="/industries" className="inline-flex items-center gap-2 text-white/60 hover:text-white/80 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              All Industries
            </Link>
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Icon className="w-10 h-10 text-white" />
            </div>
            <p className="text-caption uppercase tracking-[0.2em] text-white/60 mb-4">
              {industry.shortDesc}
            </p>
            <h1 className="text-[clamp(32px,6vw,64px)] leading-[1.1] font-display text-white mb-6 text-balance">
              {industry.headline}
            </h1>
            <p className="text-body-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
              {industry.subheadline}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://calendly.com/enai-ai2024/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-black px-8 py-4 text-sm font-medium hover:bg-white/90 transition-all duration-300"
              >
                Book {industry.name} Demo
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 text-sm font-medium hover:bg-white/10 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-3 gap-8">
              {industry.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-[clamp(36px,5vw,56px)] font-bold text-[#1E3A3A] mb-2">{stat.metric}</div>
                  <div className="text-body-sm text-black/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#F5F1ED]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="h2 text-black mb-6">About {industry.name}</h2>
                <p className="text-body-lg text-black/70 leading-relaxed mb-8">
                  {industry.description}
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-caption text-black/40">Used by leading {industry.name.toLowerCase()} companies</span>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-xl font-medium text-black mb-6">Key Use Cases</h3>
                <ul className="space-y-4">
                  {industry.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#1E3A3A] flex-shrink-0 mt-0.5" />
                      <span className="text-body text-black/70">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="h3 text-black mb-8">Industry Challenges</h2>
                <ul className="space-y-4">
                  {industry.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-caption text-red-600 font-bold">{index + 1}</span>
                      </div>
                      <span className="text-body text-black/70">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="h3 text-black mb-8">ENAI Solutions</h2>
                <ul className="space-y-4">
                  {industry.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-body text-black/70">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#E8DDD4]">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <div className="text-center">
              <div className="text-[clamp(24px,4vw,36px)] font-display text-black/80 mb-8 leading-relaxed">
                &ldquo;{industry.testimonial.quote}&rdquo;
              </div>
              <div className="text-body font-medium text-black">{industry.testimonial.author}</div>
              <div className="text-body-sm text-black/50">{industry.testimonial.company}</div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="h3 text-black mb-12 text-center">Related Industries</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {industry.relatedIndustries.map((relSlug) => {
                const rel = industries[relSlug as IndustrySlug];
                if (!rel) return null;
                const RelIcon = rel.icon;
                return (
                  <Link
                    key={relSlug}
                    href={`/industries/${relSlug}`}
                    className="group bg-[#F5F1ED] p-8 rounded-lg hover:bg-[#E8DDD4] transition-colors flex items-start gap-6"
                  >
                    <div className="w-14 h-14 bg-[#1E3A3A] rounded-lg flex items-center justify-center flex-shrink-0">
                      <RelIcon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-caption uppercase tracking-wider text-black/40 mb-1">{rel.shortDesc}</p>
                      <h3 className="text-xl font-medium text-black mb-2 group-hover:text-[#1E3A3A]">{rel.name}</h3>
                      <p className="text-body-sm text-black/60">{rel.subheadline}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-black/30 group-hover:text-black group-hover:translate-x-1 transition-all ml-auto flex-shrink-0" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24" style={{ backgroundColor: industry.heroColor }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2 className="h2 text-white mb-6">
              Ready to Transform Your {industry.name} Sales?
            </h2>
            <p className="text-body-lg text-white/60 leading-relaxed mb-12 max-w-2xl mx-auto">
              Book a personalized demo to see how ENAI can accelerate your sales motion.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://calendly.com/enai-ai2024/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center bg-white text-black px-8 py-4 text-sm font-medium hover:bg-white/90 transition-all duration-300"
              >
                Schedule Demo
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
        </section>
      </main>
      <Footer />
    </>
  );
}