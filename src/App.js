import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { Routes } from 'react-router-dom';
import Timeline from './Images/Bizencesections/timeline';
import { Route } from 'react-router-dom'
import Faq from './Images/Bizencesections/Faq';
import TrackEvent from './Images/Bizencesections/tracks';
import AOS from 'aos';
import whys from './Images/Bizencesections/whybizence';
import { FaqWithHeader } from './Images/Bizencesections/FaqWithHeader';
import CardFlip from './Images/Bizencesections/High';
import 'aos/dist/aos.css';
import High from './Images/Bizencesections/High';
import Footer from './Images/Bizencesections/footer';

import SponsorSection from './Images/Bizencesections/Sponsors';
import Aboutbizence from './Images/Bizencesections/Aboutbizence';
import PrizesSection from './Images/Bizencesections/prizes';
import Carousel from './Images/Bizencesections/Carousel';
import { FaqWithBg } from './Images/Bizencesections/FaqWithBg';
import Navbar from './Images/Bizencesections/navbar';
  function App() {
    useEffect(() => {
      AOS.init({
        duration: 700, // Animation duration in milliseconds
        once: false, // Animation only happens once
        easing: 'ease-out', // Easing function for animation
      });
    }, []); // Run once when component mounts
  
  return (
    <div className="App" style={{backgroundColor:'#060F30'}}>
  {/* <navbar/> */}
      
      <Aboutbizence/>
     <TrackEvent/> 
 
   <Timeline/>
   <Carousel/>
<CardFlip/>
   <PrizesSection/>
   {/* <SponsorSection/> */}

<FaqWithBg/>
   <Footer/>
    </div>
  );
}

export default App;
