import React from 'react';
import './MainWelcome.css';
import  About from "./webpage/About/About"
import {BrowserRouter ,Routes ,Route} from 'react-router-dom';
import ConWel from "./components/ConWel/ConWel"
import Project from "./webpage/Project/Project"
import Contact from "./webpage/Contact/Contact"
import Home from "./webpage/Home/Home"
import ShowContact from "./webpage/ShowContact/ShowContact"
import ProFarm from "./webpage/Project/Project-subpage/ProFarm/ProFarm"
import ProPOS from "./webpage/Project/Project-subpage/ProPOS/ProPOS"
import ProResume from "./webpage/Project/Project-subpage/ProResume/ProResume"


function MainWelcome() {
  
  
  return (
    <div className='size'>
     
          
            
            <BrowserRouter>
            
            <Routes>
              <Route  path="/" element={<ConWel />}></Route>
              <Route path="/Home" element={<Home />}></Route>
              <Route path="/About" element={<About />}></Route>
              <Route path="/Project" element={<Project />}></Route>
              <Route path="/Contact" element={<Contact />}></Route>
              <Route path="/ShowContact" element={<ShowContact />}></Route>
              <Route path="/ProFarm" element={<ProFarm />}></Route>
              <Route path="/ProPOS" element={<ProPOS />}></Route>
              <Route path="/ProResume" element={<ProResume />}></Route>

            </Routes>
            </BrowserRouter>                
          

    </div>
      
  )
}

export default MainWelcome