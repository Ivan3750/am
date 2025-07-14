"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { client } from "@/app/sanity/client";

const getYoutubeId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

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
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "videoCase"]{_id, title, type, url}`)
      .then((data) => setCases(data))
      .catch((err) => console.error("Error fetching video cases:", err));
  }, []);

  const filteredCases = useMemo(() => {
    return selectedCategory === "all"
      ? cases
      : cases.filter((item) => item.type === selectedCategory);
  }, [cases, selectedCategory]);

  return (
    <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
    
<div className="relative flex items-center w-full mb-8">
  <h2 className="text-2xl font-semibold text-left text-[#111] mb-4">
    Знято у нас
  </h2>
</div>


      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setSelectedCategory(value)}
            className={`text-sm sm:text-base rounded-sm border py-2 px-4 sm:px-6 transition-all
              ${
                selectedCategory === value
                  ? "bg-gray-100 text-black border-transparent"
                  : "text-gray-700 border-gray-300 hover:text-black"
              }`}
            aria-pressed={selectedCategory === value}
          >
            {label}
          </button>
        ))}
      </div>

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
              className="cursor-pointer transition-transform hover:scale-[1.02] bg-white  overflow-hidden "
              role="button"
              tabIndex={0}
            >
              <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] group">
                <Image
                  src={thumbnail}
                  alt={title}
                  fill
                  loading="lazy"
                  className="object-cover transition group-hover:brightness-75"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-lg sm:text-xl font-semibold text-center px-2">{title}</h3>
                  <p className="text-xs sm:text-sm mt-1 text-center">{type}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedVideo && (
       <div
  className="fixed inset-0 bg-[#070707de] flex items-center justify-center z-50 px-4 py-8"
  role="dialog"
  aria-modal="true"
>
  <div
    className="relative w-full max-w-[90vw] md:max-w-[900px] aspect-video bg-white  p-4 md:p-10 rounded-lg shadow-lg"
  >
    <div className="text-center mb-4">
      <p className="text-[#111111] font-[Manrope] text-[20px] md:text-[26px] font-bold">
        {selectedVideo.title}
      </p>
      <p className="text-[#11111180] font-[Manrope] text-[12px] md:text-[13px] font-normal">
        {selectedVideo.type}
      </p>
    </div>

    <div className="relative w-full h-0 pb-[56.25%]">
      <iframe
        src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0`}
        title={selectedVideo.title}
        allow="autoplay; fullscreen"
        allowFullScreen
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full rounded-md"
      ></iframe>
    </div>

    <button
      onClick={() => setSelectedVideo(null)}
      className="absolute top-3 right-3 text-white text-xl bg-black/60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 transition"
      aria-label="Закрити відео"
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
