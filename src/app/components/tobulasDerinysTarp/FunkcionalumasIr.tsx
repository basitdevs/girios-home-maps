import Image from "next/image";
import React from "react";
import Collaps from "../ui/Collaps";
import MobileSection from "../tobulasDerinysTarpGamtos/MobileSection";

const faqItems = [
  {
    title: "KADA BUS BAIGTOS STATYBOS?",
    content: `Pirmieji 5 namai bus baigti 2025 Q4, tikslesne informacija priklauso nuo įvairių
    veiksnių, įskaitant pasirinktą modelį ir dabartinius statybų grafikus. Norėdami
    sužinoti tikslesnį laiką, susisiekite su mūsų projektų vadovais.`,
  },
  {
    title: "KOKS YRA IRENGIMAS?",
    content: `Mūsų namai sukurti taip, kad atitiktų A++ energinio efektyvumo standartus,
    užtikrinant puikią izoliaciją visame name. Tai apima aukštos kokybės izoliacines
    medžiagas sienose, stoge ir grindyse, taip pat A++ klasės langus su dvigubu stiklu,
    kurie sumažina šilumos nuostolius ir užtikrina maksimalų komfortą. Visi mūsų namai yra
    su daliniu irengimu.`,
  },
  {
    title: "KOKIA NAMO KAINA?",
    content: `Mūsų namų kaina priklauso nuo pasirinkto modelio, dydžio ir pritaikymo galimybių.
    Kainos paprastai prasideda nuo 190 000 eurų. Norėdami gauti išsamesnę informaciją apie
    kainas ir aptarti savo poreikius, susisiekite su mūsų pardavimų komanda.`,
  },
];

export default function FunkcionalumasIr() {
  return (
    <>
      <section className='mt-[34.67px] md:mt-[80.61px]'>
        <div className='wrapper lg:px-[60px] px-[15px]'>
          <div className='flex flex-col lg:flex-row xl:gap-[118.52px] gap-[50px] justify-between relative'>
            {/* Left image */}
            <div className='hidden md:block self-start sticky top-[100px]'>
              <Image
                src='/images/home/homepage-home-pattern01.png'
                alt='Logo'
                height={611.12}
                width={523.15}
                className='w-full h-auto xl:min-w-[576px] object-contain lg:max-w-[576px] aspect-[611/525]'
              />
            </div>

            {/* Mobile image */}
            <div className='block md:hidden'>
              <Image
                src='/images/home/homepage-home-pattern01.png'
                alt='Logo'
                height={311.573}
                width={500}
                className='w-full h-full md:min-w-[342px] aspect-[342/311.573]'
              />
            </div>

            {/* Right content */}
            <div className='w-full flex md:flex-col flex-col-reverse max-w-[460px]'>
              <div>
                <p className='text-[16px] font-medium tracking-[0.16px] text-octonary mt-[59px] md:hidden'>
                  02
                  <span className='text-black text-[15px] font-medium leading-[17px] tracking-[0.15px] ml-2'>
                    Namai kuriuose noresite gyventi
                  </span>
                </p>

                <div className='flex flex-row-reverse md:flex-row items-center gap-4 md:mb-4 mb-[10px] md:mt-0 mt-[25px]'>
                  <h1 className='order-2 md:order-1 text-[30px] sm:text-[40px] font-medium md:leading-[47px] md:tracking-[0.4px] leading-[37px] tracking-[0.3px]'>
                    Funkcionalumas ir ilgamžiškumas
                  </h1>
                  <div className='order-1 md:order-2 border-2 md:min-w-[88px] min-w-[67.232px] rounded-[14px] md:h-[91px] h-[65.059px] ml-2 border-[#A9A9A9] bg-[#5C5C5C] bg-gradient-to-br flex justify-center items-center from-[rgba(255,140,26,0)] to-[rgba(255,239,148,0.2)] '>
                    <Image
                      src='/images/home/flag-like-icon.png'
                      alt='Logo'
                      height={44.511}
                      width={34.268}
                      className='w-[26.229px] h-[34.069px] aspect-[26.23/34.07] md:w-[34.268px] md:h-[44.511px] object-contain md:aspect-[34.27/44.51]'
                    />
                  </div>
                </div>

                <p className='max-w-[498px] text-[15px] md:text-[16px] leading-[21px] md:leading-[27px] tracking-[0.48px] mt-[23px] font-medium md:flex hidden'>
                  Girios namuose atsivers visų pojūčių gama: akys džiaugsis, klaidžiodamos po
                  iškalbingą būsto dizainą, pro atvirus langus namus pasieks gaivus pušyno aromatas
                  bei kartu bus gera klausytis raminančio paukštelių čiulbėjimo.
                </p>
              </div>

              {/* FAQ Section */}
              <div className='md:mt-[49.32px]'>
                {faqItems.map((faq, idx) => (
                  <Collaps
                    key={idx}
                    title={faq.title}
                    className={idx === 0 ? "border-t-0 rounded-t-[5px]" : ""}>
                    <p className='p-4 text-gray-600 text-[16px] font-medium'>{faq.content}</p>
                  </Collaps>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <MobileSection />
    </>
  );
}
