import React from "react";

import HomeHero from "../components/home/HomeHero";
import Community from "../components/home/Community";
import Avatar from "../components/home/Avatar";
import Land from "../components/home/Land";
import Partners from "../components/home/Partners";
import GetYourNft from "../components/home/GetYourNft";
import Sand from "../components/home/Sand";

import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="home">
      <HomeHero />
      <Community />
      <Avatar />
      <Land />
      <Partners />
      <GetYourNft />
      <Sand />
      <Footer />
    </main>
  );
};

export default Home;
