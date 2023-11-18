import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggler from '../../../utilities/ThemeToggler/ThemeToggler';
import './Navbar.css'


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleDownload = () => {
        const filePath = "/Resume.pdf";
        const link = document.createElement("a");
        link.href = filePath;
        link.download = "Abu Jar Gifary Doha - Resume.pdf";
        link.click();
    };
    const navItems = <>
        <Link to="/">
            <button className='navItems'>
                Home
            </button>
        </Link>
        <Link to="/about">
            <button className='navItems'>
                About Me
            </button>
        </Link>
        <Link to="/contact">
            <button className='navItems'>
                Contact
            </button>
        </Link>
        <Link className='navItems'>
            <ThemeToggler />
        </Link>
        <Link onClick={handleDownload} className="rounded px-4 py-2 overflow-hidden relative group cursor-pointer border-2 border-slate-950 text-slate-950 hover:text-white">
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-slate-950 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-slate-950 transition duration-300 group-hover:text-white ease">Get Resume</span>
        </Link>
    </>

    return (
        <nav
            onClick={() => setIsOpen(!isOpen)}
            className="container p-4 mx-auto lg:flex lg:justify-between lg:items-center"
        >
            <div className="flex items-center justify-between">
                <Link to="/" className='nav-title'>
                    Abu Jar Gifary Doha
                </Link>

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                    <button

                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                        aria-label="toggle menu"
                    >
                        {!isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
                className={`${isOpen
                    ? 'translate-x-0 opacity-100 '
                    : 'opacity-0 -translate-x-full'
                    } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
            >
                <div className="flex flex-col items-center space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
                    {
                        navItems
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;