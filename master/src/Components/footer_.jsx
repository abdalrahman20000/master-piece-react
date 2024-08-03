import React from 'react';
import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram } from 'lucide-react';

import logo from "../images/logo.png"

const Footer = () => {

  return (
    <footer className="bg-blue-900 text-white p-4">
      <div className="w-full mx-2 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0  bg-[#ffffff] rounded-full p-[2px]">
         <Link to="/"> <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" /></Link>
        </div>
        <nav className="flex space-x-4 mb-4 md:mb-0">
          <Link to="/" className="hover:text-blue-300 transition">Home</Link>
          <Link to="/sessions" className="hover:text-blue-300 transition">sessions</Link>
          <Link to="/subscription" className="hover:text-blue-300 transition">subscription</Link>
          <Link to="/contact" className="hover:text-blue-300 transition">contact</Link>
        </nav>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-300 transition"><Facebook size={20} /></a>
          <a href="#" className="hover:text-blue-300 transition"><Twitter size={20} /></a>
          <a href="#" className="hover:text-blue-300 transition"><Instagram size={20} /></a>
        </div>
      </div>
      <div className="text-center mt-4 text-sm text-blue-300">
        © 2024 | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;