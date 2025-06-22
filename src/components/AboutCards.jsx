import React from 'react';
import {
  FaSearch,
  FaFilter,
  FaGithub,
  FaMagic,
  FaCodeBranch,
  FaFireAlt,
} from 'react-icons/fa';

const AboutCards = () => {
  const features = [
    {
      icon: <FaSearch size={20} className="text-[#4630d8]" />,
      title: 'Powerful Search',
      desc: 'Quickly locate quality repositories using intuitive keyword search powered by the GitHub API.',
    },
    {
      icon: <FaFilter size={20} className="text-[#4630d8]" />,
      title: 'Advanced Filters',
      desc: 'Sort by language, stars, forks and more to drill down exactly what you need in seconds.',
    },
    {
      icon: <FaGithub size={20} className="text-[#4630d8]" />,
      title: 'GitHub Integrated',
      desc: 'Seamlessly interact with GitHub repositories — view stars, forks, contributors, and activity.',
    },
    {
      icon: <FaCodeBranch size={20} className="text-[#4630d8]" />,
      title: 'Beginner Friendly',
      desc: 'New to open source? GitGoblin highlights beginner-friendly repositories to help you contribute.',
    },
    {
      icon: <FaFireAlt size={20} className="text-[#4630d8]" />,
      title: 'Trending Repos',
      desc: 'Discover what’s hot on GitHub right now with trending repositories tailored to your interests.',
    },
    {
      icon: <FaMagic size={20} className="text-[#4630d8]" />,
      title: 'AI Assistance',
      desc: 'With GitGoblin AI, get suggestions for repositories based on your coding interests and history.',
    },
  ];

  return (
    <section className="py-16 bg-white px-6 sm:px-12 lg:px-24">
      {/* Badge and Heading */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-4 py-1 mb-4 rounded-full text-sm font-medium text-[#000000] bg-[#d8d6ff] shadow-sm">
          Why GitGoblin is Your Perfect Companion
        </div>
        <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">
          Explore Smarter. Contribute Better.
        </h2>
        <p className="mt-4 text-gray-600 text-md max-w-xl mx-auto">
          GitGoblin empowers developers with smart search, intuitive filters, and contribution-ready suggestions — all in one interface.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {features.map((card, index) => (
          <div
            key={index}
            className="group bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl hover:bg-[#8397fa] transition duration-300 ease-in flex flex-col justify-between"
          >
            <div className="flex items-start gap-4">
              {/* Icon in square box */}
              <div className="bg-[#e5e5ff] group-hover:bg-white p-3 rounded-md">
                {card.icon}
              </div>

              {/* Text content */}
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-white">{card.desc}</p>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="mt-6 text-left">
              <button className="mt-4 px-4 py-2 bg-transparent border border-[#4630d8] text-[#4630d8] group-hover:text-white group-hover:border-white rounded-md text-sm transition cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutCards;
