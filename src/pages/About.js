import React from "react";

import AboutHero from "../components/about/AboutHero";

import Footer from "../components/Footer";
import AboutContent from "../components/about/AboutContent";
import Review from "../components/home/Review";
import WhyChooseUs from "../components/about/WhyChooseUs";

const About = () => {
  return (
    <main className="about">
      <AboutHero />
      <AboutContent />
      <WhyChooseUs />
      <Review/>
      <Footer />
    </main>
  );
};

export default About;
