import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lato } from "next/font/google";
import { Red_Hat_Display } from "next/font/google";
import { useState } from "react";
import bird from "../../public/bird.gif";
import { Poppins } from "next/font/google";
import playredyellow from "../../public/playredyellow.png";

const redHat = Red_Hat_Display({
    subsets: ["latin"],
    weight: ["400"],
  });
const lato = Lato({
    subsets: ["latin"],
    weight: ["400"],
  });
  const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400"],
  });
function SpreadingLove() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <div className="flex justify-between mx-[5%] mt-[4rem] mb-[2rem] items-center flex-col md:flex-row ">
        <div className="relative text-center">
          <p
            className={
              "text-[#D31C4F] text-[4rem] !font-extrabold " + lato.className
            }
          >
            Spreading{" "}
            <span className={"text-black italic !font-normal "}>Love</span>{" "}
            Since 28 <span className="text-[3.5rem]">+</span> Years
          </p>
          <div className="absolute -right-[5%] -top-[15%] size-[3.8rem]">
            <Image src={bird} className="size-full" alt="bird" />
          </div>
        </div>
        <motion.button
          className={
            "text-black border-2 border-black text-[1.2rem] py-[0.5rem] px-[2rem] rounded-[6rem] w-[15rem] h-[4rem] !font-bold my-[2rem] " +
            redHat.className
          }
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
          ABOUT US
        </motion.button>
      </div>
      <div className="flex flex-wrap gap-[1rem] justify-between mx-[3%] ">
        <div className="border-[1px] lg:w-[28.625rem] h-[9.625rem] bg-[#F8F8F8] rounded-[3rem] flex p-[1rem] gap-[1rem] relative mx-auto w-[38rem] ">
          <div className="size-[6rem] md:size-[8rem] flex items-center ">
            <Image
              src="/boychild.svg"
              className="rounded-[2rem] object-cover"
              alt="childavatar1"
              width={150}
              height={150}
            />
          </div>
          <div className="h-full">
            <p
              className={
                "text-[#D31C4F] text-[1.88rem] !font-medium " + lato.className
              }
            >
              Who We are?
            </p>
            <p className="text-[1.125rem]">Lorem ipsum dolor sit </p>
            <p
              className={
                "mt-[1rem] text-[1.15rem] md:text-[1.5rem] !font-semibold " +
                poppins.className
              }
            >
              Know More
            </p>
          </div>
          <div className="absolute right-[5%] bottom-[5%]">
            <Image
              src={playredyellow}
              className="size-[3.5rem] md:size-[4rem] cursor-pointer"
              alt="play"
            />
          </div>
        </div>
        <div className="border-[1px] lg:w-[28.625rem] h-[9.625rem] bg-[#F8F8F8] rounded-[3rem] flex p-[1rem] gap-[1rem] relative mx-auto w-[38rem]">
          <div className="size-[5rem] p-2">
            <Image
              src="/childwithmarker.svg"
              className=" object-cover"
              alt="childavatar1"
              width={150}
              height={150}
            />
          </div>
          <div className="h-full">
            <p
              className={
                "text-[#D31C4F] text-[1.88rem] !font-medium " + lato.className
              }
            >
              Our Vision
            </p>
            <p className="text-[1.125rem]">Lorem ipsum dolor sit </p>
            <p
              className={
                "mt-[1rem] text-[1.15rem] md:text-[1.5rem] !font-semibold " +
                poppins.className
              }
            >
              Know More
            </p>
          </div>
          <div className="absolute right-[5%] bottom-[5%]">
            <Image
              src={playredyellow}
              className="size-[3.5rem] md:size-[4rem] cursor-pointer"
              alt="play"
            />
          </div>
        </div>
        <div className="border-[1px] lg:w-[28.625rem] h-[9.625rem] bg-[#F8F8F8] rounded-[3rem] flex p-[1rem] gap-[1rem] relative mx-auto w-[38rem]">
          <div className="size-[4.8rem] p-1">
            <Image
              src="/boywithboard.png"
              className=" object-cover"
              alt="childavatar1"
              width={150}
              height={150}
            />
          </div>
          <div className="h-full">
            <p
              className={
                "text-[#D31C4F] text-[1.88rem] !font-medium " + lato.className
              }
            >
              Our Mission
            </p>
            <p className="text-[1.125rem]">Lorem ipsum dolor sit </p>
            <p
              className={
                "mt-[1rem] text-[1.15rem] md:text-[1.5rem] !font-semibold " +
                poppins.className
              }
            >
              Know More
            </p>
          </div>
          <div className="absolute right-[5%] bottom-[5%]">
            <Image
              src={playredyellow}
              className="size-[3.5rem] md:size-[4rem] cursor-pointer"
              alt="play"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpreadingLove;
