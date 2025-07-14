'use client';

import React from 'react';

const VideoBackground = () => {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[900px] overflow-hidden -mt-12">
      <iframe
        src="https://www.youtube-nocookie.com/embed/wIUipD6t8uo?autoplay=1&mute=1&controls=0&loop=1&playlist=wIUipD6t8uo&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&playsinline=1"
        title="Reels Studio Background Video"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        className="absolute top-0 left-0 w-[110%] h-full -translate-x-[5%] pointer-events-none z-0 object-cover"
      />

      {/* Темна плівка поверх відео */}
      <div className="absolute inset-0 bg-black/20 z-10" />
    </section>
  );
};

export default VideoBackground;
