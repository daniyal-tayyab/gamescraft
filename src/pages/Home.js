import React, { useRef } from "react";

import HomeHero from "../components/home/HomeHero";

import Footer from "../components/Footer";
import About from "../components/home/About";

const Home = () => {
  const ref = useRef(null);
  return (
    <main className="home" ref={ref}>
      <HomeHero />
      <About reference={ref}/>
      <Footer />
    </main>
  );
};

export default Home;
