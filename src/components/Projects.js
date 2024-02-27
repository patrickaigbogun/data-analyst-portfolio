// Projects.jspagewrapper
import React from 'react';

const Projects = () => {
  return (
    <div class='pagewrapper' id="projects"> {/* Change ID to className */}
        <div class='pagecontent'>
            <h2>Projects</h2>
            <p>
                Here are some of my projects. You can find more on my{' '}
                <a href="https://github.com/youngboypimpin" target="_blank" rel="noopener noreferrer">
                    GitHub <i class="fa-brands fa-github"></i>
                </a>.
            </p>
        </div>
    </div>
  );
};

export default Projects;
