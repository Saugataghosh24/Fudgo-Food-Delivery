import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <a href="#"><img className="footer-logo" src={assets.logo} /></a>
            <p>Bringing delicious meals to your doorstep with care and quality. Your satisfaction is our top priority, every time you order.</p>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/saugata-ghosh-2413721b3/" target="_main"><img src={assets.linkedin_icon} alt="" /></a>
                <a href="https://www.facebook.com/saugata.ghosh.104" target="_main"><img src={assets.facebook_icon} alt="" /></a>
                <a href="https://www.instagram.com/saugata__ghosh/" target="_main"><img src={assets.insta_icon} alt="" /></a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2> COMPANY </h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policies</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 6296526441</li>
                <li><a href="mailto:saugataghosh566@gmail.com">saugtaghosh566@gmail.com</a></li>
            </ul>
            <pre><b>Developed  by  Saugta  Ghosh</b></pre>
        </div>
        </div>
        <hr/>
        <p className="copyright">Copyright 2024 &copy; Fudgo.com - All Right Reserved. </p>
    </div>
  )
}

export default Footer
