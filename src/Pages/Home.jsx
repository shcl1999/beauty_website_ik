import React from 'react'
import HomeHero from '../Components/Home/Home_Hero'
import Behandeling from '../Components/Home/Behandelingen'
import Contact from '../Components/Home/Contact'
import Openingstijden from '../Components/Openingstijden'

const Home = () => {
  return (
    <div>
      
      <Behandeling />
      <Contact />
      <Openingstijden textColor="#716313" lineColor="#716313" />
    </div>
  )
}

export default Home
