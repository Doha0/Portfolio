import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className='overflow-hidden'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;