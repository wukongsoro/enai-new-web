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
  bottomVideoSrc?: string;
}

const WorkerCard: React.FC<WorkerCardProps> = ({
  name,
  role,
  description,
  hireLink,
  imageWrapperClass,
  bottomUIImage,
  bottomUIImageAlt,
  bottomVideoSrc,
}) => {

  return (
  <div className="w-full h-full flex flex-col">
    <div className={`relative overflow-hidden rounded-2xl w-full h-64 sm:h-72 md:h-80 bg-cover bg-center ${imageWrapperClass} flex-shrink-0`}>
      {bottomVideoSrc ? (
        <video
          src={bottomVideoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"
        />
      ) : (
        <div className="relative w-full h-full">
          <Image
            src={bottomUIImage}
            alt={bottomUIImageAlt}
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
    <div className="pt-6 md:pt-8 flex-1 flex flex-col">
      <h3 className="text-2xl md:text-3xl font-semibold text-black leading-tight mb-3">
        {name} <span className="opacity-50">– {role}</span>
      </h3>
      <p className="text-base text-[#666666] leading-relaxed mb-6 flex-1">
        {description}
      </p>
      <div className="mt-auto">
        <Link href={hireLink} className="inline-flex items-center gap-2.5 font-medium text-black group text-sm hover:text-gray-600 transition-colors">
          Deploy {name}
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b4117007-ba70-4ecf-8e44-b80106e53fc2-11x-ai/assets/svgs/6728cd23fb2a7e724d17d4c5_arrow_right_alt-5.svg?"
            alt="Arrow right"
            width={16}
            height={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  </div>
  );
};

const DigitalWorkersIntro = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-[32px] md:text-[48px] lg:text-5xl heading-strong text-black leading-tight mb-4">
            Meet ENAI's AI BDR Agents
          </h2>
          <p className="text-base md:text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto">
            From startups to enterprise sales orgs—spin up AI workers that match your motion. Research, write, and book—with approval guardrails.
          </p>
          <div className="mt-6">
            <Link href="/demo" className="inline-block bg-black text-white rounded-2xl py-4 px-8 text-sm font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get started
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 max-w-7xl mx-auto">
          <WorkerCard
            name="ProspectorAI"
            role="Lead Discovery Agent"
            description="Automatically identifies high-potential B2B leads using advanced data signals from LinkedIn, company news, and intent data. Builds targeted lists at scale."
            hireLink="/agents/prospectorai"
            imageWrapperClass="bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500"
            bottomUIImage="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b4117007-ba70-4ecf-8e44-b80106e53fc2-11x-ai/assets/images/67d92d286e1eb4cb15d5ca35_048e976b0381640b13181971d4221a5e_identify-6.webp?"
            bottomUIImageAlt="ProspectorAI Dashboard"
            bottomVideoSrc="https://cluely.com/videos/FeatureCard1.mp4"
          />
          <WorkerCard
            name="OutreachAI"
            role="Personalized Outreach Agent"
            description="Crafts hyper-personalized cold emails and LinkedIn messages based on prospect behavior and company fit. A/B tests sequences for optimal engagement."
            hireLink="/agents/outreachai"
            imageWrapperClass="bg-gray-50"
            bottomUIImage="/image0-3.jpeg"
            bottomUIImageAlt="OutreachAI Email and LinkedIn Outreach Interface"
          />
          <WorkerCard
            name="QualifierAI"
            role="Meeting Booker Agent"
            description="Qualifies leads through intelligent conversations, schedules demos via calendar integration, and nurtures with follow-ups. Handles objections autonomously."
            hireLink="/agents/qualifierai"
            imageWrapperClass="bg-gray-100"
            bottomUIImage="/automated-booking.png"
            bottomUIImageAlt="Meeting Room Booking Dashboard Interface"
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalWorkersIntro;