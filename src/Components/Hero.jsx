// src/components/HeroSection.jsx

import React from 'react';

function Hero() {
  return (
    <section className="relative w-full h-screen bg-gray-800 flex items-center justify-center">
      {/* Background Image */}
      <img 
        src="src/assets/img.jpeg" 
        alt="Hero Image" 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      
      {/* Overlay for text */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg md:text-xl mb-8">We are glad to have you here. Explore our services and offerings.</p>
        <a 
          href="#learn-more" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}

export default Hero;
