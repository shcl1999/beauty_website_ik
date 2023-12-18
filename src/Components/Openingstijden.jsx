import React from 'react';
import logo from '../Assets/Home/OpeningLogo.png';
import Opening1 from '../Assets/Home/OpeningTime1.png';
import Opening2 from '../Assets/Home/OpeningTime2.png';
import Opening3 from '../Assets/Home/OpeningTime3.png';

const Openingstijden = ({textColor, lineColor}) => {
  const textStyle = { color: textColor };
  const lineStyle = { backgroundColor: lineColor };
  return (
    <div className='bg-[#f7f1ea] w-screen h-[30%] flex flex-col justify-between'>
      <div className='flex justify-center'>
        <div className='w-[95%] h-[1px] mx-auto' style={lineStyle}></div>
    </div>

      <div className='flex justify-around items-center p-12 mt-3'>
        <div className='flex flex-col items-start'>
          <img className='mt-[-25px] mb-10'src={logo} alt="Logo" />
          <p className='text-[13px] md:text-lg' style={textStyle}>Adres: Terbregseweg 193<br/>3062 CR Rotterdam<br/>Tel: 010 4553876<br/>KVK: 24417352</p>
        </div>

        <div className='flex flex-col items-start ml-5' style={textStyle}>
          <h2 className='monsterrat text-xl mb-12 mt-[-30px]'>Openingstijden</h2>
          <ul className='space-y-1.5 text-[13px] md:text-lg'>
            <li className="flex justify-start w-full">
              <span className='mr-7'>Maandag</span>
              <span className='md:ml-[110px]'>09:00-21:00</span>
            </li>
              <li className="flex justify-between w-full"><span>Dinsdag</span><span className="text-start md:w-[102px] w-[75px]">Gesloten</span></li>
              <li className="flex justify-between w-full"><span>Woensdag</span><span >09:00-21:00</span></li>
              <li className="flex justify-between w-full"><span>Donderdag</span><span >09:00-21:00</span></li>
              <li className="flex justify-between w-full"><span>Vrijdag</span><span >09:00-18:00</span></li>
              <li className="flex justify-between w-full"><span>Zaterdag</span><span >09:00-14:00</span></li>
              <li className="flex justify-between w-full"><span>Zondag</span><span className="text-start md:w-[102px] w-[75px]">Gesloten</span></li>
          </ul>
        </div>

        <div className='flex flex-col items-center md:items-start'>
          <div className='md:flex md:flex-row md:items-center md:justify-center hidden'>
            <img src={Opening1} alt="Opening Time 1" />
            <img src={Opening2} alt="Opening Time 2" className='mx-4' />
            <img src={Opening3} alt="Opening Time 3" />
          </div>
          <p className='md:mt-2 md:ml-[65px] hidden md:block' style={textStyle}>Privacy Verklaring</p>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='w-[75%] h-[1px] mx-auto' style={lineStyle}></div>
      </div>

      <div className='text-center py-4' style={textStyle}>
        <p>Copyright © 2023 Irma Verboom</p>
      </div>
    </div>
  );
}

export default Openingstijden;
