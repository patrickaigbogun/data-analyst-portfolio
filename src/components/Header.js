// Header.js

import React from 'react';
import { Link } from "react-router-dom";
import '../styles.css';

const Header = () => {
  return (
    <header>
      <h1>Patrick Aigbogun Data Analyst</h1>
      <nav>
        <ul className="horizontal-menu">
          <li><Link to="/">Home</Link></li> 
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contacts">Contact Me</Link></li>
          <li><Link to="/resume">Resume/CV</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
