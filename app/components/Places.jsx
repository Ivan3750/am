import Image from "next/image";
import GallerySlider from "./GallerySlider";
import l1 from "@/app/assets/location/reels_studio_17-1300x867.jpg"
import l2 from "@/app/assets/location/reels_studio_15-1300x867.jpg"
import l3 from "@/app/assets/location/008_2-1300x867.jpg"
import l4 from "@/app/assets/location/reels_studio_5-1300x867.jpg"

const images = [
  {
    src: l1.src,
    alt: "Локація 1",
  },
  {
    src: l2.src,
    alt: "Локація 2",
  },
  {
    src: l3.src,
    alt: "Локація 3",
  },
  {
    src: l4.src,
    alt: "Локація 4",
  },
];

const Places = () => {
  return (
    <>
          <section className="max-w-[1360px] my-0 mx-auto px-4 py-8">
      <h3 className="text-2xl font-semibold text-left text-[#111] mb-4">
        Локації під інтерв’ю/подкасти
      </h3>
      <div className="w-24 h-1 bg-[#f47820] mb-8" />
      <GallerySlider images={images}/>
    </section>
    </>
  );
};

export default Places;
