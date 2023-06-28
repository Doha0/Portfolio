import React from 'react';
import background from '../../../assets/mesh.png'

const Banner = () => {
    return (
        <div className='space-y-2 lg:space-y-4 py-6 px-4 lg:py-24 lg:px-20 bg-cover bg-center bg-no-repeat object-cover' style={{ backgroundImage: `url(${background})` }}>
            <p className='font-medium uppercase text-xs lg:text-xl'>Official Refurbished</p>
            <div className='font-semibold text-base lg:text-4xl space-y-1 lg:space-y-2'>
                <h2 >Save 20%</h2>
                <h2 >Certified Quality, Full Warranty</h2>
            </div>
            <button className="btn bg-slate-950 text-white ">Shop Now</button>
        </div>
    );
};

export default Banner;