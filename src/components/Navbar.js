import React from "react";
import './navbar.css'

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
     <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-yellow-300 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
          <div className="nav-head w-full relative flex justify-center ml-4 lg:w-auto lg:static lg:block lg:justify-start ">
            <a
              className=" text-2xl font-bold leading-relaxed  mr-4 py-2 whitespace-nowrap   text-red-600"
              href="#"
            >
              Rajasthan Stone Frames <br></br> 
            </a>
            <p className="justify-center items-center flex mr-3 text-red-600 font-semibold ">(Factory Outlet of Siddhivinayak Stones)</p>
          </div>
        </div>
      </nav>
    </>
  );
}
