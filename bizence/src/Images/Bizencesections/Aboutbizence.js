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
          <p >Initiated in 2010, the Entrepreneurship Cell of SIESGST is a non-profit student organization dedicated to promoting the spirit of entrepreneurship among the students of India. To achieve this, we conduct events which help spread our message. We also have an incubation team which helps advise and foster the ideas of students who dream of building their own startup.</p>
          
        </div>
        <div id ="aboutimg" data-aos="fade-left">
  <img src = {ab} />
</div>
      </section>
    </div>
  );
}

export default Aboutbizence;
