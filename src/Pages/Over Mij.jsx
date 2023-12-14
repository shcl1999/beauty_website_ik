import React from 'react'
import Top from '../Components/General/General_Top'
import Over from '../Components/Over Mij/Over_Mij'
import Openingstijden from '../Components/Openingstijden'

const Over_Mij = () => {
  return (
    <div>
      <Top backgroundColor='#D7C7B5' title="Over Mij" />
      <Over />
      <Openingstijden textColor="#567C49" lineColor="#462D10" />
    </div>
  )
}

export default Over_Mij
