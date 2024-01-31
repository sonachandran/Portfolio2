import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';

import './Home.css'
import Project from './Project';
import Service from './Service';
import Contact from './Contact';

const Home = () => {
  return (
   <>
    <div className='container-fluid row bg  '>
       <div className='wel' style={{marginTop:'240px'}}> Welcome To My Portfolio!</div>
       <div className='wel'>I'm SONA</div>
   </div>
   <About/>
   <Project/>
   <Service/>
   <Contact/>
  
   </>
  )
}

export default Home