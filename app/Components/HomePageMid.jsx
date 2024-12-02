"use client";
import React from "react";
import { useState, useRef } from "react";
import Image from "next/image";
import { Lato } from "next/font/google";
import { Poppins } from "next/font/google";
import { Red_Hat_Display } from "next/font/google";
import crazyEyes from "../../public/crazyEyes.gif";
import playredyellow from "../../public/playredyellow.png";
import { motion, AnimatePresence } from "framer-motion";
import Snowfall from "./Snowflake";
import bird from "../../public/bird.gif";
import day from "../../public/day.png";
import parent from "../../public/parent.jpg";
import BubbleAnimation from "./BubbleAnimation";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../styles/HomePageMain.css";

// import required modules
import { EffectCards } from "swiper/modules";
import SpreadingLove from "./SpreadingLove";
import InteractiveStory from "./InteractiveStory";
const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
});
const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

function HomePageMid() {
  const [showImg, setShowImg] = useState("heart");
  const [openImg, setOpenImg] = useState("");
  return (
    <div className="">
      <Snowfall />
      {/* spreading love */}
      <SpreadingLove />
      {/* spreading love */}

      {/* 28 yrs */}
      <div className=" w-full py-[5%] pl-[5%]  flex justify-between relative h-auto my-[4rem] bg-[#e0faff]">
        <div className="w-2/3 h-full absolute left-0 top-0  opacity-15 ">
          <Image
            src="/rainbow.svg"
            layout="fill"
            className="object-fit pt-4"
            alt="rainbow"
          />
        </div>
        <div
          className={
            "lg:w-1/2 xl:w-[60%] text-[1.4rem] lg:text-[1.8rem] text-[#D31C4F] z-10 !font-light " +
            lato.className
          }
        >
          What started in a small room is now a dream spread across 125
          branches! Envisioned & led by a renowned parenting expert & visionary
          in education, Mrs. Sudha Gupta, Mother’s Pride is a trendsetter of
          preschool education with over 28 years of redefining early child
          education in India and blossoming millions of lives.
        </div>
        <div className="hidden lg:flex lg:w-1/2 xl:w-[30%] h-full z-10 absolute right-0 top-0 overflow-hidden">
          <motion.div className="hidden grid-rows-2 grid-cols-2 w-full h-full gap-2 ">
            {/* Tiger Image */}
            <div
              className={`${
                openImg === "tiger" ? "absolute inset-0 z-50" : "relative"
              } w-full h-full overflow-hidden rounded-[20px] `}
              onClick={() => {
                setOpenImg(openImg === "tiger" ? "" : "tiger");
              }}
            >
              <Image
                src="/tiger.jpg"
                alt="tiger"
                width={200}
                height={200}
                className={`w-full h-full cursor-pointer transition-transform duration-700 ${
                  openImg === "tiger" ? "scale-100" : "hover:scale-110"
                }`}
                objectFit="cover"
              />
            </div>

            {/* Boys Image */}
            <div
              className={`${
                openImg === "boys" ? "absolute inset-0 z-50" : "relative"
              } w-full h-full overflow-hidden rounded-[20px] `}
              onClick={() => {
                setOpenImg(openImg === "boys" ? "" : "boys");
              }}
            >
              <Image
                src="/boys.jpg"
                alt="boys"
                width={200}
                height={200}
                className={`w-full h-full cursor-pointer transition-transform duration-700 ${
                  openImg === "boys" ? "scale-100" : "hover:scale-110"
                }`}
                objectFit="cover"
              />
            </div>

            {/* Parent Image */}
            <div
              className={`${
                openImg === "parent" ? "absolute inset-0 z-50" : "relative"
              } w-full h-full overflow-hidden rounded-[20px] `}
              onClick={() => {
                setOpenImg(openImg === "parent" ? "" : "parent");
              }}
            >
              <Image
                src="/parent.jpg"
                alt="parent"
                width={200}
                height={200}
                className={`w-full h-full cursor-pointer transition-transform duration-700 ${
                  openImg === "parent" ? "scale-100" : "hover:scale-110"
                }`}
                objectFit="cover"
              />
            </div>

            {/* Gallery Image */}
            <div
              className={`${
                openImg === "gallery" ? "absolute inset-0 z-50" : "relative"
              } w-full h-full overflow-hidden rounded-[20px] `}
              onClick={() => {
                setOpenImg(openImg === "gallery" ? "" : "gallery");
              }}
            >
              <Image
                src="/gallery.jpg"
                alt="gallery"
                width={200}
                height={200}
                className={`w-full h-full cursor-pointer transition-transform duration-700 ${
                  openImg === "gallery" ? "scale-100" : "hover:scale-110"
                }`}
                objectFit="cover"
              />
            </div>
          </motion.div>

          {/* click heart to image */}
          {/* <AnimatePresence mode="wait">
            {showImg === "heart" && (
              <motion.div
                key="heart"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }} // Smooth exit
                transition={{ duration: 1 }}
                className=" w-[10rem] h-[10rem] m-auto animate-bounce cursor-pointer"
                onClick={() => setShowImg("gallery")}
              >
                <Image
                  src="/heartLogo.png"
                  alt="heart"
                  width={400} // Adjust for smoother handling
                  height={400}
                />
              </motion.div>
            )}

            {showImg === "gallery" && ( */}
              <motion.div
                key="gallery"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
                className="relative w-full h-full cursor-pointer"
                onClick={() => setShowImg("heart")}
              >
                <Image
                  src="/gallery.jpg"
                  alt="gallery"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[40px] p-8"
                />
              </motion.div>
            {/* )}
          </AnimatePresence> */}
        </div>
      </div>

      {/* 28 yrs */}

      <InteractiveStory />
      {/* //bubbles */}
      <div className="w-[100dvw] relative mt-[4rem] bg-white py-[2rem] ">
        <div className="w-[40rem] h-[40rem]">
          <Image
            src="/girlblowing.svg"
            alt="girl"
            layout=""
            width={1200}
            height={500}
            objectFit="cover"
          />
        </div>
        {/* <div className="absolute top-[50%] left-[50%]">
          <BubbleAnimation image="study" />
        </div>
        <div className="absolute top-[0%] left-[50%]">
          <BubbleAnimation image="pedacycle" />
        </div> */}
        <motion.div
          className="absolute top-[6%] left-[22.5%] h-[35rem] w-[35rem] "
          whileInView={{
            scale: [0, 0.2, 0.5, 0.8, 1],
            x: [140, -100, 20, 80, 120],
          }}
          transition={{ duration: 2, ease: "linear", delay: 1 }}
          viewport={{ once: true }}
        >
          <Image src="/bubble.svg" layout="fill" objectFit="fit" alt="bubble" />
          <motion.div
            className="absolute top-[40%] left-[25%] p-[1rem] opacity-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 2 }}
          >
            {/* <Image src={day} objectFit="cover" alt="day" /> */}
            <div className="font-gliker flex gap-[1.2rem]">
              <div className="">
                <p className="text-[2.5rem] text-[#4B8EC4]">5+</p>
                <p className={" " + lato.className}>Awards Gained</p>
              </div>
              <div className="">
                <p className="text-[2.5rem] text-[#4B8EC4]">28+</p>
                <p className={" " + lato.className}>Years of Experience</p>
              </div>
              <div className="">
                <p className="text-[2.5rem] text-[#4B8EC4]">236K+</p>
                <p className={" " + lato.className}>Admissions</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* <div className=" w-full relative mt-[4rem] bg-white py-[2rem]">
        <Image
          src="/girlChild5.svg"
          layout="fit"
          width={1200}
          height={400}
          alt="girl"
        />
        <div className="font-gliker flex absolute top-[37%] left-[37%] gap-[3rem]">
          <div className="">
            <p className="text-[4rem] text-[#4B8EC4]">5+</p>
            <p className={" " + lato.className}>Awards Gained</p>
          </div>
          <div className="">
            <p className="text-[4rem] text-[#4B8EC4]">28+</p>
            <p className={" " + lato.className}>Years of Experience</p>
          </div>
          <div className="">
            <p className="text-[4rem] text-[#4B8EC4]">236K+</p>
            <p className={" " + lato.className}>Admissions</p>
          </div>
        </div>
      </div> */}
      <div className="flex items-center bg-[#e6ebff] relative lg:flex-row flex-col ">
        <div className="w-[80%] lg:w-1/2 relative">
          {/* <div className="absolute w-[10rem] h-[10rem] bottom-[0%] right-[5%]">
            <Image
              src="swipe.gif"
              width={60}
              height={60}
              alt="swipe"
              objectFit="fill"
              className="w-[10rem] h-[10rem]"
            />
          </div> */}
          {/* <Image
            src="/hear.svg"
            className="object-fill w-full h-full"
            layout="fit"
            width={400}
            height={400}
            alt="hear"
          /> */}
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper xl:mx-auto my-[1rem]"
          >
            <SwiperSlide>
              <Image src="/birds.svg" layout="fill" alt="birds" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/boychild1.svg" layout="fill" alt="boy" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/boychild2.svg" layout="fill" alt="boy" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/girlChild.svg" layout="fill" alt="girl" />
            </SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full lg:w-1/2 h-full flex ">
          {/* <motion.div
            className="w-[95%] h-full pl-[5%] absolute opacity-0"
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3, delay: 1 }}
          >
            <Image
              src={parent}
              objectFit="fill"
              className="absolute w-full h-full opacity-50"
              alt="parent"
            />
          </motion.div> */}
          <div className="text-[3.5rem] w-full h-full ml-[1rem] p-2  mt-[10rem] relative ">
            <p className={"text-[#EE2E35] !font-semibold " + lato.className}>
              HEAR FROM OUR{" "}
              <span className="text-[#A8BA53] italic !font-normal mx-1 ">
                PARENTS
              </span>{" "}
              ITSELF
            </p>
            <p className={"text-[1.13rem] text-[#0D4F9E] " + poppins.className}>
              JOIN THE PRIDE
            </p>
          </div>
          <div className="w-[30%] h-full">
            <Image
              src="/girlChild2.svg"
              className="w-[15rem] h-[15rem]"
              objectFit="cover"
              alt="girl"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
      <div className=" lg:flex px-[10%] bg-[#e4f7ff] py-[3rem] justify-between items-center">
        <div className="flex gap-[2rem] flex-col lg:flex-row items-center">
          <div className="w-1/2 h-full ">

          <Image
            src="/curroflove.svg"
            layout="fit"
            width={400}
            height={200}
            alt="love"
          />
          </div>
          <div className="w-1/2 h-full ">

          <Image
            src="/girlwithbook.svg"
            layout="fit"
            width={250}
            height={200}
            alt="girl"
          />
          </div>
        </div>
        <div className=" h-full  flex items-center">
          <div className="px-[5%] bg-[#ffe2df] items-center flex flex-col rounded-[30px] h-[35rem] pt-[2.5rem] mx-auto ">
            <Image
              src="/whythese.svg"
              layout="fit"
              width={320}
              height={200}
              alt="child"
            />
            <Image
              src="/pedacycle.png"
              layout="fit"
              width={330}
              height={200}
              alt="child"
            />
            {/* <Image
              src="/baldchild.svg"
              layout="fit"
              width={230}
              height={200}
              alt="child"
            /> */}
          </div>
        </div>
      </div>
      <div className=" lg:flex bg-[#ffdadb] m-[4rem] rounded-[50px]">
        <div className="w-[40%] p-4 ">
          <Image
            src="/teachingmethodology.svg"
            width={500}
            height={400}
            alt="teaching"
          />
          <Image src="/girlChild.svg" width={300} height={400} alt="child" />
        </div>
        <div className="w-full flex relative">
          <button
            className={
              "bg-[#ffafbb] px-[1.5rem] py-[0.2rem] rounded-[30px] text-[1.5rem] text-[#5A5F9B] !font-semibold " +
              redHat.className
            }
          >
            <span className="text-[2rem]">REGGIO EMILIA</span>
            <p className="text-[1rem] text-black py-3">
              SOMETIMES THE BEST TEACHER IS
            </p>
            <div>
              <Image
                src="/environment.svg"
                width={300}
                height={400}
                alt="env"
              />
            </div>
          </button>
          <button
            className={
              "bg-[#ffd5ff] px-[1.5rem] py-[1rem] rounded-[30px] text-[1.5rem] text-[#5A5F9B] !font-semibold " +
              redHat.className
            }
          >
            <span className="text-[2rem]">MONTESSORI</span>

            <p className="text-[1rem] text-black py-3">GIVE CHILDREN</p>
            <div>
              <Image
                src="/freedom.svg"
                width={300}
                height={400}
                alt="freedom"
              />
            </div>
            <p className="text-[1rem] text-black py-3">
              TO EXPLORE,
              <br />
              LEARNING WILL HAPPEN BY THE WAY.
            </p>
          </button>
          <button
            className={
              "bg-[#e7dcff] px-[1.5rem] py-[1rem] rounded-[30px] text-[1.5rem] text-[#5A5F9B] !font-semibold " +
              redHat.className
            }
          >
            <span className="text-[2rem]">PLAY-BASED LEARNING</span>

            <p className="text-[1rem] text-black py-3">
              BECAUSE WHEN <br /> CHILDREN
            </p>
            <div>
              <Image src="/play.svg" width={200} height={200} alt="play" />
            </div>
            <p className="text-[1rem] text-black py-3">THEY LEARN TOO.</p>
          </button>
          <button
            className={
              "bg-[#c4dbff] px-[1.5rem] py-[1rem] rounded-[30px] text-[1.5rem] text-[#5A5F9B] !font-semibold " +
              redHat.className
            }
          >
            <span className="text-[1.8rem]">EXPERIMENTAL LEARNING</span>

            <p className="text-[1rem] text-black py-3">LEARNING BY DOING IS</p>
            <div>
              <Image
                src="/learning.svg"
                width={200}
                height={200}
                alt="learning"
              />
            </div>
            <p className="text-[1rem] text-black py-3">FOR LIFE.</p>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring" }}
              whileTap={{ scale: 0.8 }}
              className={
                "absolute w-[14rem] h-[5rem] p-2 rounded-[50px] flex items-center bottom-[7%] justify-between px-3 bg-[#c6d770] !font-semibold text-[1.3rem] " +
                redHat.className
              }
            >
              LEARN MORE
              <Image src={playredyellow} className="size-[3rem]" alt="play" />
            </motion.div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePageMid;
