//app.js

import React from 'react';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'; // Add Contact component
import Resume from './components/Resume';   // Add Resume component
import Footer from './components/Footer';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        {/*  <Route path="/" element={ <Home/> } /> */}
          <Route path="./components/About" element={ <About/> } />
          <Route path="./components/Skills" element={ <Skills/> } />
          <Route path="./components/Projects" element={ <Projects/> } />
          <Route path="./components/Contact" element={ <Contact/> } />
          <Route path="./components/Resume" element={ <Resume/> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
