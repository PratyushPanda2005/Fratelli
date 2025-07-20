'use client'
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { timeline } from "../config";
import SectionHeading from "../components/SectionHeading";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timelineImage = timelineRef.current?.querySelector("img");
    if (!timelineImage || !containerRef.current) return;

    const imageWidth = timelineImage.offsetWidth;
    const containerWidth = containerRef.current.offsetWidth;
    const scrollDistance = imageWidth - containerWidth;

    gsap.to(timelineImage, {
      x: -scrollDistance - scrollDistance/4,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${scrollDistance}`,
        pin: true,
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: "url(https://res.cloudinary.com/db4zbyipc/image/upload/v1752839639/Wine-Section_1_oaf4po.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="relative z-50 inset-0 h-screen" 
      ref={containerRef}
    >
      <SectionHeading
        className="pt-10"
        fillColour="#000000"
        title="Timeline"
        titleClass=""
        subtitle="From Grit to Glory"
        subtitleClass="!normal-case !font-medium"
        context="Spoke of Possibility"
        contextClass="text-[#8E1C21]"
      />
      <div 
        className="relative h-full w-full overflow-x-hidden -translate-y-24" 
        ref={timelineRef}
      >
        <div className="h-full flex items-center w-max px-20">
          <Image 
            src={timeline} 
            width={3800} 
            height={300} 
            alt="Timeline" 
            className="object-contain" 
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;