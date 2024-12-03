import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

// Import the icon image
import icon from "../../media/assets/logo.svg";

const Navbar = ({ onOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let dropdownTimeout; // Used for delay on hover out

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleDropdownOpen = () => {
    clearTimeout(dropdownTimeout); // Clear any closing timeout if user hovers back in
    setDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    dropdownTimeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); // Adjust the delay (in milliseconds) as needed
  };

  return (
    <nav className="border-gray-200 bg-white shadow">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={icon} alt="Logo" className="h-10 mr-3" />
          <span className="self-center text-lg font-semibold whitespace-nowrap">
            Mr Eloquence
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <svg
            className={`w-6 h-6 transform transition-transform ${
              menuOpen ? "rotate-90" : ""
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link to="/home" className="hover:text-blue-600 px-4 py-2 block">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600 px-4 py-2 block">
                About
              </Link>
            </li>
            {/* Services Dropdown */}
            <li
              className="relative group"
              onMouseEnter={handleDropdownOpen}
              onMouseLeave={handleDropdownClose}
              onClick={() => {
                if (window.innerWidth < 768) {
                  setDropdownOpen((prev) => !prev);
                }
              }}
            >
              <div className="flex items-center">
                <Link
                  to="/services"
                  className="hover:text-blue-600 px-4 py-2 block"
                >
                  Services
                </Link>
                <FaCaretDown className="ml-1" />
              </div>
              <ul
                className={`absolute left-0 mt-2 bg-white border rounded shadow-lg w-48 z-10 ${
                  dropdownOpen || "hidden"
                } group-hover:block`}
              >
                <li>
                  <Link
                    to="/internet"
                    className="hover:bg-gray-100 px-4 py-2 block"
                  >
                    Internet Package & VoIP
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hosting"
                    className="hover:bg-gray-100 px-4 py-2 block"
                  >
                    Hosting & Web Packages
                  </Link>
                </li>
                <li>
                  <Link
                    to="/specialized"
                    className="hover:bg-gray-100 px-4 py-2 block"
                  >
                    IoT
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-600 px-4 py-2 block"
              >
                Contact
              </Link>
            </li>
            <li>
              <button
                onClick={onOpen}
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
