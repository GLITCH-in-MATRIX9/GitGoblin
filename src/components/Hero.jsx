import React from 'react';
import herobg from '../Assets/background.png'; // background image
import dashboardImg from '../Assets/dashboard.jpg'; // ✅ your dashboard image (replace with correct path and name)

const Hero = () => {
  return (
    <section
      className="relative px-6 sm:px-12 lg:px-20 py-20 text-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${herobg})`, backgroundSize: 'cover' }}
    >
      <div className="max-w-4xl mx-auto relative z-10 p-10 rounded-xl backdrop-blur-md">
        {/* Feature Badge */}
        <div className="inline-flex items-center px-4 py-1 mb-4 rounded-full text-sm font-medium text-[#000000] bg-[#d8d6ff] shadow-sm">
          Just deployed a new search upgrade
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-relaxed tracking-tight">
          Discover <span className="text-white">Top Repositories</span>,<br className="hidden sm:block" />
          Git Like a <span className="text-purple-600">Goblin</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-sm sm:text-xl text-gray-100">
          GitGoblin helps you explore GitHub like never before—search, filter, and find your perfect project match faster.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-[#4630dd] text-white px-6 py-3 rounded-lg text-sm font-medium shadow-md hover:bg-[#3d3289] transition">
            Try GitGoblin
          </button>
          <button className="border bg-white border-[#7da6e4] text-[#000000] px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#4630dd] hover:text-white transition">
            Try GitGoblin AI
          </button>
        </div>

        {/* Dashboard Image */}
        <div className="mt-10">
          <img
            src={dashboardImg}
            alt="Dashboard Preview"
            className="mx-auto w-full max-w-3xl rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
