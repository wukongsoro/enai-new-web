"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

interface FeatureCardProps {
  title: string;
  description: string;
  mediaType: "image" | "video";
  mediaSrc: string | { mp4: string; webm: string };
  href: string;
}

const features: FeatureCardProps[] = [
  {
    title: "AI-Powered Discovery",
    description: "Intelligent prospect research and signal detection across web and CRM data",
    mediaType: "image",
    mediaSrc: "/bdr-workflow-image.png",
    href: "/features/ai-discovery",
  },
  {
    title: "Multi-Channel Outreach",
    description: "Personalized sequences across email, LinkedIn, SMS, and voice",
    mediaType: "video",
    mediaSrc: { mp4: "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312%2F672b97ee6fe4e015e89a719a_Book%20Meeting%20On%20Autopilot%281%29-transcode.mp4", webm: "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312%2F672b97ee6fe4e015e89a719a_Book%20Meeting%20On%20Autopilot%281%29-transcode.webm" },
    href: "/features/multi-channel",
  },
  {
    title: "Automated Booking",
    description: "Seamless meeting scheduling with automatic CRM synchronization",
    mediaType: "image",
    mediaSrc: "/automated-booking.png",
    href: "/features/automated-booking",
  },
  {
    title: "24/7 Prospecting",
    description: "Run autonomous outbound campaigns around the clock. Handle follow-ups, objection handling, and nurturing to fill your pipeline while you sleep.",
    mediaType: "video",
    mediaSrc: { mp4: "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312%2F67d392625c0e86d7a5f944ee_deeply-integrated-crop-transcode.mp4", webm: "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312%2F67d392625c0e86d7a5f944ee_deeply-integrated-crop-transcode.webm" },
    href: "/features/24-7-prospecting",
  },
];

const FeatureCard = ({ title, description, mediaType, mediaSrc, href }: FeatureCardProps) => (
  <Link href={href} className="block group bg-[#F5F1ED] p-4 md:p-6 rounded-xl h-full flex flex-col transition-all duration-300 hover:shadow-md">
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg mb-4">
      {mediaType === 'video' && typeof mediaSrc === 'object' ? (
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src={mediaSrc.mp4} type="video/mp4" />
          <source src={mediaSrc.webm} type="video/webm" />
        </video>
      ) : (
        <Image
          src={mediaSrc as string}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}
    </div>
    <h3 className="text-xl md:text-2xl font-semibold mb-2 text-black">{title}</h3>
    <p className="text-base text-black/70 flex-1">{description}</p>
  </Link>
);

export default function WorkforceTransformation() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="bg-[#E8DDD4] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-[32px] md:text-[48px] lg:text-5xl heading-strong mb-4 text-black">
            ENAI BDR Features That Drive Results
          </h2>
          <p className="text-base md:text-lg text-[#666666] max-w-xl mx-auto leading-relaxed">
            From manual prospecting to automated pipeline generation. Our AI handles the heavy lifting so you can focus on closing deals.
          </p>
          <div className="mt-6">
            <Link
              href="/demo"
              className="inline-block bg-black text-white px-8 py-4 rounded-3xl font-medium text-sm transition-colors hover:bg-gray-800"
            >
              Get started
            </Link>
          </div>
        </div>

        <div className="overflow-hidden">
          <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full max-w-7xl mx-auto">
            <CarouselContent className="-ml-4 sm:-ml-6">
              {features.map((feature, index) => (
                <CarouselItem key={index} className="pl-4 sm:pl-6 basis-full sm:basis-1/2 lg:basis-1/3">
                  <FeatureCard {...feature} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          {/* Dots indicator */}
          {count > 0 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    current === index ? "bg-black w-4" : "bg-gray-400 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}