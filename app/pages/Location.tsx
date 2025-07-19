import React from "react";
import Mountain from "../components/Mountain";
import Image from "next/image";
import { background_ouline, wine_bottle } from "../config";

const Location = () => {
  return (
    <>
      <div className="relative z-50 min-h-screen">
        <Mountain />
        <div
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/db4zbyipc/image/upload/v1752839639/Wine-Section_1_oaf4po.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-full min-h-screen flex justify-center items-center pt-20 pb-10"
        >
          <div className="h-full w-full flex justify-center items-center">
            <div
              style={{
                backgroundImage:
                  "url(https://res.cloudinary.com/db4zbyipc/image/upload/v1752839960/Group_50583_dxhkex.svg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="relative z-10 h-full text-center flex flex-col justify-between w-full max-w-4xl"
            >
              <div className="">
                <h1 className="uppercase flex justify-center gap-1 items-center font-clashdisplay font-medium">
                  <span className="h-[0.5em] w-[0.5em] inline-block ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 15"
                      fill="none"
                    >
                      <circle cx="7" cy="7.5" r="7" fill="#10151A" />
                    </svg>
                  </span>
                  The Wines of Fratelli
                </h1>
                <h2 className="uppercase font-clashdisplay font-semibold text-4xl">
                  Crafted in Akluj,
                </h2>
                <h3 className="font-sheffield text-8xl text-[#8E1C21]">
                  Celebrated Worldwide.
                </h3>
              </div>
              <div className="mt-20 flex justify-center items-center">
                <Image
                  src={wine_bottle}
                  alt="Wine Bottle"
                  width={300}
                  height={300}
                  className="h-[480px] w-[250px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
