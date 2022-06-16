import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <span className="swipper-bottom-line"></span>
      <Swiper
        slidesPerView={8}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="cat-text"
      >
        <SwiperSlide>
          <Link to="/entertainment" className="main-cat">
            Entertainment
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/entertainment" className="main-cat">
            Techology
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/entertainment" className="main-cat">
            History
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/entertainment" className="main-cat">
            Travel
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/entertainment" className="main-cat">
            Beauty
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/entertainment" className="main-cat">
            Health
          </Link>
        </SwiperSlide>
        <Link to="/entertainment" className="main-cat">
          Techology
        </Link>
        <SwiperSlide>
          <Link to="/entertainment" className="main-cat">
            Government
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/entertainment" className="main-cat">
            Techology
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/entertainment" className="main-cat">
            Entertainment
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/entertainment" className="main-cat">
            Techology
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/entertainment" className="main-cat">
            History
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/entertainment" className="main-cat">
            Travel
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/entertainment" className="main-cat">
            Beauty
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/entertainment" className="main-cat">
            Health
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/entertainment" className="main-cat">
            Government
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/entertainment" className="main-cat">
            Techology
          </Link>
        </SwiperSlide>
      </Swiper>
      <span className="swipper-bottom-line"></span>
    </>
  );
}
