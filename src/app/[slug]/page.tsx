import Link from "next/link";
import GiriosNamaiForm from "../components/form/GiriosNamaiForm";
import Cards from "../components/HomeDetails/Cards";
import HouseBanner from "../components/HomeDetails/HouseBanner";
import HouseBrandDetails from "../components/HomeDetails/HouseBrandDetails";
import Logos from "../components/HomeDetails/Logos";
import Slider from "../components/HomeDetails/Slide";
import FunkcionalumasIr from "../components/tobulasDerinysTarp/FunkcionalumasIr";
import TobulasDerinysTarpGamtos from "../components/tobulasDerinysTarpGamtos/TobulasDerinysTarpGamtos";
import { ArrowSvg } from "../components/Icons";

type Params = Promise<{ slug: string }>;

const VALID_SLUGS = ["a4", "a7", "a6", "a5", "a3", "a2", "a1"];

export async function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export default async function HomeDetailPage({ params }: { params: Params }) {
  const { slug } = await params;

  return (
    <div className='pt-[30px] md:pt-[90px]'>
      <div className='wrapper'>
        <div className='flex items-center w-full gap-3 sm:gap-[24px] px-[15px] md:px-0'>
          <Link href={"/"} className='cursor-pointer w-10 md:w-[75px] h-12 md:h-[62px]'>
            <ArrowSvg />
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
