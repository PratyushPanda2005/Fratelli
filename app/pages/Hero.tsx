import React from "react";
import { earth_zoom } from "../config";
import { MoveDown } from "lucide-react";
import Navbar from "../components/Header";

const Hero = () => {
  return (
    <div className="sticky top-0 z-10 min-h-screen w-full overflow-hidden">
      <Navbar/>
      <video
        autoPlay
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={earth_zoom} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/70"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%)",
        }}
      />
      <div className="h-full w-full absolute top-0 left-0 z-10 px-20 flex  items-end pb-8">
        <div className="w-full flex items-center justify-between">
        <p className="text-white max-w-[25%] font-clashdisplay">
          Where Ancient Earth Met An Audacious Idea — And A Legacy Began To
          Uncork Itself.
        </p>
        <button className="text-white uppercase font-clashdisplay border py-2 px-4 rounded-full flex gap-2 items-center justify-between text-sm">
          scroll down
          <span className="inline-block h-[1em] w-auto">
            <MoveDown className="h-full w-auto" />
          </span>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
