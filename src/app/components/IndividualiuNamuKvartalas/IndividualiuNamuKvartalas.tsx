import React from "react";
import Banner from "./Banner";

export default function IndividualiuNamuKvartalas() {
  return (
    <section className='md:pt-[86px]' id="home-selection-map">
      <div className='wrapper'>
        <div className='flex max-md:flex-col sm:flex-row sm:items-center gap-2 px-[15px] md:px-0 sm:gap-[27.01px] mb-3 md:mb-5 max-md:mt-[42px]'>
          <div className='w-[64px] sm:w-[104px] h-[34px] sm:h-[62px] flex items-center justify-center text-[18px] md:text-[30px] leading-[1] font-semibold text-black bg-white md:rounded-[12px] rounded-[25px] border border-[#707070]'>
            A++
          </div>

          <h1 className='text-[35px] leading-[112%] md:leading-[100%] md:text-[45px] lg:text-[57px] font-semibold'>
            Individualių namų kvartalas
          </h1>
        </div>
        <Banner />
      </div>
    </section>
  );
}
