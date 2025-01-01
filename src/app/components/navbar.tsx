import React from "react";
import SparkleButton from "./button";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          Your Logo
        </a>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6">
          <li>
            <a
              href="#"
              className="relative text-lg font-medium transition duration-500 hover:text-blue-400 group"
            >
              Home
              <span
                className="absolute bottom-0 left-0 w-0 h-1 bg-blue-400 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 group-hover:w-full"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative text-lg font-medium transition duration-500 hover:text-blue-400 group"
            >
              About
              <span
                className="absolute bottom-0 left-0 w-0 h-1 bg-blue-400 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 group-hover:w-full"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative text-lg font-medium transition duration-500 hover:text-blue-400 group"
            >
              Skills
              <span
                className="absolute bottom-0 left-0 w-0 h-1 bg-blue-400 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 group-hover:w-full"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative text-lg font-medium transition duration-500 hover:text-blue-400 group"
            >
              Projects
              <span
                className="absolute bottom-0 left-0 w-0 h-1 bg-blue-400 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 group-hover:w-full"
              ></span>
            </a>
          </li>
          {/* <li>
            <a
              href="#"
              className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Hire Me
            </a>
          </li> */}
      <SparkleButton/>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
