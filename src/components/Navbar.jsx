import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiClock, FiPhone, FiMail, FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header>
      {/* TOP WHITE BAR (scrolls away) */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
          
          {/* Logo */}
          <h1 className="text-3xl font-bold">
            <span className="text-red-600">Auto</span>
            <span className="text-blue-900">Wash</span>
          </h1>

          {/* Info Section */}
          <div className="flex flex-col lg:flex-row items-center gap-6 mt-4 lg:mt-0">

            {/* Opening Hours */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white">
                <FiClock size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Opening Hour</p>
                <p className="text-sm text-gray-600">Mon - Fri, 8:00 - 9:00</p>
              </div>
            </div>

            {/* Call Us */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white">
                <FiPhone size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Call Us</p>
                <p className="text-sm text-gray-600">+012 345 6789</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white">
                <FiMail size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Email Us</p>
                <p className="text-sm text-gray-600">info@example.com</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* MAIN NAVBAR (sticky) */}
      <nav className="bg-primary sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Links - Desktop */}
            <ul className="hidden lg:flex ml-20 items-center gap-10 text-white font-medium">
              <li><Link className="hover:text-red-500 transition" to="/">Home</Link></li>
              <li><Link className="hover:text-red-500 transition" to="/about">About</Link></li>
              <li><Link className="hover:text-red-500 transition" to="/service">Service</Link></li>
              <li><Link className="hover:text-red-500 transition" to="/price">Price</Link></li>
              <li><Link className="hover:text-red-500 transition" to="/points">Washing Points</Link></li>

              {/* Pages Dropdown */}
              <li className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 hover:text-red-500 transition"
                >
                  Pages <FiChevronDown size={18} />
                </button>

                {dropdownOpen && (
                  <ul className="absolute top-8 left-0 bg-white text-gray-800 w-40 shadow-lg rounded py-2">
                    <li><Link className="block px-4 py-2 hover:bg-red-300" to="/blog">Blog</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-red-300" to="/team">Team</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-red-300" to="/testimonial">Testimonials</Link></li>
                  </ul>
                )}
              </li>

              <li><Link className="hover:text-red-500 transition" to="/contact">Contact</Link></li>
            </ul>

            {/* Appointment Button (Desktop) */}
            <Link
              to="/appointment"
              className="hidden lg:inline-block bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-red-300 transition"
            >
              Get Appointment
            </Link>

            {/* Mobile Icon */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white text-3xl"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="lg:hidden text-white py-4 space-y-4">
              <li><Link to="/" className="block">Home</Link></li>
              <li><Link to="/about" className="block">About</Link></li>
              <li><Link to="/service" className="block">Service</Link></li>
              <li><Link to="/price" className="block">Price</Link></li>
              <li><Link to="/points" className="block">Washing Points</Link></li>

              <li className="pl-2">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2"
                >
                  Pages <FiChevronDown />
                </button>

                {dropdownOpen && (
                  <ul className="pl-6 mt-2 space-y-2">
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <li><Link to="/testimonial">Testimonials</Link></li>
                  </ul>
                )}
              </li>

              <li><Link to="/contact" className="block">Contact</Link></li>

              {/* Appointment Button (Mobile) */}
              <li>
                <Link
                  to="/appointment"
                  className="block bg-white text-black py-2 text-center rounded-full"
                >
                  Get Appointment
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>

    </header>
  );
};

export default Navbar;
