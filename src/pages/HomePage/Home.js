import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import { InfoSection } from "../../components";
import Pricing from "../../components/Pricing/Pricing";

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Home;
