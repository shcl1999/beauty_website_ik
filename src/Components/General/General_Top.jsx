import React from 'react';
import Logo from '../../Assets/Logo.png';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';

const General_Top = ({ backgroundColor, title }) => {
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
           className="mt-6 md:absolute md:left-2 md:mt-6 md:ml-10" 
           style={{ width: '70px', height: 'auto' }} />
      
      <div className='lg:flex top-1 left-0 right-0 justify-center items-center h-[114px] text-white'>
        <ul className='text-xl flex md:space-x-[60px] text-md text-white pb-4'>
        <li onClick={() => handleNavigate('/')}className='p-3 cursor-pointer'>Home</li>
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
    </div>
  );
}

export default General_Top;
