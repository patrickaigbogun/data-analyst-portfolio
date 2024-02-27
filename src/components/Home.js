import React from 'react'
import '../styles.css';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';

const Home = () => {
  return (
    <div>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Resume/>
    </div>
  )
}

export default Home