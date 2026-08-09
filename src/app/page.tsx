import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero-section";
import EnterpriseAutonomy from "@/components/sections/enterprise-autonomy";
import RealRunSection from "@/components/sections/real-run-section";
import GovernedSection from "@/components/sections/governed-section";
import TractionSignal from "@/components/sections/traction-signal";
import FounderVideoSection from "@/components/sections/founder-video-section";
import DigitalWorkersIntro from "@/components/sections/digital-workers-intro";
import MartechArchitectureFit from "@/components/sections/martech-architecture-fit";
import IndustryWorkflowsSection from "@/components/sections/industry-workflows-section";
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
                "@id": "https://enai.ai/#organization",
                "name": "Enai AI",
                "url": "https://enai.ai",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://enai.ai/enai-logo.png",
                  "width": 512,
                  "height": 512
                },
                "description": "The Revenue Operating System for governed execution in complex B2B markets, connecting market signals, buying systems, customer policy, qualification, and seller handoff.",
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
                "@id": "https://enai.ai/#website",
                "url": "https://enai.ai",
                "name": "Enai AI",
                "publisher": {
                  "@id": "https://enai.ai/#organization"
                }
              },
              {
                "@type": "SoftwareApplication",
                "name": "ENAI Revenue Operating System",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Revenue Operating System that connects market signals to buying systems, applies customer policy, coordinates permitted action, and preserves the seller handoff.",
                "featureList": [
                  "Market and account signal detection",
                  "Vertical buying-system mapping",
                  "Policy-controlled execution",
                  "Response qualification",
                  "Seller handoff with source context"
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
                      "text": "Enai.ai is the Revenue Operating System for governed execution in complex B2B markets. It connects market signals to the buying system, applies customer policy, coordinates permitted action, and preserves the seller handoff."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How is ENAI priced?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "ENAI provides a commercial proposal after reviewing the target workflow, account coverage, integrations, governance requirements, and level of managed execution."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does ENAI work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "ENAI connects market and account signals to the buying committee, prepares governed engagement, qualifies responses, and hands the opportunity to the responsible seller with source context, approval rules, and an audit trail."
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
        <RealRunSection />
        <TractionSignal />
        <GovernedSection />
        <FounderVideoSection />
        <DigitalWorkersIntro />
        <MartechArchitectureFit />
        <IndustryWorkflowsSection />
        <PlatformShowcase />
        <WorkflowsSection />
        <GlobeSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
