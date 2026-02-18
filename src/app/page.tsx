import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero-section";
import EnterpriseAutonomy from "@/components/sections/enterprise-autonomy";
import TractionSignal from "@/components/sections/traction-signal";
import DigitalWorkersIntro from "@/components/sections/digital-workers-intro";
import WorkforceTransformation from "@/components/sections/workforce-transformation";
import AmplifyIntelligence from "@/components/sections/amplify-intelligence";
import PlatformShowcase from "@/components/sections/platform-showcase";
import WorkflowsSection from "@/components/sections/workflows-section";
import CtaSection from "@/components/sections/cta-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.enai.ai/#organization",
                "name": "Enai AI",
                "url": "https://www.enai.ai",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.enai.ai/enai-logo.png",
                  "width": 512,
                  "height": 512
                },
                "description": "AI-powered sales automation platform that transforms B2B sales with AI BDR agents",
                "sameAs": [
                  "https://twitter.com/enai_ai",
                  "https://www.linkedin.com/company/enai-ai"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Sales",
                  "url": "https://calendly.com/enai-ai2024/30min"
                }
              },
              {
                "@type": "WebSite",
                "@id": "https://www.enai.ai/#website",
                "url": "https://www.enai.ai",
                "name": "Enai AI",
                "publisher": {
                  "@id": "https://www.enai.ai/#organization"
                }
              },
              {
                "@type": "SoftwareApplication",
                "name": "Enai.ai AI BDR Platform",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "offers": {
                  "@type": "Offer",
                  "price": "4000",
                  "priceCurrency": "USD",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "4000",
                    "priceCurrency": "USD",
                    "unitText": "MONTH"
                  }
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "ratingCount": "127",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "description": "Complete AI BDR platform with ProspectorAI, QualifierAI, and OutreachAI agents for automated sales development",
                "featureList": [
                  "AI-powered prospecting",
                  "Automated lead qualification",
                  "Personalized outreach at scale",
                  "Meeting scheduling automation",
                  "Multi-channel orchestration"
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is Enai.ai?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Enai.ai is an AI-powered sales automation platform that provides AI BDR agents to automate prospecting, qualification, and outreach for B2B sales teams."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does Enai.ai cost?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Enai.ai pricing starts at $100 per agent/month, providing complete AI BDR automation. We also offer a free 14-day trial."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does AI BDR automation work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "AI BDR agents automate the entire sales development process: ProspectorAI identifies and researches prospects, OutreachAI handles personalized multi-channel outreach, and QualifierAI conducts qualification conversations and schedules meetings."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
      <Navigation />
      <main>
        <HeroSection />
        <EnterpriseAutonomy />
        <TractionSignal />
        <DigitalWorkersIntro />
        <WorkforceTransformation />
        <AmplifyIntelligence />
        <PlatformShowcase />
        <WorkflowsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}