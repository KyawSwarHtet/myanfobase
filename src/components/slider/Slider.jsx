import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={8}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h5>Entertainment</h5>
        </SwiperSlide>

        <SwiperSlide>
          <h5>Techology</h5>
        </SwiperSlide>
        <SwiperSlide>
          <h5>History</h5>
        </SwiperSlide>
        <SwiperSlide>
          <h5>Travel</h5>
        </SwiperSlide>
        <SwiperSlide>
          <h5>Beauty</h5>
        </SwiperSlide>
        <SwiperSlide>
          <h5>Health</h5>
        </SwiperSlide>
        <SwiperSlide>
          <h5>Government</h5>
        </SwiperSlide>
        <SwiperSlide>
          <h5>Techology</h5>
        </SwiperSlide>
        <SwiperSlide>
          <h5>Entertainment</h5>
        </SwiperSlide>

        <SwiperSlide>
          <h5>Techology</h5>
        </SwiperSlide>
        <SwiperSlide>
          <h5>History</h5>
        </SwiperSlide>
        <SwiperSlide>
          <h5>Travel</h5>
        </SwiperSlide>
        <SwiperSlide>
          <h5>Beauty</h5>
        </SwiperSlide>
        <SwiperSlide>
          <h5>Health</h5>
        </SwiperSlide>
        <SwiperSlide>
          <h5>Government</h5>
        </SwiperSlide>
        <SwiperSlide>
          <h5>Techology</h5>
        </SwiperSlide>
      </Swiper>
      <span className="swipper-bottom-line"></span>
    </>
  );
}
