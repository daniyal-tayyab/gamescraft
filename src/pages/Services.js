import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import useWindowDimensions from "../hooks/getWindowsDimensions";

import Footer from "../components/Footer";
import ImageContentGrid from "../components/services/ImageContentGrid";
import ReverseGrid from "../components/services/ReverseGrid";
import ImageSlide from "../components/services/ImageSlide";
import { slider } from "../utils/servicesData";
import HeroCommon from "../components/HeroCommon";

const Services = () => {
  const { width } = useWindowDimensions();

  useEffect(() => {
    window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
  }, []);

  return (
    <main className="partnership">
      <HeroCommon page="Services"/>
      <section className="partnership__services">
        <h2>Discover our services</h2>
        {/* <p>
          Agency Partners have a diverse range of industry expertise and
          technical knowledge in The Sandbox ecosystem. They qualify for
          specific criteria recognizing the quality of work.
        </p> */}
        {/* <Button buttonType="default">Find Agency Partner</Button> */}
        <Swiper
          slidesPerView={width > 710 ? 2 : "auto"}
          spaceBetween="70px"
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slider.map((item, index) => (
            <SwiperSlide key={index}>
              <ImageSlide item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="partnership__section">
        <h1>Work with the experts in the Metaverse</h1>
        <ImageContentGrid />
        <ReverseGrid />
      </section>
      <Footer />
    </main>
  );
};

export default Services;
