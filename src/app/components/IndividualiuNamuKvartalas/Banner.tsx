import Image from "next/image";
import ImageMapPro from "../ImageMapPro";

const bannerDetails = [
  { label: "STATYBOS M.", value: "2025/2026 m." },
  {
    label: "PLOTAS",
    value: (
      <>
        121 m<sup>2</sup>
      </>
    ),
  },
  {
    label: "Kaina",
    value: (
      <>
        nuo 2.200 Eur/m<sup>2</sup>
      </>
    ),
  },
  { label: "kambariAI", value: "5" },
];

const Banner = () => {
  return (
    <div className='flex flex-col'>
      {/* Banner Image */}
      <div className='relative max-w-[1346px] mx-auto overflow-hidden'>
        <ImageMapPro />

        {/* Top left text */}
        <div className='absolute z-[10] flex w-full h-fit justify-between lg:px-[55px] top-auto bottom-[14px] md:top-[50px] px-[15px]'>
          <h3 className='text-[#C5C5C5] font-urbanist text-[13px] leading-[18px] md:text-[16px] font-semibold tracking-[0.2px] flex items-center gap-[5px] md:gap-[10px]'>
            Laisvu namų skaičius:{" "}
            <span className='size-[19px] md:size-[25px] text-[15px] md:text-[20px] leading-[17px] font-bold flex items-center justify-center bg-white text-black  rounded-full'>
              6
            </span>
          </h3>
          <div className='hidden md:flex items-center gap-[10px]'>
            <div className='w-[16px] h-[22px]'>
              <Image
                src='/images/logo2.png'
                alt='girios-namai-logo'
                width={25}
                height={25}
                className='w-full h-[20px] object-contain'
              />
            </div>
            <h3 className='text-white font-semibold text-[18px] leading-[100%] font-urbanist'>
              Girios Namai
            </h3>
          </div>
        </div>
      </div>

      {/* Banner Bottom */}
      <div className='min-h-[83.812px] max-w-[1346px] translate-y-[-2px] flex md:flex-row flex-col items-center justify-between px-[15px] md:px-[35px] py-[35px] md:py-[10px] mx-auto overflow-hidden w-full bg-black  relative z-10 md:rounded-b-[6px]'>
        <ul className='flex flex-wrap items-center gap-x-[28px] md:gap-[54px]'>
          {bannerDetails.map(({ label, value }, idx) => (
            <li key={idx} className='text-quinary flex items-center gap-[5.73px]'>
              <span className='uppercase text-[13px] font-medium leading-[31px] tracking-[1.3px]'>
                {label}
              </span>
              <span className='bg-[#FAFAFA] h-[1px] w-[9.28px]'></span>
              <span className='text-[13px] md:text-[18px] font-semibold leading-[31px] tracking-[-0.306px]'>
                {value}
              </span>
            </li>
          ))}
        </ul>

        <button className='transition-all duration-300 hover:opacity-90  cursor-pointer w-full md:mt-0 mt-5 lg:w-[205.2px] h-[41.414px] rounded-[8px] bg-septenary flex items-center justify-center gap-[7px] text-quinary'>
          <span className='text-[14px] tracking-[1.4px] uppercase'>projekto planas</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='14'
            viewBox='0 0 11 16'
            fill='none'>
            <path
              d='M6.48106 15.5803L10.7311 10.8303C10.81 10.7421 10.8726 10.6374 10.9153 10.5222C10.958 10.4069 10.98 10.2834 10.98 10.1587C10.98 9.90677 10.8904 9.66518 10.7311 9.48704C10.6521 9.39884 10.5585 9.32887 10.4553 9.28114C10.3522 9.2334 10.2417 9.20884 10.1301 9.20884C9.90471 9.20884 9.68854 9.30891 9.52916 9.48704L6.73011 12.6154L6.73011 1.60869C6.73011 1.35674 6.64055 1.1151 6.48115 0.93694C6.32174 0.75878 6.10554 0.658691 5.88011 0.658691C5.65468 0.658691 5.43847 0.75878 5.27907 0.93694C5.11966 1.1151 5.03011 1.35674 5.03011 1.60869L5.03011 12.6154L2.23106 9.48704C2.07168 9.30891 1.85551 9.20884 1.63011 9.20884C1.40471 9.20884 1.18854 9.30891 1.02916 9.48704C0.869777 9.66517 0.780236 9.90677 0.780236 10.1587C0.780236 10.4106 0.869777 10.6522 1.02916 10.8303L5.27916 15.5803C5.35803 15.6686 5.4517 15.7387 5.55482 15.7865C5.65794 15.8343 5.76847 15.8589 5.88011 15.8589C5.99174 15.8589 6.10228 15.8343 6.2054 15.7865C6.30851 15.7387 6.40219 15.6686 6.48106 15.5803Z'
              fill='currentColor'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Banner;
