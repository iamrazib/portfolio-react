import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import logo from '../../assets/name_img2.jpg'

const Footer = () => {
  return (
    <div>
      <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logo}  width={100} height={70} alt="" />
                    <p>I am a backend developer from Dhaka, Bangladesh with 15+ years of experience in multiple companies like Netweaver Software, Beximco Textiles, Dutch-Bangla Bank, Mutual Trust Bank and Pubali Bank</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>            
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
            2025 Razibul, All rights reserved 
        </p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
