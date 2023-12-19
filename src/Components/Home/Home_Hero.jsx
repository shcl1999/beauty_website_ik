import React from 'react';
import Logo from '../../Assets/Logo.png';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import Image1 from '../../Assets/Home/Homepage1.png';
import Image2 from '../../Assets/Home/Homepage2.png';


const Hero = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  }

  return (
    <div className="bg-[#D7C7B5] w-full bg-center bg-no-repeat h-screen items-center relative flex flex-col">
      <img src={Logo} alt="Logo" 
           className="mt-6 md:absolute md:left-2 md:mt-6 md:ml-4 md:md:ml-10" 
           style={{ width: '70px', height: 'auto' }} />
      
      <div className='lg:flex top-1 left-0 right-0 justify-center items-center h-[114px] text-white'>
        <ul className='text-xl flex md:space-x-[60px] text-md text-white pb-4'>
          <li onClick={() => handleNavigate('/')}className='p-4 cursor-pointer'>Home</li>
          <li className="dropdown p-4 cursor-pointer"><HashLink smooth to='#Behandelingen'>Behandelingen</HashLink>
            <div className="dropdown-content">
              <HashLink className='text-lg' smooth to='/Pedicure'>Pedicure</HashLink>
              <HashLink className='text-lg' smooth to='/Schoonheid'>Schoonheid</HashLink>
              <HashLink className='text-lg' smooth to='/Cupping'>Cupping</HashLink>
              <HashLink className='text-lg' smooth to='/Voetreflex'>Voetreflex</HashLink>
            </div>
          </li>
          <li onClick={() => handleNavigate('/Tarieven')} className='p-4 cursor-pointer'>Tarieven</li>
          <li className='p-4'><HashLink smooth to='#Contact'>Contact</HashLink></li>
        </ul>
      </div>
        
      <div className="w-full h-screen flex items-center justify-center md:justify-start md:pl-20">
  <div className="flex-1 text-white text-center md:text-left md:ml-[75px] md:mt-0 mt-[-90px]">
    <h1 className="content-area text-4xl md:text-7xl py-3">Ware Schoonheid</h1>
    <h1 className="text-4xl md:text-7xl py-3">begint</h1>
    <h1 className="text-4xl md:text-7xl py-3">van Binnenuit</h1>
    <button className="mt-6 bg-[#FFFDF6] text-[#462D10] border font-bold py-2 px-12 rounded-full hover:underline">
      <HashLink smooth to='#Contact'>Contact</HashLink>
    </button>
    <button onClick={() => handleNavigate('/OverMij')} className="mt-4 ml-2 bg-transparent text-white border border-white font-semibold py-2 px-12 rounded-full hover:underline">
       Over mij 
    </button>
  </div>
  <div className="flex-1 relative hidden md:block">
    <img src={Image1} alt="Description of Image1" className="absolute bottom-[-250px] left-[180px]" style={{ maxWidth: '55%', height: 'auto' }} />
    <img src={Image2} alt="Description of Image2" className="absolute bottom-[-255px] right-0" style={{ maxWidth: '13%', height: 'auto' }} />
  </div>
</div>

    </div>
  );
};

export default Hero;