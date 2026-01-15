import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312%2F672a129d29befb4c919a7977_sand-poster-00001.jpg"
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312%2F672a129d29befb4c919a7977_sand-transcode.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312%2F672a129d29befb4c919a7977_sand-transcode.webm"
            type="video/webm"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="flex flex-wrap items-start justify-center lg:justify-between gap-x-6 gap-y-8">

          <div className="flex-shrink-0 pt-3">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/enai-logo.png"
                alt="ENAI Logo"
                width={70}
                height={30}
                className="object-contain brightness-0 invert"
              />
              <span className="text-white font-medium text-xl tracking-tight">ENAI</span>
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 h-full">
            <h3 className="text-caption uppercase tracking-wider mb-4 text-white/50">Autonomous Revenue</h3>
            <ul className="space-y-3">
              <li><Link href="/agents/prospectorai" className="text-white hover:text-white/70 transition-colors text-body-sm">ProspectorAI</Link></li>
              <li><Link href="/agents/outreachai" className="text-white hover:text-white/70 transition-colors text-body-sm">OutreachAI</Link></li>
              <li><Link href="/agents/qualifierai" className="text-white hover:text-white/70 transition-colors text-body-sm">QualifierAI</Link></li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 h-full min-w-[230px]">
            <h3 className="text-caption uppercase tracking-wider mb-4 text-white/50">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white hover:text-white/70 transition-colors text-body-sm">Home</Link></li>
              <li><Link href="/pricing" className="text-white hover:text-white/70 transition-colors text-body-sm">Pricing</Link></li>
              <li><Link href="/blog" className="text-white hover:text-white/70 transition-colors text-body-sm">Blog</Link></li>
              <li><Link href="/cases" className="text-white hover:text-white/70 transition-colors text-body-sm">Case Studies</Link></li>
              <li><Link href="/integrations" className="text-white hover:text-white/70 transition-colors text-body-sm">Integrations</Link></li>
              <li><Link href="/solutions/shipping" className="text-white hover:text-white/70 transition-colors text-body-sm">Shipping & Logistics</Link></li>
              <li><Link href="/security" className="text-white hover:text-white/70 transition-colors text-body-sm">Security</Link></li>
              <li>
                <a
                  href="https://enai.statuspage.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/70 transition-colors text-body-sm"
                >
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6 w-full sm:w-auto max-w-xs">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-body-sm mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white/70" />
                <span className="text-white">London</span>
              </h3>
              <div className="text-white/50 text-body-sm space-y-1">
                <p>128 City Road</p>
                <p>London, EC1V 2NX</p>
                <p>United Kingdom</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-caption uppercase tracking-wider mb-4 text-white/50">Web Summit Qatar</h3>
              <ul className="space-y-3">
                <li><Link href="/events/qatar-summit-2026" className="text-white hover:text-white/70 transition-colors text-body-sm">Investor Brief</Link></li>
                <li><Link href="/events/qatar-summit-2026/customers" className="text-white hover:text-white/70 transition-colors text-body-sm">Enterprise Demo</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6 min-w-[200px]">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-caption uppercase tracking-wider mb-4 text-white/50">Contact</h3>
              <div className="space-y-3">
                <a
                  href="https://calendly.com/enai-ai2024/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-white/70 transition-colors text-body-sm"
                  title="Schedule a meeting with Enai AI"
                >
                  <Mail className="w-4 h-4" />
                  Schedule a Call
                </a>

                <a
                  href="mailto:enai.ai2024@gmail.com"
                  className="flex items-center gap-2 text-white hover:text-white/70 transition-colors text-body-sm"
                  title="Send us an email"
                >
                  <Mail className="w-4 h-4" />
                  Send an Email
                </a>

              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex justify-center items-center gap-6">
              <a href="https://linkedin.com/company/enai-ai" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/70 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/enai_ai" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/70 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1200 1227" fill="currentColor"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6902H306.615L611.412 515.685L658.88 583.579L1055.08 1150.31H892.476L569.165 687.854V687.828Z" /></svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-end items-start h-full pt-4 w-full sm:w-auto">
            <p className="text-white/40 text-caption mb-2">© 2026 ENAI Inc. All rights reserved.</p>
            <div className="flex items-center gap-6 mb-4">
              <Link href="/terms-of-service" className="text-white/40 hover:text-white/70 text-caption transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="text-white/40 hover:text-white/70 text-caption transition-colors">
                Privacy Policy
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-1">
                  <div title="SOC 2 Type II Underway" className="h-12 w-12 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-md border border-white/10">
                    <Image
                      src="/soc2-logo.svg"
                      alt="SOC 2 Type II Underway"
                      width={40}
                      height={40}
                      className="filter invert brightness-0"
                    />
                  </div>
                  <Link href="/compliance/soc2" className="text-white/40 hover:text-white/70 text-[10px] transition-colors">
                    SOC 2 Type II
                  </Link>
                  <span className="text-white/30 text-[8px]">Underway</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div title="CCPA Compliant Underway" className="h-12 w-12 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-md border border-white/10">
                    <Image
                      src="/ccpa-logo.svg"
                      alt="California Consumer Privacy Act (CCPA) Opt-Out Icon"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <Link href="/compliance/ccpa" className="text-white/40 hover:text-white/70 text-[10px] transition-colors">
                    CCPA
                  </Link>
                  <span className="text-white/30 text-[8px]">Underway</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div title="ISO 27001 Certified" className="h-12 w-12 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-md border border-white/10">
                    <Image
                      src="/iso27001-logo.svg"
                      alt="ISO 27001 Certified"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <Link href="/compliance/iso27001" className="text-white/40 hover:text-white/70 text-[10px] transition-colors">
                    ISO 27001
                  </Link>
                  <span className="text-white/30 text-[8px]">Underway</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div title="GDPR Compliant" className="h-12 w-12 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-md border border-white/10">
                    <Image
                      src="/gdpr-logo.svg"
                      alt="GDPR Compliant"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <Link href="/compliance/gdpr" className="text-white/40 hover:text-white/70 text-[10px] transition-colors">
                    GDPR
                  </Link>
                  <span className="text-white/30 text-[8px]">Underway</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;