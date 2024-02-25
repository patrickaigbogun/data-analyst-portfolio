//app.js

import React, { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'; // Add Contact component
import Resume from './components/Resume';   // Add Resume component
import Footer from './components/Footer';
//import { toggleFooterVisibility } from './scrollToggle';
import './App.css';

function App() {
  // Run the toggleFooterVisibility logic on mount
  /*useEffect(() => {
    toggleFooterVisibility();

    // Attach the toggleFooterVisibility function to the window's scroll event
    window.addEventListener('scroll', toggleFooterVisibility);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleFooterVisibility);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount 
  */

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
