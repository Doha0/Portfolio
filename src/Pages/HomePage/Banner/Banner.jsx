import React, { useState, useCallback, useRef, useEffect } from 'react'
import background from '../../../assets/mesh.png'
import { useTransition, animated } from '@react-spring/web'

const Banner = () => {

    const ref = useRef([]);
    const [items, set] = useState([]);
    const transitions = useTransition(items, {
        from: {
            opacity: 0,
            height: 0,
            innerHeight: 0,
            transform: 'perspective(600px) rotateX(0deg)',
            color: '#3D4073',
        },
        enter: [
            { opacity: 1, height: 80, innerHeight: 80 },
            { transform: 'perspective(600px) rotateX(270deg)', color: '#1D6373' },
            { transform: 'perspective(600px) rotateX(0deg)' },
        ],
        leave: [{ color: '#294861' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
        update: { color: '#034AA6' },
    })

    const reset = useCallback(() => {
        ref.current.forEach(clearTimeout)
        ref.current = []
        set([])
        ref.current.push(setTimeout(() => set(['Hi, I am Doha' ]), 1000))
        ref.current.push(setTimeout(() => set(['Hi, I am Doha', 'A Front-end Web Developer' ]), 5000))
        ref.current.push(setTimeout(() => set(['Hi, I am Doha', 'A Front-end Web Developer', 'I love the process of turning ideas into reality']), 8000))
    }, [])

    useEffect(() => {
        reset()
        return () => ref.current.forEach(clearTimeout)
    }, [])

    return (
        <div className='hero min-h-screen'
            style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-content text-center ">
                <div className='max-w-md lg:max-w-3xl text-center text-lg lg:text-4xl font-bold'>
                    {transitions(({ innerHeight, ...rest }, item) => (
                        <animated.div style={rest} onClick={reset}>
                            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
                        </animated.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;