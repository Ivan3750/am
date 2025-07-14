'use client';

import Image from 'next/image';
import i1 from "@/app/assets/skewed/IMG_9297-800x600.jpg"
import i2 from "@/app/assets/skewed/dana_lakis_2-800x600.jpg"
import i3 from "@/app/assets/skewed/008-800x600.jpg"
import i4 from "@/app/assets/skewed/IMG_7438-800x600.jpg"
import i5 from "@/app/assets/skewed/IMG_9355_clear-800x600.jpg"
import i6 from "@/app/assets/skewed/IMG_0139-800x600.jpg"
import i7 from "@/app/assets/skewed/DSC_4495-800x600.jpg"

const images = [
  i1.src,
  i2.src,
  i3.src,
  i4.src,
  i5.src,
  i6.src,
  i7.src,

];

export default function SkewedImageGallery() {
  return (
    <div className="w-full overflow-x-hidden md:block hidden">
      <div className="flex w-[110vw] -translate-x-[5vw] h-[300px] sm:h-[400px] md:h-[500px] ml-2">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative flex-1 overflow-hidden skew-x-[-20deg] ml-[-2px]"
          >
            <div className="absolute inset-0 skew-x-[20deg] w-[calc(100%+175px)] left-[-88px]">
              <Image
  src={src}
  alt={`Skewed ${index + 1}`}
  fill
  quality={100}
  className="object-cover pointer-events-none select-none"
/>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
