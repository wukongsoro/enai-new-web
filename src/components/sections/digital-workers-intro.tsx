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
    <div className={`relative overflow-hidden rounded-2xl w-full h-80 bg-cover bg-center ${imageWrapperClass} flex-shrink-0`}>
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
          <h2 className="text-[32px] md:text-[48px] lg:text-5xl font-bold text-black leading-tight mb-4">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto">
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
            bottomUIImage="data:image/svg+xml,%3csvg width='400' height='300' viewBox='0 0 400 300' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='400' height='300' fill='%23f9fafb'/%3e%3c!-- Email Outreach Flow --%3e%3crect x='20' y='120' width='80' height='60' rx='8' fill='%23dbeafe' stroke='%236366f1' stroke-width='2'/%3e%3ctext x='60' y='145' text-anchor='middle' fill='%23374151' font-size='11' font-weight='600'%3eLeads%3c/text%3e%3cpath d='M100 150 L140 150' stroke='%236366f1' stroke-width='2' marker-end='url(%23arrow)'/%3e%3crect x='150' y='120' width='80' height='60' rx='8' fill='%23dbeafe' stroke='%236366f1' stroke-width='2'/%3e%3ctext x='190' y='145' text-anchor='middle' fill='%23374151' font-size='11' font-weight='600'%3eAI%3c/text%3e%3ctext x='190' y='160' text-anchor='middle' fill='%23374151' font-size='9'%3eAnalysis%3c/text%3e%3cpath d='M230 150 L270 150' stroke='%236366f1' stroke-width='2' marker-end='url(%23arrow)'/%3e%3crect x='280' y='120' width='80' height='60' rx='8' fill='%23dbeafe' stroke='%236366f1' stroke-width='2'/%3e%3ctext x='320' y='145' text-anchor='middle' fill='%23374151' font-size='11' font-weight='600'%3eEmail%3c/text%3e%3ctext x='320' y='160' text-anchor='middle' fill='%23374151' font-size='9'%3eSequence%3c/text%3e%3cpath d='M320 180 L320 210' stroke='%236366f1' stroke-width='2' marker-end='url(%23arrow)'/%3e%3crect x='280' y='220' width='80' height='50' rx='8' fill='%23dbeafe' stroke='%236366f1' stroke-width='2'/%3e%3ctext x='320' y='240' text-anchor='middle' fill='%23374151' font-size='11' font-weight='600'%3eLinkedIn%3c/text%3e%3ctext x='320' y='255' text-anchor='middle' fill='%23374151' font-size='9'%3eOutreach%3c/text%3e%3cdefs%3e%3cmarker id='arrow' markerWidth='6' markerHeight='6' refX='5' refY='2' orient='auto'%3e%3cpath d='M0,0 L0,4 L5,2 z' fill='%236366f1'/%3e%3c/marker%3e%3c/defs%3e%3c/svg%3e"
            bottomUIImageAlt="Email Outreach Workflow Diagram"
          />
          <WorkerCard
            name="QualifierAI"
            role="Meeting Booker Agent"
            description="Qualifies leads through intelligent conversations, schedules demos via calendar integration, and nurtures with follow-ups. Handles objections autonomously."
            hireLink="/agents/qualifierai"
            imageWrapperClass="bg-gray-100"
            bottomUIImage="data:image/svg+xml,%3csvg width='400' height='300' viewBox='0 0 400 300' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='400' height='300' fill='%23f3f4f6'/%3e%3c!-- Lead Qualification Flow --%3e%3ccircle cx='60' cy='150' r='25' fill='%23fecaca' stroke='%23dc2626' stroke-width='2'/%3e%3ctext x='60' y='155' text-anchor='middle' fill='%23374151' font-size='10' font-weight='600'%3eLead%3c/text%3e%3cpath d='M85 150 L125 150' stroke='%23dc2626' stroke-width='2' marker-end='url(%23arrow)'/%3e%3crect x='135' y='125' width='70' height='50' rx='8' fill='%23fecaca' stroke='%23dc2626' stroke-width='2'/%3e%3ctext x='170' y='145' text-anchor='middle' fill='%23374151' font-size='10' font-weight='600'%3eQualify%3c/text%3e%3ctext x='170' y='160' text-anchor='middle' fill='%23374151' font-size='8'%3eCheck%3c/text%3e%3cpath d='M205 150 L245 150' stroke='%23dc2626' stroke-width='2' marker-end='url(%23arrow)'/%3e%3crect x='255' y='125' width='70' height='50' rx='8' fill='%23fecaca' stroke='%23dc2626' stroke-width='2'/%3e%3ctext x='290' y='145' text-anchor='middle' fill='%23374151' font-size='10' font-weight='600'%3eScore%3c/text%3e%3ctext x='290' y='160' text-anchor='middle' fill='%23374151' font-size='8'%3eHot/Cold%3c/text%3e%3cpath d='M290 175 L290 205' stroke='%2322c55e' stroke-width='2' marker-end='url(%23arrow2)'/%3e%3crect x='255' y='215' width='70' height='50' rx='8' fill='%23dbeafe' stroke='%2322c55e' stroke-width='2'/%3e%3ctext x='290' y='235' text-anchor='middle' fill='%23374151' font-size='10' font-weight='600'%3eBook%3c/text%3e%3ctext x='290' y='250' text-anchor='middle' fill='%23374151' font-size='8'%3eMeeting%3c/text%3e%3cpath d='M225 240 L185 240' stroke='%236b7280' stroke-width='2' marker-end='url(%23arrow3)'/%3e%3crect x='135' y='215' width='70' height='50' rx='8' fill='%23e5e7eb' stroke='%236b7280' stroke-width='2'/%3e%3ctext x='170' y='235' text-anchor='middle' fill='%23374151' font-size='10' font-weight='600'%3eNurture%3c/text%3e%3ctext x='170' y='250' text-anchor='middle' fill='%23374151' font-size='8'%3eLater%3c/text%3e%3cdefs%3e%3cmarker id='arrow' markerWidth='6' markerHeight='6' refX='5' refY='2' orient='auto'%3e%3cpath d='M0,0 L0,4 L5,2 z' fill='%23dc2626'/%3e%3c/marker%3e%3cmarker id='arrow2' markerWidth='6' markerHeight='6' refX='5' refY='2' orient='auto'%3e%3cpath d='M0,0 L0,4 L5,2 z' fill='%2322c55e'/%3e%3c/marker%3e%3cmarker id='arrow3' markerWidth='6' markerHeight='6' refX='5' refY='2' orient='auto'%3e%3cpath d='M0,0 L0,4 L5,2 z' fill='%236b7280'/%3e%3c/marker%3e%3c/defs%3e%3c/svg%3e"
            bottomUIImageAlt="Lead Qualification Workflow Process"
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalWorkersIntro;