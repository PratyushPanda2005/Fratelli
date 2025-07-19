import Image from "next/image";
import React from "react";
import TeamImage from "@/public/images/Image.svg";
import Vineyard from "@/public/images/Image (1).svg";
import Flower from "@/public/flower.svg";

const Winegrid = ({
  title,
  paragraph,
}: {
  title: string;
  paragraph: string;
}) => {
  return (
    <div className="grid grid-cols-2">
        <Image src={Vineyard} alt="" className="w-[400px] col-span-1" />
      <div className="flex justify-center items-center col-span-1">
        <div className="max-w-[70%] w-full flex flex-col gap-3">
          <Image src={Flower} alt="Flower svg" />
          <h1 className="font-clashdisplay font-medium text-xl">{title}</h1>
          <p className="leading-[125%] font-normal font-clashdisplay">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
    
  );
};

const WineSection = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/db4zbyipc/image/upload/v1752839639/Wine-Section_1_oaf4po.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="relative min-h-screen z-50 flex flex-col justify-center items-center"
    >
      <div className="text-center pt-20">
        <h1 className=" flex justify-center gap-1 items-center font-clashdisplay font-medium text-sm">
          <span className="h-[0.5em] w-[0.5em] inline-block ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 15"
              fill="none"
            >
              <circle cx="7" cy="7.5" r="7" fill="#10151A" />
            </svg>
          </span>
          The Dream Takes Root
        </h1>
        <h2 className="uppercase font-clashdisplay font-semibold text-4xl mt-8">
          Seven Brothers.
        </h2>
        <h3 className="font-sheffield text-8xl text-[#8E1C21] mt-4">
          One bold dream
        </h3>
      </div>
      <h1 className="wine-section-rotated-text text-6xl absolute left-0 top-1/2 transform -translate-y-[50%] -translate-x-[40%]">
        ONE BOLD DREAM
      </h1>
      <div className="w-full max-w-3xl">
        <div className="grid grid-cols-2">
          <div className="flex justify-center items-center col-span-1">
            <div className="max-w-[70%] w-full flex flex-col gap-3">
              <Image src={Flower} alt="Flower svg" />
              <h1 className="font-clashdisplay font-medium text-xl">
                The beginning
              </h1>
              <p className="leading-[125%] font-normal font-clashdisplay">
                In <span className="font-semibold">2006,</span> seven
                visionaries came together — not to follow tradition, but to
                shape it. They saw vineyards not as agriculture, but as a canvas
                for ambition.
              </p>
            </div>
          </div>
          <Image src={TeamImage} alt="" className="w-[400px] col-span-1" />
        </div>
        
          <Winegrid
            title="Fratelli vineyards, Akluj"
            paragraph="Akluj would not just grow grapes. It would grow greatness. Their belief? That Indian terroir could stand on the world stage."
          />
        
      </div>
    </section>
  );
};

export default WineSection;
