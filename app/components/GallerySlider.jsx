"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

export default function GallerySlider({ images }) {
  return (
    <div className="relative cursor-grab active:cursor-grabbing select-none">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop
        observer={true}
        observeParents={true}
        className="group"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <Image
                src={image.src}
                alt={image.alt || `Slide ${index + 1}`}
                width={1920}
                height={1080}
                className="w-full h-auto object-cover transition duration-300 group-hover:brightness-90"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Стрілки */}
      <div className="absolute top-[25px] right-[15px] z-10 flex gap-2">
        <button
          aria-label="Попереднє зображення"
          className="custom-prev bg-[#151515] text-white rounded-full w-[40px] h-[40px] flex items-center justify-center transition hover:bg-[#222]"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path d="M12.707 15.707a1 1 0 01-1.414 0L6.586 11a1 1 0 010-1.414L11.293 5.293a1 1 0 011.414 1.414L9.414 10l3.293 3.293a1 1 0 010 1.414z" />
          </svg>
        </button>
        <button
          aria-label="Наступне зображення"
          className="custom-next bg-[#151515] text-white rounded-full w-[40px] h-[40px] flex items-center justify-center transition hover:bg-[#222]"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path d="M7.293 4.293a1 1 0 011.414 0L13.414 9a1 1 0 010 1.414l-4.707 4.707a1 1 0 01-1.414-1.414L10.586 10 7.293 6.707a1 1 0 010-1.414z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
