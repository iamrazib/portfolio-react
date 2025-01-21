import React from 'react'
import './Navbar.css'
import logo from '../../assets/name_img2.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} width={100} height={70} alt="razib"/> 
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect with Me</div>
    </div>
  )
}

export default Navbar
