import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile-image-razib.png'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} width={300} height={300} alt=""/>
      <h1><span>I'm Sk. Razibul Islam,</span> Backend developer based in Bangladesh.</h1>
      <p>I am a backend developer from Dhaka, Bangladesh with 15+ years of experience in multiple companies like Netweaver Software, Beximco Textiles, Dutch-Bangla Bank, Mutual Trust Bank and Pubali Bank</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}
//24:51
export default Hero
