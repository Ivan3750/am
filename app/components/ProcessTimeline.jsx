import React from "react";

const ProcessTimeline = () => {
  const steps = [
    {
      title: "1. Бронюєте дату та час зйомки",
      description: "Бронювання відбувається за 100% передоплати"
    },
    {
      title: "2. Описуєте свої побажання по локації",
      description:
        "Узгоджуємо реквізит, необхідність макіяжу та додаткове обладнання, наприклад, суфлер"
    },
    {
      title: "3. Знімаємо ваші відео",
      description:
        "Знімаємо ваші відео у дружній, затишній атмосфері, з підтримкою асистента"
    },
    {
      title: "4. Монтуємо відео",
      description: "Або передаємо вам сирий матеріал"
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Як відбувається процес?
        </h2>
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-4 border-orange-500 text-left"
            >
              <div className="absolute -left-3 top-1.5 w-5 h-5 rounded-full bg-orange-500"></div>
              <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
