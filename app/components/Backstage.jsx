import Image from "next/image";
import GallerySlider from "./GallerySlider";


const images = [
  {
    src: "https://am.net.ua/wp-content/uploads/2025/05/reels_studio_17-1300x867.jpg",
    alt: "Локація 1",
  },
  {
    src: "https://am.net.ua/wp-content/uploads/2025/05/reels_studio_15-1300x867.jpg",
    alt: "Локація 2",
  },
  {
    src: "https://am.net.ua/wp-content/uploads/2025/02/008_2-1300x867.jpg",
    alt: "Локація 3",
  },
  {
    src: "https://am.net.ua/wp-content/uploads/2025/05/reels_studio_5-1300x867.jpg",
    alt: "Локація 4",
  },
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
