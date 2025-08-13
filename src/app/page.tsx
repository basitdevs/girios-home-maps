import GiriosNamaiForm from "./components/form/GiriosNamaiForm";
import IndividualiuNamuKvartalas from "./components/IndividualiuNamuKvartalas/IndividualiuNamuKvartalas";
import Rome from "./components/rome/Rome";
import FunkcionalumasIr from "./components/tobulasDerinysTarp/FunkcionalumasIr";
import IsmanumoIrPatogumo from "./components/tobulasDerinysTarp/IsmanumoIrPatogumo";
import BannerSlider from "./components/tobulasDerinysTarpGamtos/BannerSlider";
import TimeLine from "./components/tobulasDerinysTarpGamtos/TimeLine";
import TobulasDerinysTarpGamtos from "./components/tobulasDerinysTarpGamtos/TobulasDerinysTarpGamtos";

export default function page() {
  return (
    <main className='overflow-x-hidden md:overflow-visible'>
      <IndividualiuNamuKvartalas />
      <IsmanumoIrPatogumo />
      <FunkcionalumasIr />
      <div className='hidden md:block'>
        <Rome />
      </div>
      <TobulasDerinysTarpGamtos />
      <BannerSlider />
      <TimeLine />
      <GiriosNamaiForm />
    </main>
  );
}
