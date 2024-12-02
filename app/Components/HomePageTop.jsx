"use client";
import React from "react";
import { useState } from "react";
import { Lato } from "next/font/google";
import { FaPlay } from "react-icons/fa6";
import Image from "next/image";
import hello from "../../public/hello.png";
import { Red_Hat_Display } from "next/font/google";
import blossoms from "../../public/blossom1.jpg";
import castle from "../../public/castle1.png";

import Orbit from "./orbit";
import { motion } from "framer-motion";
const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
});

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400"],
});

function HomePageTop() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="h-[50vh] lg:h-[60dvh] w-full flex bg-[#fce7df] relative px-[2%] justify-between">
      {/* heartupdown */}
      <motion.div
        className="absolute right-[7%] -top-[60%]  flex items-center h-[25rem] flex-col "
        animate={{ y: [-140, 80, -140] }}
        transition={{
          duration: 6,
          ease: "linear",
          repeat: Infinity,
          times: [0.1, 0.5, 1],
        }}
      >
        <div className="h-[85%] border-2 border-[#E72F4E]"></div>
        <Image
          src="/heartLogo.png"
          width={60}
          height={60}
          layout=""
          alt="spider"
          className="w-[4rem] h-[4rem] z-30"
        />
      </motion.div>
      {/* heartupdown */}
      <div className=" w-[30%] h-full  p-2 ">
        <div className="relative font-gliker text-[4rem] font-normal leading-[4.8rem] text-left text-[black] w-[100%] h-[80%] ">
          <div className="absolute z-10 ">
            <span className="text-[#E72F4E]">Welcome </span>to the{" "}
            <span>Most</span>
            <div className="flex relative ">
              <Image
                src="/lovepink.svg"
                width={280}
                height={200}
                className=""
                alt="love"
              />
              <p className="font-gliker !font-normal text-[#ED4769] text-[9rem] mt-[4%] shadow-none [text-shadow:none] ">
                d
              </p>
            </div>
            <p>PreSchool</p>
          </div>
          <div
            style={{
              WebkitTextStroke: "20px white", // White stroke outside the text
              textStroke: "20px white", // Fallback for non-Webkit browsers
              WebkitTextFillColor: "#E72F4E", // Ensure text inside is black
              textFillColor: "#E72F4E", // Fallback for non-Webkit browsers
            }}
            className="absolute font-gliker text-[4rem] font-normal leading-[4.8rem] text-left [text-shadow:_0px_4px_4px_rgba(0,0,0,0.25)]"
          >
            <span className="text-[#E72F4E]">Welcome </span>to the{" "}
            <span>Most</span>
            <div className="flex relative ">
              <Image
                src="/lovepink.svg"
                width={280}
                height={200}
                className=""
                alt="love"
              />
              <p className="font-gliker !font-normal text-[#ED4769] text-[9.5rem] mt-[4.5%] shadow-none [text-shadow:none] "></p>
            </div>
            <p>PreSchool</p>
          </div>
        </div>
        <div className="text-black font-gliker leading-[100%] text-left text-[3.5rem] [text-shadow:_-5.5px_-5.5px_0px_white,_5.5px_-5.5px_0px_white,_-5.5px_5.5px_0px_white,_5.5px_5.5px_0px_white,_0px_5.5px_5.5px_rgba(0,0,0,0.5)] hidden">
          <span className="text-[#E72F4E] mr-3 [text-shadow:_-5.5px_-5.5px_0px_white,_5.5px_-5.5px_0px_white,_-5.5px_5.5px_0px_white,_5.5px_5.5px_0px_white,_0px_5.5px_5.5px_rgba(0,0,0,0.5)]">
            Welcome
          </span>
          to the
          <span className="text-[#0D4F9E] mx-5 [text-shadow:_-5.5px_-5.5px_0px_white,_5.5px_-5.5px_0px_white,_-5.5px_5.5px_0px_white,_5.5px_5.5px_0px_white,_0px_5.5px_5.5px_rgba(0,0,0,0.5)]">
            Most
          </span>
          <p className="">PreSchool</p>
        </div>
        <div className=" mt-[4%] w-full">
          <motion.button
            className={` bg-[#E72F4E] rounded-[30px] pl-7 pr-3 py-3 text-[1rem] cursor-pointer flex items-center justify-between text-white !font-bold w-[80%] sm:w-[14.5rem] md:w-[18.75rem] h-[4.5rem] ${redHat.className}`}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.1 }, // Faster response on tap
            }}
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false
            animate={{
              scale: isHovered ? 1.1 : 1, // Conditionally set scale based on hover state
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            ENROLL NOW
            <FaPlay className="rounded-full bg-white text-[#E72F4E] size-8 p-2" />
          </motion.button>
        </div>
      </div>

      <div className="w-[60%] h-full flex items-center  justify-center relative  ">
          <div className=" w-[20rem] h-[20rem] relative ml-[20%]">
            <Image
              src="/girlChild3.svg"
              fill
              alt="girlchild"
              // className="w-[14rem] h-[14rem]"
              // width={200}
              // height={200}
            />
            <motion.div className="absolute -top-[10%] -right-[10%] animate-bounce">
              <Image src={hello} alt="hello" className="size-[80%]" />
            </motion.div>
          </div>
      </div>
    </div>
  );
}

export default HomePageTop;

{
  // <div className="relative font-gliker text-[4rem] font-normal leading-[4.8rem] text-left text-[black] w-[80%] h-[80%] ">
  //           <div className="absolute z-10 ">
  //             <span className="text-[#E72F4E]">Welcome </span>to the{" "}
  //             <span>Most</span>
  //             <div className="flex relative ">
  //               <Image
  //                 src="/lovepink.svg"
  //                 width={280}
  //                 height={200}
  //                 className=""
  //                 alt="love"
  //               />
  //               <p className="font-gliker !font-normal text-[#ED4769] text-[9rem] mt-[4%] shadow-none [text-shadow:none] ">
  //                 d
  //               </p>
  //             </div>
  //             <p>PreSchool</p>
  //           </div>
  //           <div
  //             style={{
  //               WebkitTextStroke: "20px white", // White stroke outside the text
  //               textStroke: "20px white", // Fallback for non-Webkit browsers
  //               WebkitTextFillColor: "#E72F4E", // Ensure text inside is black
  //               textFillColor: "#E72F4E", // Fallback for non-Webkit browsers
  //             }}
  //             className="absolute font-gliker text-[4rem] font-normal leading-[4.8rem] text-left [text-shadow:_0px_4px_4px_rgba(0,0,0,0.25)]"
  //           >
  //             <span className="text-[#E72F4E]">Welcome </span>to the{" "}
  //             <span>Most</span>
  //             <div className="flex relative ">
  //               <Image
  //                 src="/lovepink.svg"
  //                 width={280}
  //                 height={200}
  //                 className=""
  //                 alt="love"
  //               />
  //               <p className="font-gliker !font-normal text-[#ED4769] text-[9.5rem] mt-[4.5%] shadow-none [text-shadow:none] "></p>
  //             </div>
  //             <p>PreSchool</p>
  //           </div>
  //         </div>
  //         <div className="text-black font-gliker leading-[100%] text-left text-[3.5rem] [text-shadow:_-5.5px_-5.5px_0px_white,_5.5px_-5.5px_0px_white,_-5.5px_5.5px_0px_white,_5.5px_5.5px_0px_white,_0px_5.5px_5.5px_rgba(0,0,0,0.5)] hidden">
  //           <span className="text-[#E72F4E] mr-3 [text-shadow:_-5.5px_-5.5px_0px_white,_5.5px_-5.5px_0px_white,_-5.5px_5.5px_0px_white,_5.5px_5.5px_0px_white,_0px_5.5px_5.5px_rgba(0,0,0,0.5)]">
  //             Welcome
  //           </span>
  //           to the
  //           <span className="text-[#0D4F9E] mx-5 [text-shadow:_-5.5px_-5.5px_0px_white,_5.5px_-5.5px_0px_white,_-5.5px_5.5px_0px_white,_5.5px_5.5px_0px_white,_0px_5.5px_5.5px_rgba(0,0,0,0.5)]">
  //             Most
  //           </span>
  //           <p className="">PreSchool</p>
  //         </div>
}
