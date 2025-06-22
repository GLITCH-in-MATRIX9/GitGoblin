import { Link } from 'react-router-dom';
import React from 'react';
import { FaGithub } from 'react-icons/fa'; // GitHub icon

const Navbar = () => {
  return (
    <nav className="text-black py-4 px-8 flex justify-between items-center navbar">
      {/* Left - Logo */}
      <div className="text-2xl font-bold flex items-center gap-2">
        <FaGithub className="text-black" size={28} />
        GitGoblin
      </div>

      {/* Center - Links */}
      <div className="space-x-6 text-base font-medium flex items-center">
        <Link to="/" className="hover:text-[#4630dd]">Home</Link>
        <Link to="/repositories" className="hover:text-[#4630dd]">Repositories</Link>
        <Link to="/GitGoblinAi" className="hover:text-[#4630dd]">GitGoblin AI</Link>

      </div>

      {/* Right - Button */}
      <div>
        <a
          href="https://anjalidass.webflow.io/" // Replace this with your real link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-4 py-3 rounded-md text-sm hover:bg-gray-900 transition"
        >
          About Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
