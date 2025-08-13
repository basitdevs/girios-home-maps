import Image from "next/image";

export default function TimeLine() {
  const desktopEvents = [
    {
      left: "0%",
      color: "bg-[#39AB65]",
      title: "2024 Q1",
      subtitle: "Statybų pradžia",
      titleClass: "ml-[100px]",
      subtitleClass: "ml-[90px]",
    },
    { left: "25%", color: "bg-[#39AB65]" },
    {
      left: "50%",
      color: "bg-gray-300",
      title: "2025 Q4",
      subtitle: "5 Individualus namai",
    },
    { left: "75%", color: "bg-gray-300" },
    {
      left: "100%",
      color: "bg-gray-300",
      title: "2026 Q4",
      subtitle: "Statybų pradžia",
      titleClass: "text-nowrap mr-[125px]",
      subtitleClass: "mr-[145px]",
    },
  ];

  const mobileEvents = [
    {
      color: "bg-[#1CBD7D]",
      title: "2024 Q1",
      subtitle: "Statybų pradžia",
      icon: { src: "/images/icons/polygon.svg", w: 18, h: 18 },
    },
    {
      color: "bg-gray-300",
      title: "2025 Q4",
      subtitle: "5 Individualus namai",
      icon: { src: "/images/icons/home.png", w: 16, h: 17 },
    },
    {
      color: "bg-gray-300",
      title: "2026 Q4",
      subtitle: "Statybų pradžia",
      icon: { src: "/images/icons/right.svg", w: 15, h: 15 },
    },
  ];

  return (
    <div className='wrapper mx-auto bg-[#F3F3F3] overflow-hidden md:translate-y-[-15px]  relative z-[99] rounded-[7px]'>
      <div className='w-full mx-auto lg:pb-[86px] pb-[62px] pt-[60px] md:pt-[80px]'>
        <h2 className='text-[31px] text-center sm:text-[42px] font-semibold'>Statybų eiga</h2>
        <div className='w-full'>
          {/* ===== Desktop View ===== */}
          <div className='hidden lg:flex section-padding'>
            <div className='w-full max-w-[800px] xl:max-w-[1098.03px] mx-auto mt-[40px] md:mt-[62.09px]'>
              <div className='flex justify-between mb-4 md:mb-6'>
                <div className='w-[45%] text-left ml-[17%]'>
                  <p className='text-[18px] font-medium leading-[17px] tracking-[0.18px]'>
                    Sklypo formavimo darbai
                  </p>
                </div>
                <div className='w-[45%] text-right mr-[22.5%]'>
                  <p className='text-[18px] font-medium leading-[17px] tracking-[0.18px]'>
                    Fasado darbai
                  </p>
                </div>
              </div>

              <div className='relative w-full h-[120px] md:h-[140px]'>
                {/* Timeline base line */}
                <div className='absolute h-[1px] bg-[#000000] top-[9px] left-0 right-0'></div>
                <div className='absolute h-[1px] bg-[#39AB65] top-[9px] left-0 w-[25%]'></div>

                <div className='relative flex w-full'>
                  {desktopEvents.map((event, idx) => (
                    <div
                      key={idx}
                      style={{ left: event.left }}
                      className='absolute transform -translate-x-1/2'>
                      <div className='flex flex-col items-center'>
                        <div
                          className={`w-[14px] h-[14px] md:w-[16px] md:h-[16px] rounded-full ${event.color} mb-4 md:mb-[21.17px] z-10`}></div>
                        {event.title && (
                          <>
                            <h2
                              className={`text-[25px] md:text-[40px] font-medium leading-[47px] tracking-[0.4px] ${
                                event.titleClass || ""
                              }`}>
                              {event.title}
                            </h2>
                            <p
                              className={`text-[18px] font-medium leading-[17px] tracking-[0.18px] mt-[9.54px] ${
                                event.subtitleClass || ""
                              }`}>
                              {event.subtitle}
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ===== Mobile View ===== */}
          <div className='flex lg:hidden section-padding justify-center'>
            <div className='w-full max-w-[1120.03px] mx-auto mt-[72px]  md:mt-[62.09px]'>
              <div className='relative ml-[30%] translate-x-[-25px]'>
                {/* Vertical line */}
                <div className='absolute -left-4 top-0 h-[80%] w-[3px] bg-[#CECECE] rounded-full'></div>
                <div className='absolute -left-4 top-0 h-[45%] w-[3px] bg-[#1CBD7D] rounded-full'></div>

                <div className='space-y-8 pl-[17px]'>
                  {mobileEvents.map((event, idx) => (
                    <div key={idx} className={`relative ${idx > 0 ? "pt-2" : ""}`}>
                      <div
                        className={`absolute -left-[42px] ${
                          idx === 0 ? "top-0" : "top-3"
                        } h-5 w-5 rounded-full ${event.color}`}></div>
                      <h3 className='text-xl font-bold text-[#000000]'>{event.title}</h3>
                      <div className='flex items-center gap-[6px]'>
                        <p className='text-lg font-medium text-[#000000]'>{event.subtitle}</p>
                        <Image
                          src={event.icon.src}
                          alt='icon'
                          width={event.icon.w}
                          height={event.icon.h}
                          className={`flex-shrink-0 w-[${event.icon.w}px] h-[${event.icon.h}px]`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
