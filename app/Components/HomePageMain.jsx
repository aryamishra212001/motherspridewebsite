import React from "react";

import Snowfall from "./Snowflake";
import HomePageTop from "./HomePageTop";
import HomePageMid from "./HomePageMid";
import ButterflyAnimation from "./ButterFlyEffect";
import PuzzleAnimation from "./PuzzleAnimation";
function HomePageMain() {
  return (
    <div>
      <HomePageTop/>
      <HomePageMid/>
      <Snowfall/>
      {/* <ButterflyAnimation/> */}
      {/* <PuzzleAnimation/> */}
    </div>
  );
}

export default HomePageMain;
