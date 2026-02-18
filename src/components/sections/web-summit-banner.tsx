"use client";

import React from "react";
import Link from "next/link";

const WebSummitBanner = () => {
    return (
        <section className="bg-[#1E3A3A] text-white py-12 md:py-16 px-6 sm:px-8">
            <div className="bg-[#E8DDD4] text-black rounded-[32px] max-w-[1248px] mx-auto py-10 px-6 sm:p-10 md:p-12 lg:px-16">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Left: Badge + Logo */}
                    <div className="flex flex-col items-center lg:items-start gap-5">
                        {/* Selection badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5F1ED] rounded-full">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                            </span>
                            <span className="text-xs font-semibold uppercase tracking-wider text-black">
                                Selected for Startup Showcase
                            </span>
                        </div>

                        {/* Official Logo */}
                        <a
                            href="https://qatar.websummit.com/appearances/qat26/0c1780f4-3d59-4965-b7cf-501abf09b841/enai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/web-summit-qatar-logo.png"
                                alt="Web Summit Qatar - Doha, February 1-4, 2026"
                                className="h-12 sm:h-14 md:h-16 w-auto opacity-95 group-hover:opacity-100 transition-opacity"
                            />
                        </a>
                    </div>

                    {/* Divider */}
                    <div className="hidden lg:block w-px h-24 bg-black/10" />
                    <div className="lg:hidden w-32 h-px bg-black/10" />

                    {/* Right: Details */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-xl md:text-2xl font-semibold text-black mb-3">
                            Meet us in Doha this February
                        </h2>
                        <p className="text-black/60 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
                            Enai has been selected for the <strong className="text-black">Startup Showcase</strong> at Web Summit Qatar 2026. This is
                            the Middle East&apos;s premier tech conference with 30,000+ founders, investors, and global media.
                        </p>

                        {/* Event details */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 mb-6">
                            <div className="flex items-center gap-2 text-sm text-black/70">
                                <svg className="w-4 h-4 text-black/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>February 1-4, 2026</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-black/70">
                                <svg className="w-4 h-4 text-black/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Doha, Qatar</span>
                            </div>
                        </div>

                        {/* CTA Group */}
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <Link
                                href="https://calendly.com/enai-ai2024/30min"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black text-white text-sm font-medium py-3 px-6 rounded-full transition-transform duration-300 hover:scale-105"
                            >
                                <span>Schedule a meeting in Doha</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>

                            <a
                                href="https://qatar.websummit.com/appearances/qat26/0c1780f4-3d59-4965-b7cf-501abf09b841/enai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-black/60 hover:text-black transition-colors underline decoration-black/20 underline-offset-4"
                            >
                                View ENAI on Web Summit
                            </a>

                            <Link
                                href="/events/qatar-summit-2026"
                                className="text-sm font-medium text-black/60 hover:text-black transition-colors flex items-center gap-1 group/link"
                            >
                                Read Announcement
                                <svg className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebSummitBanner;
