import Image from "next/image";
import Link from "next/link";

const cardInfo = [
  {
    number: 5,
    icon: "/icons/home-white-outlined.png",
    title: "Namai bus įrengti 2025/Q4",
    description:
      "Jau šiais metais isikelkite į naujos kartos, A++ energinės klasės namus, Vakaru gatvėje.",

    _id: "pyadfT*&*&&6&*4674",
  },
  {
    number: 10,
    icon: "/icons/percent.png",
    title: "Rezervacijos mokestis",
    description:
      "Rezervuokite ir atraskite savo ateities namus – kur architektūra susitinka su tvarumu ir funkcionalumu.",
    _id: "f6F9895%63376cv",
  },
];

export default function TobulasDerinysTarpGamtos({
  ctaText = "Rinktis namą",
  ctaHomeIcon = true,
  ctaLink = "#home-selection-map",
}: {
  ctaText?: string;
  ctaHomeIcon?: boolean;
  ctaLink?: string;
}) {
  return (
    <section className='mt-[34.67px] md:mt-[100.61px]'>
      <div className='wrapper mx-auto'>
        <div className='flex flex-col w-full bg-white'>
          <div className='relative w-full md:flex justify-center overflow-hidden items-center md:min-h-[521.462px] min-h-[696px] pt-[38px] px-[19px] lg:pt-0 lg:px-0'>
            {/* Background Image */}
            <div className='absolute inset-0 w-full h-full lg:h-[521.462px] md:rounded-[7px] overflow-hidden'>
              <div
                className='absolute top-0 left-0 w-1/2 h-full z-10 '
                style={{
                  background:
                    "linear-gradient(270deg, rgba(124, 124, 124, 0) 0%, rgba(0, 0, 0, 0.72) 100%)",
                }}
              />
              <div className='absolute inset-0 z-10 bg-[#00000033]' />
              <Image
                src='/images/home/Tobulas-derinys-tarp-gamtos-bg.jpeg'
                alt='Tobulas derinys tarp gamtos, išmanumo ir patogumo.'
                width={1351.354}
                height={521.462}
                loading='lazy'
                className='hidden md:block w-full h-full object-cover'
              />
              {/* <div className='relative '> */}
              <Image
                src='/images/nice_upscaled_2_final_wide.png'
                alt='Tobulas derinys tarp gamtos, išmanumo ir patogumo.'
                width={380.454}
                height={380.454}
                loading='lazy'
                className='w-full h-full object-cover md:hidden block'
              />
              {/* <div className='absolute top-0 left-0 w-[289px] h-[693.83px] pointer-events-none bg-[linear-gradient(270deg,_rgba(124,124,124,0)_0%,_rgba(0,0,0,0.66)_100%)]' /> */}
              {/* </div> */}
            </div>

            {/* Mobile heading */}
            <p className='text-[16px] font-medium tracking-[0.16px] text-octonary md:hidden relative z-10'>
              04
              <span className='text-[#C5C5C5] text-[15px] font-medium leading-[17px] tracking-[0.15px] ml-2'>
                Projekto eiga
              </span>
            </p>
            <p className='text-white text-[30px] font-medium leading-[37px] tracking-[0.3px] md:hidden absolute bottom-[30px] md:bottom-[36px] z-10'>
              Terminai <br /> ir rezervacija
            </p>

            {/* Desktop content */}
            <div className='max-w-[1224px] mx-auto relative z-10 h-full w-full px-4 hidden md:flex flex-col justify-center'>
              <div className='flex flex-col lg:flex-row md:items-center justify-between gap-8 lg:gap-0 xl:gap-[90px]'>
                {/* Left text */}
                <div>
                  <p className='text-[16px] font-[500] leading-[17px]  text-[#C5C5C5] mb-[35px]'>
                    Rezervacija
                  </p>
                  <h1 className='lg:inline-block text-[35px] max-w-[765px] h-[158.268px] md:text-[40px] font-medium md:leading-[40px] lg:leading-[42px] xl:leading-[47px] tracking-[0.4px] text-white'>
                    Galvokite apie savo naujus namus jau šiandien.
                  </h1>
                  <div className='lg:mt-[23.56px]'>
                    <Link
                      href={ctaLink}
                      className='transition-all duration-300 ease-in-out cursor-pointer w-[198.408px] h-[62px] flex justify-center rounded-[14px] items-center bg-white hover:bg-primary hover:text-white group text-black gap-[8.94px]'
                    >
                      <span className='text-[17px] font-semibold tracking-[0.68px] pr-[2px]'>
                        {ctaText}
                      </span>
                      {ctaHomeIcon ? (
                        <Image
                          src='/icons/home-outlined.png'
                          alt='Logo'
                          height={21.061}
                          width={21.658}
                          loading='lazy'
                          className='w-[15px] group-hover:brightness-0 group-hover:invert-[1] transition-all duration-300 ease-in-out h-[15px] sm:w-[21.061px] sm:h-[21.658px]'
                        />
                      ) : (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='12'
                          viewBox='0 0 16 12'
                          fill='none'
                        >
                          <path
                            d='M15.2491 5.42231L10.534 1.13361C10.4465 1.05397 10.3423 0.990514 10.2274 0.946863C10.1125 0.903212 9.98916 0.88022 9.86443 0.8792C9.61252 0.87714 9.3702 0.964702 9.19077 1.12262C9.10192 1.20082 9.03119 1.29393 8.98261 1.39665C8.93404 1.49936 8.90857 1.60967 8.90765 1.72128C8.90581 1.94667 9.00411 2.16365 9.18094 2.32448L12.2863 5.14902L1.27996 5.05901C1.02801 5.05695 0.785653 5.14453 0.606196 5.30247C0.426739 5.46041 0.324885 5.67579 0.323042 5.90121C0.321198 6.12664 0.419516 6.34365 0.596366 6.50451C0.773216 6.66537 1.01411 6.75689 1.26606 6.75895L12.2724 6.84896L9.12126 9.62234C8.94183 9.78026 8.83999 9.9956 8.83814 10.221C8.8363 10.4464 8.9346 10.6634 9.11143 10.8242C9.28825 10.985 9.52911 11.0765 9.78102 11.0786C10.0329 11.0807 10.2753 10.9931 10.4547 10.8352L15.2393 6.62417C15.3282 6.54602 15.399 6.45293 15.4477 6.3502C15.4963 6.24748 15.5218 6.13714 15.5227 6.02552C15.5236 5.91389 15.4999 5.80315 15.453 5.69964C15.406 5.59614 15.3368 5.5019 15.2491 5.42231Z'
                            fill='currentColor'
                          />
                        </svg>
                      )}
                    </Link>
                  </div>
                </div>

                {/* Right cards */}
                <div className='flex flex-col md:flex-row md:items-center gap-[34.23px]'>
                  {cardInfo.map(({ number, icon, title, description, _id }, idx) => (
                    <div
                      key={_id}
                      className='px-[24px] py-[30.32px] w-full md:w-[311px] sm:h-[287px] rounded-[12px] border border-[#C6C6C654] bg-[#9C9C9C87] backdrop-blur-[41px]'
                    >
                      <div className='flex items-end gap-1 mb-[13px]'>
                        <span className='text-[69px] font-[600] leading-[51px] tracking-[0.69px] text-white'>
                          {number}
                        </span>
                        {idx === 1 ? (
                          <div className='rounded-[5px] border border-white/65 bg-transparent flex items-center justify-center w-[29.514px] h-[28.859px]'>
                            <span className='font-semibold text-[15px] tracking-[1%] leading-[51px] text-white'>
                              %
                            </span>
                          </div>
                        ) : (
                          <div className='rounded-[5px] flex justify-center items-center'>
                            <Image
                              src={icon}
                              alt='Logo'
                              height={29.99}
                              width={29.99}
                              loading='lazy'
                            />
                          </div>
                        )}
                      </div>
                      <p className='text-[19px] font-[500] leading-[22px] tracking-[0.19px] text-white'>
                        {title}
                      </p>
                      <p
                        className={`mt-[73.87px] text-[15px] font-medium tracking-[0.2px] leading-[22px] text-white ${
                          idx === 1 ? "max-w-[267px]" : "max-w-[254px]"
                        }`}
                      >
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className='md:hidden flex flex-col gap-[45px] pt-[78px] pb-[60px] bg-white section-padding relative overflow-hidden'>
        <div className='relative z-10 flex flex-col gap-[42px]'>
          {cardInfo.map(({ number, icon, title, description, _id }, index) => (
            <div
              key={_id}
              className={`px-[24px] py-[30.32px] flex flex-col justify-between w-full h-[287px] rounded-[12px] backdrop-blur-[40px] border  ${
                index === 1 ? "bg-[#757061] border-[#C6C6C654]" : "bg-[#605D5B] border-[#C6C6C654]"
              }`}
            >
              <div>
                <div className='flex items-end gap-1 mb-[13px]'>
                  <span className='text-[69px] font-semibold leading-[51px] tracking-[0.69px] text-white'>
                    {number}
                  </span>
                  <div className='rounded-[5px] flex justify-center items-center'>
                    <Image src={icon} alt='Logo' height={29.99} width={29.99} loading='lazy' />
                  </div>
                </div>
                <p className='text-[19px] font-medium leading-[22px] tracking-[0.19px] text-white'>
                  {title}
                </p>
              </div>
              <p
                className={`mt-auto text-[15px] font-medium tracking-[0.2px] leading-[22px] text-[#DDDDDD] ${
                  index === 1 ? "max-w-[247.726px]" : "max-w-[243.282px]"
                }`}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
