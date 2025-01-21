import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import coxsbazar_image from '../../assets/coxsbazar-iamge.jpeg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={coxsbazar_image} alt="" width={250} height={300} />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an experienced backend developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                <p>My passion for backend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>C#</p> <hr style={{width:"50%"}} />                    
                </div>
                <div className="about-skill">
                    <p>ASP.NET</p> <hr style={{width:"50%"}} />                    
                </div>
                <div className="about-skill">
                    <p>ASP.NET Core</p> <hr style={{width:"50%"}} />                    
                </div>
                <div className="about-skill">
                    <p>Java</p> <hr style={{width:"50%"}} />                    
                </div>
                <div className="about-skill">
                    <p>Oracle, MSSQL, MariaDB</p> <hr style={{width:"50%"}} />                    
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>15+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}
//47:55
export default About
