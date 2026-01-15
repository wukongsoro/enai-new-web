import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Check, Minus } from "lucide-react";

const PricingTiers = [
  {
    name: "Starter",
    price: "$0",
    period: "/ month",
    description: "For individuals doing light pipeline generation activities on a small number of accounts.",
    features: [
      "10 agents",
    ],
    cta: "Get Started",
    ctaLink: "https://calendly.com/enai-ai2024/30min"
  },
  {
    name: "Core",
    price: "$50",
    period: "/ 5,000 actions per month",
    description: "For sales professionals aiming to exceed their revenue goals: run research, monitoring, and discovery of contacts in your accounts.",
    features: [
      "100 agents",
    ],
    cta: "Get Started",
    ctaLink: "https://calendly.com/enai-ai2024/30min",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Contact Sales",
    description: "Designed for Enterprise companies who want their sales teams operating at the highest level.",
    features: [
      "Unlimited agents",
      "Advanced data integrations",
      "Extensive customization and control",
    ],
    cta: "Get In Touch",
    ctaLink: "https://calendly.com/enai-ai2024/30min"
  }
];

const comparisonData = {
  usageLimits: {
    title: "Usage Limits",
    items: [
      { name: "Users", starter: "Unlimited", core: "Unlimited", enterprise: "Unlimited" },
      { name: "Accounts (one agent per)", starter: "10", core: "100", enterprise: "Unlimited" },
      { name: "Agent Actions per month", starter: "2,500", core: "5,000", enterprise: "Contact Us" },
    ]
  },
  plan: {
    title: "Plan",
    items: [
      { name: "List Generation", starter: true, core: true, enterprise: true },
      { name: "ICP Prioritization", starter: true, core: true, enterprise: true },
      { name: "Basic Data Enrichment", starter: true, core: true, enterprise: true },
      { name: "Premium Data Enrichment", starter: false, core: false, enterprise: true },
    ]
  },
  research: {
    title: "Research",
    items: [
      { name: "Account Information", starter: true, core: true, enterprise: true },
      { name: "Teams and Technologies", starter: true, core: true, enterprise: true },
      { name: "Custom Research Sections", starter: true, core: true, enterprise: true },
    ]
  },
  discover: {
    title: "Discover",
    items: [
      { name: "ICP Clever Columns", starter: true, core: true, enterprise: true },
      { name: "Contacts", starter: true, core: true, enterprise: true },
    ]
  },
  pipeGenActions: {
    title: "Pipe Gen Actions",
    items: [
      { name: "Engage", starter: true, core: true, enterprise: true },
      { name: "Email Generation", starter: true, core: true, enterprise: true },
      { name: "LinkedIn Message Generation", starter: true, core: true, enterprise: true },
    ]
  },
  meetingInformation: {
    title: "Meeting Information",
    items: [
      { name: "Pre-meeting Briefing", starter: true, core: true, enterprise: true },
      { name: "Conversational Meeting Briefings", starter: true, core: true, enterprise: true },
    ]
  },
  monitor: {
    title: "Monitor",
    items: [
      { name: "Insights: Public Data", starter: true, core: true, enterprise: true },
      { name: "Insights: Private Data", starter: false, core: false, enterprise: true },
    ]
  },
  userInterfaces: {
    title: "User Interfaces",
    items: [
      { name: "Email", starter: true, core: true, enterprise: true },
      { name: "Web App", starter: true, core: true, enterprise: true },
      { name: "MacOS App", starter: true, core: true, enterprise: true },
      { name: "Slack", starter: false, core: false, enterprise: true },
      { name: "Salesforce", starter: false, core: false, enterprise: true },
    ]
  },
  dataIntegrations: {
    title: "Data Integrations",
    items: [
      { name: "Google Calendar", starter: true, core: true, enterprise: true },
      { name: "Microsoft O365 Calendar", starter: true, core: true, enterprise: true },
      { name: "Salesforce (CRM)", starter: false, core: false, enterprise: true },
      { name: "Salesforce (Service Cloud)", starter: false, core: false, enterprise: true },
      { name: "Zendesk", starter: false, core: false, enterprise: true },
      { name: "Slack", starter: false, core: false, enterprise: true },
      { name: "Cloud Warehousing (Snowflake, Redshift, BigQuery)", starter: false, core: false, enterprise: true },
      { name: "Sales Enablement Hubs", starter: false, core: false, enterprise: true },
      { name: "Custom Integrations", starter: false, core: false, enterprise: true },
    ]
  },
  governance: {
    title: "Governance",
    items: [
      { name: "Calendar Intelligence", starter: true, core: true, enterprise: true },
      { name: "Privacy, Reliability, & Compliance", starter: true, core: true, enterprise: true },
      { name: "Google OAuth", starter: true, core: true, enterprise: true },
      { name: "Audit Logs", starter: false, core: false, enterprise: true },
      { name: "Enterprise API Access", starter: false, core: false, enterprise: true },
      { name: "Hybrid Deployment Option (via cloud warehouses datasharing)", starter: false, core: false, enterprise: true },
      { name: "Org-wide Admin Controls", starter: false, core: false, enterprise: true },
      { name: "Management Reporting", starter: false, core: false, enterprise: true },
      { name: "Custom Metrics (incl. cross-datasources)", starter: false, core: false, enterprise: true },
      { name: "ProServ - Integration & Training", starter: false, core: false, enterprise: true },
      { name: "Priority Support", starter: false, core: false, enterprise: true },
    ]
  },
};

export default function PricingPage() {
  const renderValue = (value: boolean | string) => {
    if (typeof value === "string") {
      return <span className="text-foreground font-medium">{value}</span>;
    }
    return value ? (
      <Check className="w-5 h-5 text-green-600 mx-auto" />
    ) : (
      <Minus className="w-5 h-5 text-muted-foreground/40 mx-auto" />
    );
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-32 md:pt-40 pb-16 md:pb-24">
        {/* Pricing Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="h1 text-foreground mb-6">
            Pricing
          </h1>
          <p className="max-w-3xl mx-auto text-body-lg text-muted-foreground mb-16 leading-relaxed">
            Choose the plan that fits your sales goals.
          </p>
        </section>

        {/* Pricing Tiers */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {PricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border bg-card p-8 flex flex-col ${tier.popular ? "border-primary shadow-lg ring-2 ring-primary" : "border-border"
                  }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    {tier.period && (
                      <span className="text-sm text-muted-foreground">{tier.period}</span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-6 flex-grow">{tier.description}</p>
                <div className="mb-6">
                  <p className="text-sm font-medium text-foreground mb-3">Features:</p>
                  <ul className="space-y-2">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-foreground">
                        <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={tier.ctaLink || "/contact"}
                  className={`w-full inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-colors ${tier.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Compare Plans Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">Compare our plans</h2>
          <p className="text-center text-muted-foreground mb-12">See which plan is right for you</p>

          {/* Sticky Plan Headers */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-4 text-left w-1/3"></th>
                  <th className="py-4 text-center">
                    <div className="font-semibold text-foreground">Starter</div>
                    <div className="text-sm text-muted-foreground">$0 / month</div>
                    <Link href="https://calendly.com/enai-ai2024/30min" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm text-primary hover:underline">Get Started</Link>
                  </th>
                  <th className="py-4 text-center">
                    <div className="font-semibold text-foreground">Core</div>
                    <div className="text-sm text-muted-foreground">$50 / month</div>
                    <Link href="https://calendly.com/enai-ai2024/30min" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm text-primary hover:underline">Get Started</Link>
                  </th>
                  <th className="py-4 text-center">
                    <div className="font-semibold text-foreground">Enterprise</div>
                    <div className="text-sm text-muted-foreground">Contact Sales</div>
                    <Link href="https://calendly.com/enai-ai2024/30min" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm text-primary hover:underline">Get In Touch</Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.values(comparisonData).map((section) => (
                  <React.Fragment key={section.title}>
                    <tr className="bg-muted/30">
                      <td colSpan={4} className="py-3 px-4 font-semibold text-foreground">{section.title}</td>
                    </tr>
                    {section.items.map((item) => (
                      <tr key={item.name} className="border-b border-border/50">
                        <td className="py-3 px-4 text-sm text-muted-foreground">{item.name}</td>
                        <td className="py-3 text-center">{renderValue(item.starter)}</td>
                        <td className="py-3 text-center">{renderValue(item.core)}</td>
                        <td className="py-3 text-center">{renderValue(item.enterprise)}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Comparison View */}
          <div className="block md:hidden space-y-8">
            {PricingTiers.map((tier) => (
              <div key={tier.name} className="bg-card border rounded-xl p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
                  <div className="text-2xl font-bold text-foreground mt-2">{tier.price}</div>
                  {tier.period && <div className="text-sm text-muted-foreground">{tier.period}</div>}
                </div>
                {Object.values(comparisonData).map((section) => (
                  <div key={section.title} className="mb-4">
                    <h4 className="font-medium text-foreground mb-2 text-sm">{section.title}</h4>
                    <div className="space-y-1">
                      {section.items.map((item) => {
                        const value = tier.name === "Starter" ? item.starter : tier.name === "Core" ? item.core : item.enterprise;
                        return (
                          <div key={item.name} className="flex justify-between items-center text-sm py-1">
                            <span className="text-muted-foreground">{item.name}</span>
                            <span>{renderValue(value)}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
                <Link
                  href={tier.ctaLink || "/contact"}
                  className="w-full inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#F5F1ED] py-16 mt-8 rounded-xl mx-4 sm:mx-6 lg:mx-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="h3 text-foreground mb-4">Ready to Transform Your Sales?</h2>
            <p className="text-body-lg text-muted-foreground mb-8">Start with our free Starter plan or talk to sales for Enterprise.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8 rounded-lg">
                <Link href="https://calendly.com/enai-ai2024/30min" target="_blank" rel="noopener noreferrer">Get Started Free</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 rounded-lg">
                <Link href="https://calendly.com/enai-ai2024/30min" target="_blank" rel="noopener noreferrer">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}