import React from 'react'
import Logo from '../../Assets/Logo.png';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';

const Top = ({ backgroundColor, title }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  }
    return (
      <div 
        style={{ backgroundColor: backgroundColor, minHeight: '50vh' }} 
        className="min-w-screen max-w-screen bg-cover bg-center bg-no-repeat items-center relative flex flex-col"
      >
        <img src={Logo} alt="Logo" 
             className="mt-6 md:absolute md:left-2 md:mt-6 md:ml-4 md:md:ml-10" 
             style={{ width: '70px', height: 'auto' }} />
        
        <div className='lg:flex top-1 left-0 right-0 justify-center items-center h-[114px] text-white'>
          <ul className='text-xl flex md:space-x-[60px] text-md text-white pb-4'>
            <li  onClick={() => handleNavigate('/')}className='p-3 cursor-pointer'>Home</li>
            <li className="dropdown p-3 cursor-pointer">Behandelingen
            <div className="dropdown-content">
              <HashLink className='text-lg' smooth to='/Pedicure'>Pedicure</HashLink>
              <HashLink className='text-lg' smooth to='/Schoonheid'>Schoonheid</HashLink>
              <HashLink className='text-lg' smooth to='/Cupping'>Cupping</HashLink>
              <HashLink className='text-lg' smooth to='/Voetreflex'>Voetreflex</HashLink>
            </div>
          </li>
            <li onClick={() => handleNavigate('/Tarieven')} className='p-3 cursor-pointer'>Tarieven</li>
            <li className='p-3'><HashLink smooth to='/#Contact'>Contact</HashLink></li>
          </ul>
        </div>
        
        <div className='cormorant text-white md:text-[70px] mt-5 text-[40px]'>
          {title}
        </div>
        <div className='flex flex-col items-center md:flex-row md:items-center h-auto md:h-[94px] mt-[60px] mb-[-3px]'>
  <ul className='text-sm md:text-xl flex flex-wrap justify-center space-x-0 md:space-x-4 lg:space-x-[60px] text-[#567C49] pb-4'>
    <li className='p-1 md:p-4'><HashLink smooth to='#Schoonheidsbehandelingen'>Schoonheidsbehandelingen</HashLink></li>
    <li className='p-1 md:p-4'><HashLink smooth to='#Bindweefselmassage'>Bindweefselmassage</HashLink></li>
    <li className='p-1 md:p-4'><HashLink smooth to='#Guasha'>Guasha</HashLink></li>
    <li className='p-1 md:p-4'><HashLink smooth to='#JapanseGezichtsmassage'>Japanse gezichtmassage</HashLink></li>
    <li className='p-1 md:p-4'><HashLink smooth to='#Reiki'>Reiki</HashLink></li>
  </ul>
</div>

      </div>
    );
  }

export default Top
