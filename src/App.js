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
			<Route path="./components/About.js" element={ <About/> } />
			<Route path="./components/Skills.js" element={ <Skills/> } />
			<Route path="./components/Projects.js" element={ <Projects/> } />
			<Route path="./components/Contact.js" element={ <Contact/> } />
			<Route path="./components/Resume.js" element={ <Resume/> } />
			<Route path="*" element={ '404 Page Not Found' } />
		</Routes>
	    <Footer/>
	</div>
  );
}

export default App;
