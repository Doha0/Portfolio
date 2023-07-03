import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div>
            <h2 className='p-title'>About Me</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-32'>
                <div>
                    <h2 className='text-center lg:text-left text-2xl font-semibold mb-10'>Get to know me!</h2>
                    <div className='p-paragraph text-left'>As an ambitious Front-end Web Developer, I am passionate to create visually appealing and user-friendly web applications.
                        I enjoy the process to turn ideas into reality that delight users and drive business success.
                        <br />
                        <p className='p-paragraph text-left mt-6 mb-6'>
                            I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                            Together we can make waves in the ever-evolving world of web development.
                        </p>
                    </div>
                    <Link to="/contact"><button className="font-semibold py-2 px-4 uppercase border border-black rounded shadow bg-white hover:bg-black text-black hover:text-white my-8">Contact me</button>
                    </Link>
                </div>

                <div>
                    <h2 className='text-center lg:text-left text-2xl font-semibold mb-10'>My Skills</h2>
                    <div>
                        <button className="skill-btn">HTML</button>
                        <button className="skill-btn">CSS</button>
                        <button className="skill-btn">Javascript</button>
                        <button className="skill-btn">React</button>
                        <button className="skill-btn">C</button>
                        <button className="skill-btn">C++</button>
                        <button className="skill-btn">Git & GitHub</button>
                        <button className="skill-btn">Express JS</button>
                        <button className="skill-btn">MongoDB</button>
                        <button className="skill-btn">Firebase</button>
                        <button className="skill-btn">Figma</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;