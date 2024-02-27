import React from 'react'
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';

const Home = () => {
	return (
		<div>
			<section>
				<About/>
			</section>

			<section>
				<Skills/>
			</section>

			<section>
				<Projects/>
			</section>

			<section>
				<Contact/>
			</section>

			<section>
				<Resume/>
			</section>         
		</div>
	)
}

export default Home