import React from 'react'
import TxTAnim from './TxTAnim'

const LocationSection = () => {
  return (
    <section className="w-full px-4 md:px-16 py-12 text-black text-center">
      <div className="mx-auto mb-10 flex flex-col space-y-2">
        <TxTAnim tag="h2" className="text-[22px] font-extrabold leading-[33px] font-[Open_Sans]">
          Де знаходиться студія?
        </TxTAnim>

        <TxTAnim tag="p" className="mt-4 text-[22px] leading-[33px] font-[Open_Sans]">
          м. Київ, вул. Дмитрівська 71
          <br />
          (м. Лук’янівська)
        </TxTAnim>
      </div>

      <div className="max-w-[1360px] mx-auto w-full">
        <h3 className="text-[26px] font-semibold mb-4 text-left font-[Poppins]">
          Карта розташування офісу
        </h3>

        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden  ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.2371534583185!2d30.484783076988958!3d50.455308387013496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce62d97ae883%3A0x8b8bea12d5e50bc2!2z0LLRg9C70LjRhtGPINCU0LzQuNGC0YDRltCy0YHRjNC60LAsIDcxLCDQmtC40ZfQsiwgMDIwMDA!5e0!3m2!1suk!2sua!4v1714730523817!5m2!1suk!2sua"
            className="absolute top-0 left-0 w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Карта розташування офісу"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
