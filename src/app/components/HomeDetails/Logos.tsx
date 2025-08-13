import Image from "next/image";

const brands = [
  {
    alt: "House brand 1",
    src: "/brands/logo1.png",
    width: 152,
    height: 20,
    extraClasses: "ml-9 xl:-mt-[2px]",
  },
  {
    alt: "House brand 2",
    src: "/brands/logo2.png",
    width: 92,
    height: 18,
    extraClasses: "ml-[14px] xl:mt-[2px]",
  },
  {
    alt: "House brand 3",
    src: "/brands/logo3.png",
    width: 196,
    height: 61,
    extraClasses: "ml-1 xl:mt-[2px]",
  },
  {
    alt: "House brand 4",
    src: "/brands/logo4.png",
    width: 54,
    height: 27,
    extraClasses: "ml-1.5 xl:mt-[4px]",
  },
  {
    alt: "House brand 5",
    src: "/brands/logo5.png",
    width: 87,
    height: 49,
    extraClasses: "ml-3 xl:mt-[4px]",
  },
];

export default function Logos() {
  return (
    <div className='bg-[#fafafa] max-w-[740px] sm:h-[86px] mx-auto mb-12 xl:mb-[57px] xl:mt-[12px]'>
      <div className='flex items-center sm:flex-nowrap flex-wrap sm:gap-5 gap-y-5 sm:ml-0'>
        {brands.map((brand, index) => (
          <div
            key={index}
            className={`grayscale opacity-[0.7] hover:grayscale-0 hover:opacity-100 transition duration-300 ${brand.extraClasses}`}>
            <Image
              alt={brand.alt}
              src={brand.src}
              width={brand.width}
              height={brand.height}
              className='object-contain'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
