import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
            <Button asChild size="lg" className="bg-[#1E3A3A] text-white text-[15px] font-semibold px-10 hover:bg-[#1E3A3A]/90 shadow-md">
              <Link href="https://calendly.com/enai-ai2024/30min?month=2025-09" target="_blank" rel="noopener noreferrer">
                Book a Demo
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-[#1E3A3A] border-[#1E3A3A]/20 text-[15px] font-semibold px-10 hover:bg-white/50">
              <Link href="/pricing">
                View Pricing
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;