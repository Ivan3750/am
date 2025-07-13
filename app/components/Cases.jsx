"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/app/sanity/client";

// Отримання ID з YouTube URL
const getYoutubeId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

// Категорії
const categories = [
  { label: "Всі", value: "all" },
  { label: "Подкасти", value: "podcast" },
  { label: "Експертні відео", value: "expert" },
  { label: "Zoom інтервʼю", value: "zoom" },
  { label: "Стріми", value: "stream" },
  { label: "Курси", value: "course" },
];

const Cases = () => {
  const [cases, setCases] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState(null); // Модалка

  useEffect(() => {
    client
      .fetch(
        `*[_type == "videoCase"]{
          _id,
          title,
          type,
          url
        }`
      )
      .then((data) => setCases(data))
      .catch((err) => console.error("Error fetching video cases:", err));
  }, []);

  const filteredCases =
    selectedCategory === "all"
      ? cases
      : cases.filter((item) => item.type === selectedCategory);

  return (
    <section className="max-w-[1360px] my-0 mx-auto px-4 py-8 relative">
      <h2 className="text-[24px] font-semibold text-black mb-6">Знято у нас</h2>

      {/* Кнопки фільтрів */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setSelectedCategory(value)}
            className={`text-[15px] border py-[7px] px-[20px] rounded-[4px] transition cursor-pointer 
              ${
                selectedCategory === value
                  ? "text-black bg-[#11111119] border-0"
                  : "text-[#11111180] border-[#11111119] hover:text-black"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Сітка відео */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCases.map(({ _id, title, type, url }) => {
          const videoId = getYoutubeId(url);
          const thumbnail = videoId
            ? `https://img.youtube.com/vi/${videoId}/sddefault.jpg`
            : "/placeholder.jpg";

          return (
            <div
              key={_id}
              onClick={() => setSelectedVideo({ videoId, title, type })}
              className="overflow-hidden hover:scale-[1.01] transition-transform duration-300 bg-white cursor-pointer"
            >
              <div className="relative w-full h-[300px] group">
                <Image
                  src={thumbnail}
                  alt={title}
                  fill
                  className="object-cover transition duration-300 group-hover:brightness-[60%]"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-[18px] font-semibold text-center px-2">
                    {title}
                  </h3>
                  <p className="text-sm mt-1 text-center">{type}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Модалка */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-[#000000ba] bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-[90%] md:w-[800px] aspect-video bg-white rounded-lg overflow-hidden">
            <p>{selectedVideo.title}</p>
            <p>{selectedVideo.type}</p>
            <p></p>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
              title={selectedVideo.title}
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full h-full"
            ></iframe>

            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 text-white text-2xl bg-black bg-opacity-50 rounded-full w-[40px] h-[40px] flex items-center justify-center hover:bg-opacity-80 transition"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cases;
