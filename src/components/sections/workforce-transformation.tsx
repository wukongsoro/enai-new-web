"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";

const features = [
    {
        id: "tam",
        title: "Your TAM builds itself",
        description: "ENAI agents continuously discover, enrich, and score accounts so your TAM stays fresh.",
    },
    {
        id: "runs",
        title: "Your system runs itself",
        description: "Outreach, data capture, enrichment, and pipeline updates happen automatically.",
    },
    {
        id: "copilot",
        title: "Revenue Copilot",
        description: "ENAI proactively coaches you on what you should be doing to close more revenue.",
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
                    
                    {/* Left: Video */}
                    <div className="w-full lg:w-[45%] lg:shrink-0">
                        <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-[#F5F1ED] border border-black/10 shadow-2xl">
                            <video 
                                loop 
                                muted 
                                playsInline 
                                autoPlay 
                                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500" 
                                poster="https://cdn.monaco.com/landing/public/pages/home/features/3-1-poster.jpg"
                            >
                                <source src="https://cdn.monaco.com/landing/public/pages/home/features/3-1.webm" type="video/webm" />
                                <source src="https://cdn.monaco.com/landing/public/pages/home/features/3-1.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>

                    {/* Right: Accordion Content */}
                    <div className="flex flex-col justify-center mt-8 md:mt-4 lg:mt-0 w-full lg:flex-1">
                        <div className="flex flex-col gap-10 md:gap-10 lg:gap-16 items-start w-full">
                            
                            {/* Header */}
                            <div className="flex flex-col gap-6 md:gap-4 lg:gap-6 items-start w-full">
                                <div className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-black/40 font-bold px-4 py-2 border border-black/10 rounded-full bg-white/40">
                                    Autonomous Execution
                                </div>
                                <h2 className="text-[36px] md:text-[48px] heading-strong text-black leading-tight text-balance">
                                    Agents working for you
                                </h2>
                                <p className="text-lg md:text-xl text-black/60 max-w-lg leading-relaxed">
                                    ENAI agents automate demand gen, pipeline management, and follow-ups so you can spend your time with customers.
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