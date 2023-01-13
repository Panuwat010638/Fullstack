import React from 'react'
import "./ContentP1.css"

function ContentP1() {
  return (
    <div className='con-ProFarmContent'>
      <section className='con-contentP1-flowchart'>
        <img src='https://scontent.futp2-1.fna.fbcdn.net/v/t1.15752-9/323530103_2995957274034180_7368106151590226537_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHn_kLAG_r5wUSH3vnrlJPCFnn18cGnzb0WefXxwafNvf2UpU9UbyFlE6u7fFP-Wb_tEy3GmfZncU7EcZP-O0Jr&_nc_ohc=16GfhVdP3DkAX-IAAbV&_nc_ht=scontent.futp2-1.fna&oh=03_AdRMxDDc7TU43q9DCXYH8woEyCkzHlA7eiT7-lS92dvEdw&oe=63E7A508' alt='FlowchartIOT'></img>
        <h2>แผนภาพระบบโดยรวม</h2>
      </section>
      <section className='con-contentP1'>
        <div className='con-contentP1-1'>
          <img src='https://scontent.futp2-1.fna.fbcdn.net/v/t1.15752-9/324726949_892678581872467_5139442551016006857_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFuas-kklnzuQFabcg_kPMoNiYTqL74YqA2JhOovvhioJnJPp6SlwhEqO3nO-Sy6EywuTEspMy3s-yktUdUiL8j&_nc_ohc=ELIWQvE4tY0AX9JiEMc&_nc_ht=scontent.futp2-1.fna&oh=03_AdR4evhQrBwAGLq8xled2cOxQK72NeUhsjXZH7GhNTXDMg&oe=63E7E180' alt='FrontendProFarm'></img>
        </div>
        <div className='con-contentP1-2'>
          <h2>Frontend</h2>
          <p>ในส่วนFrontEnd คู่โปรเจกต์ของผมเป็นคนทำซึ่งใช้ Flutterในการเขียนเนื่องจาก อยากจะทดลองการทำ mobile application ในการควบคุม Hardware ซึ่งFlutterก็ตอบโจทย์อย่างมากเพราะ
            สามารถเขียนได้ทั้ง IOS และ Android และยังตอบโจทย์ในการพกพาอุปกรณ์เพื่อไปตวบคุมจากระยะไกลได้อีกด้วย
          </p>
        </div>
      </section>
      <section className='con-contentP1'>
        <div className='con-contentP1-2'>
          <h2>Backend Server</h2>
          <p>ในส่วนนี้จะใช้ Node.js ,Express.js ,MongoDB ในการสร้าง เนื่องจากผมมีความถนัดในการใช้ MongoDBจึงเลือกมาใช้ในการพัฒนาเพราะเป็นNoSQLที่มีความยืดยุ่นในการเก็บข้อมูลแบบJson
            และยังมีความรวดเร็ว และต้นทุนน้อยอีกด้วย ในส่วนนี้เราจะต้องจะต้องเขียนส่วนรับข้อมูลก่อนที่จะใช้โดยจะเขียนในไฟล์ Route และเขียนชนิดข้อมูลของเรา กับURL ของฐานข้อมูลของเรา 
            โดย Backend Server จะรับคำสั่งข้อมูลจาก LoraIOT By CAT(ต้องเช่าเป็นรายปี) ข็อมูลจะมาในรูป Hex number และจึงนำไปเก็บใน MongoDB</p>
        </div>
        <div className='con-contentP1-1'>
          <img src='https://scontent.futp2-1.fna.fbcdn.net/v/t1.15752-9/324045961_542434474579007_7298949329110180659_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeF8TqwcM1crt37H6gSe9MKhaMBPBYtRvQ5owE8Fi1G9DgNnqc8V8dA94qHUFcUr-OOPE7zJj2903c77F9Ski9-k&_nc_ohc=1BFjBIFGkUgAX_xxAbv&_nc_ht=scontent.futp2-1.fna&oh=03_AdThMZMw0NfX3jHcwAm5d9N8V78KJ_ZZv4D7am18aMbltw&oe=63E7CD6E' alt='BackendProFarm'></img>
        </div>
      </section>
      <section className='con-contentP1'>
        <div className='con-contentP1-1'>
          <img src='https://scontent.futp2-1.fna.fbcdn.net/v/t1.15752-9/322740384_692093372397375_8210092833204471118_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeH5_pfj_AWn8yz3O0XFCneUtO05wEKw-uy07TnAQrD67AI_t7bQhhNMhxmIHs4oDhSXJ4ALvT8L4OSgcpUUZwaz&_nc_ohc=vZw1NAH41z4AX8ozbjW&_nc_ht=scontent.futp2-1.fna&oh=03_AdT1ahlhUazpZY-3pT3zjslOHKA7Fj6xehsoOsLw0eEVFA&oe=63E7DB0F' alt='HardwareProFarm'></img>
        </div>
        <div className='con-contentP1-2'>
          <h2>Hardware</h2>
          <p>ในส่วน Hardware จะมีการใช้ NodeMCU อยู่2ตัวคือ STM32 lorawan ,ESP32 โดยทั้งคู่จะเขียนการควบตุมด้วยภาษา C ทั้งหมด ESP32 นั้นจะใช้ในกรณี่ที่ตัวควบคุมหลักอย่างตัวSTM32 ไม่มีสัญญาณ หรือเสีย 
            ในตัว STM32 นั้นมีระยะการทำงานที่กว้างจึงได้นำมาใช้เพราะเป็นการนับส่งข้อมูลทางดาวเทียม แต่ถึงระยะการทำงานจะกว้างแต่ก็ต้องแลกมาด้วยการรับส่งข้อมูลที่ช้าตามไปด้วย รวมถึงการDownlink ที่ยุ่งยาก
            เนื่องจากต้องรอให้ STM32ส่งข้อมูลออกมาก่อนตัวอุปกรณ์ถึงจะรับค่าที่Downlinkได้ แต่เพราะระยะการทำงานที่ไกลจึงตอบโจทย์ของโปรเจกต์นี้ที่เน้นการทำงานจากที่ไหนก็ได้ในระยะไกล
          </p>
        </div>
      </section>
      
    </div>
  )
}

export default ContentP1