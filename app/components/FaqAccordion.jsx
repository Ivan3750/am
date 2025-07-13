// components/FaqAccordion.jsx
"use client"
import { useState } from "react";

const faqData = [
  {
    question: "Чому вартість монтажу відео одразу не входить до пакету?",
    answer:
      "Кожен відеоролик — це унікальний проект, який відображає індивідуальні запити та потреби клієнта. Деяким клієнтам може знадобитися простий монтаж, в той час як інші можуть шукати більш складні та творчі підходи. Тому ми враховуємо цю унікальність кожного проекту та надаємо можливість дозамовлення монтажу окремо, щоб забезпечити відповідність вашим потребам та бюджету.",
  },
  {
    question: "Чи є у вас пакети послуг?",
    answer:
      "Так, ми пропонуємо декілька пакетів, які можуть бути адаптовані до ваших потреб та бюджету.",
  },
  {
    question: "Як я можу замовити послугу?",
    answer:
      "Ви можете зв’язатися з нами через форму на сайті або зателефонувати нам за вказаним номером.",
  },
  {
    question: "Чи пропонуєте ви послуги пост-продакшн?",
    answer:
      "Так, ми пропонуємо повний спектр послуг пост-продакшн, включаючи редагування, колірокорекцію, додавання спецефектів та звукове оформлення.",
  },
  {
    question: "Чи можете ви гарантувати конфіденційність моїх відео?",
    answer:
      "Так, ми гарантуємо повну конфіденційність і не публікуємо ваші відео без вашої згоди.",
  },
  {
    question: "Яка максимальна кількість людей може брати участь в інтерв'ю?",
    answer:
      "У нашій студії можна зняти інтерв’ю з максимальною кількістю трьох учасників одночасно.",
  },
  {
    question: "Як тарифікується Zoom-інтерв'ю?",
    answer:
      "Тариф для Zoom-інтерв’ю такий самий, як для оренди з оператором, оскільки використовується тільки одна камера. Це робить процес зйомки схожим на звичайну оренду студії, тому ціна залишається такою ж.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-semibold text-center mb-10">FAQ – Часті питання</h2>
      <div className="space-y-4 border-t border-gray-200">
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className="border-b border-gray-200 cursor-pointer"
          >
            <button
              className={`w-full text-left py-4 px-2 font-medium text-lg flex justify-between items-center ${
                openIndex === idx ? "text-[#F47820]" : "text-gray-800"
              }`}
              onClick={() => toggle(idx)}
            >
              {item.question}
              <span className="text-2xl">
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden px-2 text-gray-600 ${
                openIndex === idx ? "max-h-[400px] pb-4" : "max-h-0"
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
