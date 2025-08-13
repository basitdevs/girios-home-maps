import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className='sticky top-0 z-[9999] bg-white px-[15px] lg:px-0 h-[83px] md:h-[95px]'>
      <div className='wrapper xl:!max-w-[1113px]'>
        <nav className='md:h-[95.352px] md:py-0 py-[15px]'>
          <div className='h-full flex justify-between items-center'>
            {/* Logo */}
            <Link href='/'>
              <Image
                src='/logo.png'
                alt='Logo'
                height={200}
                width={200}
                className='md:w-[39.329px] w-[24px] h-[32px] md:h-[51.619] aspect-[39.33/51.62]'
              />
            </Link>

            {/* Right Section */}
            <div className='flex items-center gap-2 sm:gap-[41.81px]'>
              {/* Phone Link */}
              <Link
                href='tel:+370 619 12 200'
                aria-label='Contact to this phone number'
                className='md:flex hidden text-black sm:text-[27px] tracking-[0.42px] font-medium transition-colors hover:text-primary'>
                +370 619 12 200
              </Link>

              {/* Button */}
              <Link
                href={"#home-selection-map"}
                type='button'
                className='transition-all group duration-300 cursor-pointer bg-white w-[150px] sm:w-[198.408px] h-[49px] sm:h-[70.404px] text-black border border-primary hover:bg-primary hover:text-white rounded-[14px] flex justify-center items-center gap-[9.26px]'>
                <span className='text-[14px] sm:text-[17px] font-semibold tracking-[0.68px]'>
                  Rinktis namą
                </span>
                <Image
                  src='/icons/home-outlined.png'
                  alt='Home icon'
                  height={21.658}
                  width={21.061}
                  className='w-[15px] h-[15px] group-hover:brightness-0 group-hover:invert-[1] sm:w-[21.061px] sm:h-[21.658px] aspect-[21.06/21.66]'
                />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
