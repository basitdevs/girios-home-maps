import Image from "next/image";

export default function HouseBrandDetails() {
  return (
    <div className='max-w-[1230px] mx-auto md:pb-[30px]'>
      {/* Section 1 */}
      <div className='flex flex-col-reverse md:flex-row justify-between xl:gap-0 gap-6 items-center mb-6 md:mb-[79px]'>
        <div className='ml-3 mb-10'>
          <h1 className='text-black whitespace-nowrap overflow-hidden text-ellipsis text-[28px] sm:text-[32px] md:text-[40px] font-medium leading-[36px] md:leading-[47px] tracking-[0.4px] md:text-left text-center'>
            Lyderio klasės <br />
            <span className='italic font-[800] -ml-[2px]'>
              RUKKI <sup className='text-[20px] tracking-[0.34px] -ml-2'>©</sup>
            </span>{" "}
            Metalinis stogas
          </h1>
        </div>
        <div className='max-w-[571px] w-full h-full max-h-[321px] overflow-hidden rounded-[5px]'>
          <Image
            alt='House Brand Details'
            src='/images/img1.png'
            width={300}
            height={200}
            className='w-full h-full object-cover scale-x-[-1]'
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className='flex flex-col md:flex-row justify-between xl:gap-0 gap-6 items-center mb-6 md:mb-[89px]'>
        <div className='max-w-[571px] w-full h-full max-h-[321px] rounded-[5px] overflow-hidden' >
          <Image
            alt='House Brand Details'
            src='/images/img2.png'
            width={300}
            height={200}
            className='w-full h-full object-cover'
          />
        </div>
        <div className='mb-3 max-w-[540px] pr-2.5'>
          <h1 className='text-black whitespace-nowrap overflow-hidden text-ellipsis text-[28px] sm:text-[32px] md:text-[40px] font-medium leading-[36px] md:leading-[47px] tracking-[0.4px] md:text-left text-center'>
            Tyla ir sandorumas <br />
            <span className='italic font-[800] -ml-[2px]'>
              Salamander <sup className='text-[20px] tracking-[0.34px] -ml-2'>©</sup>
            </span>{" "}
            trigubo stiklo <br /> langai
          </h1>
        </div>
      </div>

      {/* Section 3 */}
      <div className='flex flex-col-reverse md:flex-row justify-between xl:gap-0 gap-6 items-center'>
        <div className='ml-3 mb-2'>
          <h1 className='text-black whitespace-nowrap overflow-hidden text-ellipsis text-[28px] sm:text-[32px] md:text-[40px] font-medium leading-[36px] md:leading-[47px] tracking-[0.4px] md:text-left text-center'>
            Namo fasadas apdengtas <br />
            <span className='italic font-[800] -ml-[2px]'>aukštos kokybės</span> klinkeriu
          </h1>
        </div>
        <div className='max-w-[571px] w-full h-full max-h-[321px] rounded-[5px] overflow-hidden'>
          <Image
            alt='House Brand Details'
            src='/images/img3.png'
            width={300}
            height={200}
            className='w-full h-full object-cover '
          />
        </div>
      </div>
    </div>
  );
}
