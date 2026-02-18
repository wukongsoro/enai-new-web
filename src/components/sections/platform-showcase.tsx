"use client";

import Image from "next/image";
import Link from "next/link";

const capabilities = [
  {
    title: "Signal Detection & Scoring",
    description: "Intent signals, firmographic data, and relationship graphs mapped into prioritized target ontologies.",
  },
  {
    title: "Intelligence & Enrichment",
    description: "Automated prospect research and data enrichment with full provenance tracking on every source.",
  },
  {
    title: "Governed Outreach Execution",
    description: "Multi-channel sequences executed within defined compliance boundaries and approval gates.",
  },
  {
    title: "Qualification & Booking",
    description: "Deterministic qualification logic with governed calendar integration. Every decision logged.",
  },
];

export default function PlatformShowcase() {
  return (
    <section className="bg-[#1E3A3A] text-white py-20 px-6 sm:px-8">
      <div className="bg-[#E8DDD4] text-black rounded-[40px] max-w-[1248px] mx-auto py-16 px-6 sm:p-12 md:p-16 lg:px-20 lg:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block bg-[#F5F1ED] text-black text-sm font-medium py-1 px-3 rounded-full mb-4">
            The Revenue Operating System
          </div>
          <h2 className="text-[40px] md:text-[48px] heading-strong leading-tight mb-4">
            Closed-Loop Revenue Execution
          </h2>
          <p className="text-[22px] md:text-[26px] font-medium text-black/80 mb-6 leading-snug">
            Millions of decisions. Thousands of humans and agents. One Ontology.
          </p>
          <p className="text-[#666666] text-lg mb-8 max-w-2xl mx-auto">
            From signal ontology to governed execution. Every decision captured, every action reversible, every outcome auditable. Compliance is not a feature. It is the architecture.
          </p>
          <Link
            href="https://calendly.com/enai-ai2024/30min"
            className="inline-block bg-black text-white text-sm font-medium py-4 px-8 rounded-full transition-transform duration-300 hover:scale-105"
          >
            Request Access
          </Link>
        </div>

        {/* Ontology Architecture Diagram */}
        <div className="mt-16 relative">
          <div className="relative w-full max-w-[1000px] mx-auto">
            <Image
              src="/enai-ontology.jpeg"
              alt="ENAI Ontology Architecture: Enterprise Data, Governance, Toolchain, Applications, Agents, and Automation layers unified through a single ontology"
              width={1100}
              height={1100}
              className="w-full h-auto object-contain rounded-2xl"
              priority
            />
          </div>
        </div>

        {/* Capability Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 p-6 hover:bg-white/80 hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-lg md:text-xl font-semibold mb-2 text-black">{cap.title}</h4>
              <p className="text-sm md:text-base text-black/70 leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}