import React from 'react'
import Navbar from '../../../../components/navbar/Navbar'
import'./ProPOS.css'
import ContentP2 from "./componentP2/ContentP2"
import BannerP2 from "./componentP2/BannerP2"
import FooterP2 from "./componentP2/FooterP2"
function ProPOS() {
  return (
    <div className='bodyProPOS'>
      <Navbar/>
      <BannerP2/>
      <ContentP2/>
      <FooterP2/>
      
    </div>
  )
}

export default ProPOS