"use client";
import React from "react";
import { earth_zoom } from "../config";
import { MoveDown } from "lucide-react";
import Navbar from "../components/Header";
import Image from "next/image";
import Altitude from "@/public/icons/Altitude.svg";
import Vineyard from "@/public/icons/Vineyard.svg";
import Climate from "@/public/icons/Climate.svg";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="sticky top-0 z-10 min-h-screen w-full overflow-hidden">
      <Navbar />
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
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 7, duration: 0.3}} className="">
        <Image
          src={Altitude}
          alt="Altitude"
          className="absolute bottom-[20%] right-[25vw] w-[84px]"
        />
        <Image
          src={Vineyard}
          alt="Altitude"
          className="absolute top-[40%] left-[50vw] w-[84px] -translate-x-[50%]"
        />
        <Image
          src={Climate}
          alt="Altitude"
          className="absolute top-[40%] left-[25vw] w-[84px] -translate-x-[50%]"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
