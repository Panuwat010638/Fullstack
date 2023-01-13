import React from 'react'
import Navbar from '../../../../components/navbar/Navbar'
import'./ProFarm.css'
import BannerP1 from "./componentP1/BannerP1"
import ContentP1 from "./componentP1/ContentP1"
import FooterP1 from "./componentP1/FooterP1"


function ProFarm() {
  return (
    <div className='bodyProFarm'>
      <Navbar/>
      <BannerP1/>
      <ContentP1/>
      <FooterP1/>
    </div>
  )
}

export default ProFarm