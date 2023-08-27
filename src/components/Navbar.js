import React from "react";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
          <div className="w-full relative flex justify-center ml-4 lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-base font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#"
            >
              Rajasthan Marble Frames
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
