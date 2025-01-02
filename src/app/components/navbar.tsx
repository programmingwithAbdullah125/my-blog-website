import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-8">
        {/* Brand Logo and Name */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src="/tiktok logo.jpg" // Replace this with your image path
              alt="Brand Logo"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          {/* Brand Name */}
          <h1 className="text-2xl font-bold text-white">Programming with Abdullah</h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <a
              href="#"
              className="relative text-lg font-medium transition duration-500 hover:text-cyan-400 group"
            >
              Home
              <span
                className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-400 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 group-hover:w-full"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative text-lg font-medium transition duration-500 hover:text-cyan-400 group"
            >
              About
              <span
                className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-400 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 group-hover:w-full"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative text-lg font-medium transition duration-500 hover:text-cyan-400 group"
            >
              Skills
              <span
                className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-400 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 group-hover:w-full"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative text-lg font-medium transition duration-500 hover:text-cyan-400 group"
            >
              Projects
              <span
                className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-400 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 group-hover:w-full"
              ></span>
            </a>
          </li>
        </ul>

        {/* Sparkle Button */}
        <button className="hidden md:block relative px-8 py-2 text-lg font-semibold text-cyan-400 border-2 border-cyan-500 rounded-full overflow-hidden group hover:shadow-cyan-500/50 shadow-md transition-all duration-300">
          <span className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-10 blur-lg transition duration-500"></span>
          <span className="relative z-10">Hire Me</span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="absolute w-2 h-2 bg-white rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 ease-in-out blur-lg top-0 left-1/4"></span>
            <span className="absolute w-2 h-2 bg-white rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 ease-in-out blur-lg left-0 top-1/2"></span>
            <span className="absolute w-2 h-2 bg-white rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 ease-in-out blur-lg bottom-0 left-3/4"></span>
            <span className="absolute w-2 h-2 bg-white rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 ease-in-out blur-lg right-0 top-1/4"></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
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
      </div>
    </nav>
  );
};

export default Navbar;
