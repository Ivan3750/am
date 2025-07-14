'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaPhone, FaTelegram, FaInstagram } from 'react-icons/fa6'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-[#090909] z-50 fixed top-0 left-0 shadow-md">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-[80px] flex items-center justify-between relative">
        {/* Телефон */}
        <div className="hidden lg:flex items-center gap-2 text-sm text-white opacity-50 hover:opacity-100 transition-opacity">
          <FaPhone />
          <a
            href="tel:+380679009242"
            className="relative inline-block font-medium italic tracking-[0.6px] after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:bg-[#3772ff] after:w-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            067 900 92 42
          </a>
        </div>

        {/* Логотип */}
        <Link href="/" className="block z-10">
          <Image
            src="https://am.net.ua/wp-content/uploads/2024/04/ReelsnoBGprint02.png"
            alt="Reels Studio"
            width={200}
            height={50}
            className="h-[50px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Соцмережі */}
        <div className="hidden lg:flex gap-4 text-lg text-white">
          <a
            href="https://www.instagram.com/reels_studio_kyiv/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-50 transition-opacity"
          >
            <FaInstagram />
          </a>
          <a
            href="https://t.me/golovaschuck_o"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-50 transition-opacity"
          >
            <FaTelegram />
          </a>
        </div>

        {/* Бургер для мобільного */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Відкрити мобільне меню"
          className="lg:hidden z-10 flex flex-col justify-between w-8 h-[22px]"
        >
          <span className={`w-full h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-[10px]' : ''}`}></span>
          <span className={`w-full h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-[10px]' : ''}`}></span>
        </button>

        {/* Мобільне меню */}
        <nav
          className={`fixed top-0 left-0 w-full h-screen bg-[#090909] text-white flex flex-col items-center justify-center gap-6 transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <a href="https://am.net.ua/studio/reels/#podcast" onClick={() => setMenuOpen(false)} className="text-2xl hover:text-[#3772ff] transition-colors">
            Локації для подкасту
          </a>
          <a href="https://am.net.ua/studio/reels/#section1" onClick={() => setMenuOpen(false)} className="text-2xl hover:text-[#3772ff] transition-colors">
            Вартість
          </a>
          <a href="tel:+380679009242" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-lg opacity-50 hover:opacity-100 transition-opacity">
            <FaPhone /> 067 900 92 42
          </a>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://www.instagram.com/reels_studio_kyiv/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-50 transition-opacity"
            >
              <FaInstagram />
            </a>
            <a
              href="https://t.me/golovaschuck_o"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-50 transition-opacity"
            >
              <FaTelegram />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
