import React from 'react'
import Top from '../Components/Schoonheid/Top'
import Schoonheidsbehandelingen from '../Components/Schoonheid/Schoonheidsbehandelingen'
import Bindweefselmassage from '../Components/Schoonheid/Bindweefselmassage'
import Guasha from '../Components/Schoonheid/Guasha'
import JapaneseGezichtmassage from '../Components/Schoonheid/Japanese_gezichtsmassage'
import Reiki from '../Components/Schoonheid/Reiki'
import Openingstijden from '../Components/Openingstijden'

const Schoonheid = () => {
  return (
    <div>
      <Top backgroundColor='#CFDDC1' title="Schoonheid" />
      <Schoonheidsbehandelingen />
      <Bindweefselmassage />
      <Guasha />
      <JapaneseGezichtmassage />
      <Reiki />
      <Openingstijden textColor="#567C49" lineColor="#567C49"/>
    </div>
  )
}

export default Schoonheid
