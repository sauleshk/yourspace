import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Swiper.module.scss";

// import required modules
import { Navigation, Pagination } from "swiper";

export default function SwiperNews() {
  return (
    <div className="NewsCont">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <img
            src="https://webstatic.hoyoverse.com/upload/op-public/2023/02/23/52053c912ed565e94e061e057f93baf6_8169711602411981742.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://webstatic.hoyoverse.com/upload/op-public/2023/02/21/946fe38f65f8e3b95638d558df6f1891_5661902112888571481.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://webstatic.hoyoverse.com/upload/op-public/2023/02/17/bc458e53a03eb5927ffec3e40ee636b3_5735359848941486509.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://webstatic.hoyoverse.com/upload/op-public/2023/02/17/bc458e53a03eb5927ffec3e40ee636b3_5735359848941486509.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
