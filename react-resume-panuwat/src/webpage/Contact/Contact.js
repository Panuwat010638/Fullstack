import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./Contact.css"
import { useState } from 'react';
import { FaPhoneSquareAlt ,FaMailBulk , FaLine ,FaFacebook } from "react-icons/fa";
import axios from 'axios';

function Contact() {
  const [contactName,setName]=useState('');
  const [contactEmail,setEmail]=useState('');
  const [contactMessage,setMessage]=useState('');
  
  onsubmit = (e)=>{
    e.preventDefault();

    const contactObject = {
      name: contactName,
      email: contactEmail,
      message: contactMessage
    };
    axios.post('http://localhost:5000/contact/create', contactObject).then((res) => {
      console.log(res.data)
  }).catch((error) => {
      console.log(error)
  });
    console.log('Success');
    console.log(`Name: ${contactName}`);
    console.log(`Email: ${contactEmail}`);
    console.log(`Message: ${contactMessage}`);
    setName('');
    setEmail('');
    setMessage('');
  }
  

return (
    <div className='bodyContact'>
      <Navbar/>
     <div className='flexallinone'>
        <div className='allblockcontact'>
          <div className='texth1andp'>
            <h1>CONTACT US</h1>
            <p>คุณสามารถติดต่อผมได้ผ่านทางข้อมูลการติดต่อด้านล่างนี้หรือจะกรอกข้อมูลด้านล่างในช่องกรอกข้อมูลก็ได้ครับ <br/>
              (ข้อมูลที่ถูกส่งมาจะถูก Server ที่ผมสร้างส่งไปเก็บที่ MongoDB)</p>
          </div>
          <div className='blockmixtextandinput'>
            <div className='textmes'>
              <div className='icon-textClass'><FaPhoneSquareAlt className='icon-textClass2'/><p>Phone  : 083-930-5478</p> <br/></div>
              <div className='icon-textClass'><FaMailBulk className='icon-textClass2'/><p>Email : panuwatkrit001@gmail.com</p> <br/></div>
              <div className='icon-textClass'><FaLine className='icon-textClass2'/><p>Line : make1638</p> </div> 
              <div className='icon-textClass'><FaFacebook className='icon-textClass2'/><p>Facebook : https://www.facebook.com/makenakup.zii/</p> </div> 
            </div>
          <div>
            <div className='blockformmessage'>
              <h2>Send Message</h2>
              <form >
                <div className='threeinputclass'>
                  <label>
                     Name:
                    <input value={contactName} type="text" name="name" placeholder='Your Name' onChange={e => setName(e.target.value)}/>
                  </label>
                  <label>
                    Email:
                    <input value={contactEmail} type="email" name="email" placeholder='Your Email' onChange={e => setEmail(e.target.value)}/>
                  </label>
                    <label>Message:<textarea value={contactMessage} type="text" name="message"  placeholder='Your Message' onChange={e => setMessage(e.target.value)} required>
                    </textarea>
                  </label>
                  
                </div>
              </form>
              <div className='conbtn-submitContact'>
                <button className='btnSubmit' type='submit' onClick={onsubmit}>SUBMIT</button>
              </div>
              
            </div>
            <div>

            </div>
          </div>
          </div>
          
          
        </div>

    </div> 
    </div>
    
  )
}

export default Contact