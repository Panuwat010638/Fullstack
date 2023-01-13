import React from 'react'
import "./ContentP3.css"

function ContentP3() {
  return (
    <div className='con-ProResumeContent'>
      <section className='con-contentP3'>
        <div className='con-contentP3-1'>
          <img src='https://www.webrexstudio.com/wp-content/uploads/2019/05/react-js-image.png' alt='FrontendProFarm'></img>
        </div>
        <div className='con-contentP3-2'>
          <h2>Frontend</h2>
          <p>ในส่วนของ Frontend ผมเลือกใช้ React.js ที่มีการใช้ JavaScript ,HTML5 ,CSS3 เพื่อจะได้ฝึกการเขียนFrontEnd เพราะมีการจัดการส่วนComponent เป็นส่วนๆ
            และยังมีการใช้ virtual DOM ในReact.js ซึ่งจะทำให้Web Applicationของเราเร็วขึ้นด้วยเพราะจะไม่ต้องรีหน้าใหม่ตลอดเมื่อมีการจัดการComponentแต่จะเริ่มการทำงานใหม่แค่
             Component นั้นๆ และการเขียน React.js เป็นการปูทางพื้นฐานไปสู่การเขียน Typescript ,Next.js  ได้อีกด้วย
          </p>
        </div>
      </section>
      <section className='con-contentP3'>
        <div className='con-contentP3-2'>
          <h2>Backend</h2>
          <p>ในส่วนนี้จะใช้ Node.js ,Express.js ,MongoDB ในการสร้าง เนื่องจากผมมีความถนัดในการใช้ MongoDBจึงเลือกมาใช้ในการพัฒนาเพราะเป็นNoSQLที่มีความยืดยุ่นในการเก็บข้อมูลแบบJson
            และยังมีความรวดเร็ว และต้นทุนน้อยอีกด้วย ในส่วนนี้เราจะต้องจะต้องเขียนส่วนรับข้อมูลก่อนที่จะใช้โดยจะเขียนในไฟล์ Route และเขียนชนิดข้อมูลของเรา กับURL ของฐานข้อมูลของเรา เพื่อนำไป
            ให้ไฟล์ Index.js สามารถเชื่อมต่อฐานข้อมูลได้
          </p>
        </div>
        <div className='con-contentP3-1'>
          <img src='https://scontent.futp2-1.fna.fbcdn.net/v/t1.15752-9/324045961_542434474579007_7298949329110180659_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeF8TqwcM1crt37H6gSe9MKhaMBPBYtRvQ5owE8Fi1G9DgNnqc8V8dA94qHUFcUr-OOPE7zJj2903c77F9Ski9-k&_nc_ohc=1BFjBIFGkUgAX_xxAbv&_nc_ht=scontent.futp2-1.fna&oh=03_AdThMZMw0NfX3jHcwAm5d9N8V78KJ_ZZv4D7am18aMbltw&oe=63E7CD6E' alt='BackendProFarm'></img>
        </div>
      </section>
      <section className='con-contentP3'>
        <div className='con-contentP3-1'>
          <img src='https://scontent.futp2-1.fna.fbcdn.net/v/t1.15752-9/272563215_3879132488878055_172061149006525269_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGNaWGVPScheIrQLpurr_zXiNupbMCc2yWI26lswJzbJamAa03hXhlPgokNoxTx04c1dBZyNVWPLBZrzgkHvR85&_nc_ohc=sUuCx6Ufj7QAX8iO3-P&_nc_ht=scontent.futp2-1.fna&oh=03_AdQplDOBV0ApHwxCs50VCyZM0wCIcilXoCAaYzGEPUU71A&oe=63E7FABE' alt=''></img>
        </div>
        <div className='con-contentP3-2'>
          <h2>Rest API</h2>
          <p>ในการพัฒนาโปรเจกต์ชิ้นนี้ผมได้ใช้ Node.js & Express.js ในการพัฒนา Rest API ซึ่งการทำงานของฝั่งFrontEndจะใช้Axiosในการส่งRequestไปให้ทางServer
            ซึ่งจะใช้คำสั่ง POST:เพื่อการส่งข้อมูลไปเก็บ และ GET:เพื่อนำข้อมูลมาโชว์ในส่วนของตาราง เมื่อส่งไปให้ทางServerแล้วคำสั่งถูกต้องก็จะทำการคำสั่งนั้นๆ และResponseกลับมา
            เป็น Status(200:ดำเนินการสำเร็จ) และไฟร์ Json(ในกรณีที่ร้องขอข้อมูล)
          </p>
        </div>
      </section>
      
    </div>
  )
}

export default ContentP3