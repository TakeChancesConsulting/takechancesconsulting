"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="navbar bg-white/80 backdrop-blur-md rounded-full shadow-lg shadow-gray-200/50 px-3 sm:px-6 lg:px-10 max-w-7xl w-full border border-gray-200 min-h-14 sm:min-h-16"
      >
        <div className="navbar-start">
          <a href="#" className="text-lg sm:text-xl lg:text-2xl font-playfair font-bold text-teal-600 whitespace-nowrap">
            Take Chances
          </a>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            <li>
              <a href="#" className="font-inter text-base text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-colors rounded-full">
                Home
              </a>
            </li>
            <li>
              <a href="#why-take-chances" className="font-inter text-base text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-colors rounded-full">
                Why Take Chances?
              </a>
            </li>
            <li>
              <a href="#what-i-do" className="font-inter text-base text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-colors rounded-full">
                What I do
              </a>
            </li>
            <li>
              <a href="#how-i-work" className="font-inter text-base text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-colors rounded-full">
                How I Work
              </a>
            </li>
            <li>
              <a href="#about-me" className="font-inter text-base text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-colors rounded-full">
                About Me
              </a>
            </li> 
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-sm sm:btn-md font-inter text-sm sm:text-base rounded-full bg-teal-600 hover:bg-teal-700 border-none text-white font-semibold hidden sm:flex"
          >
            Contact Me
          </motion.a>
          
          {/* Mobile menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm btn-circle text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white/95 backdrop-blur-md rounded-2xl z-[1] mt-3 w-52 p-3 shadow-lg border border-gray-200"
            >
              <li><a href="#" className="text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg">Home</a></li>
              <li><a href="#why-take-chances" className="text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg">Why Take Chances?</a></li>
              <li><a href="#what-i-do" className="text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg">What I do</a></li>
              <li><a href="#how-i-work" className="text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg">How I Work</a></li>
              <li><a href="#about-me" className="text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg">About Me</a></li>
              <li><a href="#contact" className="text-white bg-teal-600 hover:bg-teal-700 rounded-lg mt-2">Contact Me</a></li>
            </ul>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
