import React, { useRef, useState } from "react";
// Import Swiper React components
import { categories } from "./categoriesarray";
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
          {categories
            .filter((val) => {
              return val;
            })

            .map((cate) => {
              return (
                <SwiperSlide className="cate-swiper">
                  <div className="per-cate">
                    <div>
                      <img src={cate.image} alt="" />
                    </div>
                    <div>
                      <h3>{cate.bigtitle}</h3>
                      <h5>{cate.title}</h5>
                      <p>{cate.para}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          {/* <SwiperSlide className="cate-swiper">
            <div className="per-cate">
              <div>
                <img src="/images/homeimgs/catpolitical.jpg" alt="" />
              </div>
              <div>
                <h3>Political New</h3>
                <h5>How to travel Bagan? What should I do?</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cate-swiper">
            <div className="per-cate">
              <div>
                <img src="/images/homeimgs/catpolitical.jpg" alt="" />
              </div>
              <div>
                <h3>Political New</h3>
                <h5>How to travel Bagan? What should I do?</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cate-swiper">
            <div className="per-cate">
              <div>
                <img src="/images/homeimgs/catpolitical.jpg" alt="" />
              </div>
              <div>
                <h3>Political New</h3>
                <h5>How to travel Bagan? What should I do?</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cate-swiper">
            <div className="per-cate">
              <div>
                <img src="/images/homeimgs/catpolitical.jpg" alt="" />
              </div>
              <div>
                <h3>Political New</h3>
                <h5>How to travel Bagan? What should I do?</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cate-swiper">
            <div className="per-cate">
              <div>
                <img src="/images/homeimgs/catpolitical.jpg" alt="" />
              </div>
              <div>
                <h3>Political New</h3>
                <h5>How to travel Bagan? What should I do?</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cate-swiper">
            <div className="per-cate">
              <div>
                <img src="/images/homeimgs/catpolitical.jpg" alt="" />
              </div>
              <div>
                <h3>Political New</h3>
                <h5>How to travel Bagan? What should I do?</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cate-swiper">
            <div className="per-cate">
              <div>
                <img src="/images/homeimgs/catpolitical.jpg" alt="" />
              </div>
              <div>
                <h3>Political New</h3>
                <h5>How to travel Bagan? What should I do?</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cate-swiper">
            <div className="per-cate">
              <div>
                <img src="/images/homeimgs/catpolitical.jpg" alt="" />
              </div>
              <div>
                <h3>Political New</h3>
                <h5>How to travel Bagan? What should I do?</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cate-swiper">
            <div className="per-cate">
              <div>
                <img src="/images/homeimgs/catpolitical.jpg" alt="" />
              </div>
              <div>
                <h3>Political New</h3>
                <h5>How to travel Bagan? What should I do?</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </section>
    </>
  );
}
