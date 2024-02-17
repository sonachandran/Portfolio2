import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import './About.css'
import img from './image/img.jpg'
const About = () => {
  return (
    <div className='bg'style={{}}>
    <div className='row'>
      <h3 style={{display:'flex',justifyContent:'center',color:'black',marginTop:'80px'}}><>ABOUT</></h3>
    </div>

    <div className='container row text container-fluid  '>
      <div className='col-lg-6 col-md-6 col-sm-12'>
       <img src={img} alt="" className='img-fluid img1' style={{width:'400px',marginTop:'-50px',textAlign:'center'}} />
      </div>
     <div className='col-lg-6 col-md-6 col-sm-12  '>
        <div style={{marginLeft:'50px'}}>I'm a <>MERN stack developer</> passionate about creating innovative web applications With a strong foundation in MongoDB, Express.js, React.js, and Node.js, I specialize in building dynamic and responsive solutions.  I thrive on tackling challenges and turning ideas into functional, user-friendly experiences.  <br />Let's collaborate to bring your vision to life!</div>
        <div className='d-flex ms-5 mt-5' style={{fontSize:'45px', gap:'10px'}}>
     
     <div ><FaInstagram/></div>
     <div ><FaGithubSquare/></div>
     <div ><FaFacebook/></div>
     <div ><FaLinkedinIn/></div>
  
   </div>
     </div>

   
    </div>
     </div>

  
  )
}

export default About