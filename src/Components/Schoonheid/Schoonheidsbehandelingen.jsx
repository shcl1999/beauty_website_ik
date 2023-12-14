import React from 'react';
import Image from '../../Assets/Schoonheid/Schoonheidsbehandelingen.png';

const Schoonheidsbehandelingen = () => {
    return (
        <div id = 'Schoonheidsbehandelingen' className="bg-[#f7f1ea] flex justify-center items-start min-h-screen" style={{minHeight: '80vh'}}> 
          <div className="flex flex-col lg:flex-row items-start lg:items-center max-w-6xl mx-auto p-10 mt-4"> 
            
          <div className="flex justify-center lg:justify-start w-full lg:w-1/2 md:mt-9 md:ml-[-50px]">
          <img src={Image} alt="Bindweefselmassage" className="object-contain w-60 h-60 md:w-80 md:h-auto"/>
        </div>

            <div className="text-[#567C49] mt-8 lg:mt-0 w-full lg:w-full md:ml-10">
              <h2 className="md:text-[60px] text-[24px] font-bold md:mb-10 mb-6 text-[#023A15]">Schoonheidsbehandelingen</h2>
              <p className="md:text-lg text-[13px] font-light mb-4">
                Stap binnen in een oase van ontspanning en natuurlijke schoonheid in onze salon, waar we exclusief werken met het natuurlijke kwaliteitsmerk 'Purlés'. Onze behandelingen zijn zorgvuldig ontworpen om een breed scala aan behoeften te voldoen, met een focus op natuurlijke producten van de hoogste kwaliteit.
              </p>
              <p className="md:text-lg text-[13px] font-light mb-4">
                Ervaar de weelde van natuurlijke huidverzorging met onze op maat gemaakte Purlés gezichtsbehandelingen. Van ontspannende reiniging tot uitgebreide anti-aging behandelingen, onze behandelingen zijn geschikt voor iedereen die op zoek is naar een stralende, natuurlijke glow.
              </p>
              <p className="md:text-lg text-[13px] font-light">
                Bij ons is elke behandeling een moment van pure verwennerij, met de hoogste kwaliteit en natuurlijke producten van 'Purlés'. Maak een afspraak en ontdek de luxe van het genieten en ontspannen in onze pedicurepraktijk.
              </p>
            </div>
          </div>
        </div>
      );
}

export default Schoonheidsbehandelingen;
