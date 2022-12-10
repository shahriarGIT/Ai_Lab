import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//App
import "../App.css";

// import required modules
import { Navigation, Pagination, Autoplay, Mousewheel, Keyboard } from "swiper";

export default function App() {
  return (
    // style={{
    //     "--swiper-navigation-color": "#fff",
    //     "--swiper-navigation-top": "10rem",
    //   }}
    <Swiper
      spaceBetween={35}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <img src="./assets/slider-img1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./assets/slider-img2.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./assets/slider-img3.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}
