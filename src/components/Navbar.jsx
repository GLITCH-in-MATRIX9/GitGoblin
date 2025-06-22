import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="text-black py-4 px-6 md:px-10 flex justify-between items-center relative shadow-sm z-50 bg-white">
      {/* Left - Logo */}
      <div className="text-2xl font-bold flex items-center gap-2">
        <FaGithub className="text-black" size={28} />
        GitGoblin
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {/* Center - Links */}
      <div className="hidden md:flex space-x-6 text-base font-medium items-center">
        <Link to="/" className="hover:text-[#4630dd]">Home</Link>
        <Link to="/repositories" className="hover:text-[#4630dd]">Repositories</Link>
        <Link to="/GitGoblinAi" className="hover:text-[#4630dd]">GitGoblin AI</Link>
      </div>

      {/* Right - Button */}
      <div className="hidden md:flex">
        <a
          href="https://anjalidass.webflow.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-4 py-3 rounded-md text-sm hover:bg-gray-900 transition"
        >
          About Me
        </a>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)} className="py-2 text-base hover:text-[#4630dd]">Home</Link>
          <Link to="/repositories" onClick={() => setMenuOpen(false)} className="py-2 text-base hover:text-[#4630dd]">Repositories</Link>
          <Link to="/GitGoblinAi" onClick={() => setMenuOpen(false)} className="py-2 text-base hover:text-[#4630dd]">GitGoblin AI</Link>
          <a
            href="https://anjalidass.webflow.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-900 transition"
          >
            About Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
