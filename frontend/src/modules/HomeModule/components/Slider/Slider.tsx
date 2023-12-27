"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { sliderImages } from "@/shared/constants/home/data";
import Image from "@/shared/components/Image/Image";

import styles from "./slider.module.scss";

import "swiper/css";

function Slider() {
  return (
    <div className='flex mb-30'>
      <Swiper
        spaceBetween={16}
        slidesPerView={2}
        className={`${styles.swiper} select-none justify-between`}
        scrollbar={{ draggable: true }}
        breakpoints={{
          576: {
            loop: true,
            spaceBetween: 20,
            slidesPerView: 3
          },
          768: {
            spaceBetween: 24
          },
          992: {
            loop: false,
            spaceBetween: 28
          },
          1200: {
            spaceBetween: 30,
            slidesPerView: 4
          }
        }}
      >
        {sliderImages.map(image => (
          <SwiperSlide key={image.src} className='text-[14px] lg:text-[16px] cursor-pointer'>
            <Image
              src={image.src}
              width={165}
              height={160}
              alt={image.alt}
              className='w-full max-w-[287px] rounded-[10px]'
            />
            <p className='mt-3'>{image.title}</p>
            <p className='mt-1 text-grey-888'>{image.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
