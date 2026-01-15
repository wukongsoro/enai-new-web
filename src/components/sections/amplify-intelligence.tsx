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
  <div className="flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-body-sm font-medium text-white whitespace-nowrap">
    <div className="h-2 w-2 flex-shrink-0 rounded-sm bg-white/40" />
    <span>{text}</span>
  </div>
);

const MarqueeRow: FC<{ tags: string[]; reverse?: boolean }> = ({ tags, reverse = false }) => {
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
    <section className="overflow-hidden bg-[#1E3A3A] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center text-caption uppercase tracking-wider text-white/70 px-4 py-2 bg-white/10 border border-white/10 rounded-full">
            Always-On Revenue Engine
          </div>
          <h2 className="h2 text-white">
            Predictable Pipeline At Scale
          </h2>
          <p className="mt-6 max-w-lg text-body-lg text-white/70">
            50% faster velocity. 70% lower cost. Full audit trails. Trusted by revenue teams who demand both speed and accountability.
          </p>
          <Link
            href="https://calendly.com/enai-ai2024/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center bg-white text-black px-8 py-4 text-sm font-medium rounded-lg transition-colors hover:bg-white/90"
          >
            See The Numbers
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