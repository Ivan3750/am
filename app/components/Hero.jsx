"use client";
import { useState, useEffect } from "react";
import decor from "@/app/assets/decor/ut-dot-dark.svg"
import brush from "@/app/assets/decor/ut-brush-43-1.png"
import Image from "next/image";
import Button from "./Button";

const Hero = () => {

      const words = ["підкастів", "уроків", "ТІК ТОК", "лекції", "оглядів товару" , "Zoom інтрев'ю", "подкастів", "рекламних креативів"];
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
    <section className="flex flex-col justify-center items-center h-[100vh] ">
      <Image src={decor} alt="Декор" fill />
      <h1 className="text-[128px] font-bold text-black font-[Poppins] leading-[128px]">
        Студія для зйомки:
      </h1>
      <h2
        className={`text-[60px] text-black font-manrope  mb-5 italic transition-all  duration-400 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {words[index]}
      </h2>
       <Image
      src={brush}
      alt="ut-brush-43"
      width={500}
      height={19}
      decoding="async"
      className="ut-lazy skip-lazy ut-animated-image ut-image-loaded mb-2"
      priority={false} // якщо хочеш пріоритетну загрузку - true
    />
      <p className="text-[22px] text-black max-w-[800px] text-center font-[ABeeZee] mb-3">
        Комплексне виробництво відео: усе, що потрібно для ідеального контенту
      </p>
      <Button />
    </section>
  );
};

export default Hero;
