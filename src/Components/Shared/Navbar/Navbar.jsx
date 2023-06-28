import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/icon.png"

const Navbar = () => {

    const navItems = <>
        <li><Link>Item 1</Link></li>
        <li><Link>Item 3</Link></li>
        <Link className="rounded px-4 py-2 overflow-hidden relative group cursor-pointer border-2 border-slate-950 text-slate-950 hover:text-white">
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-slate-950 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-slate-950 transition duration-300 group-hover:text-white ease">Contact</span>
        </Link>
    </>

    return (
        <div className="navbar bg-slate-50 text-slate-950">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-50 rounded-box w-52">
                        {
                            navItems
                        }
                    </ul>
                </div>
                <Link to="/"
                    className="btn normal-case text-lg ] 
                "><img className='w-12 mr-2' src={logo} alt="" />
                    Abu Jar Gifary Doha</Link>
            </div>
            <div className="navbar-end hidden lg:flex justify-items-center">
                <ul className="menu menu-horizontal px-1">
                    {
                        navItems
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;