import React from 'react';
import Image from '../../Assets/Schoonheid/Bindweefselmassage.png';

const Bindweefselmassage = () => {
  return (
    <div id='Bindweefselmassage' className="bg-[#f7f1ea] flex flex-col items-center min-h-screen">
        <div className='w-[90%] h-[1px] bg-[#023A15] mx-auto'></div>
      <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto p-10">
        <div className="flex justify-center lg:justify-start w-full lg:w-1/2 md:mt-9 md:ml-[-50px]">
          <img src={Image} alt="Bindweefselmassage" className="object-contain w-60 h-60 md:w-80 md:h-auto"/>
        </div>
        <div className="text-[#567C49] mt-8 lg:mt-0 w-full lg:w-1/2 md:mr-[180px]">
          <h2 className="md:text-[60px] text-[24px] font-bold md:mb-3 mb-3 text-[#023A15]">Bindweefselmassage</h2>
          <p className="md:text-lg text-[13px] font-light mb-1">
            De effecten van een bindweefselmassage
          </p>
          <ul className="list-disc pl-5 md:text-lg text-[13px] font-light space-y-2">
            <li>Algehele verbetering van de huidconditie</li>
            <li>Stimulering aanmaak van hyaluron en elastine (en dus ook collageen)</li>
            <li>Stimulering doorbloeding waardoor werkstoffen weer beter opgenomen kunnen worden en afvalstoffen beter worden afgevoerd</li>
            <li>Fijne lijntjes worden minder zichtbaar</li>
          </ul>
          <p className="md:text-lg text-[13px] font-light mt-4">
            Het beste resultaat wordt bereikt na een kuur, bijvoorbeeld 6 weken elke week 1 massage. Daarna houd je dit resultaat vast door elke 4 tot 6 weken een bindweefselmassage in te plannen voor je huid.
          </p>
        </div>
      </div>
      <div className='text-[#567C49] md:text-lg text-[13px] font-light md:ml-[125px] md:mr-[125px] ml-10 mt-[-10px]'>
        <p>De bindweefsellaag van de huid bevat collageen. Naarmate we ouder worden, neemt de collageenproductie af en vertraagt de stofwisseling. Producten worden niet meer optimaal opgenomen, waardoor de huid slapper wordt en een vale teint krijgt.</p>
        <p>Het doel van deze massage is het stimuleren van collageen en het los masseren van verklevingen die in de huid zijn opgebouwd. Door de huid goed te doorbloeden, is de huid ook beter in staat om voedingsstoffen op te nemen.</p>
        <p>Mensen denken vaak dat deze massage heel pijnlijk is. In het begin kan een bindweefselmassage inderdaad best wel pittig aanvoelen. Tijdens een kuur wordt de druk van de massage geleidelijk opgebouwd en zal dit gevoel verminderen.</p>
      </div>
    </div>
  );
}

export default Bindweefselmassage;
