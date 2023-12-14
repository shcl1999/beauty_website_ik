import React from 'react'
import Top from '../Components/General/General_Top'
import Cup from '../Components/Cupping/Cup'
import Bellabaci from '../Components/Cupping/Bellabaci'
import Resultaat from '../Components/Cupping/Resultaat'
import Openingstijden from '../Components/Openingstijden'


const Cupping = () => {
  return (
    <div>
      <Top backgroundColor='#CFDDC1' title="Cupping" />
      <Cup />
      <Bellabaci />
      <Resultaat />
      <Openingstijden textColor="#567C49" lineColor="#567C49" />
    </div>
  )
}

export default Cupping
