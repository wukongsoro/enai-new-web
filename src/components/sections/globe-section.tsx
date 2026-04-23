import React from 'react';
import { Globe } from '@/components/ui/cobe-globe';

const markers = [
  { id: "london", location: [51.5074, -0.1278] as [number, number], label: "London (HQ)" },
  { id: "nyc", location: [40.7128, -74.006] as [number, number], label: "New York" },
  { id: "sf", location: [37.7595, -122.4367] as [number, number], label: "San Francisco" },
  { id: "doha", location: [25.276987, 51.520008] as [number, number], label: "Doha" },
  { id: "singapore", location: [1.3521, 103.8198] as [number, number], label: "Singapore" },
  { id: "tokyo", location: [35.6762, 139.6503] as [number, number], label: "Tokyo" },
  { id: "sydney", location: [-33.8688, 151.2093] as [number, number], label: "Sydney" },
];

const arcs = [
  {
    id: "london-nyc",
    from: [51.5074, -0.1278] as [number, number],
    to: [40.7128, -74.006] as [number, number],
  },
  {
    id: "london-doha",
    from: [51.5074, -0.1278] as [number, number],
    to: [25.276987, 51.520008] as [number, number],
  },
  {
    id: "london-sf",
    from: [51.5074, -0.1278] as [number, number],
    to: [37.7595, -122.4367] as [number, number],
  },
  {
    id: "doha-singapore",
    from: [25.276987, 51.520008] as [number, number],
    to: [1.3521, 103.8198] as [number, number],
  },
];

const GlobeSection = () => {
  return (
    <section className="bg-[#FBF9F6] py-24 md:py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left: Text Content */}
          <div className="w-full">
            <div className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-[#1E3A3A]/70 font-bold px-4 py-2 mb-6 border border-[#1E3A3A]/10 rounded-full bg-white/50">
              <span className="w-2 h-2 rounded-full bg-[#1E3A3A] mr-2" />
              Global Expansion
            </div>
            
            <h2 className="text-[40px] md:text-[56px] heading-strong text-[#1E3A3A] leading-[1.1] mb-6">
              Scale revenue operations <br />
              with absolute clarity.
            </h2>
            
            <p className="text-lg md:text-xl text-black/60 leading-relaxed mb-8 max-w-lg">
              ENAI provides companies with the intelligence and autonomous infrastructure needed to expand into new markets confidently. Understand cross-border signals, execute localized outreach, and govern global revenue pipelines 24/7.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-black/10">
              <div>
                <div className="text-3xl font-light tracking-tight text-[#1E3A3A] mb-1">12+</div>
                <div className="text-sm font-medium text-black/50 tracking-wider uppercase">Global Markets</div>
              </div>
              <div>
                <div className="text-3xl font-light tracking-tight text-[#1E3A3A] mb-1">24/7</div>
                <div className="text-sm font-medium text-black/50 tracking-wider uppercase">Autonomous Ops</div>
              </div>
            </div>
          </div>

          {/* Right: Globe */}
          <div className="w-full flex items-center justify-center">
            <div className="relative w-[340px] h-[340px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
              <Globe
                markers={markers}
                arcs={arcs}
                markerColor={[1, 0.4, 0.1]} // Orange markers
                baseColor={[0.96, 0.95, 0.93]} // Light beige-ish white globe
                arcColor={[1, 0.4, 0.1]} // Orange arcs
                glowColor={[0.9, 0.88, 0.85]} // Soft warm glow
                dark={0}
                mapBrightness={2}
                markerSize={0.06}
                speed={0.003}
                theta={0.25}
                diffuse={1.2}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobeSection;
