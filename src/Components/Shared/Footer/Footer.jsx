import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="w-full min-h-screen flex items-center justify-center bg-black">
                <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
                    <div className="w-full text-7xl font-bold">
                        <h1 className="w-full md:w-2/3">How can I help you? get
                            in touch</h1>
                    </div>
                    <div className="flex mt-8 flex-col md:flex-row md:justify-between">
                        <p className="w-full md:w-2/3 text-gray-400">I am eager to connect with visionaries seeking a blend of passion, creativity, and technical finesse. Together, we can make waves in the ever-evolving world of web development. So, let's forge a path of success together and revolutionize the digital landscape.</p>
                        <div className="w-44 pt-6 md:pt-0">
                            <Link to="https://www.linkedin.com/in/doha0/" className="bg-white text-black justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">Hire Me</Link>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex mt-24 mb-12 flex-row justify-between">
                            <div className="">
                                <Link to="/">Abu Jar Gifary Doha</Link>
                            </div>
                            <Link to="/" className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">Home</Link>
                            <Link to="/about" className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">About</Link>
                            <Link to="/project" className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">Projects</Link>
                            <Link to="/contact" className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">Contact</Link>
                            <div className="flex flex-row space-x-8 items-center justify-between">
                                <Link to="https://www.linkedin.com/in/doha0/">
                                    <FaLinkedin />
                                </Link>
                                <Link to="https://github.com/Doha0">
                                    <FaGithubSquare />
                                </Link>
                                <Link to="https://www.facebook.com/abujargifarydoha/">
                                    <FaFacebookSquare />
                                </Link>
                            </div>
                        </div>
                        <hr className="border-gray-600" />
                        <p className="w-full text-center my-12 text-gray-600">Copyright © 2023 Abu Jar Gifary Doha</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;