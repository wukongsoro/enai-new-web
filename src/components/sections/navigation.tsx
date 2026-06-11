"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const banners = [
  {
    text: "Read Founder Nikhil Nehra's Letter on Governed Autonomous Execution at Web Summit Qatar",
    href: "/blog/founder-enterprise-autonomous-governance",
  },
  {
    text: "🇶🇦 ENAI Selected for Web Summit Qatar 2026: 1 of 20 Worldwide",
    href: "https://calendly.com/enai-ai2024/30min",
  },
  {
    text: "Sovereign Revenue Execution: Full Audit Trail From Signal to Closed Deal",
    href: "/blog/enai-ai-agents-generate-50-more-qualified-leads",
  },
  {
    text: "Enterprise Revenue Teams Are Moving to Governed Autonomous Execution",
    href: "/blog/autonomous-revenue-playbook-scale-outbound-at-speed",
  },
  {
    text: "How Institutional Revenue Teams Achieve 70% Faster Pipeline Velocity",
    href: "/blog/enai-cuts-prospecting-time-70-ai-automation",
  },
];

const navLinks = [
  { text: "Platform", href: "/#platform" },
  { text: "Solutions", href: "/#use-cases" },
  { text: "Security", href: "/security" },
  { text: "Company", href: "/about-us" },
];

const resourceLinks = [
  { text: "Demo Library", href: "/demo-library" },
  { text: "Industries", href: "/industries" },
  { text: "Case Studies", href: "/case-studies" },
  { text: "Integrations", href: "/integrations" },
  { text: "Pricing", href: "/pricing" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(112);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const glassTint = hasScrolled
    ? "bg-white/80 dark:bg-neutral-900/80"
    : "bg-white/60 dark:bg-neutral-900/60";

  const linkColorClass = "text-gray-800 hover:text-[#1E3A3A] transition-colors duration-200";

  const buttonClass = "bg-[#1E3A3A] text-white hover:bg-[#16302F] shadow-sm transition-colors duration-200";

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 font-sans"
        style={{ transform: 'translateZ(0)' }}
      >
        {/* Mission Banner - Founder's Letter */}
        <div className="bg-black text-white border-b border-white/10">
          <Link
            href="/blog/founder-enterprise-autonomous-governance"
            className="flex items-center justify-center gap-3 min-h-[34px] sm:min-h-[40px] py-1.5 sm:py-2 px-4 hover:bg-white/5 transition-colors"
          >
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wide flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-300"></span>
              </span>
              <span className="hidden sm:inline">
                Founder Letter: Governed Autonomous Execution at Web Summit Qatar 2026
              </span>
              <span className="sm:hidden">
                Founder letter: ENAI at Doha 2026
              </span>
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
          </Link>
        </div>
        <div className="bg-black text-white hidden">
          <div className="relative h-12 overflow-hidden">
            {banners.map((banner, index) => (
              <Link
                key={index}
                href={banner.href}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${currentBanner === index ? "opacity-100" : "opacity-0"
                  }`}
              >
                <span className="text-[13px] tracking-wide text-center px-4">{banner.text}</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>

        <div
          className={[
            "w-full transition-all duration-500 ease-out header-gloss no-blur-fallback",
            glassTint,
            "backdrop-blur-xl",
            "backdrop-brightness-110 backdrop-saturate-110 backdrop-contrast-110",
            "[-webkit-backdrop-filter:brightness(1.1)_saturate(1.1)_contrast(1.1)_blur(20px)]",
            "supports-[backdrop-filter]:saturate-180",
            "border-b border-black/5 dark:border-white/10",
            "[isolation:isolate]",
          ].join(" ")}
        >
          <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-[72px]">
            <div className="flex-1 flex justify-start">
              <Link href="/" className="flex-shrink-0" onClick={() => isMenuOpen && setIsMenuOpen(false)}>
                <Image
                  src="/enai-logo.png"
                  alt="ENAI logo"
                  width={52}
                  height={22}
                  className="transition-opacity duration-300 hover:opacity-80"
                  priority
                />
              </Link>
            </div>

            <div className="hidden lg:flex items-center justify-center gap-9">
              {navLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  className={`text-[13px] font-semibold tracking-[0.02em] relative group ${linkColorClass}`}
                >
                  {link.text}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[#1E3A3A] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <div
                className="relative"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className={`text-[13px] font-semibold tracking-[0.02em] hover:bg-transparent flex items-center gap-1.5 px-0 ${linkColorClass}`}
                >
                  Resources
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </Button>
                {isResourcesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                    <div className="bg-white rounded-xl shadow-xl border border-black/5 py-2 min-w-[180px]">
                      {resourceLinks.map((link) => (
                        <Link
                          key={link.text}
                          href={link.href}
                          className="block px-4 py-2.5 text-[13px] font-medium text-gray-600 hover:bg-[#F5F1ED] hover:text-[#1E3A3A] transition-colors"
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1 flex justify-end items-center">
              <Button asChild size="sm" className={`hidden lg:flex text-[13px] font-semibold tracking-wide rounded-full px-7 ${buttonClass}`}>
                <Link
                  href="https://calendly.com/enai-ai2024/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request a demo
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden transition-colors duration-300 min-w-[44px] min-h-[44px] ${linkColorClass}`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {isMenuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/20 z-[45]"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            className={[
              "lg:hidden fixed left-0 right-0 bottom-0 z-[60] transition-all duration-300 ease-out",
              "bg-white/95 dark:bg-neutral-950/95",
              "backdrop-blur-xl",
              "backdrop-brightness-110 backdrop-saturate-110 backdrop-contrast-110",
              "[-webkit-backdrop-filter:brightness(1.1)_saturate(1.1)_contrast(1.1)_blur(20px)]",
              "supports-[backdrop-filter]:saturate-180",
              "border-b border-black/5 dark:border-white/10",
              "[isolation:isolate]",
            ].join(" ")}
            style={{ top: `${headerHeight}px` }}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 space-y-2 overflow-y-auto h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl py-3.5 px-6 text-[15px] font-semibold text-gray-800 hover:bg-[#F5F1ED] transition-all duration-200 min-h-[48px] flex items-center"
                >
                  {link.text}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-[11px] uppercase tracking-widest text-gray-400 px-6 mb-2 font-medium">Resources</p>
                {resourceLinks.map((link) => (
                  <Link
                    key={link.text}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl py-3 px-6 text-[15px] font-medium text-gray-600 hover:bg-[#F5F1ED] transition-colors"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
              <div className="pt-6 border-t border-gray-100 mt-4">
                <Button asChild size="lg" className="w-full text-[14px] font-semibold rounded-xl bg-[#1E3A3A] text-white hover:bg-[#16302F]">
                  <Link
                    href="https://calendly.com/enai-ai2024/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Request a demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
