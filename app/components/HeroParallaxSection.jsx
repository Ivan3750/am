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
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
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
        // Якщо блок не видно — скидаємо трансформацію
        bgRef.current.style.transform = `matrix(${minScale}, 0, 0, ${minScale}, 0, 0)`;
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Визначаємо прогрес анімації: 
      // коли верх блоку торкається низу екрану (rect.top === windowHeight) — scale = minScale
      // коли верх блоку торкається верху екрану (rect.top === 0) — scale = maxScale
      let progress = 1 - rect.top / windowHeight;
      progress = Math.min(Math.max(progress, 0), 1); // clamp 0..1

      // Інтерполяція масштабу
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
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Фон */}
      <div
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:`url(${bg.src})`,
          transform: 'matrix(1, 0, 0, 1, 0, 0)',
          transition: 'transform 0.2s ease-out',
          zIndex: 0,
        }}
      ></div>

      {/* Оверлей */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#13161B]/[0.33] z-10" />

      {/* Контент */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-white font-extrabold text-[100px] sm:text-[120px] md:text-[150px] leading-[110%] tracking-[-0.03em] font-[Poppins]">
          ДАВАЙТЕ <br className="sm:hidden" />
          СТВОРЮВАТИ <br className="sm:hidden" />
          РАЗОМ
        </h1>

        <h3 className="text-white mt-6 text-xl sm:text-2xl md:text-[30px] leading-[150%] tracking-[-0.04em] font-[Lora]">
          Зв’яжіться з нами сьогодні, щоб обговорити ваш проєкт
        </h3>

       <Button></Button>
      </div>
    </section>
  );
}
