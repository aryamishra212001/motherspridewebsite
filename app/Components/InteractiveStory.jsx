import React, { useState } from "react";
import { Lato } from "next/font/google";
import { Red_Hat_Display } from "next/font/google";
import crazyEyes from "../../public/crazyEyes.gif";
import Image from "next/image";
import { motion } from "framer-motion";
const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
});
function InteractiveStory() {
  const [hoveredEl, setHoveredEl] = useState("fun");
  return (
    <div>
      {" "}
      <div className="ml-[2.6%] relative overflow-hidden ">
        {/* <div className="absolute w-[full] h-full top-[20%] -right-[17.5%] border-2 border-red-800 ">
      <Image
        src="/girlChild4.svg"
        layout="fit"
        width={1400}
        height={600}
        alt="girl"
        />
    </div> */}
        <p
          className={
            "!font-extrabold text-[#D31C4F] text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] " +
            lato.className
          }
        >
          Our Interactive <span className="!font-normal">Gallery</span>
        </p>
        <motion.div
          className="absolute w-[full] h-full top-[7%] sm:top-[4%] lg:top-[20%]  -right-[17.5%] "
          animate={{ y: [0, 10, 20, 10, 0] }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
            times: [0.1, 0.5, 1],
          }}
        >
          <div className="w-[100%] h-[10rem] sm:h-[5rem] ">
            <Image
              src="/girlChild4.svg"
              objectFit="cover"
              width={1400}
              height={600}
              alt="girl"
            />
          </div>
        </motion.div>
        <div className=" lg:flex gap-[2rem] mt-[10rem] lg:mt-[5rem] relative w-[95%] sm:w-[76%] ml-1 mb-1  h-[32.5rem] bg-white">
          <div className="absolute -top-[5%] lg:-top-[18%] left-0 z-10">
            <Image src={crazyEyes} alt="crazyeyes" />
          </div>
          <motion.div
            className={`w-[100%] sm:w-[80%] h-full bg-[#b1d4ff] rounded-[3rem] relative p-[2rem] cursor-pointer  ${
            hoveredEl === 'fun' ? 'flex-[1.5]' : 'flex-[1] transition-all'
          }`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring",duration:1 }}
            onMouseEnter={()=>setHoveredEl('fun')}
          >
            <Image
              src="/play.svg"
              width={110}
              height={180}
              className="absolute right-[10%] top-[10%]"
              alt="play"
            />
            <Image
              src="/physical.svg"
              width={110}
              height={180}
              className="absolute right-[10%] top-[18%]"
              alt="physical"
            />
            <p
              className={
                "text-[3.2rem] w-[70%] text-white !font-extrabold " +
                lato.className
              }
            >
              Fun & Adventure
            </p>
            <button
              className={
                " text-[1.5rem] text-[#d31c3e] bg-white rounded-[2rem] py-[0.5rem] px-[1rem] mt-[1.2rem] " +
                redHat.className
              }
            >
              1.6 million streams
            </button>
            <div className="absolute w-[95%] h-1/2 left-[2%] ">
              <Image
                src="/rainbow.svg"
                layout="fill"
                className="object-fit pt-4 px-2"
                alt="rainbow"
              />
            </div>
          </motion.div>
          {/* <div className=" flex h-[32.5rem] gap-[1rem] w-[65%] "> */}
          <motion.div
          //   className={`flex-1 h-full bg-[#ffabc3] rounded-[3rem] cursor-pointer  ${
          //   hoveredEl === 'fun' ? 'flex-[1.5]' : 'flex-[1]'
          // }`
          className={`flex-1 h-full bg-[#ffabc3] rounded-[3rem] cursor-pointer  ${
            hoveredEl === 'kids' ? 'flex-[1.5]' : 'flex-[1]'
          }`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring",duration:1 }}
            onMouseEnter={()=>setHoveredEl('kids')}

          >
            <p
              className={
                "text-[2.1rem] w-[70%] text-white !font-extrabold m-[10%] " +
                lato.className
              }
            >
              Kids & Gallery
            </p>
            <div className="h-2/3 relative flex flex-col">
              <div className="flex items-center justify-center space-x-2 absolute top-[52%] left-[20%] font-gliker text-[#0C99B4] -rotate-[25deg]   ">
                <span className="text-[2.4rem]">M</span>
                <span className="text-[1.6rem]">A,</span>
                <span className="text-[1.3rem]">P</span>
                <span className="text-[0.8rem]">A</span>
              </div>
              <div className="m-[10%]">
                <Image
                  src="/loveWhite.svg"
                  layout="fit"
                  width={120}
                  height={180}
                  alt="love"
                />
              </div>
              <div className=" h-1/2  ml-[50%] ">
                <Image
                  src="/openMouth.svg"
                  layout="fit"
                  width={100}
                  height={180}
                  alt="boy"
                />
              </div>
              <div className=" h-1/2 mt-[30%] ">
                <Image
                  src="/girlChild.svg"
                  layout="fit"
                  width={90}
                  height={180}
                  alt="girl"
                />
              </div>
              {/* <div className="ml-[50%] -mt-[40%]">
              <Image
                src="/youngKids.png"
                layout="fit"
                width={100}
                height={180}
              />
            </div> */}
            </div>
          </motion.div>
          <motion.div
          className={`flex-1 h-full bg-[#FFE7C4] rounded-[3rem] cursor-pointer  ${
            hoveredEl === 'games' ? 'flex-[1.5]' : 'flex-[1]'
          }`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring",duration:1 }}
            onMouseEnter={()=>setHoveredEl('games')}
          >
            <p
              className={
                "text-[2.1rem] w-[100%] text-white !font-extrabold m-[10%] " +
                lato.className
              }
            >
              Games & Activities
            </p>
            <div>
              <div className="ml-[20%]">
                <Image
                  src="/childwithmarker.svg"
                  layout="fit"
                  width={155}
                  height={180}
                  alt="child"
                />
              </div>
              {/* <div className="ml-[2%]">
              <Image
                src="/littleGirlPlaying.png"
                layout="fit"
                width={120}
                height={180}
              />
            </div> */}
            </div>
          </motion.div>
          <motion.div
          className={`flex-1 h-full bg-[#C0F4FFFF] rounded-[3rem] cursor-pointer  ${
            hoveredEl === 'awards' ? 'flex-[1.5]' : 'flex-[1]'
          }`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring",duration:1 }}
            onMouseEnter={()=>setHoveredEl('awards')}
          >
            <p
              className={
                "text-[2.1rem] w-[90%] text-white !font-extrabold m-[10%] " +
                lato.className
              }
            >
              Awards & Campaigns
            </p>
            <div>
              <div className="w-fit ml-auto mr-[2%]">
                <Image
                  src="/trophyAward.png"
                  layout="fit"
                  width={120}
                  height={180}
                  alt="trophy"
                />
              </div>
              <div className="ml-[10%]">
                <Image
                  src="/girlwithbook.svg"
                  layout="fit"
                  width={120}
                  height={180}
                  alt="girl"
                />
              </div>
            </div>
          </motion.div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default InteractiveStory;
