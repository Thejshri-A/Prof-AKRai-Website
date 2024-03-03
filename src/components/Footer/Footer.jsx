import React from 'react'
import './Footer.css'
import GitHub from "../../assets/Gmail.png"
import Instagram from "../../assets/Instagram.png"
import LinkedIn from "../../assets/LinkedIn.png"
import Call from "../../assets/IITKGP.png"

const Footer = () => {
  return (
    <div className="Footer-container">
        <hr/>
        <div className="footer">
            <div className="logo-f">
                <img src={Call} alt="" />
                <div className="logo-name-f">
                <span>Indian Institute of Technology Kharagpur</span>
                <span> भारतीय प्रौद्योगिकी संस्थान खड़गपुर</span>
                </div>
            </div>
            <div className='logo-r'>
              <div className='logo-name-r'>
                <span>IIT Kharagpur,</span>
                <span> West Bengal, India-721302</span>
                <span>Phone: +91-3222-255221</span>
                <span>Fax: +91-3222-255303</span>
              </div>
            </div>
        </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer
