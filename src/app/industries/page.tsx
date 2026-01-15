import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { ArrowRight, Building2, Briefcase, TrendingUp, DollarSign, Code, Cpu, Sparkles, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries | ENAI - AI Sales Automation by Industry",
  description: "ENAI AI BDR agents tailored for Industrials, Professional Services, Private Equity, Financial Services, Software, Hardware, AI-Native Companies, and Sovereign AI initiatives.",
  keywords: "AI sales automation industries, industrial sales AI, professional services sales, private equity deal sourcing, financial services prospecting, software sales automation, hardware sales AI, AI-native company sales, sovereign AI",
  openGraph: {
    title: "Industries | ENAI - AI Sales Automation by Industry",
    description: "Industry-specific AI BDR solutions for every sector.",
    type: "website",
  },
};

const industries = [
  {
    name: "Industrials",
    slug: "industrials",
    icon: Building2,
    shortDesc: "Manufacturing, Construction & Heavy Industry",
    description: "AI agents engineered for complex B2B industrial sales cycles. Navigate multi-stakeholder buying committees across manufacturing, construction, energy, and infrastructure sectors with precision targeting and technical qualification.",
    fullDefinition: "The industrials sector encompasses manufacturing, construction, aerospace & defense, electrical equipment, and industrial conglomerates. ENAI's AI agents are trained to understand long procurement cycles (6-18 months), technical RFP requirements, and the multiple stakeholders involved in capital equipment purchases.",
    useCases: [
      "Account mapping across large organizations",
      "Technical requirement qualification",
      "Multi-threaded outreach sequences",
      "Trade show follow-up automation",
      "Distributor and reseller engagement",
      "RFQ response management",
    ],
    stats: { metric: "55%", label: "Faster Sales Cycles" },
    color: "bg-[#1E3A3A]",
  },
  {
    name: "Professional Services",
    slug: "professional-services",
    icon: Briefcase,
    shortDesc: "Consulting, Legal, Accounting & Advisory",
    description: "Scale business development for knowledge-intensive firms. Our AI agents preserve the personal touch critical to consulting, legal, and accounting relationships while automating the outreach that partners can't prioritize.",
    fullDefinition: "Professional services firms—including management consulting, legal services, accounting, and advisory—rely on relationships and reputation. ENAI agents are designed to support rainmaking activities without diluting brand equity, handling initial outreach and qualification while maintaining the white-glove experience clients expect.",
    useCases: [
      "Client referral outreach",
      "Industry event follow-up",
      "Proposal request qualification",
      "Cross-sell opportunity identification",
      "Alumni network engagement",
      "Thought leadership distribution",
    ],
    stats: { metric: "3x", label: "Pipeline Growth" },
    color: "bg-[#2D4A4A]",
  },
  {
    name: "Private Equity",
    slug: "private-equity",
    icon: TrendingUp,
    shortDesc: "PE, VC, Growth Equity & Fund Services",
    description: "Automate proprietary deal sourcing and LP relationship management. Our AI agents are built for the unique workflows of investment firms—from identifying acquisition targets to maintaining investor communications at scale.",
    fullDefinition: "Private equity firms, venture capital, and growth equity investors face intense competition for deals and LP capital. ENAI agents support the entire investment lifecycle: sourcing proprietary deal flow, qualifying targets against investment criteria, managing LP outreach, and facilitating portfolio company introductions.",
    useCases: [
      "Proprietary deal flow generation",
      "LP relationship management",
      "Portfolio company introductions",
      "Market intelligence gathering",
      "Add-on acquisition sourcing",
      "Operating partner network building",
    ],
    stats: { metric: "5x", label: "Deal Flow" },
    color: "bg-[#1E3A3A]",
  },
  {
    name: "Financial Services",
    slug: "financial-services",
    icon: DollarSign,
    shortDesc: "Banking, Insurance, Wealth & Asset Management",
    description: "Compliant AI prospecting with built-in regulatory guardrails. Deploy AI agents across retail banking, commercial lending, insurance, and wealth management with confidence that every interaction meets compliance standards.",
    fullDefinition: "Financial services—including commercial and retail banking, insurance carriers, asset management, and wealth advisory—operate under strict regulatory oversight. ENAI agents are configured with compliance-first messaging, FINRA/SEC-aware guardrails, and audit trails for every client interaction.",
    useCases: [
      "HNW prospect identification",
      "Commercial banking outreach",
      "Insurance lead qualification",
      "Compliance-approved messaging",
      "Wealth management client acquisition",
      "Mortgage and lending campaigns",
    ],
    stats: { metric: "70%", label: "Cost Reduction" },
    color: "bg-[#2D4A4A]",
  },
  {
    name: "Software",
    slug: "software",
    icon: Code,
    shortDesc: "SaaS, Enterprise Software & Developer Tools",
    description: "Scale your SaaS sales motion from PLG to enterprise. AI agents that understand the full software buying journey—from free trial activation to seven-figure enterprise deals with procurement and security reviews.",
    fullDefinition: "Software companies—SaaS platforms, enterprise software vendors, and developer tool providers—require flexible go-to-market approaches. ENAI agents adapt to product-led growth motions (activating free users), sales-assisted models (qualifying inbound), and outbound enterprise sales (multi-threading into large accounts).",
    useCases: [
      "Free trial user activation",
      "Product-qualified lead outreach",
      "Enterprise account expansion",
      "Technical buyer engagement",
      "Developer advocate targeting",
      "Security questionnaire routing",
    ],
    stats: { metric: "180%", label: "Meeting Increase" },
    color: "bg-[#1E3A3A]",
  },
  {
    name: "Hardware",
    slug: "hardware",
    icon: Cpu,
    shortDesc: "Semiconductors, Devices & Physical Products",
    description: "Navigate hardware sales complexity with AI that understands specs, certifications, and technical requirements. From chips to devices, our agents speak the language of engineering buyers and procurement teams.",
    fullDefinition: "Hardware companies—semiconductors, computer hardware, electronic equipment, and IoT devices—sell into complex technical environments with long evaluation cycles. ENAI agents are trained on technical specification matching, certification requirements, and the unique dynamics of distributor and OEM relationships.",
    useCases: [
      "Technical specification matching",
      "Distributor relationship management",
      "OEM partnership outreach",
      "Channel partner enablement",
      "Engineering sample requests",
      "Supply chain decision-maker targeting",
    ],
    stats: { metric: "40%", label: "Faster Qualification" },
    color: "bg-[#2D4A4A]",
  },
  {
    name: "AI-Native Companies",
    slug: "ai-native",
    icon: Sparkles,
    shortDesc: "AI/ML Platforms, Foundation Models & AI Tooling",
    description: "AI companies selling AI need agents that understand the landscape. Our AI-native solutions engage ML engineers, data scientists, and AI executives with technical credibility and use-case-driven messaging.",
    fullDefinition: "AI-native companies—foundation model providers, AI/ML platforms, MLOps tools, and AI application vendors—sell to technically sophisticated buyers. ENAI agents are trained on the AI ecosystem, understand technical differentiators, and can engage in meaningful conversations about model performance, integration complexity, and use case fit.",
    useCases: [
      "Developer community outreach",
      "Enterprise AI adoption pitches",
      "Technical use case qualification",
      "Research partnership sourcing",
      "ML engineer targeting",
      "AI ethics and governance discussions",
    ],
    stats: { metric: "4x", label: "Qualified Meetings" },
    color: "bg-[#3A5A5A]",
  },
  {
    name: "Sovereign AI",
    slug: "sovereign-ai",
    icon: Globe,
    shortDesc: "Government AI, Defense & National Infrastructure",
    description: "Support government and national AI initiatives with secure, compliant sales automation. Built for FedRAMP, ITAR, and national security requirements with full audit trails and data sovereignty controls.",
    fullDefinition: "Sovereign AI encompasses government AI programs, defense contractors, national AI infrastructure, and regulated critical systems. ENAI agents for this sector operate with enhanced security controls, support complex compliance frameworks (FedRAMP, ITAR, CMMC), and understand the unique procurement processes of government and defense buyers.",
    useCases: [
      "Government RFP response",
      "Public sector compliance",
      "Defense contractor outreach",
      "National security clearance workflows",
      "GovCon BD automation",
      "Allied nation partnerships",
    ],
    stats: { metric: "24/7", label: "Global Coverage" },
    color: "bg-[#1E3A3A]",
  },
];

const trustedBy = [
  { name: "Salesforce" },
  { name: "HubSpot" },
  { name: "Microsoft" },
  { name: "Google" },
  { name: "Oracle" },
  { name: "SAP" },
  { name: "IBM" },
  { name: "Adobe" },
];

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "ENAI Industries",
            "description": "AI BDR solutions for every industry",
            "mainEntity": industries.map(i => ({
              "@type": "Service",
              "name": `ENAI for ${i.name}`,
              "description": i.fullDefinition,
            }))
          })
        }}
      />
      <Navigation />
      <main className="bg-[#F5F1ED]">
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[#1E3A3A]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F1ED] to-transparent" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center pt-32 pb-20">
            <p className="text-caption uppercase tracking-[0.2em] text-white/60 mb-6">
              Industry Solutions
            </p>
            <h1 className="text-[clamp(40px,8vw,80px)] leading-[1.05] font-display text-white mb-8 text-balance">
              AI Sales Automation<br />Built for Your Industry
            </h1>
            <p className="text-body-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-12">
              Industry-specific AI BDR agents trained on sector nuances, terminology, and buying patterns. Deploy pre-configured solutions or customize for your exact workflow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://calendly.com/enai-ai2024/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-[#1E3A3A] px-8 py-4 text-sm font-medium hover:bg-white/90 transition-all duration-300"
              >
                Book Industry Demo
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



        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <p className="text-caption uppercase tracking-[0.15em] text-black/40 mb-4">
                By Industry
              </p>
              <h2 className="h2 text-black">
                Choose Your Industry
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10">
              {industries.map((industry, index) => (
                <Link
                  key={index}
                  href={`/industries/${industry.slug}`}
                  className="group bg-white p-10 lg:p-14 flex flex-col hover:bg-[#F5F1ED] transition-colors duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 ${industry.color} rounded-lg flex items-center justify-center`}>
                      <industry.icon className="w-7 h-7 text-white" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-black/30 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <p className="text-caption uppercase tracking-wider text-[#1E3A3A]/60 mb-2">{industry.shortDesc}</p>
                  <h3 className="text-2xl font-display text-black mb-4">{industry.name}</h3>
                  <p className="text-body text-black/60 leading-relaxed mb-6 flex-grow">
                    {industry.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {industry.useCases.slice(0, 3).map((useCase, uIndex) => (
                      <span key={uIndex} className="text-caption bg-[#F5F1ED] px-3 py-1 rounded-full text-black/60">
                        {useCase}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-baseline gap-2 pt-6 border-t border-black/10">
                    <span className="text-3xl font-bold text-[#1E3A3A]">{industry.stats.metric}</span>
                    <span className="text-body-sm text-black/50">{industry.stats.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#F5F1ED]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="h2 text-black mb-4">Industry Deep Dives</h2>
              <p className="text-body-lg text-black/60">Detailed solutions tailored to your sector&apos;s unique challenges</p>
            </div>
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-16 py-20 ${index !== 0 ? "border-t border-black/10" : ""
                  } ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <div className={`w-14 h-14 ${industry.color} rounded-lg flex items-center justify-center mb-6`}>
                    <industry.icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-caption uppercase tracking-wider text-[#1E3A3A]/60 mb-2">{industry.shortDesc}</p>
                  <h3 className="h3 text-black mb-4">{industry.name}</h3>
                  <p className="text-body text-black/70 leading-relaxed mb-6">
                    {industry.fullDefinition}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {industry.useCases.map((useCase, uIndex) => (
                      <li key={uIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1E3A3A] flex-shrink-0 mt-2" />
                        <span className="text-body text-black/70">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#1E3A3A] hover:underline"
                  >
                    Learn more about {industry.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] bg-[#E8DDD4] rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-white/50 rounded-full flex items-center justify-center">
                        <industry.icon className="w-16 h-16 text-[#1E3A3A]/50" />
                      </div>
                    </div>
                    <div className="absolute bottom-6 right-6 flex items-baseline gap-2 bg-white px-4 py-3 rounded-lg">
                      <span className="text-2xl font-bold text-[#1E3A3A]">{industry.stats.metric}</span>
                      <span className="text-caption text-black/50">{industry.stats.label}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-[#1E3A3A]">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <p className="text-caption uppercase tracking-[0.15em] text-white/40 mb-6">
              Custom Solutions
            </p>
            <h2 className="h2 text-white mb-6">
              Don&apos;t See Your Industry?
            </h2>
            <p className="text-body-lg text-white/60 leading-relaxed mb-12 max-w-2xl mx-auto">
              Our AI agents are highly customizable. We&apos;ve deployed solutions across 50+ verticals. Let&apos;s discuss your specific requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://calendly.com/enai-ai2024/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center bg-white text-[#1E3A3A] px-8 py-4 text-sm font-medium hover:bg-white/90 transition-all duration-300"
              >
                Schedule Custom Demo
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