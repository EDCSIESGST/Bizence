import React, { useState, useEffect } from 'react';
import Banner from "../Bizenceimg/1 (1).png";
import "./aboutbizence.css";
import CountdownTimer from './Countdowntimer';
import Navbar from './navbar';
import ab from "../Bizenceimg/_1053e401-e67e-4fab-9996-9725e84f12a2-removebg-preview.png"
const Aboutbizence = () => {
  const eventDate = new Date('2024-03-23T00:01:00');


  return (
    <div>
      <Navbar/>
      <section id="banner" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <img id='bannerimg' src={Banner} alt="Banner" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', zIndex: '1', width: '100%', padding: '0 20px' }}>
          <h1>BIZENCE</h1>
          <p>First ever 24hrs Business hackathon in Navi Mumbai</p>
          <CountdownTimer />
          <button style={{marginBottom:'5%', height:'40px',fontSize:'20px'}}>Apply via Unstop</button>
        </div>
      </section>

      <section id="About" >
        <div id="row" data-aos="fade-right" style={{paddingTop:'5%'}}>
          <h2 >What is Bizence?</h2>
          <br />
          <p >It is a national level Business plan hackathon competition. It’s an experience which aims to incentivize creative thinking and promote entrepreneurship culture by providing workshops, hands-on experiences ending with a B plan competition where CEO’s and Founders of various companies judge the ideas of the participants.</p>
          
        </div>
        <div id ="aboutimg" data-aos="fade-left">
  <img src = {ab} />
</div>
      </section>
    </div>
  );
}

export default Aboutbizence;
