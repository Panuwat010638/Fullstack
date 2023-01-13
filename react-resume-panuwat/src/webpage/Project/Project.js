import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./Project.css" 
import { Link } from "react-router-dom";


function Project() {
  return (
    <div className='bodyProject'>
      <Navbar/>
    <section className='project-con'>
      
      <Link to="/ProFarm" className='project-card' >
        <div className='project-img project-1' ></div>
        
        <h3 className='project-h3class'>Mini Smart Farm Hydroponics</h3>
        <p className='project-pclass'>Mini Smart Farm Hydroponics เป็น<br/>
                                      โปรเจกต์จบกลุ่มที่สร้างขึ้นในรายวิชา<br/>
                                      โปรเจกค์จบการศึกษาที่ประกอบไปด้วย <br/>
                                      Hardware ,FrontEnd ,BackEnd</p>
      </Link>
      <Link to="/ProPOS" className='project-card' >
        <div className='project-img project-2' ></div>
        <h3 className='project-h3class'>POS React.js <br/>(SE Project)</h3>
        <p className='project-pclass'>POS React.js เป็นโปรเจกต์กลุ่มที่<br/>
                                      สร้างขึ้นมาในรายวิชา Software Engineer</p>
      </Link>
      <Link to="/ProResume" className='project-card' >
        <div className='project-img project-3' ></div>
        <div >
          <h3 className='project-h3class'>Rsume Panuwat (MERN Stack)</h3>
          <p className='project-pclass'>Resume Panuwatเป็นโปรเจกต์ที่สร้าง<br/>
                                        ขึ้นมาเพื่อฝึกฝนการเขียน<br/>
                                        Full Stack เพื่อใช้ในการสมัครงาน</p>
        </div>
        
      </Link>

    </section>

    </div>
  )
}

export default Project