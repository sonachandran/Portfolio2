import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import About from './About';

import './Home.css'
import Project from './Project';
import Service from './Service';
import Contact from './Contact';
import {  MdWavingHand } from "react-icons/md";
import img20 from './image/img20.jpg'

const Home = () => {
  return (

   <div className='ms-5 row' style={{marginBottom:'140px',marginTop:'240px'}}>
     <div className='col-md-6 col-lg-6'>
   <marquee className="blink" behavior=""  direction="center"> <b style={{fontSize:'50px'}}>Hi,I'am SONA <MdWavingHand /></b></marquee> 
      <div style={{fontSize:'33px'}}>Full Stack Developer</div>
      <div style={{fontSize:'40px'}}>I Love Exploring New Things!</div>
      </div>

      <div className='col-md-6 col-lg-6 ' style={{marginTop:'-20px'}}>
        <img  src={img20} alt="" />
       </div>

   <About/>
   <Project/>
   <Service/>
   <Contact/> 
   </div>
  )
}

export default Home