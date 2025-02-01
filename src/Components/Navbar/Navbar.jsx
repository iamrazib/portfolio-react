import React, {useState} from 'react'
import './Navbar.css'
import logo from '../../assets/name_img2.jpg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={logo} width={100} height={70} alt="razib"/> 
      <ul className="nav-menu">
        
        <li><AnchorLink></AnchorLink><p onClick={()=> setMenu("home")}>Home</p>{menu==="home"? <img src={underline} alt=''/> : <></>}</li>
        <li><AnchorLink></AnchorLink><p onClick={()=> setMenu("about")}>About Me</p>{menu==="about"? <img src={underline} alt=''/> : <></>}</li>
        {/* <li><p onClick={()=> setMenu("services")}>Services</p>{menu==="services"? <img src={underline} alt=''/> : <></>}</li> */}
        <li><AnchorLink></AnchorLink><p onClick={()=> setMenu("work")}>Portfolio</p>{menu==="work"? <img src={underline} alt=''/> : <></>}</li>
        <li><AnchorLink></AnchorLink><p onClick={()=> setMenu("contact")}>Contact</p>{menu==="contact"? <img src={underline} alt=''/> : <></>}</li>

      </ul>
      <div className="nav-connect">Connect with Me</div>
    </div>
  )
}

export default Navbar

