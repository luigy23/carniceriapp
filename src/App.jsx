import './App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './vistas/About';
import Contact from './vistas/Contact';
import NavMenu from './NavMenu';
import Footer from './Footer';
import Home from './vistas/Home';

function App() {


  return (
    <>
    <NavMenu />
    <Routes>
      
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  <Footer />
  </>

  );
}

export default App;
