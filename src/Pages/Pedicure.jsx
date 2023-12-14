import React from 'react'
import Top from '../Components/General/General_Top'
import Basis from '../Components/Pedicure/Basis'
import Provoet from '../Components/Pedicure/Provoet'
import Openingstijden from '../Components/Openingstijden'

const Pedicure = () => {
  return (
    <div>
     <Top backgroundColor='#CFDDC1' title="Pedicure" />
      <Basis />
      <Provoet />
      <Openingstijden textColor="#567C49" lineColor="#567C49" />
    </div>
  )
}

export default Pedicure
