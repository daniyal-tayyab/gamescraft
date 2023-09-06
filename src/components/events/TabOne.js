import React from "react";

import Footer from "../Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import SlideOne from "../home/SlideOne";
import SlideTwo from "../home/SlideTwo";

import { ReactComponent as SearchIcon } from "../../images/svgs/search-icon.svg";
import Tag from "../Tag";

import { eventsPageTags } from "../../utils/dummyData";
import CardSection from "./CardSection";

import { eventsList } from "../../utils/eventsData";

const TabOne = () => {
  return (
    <div className="tab-one">
      <div className="tab-one__slider">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <SlideTwo />
          </SwiperSlide>
          <SwiperSlide>
            <SlideOne />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="tab-one__search">
        <div className="tab-one__search__tags">
          {eventsPageTags.map((item, index) => (
            <Tag item={item} key={index} />
          ))}
        </div>
        <div className="tab-one__search__input">
          <SearchIcon />
          <input type="text" placeholder="Search for an event" />
        </div>
      </div>
      <div className="tab-one__card-section">
        {eventsList.map((item, index) => (
          <CardSection item={item} key={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default TabOne;
