import React, { useState } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import {FaHome} from 'react-icons/fa';
import { FcAbout } from "react-icons/fc";
import { IoIosMail } from "react-icons/io";
import { GrGallery } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  
  return (
    <>
    <div className='main-navbar'>
      <div className={`navbar ${isActive ? "active" : ""}`}>
        <Link to={"/"} className='link'><FaHome color='white'/><span>Home</span></Link>
        <Link to={'/gallery'} className='link'><GrGallery color='white'/><span>Gallery</span></Link>
        <Link to={'/contact'} className='link'><IoIosMail color='white'/><span>Contact</span></Link>
        <Link to={'/about'} className='link'><FcAbout color='white'/><span>About</span></Link>
        <div >
          <span className='hamburger mobile-ham' onClick={()=>setIsActive(!isActive)}>
            <GiHamburgerMenu color='white'/>
          </span>
        </div>
    </div>
    <div>
      <Link to={"/"} className='link home-link'><FaHome color='white'/><span>Home</span></Link>
    </div>
    <div >
      <span className='hamburger' onClick={()=>setIsActive(!isActive)}>
        <GiHamburgerMenu color='white'/>
      </span>
    </div>
    </div>
    </>
  )
}

export default Navbar;