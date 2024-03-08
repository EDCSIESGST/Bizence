import React, { useState, useEffect } from 'react';
import Banner from "../Bizenceimg/1 (1).png";
import "./aboutbizence.css";
import CountdownTimer from './Countdowntimer';
import Navbaar from './navbar';
import { Link } from 'react-router-dom';
import ab from "./Bizenceimg/About.png"
const Aboutbizence = () => {
  const eventDate = new Date('2024-03-23T00:01:00');


  return (
    <div>
      <Navbaar/>
      
      <section id="banner" style={{ position: 'relative', height: '90vh', marginTop:'',overflow: 'hidden' }}>
  <img id='bannerimg' src={Banner} alt="Banner" style={{ position: 'absolute', top: '0', left: '0', width: '100%', objectFit: 'cover' ,height:'100%' }} />
  <div style={{position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', zIndex: '1', width: '90%'}}>
    <br/>
   
    <h1 style={{ }} >BIZENCE</h1>
    <p style={{ margin: '0' }}>First ever 24hrs Business hackathon in Navi Mumbai</p>
    <CountdownTimer />
    <a href="https://unstop.com/p/bizence-2024-national-level-business-hackathon-entrepreneurship-cell-sies-graduate-school-of-technology-921398?lb=RbA3juDG" target='_blank'> <button style={{ marginBottom:'5%',height: '40px', fontSize: '20px',overflow:'hidden' }}>Apply Via Unstop</button> </a>
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