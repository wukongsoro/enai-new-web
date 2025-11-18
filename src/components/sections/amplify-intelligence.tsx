"use client";
import Link from 'next/link';
import { FC } from 'react';

const tagsRow1: string[] = [
  'Scale Pipeline 50%',
  'Reduce SDR Costs 70%',
  'Increase SQLs 3x',
  '24/7 Prospecting',
  'Personalized Outreach',
  'CRM Integration',
  'Lead Qualification',
  'A/B Testing',
  'Objection Handling',
  'Meeting Booking',
];

const tagsRow2: string[] = [
  'Meeting Booking',
  'Objection Handling',
  'A/B Testing',
  'Lead Qualification',
  'CRM Integration',
  'Personalized Outreach',
  '24/7 Prospecting',
  'Increase SQLs 3x',
  'Reduce SDR Costs 70%',
  'Scale Pipeline 50%',
];

const MarqueeTag: FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-base font-medium text-white whitespace-nowrap">
    <div className="h-3 w-3 flex-shrink-0 rounded-[2px] bg-white/50" />
    <span>{text}</span>
  </div>
);

const MarqueeRow: FC<{ tags: string[]; reverse?: boolean }> = ({ tags, reverse = false }) => {
  // IMPORTANT: The 'animate-marquee' and 'animate-marquee-reverse' classes are assumed to be 
  // defined in the project's globals.css or tailwind.config.js for this to work.
  // Example definition for tailwind.config.js:
  // theme: {
  //   extend: {
  //     animation: {
  //       marquee: 'marquee 60s linear infinite',
  //       'marquee-reverse': 'marquee-reverse 60s linear infinite',
  //     },
  //     keyframes: {
  //       marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-100%)' } },
  //       'marquee-reverse': { '0%': { transform: 'translateX(-100%)' }, '100%': { transform: 'translateX(0%)' } },
  //     },
  //   },
  // },
  const animationClass = reverse ? 'animate-marquee-reverse' : 'animate-marquee';
  
  return (
    <div className="flex">
      <div className={`flex min-w-full shrink-0 items-center space-x-4 ${animationClass}`}>
        {tags.map((tag, index) => <MarqueeTag key={index} text={tag} />)}
      </div>
      <div className={`flex min-w-full shrink-0 items-center space-x-4 ${animationClass}`} aria-hidden="true">
        {tags.map((tag, index) => <MarqueeTag key={`dup-${index}`} text={tag} />)}
      </div>
    </div>
  );
};

const AmplifyIntelligence = () => {
  return (
    <section className="overflow-hidden bg-[#1E3A3A] py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="mb-4 inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
            24/7 Sales Automation
          </div>
          <h2 className="text-5xl heading-strong leading-tight text-white md:text-[56px]">
            Amplify Your Sales Pipeline
          </h2>
          <p className="mt-4 max-w-lg text-base text-white/90">
            Accelerate B2B growth with ENAI AI BDR agents: increase pipeline velocity by 50%, cut acquisition costs by 70%, and generate 3x more qualified meetings.
          </p>
          <Link
            href="https://calendly.com/enai-ai2024/30min?month=2025-09"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-colors hover:bg-gray-200"
          >
            Book a Demo
          </Link>
        </div>
      </div>
      <div className="mt-16 flex flex-col gap-4 overflow-hidden">
        <MarqueeRow tags={tagsRow1} />
        <MarqueeRow tags={tagsRow2} reverse />
      </div>
    </section>
  );
};

export default AmplifyIntelligence;