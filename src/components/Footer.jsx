import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="flex justify-center items-center">
        <p className="text-sm">
          Made with <span className="text-red-500">❤️</span> by{' '}
          <a
            href="https://www.linkedin.com/in/anjali-dass-002b5a31a/" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300"
          >
            Anjali Dass
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

