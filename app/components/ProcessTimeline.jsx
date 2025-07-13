import React from "react";

const ProcessTimeline = () => {
  const steps = [
    {
      title: "1. Бронюєте дату та час зйомки",
      description: "Бронювання відбувається за 100% передоплати",
      align: "left",
    },
    {
      title: "2. Описуєте свої побажання по локації",
      description:
        "Узгоджуємо реквізит, необхідність макіяжу та додаткове обладнання, наприклад, суфлер",
      align: "right",
    },
    {
      title: "3. Знімаємо ваші відео",
      description:
        "Знімаємо ваші відео у дружній, затишній атмосфері, з підтримкою асистента",
      align: "left",
    },
    {
      title: "4. Монтуємо відео",
      description: "Або передаємо вам сирий матеріал",
      align: "right",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Як відбувається процес?
        </h2>
        <div className="relative flex flex-col items-center">
          {/* Вертикальна лінія завжди */}
          <div className="absolute w-[2px] hidden md:block bg-gray-300 h-full top-0 left-1/2 transform -translate-x-1/2"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="w-full flex mb-12 md:mb-16 items-center relative"
            >
              {/* Контент зліва для десктопу */}
              <div
                className={`w-1/2 hidden md:block ${
                  step.align === "left" ? "pr-8 text-right" : ""
                }`}
              >
                {step.align === "left" && (
                  <>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </>
                )}
              </div>

              {/* Центровий кружечок */}
              <div className="w-10 md:flex justify-center hidden items-center relative z-10">
                <div className="w-5 h-5 bg-white border-2 border-gray-500 rounded-full"></div>
              </div>

              {/* Контент праворуч для десктопу */}
              <div
                className={`w-1/2 hidden md:block ${
                  step.align === "right" ? "pl-8 text-left" : ""
                }`}
              >
                {step.align === "right" && (
                  <>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </>
                )}
              </div>

              {/* Контент для мобільних – завжди з правого боку від кружечка */}
              <div className="md:hidden flex-1 pl-4 text-left">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
