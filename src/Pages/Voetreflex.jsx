import React from 'react'
import Top from '../Components/General/General_Top'
import Voetre from '../Components/Voetreflex/Voetreflex'
import Openingstijden from '../Components/Openingstijden'

const Voetreflex = () => {
  return (
    <div>
      <Top backgroundColor='#CFDDC1' title="Voetreflex" />
      <Voetre />
      <Openingstijden textColor="#567C49" lineColor="#567C49" />
    </div>
  )
}

export default Voetreflex
