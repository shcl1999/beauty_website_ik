import React from 'react'
import Home_Hero from '../Components/Home/Home_Hero'
import Behandeling from '../Components/Home/Behandelingen'
import Contact from '../Components/Home/Contact'
import Openingstijden from '../Components/Openingstijden'

const Home = () => {
  return (
    <div>
      <Home_Hero />
      <Behandeling />
      <Contact />
      <Openingstijden textColor="#716313" lineColor="#716313" />
    </div>
  )
}

export default Home
