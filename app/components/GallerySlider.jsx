"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useEffect } from "react";


export default function GallerySlider({images}) {
  useEffect(() => {
    // Фікс для Swiper якщо стрілки не показуються одразу
    import("swiper/css");
    import("swiper/css/navigation");
    import("swiper/css/pagination");
  }, []);

  return (
    <div className="relative group cursor-grab">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative group">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transition duration-300 group-hover:brightness-30"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Стрілки */}
      {/* Контейнер для обох стрілок */}
      <div className="absolute top-[25px] right-[15px] z-10 flex gap-2">
        <div className="custom-prev bg-[#151515] text-white rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer transition">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path d="M12.707 15.707a1 1 0 01-1.414 0L6.586 11a1 1 0 010-1.414L11.293 5.293a1 1 0 011.414 1.414L9.414 10l3.293 3.293a1 1 0 010 1.414z" />
          </svg>
        </div>
        <div className="custom-next bg-[#151515] text-white rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer transition">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path d="M7.293 4.293a1 1 0 011.414 0L13.414 9a1 1 0 010 1.414l-4.707 4.707a1 1 0 01-1.414-1.414L10.586 10 7.293 6.707a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
