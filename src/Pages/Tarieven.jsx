import React from 'react'
import Top from '../Components/General/General_Top'
import Tar from '../Components/Tarieven/Tarieven'
import Openingstijden from '../Components/Openingstijden'

const Tarieven = () => {
  return (
    <div>
      <Top backgroundColor='#D7C7B5' title="Tarieven"/>
      <Tar />
      <Openingstijden textColor="#567C49" lineColor="#567C49" />
    </div>
  )
}

export default Tarieven
