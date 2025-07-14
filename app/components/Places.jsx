import Image from "next/image";
import GallerySlider from "./GallerySlider";

import l1 from "@/app/assets/location/reels_studio_17-1300x867.jpg";
import l2 from "@/app/assets/location/reels_studio_15-1300x867.jpg";
import l3 from "@/app/assets/location/008_2-1300x867.jpg";
import l4 from "@/app/assets/location/reels_studio_5-1300x867.jpg";

// Нові імпорти
import l5 from "@/app/assets/location/Локація-Мансарда-1300x867.png";
import l6 from "@/app/assets/location/dana_lakis_2-1300x867.jpg";
import l7 from "@/app/assets/location/dana_lakis_4-1300x867.jpg";
import l8 from "@/app/assets/location/DSC_8479-1300x867.jpg";
import l9 from "@/app/assets/location/reels_studio_1-1300x867.jpg";
import l10 from "@/app/assets/location/reels_studio_10-1300x867.jpg";

const images = [
  { src: l1.src, alt: "Локація 1" },
  { src: l2.src, alt: "Локація 2" },
  { src: l3.src, alt: "Локація 3" },
  { src: l4.src, alt: "Локація 4" },
  { src: l5.src, alt: "Локація Мансарда" },
  { src: l6.src, alt: "Dana Lakis 2" },
  { src: l7.src, alt: "Dana Lakis 4" },
  { src: l8.src, alt: "DSC 8479" },
  { src: l9.src, alt: "Reels Studio 1" },
  { src: l10.src, alt: "Reels Studio 10" },
];

const Places = () => {
  return (
    <section id="podcast" className="max-w-[1360px] my-0 mx-auto px-4 py-8">
      <h3 className="text-2xl font-semibold text-left text-[#111] mb-4">
        Локації під інтерв’ю/подкасти
      </h3>
      <div className="w-24 h-1 bg-[#f47820] mb-8" />
      <GallerySlider images={images} />
    </section>
  );
};

export default Places;
