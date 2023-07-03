import React from 'react';
import toy from "../../assets/toy.jpg"
import sport from "../../assets/sport.jpg"
import recipe from "../../assets/recipe.jpg"
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='mb-6'>
            <h2 className='p-title'>Projects</h2>

            <div className='grid justify-center items-center gap-16'>

                <div className="max-w-4xl rounded overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <img className="w-full" src={toy} alt="toy" />
                    <div className='grid justify-center items-center'>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Toy Tronic</div>
                            <p className="text-gray-700 text-base">
                                Toy Tronic is an application focused on electronic toys, providing an interactive experience for users.</p>
                            <div className="pt-4 pb-2 grid grid-cols-2 lg:grid-cols-3 justify-between gap-y-2">
                                <Link to="https://toy-tronic.web.app/"><button className="font-medium text-xs py-2 px-4 border border-black rounded shadow bg-white hover:bg-black text-black hover:text-white">Live Site</button></Link>
                                <Link to="https://github.com/Doha0/ToyTronic"><button className="font-medium text-xs py-2 px-4 border border-black rounded shadow bg-white hover:bg-black text-black hover:text-white">Client Repo</button></Link>
                                <Link to="https://github.com/Doha0/Toy-Tronic-server"><button className="font-medium text-xs py-2 px-4 border border-black rounded shadow bg-white hover:bg-black text-black hover:text-white">Server Repo</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl rounded overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <img className="w-full" src={sport} alt="toy" />
                    <div className='grid justify-center items-center'>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Silver Sports</div>
                            <p className="text-gray-700 text-base">
                                Silver Sports is a premier sports academy facility that offers a variety of sports courses & programs.</p>
                            <div className="pt-4 pb-2 grid grid-cols-2 lg:grid-cols-3 justify-between  gap-y-2">
                                <Link to="https://silver-sports.web.app/"><button className="font-medium text-xs py-2 px-4 border border-black rounded shadow bg-white hover:bg-black text-black hover:text-white">Live Site</button></Link>
                                <Link to="https://github.com/Doha0/silver-sports"><button className="font-medium text-xs py-2 px-4 border border-black rounded shadow bg-white hover:bg-black text-black hover:text-white">Client Repo</button></Link>
                                <Link to="https://github.com/Doha0/silver-sports-server"><button className="font-medium text-xs py-2 px-4 border border-black rounded shadow bg-white hover:bg-black text-black hover:text-white">Server Repo</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl rounded overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <img className="w-full" src={recipe} alt="toy" />
                    <div className='grid justify-center items-center'>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Delight Chef</div>
                            <p className="text-gray-700 text-base">
                                Delight Chef is a Turkish chef-recipe website aimed at food enthusiasts seeking culinary inspiration.
                            </p>
                            <div className="pt-4 pb-2 grid grid-cols-2 lg:grid-cols-3 justify-between gap-y-2">
                                <Link to="https://delight-chef.web.app/"><button className="font-medium text-xs py-2 px-4 border border-black rounded shadow bg-white hover:bg-black text-black hover:text-white">Live Site</button></Link>
                                <Link to="https://github.com/Doha0/Delight-chef"><button className="font-medium text-xs py-2 px-4 border border-black rounded shadow bg-white hover:bg-black text-black hover:text-white">Client Repo</button></Link>
                                <Link to="https://github.com/Doha0/Delight-chef-server"><button className="font-medium text-xs py-2 px-4 border border-black rounded shadow bg-white hover:bg-black text-black hover:text-white">Server Repo</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;