"use client";

import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { NavigationOptions } from "swiper/types";
import Image from "next/image";
import { useRef, useEffect, useState } from "react"; // ✅ 1. Import useState
import Link from "next/link";
import Gallery from "../Gallery";

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
        nuo 1700 Eur/m<sup>2</sup>
      </>
    ),
  },
  { label: "kambariAI", value: "4" },
];

const slides = [
  { src: "/images/giriosnamai_livingroom1.jpg", alt: "Individualių Namų Kvartalas" },
  { src: "/images/Vonia_1.webp", alt: "Individualių Namų Kvartalas" },
  { src: "/images/Miegamasis_1.webp", alt: "Individualių Namų Kvartalas" },
];

export default function Slider({ houseTitle= "Unknown" }: { houseTitle: string }) {
  const swiperRef = useRef<SwiperRef>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  // ✅ 2. State for the full-screen image gallery
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openGallery = (index: number) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };

  useEffect(() => {
    if (swiperRef.current?.swiper) {
      const navigation = swiperRef.current.swiper.params.navigation as NavigationOptions;
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <>
      <section className='mt-[20px] md:mt-[30px]'>
        <div className='wrapper mx-auto w-full'>
          <div className='relative overflow-hidden w-full'>
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              autoplay={{
                delay: 5000, // 5 seconds
                disableOnInteraction: false, // keeps autoplay running even after user interaction
              }}
              onInit={(swiper) => {
                const nav = swiper.params.navigation as NavigationOptions;
                nav.prevEl = prevRef.current;
                nav.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              className='mySwiper w-full'
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  {/* ✅ 4. Added onClick to open the gallery */}
                  <div onClick={() => openGallery(index)} className='cursor-pointer'>
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      width={1346}
                      height={669}
                      className='md:min-h-[650px] h-[353px] md:h-[650px] min-h-[332px]  w-full object-cover'
                      priority
                    />
                  </div>
                </SwiperSlide>
              ))}
              <button
                ref={prevRef}
                className='absolute left-[20px] md:left-[34.08px] top-1/2 -translate-y-1/2 z-10 transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-[#FAFAFA] backdrop-blur-[60px] cursor-pointer w-[44px] sm:w-[61.52px] h-[44px] sm:h-[61.249px] flex justify-center items-center rounded-[5px]'
                aria-label='Previous slide'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='18'
                  viewBox='0 0 20 18'
                  fill='none'
                >
                  <path
                    d='M2.21238 9.98374L6.96238 14.2337C7.05059 14.3127 7.1553 14.3753 7.27054 14.418C7.38578 14.4607 7.5093 14.4827 7.63403 14.4827C7.88595 14.4827 8.12755 14.3931 8.30568 14.2337C8.39389 14.1548 8.46385 14.0611 8.51159 13.958C8.55932 13.8549 8.58389 13.7444 8.58389 13.6328C8.58389 13.4074 8.48382 13.1912 8.30568 13.0318L5.17733 10.2328H16.184C16.436 10.2328 16.6776 10.1432 16.8558 9.98383C17.0339 9.82443 17.134 9.60823 17.134 9.38279C17.134 9.15736 17.0339 8.94116 16.8558 8.78175C16.6776 8.62235 16.436 8.53279 16.184 8.53279H5.17733L8.30568 5.73374C8.48382 5.57436 8.58389 5.35819 8.58389 5.13279C8.58389 4.90739 8.48382 4.69123 8.30568 4.53184C8.12755 4.37246 7.88595 4.28292 7.63403 4.28292C7.38212 4.28292 7.14052 4.37246 6.96238 4.53184L2.21238 8.78184C2.12408 8.86071 2.05403 8.95439 2.00624 9.0575C1.95844 9.16062 1.93384 9.27116 1.93384 9.38279C1.93384 9.49443 1.95844 9.60496 2.00624 9.70808C2.05403 9.8112 2.12408 9.90487 2.21238 9.98374Z'
                    fill='black'
                  />
                </svg>
              </button>

              <button
                ref={nextRef}
                className='absolute right-[20px] md:right-[34.08px] top-1/2 -translate-y-1/2 z-10 transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-[#FAFAFA] backdrop-blur-[60px] cursor-pointer w-[44px] sm:w-[61.52px] h-[44px] sm:h-[61.249px] flex justify-center items-center rounded-[5px]'
                aria-label='Next slide'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='18'
                  viewBox='0 0 20 18'
                  fill='none'
                >
                  <path
                    d='M17.1768 8.44959L12.4618 4.16089C12.3742 4.08125 12.27 4.0178 12.1551 3.97415C12.0402 3.9305 11.9169 3.9075 11.7922 3.90648C11.5403 3.90442 11.2979 3.99198 11.1185 4.1499C11.0297 4.2281 10.9589 4.32121 10.9103 4.42393C10.8618 4.52665 10.8363 4.63696 10.8354 4.74856C10.8335 4.97395 10.9318 5.19093 11.1087 5.35176L14.214 8.1763L3.2077 8.08629C2.95575 8.08423 2.71339 8.17181 2.53393 8.32975C2.35447 8.4877 2.25262 8.70307 2.25078 8.9285C2.24893 9.15392 2.34725 9.37094 2.5241 9.53179C2.70095 9.69265 2.94185 9.78418 3.19379 9.78624L14.2001 9.87625L11.049 12.6496C10.8696 12.8075 10.7677 13.0229 10.7659 13.2483C10.764 13.4737 10.8623 13.6906 11.0392 13.8515C11.216 14.0123 11.4568 14.1038 11.7088 14.1059C11.9607 14.1079 12.203 14.0204 12.3824 13.8625L17.167 9.65145C17.256 9.57331 17.3268 9.48021 17.3754 9.37748C17.424 9.27476 17.4495 9.16443 17.4505 9.0528C17.4514 8.94117 17.4277 8.83043 17.3807 8.72693C17.3338 8.62342 17.2645 8.52918 17.1768 8.44959Z'
                    fill='black'
                  />
                </svg>
              </button>
            </Swiper>
          </div>
        </div>

        {/* Banner Bottom */}

        <div className='min-h-[83.812px] rapper mx-auto w-full translate-y-[-2px] flex md:flex-row flex-col items-center justify-between px-[20px] md:px-[35px] py-[35px] md:py-[10px] bg-black  relative z-10 md:rounded-b-[6px]'>
          <ul className='hidden md:flex flex-wrap items-center gap-x-[28px] md:gap-[54px]'>
            {bannerDetails.map(({ label, value }, idx) => (
              <li key={idx} className='text-quinary flex items-center gap-[5px]'>
                <span className='uppercase text-[13px] font-medium leading-[31px] tracking-[1.3px]'>
                  {label}
                </span>
                <span className='bg-[#FAFAFA] h-[1px] w-[9.28px]'></span>
                <span className='text-[15px] md:text-[18px] font-[700] leading-[31px] tracking-[-0.306px]'>
                  {value}
                </span>
              </li>
            ))}
          </ul>

          {/* Mobile items */}
          <ul className='flex md:hidden items-center justify-between gap-[10px] w-full'>
            {bannerDetails.slice(0, 2).map(({ label, value }, idx) => (
              <li key={idx} className='text-quinary flex items-center gap-[5px]'>
                <span className='uppercase text-[13px] font-medium leading-[31px] tracking-[1.3px]'>
                  {label}
                </span>
                <span className='bg-[#FAFAFA] h-[1px] w-[9.28px]'></span>
                <span className='text-[15px] md:text-[18px] font-[700] leading-[31px] tracking-[-0.306px]'>
                  {value}
                </span>
              </li>
            ))}
          </ul>
          <ul className='flex md:hidden items-center justify-between gap-[10px] w-full'>
            {bannerDetails.slice(2).map(({ label, value }, idx) => (
              <li key={idx} className='text-quinary flex items-center gap-[5px]'>
                <span className='uppercase text-[13px] font-medium leading-[31px] tracking-[1.3px]'>
                  {label}
                </span>
                <span className='bg-[#FAFAFA] h-[1px] w-[9.28px]'></span>
                <span className='text-[15px] md:text-[18px] font-[700] leading-[31px] tracking-[-0.306px]'>
                  {value}
                </span>
              </li>
            ))}
          </ul>
          <Link
            href={"#contact"}
            className='transition-all duration-300 hover:opacity-90  cursor-pointer w-full md:mt-0 mt-5 lg:w-[205.2px] h-[41.414px] rounded-[8px] bg-[#0051FF] flex items-center justify-center gap-[7px] text-quinary'
          >
            <span className='text-[14px] tracking-[1.4px] uppercase text-[#FAFAFA]'>
              SUSISIEKTI Dėl <span className='font-bold'>{houseTitle}</span>
            </span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='14'
              viewBox='0 0 11 16'
              fill='none'
            >
              <path
                d='M6.48106 15.5803L10.7311 10.8303C10.81 10.7421 10.8726 10.6374 10.9153 10.5222C10.958 10.4069 10.98 10.2834 10.98 10.1587C10.98 9.90677 10.8904 9.66518 10.7311 9.48704C10.6521 9.39884 10.5585 9.32887 10.4553 9.28114C10.3522 9.2334 10.2417 9.20884 10.1301 9.20884C9.90471 9.20884 9.68854 9.30891 9.52916 9.48704L6.73011 12.6154L6.73011 1.60869C6.73011 1.35674 6.64055 1.1151 6.48115 0.93694C6.32174 0.75878 6.10554 0.658691 5.88011 0.658691C5.65468 0.658691 5.43847 0.75878 5.27907 0.93694C5.11966 1.1151 5.03011 1.35674 5.03011 1.60869L5.03011 12.6154L2.23106 9.48704C2.07168 9.30891 1.85551 9.20884 1.63011 9.20884C1.40471 9.20884 1.18854 9.30891 1.02916 9.48704C0.869777 9.66517 0.780236 9.90677 0.780236 10.1587C0.780236 10.4106 0.869777 10.6522 1.02916 10.8303L5.27916 15.5803C5.35803 15.6686 5.4517 15.7387 5.55482 15.7865C5.65794 15.8343 5.76847 15.8589 5.88011 15.8589C5.99174 15.8589 6.10228 15.8343 6.2054 15.7865C6.30851 15.7387 6.40219 15.6686 6.48106 15.5803Z'
                fill='currentColor'
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* ✅ 5. The Full-Screen Gallery (Lightbox) Component */}
      {isGalleryOpen && (
        <Gallery
          images={slides}
          setIsOpen={setIsGalleryOpen}
          selectedImageIndex={selectedImageIndex}
          setSelectedImageIndex={setSelectedImageIndex}
        />
      )}
    </>
  );
}
