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
         {/*<li><Link to="/">Home</Link></li>*/} 
          <li><Link to="./About.js">About Me</Link></li>
          <li><Link to="./Skills.js">Skills</Link></li>
          <li><Link to="./Projects.js">Projects</Link></li>
          <li><Link to="./Contact.js">Contact Me</Link></li>
          <li><Link to="./Resume.js">Resume/CV</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
