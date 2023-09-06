import React from "react";

import NewsHero from "../components/news/NewsHero";
import LatestArticles from "../components/news/LatestArticles";
import Streaming from "../components/news/Streaming";

import Footer from "../components/Footer";
import Maker from "../components/news/Maker";
import HighLights from "../components/news/HighLights";

const News = () => {
  return (
    <main className="news">
      <NewsHero />
      <LatestArticles />
      <Streaming />
      <Maker />
      <HighLights />
      <Footer />
    </main>
  );
};

export default News;
