import React from 'react'
import Navbar from '../../../../components/navbar/Navbar'
import'./ProResume.css'
import BannerP3 from "./componentP3/BannerP3"
import ContentP3 from "./componentP3/ContentP3"
import FooterP3 from "./componentP3/FooterP3"
function ProResume() {
  return (
    <div className='bodyProResume'>
      <Navbar/>
      <BannerP3/>
      <ContentP3/>
      <FooterP3/>
    </div>
  )
}

export default ProResume