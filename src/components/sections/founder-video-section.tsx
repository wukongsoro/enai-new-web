"use client";

import React from "react";

const FounderVideoSection = () => {
    return (
        <section className="bg-white py-24 md:py-32 border-b border-black/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* Left: Text Content */}
                    <div className="flex flex-col gap-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1E3A3A]/5 border border-[#1E3A3A]/10">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A3A] animate-pulse"></span>
                                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#1E3A3A]">
                                    Top 10 Agentic AI London 2026
                                </span>
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-black leading-[1.1]">
                                Hear from our<br />Founders
                            </h2>
                        </div>
                        
                        <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                            Nikhil Nehra and Zeeshan Idrees, Co-Founders of ENAI, took the stage at Doha Web Summit 2026, one of ten Agentic AI companies selected from London, to show how sales and marketing teams can leverage ENAI to build demand generation across the entire buyer journey.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 pt-4">
                            {/* Founder 1 */}
                            <a 
                                href="https://www.linkedin.com/in/nikhil-nehra-57716a23b"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-[#F5F1ED]/50 p-4 rounded-2xl border border-black/5 flex-1 hover:border-black/10 hover:bg-[#F5F1ED] transition-all group cursor-pointer"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-black/5 flex items-center justify-center font-bold text-black tracking-widest text-sm shrink-0 group-hover:scale-105 transition-transform">
                                    NH
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <p className="font-semibold text-black text-sm">Nikhil Nehra</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-black/20 group-hover:text-[#0A66C2] transition-colors"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                    </div>
                                    <p className="text-[11px] font-bold text-black/40 uppercase tracking-wider mt-0.5">Founder & CEO, ENAI</p>
                                </div>
                            </a>
                            
                            {/* Founder 2 */}
                            <a 
                                href="https://linkedin.com/in/zidrees"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-[#F5F1ED]/50 p-4 rounded-2xl border border-black/5 flex-1 hover:border-black/10 hover:bg-[#F5F1ED] transition-all group cursor-pointer"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-black/5 flex items-center justify-center font-bold text-black tracking-widest text-sm shrink-0 group-hover:scale-105 transition-transform">
                                    ZI
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <p className="font-semibold text-black text-sm">Zeeshan Idrees</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-black/20 group-hover:text-[#0A66C2] transition-colors"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                    </div>
                                    <p className="text-[11px] font-bold text-black/40 uppercase tracking-wider mt-0.5">Co-Founder, ENAI</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right: Video Container */}
                    <div className="relative w-full">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-[#1E3A3A]/5 to-transparent rounded-[2rem] blur-2xl"></div>
                        
                        <div className="relative rounded-3xl overflow-hidden border border-black/10 shadow-2xl bg-[#F5F1ED] aspect-video">
                            <video 
                                src="https://www.omnitech.capital/nikhil-zeeshan-doha-summit-2026.mp4" 
                                controls
                                preload="metadata"
                                className="w-full h-full object-cover"
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        
                        <div className="mt-6 px-2 text-center sm:text-left">
                            <p className="text-[11px] font-bold text-black/40 uppercase tracking-widest">
                                Nikhil Nehra & Zeeshan Idrees — Doha Web Summit 2026  ·  Demand generation across the full buyer journey
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FounderVideoSection;
