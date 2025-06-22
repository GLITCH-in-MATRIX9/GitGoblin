import React from 'react';
import { useNavigate } from 'react-router-dom';

const RepositoryCard = ({ repo }) => {
  const navigate = useNavigate();

  // 🔐 Defensive guard
  if (!repo || !repo.owner) return null;

  const handleScanClick = () => {
    navigate('/GitGoblinAi', {
      state: {
        owner: repo.owner.login,
        name: repo.name,
      },
    });
  };

  return (
    <div className="group w-full max-w-xs bg-white border border-gray-200 rounded-xl shadow-sm px-5 py-5 flex flex-col justify-between hover:bg-[#4630dd] hover:shadow-md transition duration-200">
      {/* Repo Name */}
      <h2 className="text-sm font-semibold text-gray-900 group-hover:text-white mb-1">
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </h2>

      {/* Visibility and Updated Info */}
      <p className="text-xs text-gray-400 group-hover:text-white mb-3">
        {repo.visibility || 'Public'} • Updated {new Date(repo.updated_at).toLocaleDateString()}
      </p>

      {/* Description */}
      <p className="text-xs text-gray-500 group-hover:text-white mb-4 line-clamp-3">
        {repo.description || 'No description available.'}
      </p>

      {/* Repo Meta */}
      <div className="flex items-center space-x-2 text-xs text-gray-500 group-hover:text-white mb-4">
        {repo.language && (
          <span className="bg-gray-200 group-hover:bg-white group-hover:text-[#4630dd] px-2 py-0.5 rounded">
            {repo.language}
          </span>
        )}
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
      </div>

      {/* Owner Info */}
      <div className="flex items-center mb-4">
        <img
          src={repo.owner.avatar_url}
          alt="Owner avatar"
          className="w-5 h-5 rounded-full mr-2"
        />
        <p className="text-sm text-gray-700 group-hover:text-white">
          {repo.owner?.login || 'GitHub User'}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full border border-gray-300 text-sm py-2 rounded text-gray-800 group-hover:text-white transition text-center"
        >
          Open in GitHub
        </a>

        <button
          onClick={handleScanClick}
          className="w-full bg-[#291b83] text-white text-sm py-2 rounded font-semibold hover:bg-[#291b83]/90 transition"
        >
          Scan with GitGoblin AI
        </button>
      </div>
    </div>
  );
};

export default RepositoryCard;
