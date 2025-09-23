import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero-section";
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
      <Navigation />
      <main>
        <HeroSection />
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