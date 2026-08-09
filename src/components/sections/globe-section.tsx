import React from 'react';
import { Globe } from '@/components/ui/cobe-globe';

const markers = [
  { id: "london", location: [51.5074, -0.1278] as [number, number], label: "London (HQ)" },
  { id: "north-america", location: [41.8781, -87.6298] as [number, number], label: "North America" },
  { id: "europe", location: [50.1109, 8.6821] as [number, number], label: "Europe" },
  { id: "gcc", location: [25.276987, 51.520008] as [number, number], label: "GCC" },
  { id: "apac", location: [1.3521, 103.8198] as [number, number], label: "APAC" },
  { id: "australia", location: [-33.8688, 151.2093] as [number, number], label: "Australia" },
];

const arcs = [
  {
    id: "london-north-america",
    from: [51.5074, -0.1278] as [number, number],
    to: [41.8781, -87.6298] as [number, number],
  },
  {
    id: "london-gcc",
    from: [51.5074, -0.1278] as [number, number],
    to: [25.276987, 51.520008] as [number, number],
  },
  {
    id: "london-apac",
    from: [51.5074, -0.1278] as [number, number],
    to: [1.3521, 103.8198] as [number, number],
  },
  {
    id: "london-australia",
    from: [51.5074, -0.1278] as [number, number],
    to: [-33.8688, 151.2093] as [number, number],
  },
];

const GlobeSection = () => {
  return (
    <section className="bg-[#FBF9F6] py-24 md:py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left: Text Content */}
          <div className="w-full">
            <div className="inline-flex items-center font-mono text-xs tracking-[0.2em] uppercase text-[#1E3A3A]/70 font-bold px-4 py-2 mb-6 border border-[#1E3A3A]/10 rounded-full bg-white/50">
              <span className="w-2 h-2 rounded-full bg-[#1E3A3A] mr-2" />
              Cross-border execution
            </div>
            
            <h2 className="text-[40px] md:text-[56px] heading-strong text-[#1E3A3A] leading-[1.1] mb-6">
              One control model. <br />
              Market-specific execution.
            </h2>
            
            <p className="text-lg md:text-xl text-black/60 leading-relaxed mb-8 max-w-lg">
              ENAI coordinates revenue work across regions without pretending every market is the same. Signals, terminology, timing, exclusions, and handoff rules remain specific to the customer and market.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-black/10">
              <div>
                <div className="text-2xl font-light text-[#1E3A3A] mb-1">Local context</div>
                <div className="text-sm font-medium text-black/50 uppercase">Configured by market</div>
              </div>
              <div>
                <div className="text-2xl font-light text-[#1E3A3A] mb-1">Explicit rules</div>
                <div className="text-sm font-medium text-black/50 uppercase">Controlled by customer</div>
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
