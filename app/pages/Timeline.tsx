import Image from "next/image";
import React from "react";
import { timeline } from "../config";
import SectionHeading from "../components/SectionHeading";

const Timeline = () => {
  return (
      <div
        style={{
          backgroundImage: "url(https://res.cloudinary.com/db4zbyipc/image/upload/v1752839639/Wine-Section_1_oaf4po.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="relative z-50 inset-0 h-full"
      >
        <SectionHeading
        className="translate-y-24"
        title="Timeline"
        titleClass=""
        subtitle="From Grit to Glory "
        subtitleClass="!normal-case !font-medium"
        context="Spoke of Possibilty"
        contextClass="text-[#8E1C21]"
        />
      <div className="relative h-full  w-full overflow-x-auto scrollbar-hide">
        <div className="h-full flex items-center w-max px-20">
          <Image 
            src={timeline} 
            width={3800} 
            height={300} 
            alt="Timeline" 
            className="object-contain" 
          />
        </div>
      </div>
      </div>
  );
};

export default Timeline;