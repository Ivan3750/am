import Image from "next/image";
import logo from "@/app/assets/logo.png"
const advantages = [
  { title: "🗣️ Зйомка інтерв'ю", description: "Професійне оформлення ваших розмов з експертами, з якісним звуком та освітленням." },
  { title: "👨🏻‍💻 Зйомка експертних відео", description: "Демонструйте свій досвід через якісний контент із деталізованою подачею." },
  { title: "🎙️ Зйомка подкастів", description: "Створюйте захоплюючі аудіовізуальні подкасти з професійним технічним забезпеченням." },
  { title: "📡 Зйомка on-line трансляцій", description: "Пряма трансляція з багатокамерною зйомкою і техпідтримкою." },
];

export default function StudioAdvantagesSection() {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-[22px] text-black font-extrabold mb-12 font-[Open Sans]">Послуги студії</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* LEFT column */}
        <div className="flex flex-col gap-6 text-left">
          {advantages.slice(0, 2).map((item, index) => (
            <div key={index} >
              <h3 className="font-medium font-[Poppins] text-[20px] text-black text-center mb-4">{item.title}</h3>
              <p className="font-[Manrope] font-normal text-[14px] text-[#444444] text-center">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Center logo */}
        <div className="flex justify-center">
          <Image
            src={logo} // заміни на свій шлях
            alt="Логотип"
            width={160}
            height={160}
            className="rounded-full object-contain"
          />
        </div>

        {/* RIGHT column */}
        <div className="flex flex-col gap-6 text-left">
          {advantages.slice(2, 4).map((item, index) => (
           <div key={index} >
              <h3 className="font-medium font-[Poppins] text-[20px] text-black text-center mb-4">{item.title}</h3>
              <p className="font-[Manrope] font-normal text-[14px] text-[#444444] text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
