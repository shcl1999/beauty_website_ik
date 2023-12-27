import React from 'react';
import Pedicure from '../../Assets/Home/Pedicure.png';
import Schoonheid from '../../Assets/Home/Schoonheid.png';
import Cupping from '../../Assets/Home/Cupping.png';
import Voetreflex from '../../Assets/Home/Voetreflex.png';
import { useNavigate } from 'react-router-dom';

const Behandelingen = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  }
  const fixedBoxHeight = '110px';
  return (
    <div id = 'Behandelingen' className="bg-[#f7f1ea] w-full h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <p className='cormorant font-light md:text-[76px] text-[35px] text-[#462D10] mb-3 md:mt-[-100px]'>Behandelingen</p>
        <p className='font-medium md:text-[18px] text-mdtext-[#716313] mb-[80px]'>In onze salon vindt u de volgende behandelingen</p>
      </div>
      <div className='grid md:grid-cols-4 grid-cols-2 gap-[70px] p-10 w-full max-w-6xl mt-[-30px]'>
      
      <div onClick={() => handleNavigate('/Pedicure')} className="relative text-center cursor-pointer">
        <img src={Pedicure} alt="Pedicure" className='w-full h-auto' />
        <div className="absolute bottom-0 mb-[-80px] left-1/2 transform -translate-x-1/2 bg-white w-[95%] p-3 border-3" style={{ height: fixedBoxHeight }}>
          <h3 className="text-lg font-light text-[#462D10] mt-[-5px]">Pedicure</h3>
          <p className='text-[#716313] font-light text-[13px]'>Voel het verschil in elke stap!</p>
        </div>
      </div>

      <div onClick={() => handleNavigate('/Schoonheid')} className="relative text-center cursor-pointer">
        <img src={Schoonheid} alt="Schoonheid" className='w-full h-auto' />
        <div className="absolute bottom-0 mb-[-80px] left-1/2 transform -translate-x-1/2 bg-white w-[95%] p-3 border-3" style={{ height: fixedBoxHeight }}>
          <h3 className="text-lg font-light text-[#462D10] mt-[-5px]">Schoonheid</h3>
          <p className='text-[#716313] font-light text-[13px]'>Harmoniseer je energie, herstel je balans</p>
        </div>
      </div>

      <div onClick={() => handleNavigate('/Cupping')} className="relative text-center cursor-pointer md:mt-0 mt-8">
        <img src={Cupping} alt="Cupping" className='w-full h-auto' />
        <div className="absolute bottom-0 mb-[-80px] left-1/2 transform -translate-x-1/2 bg-white w-[95%] p-3 border-3" style={{ height: fixedBoxHeight }}>
          <h3 className="text-lg font-light text-[#462D10] mt-[-5px]">Cupping</h3>
          <p className='text-[#716313] font-light text-[13px]'>Verbetert de doorbloeding en vermindert de spierpijn </p>
        </div>
      </div>
      
      <div onClick={() => handleNavigate('/Voetreflex')} className="relative text-center cursor-pointer md:mt-0 mt-8">
        <img src={Voetreflex} alt="Voetreflex" className='w-full h-auto' />
        <div className="absolute bottom-0 mb-[-80px] left-1/2 transform -translate-x-1/2 bg-white w-[95%] p-3 border-3" style={{ height: fixedBoxHeight }}>
          <h3 className="text-lg font-light text-[#462D10] mt-[-5px]">Voetreflex</h3>
          <p className='text-[#716313] font-light text-[13px]'> Weg naar ontspanning, balans en welzijn van top tot teen</p>
        </div>
      </div>
      
      </div>
    </div>
  );
}

export default Behandelingen;
