"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import { partnersSliderImages } from "@/shared/constants/home/data";
import Image from "@/shared/components/Image/Image";

import styles from "./partnersSlider.module.scss";

import "swiper/css";

function PartnersLogoSlider() {
  return (
    <div className='mx-auto md:px-10 lg:px-16 xl:px-25 lg:max-w-[1440px] mt-8 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-18'>
      <Swiper
        spaceBetween={40}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        loop
        autoplay={{
          delay: 0
        }}
        freeMode
        speed={4000}
        modules={[Autoplay, FreeMode]}
        className={`${styles.swiper} select-none cursor-pointer`}
        breakpoints={{
          // when window width is >= 576px
          576: {
            slidesPerView: 4,
            spaceBetween: 50
          },
          // when window width is >= 768px
          768: {
            spaceBetween: 60
          },
          // when window width is >= 992px
          992: {
            slidesPerView: 5,
            spaceBetween: 70
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 6,
            spaceBetween: 76
          }
        }}
      >
        {partnersSliderImages.map(image => (
          <SwiperSlide key={image.id}>
            <Image src={image.src} width={image.width} height={image.height} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PartnersLogoSlider;
