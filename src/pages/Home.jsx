import React from "react";

import HeroSection from "../components/ui/HeroSection";

import LiveAuction from "../components/ui/Live-auction/LiveAuction";
import OwnerSection from "../components/ui/Owner-section/OwnerSection";

import Trending from "../components/ui/Trending-section/Trending";

import StepSection from "../components/ui/Step-section/StepSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <OwnerSection />
      <Trending />
      <StepSection />
    </>
  );
};

export default Home;