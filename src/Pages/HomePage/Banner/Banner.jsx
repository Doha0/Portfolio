import React from 'react';
import background from '../../../assets/mesh.png'

const Banner = () => {
    return (
        <div className='hero min-h-screen'
            style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-content text-center ">
                <div className="max-w-md">
                    <p className="mb-5">Hello there</p>
                    <h1 className="mb-5 text-5xl font-bold">I am Abu Jar Gifary Doha</h1>
                    <button className="btn btn-ghost">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;