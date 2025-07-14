import Image from "next/image";
import GallerySlider from "./GallerySlider";
import img1 from "@/app/assets/backstage/IMG_0113-1300x867.jpg";
import img2 from "@/app/assets/backstage/IMG_0114-1300x867.jpg";
import img3 from "@/app/assets/backstage/IMG_0139-1300x867.jpg";
import img4 from "@/app/assets/backstage/IMG_0930-1300x867.jpg";
import img5 from "@/app/assets/backstage/IMG_0937-1300x867.jpg";
import img6 from "@/app/assets/backstage/IMG_1541-1300x867.jpg";
import img7 from "@/app/assets/backstage/IMG_1736-1300x867.jpg";
import img8 from "@/app/assets/backstage/IMG_1792-1300x867.jpg";
import img9 from "@/app/assets/backstage/IMG_1803-1300x867.jpg";
import img10 from "@/app/assets/backstage/IMG_1892-1300x867.jpg";
import img11 from "@/app/assets/backstage/IMG_2164-1300x867.jpg";
import img12 from "@/app/assets/backstage/IMG_8466-1300x867.jpg";
import img13 from "@/app/assets/backstage/IMG_9297-1300x867.jpg";
import img14 from "@/app/assets/backstage/reels_studio_10-1300x867.jpg";
import img15 from "@/app/assets/backstage/reels_studio_12-1300x867.jpg";
import img16 from "@/app/assets/backstage/reels_studio_13_2-1300x867.jpg";

const images = [
  { src: img1.src, alt: "Фото 1" },
  { src: img2.src, alt: "Фото 2" },
  { src: img3.src, alt: "Фото 3" },
  { src: img4.src, alt: "Фото 4" },
  { src: img5.src, alt: "Фото 5" },
  { src: img6.src, alt: "Фото 6" },
  { src: img7.src, alt: "Фото 7" },
  { src: img8.src, alt: "Фото 8" },
  { src: img9.src, alt: "Фото 9" },
  { src: img10.src, alt: "Фото 10" },
  { src: img11.src, alt: "Фото 11" },
  { src: img12.src, alt: "Фото 12" },
  { src: img13.src, alt: "Фото 13" },
  { src: img14.src, alt: "Фото 14" },
  { src: img15.src, alt: "Фото 15" },
  { src: img16.src, alt: "Фото 16" },
];

const Backstage = () => {
  return (
    <>
          <section className="max-w-[1360px] my-0 mx-auto px-4 py-8">
      <h3 className="text-2xl font-semibold text-left text-[#111] mb-4">
        Backstage
      </h3>
      <div className="w-24 h-1 bg-[#f47820] mb-8" />
      <GallerySlider images={images}/>
    </section>
    </>
  );
};

export default Backstage;
