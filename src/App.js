//app.js

import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'; // Add Contact component
import Resume from './components/Resume';   // Add Resume component
import Footer from './components/Footer';
import './styles.css';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/skills" element={ <Skills/> } />
          <Route path="/projects" element={ <Projects/> } />
          <Route path="/contacts" element={ <Contact/> } />
          <Route path="/resume" element={ <Resume/> } />
          <Route path="*" element={<div>
            <h1>Error! page not found</h1>
          </div>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
