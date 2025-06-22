import React from 'react';
import {
  FaMedium,
  FaLinkedin,
  FaBehance,
  FaGithub,
  FaGlobe,
} from 'react-icons/fa';

import bgImage from '../Assets/background.png'; 

const Footer = () => {
  return (
    <footer
      className="text-white py-16 px-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left - Logo and Contact */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">GitGoblin</h2>
          <p>Your GitHub companion</p>
          <a href="mailto:anjali95912@yahoo.com" className="underline">anjali95912@yahoo.com</a>
          <div className="flex gap-4 pt-4 text-xl">
            <a href="https://medium.com/@anjali95912" target="_blank" rel="noopener noreferrer">
              <FaMedium className="hover:text-[#7da6e4] cursor-pointer" />
            </a>
            
            <a href="https://www.linkedin.com/in/anjali-dass-002b5a31a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-[#7da6e4] cursor-pointer" />
            </a>
            <a href="https://www.behance.net/anjalidass" target="_blank" rel="noopener noreferrer">
              <FaBehance className="hover:text-[#7da6e4] cursor-pointer" />
            </a>

            <a href="https://github.com/GLITCH-in-MATRIX9" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-[#7da6e4] cursor-pointer" />
            </a>
          </div>

          
        </div>

        {/* Middle columns - Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/features" className="hover:underline">Features</a></li>
            <li><a href="/how-it-works" className="hover:underline">How It Works</a></li>
            <li><a href="/blog" className="hover:underline">My Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Creator</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:underline">About</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/terms" className="hover:underline">Terms of Use</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li>
              <a
                href="https://github.com/yourusername/gitgoblin" 
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-12 text-sm border-t border-gray-600 mt-12">
        <p className="text-gray-300">© 2025 GitGoblin. All rights reserved.</p>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <FaGlobe />
          <span>English</span>
        </div>
        <span>Made by: <a href="https://www.linkedin.com/in/anjalidass" target="_blank" rel="noopener noreferrer" className="hover:underline">Anjali Dass</a></span>
      </div>
    </footer>
  );
};

export default Footer;
