import React from 'react';
import { FiCode, FiMenu, FiX } from "react-icons/fi";
import './Navbar.css';
import { useState } from 'react';
import { Link } from "react-router-dom";

function Navbar () {

    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className='header'>
            <div className="navbar-con">
            
            <nav className='navclass'>
                <h1 className='logo'>Res<span className='spanclass'>ume</span><FiCode /></h1>
                <ul className={click ? "menu active" : "menu"}>
                    <li><div><Link to="/Home" className="menu-link" onClick={closeMobileMenu}>Home</Link></div></li>
                    <li><div><Link to="/About" className="menu-link" onClick={closeMobileMenu}>About Us</Link></div></li>
                    <li><div><Link to="/Project" className="menu-link" onClick={closeMobileMenu}>Project</Link></div></li>
                    <li><div><Link to="/Contact" className="menu-link" onClick={closeMobileMenu}>Contact Us</Link></div></li>
                 </ul>
                <div className="mobile-menu" onClick={handleClick}>
                        {click ? (
                            <FiX />
                        ) : (
                            <FiMenu />
                        )}
                </div>
            </nav>
            
            </div>
            
        </div>
  )
}

export default Navbar