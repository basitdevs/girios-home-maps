"use client";

import dynamic from "next/dynamic";
const GiriosNamaiForm = dynamic(() => import("./components/form/GiriosNamaiForm"));
const IndividualiuNamuKvartalas = dynamic(
  () => import("./components/IndividualiuNamuKvartalas/IndividualiuNamuKvartalas")
);
const Rome = dynamic(() => import("./components/rome/Rome"));
const FunkcionalumasIr = dynamic(() => import("./components/tobulasDerinysTarp/FunkcionalumasIr"));
const IsmanumoIrPatogumo = dynamic(
  () => import("./components/tobulasDerinysTarp/IsmanumoIrPatogumo")
);
const BannerSlider = dynamic(() => import("./components/tobulasDerinysTarpGamtos/BannerSlider"));
const TimeLine = dynamic(() => import("./components/tobulasDerinysTarpGamtos/TimeLine"));
const TobulasDerinysTarpGamtos = dynamic(
  () => import("./components/tobulasDerinysTarpGamtos/TobulasDerinysTarpGamtos")
);

export default function Page() {
  return (
    <main className='overflow-x-hidden md:overflow-visible'>
      <IndividualiuNamuKvartalas />
      <IsmanumoIrPatogumo />
      <FunkcionalumasIr />

      {/* Lazy-loaded sections */}
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
