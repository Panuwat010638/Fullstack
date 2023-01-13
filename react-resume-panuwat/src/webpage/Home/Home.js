import React from 'react'
import "./Home.css"
import Content from '../../components/content/content';

import Navbar from '../../components/navbar/Navbar'
function Home() {
  return (
    <div className='bodyHome'>  
      <Navbar/>
      <Content/>
      
    </div>
  )
}

export default Home