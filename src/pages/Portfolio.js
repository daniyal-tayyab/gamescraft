import React from "react";

import NewsHero from "../components/news/NewsHero";
import HeroCommon from "../components/HeroCommon";
import LatestArticles from "../components/news/LatestArticles";
import Streaming from "../components/news/Streaming";

import Footer from "../components/Footer";
import Maker from "../components/news/Maker";
import HighLights from "../components/news/HighLights";

const Portfolio = () => {
  return (
    <main className="news">
      {/* <NewsHero /> */}
      <HeroCommon />
      <LatestArticles />
      <Streaming />
      <Maker />
      <HighLights />
      <Footer />
    </main>
  );
};

export default Portfolio;
