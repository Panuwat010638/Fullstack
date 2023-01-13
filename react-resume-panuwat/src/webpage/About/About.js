import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./About.css"
import { FaLinkedinIn,FaInstagram,FaLine,FaFacebook,FaGithub} from "react-icons/fa";
import { useState } from 'react';

function About() {
  const [ToggleS,setToggleS]=useState(1);
  const ToggleTab = (index)=>{
    setToggleS(index);
  };
  return (
    <div className='bodyAbout'>
      <Navbar/>
      <div className='about-contianer'>
        <div className='BGaboutHalf1'>
          <div className='blockaboutme'>
            <div>
              <div className='shadowabout'>
                <div className='about-img'>
                  <img src='https://scontent.futp2-1.fna.fbcdn.net/v/t1.15752-9/324869594_6152260224841221_8224708123544790159_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGa1QGvDOrUiXp5jwO650mVGq3B_dwNqPEarcH93A2o8YY3Q_LJjf8E645wlWBYgoc1DyFOzIPTKtD5sKluMbMQ&_nc_ohc=hHwpLz4-pNoAX8k0B0b&tn=PMH6VsMoTDaK5Mff&_nc_ht=scontent.futp2-1.fna&oh=03_AdRTojNAAnMwqfwnIl4jxxI-WDYPsq0ZxnnZ6efTLMQOeg&oe=63E877B3' alt='panuwatimg'/>
                </div>
              </div>
              <h2 className='about-h2class'>PANUWAT KRITSANAMARA</h2>
              <h3 className='about-h3class'>SOFTWARE DEVELOPER</h3>
            </div>
            <div className='about-iconclass'>
              <a href='https://www.instagram.com/make.panuwat/' target="_blank" rel="noreferrer"><h3 className='icon-instaclass'><FaInstagram/></h3></a>
              <a href='https://www.facebook.com/makenakup.zii/' target="_blank" rel="noreferrer"> <h3 className='icon-instaclass'><FaFacebook/></h3></a>
              <a href='https://line.me/ti/p/d3HLkxvNWq ' target="_blank" rel="noreferrer"><h3 className='icon-instaclass'><FaLine/></h3></a>
              <a href='https://www.linkedin.com/in/panuwat-kritsanamara-a3909425b/' target="_blank" rel="noreferrer"><h3 className='icon-instaclass'><FaLinkedinIn/></h3></a>
              <a href='https://github.com/Panuwat010638/FrontEndDev' target="_blank" rel="noreferrer"><h3 className='icon-instaclass'><FaGithub/></h3></a>
            </div>

          </div>

        </div>
        <div className='BGaboutHalf2'>
          <div className='NewdivClassHalf2'>
          <div className='head-BGhalf2'>
              <h1 className='about-headHello'>HEL<span>LO</span></h1>
              <h4 className='about-h4Rheadcontent'>Get to know me & What I can do.</h4>
            </div>
            <div className='about-bthRhalfContent'>
              <div className='ResumeBtn'>
                <a href='https://drive.google.com/file/d/1MW45yFYW6w0lp6FGgl2FQ0szZufDjoG3/view?usp=sharing' target="_blank" rel="noreferrer"><h5>RESUME</h5></a>
              </div>
              <div className='TagHead'>
                <button className={ToggleS === 1 ? "tabs active-tabs" : "tabs"}onClick={() => ToggleTab(1)}>Info</button>
                <button className={ToggleS === 2 ? "tabs active-tabs" : "tabs"}onClick={() => ToggleTab(2)}>Skills</button>
                <button className={ToggleS === 3 ? "tabs active-tabs" : "tabs"}onClick={() => ToggleTab(3)}>Education</button>
              </div>
            </div>
            <div className='about-RHalfCon-tabs'>
              <div className={ToggleS === 1 ? "about-RHalfCon  active-content" : "about-RHalfCon"}>
                <h2>Info</h2><hr />
                <p>
                  <b className='about-RHalfBclass'>Name : </b>Panuwat Kritsanamara (ภาณุวัฒน์ กฤษณามระ)<br/>
                  <b className='about-RHalfBclass'>Nickname : </b>Make (เมฆ)<br/>
                  <b className='about-RHalfBclass'>Tel. : </b>083-930-5478<br/>
                  <b className='about-RHalfBclass'>Email : </b>panuwatkrit001@gmail.com
                </p>
              </div>
              <div className={ToggleS === 2 ? "about-RHalfCon  active-content" : "about-RHalfCon"}>
                <h2>Skills</h2><hr />
                <p>
                  <b className='about-RHalfBclass'>Frontend : </b>HTML5 ,CSS3 ,JavaScriptES6 ,React.js ,Typescript ,Bootstrap5<br/>
                  <b className='about-RHalfBclass'>Database : </b>MongoDB ,MySQL<br/>
                  <b className='about-RHalfBclass'>Backend : </b>Node.js ,Spring Boot <br/>
                  <b className='about-RHalfBclass'>programming languages : </b>C/C++ ,Python <br/>
                  <b className='about-RHalfBclass'>Other : </b>GitHub ,REST API ,IOT ,Figma
                </p>
              </div>
              <div className={ToggleS === 3 ? "about-RHalfCon  active-content" : "about-RHalfCon"}>
                <h2>Education</h2><hr />
                <p>
                  <b className='about-RHalfBclass'>KASETSART UNIVERSITY SRIRACHA CAMPUS</b><br/>
                  COMPUTER ENGINEERING AND INFORMATICS | 2017-2021<br/>
                  GRADUATED WITH GPAX OF 2.42<br/>
                  <b className='about-RHalfBclass'>CHONBURI SUKKHABOT SCHOOL</b><br/>
                  SCIENCES AND MATHEMATICS PROGRAM | 2011-2013<br/>
                  GRADUATED WITH GPAX OF 2.63
                </p>
              </div>
          </div>
            

        
            </div>
            
        </div>
      </div>
      
      
    </div>
  )
}

export default About