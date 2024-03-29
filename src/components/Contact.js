//Contacts.js

import React from 'react';

const Contact = () => {
  return (
    <div class='pagewrapper' id="contact">
        <div class='pagecontent'>
            <h2>Contact Me</h2>
            <p>
                Feel free to reach out to me through the following channels:
            </p>
            <ul>
                <li>Email: your.email@example.com <i class="fa-solid fa-envelope-open"> </i></li>
                <li>LinkedIn: linkedin.com/in/yourusername <i class="fa-brands fa-linkedin"> </i></li>
                <li>Twitter: @yourtwitterhandle<i class="fa-brands fa-x-twitter"></i></li>
            </ul>
        </div>
    </div>
  );
};

export default Contact;
