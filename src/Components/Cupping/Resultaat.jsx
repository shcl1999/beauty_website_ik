import React from 'react'
import Before from '../../Assets/Cupping/Cuppingbefore.png'
import After from '../../Assets/Cupping/CuppingAfter.png'
const Resultaat = () => {
  return (
    <div className="bg-[#f7f1ea] flex flex-col items-start min-h-screen">
      <h1 className='ml-[100px] text-4xl mt-9'>Resultaat met Bellabaci cupping</h1>
      <div className='md:w-full flex flex-col md:flex-row justify-around items-center md:ml-5 ml-[115px] mt-[120px] md:space-y-0 space-y-12'>
        <img src={Before} alt="Bellabaci Product 1" className="object-contain md:h-[350px] md:w-auto h-48 w-auto mr-6"/>
        <img src={After} alt="Bellabaci Product 2" className="object-contain md:h-[350px] md:w-auto h-48 w-auto mr-6"/>
      </div>
    </div>
  )
}

export default Resultaat
