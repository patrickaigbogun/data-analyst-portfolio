// Header.js

import React from 'react';
import '../styles.css';

const Header = () => {
  return (
    <header>
      <h1>Patrick Aigbogun Data Analyst</h1>
      <nav>
        <ul className="horizontal-menu">
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact Me</a></li>
          <li><a href="#resume">Resume/CV</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
