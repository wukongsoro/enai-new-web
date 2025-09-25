import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";

const PricingTiers = [
  {
    name: "Free Trial",
    price: "$0",
    period: "/14 days",
    description: "Try core features with limits",
    features: [
      "100 emails/month",
      "1 sequence template",
      "Basic reporting",
      "Email support",
      "No voice features",
      "No integrations"
    ],
    cta: "Start Free Trial"
  },
  {
    name: "Starter",
    price: "$100",
    period: "/per agent/month",
    description: "Essential automation for small teams",
    features: [
      "2,000 emails/month",
      "400 leads/month included",
      "Email sequences",
      "Basic reporting",
      "CRM integration",
      "Limited voice calling (50 mins/mo)",
      "Priority support"
    ],
    cta: "Get Started"
  },
  {
    name: "Pro",
    price: "$200",
    period: "/per agent/month",
    description: "Full automation with voice and advanced features",
    features: [
      "10,000 emails/month",
      "2,000 leads/month included",
      "Email + voice sequences",
      "Domain warmup",
      "A/B testing",
      "All integrations",
      "Advanced analytics"
    ],
    cta: "Upgrade to Pro",
    popular: true
  },
  {
    name: "Team",
    price: "Custom",
    description: "Enterprise features with custom limits",
    features: [
      "Custom email limits",
      "Multi-seat management",
      "SSO integration",
      "SLA guarantees",
      "Custom approval workflows",
      "Dedicated success manager"
    ],
    cta: "Contact Sales"
  }
];

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-32 md:pt-40 pb-16 md:pb-24">
        {/* Pricing Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Pricing
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground mb-16 leading-relaxed">
            See pricing for our individual, business, and enterprise plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="px-8">
              <Link href="https://calendly.com/enai-ai2024/30min?month=2025-09" target="_blank" rel="noopener noreferrer">Book a Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8">
              <Link href="/blog">Learn More</Link>
            </Button>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 auto-rows-min grid-rows-[auto_auto_auto_auto_1fr]">
            {PricingTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`pricing-card relative z-10 row-span-5 grid grid-rows-subgrid gap-y-0 overflow-hidden rounded-[20px] px-5 pt-5 pb-7 ${
                  tier.name === "Team" ? "pricing-card-shadow-primary" : "pricing-card-shadow-secondary"
                } ${tier.popular ? "pricing-card-shadow-primary" : ""}`}
              >
                <div className="row-start-1 grid grid-cols-2 gap-y-4">
                  <div className="flex items-center gap-x-2 self-start">
                    <h3 className="text-lg leading-snug font-semibold tracking-tight text-gray-20">{tier.name}</h3>
                    {tier.popular && (
                      <div className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs font-medium tracking-tight">
                        Popular
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-base leading-snug tracking-tight text-gray-40 row-start-4 mt-4">{tier.description}</p>

                <div className="row-start-2 mt-5">
                  <div className="flex gap-x-1 flex-row items-end">
                    <span className="flex flex-col gap-y-1">
                      <span className="font-sans text-[40px] leading-tight font-medium tracking-tight text-foreground">
                        {tier.price}
                      </span>
                    </span>
                  </div>
                  {tier.period && (
                    <span className="text-sm leading-tight tracking-tight text-muted-foreground mt-1">
                      {tier.period}
                    </span>
                  )}
                </div>

                <div className="row-start-3 mt-[22px]">
                  {tier.name === "Team" ? (
                    <a
                      href="/contact"
                      className="relative inline-flex items-center justify-center gap-1 font-medium tracking-tight whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50 [&_a]:relative [&_a]:z-10 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 before:absolute before:inset-0 before:cursor-pointer before:rounded-[inherit] before:border before:border-transparent before:bg-transparent before:opacity-0 before:transition-opacity before:ease-in-out hover:before:opacity-100 bg-[linear-gradient(180deg,#80B5FF_0%,#38F_97.46%)] text-white hover:bg-[linear-gradient(180deg,#529AFF_0%,#1B73EE_97.46%)] rounded-md px-5 lg:h-11 lg:rounded-lg lg:text-base lg:leading-none h-11 w-full text-base leading-none"
                    >
                      <span className="relative z-10 inline-flex whitespace-nowrap items-center justify-center gap-1 w-full">
                        {tier.cta}
                      </span>
                    </a>
                  ) : (
                    <a
                      href={tier.name === "Free Trial" ? "/trial" : "/signup"}
                      className="relative inline-flex items-center justify-center gap-1 font-medium tracking-tight whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50 [&_a]:relative [&_a]:z-10 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 before:absolute before:inset-0 before:cursor-pointer before:rounded-[inherit] before:border before:border-transparent before:bg-transparent before:opacity-0 before:transition-opacity before:ease-in-out hover:before:opacity-100 bg-[radial-gradient(84.32%_100%_at_49.77%_0%,#2E3038_46.14%,#1C1D22_100%)] text-white hover:bg-[radial-gradient(84.32%_100%_at_49.77%_0%,#404451_46.14%,#2D2F38_100%)] rounded-md px-5 lg:h-11 lg:rounded-lg lg:text-base lg:leading-none h-11 w-full text-base leading-none"
                    >
                      <span className="relative z-10 inline-flex whitespace-nowrap items-center justify-center gap-1 w-full">
                        {tier.cta}
                      </span>
                    </a>
                  )}
                </div>

                <div className="row-start-5 mb-1 flex flex-col gap-y-2.5 mt-3.5 border-t border-border pt-6">
                  {tier.name !== "Free Trial" && (
                    <p className="text-sm leading-tight font-medium tracking-tight text-foreground">
                      Everything in {tier.name === "Starter" ? "Free Trial" : tier.name === "Pro" ? "Starter" : "Pro"}, plus...
                    </p>
                  )}
                  <ul className="flex flex-col gap-y-2.5">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check mr-2 shrink-0 text-primary-blue"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span className="leading-[1.3] tracking-tight text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Comparison */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Plan Comparison</h2>

          {/* Mobile Card View */}
          <div className="block md:hidden space-y-6 mb-12">
            {[
              { name: "Free Trial", features: [
                "Emails per month: 100",
                "Sequences: Limited",
                "Voice features: ✗",
                "Domain warmup: ✗",
                "A/B testing: ✗",
                "Integrations: ✗",
                "Advanced analytics: ✗",
                "Multi-seat management: ✗",
                "SSO integration: ✗",
                "SLA guarantees: ✗",
                "Custom workflows: ✗"
              ]},
              { name: "Starter", features: [
                "Emails per month: 2,000",
                "Sequences: ✓",
                "Voice features: Limited",
                "Domain warmup: ✗",
                "A/B testing: ✗",
                "Integrations: ✓",
                "Advanced analytics: Basic",
                "Multi-seat management: ✗",
                "SSO integration: ✗",
                "SLA guarantees: ✗",
                "Custom workflows: ✗"
              ]},
              { name: "Pro", features: [
                "Emails per month: 10,000",
                "Sequences: ✓",
                "Voice features: ✓",
                "Domain warmup: ✓",
                "A/B testing: ✓",
                "Integrations: ✓",
                "Advanced analytics: ✓",
                "Multi-seat management: ✗",
                "SSO integration: ✗",
                "SLA guarantees: ✗",
                "Custom workflows: ✗"
              ]},
              { name: "Team", features: [
                "Emails per month: Custom",
                "Sequences: ✓",
                "Voice features: ✓",
                "Domain warmup: ✓",
                "A/B testing: ✓",
                "Integrations: ✓",
                "Advanced analytics: ✓",
                "Multi-seat management: ✓",
                "SSO integration: ✓",
                "SLA guarantees: ✓",
                "Custom workflows: ✓"
              ]}
            ].map((plan) => (
              <div key={plan.name} className="bg-card border rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-center mb-4 text-foreground">{plan.name}</h3>
                <div className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{feature.split(':')[0]}:</span>
                      <span className="font-medium">{feature.split(':')[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody className="divide-y">
                <tr>
                  <td className="py-4 text-muted-foreground">Emails per month</td>
                  <td className="py-4 text-center text-muted-foreground">100</td>
                  <td className="py-4 text-center text-muted-foreground">2,000</td>
                  <td className="py-4 text-center text-foreground">10,000</td>
                  <td className="py-4 text-center text-foreground">Custom</td>
                </tr>
                <tr>
                  <td className="py-4 text-muted-foreground">Sequences</td>
                  <td className="py-4 text-center text-muted-foreground">Limited</td>
                  <td className="py-4 text-center text-foreground">✓</td>
                  <td className="py-4 text-center text-foreground">✓</td>
                  <td className="py-4 text-center text-foreground">✓</td>
                </tr>
                <tr>
                  <td className="py-4 text-muted-foreground">Voice features</td>
                  <td className="py-4 text-center text-muted-foreground">✗</td>
                  <td className="py-4 text-center text-muted-foreground">Limited</td>
                  <td className="py-4 text-center text-foreground">✓</td>
                  <td className="py-4 text-center text-foreground">✓</td>
                </tr>
                <tr>
                  <td className="py-4 text-muted-foreground">Domain warmup</td>
                  <td className="py-4 text-center text-muted-foreground">✗</td>
                  <td className="py-4 text-center text-muted-foreground">✗</td>
                  <td className="py-4 text-center text-foreground">✓</td>
                  <td className="py-4 text-center text-foreground">✓</td>
                </tr>
                <tr>
                  <td className="py-4 text-muted-foreground">A/B testing</td>
                  <td className="py-4 text-center text-muted-foreground">✗</td>
                  <td className="py-4 text-center text-muted-foreground">✗</td>
                  <td className="py-4 text-center text-foreground">✓</td>
                  <td className="py-4 text-center text-foreground">✓</td>
                </tr>
                <tr>
                  <td className="py-4 text-muted-foreground">Integrations</td>
                  <td className="py-4 text-center text-muted-foreground">✗</td>
                  <td className="py-4 text-center text-foreground">✓</td>
                  <td className="py-4 text-center text-foreground">✓</td>
                  <td className="py-4 text-center text-foreground">✓</td>
                </tr>
                <tr>
                  <td className="py-4 text-muted-foreground">Advanced analytics</td>
                  <td className="py-4 text-center text-muted-foreground">✗</td>
                  <td className="py-4 text-center text-muted-foreground">Basic</td>
                  <td className="py-4 text-center text-foreground">✓</td>
                  <td className="py-4 text-center text-foreground">✓</td>
                </tr>
                <tr>
                  <td className="py-4 text-muted-foreground">Multi-seat management</td>
                  <td className="py-4 text-center text-muted-foreground">✗</td>
                  <td className="py-4 text-center text-muted-foreground">✗</td>
                  <td className="py-4 text-center text-muted-foreground">✗</td>
                  <td className="py-4 text-center text-foreground">✓</td>
                </tr>
                <tr>
                  <td className="py-4 text-muted-foreground">SSO integration</td>
                  <td className="py-4 text-center text-muted-foreground">✗</td>
                  <td className="py-4 text-center text-muted-foreground">✗</td>
                  <td className="py-4 text-center text-muted-foreground">✗</td>
                  <td className="py-4 text-center text-foreground">✓</td>
                </tr>
                <tr>
                  <td className="py-4 text-muted-foreground">SLA guarantees</td>
                  <td className="py-4 text-center text-muted-foreground">✗</td>
                  <td className="py-4 text-center text-muted-foreground">✗</td>
                  <td className="py-4 text-center text-muted-foreground">✗</td>
                  <td className="py-4 text-center text-foreground">✓</td>
                </tr>
                <tr>
                  <td className="py-4 text-muted-foreground">Custom workflows</td>
                  <td className="py-4 text-center text-muted-foreground">✗</td>
                  <td className="py-4 text-center text-muted-foreground">✗</td>
                  <td className="py-4 text-center text-muted-foreground">✗</td>
                  <td className="py-4 text-center text-foreground">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Transform Your Sales?</h2>
            <p className="text-xl text-muted-foreground mb-8">Join thousands of teams scaling their pipelines with ENAI.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8">
                <Link href="/demo">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8">
                <Link href="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}