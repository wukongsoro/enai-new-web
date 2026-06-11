"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";

const features = [
    {
        id: "tam",
        title: "Founder-led teams",
        description: "Open new markets without hiring a full SDR team or stitching together a fragile tool stack.",
    },
    {
        id: "runs",
        title: "Revenue leaders",
        description: "Keep reps focused on qualified conversations while ENAI handles research, follow-up, and booking.",
    },
    {
        id: "copilot",
        title: "Marketing teams",
        description: "Turn webinars, inbound interest, and campaign engagement into sales-ready meetings.",
    },
];

const AUTOPLAY_DURATION = 10000; // 10 seconds

export default function WorkforceTransformation() {
    const [activeIndex, setActiveIndex] = useState(0);
    const progressRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);
    const animationRef = useRef<number | null>(null);
    const startTimeRef = useRef<number | null>(null);

    // Autoplay logic
    useEffect(() => {
        startTimeRef.current = performance.now();
        setProgress(0);

        const animate = (time: number) => {
            if (!startTimeRef.current) startTimeRef.current = time;
            const elapsed = time - startTimeRef.current;
            const percentage = Math.min((elapsed / AUTOPLAY_DURATION) * 100, 100);
            
            setProgress(percentage);

            if (elapsed < AUTOPLAY_DURATION) {
                animationRef.current = requestAnimationFrame(animate);
            } else {
                // Next slide
                setActiveIndex((prev) => (prev + 1) % features.length);
            }
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [activeIndex]);

    const handleManualClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <section className="bg-[#E8DDD4] py-24 md:py-32 overflow-hidden border-t border-black/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                
                <div className="w-full flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">
                    
                    {/* Left: Product workflow */}
                    <div className="w-full lg:w-[45%] lg:shrink-0">
                        <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-[#F5F1ED] border border-black/10 shadow-2xl p-6 md:p-8">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(30,58,58,0.16),transparent_36%),radial-gradient(circle_at_80%_85%,rgba(255,89,0,0.16),transparent_34%)]" />
                            <div className="relative flex h-full flex-col justify-between rounded-2xl border border-black/10 bg-white/80 p-5 shadow-sm backdrop-blur">
                                <div>
                                    <div className="flex items-center justify-between">
                                        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#1E3A3A]/60">
                                            Live revenue workflow
                                        </p>
                                        <span className="rounded-full bg-[#1E3A3A] px-3 py-1 text-xs font-semibold text-white">
                                            Running
                                        </span>
                                    </div>
                                    <h3 className="mt-5 text-2xl md:text-3xl font-semibold leading-tight text-black">
                                        Webinar attendee became a qualified meeting
                                    </h3>
                                    <p className="mt-3 text-sm text-black/60">
                                        ENAI spotted the signal, found the buying committee, wrote the follow-up, and booked the handoff.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    {[
                                        ["Signal found", "Visited pricing after webinar"],
                                        ["Contact mapped", "VP Sales + RevOps lead"],
                                        ["Reply qualified", "Budget and timing confirmed"],
                                        ["Meeting booked", "Tuesday 10:30 with context"],
                                    ].map(([label, detail], index) => (
                                        <div key={label} className="flex items-center gap-3 rounded-xl border border-black/10 bg-white p-3">
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1E3A3A]/10 text-sm font-bold text-[#1E3A3A]">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-black">{label}</p>
                                                <p className="text-xs text-black/50">{detail}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Accordion Content */}
                    <div className="flex flex-col justify-center mt-8 md:mt-4 lg:mt-0 w-full lg:flex-1">
                        <div className="flex flex-col gap-10 md:gap-10 lg:gap-16 items-start w-full">
                            
                            {/* Header */}
                            <div className="flex flex-col gap-6 md:gap-4 lg:gap-6 items-start w-full">
                                <div className="inline-flex items-center font-mono text-xs tracking-[0.2em] uppercase text-black/40 font-bold px-4 py-2 border border-black/10 rounded-full bg-white/40">
                                    Built around your team
                                </div>
                                <h2 className="text-[36px] md:text-[48px] heading-strong text-black leading-tight text-balance">
                                    Built for the revenue work between signal and meeting
                                </h2>
                                <p className="text-lg md:text-xl text-black/60 max-w-lg leading-relaxed">
                                    ENAI handles the repetitive work across research, follow-up, qualification, and handoff, with human approval where judgment matters.
                                </p>
                            </div>

                            {/* Accordion Items */}
                            <div className="flex flex-col gap-4 md:gap-6 items-start w-full max-w-lg">
                                {features.map((feature, index) => {
                                    const isActive = index === activeIndex;
                                    
                                    return (
                                        <Button 
                                            key={feature.id}
                                            variant="ghost"
                                            onClick={() => handleManualClick(index)}
                                            className="flex relative w-full h-auto text-left cursor-pointer group p-0 justify-start hover:bg-transparent focus:outline-none"
                                        >
                                            {/* Progress Bar Container */}
                                            <div className="relative w-1.5 md:w-2 mr-6 shrink-0 self-stretch py-1">
                                                <div className="relative w-full h-full bg-black/10 rounded-full overflow-hidden">
                                                    {isActive && (
                                                        <div 
                                                            className="absolute top-0 left-0 w-full bg-[#1E3A3A] rounded-full"
                                                            style={{ 
                                                                height: `${progress}%`,
                                                                transition: 'height 0.1s linear'
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                            </div>

                                            {/* Text Content */}
                                            <div className="flex flex-col items-start flex-1 pb-4">
                                                <p className={`text-xl md:text-2xl font-semibold transition-all duration-300 ${
                                                    isActive ? "text-black" : "text-black/40 group-hover:text-black/60"
                                                }`}>
                                                    {feature.title}
                                                </p>
                                                
                                                <div 
                                                    className={`overflow-hidden transition-all duration-500 ease-out ${
                                                        isActive ? "max-h-[200px] opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
                                                    }`}
                                                >
                                                    <p className="text-base text-black/60 leading-relaxed text-balance pr-4">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </Button>
                                    );
                                })}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
