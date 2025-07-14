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
    <section className="max-w-[1360px] mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-black mb-6">Знято у нас</h2>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setSelectedCategory(value)}
            className={`text-sm border py-2 px-5 rounded transition 
              ${
                selectedCategory === value
                  ? "bg-gray-100 text-black border-transparent"
                  : "text-gray-700 border-gray-200 hover:text-black"
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
              className="cursor-pointer transition-transform hover:scale-[1.01] bg-white"
              role="button"
              tabIndex={0}
            >
              <div className="relative w-full h-[300px] group">
                <Image
                  src={thumbnail}
                  alt={title}
                  fill
                  loading="lazy"
                  className="object-cover transition group-hover:brightness-75"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-lg font-semibold text-center px-2">{title}</h3>
                  <p className="text-sm mt-1 text-center">{type}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 bg-[#070707f7]  flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-[90%] md:w-[800px] aspect-video  overflow-hidden bg-white">
            <div className="text-center text-black">
            <p>{selectedVideo.title}</p>
            <p>{selectedVideo.type}</p>
            </div>
            <p></p>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0`}
              title={selectedVideo.title}
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 text-white text-xl bg-black/60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80"
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
