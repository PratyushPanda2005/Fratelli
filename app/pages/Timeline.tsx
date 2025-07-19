import Image from "next/image";
import React from "react";
import { timeline } from "../config";

const Timeline = () => {
  return (
    <div className="relative min-h-screen z-50">
      <div
        style={{
          backgroundImage: "url(https://res.cloudinary.com/db4zbyipc/image/upload/v1752839639/Wine-Section_1_oaf4po.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="relative z-50 inset-0 h-full"
      >

      <div className="relative h-full  w-full overflow-x-auto scrollbar-hide">
        <div className="h-full flex items-center w-max px-20">
          <Image 
            src={timeline} 
            width={3800} 
            height={300} 
            alt="Timeline" 
            className="object-contain h-[100vh]" 
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Timeline;