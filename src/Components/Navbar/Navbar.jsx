import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">MyLogo</div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white hover:text-gray-200">
          Solution
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            About Us
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            Services
          </a>
         
        </div>
        {/* button */}
        <div>
            <button>button</button>
        </div>
      </div>

      {/* Mobile Menu (Collapsible) */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <a href="#" className="block text-white py-2 hover:bg-blue-500">
            Solution
          </a>
          <a href="#" className="block text-white py-2 hover:bg-blue-500">
            About us
          </a>
          <a href="#" className="block text-white py-2 hover:bg-blue-500">
            Services
          </a>
         
        </div>
      )}
    </nav>
  );
};

export default Navbar;