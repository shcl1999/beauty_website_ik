import React from 'react'
// import Before from '../../Assets/Cupping/CuppingBefore1.jpeg'
// import After from '../../Assets/Cupping/CuppingAfter1.jpeg'
import result from '../../Assets/Cupping/Cupping pic.jpeg'
const Resultaat = () => {
  return (
    <div className="bg-[#f7f1ea] flex flex-col items-start min-h-screen" style={{minHeight: '70vh'}}>
      <h1 className='md:ml-[100px] ml-[25px] md:text-4xl text-[28px] md:mt-9 mt-5'>Resultaat met Bellabaci cupping</h1>
      <div className='md:w-full flex flex-col md:flex-row justify-around items-center md:ml-5 ml-[70px] md:mt-[100px] mt-[35px] md:mb-12 '>
      <img src={result} alt="Bellabaci Product " className="object-contain md:h-[500px] md:w-[500px] h-64 w-64 mr-6"/>
        {/* <img src={Before} alt="Bellabaci Product 1" className="object-contain md:h-[350px] md:w-auto h-48 w-auto mr-6"/>
        <img src={After} alt="Bellabaci Product 2" className="object-contain md:h-[350px] md:w-auto h-48 w-auto mr-6"/> */}
      </div>
    </div>
  )
}

export default Resultaat
