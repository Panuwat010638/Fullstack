import React from 'react'
import './content.css';
import { Link } from 'react-router-dom';

function content() {
  return (
    <div className='content-bgHome'>
        <div className='container-HomeContent'>
        <section className='content-con'>
            <div className='content-l'>
                <h4 className='h4class'>WELCOME TO</h4>
                <h1 className='h1class'>RESUME Panuwat </h1>.
                <h3 className='h3class'>The Website for applying for jobs.</h3>    
            </div>
        </section>
        <section>
             <nav  >
                <ul className='ulHomeclass'> 
                    <li className='liclas'><div className='liclass a'><Link to="/About">About Us</Link></div></li>
                    <li className='liclas'><div className='liclass a'><Link to="/Project">My Project</Link></div></li>
                    <li className='liclas'><div className='liclass a'><Link to="/Contact">Contact Us</Link></div></li>
                </ul>
               
            </nav>
        </section>
           

            
            
        
        
  </div>
  </div>
    
  )
}

export default content