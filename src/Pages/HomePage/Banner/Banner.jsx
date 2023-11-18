import React, { useState, useCallback, useRef, useEffect } from 'react'
import background from '../../../assets/mesh.png'
import { useTransition, animated } from '@react-spring/web'

const Banner = () => {

    // const ref = useRef([]);
    // const [items, set] = useState([]);
    // const transitions = useTransition(items, {
    //     from: {
    //         opacity: 0,
    //         height: 0,
    //         innerHeight: 0,
    //         transform: 'perspective(600px) rotateX(0deg)',
    //         color: '#3D4073',
    //     },
    //     enter: [
    //         { opacity: 1, height: 80, innerHeight: 80 },
    //         { transform: 'perspective(600px) rotateX(270deg)', color: '#000' },
    //         { transform: 'perspective(600px) rotateX(0deg)' },
    //     ],
    //     leave: [{ color: '#294861' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    //     update: { color: '#000' },
    // })

    // const reset = useCallback(() => {
    //     ref.current.forEach(clearTimeout)
    //     ref.current = []
    //     set([])
    //     ref.current.push(setTimeout(() => set(['Hi, I am Doha']), 1000))
    //     ref.current.push(setTimeout(() => set(['Hi, I am Doha', 'A Front-end Web Developer']), 5000))
    //     ref.current.push(setTimeout(() => set(['Hi, I am Doha', 'A Front-end Web Developer', 'I love the process of turning ideas into reality']), 8000))
    // }, [])

    // useEffect(() => {
    //     reset()
    //     return () => ref.current.forEach(clearTimeout)
    // }, [])

    // return (
    //     <div className='hero min-h-screen'
    //         style={{ backgroundImage: `url(${background})` }}>
    //         <div className="hero-content text-center ">
    //             <div className='max-w-md lg:max-w-3xl text-center text-lg lg:text-4xl font-bold heading-font'>
    //                 {transitions(({ innerHeight, ...rest }, item) => (
    //                     <animated.div style={rest} onClick={reset}>
    //                         <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
    //                     </animated.div>
    //                 ))}
    //             </div>
    //         </div>
    //     </div>


  return (
    <section className="bg-white dark:bg-gray-900">

      <div className=" flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
              Easiest way to create your website
            </h1>

            <div className="mt-8 space-y-5">
              <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="mx-2">Clean and Simple Layout</span>
              </p>

              <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="mx-2">Just Copy Paste Codeing</span>
              </p>

              <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="mx-2">Easy to Use</span>
              </p>
            </div>
          </div>

          <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
            <form className="flex flex-col lg:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />

              <button
                type="button"
                className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
              >
                Join Us
              </button>
            </form>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
            src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="glasses photo"
          />
        </div>
      </div>
    </section>
    );
};

export default Banner;