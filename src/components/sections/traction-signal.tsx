"use client";

import React from "react";
import { Award, Globe, Building2, CheckCircle2 } from "lucide-react";

const tractionSignals = [
    {
        icon: Award,
        title: "Startup Showcase",
        description: "Official Selection for Web Summit Qatar 2026 Startup Showcase.",
        metric: "Top 10",
        metricLabel: "Agentic AI",
    },
    {
        icon: Globe,
        title: "Research Automation",
        description: "Account research, enrichment, and qualification compressed into governed workflows.",
        metric: "40-60%",
        metricLabel: "Less Research Time",
    },
    {
        icon: Building2,
        title: "Meeting Conversion",
        description: "Industry-trained playbooks improve fit, timing, and stakeholder relevance.",
        metric: "20-35%",
        metricLabel: "Conversion Lift",
    },
    {
        icon: CheckCircle2,
        title: "Stack Consolidation",
        description: "Replace fragmented research, orchestration, and engagement workflows.",
        metric: "$300K+",
        metricLabel: "Annual Savings",
    },
];

const TractionSignal = () => {
    return (
        <section className="py-16 md:py-20 bg-[#F5F1ED]/30 relative overflow-hidden border-y border-black/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {tractionSignals.map((signal, index) => {
                        const Icon = signal.icon;
                        return (
                            <div
                                key={index}
                                className="relative flex flex-col gap-5 p-6 md:p-8 rounded-2xl bg-white border border-black/5 hover:border-black/10 hover:shadow-md transition-all duration-300 group"
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
                                    <p className="text-sm text-black/50 leading-relaxed">
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
