'use client';

import Image from 'next/image';
import i1 from "@/app/assets/skewed/IMG_9297-800x600.jpg"
const images = [
  i1.src,
  "https://am.net.ua/wp-content/uploads/2025/02/dana_lakis_2-800x600.jpg",
  "https://am.net.ua/wp-content/uploads/2025/02/008-800x600.jpg",
  "https://am.net.ua/wp-content/uploads/2025/01/IMG_7438-800x600.jpg",
  "https://am.net.ua/wp-content/uploads/2025/01/IMG_9355_clear-800x600.jpg",
  "https://am.net.ua/wp-content/uploads/2025/02/IMG_0139-800x600.jpg",
  "https://am.net.ua/wp-content/uploads/2024/11/DSC_4495-800x600.jpg",
];

export default function SkewedImageGallery() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="flex w-[110vw] -translate-x-[5vw] h-[300px] sm:h-[400px] md:h-[500px]">
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
