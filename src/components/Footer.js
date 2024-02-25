// Footer.js

import React from 'react';
import '../styles.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-menu">
          <h3><i class="fa-solid fa-address-card"></i></h3>
          <ul>
            <li><i class="fa-solid fa-envelope-open"> </i> your.email@example.com  </li>
            <li><i class="fa-brands fa-linkedin"> </i>  linkedin.com/in/yourusername </li>
            <li><i class="fa-brands fa-whatsapp"></i>  +123456789 </li>
            <li><i class="fa-brands fa-instagram"></i>  @yourinstagram </li>
          </ul>
          <h3><i class="fa-solid fa-download"></i></h3>
          <ul>
            <li>
              <a href="src\files\PATRICK SOD CV.pdf" download>
                Download Resume
              </a>
            </li>
            <li>
              <a href="/path/to/dummy_project1.pdf" download>
                Dummy Project 1
              </a>
            </li>
            <li>
              <a href="/path/to/dummy_project2.pdf" download>
                Dummy Project 2
              </a>
            </li>
            <li>
              <a href="/path/to/dummy_project3.pdf" download>
                Dummy Project 3
              </a>
            </li>
          </ul>
          <h3>Quick Links</h3>
          <ul>
            <li>
            <a className="back-to-top" href="#" onClick={() => window.scrollTo(0, 0)}>
            Back to Top
          </a>
            </li>
            <li>
              <a href="https://github.com/youngboypimpin" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-github"></i>
              </a>
            </li>
            {/* Two extra dummy spaces for potential future links */}
            <li><a href="#">Dummy Link 1</a></li>
            <li><a href="#">Dummy Link 2</a></li>
          </ul>
      </div>

      <p>&copy; 2023 Patrick Aigbogun</p>
    </footer>
  );
};

export default Footer;
