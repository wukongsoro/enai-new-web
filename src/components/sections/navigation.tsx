"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

// Content for the top scrolling banner
const banners = [
  {
    text: "ENAI's AI Agents Generate 50% More Qualified Leads",
    href: "/blog/enai-ai-agents-generate-50-more-qualified-leads",
  },
  {
    text: "Scale Your Sales Team with ENAI's AI BDR Agents",
    href: "/blog/ai-bdr-playbook-scale-outbound-without-hiring",
  },
  {
    text: "ENAI Cuts Prospecting Time by 70% with AI Automation",
    href: "/blog/enai-cuts-prospecting-time-70-ai-automation",
  },
];

// Navigation links for both desktop and mobile
const navLinks = [
  { text: "Pricing", href: "/pricing" },
  { text: "Company", href: "/about-us" },
  { text: "Blog", href: "/blog" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Effect for cycling through banner messages
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(timer);
  }, []);

  // Effect to detect scroll position and change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Apple Liquid Glass styling - true glassmorphism with proper blur
  const glassTint = hasScrolled
    ? "bg-white/36 dark:bg-neutral-900/42"
    : "bg-white/22 dark:bg-neutral-900/34";

  const linkColorClass = hasScrolled
    ? "text-gray-900 hover:text-orange-600 transition-colors duration-200"
    : "text-gray-900 hover:text-orange-600 transition-colors duration-200"; // keep dark text for contrast over brightened glass

  const buttonClass = hasScrolled
    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-sm hover:shadow-orange-500/25 transition-all duration-200"
    : "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-sm hover:shadow-orange-500/25 transition-all duration-200";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans" style={{ transform: 'translateZ(0)' }}>
      {/* Top Banner Section */}
      <div className="bg-black text-white">
        <div className="relative h-14 overflow-hidden">
          {banners.map((banner, index) => (
            <Link
              key={index}
              href={banner.href}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                currentBanner === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="text-sm text-center px-4">{banner.text}</span>
              <ArrowUpRight className="w-4 h-4 ml-1 flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>

      {/* Apple Liquid Glass Navigation Bar */}
      <div
        className={[
          "w-full transition-all duration-500 ease-out header-gloss no-blur-fallback",
          // glass + tint
          glassTint,
          // the blur (works in Safari/Chromium) + brightness/saturate/contrast to neutralize orange
          "backdrop-blur-xl",
          "backdrop-brightness-110 backdrop-saturate-110 backdrop-contrast-110",
          "[-webkit-backdrop-filter:brightness(1.1)_saturate(1.1)_contrast(1.1)_blur(20px)]",
          "supports-[backdrop-filter]:saturate-180",
          // thin border like iOS
          "border-b border-white/20 dark:border-white/10",
          // prevent blending issues with siblings
          "[isolation:isolate]",
        ].join(" ")}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-[84px]">
          {/* Left section: Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex-shrink-0" onClick={() => isMenuOpen && setIsMenuOpen(false)}>
              <Image
                src="/enai-logo.png"
                alt="ENAI logo"
                width={55}
                height={24}
                className="transition-all duration-300 hover:scale-105"
                priority
              />
            </Link>
          </div>
          
          {/* Center section: Desktop navigation links */}
          <div className="hidden lg:flex items-center justify-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className={`text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105 relative group ${linkColorClass}`}
              >
                {link.text}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right section: CTA Button & Mobile Menu Toggle */}
          <div className="flex-1 flex justify-end items-center">
            <Link
              href="https://calendly.com/enai-ai2024/30min?month=2025-09"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden lg:block text-sm font-bold rounded-full px-8 py-3 transition-all duration-300 hover:scale-105 transform ${buttonClass}`}
            >
              Get Demo
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden transition-colors duration-300 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center mobile-menu-transition ${linkColorClass}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div
          className={[
            "lg:hidden fixed top-[140px] left-0 right-0 bottom-0 z-[60] transition-all duration-300 ease-out mobile-menu-transition",
            "bg-white/20 dark:bg-neutral-900/40",
            "backdrop-blur-xl",
            "[-webkit-backdrop-filter:saturate(180%)_blur(20px)]",
            "supports-[backdrop-filter]:saturate-180",
            "border-b border-white/20 dark:border-white/10",
            "[isolation:isolate]",
          ].join(" ")}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 space-y-3 overflow-y-auto h-full">
            {/* Close Button */}
            <div className="flex justify-end pb-2">
              <button
                onClick={() => setIsMenuOpen(false)}
                className={`p-2 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-200 ${linkColorClass}`}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-xl py-4 px-6 text-base font-bold transition-all duration-200 hover:scale-105 min-h-[48px] flex items-center justify-center mobile-menu-transition ${hasScrolled ? 'text-gray-900 hover:bg-white/50' : 'text-gray-800 hover:bg-orange-50'}`}
              >
                {link.text}
              </Link>
            ))}
            <div className={`pt-6 border-t mt-6 ${hasScrolled ? 'border-gray-200' : 'border-white/20'}`}>
              <Link
                href="https://calendly.com/enai-ai2024/30min?month=2025-09"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className={`block text-center w-full text-sm font-bold rounded-xl py-3 px-6 transition-all duration-200 hover:scale-105 mobile-menu-transition ${hasScrolled ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700' : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700'}`}
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}