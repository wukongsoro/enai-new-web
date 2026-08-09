"use client";

import Image from "next/image";
import Link from "next/link";

const capabilities = [
  {
    title: "Detect commercial change",
    description: "Connect market, operational, product, and account signals to a reason for the revenue team to act.",
  },
  {
    title: "Map the buying system",
    description: "Identify the operators, economic buyers, evaluators, procurement path, and relationship context around the decision.",
  },
  {
    title: "Execute within policy",
    description: "Coordinate permitted actions using customer-defined claims, approvals, exclusions, pacing, and escalation rules.",
  },
  {
    title: "Preserve the handoff",
    description: "Give the responsible seller the opportunity, evidence, stakeholder route, authority boundary, and next action together.",
  },
];

export default function PlatformShowcase() {
  return (
    <section className="bg-[#1E3A3A] text-white py-20 px-6 sm:px-8">
      <div className="bg-[#E8DDD4] text-black rounded-[40px] max-w-[1248px] mx-auto py-16 px-6 sm:p-12 md:p-16 lg:px-20 lg:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block bg-[#F5F1ED] text-black text-sm font-medium py-1 px-3 rounded-full mb-4">
            Governed revenue execution
          </div>
          <h2 className="text-[40px] md:text-[48px] heading-strong leading-tight mb-4">
            Define the outcome. ENAI runs the work.
          </h2>
          <p className="text-[22px] md:text-[26px] font-medium text-black/80 mb-6 leading-snug">
            Define the market, evidence threshold, buying route, operating rules, and human owner. ENAI coordinates the work between them.
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
