import React from 'react'
import { Lato } from "next/font/google";
import { Poppins } from "next/font/google";
import { Red_Hat_Display } from "next/font/google";
import Image from "next/image";

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
function Footer() {
  return (
    <div>      <div className="text-center ">
    <div className="w-[60%] mx-auto text-[2.5rem]">
      <p className={"font-medium text-[#D31C4F] " + lato.className}>
        Unlock invaluable wisdom personalized for{" "}
        <span className="italic bg-gradient-to-b from-[#7F7D7D] via-[#7F7D7D] to-transparent bg-clip-text text-transparent">
          you in our top-notch News 7 blogs
        </span>
      </p>
    </div>
    <div
      className={
        "flex mt-[5rem] text-[1rem] text-[#D31C4F] !font-medium pb-[2rem] mx-[5%] border-b-[1px] border-[#7F7F7F] justify-between " +
        poppins.className
      }
    >
      <div className="w-1/5  flex justify-between mx-auto ">
        <button>About</button>
        <button>Subscribe</button>
      </div>
      <div className="w-2/5 ">
        <p className="font-gliker text-[1.5rem]"> Mother&apos;s Pride</p>
      </div>
      <div className="w-1/5 flex gap-[40%] mx-auto  items-center justify-between">
        <button>Episode</button>
        <button>Insiders</button>
      </div>
    </div>
    <div
      className={
        "text-[#D31C4F] text-[1.125rem] !font-bold flex w-full gap-[5%] justify-center mt-[2rem] " +
        redHat.className
      }
    >
      <button className="flex px-[1.7rem] py-[1.3rem] border-[1px] border-[#D31C4F] rounded-[48px] justify-between w-[10rem] h-[4rem] items-center">
        <Image src="/twitter.svg" width={28} height={10} alt="twitter" />
        <p>Twitter</p>
      </button>
      <button className="flex px-[1rem] py-[1.3rem] border-[1px] border-[#D31C4F] rounded-[48px] justify-between w-[10rem] h-[4rem] items-center">
        <Image src="/insta.svg" width={28} height={10} alt="instagram" />
        <p>Instagram</p>
      </button>
      <button className="flex px-[1rem] py-[1.3rem] border-[1px] border-[#D31C4F] rounded-[48px] justify-between w-[10rem] h-[4rem] items-center">
        <Image src="/facebook.svg" width={28} height={10} alt="fb" />
        <p>Facebook</p>
      </button>
    </div>
  </div></div>
  )
}

export default Footer