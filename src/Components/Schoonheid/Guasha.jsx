import React from 'react'
import Image from '../../Assets/Schoonheid/Guasha.png'

const Guasha = () => {
    return (
        <div id='Guasha' className="bg-[#f7f1ea] flex flex-col items-center min-h-screen">
            <div className='w-[90%] h-[1px] bg-[#023A15] mx-auto my-3'></div>
          <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto p-10">
            <div className="flex justify-center lg:justify-start w-full lg:w-1/2 md:mt-9 md:ml-[-130px]">
              <img src={Image} alt="Bindweefselmassage" className="object-contain w-60 h-60 md:w-80 md:h-auto"/>
            </div>
            <div className="text-[#567C49] mt-8 lg:mt-0 w-full lg:w-1/2 md:mr-[180px] md:ml-[-30px]">
              <h2 className="md:text-[60px] text-[24px] font-bold md:mb-3 mb-3 text-[#023A15]">Guasha</h2>
              <p className="md:text-lg text-[13px] font-light mb-1">
                De effecten van een Guasha-gezichtsbehandeling:
              </p>
              <ul className="list-disc pl-5 md:text-lg text-[13px] font-light space-y-2">
                <li>Een zachte huid</li>
                <li>Een betere doorbloeding en bevordering van een strakke/gladde huid</li>
                <li>Versteviging van het bindweefsel</li>
                <li>Bevordert ontwikkeling van collageen</li>
                <li>Reinigend en diep zuiverend (detox)</li>
                <li>Vermindering van vocht in het gezicht</li>
                <li>Een diepe ontspanning en rust</li>
              </ul>
            </div>
          </div>
          <div className='text-[#567C49] md:text-lg text-[13px] font-light md:ml-[125px] md:mr-[125px] ml-10 mt-[-10px]'>
            <p>Guasha is een eeuwenoude massagetechniek die zijn oorsprong vindt in het verre Oosten. Guasha betekent letterlijk ‘schrapen’. Bij deze massage wordt gebruik gemaakt van een jadesteen.</p>
            <p>Deze ontspannende en zachte behandeling verbetert de energie-doorstroming en de bloed- en lymfecirculatie. Daarnaast verwijdert het afvalstoffen en zorgt het voor een betere collageenproductie. Een Guasha-gezichtsbehandeling verstevigt het bindweefsel, zorgt voor een frisse uitstraling en een gezonde kleur. Een gezichtsbehandeling met een Guasha-steen heeft een positief effect op de hele gezondheid.</p>
          </div>
        </div>
      );
}

export default Guasha
