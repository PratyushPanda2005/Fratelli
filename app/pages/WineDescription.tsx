import Image from "next/image";
import React from "react";
import { barells, redcut, whitecut, wine_bottle } from "../config";
import bgRed from "@/public/images/bg.png";
import SectionHeading from "../components/SectionHeading";

const WineDescription = () => {
  return (
    <>
      <section
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/db4zbyipc/image/upload/v1752839639/Wine-Section_1_oaf4po.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="relative z-50"
      >
        <Image
          src={redcut}
          width={400}
          height={400}
          alt="Red Cut"
          className="w-full"
        />
      </section>
      <div
        style={{
          backgroundImage: `url(${bgRed.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="min-h-screen z-50 relative -top-[64px] flex flex-col  items-center"
      >
        <SectionHeading
          className=""
          fillColour="#ffffff"
          title="Premium Wines"
          titleClass="text-white"
          subtitle="Every Bottle,"
          subtitleClass="text-white"
          context="a Chapter"
          contextClass="text-white"
        />
        <div className="w-full relative flex justify-center items-center">
          <div className="max-w-5xl w-full flex">
            <div className="font-clashdisplay w-1/3 flex flex-col justify-center ">
              <h1 className="text-8xl font-medium text-white">J’Noon</h1>
              <p className="text-white/80">
                Variety: Cabernet Sauvignon, Petit Verdot/ Marcelan & Cabernet
                Franc
              </p>
              <h2 className="mt-6 font-medium text-white">Details</h2>
            </div>
            <div className="flex flex-col justify-center items-center w-1/3">
              <div className="text-center w-full mt-11 font-clashdisplay text-white">
                <h1>Our wines aren't just poured —</h1>
                <h1>they're told. Each vintage is a </h1>
                <h1>voice, each blend a belief.</h1>
              </div>
              <Image
                src={wine_bottle}
                alt="Wine Bottle"
                width={300}
                height={300}
                className="h-[480px] w-[250px] -translate-y-[10%]"
              />
            </div>
            <div className="w-1/3 flex justify-center items-end pb-20">
              <p className="font-clashdisplay text-white font-light max-w-[95%] text-sm">
                The Cabernet Sauvignon contributes to the backbone as well as
                freshness to this exquisite blend. The Petit Verdot, Marselan,
                and Cabernet Franc grapes paint the wine deep purple and provide
                luscious flavors of black fruits with structured tannins, a full
                body and a long, silky finish. It places us to the right bank of
                Bordeaux, with freshness, notes of spearmint and graphite
                against a backdrop of cedar, fresh tobacco.
              </p>
            </div>
          </div>
          <Image
            src={barells}
            alt="Barells"
            width={400}
            height={400}
            className="absolute bottom-0 right-0 w-[240px] h-auto -translate-y-12"
          />
        </div>
      </div>
      <section
        style={{
          backgroundImage: `url(${bgRed.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="relative z-50 -top-[64px]"
      >
        <Image
          src={whitecut}
          width={400}
          height={400}
          alt="Red Cut"
          className="w-full"
        />
      </section>
    </>
  );
};

export default WineDescription;
