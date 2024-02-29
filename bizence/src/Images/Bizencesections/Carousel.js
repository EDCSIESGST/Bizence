
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "./carousel.css"
import image1 from "../Bizenceimg/IMG_9720.jpg"
import image2 from "../Bizenceimg/IMG_9924 (1).jpg"
import image3 from "../Bizenceimg/IMG_9989.jpg"


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import './carousel.css';


// import required modules
import { EffectCoverflow, Pagination ,Autoplay} from 'swiper/modules';



const Carousel = () => {
  return (
   <div id='swipes'>
        <h1 style={{ textAlign: 'center', overflow:"hidden" }}>A Peek at Past</h1>
        <br></br>
        <br>
        </br>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
        
            slidesPerView={'3'}
            spaceBetween={100}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth:300,
              modifier: 1,
              slideShadows: true,
              
            }}
            
            modules={[EffectCoverflow, Pagination ,Autoplay]}
            autoplay={{ delay: 700 }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src= {image1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image3} />
            </SwiperSlide>
           
         
          
            
            
          </Swiper>
       </div>
      );
  
}

export default Carousel
