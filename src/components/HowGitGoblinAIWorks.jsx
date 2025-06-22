import React from 'react';
import { FaGithub, FaBug, FaCommentDots, FaRobot } from 'react-icons/fa';
import aiPanelImage from '../Assets/ai-image.png'; // ⬅️ Replace with your actual image

const HowGitGoblinAIWorks = () => {
  const steps = [
    {
      icon: <FaGithub size={20} className="text-[#442eda]" />,
      title: 'Fetch GitHub Issues',
      description:
        'GitGoblin AI starts by scanning real-time issues from your selected repository using GitHub’s API.',
    },
    {
      icon: <FaBug size={20} className="text-[#442eda]" />,
      title: 'Select an Issue',
      description:
        'Click on any issue that you find interesting or confusing — GitGoblin AI will open up a smart panel.',
    },
    {
      icon: <FaCommentDots size={20} className="text-[#442eda]" />,
      title: 'Ask a Question',
      description:
        'Type your query like “How to solve this?” and GitGoblin AI will analyze the issue and respond contextually.',
    },
    {
      icon: <FaRobot size={20} className="text-[#442eda]" />,
      title: 'AI-Powered Help',
      description:
        'Our bot uses LLMs to give helpful suggestions, explanations, and steps to solve the issue efficiently.',
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20">
      {/* Section Title */}
      <div className="text-center">
        <span className="inline-block px-4 py-1 mb-4 rounded-full text-sm font-medium text-[#000] bg-[#d8d6ff] shadow-sm">
          Powered by AI
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-12">
          How GitGoblin AI Helps You
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
        {/* Steps */}
        <div className="grid sm:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-[#e5e6fb] rounded-md w-10 h-10 flex items-center justify-center shrink-0 mt-1">
                {step.icon}
              </div>
              <div>
                <h3 className="text-md sm:text-lg font-semibold text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-200 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Panel Preview */}
        <div className="w-full">
          <img
            src={aiPanelImage}
            alt="GitGoblin AI Panel Preview"
            className="w-full rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HowGitGoblinAIWorks;
