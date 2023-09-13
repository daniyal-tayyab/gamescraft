import React, { useRef } from "react";

import HomeHero from "../components/home/HomeHero";

import Footer from "../components/Footer";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Portfolio from "../components/home/Portfolio";
import Review from "../components/home/Review";
import StatsComponents from "../components/StatsComponents";

const Home = () => {
  const ref = useRef(null);
  return (
    <main className="home" ref={ref}>
      <HomeHero />
      <About reference={ref} />
      <StatsComponents />
      <Services reference={ref}/>
      <Portfolio />
      <Review />
      <Footer />
    </main>
  );
};

export default Home;
