import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className="relative">
      <h1 className="text-xl font-bold ml-20 pt-11 mob:absolute mob:top-0 mob:left-0 mob:-ml-0 mob:pt-4 mob:z-30  mob:w-full mob:py-2 mob:px-5">
        COCO
      </h1>
      <nav className="flex items-center px-4 py-2 relative mx-28 mob:mx-0">
        <button
          className="mob:block md:hidden absolute top-4 right-4 text-2xl z-40"
          onClick={toggleNavbar}
        >
          <RxHamburgerMenu />
        </button>

        <div
          className={`flex flex-col md:flex-row md:items-center -mt-10 md:justify-between w-full md:relative ${
            navbarOpen ? 'block' : 'hidden md:flex'
          } mob:absolute mob:top-12 mob:left-0 mob:w-full mob:-mt-12  mob:bg-red-200 mob:py-16 mob:px-5 mob:text-white ${
            navbarOpen ? 'block' : 'hidden'
          }`}
        >
          <a href="#about" className="mob:text-2xl mob:mb-3 ml-10   hover:text-orange-600 mob:ml-0">
            About
          </a>
          <a href="#strategy" className="mob:text-2xl mob:mb-3 ml-10 hover:text-orange-600 mob:ml-0">
            Strategies
          </a>
          <a href="#team" className="mob:text-2xl mob:mb-3 ml-10 hover:text-orange-600 mob:ml-0">
            Team
          </a>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-2 md:mt-0 ml-auto mob:ml-0">
            Sign in
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
