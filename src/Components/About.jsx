import React from 'react'
import './About.css'
import img from './image/img.jpg'
const About = () => {
  return (
    <>
    <div className='row' style={{marginTop:'60px'}}>
      <h3 style={{display:'flex',justifyContent:'center',color:'rgb(30, 87, 87)'}}>ABOUT</h3>
    </div>
    <div className='container row text '>
      <div className='col-lg-6 col-md-6 col-sm-12 '>
       <img  src={img} alt="" className='img-fluid img1' style={{width:'400px'}} />
      </div>
     <div className='col-lg-6 col-md-6 col-sm-12  '>
        <div style={{marginLeft:'50px'}}> I'm a MERN stack developer passionate about creating innovative web applications With a strong foundation in MongoDB, Express.js, React.js, and Node.js, I specialize in building dynamic and responsive solutions.  I thrive on tackling challenges and turning ideas into functional, user-friendly experiences.  <br />Let's collaborate to bring your vision to life!</div>
     </div>
   </div>
    </>
  )
}

export default About