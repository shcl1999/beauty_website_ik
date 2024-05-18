import React from 'react';
import Image1 from '../../Assets/Cupping/Bellabaci1.png';
import Image2 from '../../Assets/Cupping/Bellabaci2.png';
import Image3 from '../../Assets/Cupping/Bellabaci3.png';

const Bellabaci = () => {
  return (
    <div className='bg-[#D7C7B5] flex flex-col md:flex-row items-center text-white' style={{ minHeight: '70vh' }}>
      <div className='md:w-1/3 p-4 md:ml-[80px] ml-6'>
        <h2 className="text-4xl font-bold md:mb-10 mb-12 md:mt-0 mt-4">Bellabaci</h2>
        <p className="md:text-lg text-[13px] md:mb-0 mb-3">
          Bellabaci is een hoogwaardig merk met zowel duurzame cups als natuurlijke en duurzame cupping oliën die speciaal op de verschillende behoeftes van de huid afgestemd zijn. Ons advies wat betreft cupping is om uiteindelijk een kuur van 6-8 sessies te volgen, waardoor het optimale resultaat voor uw welzijn behaald kan worden.
        </p>
      </div>
      
      <div className='md:w-1/2 flex justify-around items-center p-6 md:ml-[150px] ml-2'>
        <img src={Image1} alt="Bellabaci Product 1" className="object-contain h-40 md:h-[300px] mr-6"/>
        <img src={Image2} alt="Bellabaci Product 2" className="object-contain h-40 md:h-[300px] mr-6"/>
        <img src={Image3} alt="Bellabaci Product 3" className="object-contain h-40 md:h-[300px] hidden md:block"/>
      </div>
    </div>
  );
};

export default Bellabaci;
