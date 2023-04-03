import React from 'react';
// import { useEffect } from "react"
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Faqs from './components/pages/Faqs';
import AboutUs from './components/pages/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/faqs' element={<Faqs />} />
          </Routes>
        <Footer />
        
      </Router>
    </>
  );
}



export default App;
