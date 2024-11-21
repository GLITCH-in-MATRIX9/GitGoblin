import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white py-4 px-8 flex justify-between items-center navbar">
      <div className="text-2xl font-bold">GitGoblin</div>
      <div className="space-x-4">
        <a href="#home" className="hover:text-blue-400">Home</a>
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="https://www.linkedin.com/in/anjali-dass-002b5a31a/" className="hover:text-blue-400">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
