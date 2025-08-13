import Image from "next/image";
import React from "react";

const Rome = () => {
  return (
    <div className='wrapper lg:px-[60px] px-[19px] mx-auto'>
      <div className='mt-[80.61px]'>
        <div className='flex flex-col xl:flex-row justify-between gap-6 xl:gap-0 max-xl:max-w-[480px] max-xl:mx-auto'>
          {/* Left Section */}
          <div className='flex flex-row items-center xl:items-end'>
            <div className='w-[306px] h-[453px] rounded-[6px] overflow-hidden '>
              <Image
                src='/images/rome/rome01.png'
                alt='Contact Image'
                width={305}
                height={453}
                className='w-full h-full object-cover'
              />
            </div>
            <p className='flex items-end w-full sm:max-w-[150px] mt-4 sm:mt-0 sm:ml-[23px] text-[#626262] font-semibold text-[15px] leading-[21px] text-center sm:text-left tracking-[0.3px]'>
              Pro atvirus langus namus pasieks gaivus pušyno aromatas bei kartu bus gera klausytis
              raminančio paukštelių čiulbėjimo.
            </p>
          </div>

          {/* Right Section */}
          <div className='flex flex-col xl:justify-between items-center xl:items-start'>
            <Image
              src='/images/rome/rome02.png'
              alt='Contact Image'
              width={612}
              height={389}
              className='w-full max-w-[612px]'
            />
            <p className='text-[#626262] text-[15px] leading-[21px] max-w-[325px] font-[600] text-center xl:text-left'>
              Atraskite savo pojūčių gamą – leiskite gamtai Jūs įkvėpti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rome;
