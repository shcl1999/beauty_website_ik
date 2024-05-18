import React from 'react'
// import Image from '../../Assets/Cupping/Cupping.png'
import CuppingImage from '../../Assets/Home/Cupping.png';

const Cupping = () => {
  return (
    <div className="bg-[#f7f1ea] flex flex-col items-center min-h-screen" style={{minHeight: '120vh'}}>
      <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto p-10">
        <div className="flex justify-center lg:justify-start w-full lg:w-1/2 md:mt-9 md:ml-[-50px]">
          <img src={CuppingImage} alt="Bindweefselmassage" className="object-contain w-60 h-60 md:w-80 md:h-auto"/>
        </div>
        <div className="text-[#567C49] mt-8 lg:mt-0 w-full lg:w-1/2 md:mr-[180px] md:ml-[-100px]">
          <p className="md:text-lg text-[13px] font-bold mb-1">
            De voordelen van cupping:
          </p>
          <ul className="list-disc pl-5 md:text-lg text-[13px] font-light space-y-2">
            <li>Verbeterde Doorbloeding: Stimuleert een gezonde bloedsomloop voor een stralende huid.</li>
            <li>Vermindering van pijnlijke en gespannen spieren</li>
            <li>Lymfedrainage: Ondersteunt het natuurlijke ontgiftingsproces van uw lichaam.</li>
            <li>Cellulite vermindering: Draagt ​​bij een gladdere huidtextuur.</li>
          </ul>

        </div>
      </div>
      <div className='text-[#567C49] md:text-lg text-[13px] font-light md:ml-[125px] md:mr-[125px] ml-10 mt-[-10px] mr-[22px]'>
        <p className='font-bold'>Cupping:</p>
        <p className='mb-5'>Cupping is de eeuwenoude techniek, waarbij speciale glazen of siliconen cups op de huid worden geplaatst om een ​​zacht vacuüm te creëren. Deze methode bevordert de bloedcirculatie, verlicht spierspanning en stimuleert een gezonde lymfestroom.</p>
        {/* <p className='font-bold'>Hoe ziet een Cuppingbehandeling eruit:</p>
        <ul className="list-disc pl-3 md:text-lg text-[13px] font-light space-y-2 mb-5">
            <li>Een fijne voetreflexmassage op de meridianen en de drukpunten. </li>
            <li >De sessie wordt met Cupping voortgezet, waar u met behulp van Bellabaci siliconen cups gemasseerd wordt. </li>
        </ul> */}
        <p className='font-bold'>Cupping als Kuur:</p>
        <p className='mb-5'>De kracht van Cupping komt het beste tot uiting bij karakteristieke behandelingen. Onze aanbevolen
          kuur van 6-8 sessies biedt niet alleen directe voordelen, maar ook langdurige resultaten. Elke sessie
          draagt ​​bij aan een geleidelijke verbetering van uw welzijn en huidconditie.
          Ontdek de verjongende reis van Cupping en investeer in de gezondheid en schoonheid van uw
          lichaam. Plan vandaag nog een afspraak en ervaar de voordelen van deze unieke behandeling.
        </p>
        <p className='font-bold'>Detoxbehandeling voetreflex in combinatie met cupping</p>
        <p className='mb-5'>Ervaar de Detox Voetreflex in combinatie met Cupping-behandeling voor een totale ontspanning en
          het ontgiften van het lichaam.
          De behandeling begint met een fijne voetreflexmassage op de meridianen en de drukpunten. Dit
          beïnvloedt niet alleen de ontgifting van het lichaam, maar stimuleert ook de natuurlijke
          energiecirculatie. Vervolgens wordt de sessie met Cupping voortgezet, waar u met behulp van
          Bellabaci siliconen cups gemasseerd wordt. Dit stimuleert de doorbloeding, verlicht de spierspanning
          en draagt ​​bij aan een diepgaand gevoel van ontspanning.
          De Detox Voetreflex en Cupping-behandeling is voor iedereen die verlangt naar diepgaande
          ontspanning, stressvermindering en het stimuleren van het natuurlijke ontgiftingsproces in het
          lichaam. Het is een heilzame ervaring die niet alleen het lichaam, maar ook de geest koestert, een
          welverdiende ontsnapping uit het hectische dagelijkse leven.
      </p>
      </div>
    </div>
  );
}

export default Cupping
