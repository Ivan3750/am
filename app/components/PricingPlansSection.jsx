// components/PricingPlansSection.jsx

export default function PricingPlansSection({plans}) {



  return (
    <section id="price" className="w-full py-16 px-4">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="border border-[#ddd]  relative flex flex-col gap-4 items-start justify-between "
          >
            <div className="w-full p-[20px]">
              <h3 className="text-[24px] font-medium font-[Poppins] text-black text-center">
                {plan.title}
              </h3>
              {plan.subtitle && (
                <p className="text-sm text-[#444444] text-center">
                  {plan.subtitle}
                </p>
              )}
            </div>

            <div className="w-full border-y-1 border-[#ddd] p-[20px]">
              <p className="text-[#393c3e] mr-2 text-[60px] font-bold text-center">
{/*                 {plan.oldPrice && <s className="">{plan.price}</s>}
 */}                {plan.oldPrice || plan.price}
              </p>
              <p className="text-sm font-normal text-[#444444]  text-center">
                {plan.period}
              </p>
            </div>

            <ul className="text-sm text-gray-700 space-y-2 mt-3 p-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: feature }} />
              ))}
            </ul>

            <div className="w-full mt-auto p-6">
              <button
                className="w-full  min-h-[30px] min-w-[120px] text-center uppercase rounded-sm
    bg-[#F47820] no-underline inline-block duration-400 cursor-pointer m-1 text-[13px] font-normal leading-[24px] p-[15px] border-none hover:bg-[green]"
              >
                Залишити заявку
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
