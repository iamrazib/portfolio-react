import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I am currently available to take project.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} width={20} alt="" /><p>iamrazib@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <img src={call_icon} width={20} alt="" /><p>+8801714-493493</p>
                    </div>
                    <div className="contact-detail">
                    <img src={location_icon} width={20} alt="" /><p>Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name='message' rows="8"  placeholder='Enter your message'/>
                <button type='submit' className="contact-submit">Submit Now</button>
            </form>
        </div>
    </div>
  )
}

// 1:24:29
export default Contact

