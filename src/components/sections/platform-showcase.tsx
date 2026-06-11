"use client";

import Image from "next/image";
import Link from "next/link";

const capabilities = [
  {
    title: "Find the right buyers",
    description: "Spot accounts showing intent and rank them by fit, timing, and reachable decision makers.",
  },
  {
    title: "Research before outreach",
    description: "Pull company context, role relevance, and recent triggers into every message and handoff.",
  },
  {
    title: "Run outreach safely",
    description: "Send personalized follow-ups across channels while keeping your approval rules and brand voice intact.",
  },
  {
    title: "Book qualified meetings",
    description: "Ask the right questions, handle objections, and schedule sales conversations with full context.",
  },
];

export default function PlatformShowcase() {
  return (
    <section className="bg-[#1E3A3A] text-white py-20 px-6 sm:px-8">
      <div className="bg-[#E8DDD4] text-black rounded-[40px] max-w-[1248px] mx-auto py-16 px-6 sm:p-12 md:p-16 lg:px-20 lg:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block bg-[#F5F1ED] text-black text-sm font-medium py-1 px-3 rounded-full mb-4">
            Controlled AI sales execution
          </div>
          <h2 className="text-[40px] md:text-[48px] heading-strong leading-tight mb-4">
            Ask for pipeline. ENAI does the work.
          </h2>
          <p className="text-[22px] md:text-[26px] font-medium text-black/80 mb-6 leading-snug">
            Tell ENAI who you sell to and what good looks like. It finds buyers, runs outreach, qualifies interest, and books meetings.
          </p>
          <p className="text-[#666666] text-lg mb-8 max-w-2xl mx-auto">
            Your team can review, approve, and trace every action. That means automation without losing control of customer experience, data, or brand.
          </p>
          <Link
            href="https://calendly.com/enai-ai2024/30min"
            className="inline-block bg-black text-white text-sm font-medium py-4 px-8 rounded-full transition-colors duration-300 hover:bg-black/85"
          >
            Book a demo
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
