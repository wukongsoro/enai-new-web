import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail } from 'lucide-react';

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
                width={54}
                height={49}
                className="h-[49px] w-[54px] object-contain brightness-0 invert"
                style={{ width: "54px", height: "49px" }}
              />
              <span className="text-white font-medium text-xl tracking-tight">ENAI</span>
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 h-full min-w-[230px]">
            <h3 className="text-caption uppercase tracking-wider mb-4 text-white/50">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white hover:text-white/70 transition-colors text-body-sm">Home</Link></li>
              <li><Link href="/demo-library" className="text-white hover:text-white/70 transition-colors text-body-sm">Demo Library</Link></li>
              <li><Link href="/industries" className="text-white hover:text-white/70 transition-colors text-body-sm">Industries</Link></li>
              <li><Link href="/integrations" className="text-white hover:text-white/70 transition-colors text-body-sm">Integrations</Link></li>
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
              <h3 className="text-caption uppercase tracking-wider mb-4 text-white/50">Explore</h3>
              <ul className="space-y-3">
                <li><Link href="/demo-library" className="text-white hover:text-white/70 transition-colors text-body-sm">Industry Runs</Link></li>
                <li><Link href="/blog/founder-enterprise-autonomous-governance" className="text-white hover:text-white/70 transition-colors text-body-sm">Founder Letter</Link></li>
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
                  href="mailto:Nikhil@enai.ai"
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
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://x.com/enai_ai" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/70 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1200 1227" fill="currentColor"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6902H306.615L611.412 515.685L658.88 583.579L1055.08 1150.31H892.476L569.165 687.854V687.828Z" /></svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-end items-start h-full pt-4 w-full sm:w-auto">
            <p className="text-white/40 text-caption mb-2">© 2026 ENAI. All rights reserved.</p>
            <div className="flex items-center gap-6 mb-4">
              <Link href="/terms-of-service" className="text-white/40 hover:text-white/70 text-caption transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="text-white/40 hover:text-white/70 text-caption transition-colors">
                Privacy Policy
              </Link>
            </div>
            <Link
              href="/security"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-[11px] font-medium text-white/55 transition-colors hover:border-white/25 hover:text-white"
            >
              Security and assurance programme
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
