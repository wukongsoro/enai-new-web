"use client";

import React from "react";
import { Award, Layers3, PlayCircle, ShieldCheck } from "lucide-react";

const tractionSignals = [
    {
        icon: Award,
        title: "Startup Showcase",
        description: "Selected to present as part of London's Agentic AI showcase at Web Summit Qatar 2026.",
        metric: "Top 10",
        metricLabel: "Agentic AI",
    },
    {
        icon: PlayCircle,
        title: "Recorded Workflows",
        description: "Public product runs for logistics, healthcare, and wholesale revenue motions.",
        metric: "03",
        metricLabel: "Industry Runs",
    },
    {
        icon: Layers3,
        title: "Execution Architecture",
        description: "Research, buying-committee mapping, controlled outreach, qualification, and handoff in one system.",
        metric: "01",
        metricLabel: "Operating Layer",
    },
    {
        icon: ShieldCheck,
        title: "Human Authority",
        description: "Approval rules, exclusions, source context, and escalation stay visible to the customer.",
        metric: "Human",
        metricLabel: "Control Owner",
    },
];

const TractionSignal = () => {
    return (
        <section className="relative overflow-hidden border-y border-black/5 bg-white py-20 md:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="mb-10 max-w-3xl">
                    <p className="section-eyebrow text-[#1E3A3A]/60">
                        Proof
                    </p>
                    <h2 className="section-title mt-4 text-[#1E3A3A]">
                        Proof an investor or buyer can inspect.
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {tractionSignals.map((signal, index) => {
                        const Icon = signal.icon;
                        return (
                            <div
                                key={index}
                                className="relative flex flex-col gap-5 rounded-2xl border border-black/8 bg-[#F8F5F2] p-6 transition-all duration-300 hover:border-black/15 hover:shadow-md md:p-8 group"
                            >
                                {/* Metric */}
                                <div className="flex items-end justify-between">
                                    <div>
                                        <p className="text-3xl md:text-4xl font-semibold text-black tracking-tight">
                                            {signal.metric}
                                        </p>
                                        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#1E3A3A] mt-1">
                                            {signal.metricLabel}
                                        </p>
                                    </div>
                                    <div className="w-10 h-10 flex items-center justify-center bg-[#F5F1ED] rounded-xl border border-black/5 group-hover:scale-110 transition-transform">
                                        <Icon className="w-5 h-5 text-[#1E3A3A]" />
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px w-full bg-black/5" />

                                {/* Text */}
                                <div>
                                    <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-2">
                                        {signal.title}
                                    </h3>
                                    <p className="text-sm text-black/68 leading-relaxed">
                                        {signal.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TractionSignal;
