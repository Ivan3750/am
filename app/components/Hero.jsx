"use client";
import { useState, useEffect } from "react";
import decor from "@/app/assets/decor/ut-dot-dark.svg";
import brush from "@/app/assets/decor/ut-brush-43-1.png";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  const words = [
    "підкастів",
    "уроків",
    "ТІК ТОК",
    "лекції",
    "оглядів товару",
    "Zoom інтрев'ю",
    "подкастів",
    "рекламних креативів",
  ];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 700);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col justify-center items-center h-screen px-4 md:px-10 overflow-hidden text-center">
      <Image src={decor} alt="Декор" fill className="object-cover opacity-20" />
      
      <h1 className="text-black font-[Poppins] font-bold leading-tight
        text-[42px] sm:text-[64px] md:text-[96px] lg:text-[128px] mb-3">
        Студія для зйомки:
      </h1>

      <h2
        className={`text-black font-manrope italic transition-all duration-400 ${
          fade ? "opacity-100" : "opacity-0"
        }
        text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] mb-5`}
      >
        {words[index]}
      </h2>

      <Image
        src={brush}
        alt="ut-brush-43"
        width={500}
        height={19}
        decoding="async"
        className="mb-2"
        priority={false}
      />

      <p className="text-black font-[ABeeZee] mb-5 max-w-[90%] md:max-w-[800px] text-[16px] sm:text-[18px] md:text-[22px] leading-relaxed">
        Комплексне виробництво відео: усе, що потрібно для ідеального контенту
      </p>

      <Button />
    </section>
  );
};

export default Hero;
