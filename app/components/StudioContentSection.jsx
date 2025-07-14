import Image from 'next/image'
import { IoDiamondOutline } from 'react-icons/io5'
import { FaRegCommentDots } from 'react-icons/fa'
import { LuClock9 } from 'react-icons/lu'
import TxTAnim from './TxTAnim'
import oscar from "@/app/assets/Oskar.png"
import teleprompter from "@/app/assets/Teleprompter.png"
import notime from "@/app/assets/notime.png"

export default function StudioContentSection() {
  return (
    <section className="w-full bg-white py-10">
      {/* 1st row */}
      <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-10 max-w-[1400px] px-4 sm:px-8 lg:px-10 items-center">
        <div className="flex items-center justify-center">
          <Image
            src={oscar.src}
            alt="Oskar"
            width={600}
            height={600}
            className="object-contain max-w-full h-auto"
          />
        </div>

        <div className="flex flex-col justify-center space-y-5 text-center">
          <TxTAnim tag="div" className="w-full text-[32px] sm:text-[40px] text-[#444444] mb-3">
            <IoDiamondOutline className="mx-auto" />
          </TxTAnim>

          <TxTAnim
            tag="blockquote"
            className="text-[18px] sm:text-[20px] md:text-[22px] text-black leading-[1.6] font-[Open Sans]"
          >
            Гарний контент — це не витрата, а інвестиція у ваш бренд. Він працює на вас постійно,
            приваблюючи нових клієнтів та збільшуючи впізнаваність.
          </TxTAnim>
        </div>
      </div>

      {/* 2nd row */}
      <div className="container mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 mt-16 max-w-[1400px] px-4 sm:px-8 lg:px-10 items-center">
        <div className="flex flex-col justify-center text-center space-y-5">
          <TxTAnim tag="div" className="w-full text-[32px] sm:text-[40px] text-[#444444] mb-3">
            <FaRegCommentDots className="mx-auto" />
          </TxTAnim>
          <TxTAnim tag="blockquote" className="text-[18px] sm:text-[20px] md:text-[22px] text-black leading-[1.6] font-[Open Sans]">
            Перший раз перед камерою? Не хвилюйтесь, ми записуємо з першого дубля завдяки суфлеру 😉
            Просто підготуйте свій текст.
          </TxTAnim>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={teleprompter.src}
            alt="Teleprompter"
            width={800}
            height={822}
            className="object-contain max-w-full h-auto"
          />
        </div>
      </div>

      {/* 3rd row */}
      <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-10 mt-16 max-w-[1400px] px-4 sm:px-8 lg:px-10 items-center">
        <div className="flex flex-col justify-center text-center space-y-5">
          <TxTAnim tag="div" className="w-full text-[32px] sm:text-[40px] text-[#444444] mb-3">
            <LuClock9 className="mx-auto" />
          </TxTAnim>
          <TxTAnim tag="blockquote" className="text-[18px] sm:text-[20px] md:text-[22px] text-black leading-[1.6] font-[Open Sans]">
            з 7:00 до 23:00 студія доступна для зйомки кожного дня.
            <br />
            Ми підлаштуємось під ваш графік 👌
            <br />
            Час точно знайдеться
          </TxTAnim>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={notime.src}
            alt="немає часу на зйомки"
            width={600}
            height={617}
            className="object-contain max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
