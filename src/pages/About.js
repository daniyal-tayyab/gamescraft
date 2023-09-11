import React from "react";

import AboutHero from "../components/about/AboutHero";

import Footer from "../components/Footer";
import AboutContent from "../components/about/AboutContent";
import StatsComponents from "../components/StatsComponents";
import Review from "../components/home/Review";

const About = () => {
  return (
    <main className="about">
      <AboutHero />
      <AboutContent />
      <StatsComponents />
      <Review/>
      <Footer />
    </main>
  );
};

export default About;
