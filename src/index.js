import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About'

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Project from './Components/Project';
import Service from './Components/Service';
import Contact from './Components/Contact';
import { Navbar } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    
    
   <BrowserRouter>
    <Routes>
        <Route path='/'element={<Nav/>}>
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
