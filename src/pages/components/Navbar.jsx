import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/components/navbar.css"; // Ensure this path is correct

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  // const [isPopupVisible, setIsPopupVisible] = useState(false); // Add missing state

  const handleServicesHover = (isOpen) => {
    setServicesOpen(isOpen);
  };

  return (
    <header className="h-20 bg-white">
      <nav className="relative px-4 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/home">
            <img
              src="https://avrasys.hu/logoipsum-logo-54.svg" // Replace with your logo path
              alt="Logo"
              className="h-10"
            />
          </Link>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            {/* Services Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => handleServicesHover(true)}
              onMouseLeave={() => handleServicesHover(false)}
            >
              <span className="mr-1"><Link to="/services">Services </Link> </span> 
              <span className="inline-block ml-1">&#9660;</span>{" "}
              {/* Dropdown Arrow */}
              {/* Drop-down menu */}
              {servicesOpen && (
                <ul className="absolute bg-white p-3 w-52 top-6 left-0 transform scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
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

          {/* Mobile Menu Button */}
          <button id="mobile-icon" className="md:hidden">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-center mt-3 w-full">
        <div id="mobile-menu" className="mobile-menu absolute top-23 w-full">
          <ul className="bg-gray-100 shadow-lg leading-9 font-bold h-screen">
            <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
              <Link to="/" className="block pl-7">
                Home
              </Link>
            </li>
            <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
              <Link to="/news" className="block pl-7">
                News
              </Link>
            </li>
            <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
              <Link to="/about" className="block pl-7">
                About
              </Link>
            </li>
            <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
              <Link to="/contact" className="block pl-7">
                Contact
              </Link>
            </li>
            <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
              <span className="block pl-11">
                Services <span className="inline-block ml-1">&#9660;</span>
              </span>
              <ul className="bg-white text-gray-800 w-full">
                <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                  <Link to="/webdesign" className="block pl-16">
                    Webdesign
                  </Link>
                </li>
                <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                  <Link to="/digital-marketing" className="block pl-16">
                    Digital Marketing
                  </Link>
                </li>
                <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                  <Link to="/seo" className="block pl-16">
                    SEO
                  </Link>
                </li>
                <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                  <Link to="/ad-campaigns" className="block pl-16">
                    Ad Campaigns
                  </Link>
                </li>
                <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                  <Link to="/ux-design" className="block pl-16">
                    UX Design
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
