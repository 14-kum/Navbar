// src/components/Footer.jsx

import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Company Information */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold mb-1">Company Name</h2>
            <p className="text-sm">© {new Date().getFullYear()} Company Name. All rights reserved.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
