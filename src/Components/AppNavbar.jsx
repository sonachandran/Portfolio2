// import React from 'react'
// import './Nav.css'
// import Home from './Home'
// import About from './About'
// import { Navbar, Container } from 'react-bootstrap';
// import {Link,Outlet} from 'react-router-dom'




// const Nav= () => {
//   return (
//    <>
 
//    <div className='navb'>
//     <b><Link to='/home' className='link'>HOME</Link></b>
//     <b><Link to='/about ' className='link'>ABOUT</Link> </b>
//     <b> <Link to='/project' className='link'>PROJECT</Link> </b>
//     <b><Link to='/service' className='link'>SERVICE</Link></b>
//     <b><Link to='/contact' className='link' >CONTACT</Link> </b>
   
//     </div> 
//    <Outlet/>
//    </>
//   )
// }

// export default Nav


// Navbar.jsx

import React from 'react';
import './AppNavbar.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import {Link,Outlet} from 'react-router-dom'
const AppNavbar = () => {
  return (
    <div className='bg'>
    <Navbar collapseOnSelect expand="lg" variant="dark" className='justtfy-content-center '>    
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-flex   justify-content-center  align-items-center">
           <b><Link to='/home' className='link'>HOME</Link></b>
           <b><Link to='/about' className='link' >ABOUT</Link></b>
            <b><Link to='/project' className='link'>PROJECT</Link></b>
            <b> <Link to='/service' className='link'>SERVICES</Link></b>
           <b><Link to='/contact' className='link'>CONTACT</Link></b>
          </Nav>
          
        </Navbar.Collapse>

    </Navbar>
    <Outlet/>
    </div>
  );
};

export default AppNavbar;
