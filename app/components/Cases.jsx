"use client";
import { useState } from "react";
import Image from "next/image";

const videoData = [
  { title: "Подкаст з експертом", type: "Подкасти", thumbnail: "/video1.jpg" },
  { title: "Курс для підприємців", type: "Курси", thumbnail: "/video2.jpg" },
  {
    title: "Zoom інтерв’ю з коучем",
    type: "Zoom інтерв'ю",
    thumbnail: "/video3.jpg",
  },
  { title: "Стрім з події", type: "Стріми", thumbnail: "/video4.jpg" },
  {
    title: "Експертне відео для бренду",
    type: "Експертні відео",
    thumbnail: "/video5.jpg",
  },
];

const categories = [
  "Всі",
  "Подкасти",
  "Експертні відео",
  "Zoom інтерв'ю",
  "Стріми",
  "Курси",
];

const Cases = () => {
  const [selectedCategory, setSelectedCategory] = useState("Всі");

  // 🔍 Фільтруємо відео відповідно до категорії
  const filteredVideos =
    selectedCategory === "Всі"
      ? videoData
      : videoData.filter((video) => video.type === selectedCategory);

  return (
    <section className="max-w-[1360px] my-0 mx-auto px-4 py-8">
      <h2 className="text-[24px] font-semibold text-black mb-6">Знято у нас</h2>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((label, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(label)}
            className={`text-[15px] border py-[7px] px-[20px] rounded-[4px] transition cursor-pointer 
              ${
                selectedCategory === label
                  ? "text-black bg-[#11111119] border-0"
                  : "text-[#11111180] border-[#11111119] hover:text-black"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md overflow-hidden hover:scale-[1.01] transition-transform duration-300 bg-white"
          >
            <div className="relative w-full h-[200px] group">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover transition duration-300 group-hover:brightness-[60%]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-[18px] font-semibold text-center px-2">
                  {video.title}
                </h3>
                <p className="text-sm mt-1 text-center">{video.type}</p>
              </div>
            </div>

            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cases;
