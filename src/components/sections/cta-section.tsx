import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CtaSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E8DDD4] rounded-[40px] overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[500px] lg:min-h-[600px]">
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 order-2 lg:order-1">
              <h2 className="text-[32px] md:text-[48px] lg:text-[56px] heading-strong text-black leading-tight mb-6">
                Deploy Your AI BDR Today
              </h2>
              <p className="text-lg md:text-xl text-[#666666] leading-relaxed mb-10 max-w-lg">
                Automate prospecting, outreach, and qualification to build a predictable pipeline. Cut costs by 70%, scale outreach 10x, and focus your team on closing deals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <Link
                  href="https://calendly.com/enai-ai2024/30min?month=2025-09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-black text-white rounded-3xl text-sm font-medium py-4 px-8 hover:bg-gray-800 hover:scale-105 transition-all duration-300 w-full sm:w-auto min-w-[160px] min-h-[48px]"
                >
                  Book a Demo
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center border-2 border-black text-black rounded-3xl text-sm font-medium py-4 px-8 hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 w-full sm:w-auto min-w-[160px] min-h-[48px]"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-full min-h-[400px]">
                <Image
                  src="/ai-bdr-screenshot.png"
                  alt="Sales team collaborating on BDR dashboard"
                  fill
                  className="object-cover lg:rounded-l-[40px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;