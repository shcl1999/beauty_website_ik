import React from 'react'
import Before from '../../Assets/Cupping/CuppingBefore1.jpeg'
import After from '../../Assets/Cupping/CuppingAfter1.jpeg'
const Resultaat = () => {
  return (
    <div className="bg-[#f7f1ea] flex flex-col items-start min-h-screen" style={{minHeight: '85vh'}}>
      <h1 className='md:ml-[100px] ml-[80px] md:text-4xl text-3xl mt-9'>Resultaat met Bellabaci cupping</h1>
      <div className='md:w-full flex flex-col md:flex-row justify-around items-center md:ml-5 ml-[115px] md:mt-[100px] mt-[60px] md:space-y-0 space-y-12'>
        <img src={Before} alt="Bellabaci Product 1" className="object-contain md:h-[350px] md:w-auto h-48 w-auto mr-6"/>
        <img src={After} alt="Bellabaci Product 2" className="object-contain md:h-[350px] md:w-auto h-48 w-auto mr-6"/>
      </div>
    </div>
  )
}

export default Resultaat
