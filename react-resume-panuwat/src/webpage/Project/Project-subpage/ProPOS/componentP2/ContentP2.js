import React from 'react'
import "./ContentP2.css"

function ContentP2() {
  return (
    <div className='con-ProPOSContent'>
      <section className='con-contentP2-flowchart'>
        <img src='https://scontent.futp2-1.fna.fbcdn.net/v/t1.15752-9/325019910_531470402345622_3259142356746512146_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGvjZyQ2hhTxh1n1PjAxR3LrkX-a-sZrPGuRf5r6xms8T5Q_ZDhDpL7i_ImFyhsnUt36ag3uDhfnjfzA-sLgiMU&_nc_ohc=Wi3HeZ14vgoAX8fq1NN&_nc_ht=scontent.futp2-1.fna&oh=03_AdTTq9KNG8h4O-rrcR5sBn7JQ3dxSqN_SYMhAIuAH3Zsng&oe=63E86ECE' alt='FlowchartFIGMA'></img>
        <h2>การออกแบบบางส่วนใน Figma</h2>
      </section>
      <section className='con-contentP2'>
        <div className='con-contentP2-1'>
          <img src='https://miro.medium.com/max/1400/1*RWriD6Jy4Ssd0rFjhLNt_w.webp' alt='Figma'></img>
        </div>
        <div className='con-contentP2-2'>
          <h2>Figma</h2>
          <p>ในโปรเจกต์นี้การออกแบบทั้งหมดจะถูกทำใน Figma ทั้งหมดเนื่องจากมีระบบแสดงผลการกดปุ่มหรือเปลี่ยนหน้าเพื่อใช้ในการทดลองระบบก่อนที่จะนำไปทำใน React อีกทีและยังทำให้เพื่อนๆในกลุ่มสามารถเข้าใจ
            โครงสร้างระบบโดยรวมได้อีกด้วย
          </p>
        </div>
      </section>
      <section className='con-contentP2'>
        <div className='con-contentP2-2'>
          <h2>Frontend</h2>
          <p>เนื่องจากมีการใช้ส่วน Component หลายส่วนใน 1 หน้าจึงเลือกใช้ React.jsคู่กับ bootstrap5 เพื่อความรวดเร็วและสะดวกสบายในการออกแบบFrontend
            และยังสามารถสร้างการคำนวนภายในโปรแกรมอีกด้วย
          </p>
        </div>
        <div className='con-contentP2-1'>
          <img src='https://www.webrexstudio.com/wp-content/uploads/2019/05/react-js-image.png' alt='FrontEndProPOS'></img>
        </div>
      </section>
      <section className='con-contentP2'>
        <div className='con-contentP2-1'>
          <img src='https://www.howtogeek.com/wp-content/uploads/csit/2017/07/ee83c456.png?width=1198&trim=1,1&bg-color=000&pad=1,1' alt='Database'></img>
        </div>
        <div className='con-contentP2-2'>
          <h2>Database</h2>
          <p>MySQL เป็นโอเพ่นซอร์สที่สามารถใช้งานได้ฟรี รวดเร็วและปลอดภัย จึงถูกเลือกมาใช้ในตัวโปรเจกต์ แต่ในโปรเจกต์นี้จะใช้ควบคู่ไปกับ remotemysql เพื่อที่จะสามารถ
            ให้คนในกลุ่มเข้าถึงข้อมูลภายในแบบออนไลน์ได้อีกด้วย 
          </p>
        </div>
      </section>
      
    </div>
  )
}

export default ContentP2