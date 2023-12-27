import React from 'react';
import Image from '../../Assets/Pedicure/Pedicure1.png';

const Basis = () => {
  return (
    <div className="bg-[#f7f1ea] flex justify-center items-center h-[80hv]"> 
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto p-10 mt-7"> 
        
        <div className="flex justify-center lg:justify-start w-full lg:w-1/2 md:mt-9 md:ml-[-80px]">
          <img src={Image} alt="Bindweefselmassage" className="object-contain w-60 h-60 md:w-80 md:h-auto"/>
        </div>
        
        <div className="text-[#567C49] flex-1 mt-4 md:mt-0 md:mr-[250px] md:ml-[80px]">
          <h2 className="monsterrat md:text-lg text-[13px] font-bold mb-4 md:whitespace-nowrap md:mt-12">Een basis pedicurebehandeling houdt het volgende in:</h2>
          <ul className="list-disc pl-5 md:text-lg text-[13px] font-light space-y-2">
            <li>Analyse van de voet</li>
            <li>Nagelriemen verzorgen</li>
            <li>Knippen van de nagels</li>
            <li>Ingroeiende teennagels behandelen</li>
            <li>Overbodig eelt verwijderen</li>
            <li>Verwijderen van eventuele likdoorns</li>
            <li>Frezen en polijsten van de nagels</li>
            <li>Verzorgende voetencrème.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Basis;
