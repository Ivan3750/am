"use client";
import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Чому вартість монтажу відео одразу не входить до пакету?",
    answer:
      "Кожен відеоролик — це унікальний проєкт, який відображає індивідуальні запити клієнта. Тому монтаж оплачується окремо.",
  },
  {
    question: "Чи є у вас пакети послуг?",
    answer: "Так, ми пропонуємо кілька пакетів на вибір, залежно від ваших потреб.",
  },
  {
    question: "Як я можу замовити послугу?",
    answer: "Зв’яжіться з нами через форму на сайті або за телефоном.",
  },
  {
    question: "Чи пропонуєте ви послуги пост–продакшн?",
    answer: "Так, повний спектр: монтаж, колірокорекція, спецефекти та звук.",
  },
  {
    question: "Чи можете ви гарантувати конфіденційність моїх відео?",
    answer: "Так, ми гарантуємо повну конфіденційність без публікації без вашої згоди.",
  },
  {
    question: "Яка максимальна кількість людей може брати участь в інтерв'ю?",
    answer: "Максимум три учасники одночасно.",
  },
  {
    question: "Як тарифікується Zoom-інтерв'ю?",
    answer: "Тариф такий самий, як для зйомки в студії з оператором.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="max-w-[1360px] mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold border-b-2 border-[#F47820] pb-2 mb-6">
        Питання/відповіді
      </h2>
      <div className="space-y-2">
        {faqData.map((item, idx) => (
          <div key={idx} className="border-b border-gray-200">
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center py-4 cursor-pointer hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-4 text-left">
                <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 font-medium">
                  {idx + 1}
                </div>
                <span className="text-lg font-medium text-gray-800 hover:underline">
                  {item.question}
                </span>
              </div>
              {openIndex === idx ? (
                <ChevronDown size={18} className="text-gray-600" />
              ) : (
                <ChevronRight size={18} className="text-gray-600" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === idx ? "max-h-96 pb-4" : "max-h-0"
              } px-12 text-gray-600`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
