import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Projects/Projects";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <div className='mx-4 lg:mx-auto max-w-screen-lg'><AboutMe></AboutMe></div>
            },
            {
                path: "/contact",
                element: <div className='mx-4 lg:mx-auto max-w-screen-lg'><Contact></Contact></div>
            },
            {
                path: "/project",
                element: <div className='mx-4 lg:mx-auto max-w-screen-lg'><Projects></Projects></div>
            }
        ]
    },
]);