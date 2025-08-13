import Image from "next/image";
import React from "react";

const houseDetails = [
  {
    id: 1,
    value: "A++",
    title: "Energijos Klasė",
    description: "Aukščiausias įvertinimas Jūsų komfortui ir mažesnėms išlaidoms.",
    hoverIcon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='11'
        height='17'
        viewBox='0 0 11 17'
        fill='none'
        className='md:group-hover:text-decimal text-decimal md:text-grey-1 transition-all duration-300'>
        <path
          d='M4.96974 1.27487L1.21964 5.96231C1.15001 6.04935 1.09477 6.15269 1.05708 6.26641C1.0194 6.38013 1 6.50202 1 6.62512C1 6.87372 1.07901 7.11213 1.21964 7.28792C1.28928 7.37496 1.37195 7.44401 1.46293 7.49111C1.55391 7.53822 1.65143 7.56246 1.74991 7.56246C1.94879 7.56246 2.13953 7.46371 2.28017 7.28792L4.74998 4.20077L4.74998 15.0625C4.74998 15.3111 4.829 15.5496 4.96966 15.7254C5.11031 15.9012 5.30108 16 5.5 16C5.69892 16 5.88969 15.9012 6.03034 15.7254C6.171 15.5496 6.25002 15.3111 6.25002 15.0625L6.25002 4.20077L8.71983 7.28792C8.86047 7.46371 9.05121 7.56246 9.2501 7.56246C9.44898 7.56246 9.63972 7.46371 9.78036 7.28792C9.92099 7.11213 10 6.87372 10 6.62512C10 6.37652 9.92099 6.1381 9.78036 5.96231L6.03026 1.27487C5.96067 1.18773 5.87802 1.11861 5.78703 1.07144C5.69604 1.02428 5.5985 1 5.5 1C5.4015 1 5.30396 1.02428 5.21297 1.07144C5.12198 1.11861 5.03933 1.18773 4.96974 1.27487Z'
          fill='currentColor'
          stroke='currentColor'
        />
      </svg>
    ),
  },
  {
    id: 2,
    value: "85%",
    title: "Baigtumas",
    description: "Laisvė kurti savo svajonių namų interjerą.",
    hoverIcon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='14'
        height='17'
        viewBox='0 0 14 17'
        fill='none'
        className='md:group-hover:text-decimal text-decimal md:text-grey-1 transition-all duration-300'>
        <path
          d='M2 9.1862L5.44555 14L12 2'
          stroke='currentColor'
          strokeWidth='3'
          strokeLinecap='round'
        />
      </svg>
    ),
  },
  {
    id: 3,
    value: "25cm",
    title: "Akytojo betono sienos",
    description: "Tvirtumas, šiluma ir puiki garso izoliacija.",
    hoverIcon: (
      <span className='w-[17px] h-[17px] md:opacity-[0.11] group-hover:opacity-100 transition-all duration-300 group-hover:text-decimal'>
        <Image
          src='/icons/house-details-3.png'
          alt='House Details'
          width={17}
          height={17}
          className='md:group-hover:hidden md:block hidden'
        />
        <Image
          src='/icons/house-details-3-colored.png'
          alt='House Details'
          width={17}
          height={17}
          className='md:group-hover:block md:hidden'
        />
      </span>
    ),
  },
  {
    id: 4,
    value: "10a",
    title: "Žemės plotai",
    description: "Erdvus privatus kiemas ir vieta automobiliui.",
    hoverIcon: (
      <svg
        className='md:group-hover:text-decimal text-decimal md:text-grey-1 transition-all duration-300'
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='12'
        viewBox='0 0 24 12'
        fill='none'>
        <path
          d='M12.229 11L2 6.25424L12.229 1L22 6.25424L12.229 11Z'
          fill='currentColor'
          stroke='currentColor'
        />
      </svg>
    ),
  },
];

const Cards = () => {
  return (
    <div className='md:px-[60px] px-[15px]'>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 py-14 xl:py-[81px] gap-4 xl:gap-[42px] ml-[6px]'>
        {houseDetails.map((item) => (
          <div
            key={item.id}
            className={`group bg-[#f6f6f6] rounded-md pt-[34px] pl-[27px] pr-[18px] pb-[25px] hover:bg-[linear-gradient(123deg,#F6F6F6_3.17%,#D7D7D7_223.59%)] transition-all duration-300`}>
            {/* Top Row */}
            <div className='flex justify-between mb-[2px]'>
              <div
                className={`w-[43px] group-hover:bg-[#39ab65] group-hover:w-[103px] transition-all duration-500 ease-in-out bg-primary h-[3px] mt-1 ml-[2px]`}
              />
              <span className='group-hover:text-primary text-[#2e7255] md:text-[#d2d2d2]'>{item.hoverIcon}</span>
            </div>

            {/* Content */}
            <div>
              <h1 className='text-black text-[45px] leading-[1] font-semibold tracking-[-0.9px]'>
                {item.value}
              </h1>
              <h4 className='text-black text-[19px] leading-[1] mt-[11px] font-medium mb-[18px]'>
                {item.title}
              </h4>
              <p className='text-black text-[14px] font-medium leading-[20px] tracking-[0.42px]'>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
