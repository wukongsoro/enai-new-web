"use client";

import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { PlayCircle } from "lucide-react";

const tabData = [
  {
    value: "identify",
    title: "Identify Leads",
    description: "Discover & Score Leads",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b4117007-ba70-4ecf-8e44-b80106e53fc2-11x-ai/assets/images/67d92d286e1eb4cb15d5ca35_048e976b0381640b13181971d4221a5e_identify-6.webp?",
    imageAlt: "Lead identification dashboard with scoring and signals.",
  },
  {
    value: "research",
    title: "Research Prospects",
    description: "Research & Enrich Prospects",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b4117007-ba70-4ecf-8e44-b80106e53fc2-11x-ai/assets/images/67d964015aef4a098f69955b_d5c33bc4ea2687c2d60e02fa2be2a93b_tab-02-7.webp?",
    imageAlt: "Prospect research interface with enriched profiles.",
  },
  {
    value: "personalize",
    title: "Personalize Outreach",
    description: "Personalize Outreach Sequences",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b4117007-ba70-4ecf-8e44-b80106e53fc2-11x-ai/assets/images/67d9657f56d92c02498e9bef_e1945a60485e174af05deef0162da20c_tab-03-8.webp?",
    imageAlt: "Outreach personalization tool with sequence builder.",
  },
  {
    value: "engage",
    title: "Engage & Qualify",
    description: "Engage & Qualify Leads",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b4117007-ba70-4ecf-8e44-b80106e53fc2-11x-ai/assets/images/67d9696547049593d7d2d6ac_232390a6d24fef3e315113d28b45264f_tab-04-9.webp?",
    imageAlt: "Engagement and qualification dashboard with booking.",
  },
];

export default function PlatformShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-[#1E3A3A] text-white py-20 px-6 sm:px-8">
      <div className="bg-[#E8DDD4] text-black rounded-[40px] max-w-[1248px] mx-auto py-16 px-6 sm:p-12 md:p-16 lg:px-20 lg:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block bg-[#F5F1ED] text-black text-sm font-medium py-1 px-3 rounded-full mb-4">
            ENAI BDR Platform
          </div>
          <h2 className="text-[40px] md:text-[48px] font-bold leading-tight mb-6">
            Full BDR Workflow Automation
          </h2>
          <p className="text-[#666666] text-lg mb-6">
            From lead identification to qualified meetings—ENAI handles your entire outbound pipeline with AI precision and scale.
          </p>
          <Link
            href="/demo"
            className="inline-block bg-black text-white text-sm font-medium py-4 px-8 rounded-full transition-transform duration-300 hover:scale-105"
          >
            See Demo
          </Link>
        </div>

        <div className="mt-16">
          <Tabs defaultValue="identify" className="w-full">
            {tabData.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="mt-0 rounded-3xl overflow-hidden">
                <div className="relative aspect-[16/10] w-full max-w-5xl mx-auto">
                  {isPlaying ? (
                    <video
                      src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/crm(1)(1)(1).mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    <>
                      <Image
                        src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/crm-featured.png"
                        alt="CRM Demo Thumbnail"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1248px) 90vw, 1120px"
                        className="object-cover rounded-2xl"
                      />
                      {/* Play button overlay */}
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity group"
                      >
                        <PlayCircle className="w-12 h-12 sm:w-16 sm:h-16 text-white drop-shadow-lg" />
                      </button>
                    </>
                  )}
                </div>
              </TabsContent>
            ))}
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 bg-transparent p-0 h-auto">
              {tabData.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="relative group w-full min-h-[180px] text-left p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/70 data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-300 ring-offset-transparent focus-visible:ring-0 focus-visible:ring-offset-0 justify-start items-start flex-col hover:shadow-md flex"
                  style={{ boxSizing: 'border-box', overflow: 'hidden' }}
                >
                  <div className="opacity-60 group-data-[state=active]:opacity-100 transition-opacity w-full flex flex-col justify-start h-full"
                       style={{ boxSizing: 'border-box', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                    <h4 className="text-xl md:text-2xl font-semibold mb-3 leading-tight text-black flex-shrink-0"
                        style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}>{tab.title}</h4>
                    <p className="text-sm md:text-base text-black/80 leading-relaxed mt-auto flex-shrink-0"
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