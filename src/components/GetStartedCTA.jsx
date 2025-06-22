import React from 'react';
import bgImage from '../Assets/background.png'; 

const GetStartedCTA = () => {
  return (
    <div className="w-full bg-white py-20 px-4 flex justify-center items-center">
      {/* Rounded CTA box with background image and overlay */}
      <div
        className="w-full max-w-5xl rounded-3xl text-white text-center relative overflow-hidden px-6 py-16 md:px-12 md:py-20 shadow-lg"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2b1f8f]/30 to-[#3c2bdf]/30 z-0 rounded-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-block px-4 py-1 mb-3 text-xs font-semibold text-[#c9d1ff] bg-white/10 border border-white/20 rounded-full">
            Start Your Contribution Journey with GitGoblin
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Get Started with GitGoblin Today
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base text-white/85 mb-6">
            Thousands of developers use GitGoblin to explore, analyze, and contribute to repositories. Whether you're just getting started or looking to scale your impact, GitGoblin helps you contribute smarter and faster.
          </p>

          {/* CTA Button */}
          <button className="px-6 py-2 md:px-8 md:py-3 bg-white text-[#2b1f8f] text-sm md:text-base font-semibold rounded-md hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStartedCTA;
