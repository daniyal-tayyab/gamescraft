import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import styled from 'styled-components';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import StoryCard from './story-card/StoryCard';

const Container = styled.section`
    margin: 8rem;
    position: relative;
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */

    .swiper {
      .swiper-button-prev, .swiper-button-next {
        display: none;
      }
    }

    h2 {
      margin: 0 auto;
      margin-bottom: 2rem;
    }

    @media (max-width: 500px) {
      margin: 8rem 3rem;
    }
`;

const Review = () => {
  return (
    <Container>
      <h2 className='section-heading'>What people say about us</h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><StoryCard /></SwiperSlide>
        <SwiperSlide><StoryCard /></SwiperSlide>
        <SwiperSlide><StoryCard /></SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default Review
