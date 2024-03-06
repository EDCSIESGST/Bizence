import React from 'react';
import logo from "../Bizenceimg/Logo.png"
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer' id="end">
      <div className="container">
        <div className = "Leftfooter">
            <img src={logo} ></img>

<p>We conduct a number of workshops, speaker sessions, inter-collegiate and national level competitions and also support student-run ventures.</p>
<p>Contact: +91 97572 12304</p>
      <p>Mail:edc@siesgst.ac.in</p>
        </div>
        <div className = "RightFooter">
        <iframe
        title="Google Maps Location"
        width="400"
        height="200"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d320485.6525610038!2d72.80080322156891!3d19.007866414390993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3db5e2c85cd%3A0xef26c52d7d73816e!2sSIES%20Graduate%20School%20of%20Technology!5e0!3m2!1sen!2sin!4v1695930265236!5m2!1sen!2sin"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
     
      <br/>
      <br/>
     
            <p>Copyright © All rights reserved <br/> Developed by the Technical Team of  E-CELL SIES GST</p>
            </div>
            </div>
      </div>
  );
};

export default Footer;
