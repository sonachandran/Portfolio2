import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './Components/AppNavbar';
import Home from './Components/Home';
import About from './Components/About'

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Project from './Components/Project';
import Service from './Components/Service';
import Contact from './Components/Contact';
import { Navbar } from 'react-bootstrap';
import NavScrollExample from './Components/AppNavbar';
import AppNavbar from './Components/AppNavbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    
    
   <BrowserRouter>
    <Routes>
        <Route path='/'element={<AppNavbar/>}>
        
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>    
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
      </React.StrictMode>
);

reportWebVitals();
