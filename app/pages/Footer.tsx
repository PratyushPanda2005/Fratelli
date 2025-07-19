import React from "react";
import Mountain from "../components/Mountain";
import bgWhite from "@/public/images/bgWhite.png";
import Image from "next/image";
import { redFratelliLogo } from "../config";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${bgWhite.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="flex flex-col gap-24 relative -top-0.5 z-50 px-20"
    >
      <div className="flex w-full justify-between items-center font-clashdisplay">
        <div className="w-1/3">
          <h1 className="w-full">Cultivating a landmark wine region</h1>
          <h1 className="w-full">from India, on the world map.</h1>
        </div>
        <Image
          src={redFratelliLogo}
          alt="Red Fratelli Logo"
          width={400}
          height={400}
          className="h-[2em] w-1/3"
        />
        <div className="w-1/3 flex justify-end items-center">
          <h1 className="font-medium">© Fratelli Wines</h1>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-5xl flex flex-wrap gap-x-20 gap-y-6 justify-center items-center uppercase font-clashdisplay font-medium text-sm">
          <h1>contact</h1>
          <h1>store locator</h1>
          <h1 className="text-[#8E1C21]">our story</h1>
          <h1>our journal</h1>
          <h1>terms & conditions</h1>
          <h1>privacy policy</h1>
          <h1>shipping policy</h1>
          <h1>investor policy</h1>
          <h1>returns & refund policy</h1>
        </div>
      </div>
      <div>
        <Mountain />
      </div>
    </footer>
  );
};

export default Footer;
