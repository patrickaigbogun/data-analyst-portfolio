//app.js

import React, { useEffect } from 'react';
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
      <Header />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Resume id="resume" />
      <Footer />
    </div>
  );
}

export default App;
