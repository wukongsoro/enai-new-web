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
    title: "Signal Ontology",
    description: "Signal ontology and intent mapping across structured and unstructured data",
    mediaType: "image",
    mediaSrc: "/signal-ontology.png",
    href: "/features/ai-discovery",
  },
  {
    title: "Governed Multi-Channel",
    description: "Governed multi-channel execution with approval gates and send compliance",
    mediaType: "video",
    mediaSrc: { mp4: "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312%2F672b97ee6fe4e015e89a719a_Book%20Meeting%20On%20Autopilot%281%29-transcode.mp4", webm: "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312%2F672b97ee6fe4e015e89a719a_Book%20Meeting%20On%20Autopilot%281%29-transcode.webm" },
    href: "/features/multi-channel",
  },

  {
    title: "Continuous Execution",
    description: "Continuous execution within defined compliance windows. Autonomous follow-up, governed objection handling, and auditable pipeline operations.",
    mediaType: "video",
    mediaSrc: { mp4: "https://www.palantir.com/assets/xrfr7uokpv1b/6SnJjmQnRloLuqa1Wngeqm/c765141a58a6fa88e4e41a479a78ee2d/read-write.mp4", webm: "https://www.palantir.com/assets/xrfr7uokpv1b/6SnJjmQnRloLuqa1Wngeqm/c765141a58a6fa88e4e41a479a78ee2d/read-write.mp4" },
    href: "/features/24-7-prospecting",
  },
];

const FeatureCard = ({ title, description, mediaType, mediaSrc, href }: FeatureCardProps) => (
  <Link href={href} className="block group bg-[#F5F1ED] p-5 md:p-6 rounded-xl h-full flex flex-col transition-all duration-300 hover:shadow-md">
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg mb-5">
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
    <h3 className="text-lg md:text-xl mb-2 text-black">{title}</h3>
    <p className="text-body-sm text-black/60 flex-1">{description}</p>
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
    <section className="bg-[#E8DDD4] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="h2 text-black mb-6">
            Built for Scale. Designed for Control.
          </h2>
          <p className="text-body-lg text-black/60 max-w-xl mx-auto leading-relaxed">
            Every capability operates within defined governance boundaries. Audit trails, approval gates, and compliance verification are not add-ons. They are the foundation.
          </p>
          <div className="mt-8">
            <Link
              href="https://calendly.com/enai-ai2024/30min"
              className="inline-flex items-center justify-center bg-black text-white px-8 py-4 text-sm font-medium rounded-lg transition-colors hover:bg-black/90"
            >
              Explore Capabilities
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
          {count > 0 && (
            <div className="flex justify-center gap-2 mt-10">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${current === index ? "bg-black w-6" : "bg-black/30 hover:bg-black/50"
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