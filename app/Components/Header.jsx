"use client";
import React, { useState } from "react";
// import logo from "../../public/logo.png";
import Image from "next/image";
import { Lato } from "next/font/google";
import { Red_Hat_Display } from "next/font/google";
import { right } from "../../public/right.png";

import { FaHandPointRight } from "react-icons/fa";
const red_hat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["700"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
function Header() {
  const [menuBar,setmenuBar]=useState('');
  return (
    <div className="w-full h-[8rem] bg-[#fce7df] sticky top-0 z-20 ">
      <div
        className={"flex mx-[2%] h-full justify-between sm:gap-[5%] " + lato.className}
      >
        <div className=" flex items-center justify-between w-[20%] sm:w-[40%] md:w-[30%] ">
          <div className="flex items-center justify-around text-center h-full sm:w-full gap-[2%] flex-col sm:flex-row text-[1rem] md:text-[1.25rem] relative " >
            <div onMouseEnter={()=>setmenuBar('about')}  onMouseLeave={()=>setmenuBar('')}>
            <button >
              About
            </button>
            {menuBar=='about' &&
            <div className="absolute w-[95vw] top-[55%] ml-[5%] left-[0%]">
            <div className="mt-[2rem] bg-[#ff9cad]  h-[20rem] rounded-[20px] flex w-full">
              <div className="w-[20%] border-r-2 border-white h-full">
                <Image
                  src="/heartLogo.png"
                  width={120}
                  height={220}
                  className="mx-auto mt-[20%] w-[10rem] h-[9rem]"
                  alt="heart"
                  objectFit="cover"
                />
              </div>
              <div className="w-[80%] ">
                <div className=" w-[100%] mt-[4%] flex ">
                  <p className="font-gliker text-[4rem] text-white ml-[10%] !font-bold">
                    Discover
                  </p>
                  <div className="w-[70%]">
                    <div
                      className={
                        "text-white text-[1.5rem] pl-[20%] flex gap-[2rem] items-center italic " +
                        lato.className
                      }
                    >
                      Curriculum Of Love{" "}
                      <FaHandPointRight className="size-[3.5rem]" />
                      <div className="text-[1.15rem] pt-[2%] flex flex-col gap-[0.5rem] items-start ">
                        <button>Curriculum Overview </button>
                        <button>Learning Levels </button>
                        <button>A Day at Mother’s Pride</button>
                      </div>
                    </div>
                    <div
                      className={
                        "text-white text-[1.5rem] pl-[20%] flex items-center italic mt-[1rem] " +
                        lato.className
                      }
                    >
                      Blog & News{" "}
                      <FaHandPointRight className="size-[3.5rem] ml-[15%] mr-[5.5%]" />
                      <div className="text-[1.15rem] pt-[2%] flex flex-col gap-[0.5rem] items-start ">
                        <button>News & Updates</button>
                        <button>Insights from the Pride</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>}
            </div>
            <div onMouseEnter={()=>setmenuBar('explore')}  onMouseLeave={()=>setmenuBar('')}>

            <button >
              Explore
            </button>
            {menuBar=='explore' &&
                        <div className="absolute w-[95vw] top-[55%] ml-[5%] left-[0%]">
            <div className="mt-[2rem] bg-[#45C2CC]  h-[20rem] rounded-[20px] flex w-full">
              {/* <div className="absolute w-[90vw] bg-[#45C2CC] top-[100%] h-[20rem] rounded-[20px] ml-[20%] left-[0%] flex"> */}
                <div className="w-[30%] flex items-center justify-center flex-col">
                  <Image src="/castle1.png" width={220} height={150} alt="castle"/>
                  <p className="font-gliker text-[4rem] text-white !font-bold ">
                    Explore{" "}
                  </p>
                </div>
                <div className={"grid grid-cols-2 w-[70%]  mt-[2rem] text-white " + lato.className
                        }>
                  <div className="flex px-[1rem] justify-between w-full">
                    <div className="flex justify-between w-1/2">
                      <p
                        className=
                          "text-[1.5rem] italic "
                      >
                        Who we are
                      </p>
                      <FaHandPointRight className="size-[3.5rem]" />
                    </div>
                    <div className="flex flex-col items-start text-[1rem]  w-1/2 pl-[1.5rem]">
                      <button>Vision</button>
                      <button>Philosphy “Love Blossoms Here”</button>
                      <button>Why Mother’s Pride</button>
                      <button>Leadership</button>
                      <button>Our Loving Experts</button>
                    </div>
                  </div>
                  <div className="flex px-[1rem] justify-between w-full">
                    <div className="flex justify-between w-1/2">
                      <p
                        className=
                          "text-[1.5rem] italic"
                      >
                        Fun & <br/>Adventure
                      </p>
                      <FaHandPointRight className="size-[3.5rem]" />
                    </div>
                    <div className="flex flex-col items-start text-[1rem]  w-1/2 pl-[1.5rem]">
                      <button>Play, Learn, Shine</button>
                      <button>Stage Shows & Performances</button>
                      <button>Sports & Activities</button>
                      <button>Excursion & Adventures</button>
                    </div>
                  </div>
                  <div className="flex px-[1rem] justify-between w-full">
                    <div className="flex justify-between w-1/2">
                      <p
                        className=
                          "text-[1.5rem] italic w-[60%]"
                      >
                        Events & Celebrations
                      </p>
                      <FaHandPointRight className="size-[3.5rem]" />
                    </div>
                    <div className="flex flex-col items-start text-[1rem]  w-1/2 pl-[1.5rem]">
                      <button>“Every Day’s a Party!”</button>
                      <button>Annual Fest</button>
                      <button>Festivals</button>
                      <button>Special Days & Celebrations</button>
                    </div>
                  </div>
                  <div className="flex px-[1rem] justify-between w-full text-white">
                    <div className="flex justify-between w-1/2">
                      <p
                        className=
                          " text-[1.5rem] italic "
                      >
                        Kids Gallery
                      </p>
                      <FaHandPointRight className=" size-[3.5rem]" />
                    </div>
                    <div className="flex flex-col items-start text-[1rem] w-1/2 pl-[1.5rem]">
                      <button>Photos</button>
                      <button>Videos</button>
                    </div>
                  </div>
                </div>
              </div>
              </div>}
              </div>
            <button>
              Gallery
            </button>
          </div>
        </div>
        <div className="lg:w-[30%]">

        <div className=" flex items-center justify-center  w-[8rem] sm:w-[15rem] h-full ">
          <Image
            src="/logo.svg"
            objectFit="cover"
            alt="mothers pride logo"
            width={200}
            height={55}
          />
        </div>
        </div>
        <div className=" text-center my-auto ">
          <button
            className={
              "border-[1px] border-[#0C99B4] text-[#0C99B4] w-[5.5rem] h-[2rem] text-[0.7rem] md:h-[4rem] rounded-[30px] md:w-[13.33rem] md:text-[1.125rem] md:py-[0.5rem] md:px-[2rem] !font-bold " +
              red_hat.className
            }
          >
            Parents Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
