import { Quote } from 'lucide-react';

const CustomerStories = () => {
  return (
    <section className="bg-[#E8DDD4] py-20 md:py-32 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-black/40 font-bold px-4 py-2 mb-6 border border-black/10 rounded-full">
            Real Teams. Real Revenue.
          </div>
          <h2 className="text-[32px] md:text-5xl heading-strong text-black mb-6">
            From pipeline to closed revenue in production.
          </h2>
          <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
            Here's what our customers are seeing in the first 90 days of running ENAI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Story 1 */}
          <div className="bg-[#F5F1ED] p-8 rounded-2xl border border-black/5 hover:border-black/10 hover:shadow-md transition-all flex flex-col">
            <Quote className="w-8 h-8 text-[#1E3A3A]/20 mb-6" />
            <p className="text-black/80 text-lg leading-relaxed flex-1">
              "We went from spray-and-pray outbound to knowing exactly which accounts to call on Monday morning. ENAI tells us who's in-market, why, and what to say — before our competitors even know they're looking."
            </p>
            <div className="mt-8 pt-6 border-t border-black/5">
              <p className="text-xs font-bold uppercase tracking-widest text-[#1E3A3A]">
                Predictive Targeting
              </p>
            </div>
          </div>

          {/* Story 2 */}
          <div className="bg-[#F5F1ED] p-8 rounded-2xl border border-black/5 hover:border-black/10 hover:shadow-md transition-all flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#1E3A3A]" />
            <Quote className="w-8 h-8 text-[#1E3A3A]/20 mb-6" />
            <p className="text-black/80 text-lg leading-relaxed flex-1">
              "ENAI spotted two at-risk deals we had absolutely no idea about. Both had gone quiet in ways we hadn't noticed. We re-engaged both in time and saved them. That's $180K right there — in the first month."
            </p>
            <div className="mt-8 pt-6 border-t border-black/5">
              <p className="text-xs font-bold uppercase tracking-widest text-[#1E3A3A]">
                $180K Pipeline Saved
              </p>
            </div>
          </div>

          {/* Story 3 */}
          <div className="bg-[#F5F1ED] p-8 rounded-2xl border border-black/5 hover:border-black/10 hover:shadow-md transition-all flex flex-col">
            <Quote className="w-8 h-8 text-[#1E3A3A]/20 mb-6" />
            <p className="text-black/80 text-lg leading-relaxed flex-1">
              "Our revenue ops used to run on weekly slide decks and gut feel. ENAI gave us real-time pipeline intelligence we simply couldn't access before. The team now operates at a level we thought was only possible for companies ten times our size."
            </p>
            <div className="mt-8 pt-6 border-t border-black/5">
              <p className="text-xs font-bold uppercase tracking-widest text-[#1E3A3A]">
                Real-time Intelligence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;