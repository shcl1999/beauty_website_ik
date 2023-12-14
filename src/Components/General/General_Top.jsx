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
           className="mt-6 md:absolute md:left-2 md:mt-6 md:ml-4 md:md:ml-10" 
           style={{ width: '70px', height: 'auto' }} />
      
      <div className='lg:flex top-1 left-0 right-0 justify-center items-center h-[114px] text-white'>
        <ul className='text-xl flex md:space-x-[60px] space-x-1 text-md text-white pb-4'>
        <li onClick={() => handleNavigate('/')}className='p-4 cursor-pointer'>Home</li>
          <li className='p-4'><HashLink smooth to='/#Behandelingen'>Behandelingen</HashLink></li>
          <li onClick={() => handleNavigate('/Tarieven')} className='p-4 cursor-pointer'>Tarieven</li>
          <li className='p-4'><HashLink smooth to='/#Contact'>Contact</HashLink></li>
        </ul>
      </div>
      <div className='text-white md:text-[70px] mt-5 text-[40px]'>
        {title}
      </div>
    </div>
  );
}

export default General_Top;
