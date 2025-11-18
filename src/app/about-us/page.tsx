import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}


const defaultAchievements = [
  { label: "Pipeline velocity increase", value: "50%" },
  { label: "Cost reduction in sales acquisition", value: "70%" },
  { label: "More qualified meetings generated", value: "3x" },
  { label: "Lead conversion rate improvement", value: "35%" },
  { label: "Sales cycle duration reduction", value: "20 days" },
  { label: "Year-over-year revenue growth", value: "50%" },
];

const About3 = ({
  title = "About ENAI",
  description = "ENAI is an AI-powered business development platform that builds intelligent digital workers to revolutionize sales and marketing operations. We believe artificial intelligence should augment human potential, not replace it.",
  mainImage = {
    src: "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/672e35900c2fbc913aab53fd_about%20hero.webp",
    alt: "ENAI Team",
  },
  secondaryImage = {
    src: "",
    alt: "AI Technology",
  },
  breakout = {
    src: "/enai-logo.png",
    alt: "ENAI Logo",
    title: "Trusted by leading companies",
    description: "Our AI-powered sales automation platform helps businesses scale their outbound operations while maintaining human connection.",
    buttonText: "Book a Demo",
    buttonUrl: "https://calendly.com/enai-ai2024/30min",
  },
  achievementsTitle = "Measurable Results That Drive Growth",
  achievementsDescription = "Our AI-powered platform delivers transformative outcomes across sales teams and enterprises worldwide.",
  achievements = defaultAchievements,
}: About3Props = {}) => {
  return (
    <section className="pt-48 pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight">{title}</h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{description}</p>
        </div>
        <div className="grid gap-6 sm:gap-7 lg:grid-cols-3">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="size-full max-h-[400px] sm:max-h-[500px] lg:max-h-[620px] rounded-xl object-cover lg:col-span-2"
          />
          <div className="max-w-md mx-auto lg:mx-0">
            <div className="flex flex-col justify-between gap-6 rounded-xl bg-gray-50 p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <img
                  src={breakout.src}
                  alt={breakout.alt}
                  className="h-10 w-10 sm:h-12 sm:w-auto flex-shrink-0"
                />
                <span className="text-lg sm:text-xl font-bold text-black">ENAI</span>
              </div>
              <div>
                <p className="mb-2 text-base sm:text-lg font-semibold text-black">{breakout.title}</p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{breakout.description}</p>
              </div>
              <Button variant="outline" className="mr-auto border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white min-h-[44px] w-full sm:w-auto sm:min-w-[140px]" asChild>
                <a href={breakout.buttonUrl} target="_blank">
                  {breakout.buttonText}
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-16 sm:py-24 lg:py-32">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 sm:mb-8">
              Our Mission
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gray-900 mx-auto mb-8 sm:mb-12 lg:mb-16"></div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0">
              To build AI that genuinely helps people. We believe artificial intelligence should augment human potential, not replace it. Our digital workers handle the repetitive tasks of sales and business development, so your team can focus on creativity, strategy, and relationships.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto px-4 sm:px-0">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">Intelligent Automation</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Our AI understands sales context and human behavior, creating outreach that's both effective and authentic.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">Human-Centric Design</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  We build technology that respects human intelligence and enhances human work, never replacing the irreplaceable.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">Measurable Impact</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Every feature we build must demonstrably improve sales outcomes and human productivity.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">Ethical AI</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  We prioritize responsible AI development, transparency, and the long-term benefit of humanity.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl bg-gray-50 p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">{achievementsTitle}</h2>
            <p className="max-w-2xl text-gray-600 mx-auto text-sm sm:text-base leading-relaxed">
              {achievementsDescription}
            </p>
          </div>
          <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {achievements.map((item, idx) => (
              <div className="flex flex-col gap-2 sm:gap-3 text-center" key={item.label + idx}>
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                  {item.value}
                </span>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-tight">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default function AboutUs() {
  return (
    <>
      <Navigation />
      <main>
        <About3 />
      </main>
      <Footer />
    </>
  );
}
