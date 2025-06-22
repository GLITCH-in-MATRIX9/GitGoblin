import React, { useState } from 'react';

const Filters = ({ onFilter }) => {
  const [language, setLanguage] = useState('');
  const [sort, setSort] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const applyFilters = () => {
    const filters = [];
    if (language) filters.push(`language:${language}`);
    if (sort) filters.push(`sort:${sort}`);
    if (difficulty) filters.push(`difficulty:${difficulty}`);
    onFilter(filters.join(' '));
  };

  const clearFilters = () => {
    setLanguage('');
    setSort('');
    setDifficulty('');
    onFilter('');
  };

  return (
    <div className="bg-[#f1f4f9] px-6 py-4 shadow-md rounded-md flex flex-wrap items-center gap-4 justify-between">
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-600 mb-1">Sort by:</label>
        <select
          className="px-4 py-2 rounded border border-gray-300 w-40"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Relevance</option>
          <option value="stars">Stars</option>
          <option value="forks">Forks</option>
          <option value="updated">Recently Updated</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-600 mb-1">Language:</label>
        <input
          type="text"
          placeholder="e.g. JavaScript"
          className="px-4 py-2 rounded border border-gray-300 w-40"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-600 mb-1">Difficulty:</label>
        <select
          className="px-4 py-2 rounded border border-gray-300 w-40"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={applyFilters}
          className="bg-[#6554d3] text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          Apply
        </button>
        <button
          onClick={clearFilters}
          className="text-sm text-gray-600 hover:underline"
        >
          Clear all
        </button>
      </div>
    </div>
  );
};

export default Filters;
