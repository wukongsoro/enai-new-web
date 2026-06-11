import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero-section";
import EnterpriseAutonomy from "@/components/sections/enterprise-autonomy";
import TractionSignal from "@/components/sections/traction-signal";
import FounderVideoSection from "@/components/sections/founder-video-section";
import DigitalWorkersIntro from "@/components/sections/digital-workers-intro";
import WorkforceTransformation from "@/components/sections/workforce-transformation";
import MartechArchitectureFit from "@/components/sections/martech-architecture-fit";
import AmplifyIntelligence from "@/components/sections/amplify-intelligence";
import PlatformShowcase from "@/components/sections/platform-showcase";
import WorkflowsSection from "@/components/sections/workflows-section";
import GlobeSection from "@/components/sections/globe-section";
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
                "description": "The Revenue Operating System for complex B2B teams, coordinating account research, buying committee mapping, governed outreach, qualification, and meeting handoff.",
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
                "name": "ENAI Revenue Operating System",
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
                "description": "Revenue Operating System that researches accounts, maps buying committees, executes governed outreach, qualifies replies, and books meetings.",
                "featureList": [
                  "Account research",
                  "Buying committee mapping",
                  "Governed outreach",
                  "Lead qualification",
                  "Meeting handoff"
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
                      "text": "Enai.ai is the Revenue Operating System for complex B2B teams. It coordinates account research, buying committee mapping, governed outreach, qualification, and meeting handoff."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does Enai.ai cost?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Enai.ai offers plans for individuals, teams, and enterprise revenue organizations. Enterprise pricing depends on usage, integrations, governance requirements, and deployment scope."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does ENAI work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "ProspectorAI researches accounts and contacts, OutreachAI prepares governed outreach, and QualifierAI handles qualification signals and meeting handoff with audit trails and human control points."
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
        <FounderVideoSection />
        <DigitalWorkersIntro />
        <WorkforceTransformation />
        <MartechArchitectureFit />
        <AmplifyIntelligence />
        <PlatformShowcase />
        <WorkflowsSection />
        <GlobeSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
