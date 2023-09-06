import React from "react";

import AboutHero from "../components/about/AboutHero";
import Categories from "../components/about/Categories";
import Products from "../components/about/Products";
import Articles from "../components/about/Articles";
import Partners from "../components/about/Partners";

import Footer from "../components/Footer";

const About = () => {
  return (
    <main className="about">
      <AboutHero />
      <Categories />
      <Products />
      <Articles />
      <Partners />
      <Footer />
    </main>
  );
};

export default About;
