"use client";

import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabData = [
  {
    value: "identify",
    title: "Identify Leads",
    description: "Discover & Score Leads",
    imageSrc: "/identify-leads.png",
    imageAlt: "Lead identification dashboard with scoring and signals.",
  },
  {
    value: "research",
    title: "Research Prospects",
    description: "Research & Enrich Prospects",
    imageSrc: "/research-prospects.png",
    imageAlt: "Prospect research interface with enriched profiles.",
  },
  {
    value: "personalize",
    title: "Personalize Outreach",
    description: "Personalize Outreach Sequences",
    imageSrc: "/personalize-outreach.png",
    imageAlt: "Outreach personalization tool with sequence builder.",
  },
  {
    value: "engage",
    title: "Engage & Qualify",
    description: "Engage & Qualify Leads",
    imageSrc: "/engage-qualify.png",
    imageAlt: "Engagement and qualification dashboard with booking.",
  },
];

export default function PlatformShowcase() {

  return (
    <section className="bg-[#1E3A3A] text-white py-20 px-6 sm:px-8">
      <div className="bg-[#E8DDD4] text-black rounded-[40px] max-w-[1248px] mx-auto py-16 px-6 sm:p-12 md:p-16 lg:px-20 lg:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block bg-[#F5F1ED] text-black text-sm font-medium py-1 px-3 rounded-full mb-4">
            The ENAI Platform
          </div>
          <h2 className="text-[40px] md:text-[48px] heading-strong leading-tight mb-6">
            Complete Revenue Workflow
          </h2>
          <p className="text-[#666666] text-lg mb-6">
            Signal detection to booked meeting. Every step logged, every action reversible, full compliance built in.
          </p>
          <Link
            href="https://calendly.com/enai-ai2024/30min"
            className="inline-block bg-black text-white text-sm font-medium py-4 px-8 rounded-full transition-transform duration-300 hover:scale-105"
          >
            Request Access
          </Link>
        </div>

        <div className="mt-16">
          <Tabs defaultValue="identify" className="w-full">
            {tabData.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="mt-0 rounded-3xl overflow-hidden">
                <div className="relative w-full max-w-[1400px] mx-auto">
                  <Image
                    src={tab.imageSrc}
                    alt={tab.imageAlt}
                    width={1200}
                    height={750}
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </div>
              </TabsContent>
            ))}
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-16 bg-transparent p-0 h-auto">
              {tabData.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="relative group w-full min-h-[180px] text-left p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/70 data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-300 ring-offset-transparent focus-visible:ring-0 focus-visible:ring-offset-0 justify-start items-start flex-col hover:shadow-md flex"
                  style={{ boxSizing: 'border-box', overflow: 'hidden' }}
                >
                  <div className="opacity-60 group-data-[state=active]:opacity-100 transition-opacity w-full flex flex-col justify-start h-full"
                    style={{ boxSizing: 'border-box' }}>
                    <h4 className="text-xl md:text-2xl font-semibold mb-3 leading-tight text-black"
                      style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}>{tab.title}</h4>
                    <p className="text-sm md:text-base text-black/80 leading-relaxed mt-auto"
                      style={{
                        fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word'
                      }}>
                      {tab.description}
                    </p>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
    </section>
  );
}