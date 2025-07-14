'use client';

import { useEffect, useRef, useState } from 'react';
import Button from './Button';
import bg from "@/app/assets/footerbg.jpg"

export default function LastSection() {
  const bgRef = useRef(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (!bgRef.current) return;

    const maxScale = 1.13945;
    const minScale = 1;

    const handleScroll = () => {
      if (!bgRef.current) return;

      if (!visible) {
        bgRef.current.style.transform = `matrix(${minScale}, 0, 0, ${minScale}, 0, 0)`;
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      let progress = 1 - rect.top / windowHeight;
      progress = Math.min(Math.max(progress, 0), 1);

      const scale = minScale + (maxScale - minScale) * progress;

      bgRef.current.style.transform = `matrix(${scale}, 0, 0, ${scale}, 0, 0)`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[80vh] sm:h-[100vh] overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-10"
    >
      {/* Фон */}
      <div
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg.src})`,
          transform: 'matrix(1, 0, 0, 1, 0, 0)',
          transition: 'transform 0.2s ease-out',
          zIndex: 0,
        }}
      />

      {/* Оверлей */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#13161B]/[0.33] z-10" />

      {/* Контент */}
      <div className="relative z-20 text-center max-w-[1200px] mx-auto">
        <h1 className="text-white font-extrabold text-[42px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] leading-[110%] tracking-[-0.03em] font-[Poppins] mb-4 sm:mb-6">
          ДАВАЙТЕ <br className="sm:hidden" />
          СТВОРЮВАТИ <br className="sm:hidden" />
          РАЗОМ
        </h1>

        <h3 className="text-white text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] leading-[150%] tracking-[-0.04em] font-[Lora] mb-6 sm:mb-8">
          Зв’яжіться з нами сьогодні, щоб обговорити ваш проєкт
        </h3>

        <Button />
      </div>
    </section>
  );
}
