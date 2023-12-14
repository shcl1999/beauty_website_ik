import React from 'react'
import Image from '../../Assets/OverMij/OverMij.png'

const Over_Mij = () => {
    return (
        <div className="bg-[#f7f1ea] flex flex-col items-center min-h-screen" style={{minHeight:'195vh'}}>
          <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-start mt-[110px] items-center">
        <div className="lg:w-1/3">
          <img src={Image} alt="Irma" className="w-60 h-60 md:w-80 md:h-auto"/>
        </div>
        <div className="flex-1 ml-0 lg:ml-10 mt-10 lg:mt-0">
          <h2 className="text-5xl font-semibold text-center md:mt-[150px] md:mr-[80px]">Irma</h2>
        </div>
          
        </div>
        <div className='text-[#462D10] md:text-lg text-[13px] font-light md:ml-[125px] md:mr-[125px] ml-10 mt-[30px] mr-8'>
            <p className='mb-6'>Ik ben Irma en van jongs af aan heb ik aandacht voor de mens en natuur. Rond mijn achtentwintigste (1998) ontdekte ik mijn passie en ben ik in de wereld van voetverzorging gestapt, met als specialisatie pedicure voor diabetespatiënten. </p>
            <p className='mb-6'>Vanuit mijn holistische kijk op het leven, mijn drijfveer om mezelf te ontwikkelen en vanuit mijn nieuwsgierigheid heb ik me daarom verdiept in de voetverzorging en inmiddels ook in huidproblemen. Ik zoek graag samen met mijn klant naar de diepere oorzaken van eventuele voet- en huidverzorging zodat ik resultaatgericht te werk kan gaan met mijn behandelingen. De huid is de spiegel van je darmen, en je darmen zijn je tweede brein, dus voor mij staat alles in verbinding met elkaar. Daarom werk ik in mijn schoonheidssalon in Rotterdam niet alleen op huidverbetering maar ook op leefstijl en mindset. </p>
            <p className='mb-6'>Ik krijg energie als mijn klanten niet alleen met stralende voeten en/of huid naar buiten wandelen maar als ik ook de sprankeling terug zie in hun ogen. Mijn behandelingen onderscheiden zich door mijn kernwaarden: Aandacht, kwaliteit en optimaal resultaat.</p>
            <p className='mb-8'>Onderzoekend als ik ben, werd door het werk als pedicure mijn nieuwsgierigheid naar de werking van de mens aangewakkerd. Dat kwam omdat ik in mijn werk veel mensen met lichamelijke en vaak ook emotionele klachten tegen kom</p>
            <p className='italic md:text-xl text-[16px]'>“Ware schoonheid begint van binnenuit”</p>
        </div>

         <div className='text-[#462D10] md:text-lg text-[13px] font-light md:ml-[125px] md:mr-[125px] ml-10 mt-[30px] mr-8'>
            <h1 className='mt-[100px] mb-3'>Behaalde diploma’s:</h1>
            <ul className="list-disc pl-5 md:text-lg text-[13px] font-light space-y-2">
                <li>Pedicure</li>
                <li>Medisch pedicure</li>
                <li>Voetreflextherapie</li>
            </ul>
          <h1 className='mt-6 mb-3'>Schoonheidsspecialisme, gespecialiseerd in:</h1>
            <ul className="list-disc pl-5 md:text-lg text-[13px] font-light space-y-2 mb-10">
                <li>huidverbeterende bindweefsel</li>
                <li>holistische beautymassages</li>
                <li>anti cellulite cuppingmassages</li>
            </ul>
            <p className='md:mb-8 mb-7'>Met mijn massages breng ik je een diepe ontspanning zodat je dichterbij je kern komt en tot meer bewustwording komt om eventuele voet- en/of huidproblemen te verbeteren.</p>
         </div>
        </div>
      );
}

export default Over_Mij
