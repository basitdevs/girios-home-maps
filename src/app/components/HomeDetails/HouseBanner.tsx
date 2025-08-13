import Image from "next/image";

export default function HouseBanner() {
  return (
    <section className='max-w-[1248px] mx-auto mb-20 xl:mb-[131px]'>
      <div className='md:ml-5 md:mr-[8px] relative'>
        {/* Main Banner */}
        <Image
          alt='House Banner'
          src='/images/homedetail-bannner.jpg'
          width={1500}
          height={500}
          className='w-full h-[389px] object-cover md:rounded-md'
        />

        {/* Logo in bottom-right */}
        <div className='absolute right-[36.88px] bottom-[30.77px] z-10 w-4 sm:w-[27px] h-5 sm:h-[35px]'>
          <Image
            alt='girios-namai-logo'
            src='/images/logo2.png'
            width={100}
            height={100}
            className='w-full h-full object-cover'
          />
        </div>

        {/* Right side gradient overlay */}
        <div
          className='absolute top-0 right-0 bottom-0 w-[220px] md:w-[345px] md:rounded-md !rotate-180'
          style={{
            background:
              "linear-gradient(270deg, rgba(124, 124, 124, 0) 0%, rgba(0, 0, 0, 0.72) 100%)",
          }}></div>
      </div>
    </section>
  );
}
