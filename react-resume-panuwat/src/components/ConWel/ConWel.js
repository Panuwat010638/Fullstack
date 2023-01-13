import React from 'react'
import "./ConWel.css"
import {Link} from 'react-router-dom';
function ConWel() {
  return (
    <div className='conwel-bg'>
      <div className='conWel-contianer'>
        
          <h1 className='h1classWelcome'><b>WARNING</b></h1>
          <p className='pclass'>สวัสดีครับผู้เข้าชมเว็บไซต์: ResumePanuwat ทุกท่าน
                              <br/>ผมนาย ภาณุวัฒน์ กฤษณามระ เป็นผู้สร้างเว็บไซต์นี้ขึ้นมา
                              <br/>วัตถุประสงค์ในการสร้างเว็บไซต์ตัวนีัขึ้นมาคือ
                              <br/>1.ฝึกฝนสกิลด้านFullStack(Frontend ,Backend)
                              <br/>2.เพื่อฝึกการพัฒนาแบบMERN Stack
                              <br/>3.เพื่อใช้ในการสมัครงานในสายงาน</p> 
          <Link end to ="/Home" className='anna' >
            <span >GO</span>
            <div className='liquid'></div>
          </Link>
      </div>
    </div>
    
  )
}

export default ConWel