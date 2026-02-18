"use client";

import React from "react";
import { Award, Globe, Building2, CheckCircle2 } from "lucide-react";

const tractionSignals = [
    {
        icon: Award,
        title: "Startup Showcase",
        description: "Official Selection for Web Summit Qatar 2026 Startup Showcase.",
    },
    {
        icon: Globe,
        title: "Global Presence",
        description: "Headquartered in London, UK with operations expanding to the US and GCC.",
    },
    {
        icon: Building2,
        title: "Enterprise Ready",
        description: "Trusted by institutional revenue teams to govern autonomous execution at scale.",
    },
    {
        icon: CheckCircle2,
        title: "Category Leader",
        description: "Defining the Sovereign Revenue Execution category.",
    },
];

const TractionSignal = () => {
    return (
        <section className="py-12 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tractionSignals.map((signal, index) => {
                        const Icon = signal.icon;
                        return (
                            <div key={index} className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-[#F5F1ED]/50 border border-black/5 hover:border-black/10 transition-colors group">
                                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm border border-black/5 group-hover:scale-110 transition-transform">
                                    <Icon className="w-6 h-6 text-[#1E3A3A]" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-2">
                                        {signal.title}
                                    </h3>
                                    <p className="text-sm text-black/60 leading-relaxed">
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
