'use client'
import Image from 'next/image'
import Link from 'next/link'
import {FaPhone} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa'
import {FaTelegram} from 'react-icons/fa6'

export default function Header() {
  return (
    <header className=" w-full bg-[#090909] z-50 h-[80px]">
      <div className=" px-[40px] py-3 flex items-center justify-between">
        {/* Телефон */}
        <div className="hidden lg:flex items-center gap-2 text-sm text-white opacity-50 hover:opacity-100">
          <FaPhone />
          <a
            href="tel:+380679009242"
            className="relative inline-block font-medium italic  after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[3px] after:bg-[#3772ff] after:w-0 after:transition-all after:duration-300 hover:after:w-full tracking-[0.6px]"
          >
            067 900 92 42
          </a>
        </div>

        {/* Логотип */}
        <Link href="https://am.net.ua/" className="block">
          <Image
            src="https://am.net.ua/wp-content/uploads/2024/04/ReelsnoBGprint02.png"
            alt="Reels Studio"
            width={250}
            height={60}
            className="max-h-[60px] h-[60px]"
            priority
          />
        </Link>

        {/* Соцмережі */}
        <div className="hidden lg:flex gap-4 text-lg">
          <a
            href="https://www.instagram.com/reels_studio_kyiv/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-50 opacity-100 "
          >
            <FaInstagram />
          </a>
          <a
            href="https://t.me/golovaschuck_o"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-50 opacity-100 "
          >
            <FaTelegram />
          </a>
        </div>

        {/* Бургер для мобілки */}
        <div className="lg:hidden">
          <button
            id="ut-open-mobile-menu"
            aria-label="Відкрити мобільне меню"
            className="w-8 h-8 flex flex-col justify-between items-center"
          >
            <span className="w-full h-0.5 bg-black"></span>
            <span className="w-full h-0.5 bg-black"></span>
            <span className="w-full h-0.5 bg-black"></span>
          </button>
        </div>
      </div>

      {/* Мобільне меню (зразок) */}
      <nav className="lg:hidden bg-white shadow-md">
        <ul className="flex flex-col p-4 space-y-2">
          <li>
            <a href="https://am.net.ua/studio/reels/#podcast">Локації для подкасту</a>
          </li>
          <li>
            <a href="https://am.net.ua/studio/reels/#section1">Вартість</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
