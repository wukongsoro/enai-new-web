import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { ArrowRight, Zap, RefreshCw, Shield, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Integrations | ENAI - Connect Salesforce, HubSpot, Slack & 50+ Tools",
  description: "ENAI integrates seamlessly with Salesforce, HubSpot, Slack, Microsoft 365, LinkedIn, and 50+ more tools. Connect your entire sales stack for unified AI-powered prospecting and automation.",
  keywords: "CRM integrations, Salesforce integration, HubSpot integration, Slack integration, sales automation, AI prospecting tools, LinkedIn automation, Microsoft 365 integration",
  openGraph: {
    title: "Integrations | ENAI - Connect Your Sales Stack",
    description: "Connect ENAI with Salesforce, HubSpot, Slack, and 50+ tools for seamless AI-powered sales automation.",
    type: "website",
  },
};

const featuredIntegrations = [
  {
    name: "Salesforce",
    logo: "https://logo.clearbit.com/salesforce.com",
    color: "#00A1E0",
    category: "CRM",
    description: "Bi-directional sync with Salesforce. Auto-create leads, log activities, and update opportunities in real-time.",
    features: ["Lead sync", "Activity logging", "Opportunity tracking", "Custom field mapping"],
  },
  {
    name: "HubSpot",
    logo: "https://logo.clearbit.com/hubspot.com",
    color: "#FF7A59",
    category: "CRM",
    description: "Full HubSpot integration for contact management, deal tracking, and marketing automation alignment.",
    features: ["Contact sync", "Deal pipeline", "Email tracking", "Workflow triggers"],
  },
  {
    name: "Slack",
    logo: "https://logo.clearbit.com/slack.com",
    color: "#4A154B",
    category: "Communication",
    description: "Get real-time notifications on lead activity, meeting bookings, and campaign performance directly in Slack.",
    features: ["Real-time alerts", "Channel routing", "Quick actions", "Team mentions"],
  },
  {
    name: "Microsoft 365",
    logo: "https://logo.clearbit.com/microsoft.com",
    color: "#00A4EF",
    category: "Productivity",
    description: "Connect Outlook, Teams, and Calendar for seamless meeting scheduling and email synchronization.",
    features: ["Calendar sync", "Email integration", "Teams notifications", "OneDrive access"],
  },
  {
    name: "LinkedIn",
    logo: "https://logo.clearbit.com/linkedin.com",
    color: "#0A66C2",
    category: "Prospecting",
    description: "Enrich prospect data, automate connection requests, and track engagement across LinkedIn profiles.",
    features: ["Profile enrichment", "Connection automation", "InMail sequences", "Engagement tracking"],
  },
  {
    name: "Google Workspace",
    logo: "https://logo.clearbit.com/google.com",
    color: "#4285F4",
    category: "Productivity",
    description: "Integrate with Gmail, Google Calendar, and Drive for unified communication and scheduling.",
    features: ["Gmail sync", "Calendar booking", "Drive attachments", "Meet scheduling"],
  },
];

const additionalIntegrations = [
  { name: "Zapier", logo: "https://logo.clearbit.com/zapier.com", color: "#FF4F00", category: "Automation" },
  { name: "Outreach", logo: "https://logo.clearbit.com/outreach.io", color: "#5951FF", category: "Sales Engagement" },
  { name: "Apollo", logo: "https://logo.clearbit.com/apollo.io", color: "#6366F1", category: "Data" },
  { name: "ZoomInfo", logo: "https://logo.clearbit.com/zoominfo.com", color: "#E55C3D", category: "Data" },
  { name: "Calendly", logo: "https://logo.clearbit.com/calendly.com", color: "#006BFF", category: "Scheduling" },
  { name: "Zoom", logo: "https://logo.clearbit.com/zoom.us", color: "#2D8CFF", category: "Meetings" },
  { name: "Pipedrive", logo: "https://logo.clearbit.com/pipedrive.com", color: "#1A1F36", category: "CRM" },
  { name: "Intercom", logo: "https://logo.clearbit.com/intercom.com", color: "#1F8DED", category: "Support" },
];

const integrationBenefits = [
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Connect your tools in minutes with our one-click integrations. No engineering required.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Sync",
    description: "Data flows bidirectionally, keeping your CRM and ENAI in perfect sync.",
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description: "OAuth 2.0 authentication and encrypted data transfer for all integrations.",
  },
  {
    icon: Clock,
    title: "Always On",
    description: "24/7 sync reliability with automatic retry and error handling.",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "ENAI Integrations",
            "description": "Connect ENAI with your sales stack including Salesforce, HubSpot, Slack, and 50+ more tools.",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "ENAI AI BDR Platform",
              "applicationCategory": "BusinessApplication",
              "featureList": featuredIntegrations.map(i => `${i.name} Integration`),
            }
          })
        }}
      />
      <Navigation />
      <main className="bg-[#E8DDD4]">
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-[#E8DDD4] overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(30,58,58,0.1),transparent_50%)]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-caption uppercase tracking-wider text-black/60 px-4 py-2 bg-white/50 border border-black/10 rounded-full mb-8">
                <Zap className="w-4 h-4" />
                Platform Integrations
              </div>
              <h1 className="h1 text-black mb-6">
                Connect Your Sales Stack
              </h1>
              <p className="text-body-lg text-black/60 leading-relaxed max-w-2xl">
                ENAI integrates seamlessly with your existing tools. Connect your CRM, communication platforms, and data sources to power AI-driven prospecting at scale.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="https://calendly.com/enai-ai2024/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-black text-white px-8 py-4 text-sm font-medium hover:bg-black/90 transition-all duration-300"
                >
                  Book Integration Demo
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center border border-black/30 text-black px-8 py-4 text-sm font-medium hover:bg-black/10 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F5F1ED]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {integrationBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-[#1E3A3A] rounded-lg">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-black mb-2">{benefit.title}</h3>
                  <p className="text-body-sm text-black/60">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="h2 text-black mb-6">
                Featured Integrations
              </h2>
              <p className="text-body-lg text-black/60 leading-relaxed">
                Deep integrations with the tools your sales team relies on every day.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredIntegrations.map((integration, index) => (
                <div
                  key={index}
                  className="group bg-[#F5F1ED] p-8 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-lg flex items-center justify-center shadow-sm overflow-hidden bg-white p-2"
                    >
                      <Image
                        src={integration.logo}
                        alt={`${integration.name} logo`}
                        width={40}
                        height={40}
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <span className="text-caption text-black/50 uppercase tracking-wider">
                      {integration.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-black mb-3">{integration.name}</h3>
                  <p className="text-body-sm text-black/60 leading-relaxed mb-6">
                    {integration.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {integration.features.map((feature, fIndex) => (
                      <span
                        key={fIndex}
                        className="text-caption bg-white px-3 py-1 rounded-full text-black/70"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="https://calendly.com/enai-ai2024/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#1E3A3A] group-hover:underline"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[#1E3A3A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="h2 text-white mb-6">
                And Many More
              </h2>
              <p className="text-body-lg text-white/70 leading-relaxed">
                Connect with 50+ tools through native integrations and Zapier.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {additionalIntegrations.map((integration, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-white p-2 overflow-hidden">
                    <Image
                      src={integration.logo}
                      alt={`${integration.name} logo`}
                      width={32}
                      height={32}
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="text-sm font-medium text-white">{integration.name}</span>
                  <span className="text-caption text-white/50">{integration.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[#F5F1ED]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="h2 text-black mb-6">
                Need a Custom Integration?
              </h2>
              <p className="text-body-lg text-black/60 leading-relaxed mb-10">
                Our team can help you connect ENAI with any tool in your stack. We offer custom API integrations for enterprise customers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="https://calendly.com/enai-ai2024/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-black text-white px-8 py-4 text-sm font-medium hover:bg-black/90 transition-all duration-300"
                >
                  Request Integration
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center border border-black text-black px-8 py-4 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300"
                >
                  View Enterprise Plans
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