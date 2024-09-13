// src/App.jsx

import React from 'react';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Hero from './Components/Hero'; // Corrected the import path

const App = () => {
  return (
    <>
      <div className="bg-slate-900 flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow">
          <Hero /> {/* Ensure this is correctly imported */}
          {/* Your main content goes here */}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
