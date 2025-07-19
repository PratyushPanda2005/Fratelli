"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Vineyard from "@/public/images/vineyard.jpg";
import Grapeyard from "@/public/images/grapeyard.png";
import Dryleaves from "@/public/images/dryleaves.png";
import Barell from "@/public/images/Barell.png";



const Carousel = () => {
  return (
    <div className="relative z-50 min-h-screen ">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper h-[100vh]"
      >
        <SwiperSlide className="bg-white relative">
          <Image
            src={Vineyard}
            alt="Soil Background"
            fill
            className="w-full h-full object-cover"
          />
          <div
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
            }}
            className="absolute inset-0 w-full h-full mix-blend-multiply opacity-80"
          ></div>
          <div className="absolute top-0 w-full h-full pt-24">
            <h1 className="uppercase flex justify-center gap-1 items-center font-clashdisplay font-medium text-white">
              <span className="h-[0.5em] w-[0.5em] inline-block ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 15"
                  fill="none"
                >
                  <circle cx="7" cy="7.5" r="7" fill="#ffffff" />
                </svg>
              </span>
              The Valley Whispers
            </h1>
            <h2 className="uppercase font-clashdisplay font-semibold text-white text-4xl text-center">
              Where Silence
            </h2>
            <h3 className="font-sheffield text-8xl text-white text-center">
              Spoke of Possibility
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white relative">
          <Image
            src={Grapeyard}
            alt="Soil Background"
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 w-full h-full pt-24">
            <h1 className="uppercase flex justify-center gap-1 items-center font-clashdisplay font-medium text-white">
              <span className="h-[0.5em] w-[0.5em] inline-block ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 15"
                  fill="none"
                >
                  <circle cx="7" cy="7.5" r="7" fill="#ffffff" />
                </svg>
              </span>
              The Valley Whispers
            </h1>
            <h2 className="uppercase font-clashdisplay font-semibold text-white text-4xl text-center">
              Where Silence
            </h2>
            <h3 className="font-sheffield text-8xl text-white text-center">
              Spoke of Possibility
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white relative">
          <Image
            src={Dryleaves}
            alt="Soil Background"
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 w-full h-full pt-24">
            <h1 className="uppercase flex justify-center gap-1 items-center font-clashdisplay font-medium text-white">
              <span className="h-[0.5em] w-[0.5em] inline-block ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 15"
                  fill="none"
                >
                  <circle cx="7" cy="7.5" r="7" fill="#ffffff" />
                </svg>
              </span>
              The Valley Whispers
            </h1>
            <h2 className="uppercase font-clashdisplay font-semibold text-white text-4xl text-center">
              Where Silence
            </h2>
            <h3 className="font-sheffield text-8xl text-white text-center">
              Spoke of Possibility
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white relative">
          <Image
            src={Barell}
            alt="Soil Background"
            fill
            className="w-full h-full object-cover"
          />
          
          <div className="absolute top-0 w-full h-full pt-24">
            <h1 className="uppercase flex justify-center gap-1 items-center font-clashdisplay font-medium text-white">
              <span className="h-[0.5em] w-[0.5em] inline-block ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 15"
                  fill="none"
                >
                  <circle cx="7" cy="7.5" r="7" fill="#ffffff" />
                </svg>
              </span>
              The Valley Whispers
            </h1>
            <h2 className="uppercase font-clashdisplay font-semibold text-white text-4xl text-center">
              Where Silence
            </h2>
            <h3 className="font-sheffield text-8xl text-white text-center">
              Spoke of Possibility
            </h3>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Carousel;
