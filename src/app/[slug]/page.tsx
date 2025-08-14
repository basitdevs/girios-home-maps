import Link from "next/link";
import GiriosNamaiForm from "../components/form/GiriosNamaiForm";
import Cards from "../components/HomeDetails/Cards";
import HouseBanner from "../components/HomeDetails/HouseBanner";
import HouseBrandDetails from "../components/HomeDetails/HouseBrandDetails";
import Logos from "../components/HomeDetails/Logos";
import Slider from "../components/HomeDetails/Slide";
import FunkcionalumasIr from "../components/tobulasDerinysTarp/FunkcionalumasIr";
import TobulasDerinysTarpGamtos from "../components/tobulasDerinysTarpGamtos/TobulasDerinysTarpGamtos";

type Params = Promise<{ slug: string }>;

export default async function HomeDetailPage({ params }: { params: Params }) {
  const { slug } = await params;

  return (
    <div className='pt-[30px] md:pt-[90px]'>
      <div className='wrapper '>
        <div className='flex items-center w-full gap-3 sm:gap-[24px] px-[15px] md:px-0'>
          <Link href={"/"} className='cursor-pointer w-10 md:w-[75px] h-12 md:h-[62px]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='75'
              height='62'
              viewBox='0 0 75 62'
              fill='none'
              className='w-full h-full'>
              <rect
                x='0.5'
                y='-0.5'
                width='74'
                height='61'
                rx='11.5'
                transform='matrix(1 0 0 -1 0 61)'
                fill='white'
                stroke='black'></rect>
              <path
                d='M26.4581 32.0605L34.2705 39.5607C34.4156 39.7 34.5878 39.8105 34.7773 39.8858C34.9669 39.9612 35.17 40 35.3752 40C35.7895 40 36.1869 39.842 36.4799 39.5607C36.6249 39.4214 36.74 39.2561 36.8185 39.0741C36.897 38.8922 36.9374 38.6971 36.9374 38.5002C36.9374 38.1024 36.7728 37.7209 36.4799 37.4397L31.3346 32.5L49.4375 32.5C49.8519 32.5 50.2493 32.342 50.5424 32.0607C50.8354 31.7794 51 31.3978 51 31C51 30.6022 50.8354 30.2206 50.5424 29.9393C50.2493 29.658 49.8519 29.5 49.4375 29.5L31.3346 29.5L36.4799 24.5603C36.7728 24.2791 36.9374 23.8976 36.9374 23.4998C36.9374 23.102 36.7728 22.7206 36.4799 22.4393C36.1869 22.158 35.7895 22 35.3752 22C34.9609 22 34.5635 22.158 34.2705 22.4393L26.4581 29.9395C26.3129 30.0787 26.1977 30.244 26.1191 30.4259C26.0405 30.6079 26 30.803 26 31C26 31.197 26.0405 31.3921 26.1191 31.5741C26.1977 31.756 26.3129 31.9213 26.4581 32.0605Z'
                fill='black'></path>
            </svg>
          </Link>
          <h1 className='text-[28px] sm:text-[35px] leading-[1.2] md:text-[45px] lg:text-[57px] font-semibold'>
            Namas - <span className='capitalize'>{slug}</span>
          </h1>
        </div>
        <Slider />
        <Cards />
        <Logos />
        <HouseBanner />
        <HouseBrandDetails />
        <FunkcionalumasIr />
        <TobulasDerinysTarpGamtos ctaText='Susisiekti' ctaHomeIcon={false} ctaLink='#contact' />
        <GiriosNamaiForm />
      </div>
    </div>
  );
}
