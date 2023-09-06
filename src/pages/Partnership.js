import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import HomeHero from "../components/home/HomeHero";
import Footer from "../components/Footer";
import ImageContentGrid from "../components/partnership/ImageContentGrid";
import ReverseGrid from "../components/partnership/ReverseGrid";
import Button from "../components/Button";
import PartnerSlide from "../components/partnership/PartnerSlide";
import { slider } from "../utils/partnersSlider";

const Partnership = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      console.log(newWidth);
      setWidth(newWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    updateWindowDimensions();
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <main className="partnership">
      <HomeHero />
      <section className="partnership__section">
        <h1>Work with the experts in the Metaverse</h1>
        <ImageContentGrid />
        <ReverseGrid />
      </section>
      <section className="partnership__services">
        <h2>Discover our Agency Partners’ services</h2>
        <p>
          Agency Partners have a diverse range of industry expertise and
          technical knowledge in The Sandbox ecosystem. They qualify for
          specific criteria recognizing the quality of work.
        </p>
        <Button buttonType="inverted">Find Agency Partner</Button>
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
              <PartnerSlide item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <Footer />
    </main>
  );
};

export default Partnership;
