export default function IsmanumoIrPatogumo() {
  const descriptionText =
    "Statomas modernus NT projektas, subalansuosiantis modernią architektūrą su artima gamta infrastruktūra, besikuriantis  Vakaru gatveje.";

  return (
    <section className='mt-[34.67px] md:mt-[80.61px] '>
      <div className='wrapper lg:px-[60px] px-[19px]'>
        {/* Heading Row */}
        <div className='flex flex-col-reverse md:flex-row justify-between md:items-center gap-[26px] md:gap-0'>
          <div className='max-w-[765.152px] w-full'>
            <h1 className='text-[30px] sm:text-[40px] text-black font-medium leading-[35px] md:leading-[47px] tracking-[0.35px] md:tracking-[0.4px]'>
              <span className='text-quaternary'>Tobulas derinys tarp</span> gamtos, išmanumo ir
              patogumo.
            </h1>
          </div>
          <ul>
            <li className='flex md:flex-col flex-row md:items-start items-center gap-2 md:gap-0'>
              <span className='text-[16px] font-medium tracking-[0.16px] text-octonary md:hidden'>
                01
              </span>
              <p className='w-[119.882px] md:min-h-[37px] text-[15px] font-medium leading-[17px] tracking-[0.15px]'>
                Informacija <span className='max-lg:hidden'>apie projekta</span>
              </p>
            </li>
          </ul>
        </div>

        {/* Description Row */}
        <div className='mt-[25px] flex flex-col md:flex-row gap-[60px]'>
          {/* Desktop Description */}
          <p className='md:max-w-[485px] hidden md:block text-[15px] md:text-[16px] font-medium leading-[24px] md:leading-[27px] tracking-[0.3px] md:tracking-[0.48px] text-nonary'>
            {descriptionText}
          </p>
          {/* Mobile Description */}
          <p className='max-w-[342px] block md:hidden text-[15px] font-medium leading-[24px] tracking-[0.3px] text-nonary'>
            {descriptionText}
          </p>

          {/* Side Text */}
          <div className='max-w-[279px] mt-5 md:mt-0 hidden md:inline'>
            <p className='text-[16px] font-medium leading-[27px] tracking-[0.48px] text-nonary'>
              Namai dideliais langais, pro kuriuos atsiveria nuostabūs gamtos vaizdai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
