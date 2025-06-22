import React from 'react';
import { FaSearch, FaSlidersH, FaCodeBranch, FaRobot } from 'react-icons/fa';
import aiImage from '../Assets/ai-image.png'; // ⬅️ Replace with your image

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaSearch size={20} className="text-[#442eda]" />,
      title: 'Search Intelligently',
      description:
        'Begin with your desired tech stack or keyword, and GitGoblin fetches relevant open-source repositories instantly.',
    },
    {
      icon: <FaSlidersH size={20} className="text-[#442eda]" />,
      title: 'Filter Repositories',
      description:
        'Narrow down your search using filters like language, stars, forks, and activity to find exactly what fits your need.',
    },
    {
      icon: <FaCodeBranch size={20} className="text-[#442eda]" />,
      title: 'Explore & Contribute',
      description:
        'Discover project insights, dive into issues, and contribute — whether you’re a beginner or a seasoned dev.',
    },
    {
      icon: <FaRobot size={20} className="text-[#442eda]" />,
      title: 'AI Suggestions',
      description:
        'Let GitGoblin AI assist you in discovering trending, high-quality projects tailored to your skill level.',
    },
  ];

  return (
    <section className="bg-white py-20 px-6 sm:px-12 lg:px-20">
      {/* Feature Badge */}
      <div className="text-center">
        <span className="inline-block px-4 py-1 mb-4 rounded-full text-sm font-medium text-[#000] bg-[#d8d6ff] shadow-sm">
          Magic Behind the Scenes
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-12">
          How GitGoblin Works
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
        {/* Text Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Icon box */}
              <div className="bg-[#e5e6fb] rounded-md w-10 h-10 flex items-center justify-center shrink-0 mt-1">
                {step.icon}
              </div>
              <div>
                <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="w-full">
          <img
            src={aiImage}
            alt="How GitGoblin Works"
            className="w-full rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
