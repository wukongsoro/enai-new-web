"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface WorkerCardProps {
  name: string;
  role: string;
  description: string;
  hireLink: string;
  imageWrapperClass: string;
  bottomUIImage: string;
  bottomUIImageAlt: string;
}

const WorkerCard: React.FC<WorkerCardProps> = ({
  name,
  role,
  description,
  hireLink,
  imageWrapperClass,
  bottomUIImage,
  bottomUIImageAlt,
}) => {

  return (
    <div className="w-full h-full flex flex-col">
      <div className={`relative overflow-hidden rounded-xl w-full h-64 sm:h-72 md:h-80 bg-cover bg-center ${imageWrapperClass} flex-shrink-0`}>
        <Image
          src={bottomUIImage}
          alt={bottomUIImageAlt}
          fill
          className="object-cover"
        />
      </div>
      <div className="pt-6 md:pt-8 flex-1 flex flex-col">
        <h3 className="text-xl md:text-2xl text-black leading-tight mb-3">
          {name} <span className="text-black/50">. {role}</span>
        </h3>
        <p className="text-body text-black/60 leading-relaxed mb-6 flex-1">
          {description}
        </p>
        <div className="mt-auto">
          <Link href={hireLink} className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-black/70 transition-colors">
            See {name} in a workflow
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

const DigitalWorkersIntro = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="h2 text-black mb-6">
            From market change to a seller-ready opportunity.
          </h2>
          <p className="text-body-lg text-black/60 leading-relaxed max-w-2xl mx-auto">
            ENAI does not stop at finding a contact or drafting an email. It connects market evidence, the buying route, permitted action, qualification, and seller handoff in one controlled workflow.
          </p>
          <div className="mt-8">
            <Link href="/demo-library" className="inline-flex items-center justify-center bg-black text-white px-8 py-4 text-sm font-medium rounded-lg hover:bg-black/90 transition-all duration-300">
              Watch an industry run
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          <WorkerCard
            name="Market intelligence"
            role="Detects when an account is changing"
            description="Connects expansion, operational, procurement, leadership, and demand signals to the accounts where a commercial conversation has a real reason to begin."
            hireLink="/demo-library"
            imageWrapperClass="bg-[#E8DDD4]"
            bottomUIImage="/research-prospects.png"
            bottomUIImageAlt="ENAI market and account research workflow"
          />
          <WorkerCard
            name="Account orchestration"
            role="Builds the route through the buying group"
            description="Maps the operator, economic buyer, technical evaluator, procurement path, and existing relationship context before the first action is prepared."
            hireLink="/demo-library"
            imageWrapperClass="bg-gray-50"
            bottomUIImage="/image0-3.jpeg"
            bottomUIImageAlt="ENAI buying group and account orchestration interface"
          />
          <WorkerCard
            name="Governed execution"
            role="Moves the opportunity to the right seller"
            description="Prepares approved engagement, manages follow-up, qualifies the response, and hands over the account with its evidence, stakeholders, and next action intact."
            hireLink="/demo-library"
            imageWrapperClass="bg-gray-100"
            bottomUIImage="/automated-booking.png"
            bottomUIImageAlt="ENAI qualification and seller handoff interface"
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalWorkersIntro;
