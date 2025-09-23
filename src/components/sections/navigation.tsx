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

  // Apple Liquid Glass styling - authentic and minimal with better visibility
  const navbarClass = hasScrolled
    ? "bg-white/85 backdrop-blur-2xl backdrop-saturate-180 border-b border-white/40 shadow-sm"
    : "bg-white/20 backdrop-blur-2xl backdrop-saturate-180 border-b border-white/20";

  const linkColorClass = hasScrolled
    ? "text-gray-900 hover:text-orange-600 transition-colors duration-200"
    : "text-gray-800 hover:text-orange-600 transition-colors duration-200";

  const buttonClass = hasScrolled
    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-sm hover:shadow-orange-500/25 transition-all duration-200"
    : "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-sm hover:shadow-orange-500/25 transition-all duration-200";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans">
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
      <div className={`w-full transition-all duration-500 ease-out liquid-glass-navbar ${navbarClass}`}>
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
              href="/demo"
              className={`hidden lg:block text-sm font-bold rounded-full px-8 py-3 transition-all duration-300 hover:scale-105 transform ${buttonClass}`}
            >
              Get Demo
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden transition-colors duration-300 ${linkColorClass}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className={`lg:hidden fixed top-[84px] left-0 right-0 z-40 transition-all duration-300 ease-out liquid-glass-navbar ${hasScrolled ? 'bg-white/90 backdrop-blur-2xl backdrop-saturate-180 border-b border-white/40' : 'bg-white/30 backdrop-blur-2xl backdrop-saturate-180 border-b border-white/25'}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-3 overflow-y-auto max-h-[calc(100vh-84px)]">
            {navLinks.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-xl py-4 px-6 text-base font-bold transition-all duration-200 text-center hover:scale-105 ${hasScrolled ? 'text-gray-900 hover:bg-white/50' : 'text-gray-800 hover:bg-orange-50'}`}
              >
                {link.text}
              </Link>
            ))}
            <div className={`pt-6 border-t mt-6 ${hasScrolled ? 'border-gray-200' : 'border-white/20'}`}>
              <Link
                href="/demo"
                onClick={() => setIsMenuOpen(false)}
                className={`block text-center w-full text-sm font-bold rounded-xl py-3 px-6 transition-all duration-200 hover:scale-105 ${hasScrolled ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700' : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700'}`}
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