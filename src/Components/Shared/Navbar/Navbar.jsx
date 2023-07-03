import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const handleDownload = () => {
        const resumeUrl = 'https://drive.google.com/file/d/1PTP6ScZ9msFR4ZIoA3NtC2Dq_s5Ts40b/view';
        window.open(resumeUrl, '_blank');
    }
    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About Me</Link></li>
        <li><Link to="/">Contact</Link></li>
        <Link onClick={handleDownload} className="rounded px-4 py-2 overflow-hidden relative group cursor-pointer border-2 border-slate-950 text-slate-950 hover:text-white">
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-slate-950 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-slate-950 transition duration-300 group-hover:text-white ease">Get Resume</span>
        </Link>
    </>

    return (
        <section className="navbar fixed z-10 bg-opacity-0 bg-white text-black">
            <div className="navbar-start w-[100%] lg:w-1/2">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-50 rounded-box w-52 font-medium">
                        {
                            navItems
                        }
                    </ul>
                </div>
                <Link to="/"
                    className="rounded px-4 py-2 overflow-hidden relative group cursor-pointer
                     text-slate-950 hover:text-white text-2xl font-semibold">
                    <span className="absolute w-96 h-0 transition-all duration-300 origin-center rotate-45
                     -translate-x-20 bg-slate-950 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative text-slate-950 transition duration-300 group-hover:text-white ease">
                        Abu Jar Gifary Doha</span>
                </Link>

            </div>
            <div className="navbar-end hidden lg:flex justify-items-center">
                <ul className="menu menu-horizontal px-1 font-medium">
                    {
                        navItems
                    }
                </ul>
            </div>
        </section>
    );
};

export default Navbar;