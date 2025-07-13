import Image from "next/image";
import { IoDiamondOutline } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa";
import { LuClock9 } from "react-icons/lu";

export default function StudioContentSection() {
  return (
    <section className="w-full bg-white py-10">
      <div className="container mx-auto grid grid-cols-2 gap-10 max-w-[1400px]">
        {/* Left column: image */}
        <div className="flex items-center justify-center">
          <Image
            src="https://am.net.ua/wp-content/uploads/2024/05/Oskar.png"
            alt="Oskar"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>

        {/* Right column: quote */}
        <div className="flex flex-col justify-center">
          <div className="w-full text-[40px] text-[#444444] mb-5">
            <IoDiamondOutline className="my-0 mx-auto" />
          </div>
          <blockquote className="text-[22px] text-black text-center leading-[1.6] font-[Open Sans]">
            Гарний контент — це не витрата, а інвестиція у ваш бренд. Він працює
            на вас постійно, приваблюючи нових клієнтів та збільшуючи
            впізнаваність.
          </blockquote>
        </div>
      </div>

      {/* 2nd row */}
      <div className="container mx-auto grid grid-cols-2 gap-10 mt-16 max-w-[1400px]">
        <div className="flex items-center justify-center">
          <Image
            src="https://am.net.ua/wp-content/uploads/2025/01/Teleprompter.png"
            alt="Teleprompter"
            width={800}
            height={822}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="w-full text-[40px] text-[#444444] mb-5">
            <FaRegCommentDots className="my-0 mx-auto" />
          </div>
          <blockquote className="text-[22px] text-black text-center leading-[1.6] font-[Open Sans]">
            Перший раз перед камерою? Не хвилюйтесь, ми записуємо з першого
            дубля завдяки суфлеру 😉 Просто підготуйте свій текст.
          </blockquote>
        </div>
      </div>

      {/* 3rd row */}
      <div className="container mx-auto grid grid-cols-2 gap-10 mt-16 max-w-[1400px]">
        <div className="flex flex-col justify-center">
          <div className="w-full text-[40px] text-[#444444] mb-5">
<LuClock9 className="my-0 mx-auto" />
          </div>
          <blockquote className="text-[22px] text-black text-center leading-[1.6] font-[Open Sans]">
            з 7:00 до 23:00 студія доступна для зйомки кожного дня.
            <br />
            Ми підлаштуємось під ваш графік 👌
            <br />
            Час точно знайдеться
          </blockquote>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="https://am.net.ua/wp-content/uploads/2025/01/немає-часу-на-зйомки.png"
            alt="немає часу на зйомки"
            width={600}
            height={617}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
