import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import "../../css/components/navbar.css";
import "../../js/components/navbar.js";
// Import the logo image
import logo from "../../media/assets/logo.svg";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleServicesHover = (isOpen) => {
    setServicesOpen(isOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    // Navigation
    <header className="h-20 bg-white">
      <nav className="relative px-2 py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <img src={logo} alt="Website Logo" className="h-8" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => handleServicesHover(true)}
              onMouseLeave={() => handleServicesHover(false)}
            >
              <span className="mr-1">Services</span>
              <i className="fa-solid fa-chevron-down fa-2xs pt-3"></i>
              {servicesOpen && (
                <ul className="absolute bg-white p-3 w-52 top-6 transform scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
                  <li className="text-sm hover:bg-slate-100 leading-8">
                    <Link to="/consultation">Consultation</Link>
                  </li>
                  <li className="text-sm hover:bg-slate-100 leading-8">
                    <Link to="/internet">Internet</Link>
                  </li>
                  <li className="text-sm hover:bg-slate-100 leading-8">
                    <Link to="/hosting">Hosting</Link>
                  </li>
                  <li className="text-sm hover:bg-slate-100 leading-8">
                    <Link to="/partners">Partners</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Contact Button */}
          <Link
            to="/"
            className="bg-purple-400 px-5 py-1 rounded-3xl hover:bg-purple-500 text-white hidden md:flex"
          >
            Register
          </Link>

          {/* Mobile Menu Icon */}
          <button onClick={toggleMobileMenu} className="md:hidden">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="mobile-menu absolute top-20 w-full bg-gray-100 shadow-lg leading-9 font-bold h-screen"
          >
            <ul className="space-y-4">
              <li className="border-b-2 border-white hover:bg-purple-400 hover:text-white pl-4">
                <Link to="/" className="block pl-7">
                  Home
                </Link>
              </li>
              <li className="border-b-2 border-white hover:bg-purple-400 hover:text-white pl-4">
                <Link to="/about" className="block pl-7">
                  About
                </Link>
              </li>
              <li className="border-b-2 border-white hover:bg-purple-400 hover:text-white pl-4">
                <span className="block pl-7">
                  Services{" "}
                  <i className="fa-solid fa-chevron-down fa-2xs pt-4"></i>
                </span>
                <ul className="bg-white text-gray-800 w-full">
                  <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                    <Link to="/consultation" className="block pl-16">
                      Consultation
                    </Link>
                  </li>
                  <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                    <Link to="/internet" className="block pl-16">
                      Internet
                    </Link>
                  </li>
                  <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                    <Link to="/hosting" className="block pl-16">
                      Hosting
                    </Link>
                  </li>
                  <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                    <Link to="/partners" className="block pl-16">
                      Partners
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="border-b-2 border-white hover:bg-purple-400 hover:text-white pl-4">
                <Link to="/contact" className="block pl-7">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
