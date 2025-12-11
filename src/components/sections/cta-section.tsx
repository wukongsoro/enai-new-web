import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CtaSection = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-[#E8DDD4] rounded-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[500px] lg:min-h-[600px]">
            <div className="flex flex-col justify-center p-10 md:p-14 lg:p-20 order-2 lg:order-1">
              <h2 className="h2 text-black mb-6">
                Deploy Your AI BDR Today
              </h2>
              <p className="text-body-lg text-black/60 leading-relaxed mb-10 max-w-lg">
                Automate prospecting, outreach, and qualification to build a predictable pipeline. Cut costs by 70%, scale outreach 10x, and focus your team on closing deals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://calendly.com/enai-ai2024/30min?month=2025-09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-black text-white text-sm font-medium py-4 px-8 rounded-lg hover:bg-black/90 transition-all duration-300"
                >
                  Book a Demo
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center border border-black text-black text-sm font-medium py-4 px-8 rounded-lg hover:bg-black hover:text-white transition-all duration-300"
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
                  className="object-cover"
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