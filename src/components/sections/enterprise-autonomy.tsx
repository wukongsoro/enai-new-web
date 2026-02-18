"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const EnterpriseAutonomy = () => {
    return (
        <section className="bg-white py-24 md:py-32 border-b border-black/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <div className="flex flex-col gap-8">
                            <div className="space-y-2">
                                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/40 block">
                                    Software
                                </span>
                                <h2 className="text-h2 text-black max-w-xl">
                                    Enterprise Autonomy
                                </h2>
                            </div>

                            <div className="space-y-6">
                                <p className="text-xl md:text-2xl font-medium text-black/80 leading-snug">
                                    Go beyond chat. Turn AI in your applications into agents and automations.
                                </p>
                                <p className="text-body-lg text-black/60 max-w-lg leading-relaxed">
                                    Solving complex problems across all industries in days, not years. We provide the foundational infrastructure for governed autonomous execution.
                                </p>
                            </div>

                            <div className="pt-4">
                                <Link
                                    href="https://calendly.com/enai-ai2024/30min"
                                    className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-sm font-semibold rounded-lg hover:bg-black/90 transition-all duration-300 group"
                                >
                                    Get Started
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="relative mt-12 lg:mt-0">
                        <div className="aspect-[4/3] bg-[#F5F1ED] rounded-3xl overflow-hidden border border-black/5 flex items-center justify-center p-12">
                            <div className="w-full h-full relative opacity-40 grayscale flex flex-col justify-center items-center text-center">
                                <div className="text-[120px] font-display text-black/10 absolute -top-10 -left-10 select-none">EA</div>
                                <div className="space-y-4 relative z-10">
                                    <div className="h-px w-24 bg-black/20 mx-auto"></div>
                                    <p className="text-xs tracking-widest uppercase font-bold text-black/60">
                                        Architectural Control Layer
                                    </p>
                                    <div className="h-px w-24 bg-black/20 mx-auto"></div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white border border-black/5 shadow-xl rounded-2xl p-6 max-w-[240px] hidden md:block">
                            <p className="text-xs font-bold uppercase tracking-wider text-black/40 mb-2">Institutional Standard</p>
                            <p className="text-sm text-black/80 leading-relaxed italic font-display">
                                "Sovereign revenue certainty through deterministic agentic systems."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnterpriseAutonomy;
