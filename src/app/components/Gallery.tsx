import Image from "next/image";
import React from "react";

const Gallery = ({
  images,
  setIsOpen,
  selectedImageIndex,
  setSelectedImageIndex,
}: {
  images: any[];
  setIsOpen: any;
  selectedImageIndex: number;
  setSelectedImageIndex: any;
}) => {
  const closeGallery = () => {
    setIsOpen(false);
  };

  const goToNextSlide = () => {
    setSelectedImageIndex((prevIndex: any) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setSelectedImageIndex((prevIndex: any) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-[40px]'>
      {/* Close Button */}
      <button
        onClick={closeGallery}
        className='absolute top-4 right-4 cursor-pointer text-white size-[40px] flex items-center justify-center rounded-full bg-white  text-5xl font-bold z-50'
        aria-label='Close gallery'
      >
        <Image src={"/icons/close.svg"} alt='' width={100} height={100} className=' size-[24px]' />
      </button>

      {/* Main Content Area */}
      <div className='relative w-full h-full flex items-center justify-center p-4 md:p-8'>
        {/* Previous Button */}
        <button
          onClick={goToPrevSlide}
          className='absolute left-5 md:left-4 top-1/2 cursor-pointer -translate-y-1/2 z-40 bg-white/60 p-2 rounded-full text-black hover:bg-white/80 transition'
          aria-label='Previous image'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 md:h-8 md:w-8'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>

        {/* Image Container */}
        <div className='relative w-full h-full max-w-6xl max-h-[90vh]'>
          <Image
            src={images[selectedImageIndex].src}
            alt={images[selectedImageIndex].alt}
            layout='fill'
            objectFit='contain' // This ensures the full image is visible
            className='w-full h-full'
          />
        </div>

        {/* Next Button */}
        <button
          onClick={goToNextSlide}
          className='absolute right-5 md:right-4 top-1/2 cursor-pointer -translate-y-1/2 z-40 bg-white/60 p-2 rounded-full text-black hover:bg-white/80 transition'
          aria-label='Next image'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 md:h-8 md:w-8'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Gallery;
