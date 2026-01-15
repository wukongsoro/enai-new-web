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
      <div className={`relative overflow-hidden rounded-xl w-full h-64 sm:h-72 md:h-80 bg-cover bg-center ${imageWrapperClass} flex-shrink-0`}>
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
        <h3 className="text-xl md:text-2xl text-black leading-tight mb-3">
          {name} <span className="text-black/50">— {role}</span>
        </h3>
        <p className="text-body text-black/60 leading-relaxed mb-6 flex-1">
          {description}
        </p>
        <div className="mt-auto">
          <Link href={hireLink} className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-black/70 transition-colors">
            Deploy {name}
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
            Three Execution Engines. One Platform.
          </h2>
          <p className="text-body-lg text-black/60 leading-relaxed max-w-2xl mx-auto">
            Each agent handles a distinct stage of your revenue workflow with built-in approval workflows. From signal to meeting, you retain full visibility.
          </p>
          <div className="mt-8">
            <Link href="https://calendly.com/enai-ai2024/30min" className="inline-flex items-center justify-center bg-black text-white px-8 py-4 text-sm font-medium rounded-lg hover:bg-black/90 transition-all duration-300">
              Watch It Work
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
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