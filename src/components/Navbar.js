import { useState, useEffect } from "react"
import React from 'react'
import { Link } from "react-router-dom"
import { FaBuffer, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import {Button} from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
      useEffect(() => {
        showButton();
      }, []);
    
      window.addEventListener('resize', showButton);
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'> 
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> 
                VIVITSU <FaBuffer className="fa-buffer" />
                </Link>       
                <div className="menu-icon" onClick={handleClick}>
                    {!click ? <FaBars className="fa-bars"/> : <IoMdClose className="io-md-close"/>}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item"> 
                        <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li> 
                    <li className="nav-item"> 
                        <Link to="/about-us" className="nav-links" onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item"> 
                        <Link to="/faqs" className="nav-links" onClick={closeMobileMenu}>
                            FAQs
                        </Link>
                    </li>


                    <li className="nav-item"> 
                    {/* <a target="_blank" href="http://google.com" rel="noreferrer noopener">
                         <button class="nav-links-mobile">Click</button> 
                    </a> */}

                        <a className="nav-links" href="https://unstop.com/o/qTPjOK9?lb=2ZvsJH5" target="_blank">
                                Register
                        </a>
                    </li>
                    
                </ul>
                {/* <div className="reg-btn-div"> 
                    <a className="reg-btn" href="https://www.google.com/" target="_blank" 
                        rel="noopener noreferrer">
                            Register
                        </a>
                </div>  */}
                {/* {button && <Button buttonStyle='btn--outline'>Register</Button>} */}
                
            </div>
        </nav>
    </>
  )
}

export default Navbar