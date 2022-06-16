import React, { useRef, useState } from "react";
// Import Swiper React components
import { DropdownItems } from "../header/dropdown/dropdownItem";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./categories.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Categorieslider() {
  return (
    <>
      <section className="categories container">
        <div className="categories-header">
          <h2>Categories</h2>
          <span className="cate-para-line"></span>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="cates-swiper"
        >
          {DropdownItems.filter((val) => {
            return val;
          }).map((cate) => {
            return (
              <SwiperSlide className="cate-swiper">
                <div className="per-cate">
                  <div>
                    <img src={cate.image} alt="" />
                  </div>
                  <div>
                    <h3>{cate.title}</h3>
                    <h5>{cate.paratitle}</h5>
                    <p>{cate.para}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}
