import React from 'react';
import Banner from '../Banner/Banner';
import AboutMe from '../../AboutMe/AboutMe';
import Projects from '../../Projects/Projects';
import Contact from '../../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='mx-4 lg:mx-auto max-w-screen-lg'>
                <AboutMe></AboutMe>
                <Projects></Projects>
                <Contact></Contact>
            </div>

        </div>
    );
};

export default Home;