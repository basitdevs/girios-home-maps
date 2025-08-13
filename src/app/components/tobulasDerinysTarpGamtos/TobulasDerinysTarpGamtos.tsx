import Image from "next/image";

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

export default function TobulasDerinysTarpGamtos() {
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
                className='hidden md:block w-full h-full object-cover'
              />
              <div className='relative md:hidden block'>
                <Image
                  src='/images/nice_upscaled_2_final_wide.png'
                  alt='Tobulas derinys tarp gamtos, išmanumo ir patogumo.'
                  width={380.454}
                  height={380.454}
                  className='w-full h-full object-cover'
                />
                {/* <div className='absolute top-0 left-0 w-[289px] h-[693.83px] pointer-events-none bg-[linear-gradient(270deg,_rgba(124,124,124,0)_0%,_rgba(0,0,0,0.66)_100%)]' /> */}
              </div>
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
                    <button className='transition-all duration-300 ease-in-out cursor-pointer w-[198.408px] h-[62px] flex justify-center rounded-[14px] items-center bg-white hover:bg-primary hover:text-white group text-black gap-[8.94px]'>
                      <span className='text-[17px] font-semibold tracking-[0.68px] pr-[2px]'>
                        Rinktis namą
                      </span>
                      <Image
                        src='/icons/home-outlined.png'
                        alt='Logo'
                        height={21.061}
                        width={21.658}
                        className='w-[15px] group-hover:brightness-0 group-hover:invert-[1] transition-all duration-300 ease-in-out h-[15px] sm:w-[21.061px] sm:h-[21.658px]'
                      />
                    </button>
                  </div>
                </div>

                {/* Right cards */}
                <div className='flex flex-col md:flex-row md:items-center gap-[34.23px]'>
                  {cardInfo.map(({ number, icon, title, description, _id }, idx) => (
                    <div
                      key={_id}
                      className='px-[26.24px] py-[30.32px] w-full md:w-[310.965px] sm:h-[284.1px] rounded-[12px] border border-[#C6C6C654] bg-[#9C9C9C87] backdrop-blur-[41px]'>
                      <div className='flex items-end gap-1 mb-[13px]'>
                        <span className='text-[69px] font-semibold leading-[51px] tracking-[0.69px] text-white'>
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
                            <Image src={icon} alt='Logo' height={29.99} width={29.99} />
                          </div>
                        )}
                      </div>
                      <p className='text-[19px] font-medium leading-[22px] tracking-[0.19px] text-white'>
                        {title}
                      </p>
                      <p className='mt-[73.87px] text-[15px] font-normal tracking-[0.2px] leading-[22px] text-white'>
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
        <div className='relative z-10 flex flex-col gap-[45px]'>
          {cardInfo.map(({ number, icon, title, description, _id }, index) => (
            <div
              key={_id}
              className={`px-[26.24px] py-[30.32px] w-full h-[284.1px] rounded-xl border border-[#c6c6c654] ${
                index === 1 ? "bg-[#757061]" : "bg-[#605D5B]"
              }`}>
              <div className='flex items-end gap-1 mb-[13px]'>
                <span className='text-[69px] font-semibold leading-[51px] tracking-[0.69px] text-white'>
                  {number}
                </span>
                <div className='rounded-[5px] flex justify-center items-center'>
                  <Image src={icon} alt='Logo' height={29.99} width={29.99} />
                </div>
              </div>
              <p className='text-[19px] font-medium leading-[22px] tracking-[0.19px] text-white'>
                {title}
              </p>
              <p
                className={`mt-[52.6px] text-[15px] font-normal tracking-[0.2px] leading-[22px] text-[#DDD] ${
                  index === 1 ? "max-w-[247.726px]" : "max-w-[243.282px]"
                }`}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
