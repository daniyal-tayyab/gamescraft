import React from "react";

import HeroCommon from "../components/HeroCommon";

import Footer from "../components/Footer";
import PortfolioSection from "../components/portfolio/PortfolioSection";

import {portfolio} from "../utils/portfolio";


const Portfolio = () => {
  return (
    <main className="news">
      <HeroCommon page="Portfolio" />
      <PortfolioSection games={portfolio} />
      <Footer />
    </main>
  );
};

export default Portfolio;
