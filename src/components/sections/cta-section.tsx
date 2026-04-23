import React from 'react';
import Link from 'next/link';

const CtaSection = () => {
  return (
    <section className="bg-white py-12 md:py-16 mb-20 md:mb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div className="bg-[#E8DDD4] rounded-[2rem] p-12 md:p-20 shadow-sm border border-black/5">
          <h2 className="text-[36px] md:text-[48px] heading-strong text-[#1E3A3A] leading-[1.1] mb-6">
            Ready to see ENAI running your revenue motion?
          </h2>
          <p className="text-lg text-[#1E3A3A]/70 leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
            The next generation of Revenue OS isn't a better dashboard. It's a system that understands your entire go-to-market motion, reads every signal in real time, and takes action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://calendly.com/enai-ai2024/30min?month=2025-09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#1E3A3A] text-white text-[15px] font-semibold py-4 px-10 rounded-lg hover:bg-[#1E3A3A]/90 transition-all duration-300 shadow-md"
            >
              Book a Demo
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center bg-transparent text-[#1E3A3A] border border-[#1E3A3A]/20 text-[15px] font-semibold py-4 px-10 rounded-lg hover:bg-white/50 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;