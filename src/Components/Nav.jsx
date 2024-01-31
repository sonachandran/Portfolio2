import React from 'react'
import './Nav.css'
import Home from './Home'
import About from './About'

import {Link,Outlet} from 'react-router-dom'




const Nav= () => {
  return (
   <>
 
   <div className='navb'>
    <Link to='/home' className='link'>HOME</Link>
    <Link to='/about ' className='link'>ABOUT</Link> 
    <Link to='/project' className='link'>PROJECT</Link> 
    <Link to='/service' className='link'>SERVICE</Link>
    <Link to='/contact' className='link' >CONTACT</Link> 
    </div> 
   <Outlet/>
   </>
  )
}

export default Nav