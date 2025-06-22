import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const clearSearch = () => setSearchQuery('');

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center w-full py-10 bg-[#f1f4f9]"
    >
      <div className="flex items-center bg-white shadow-md rounded-lg px-4 py-3 w-full max-w-2xl">
        {/* Icon */}
        <FaSearch className="text-gray-400 mr-3" />

        {/* Input */}
        <input
          type="text"
          placeholder="Search repositories..."
          className="flex-grow outline-none text-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Clear Icon */}
        {searchQuery && (
          <FaTimes
            className="text-gray-400 ml-3 cursor-pointer"
            onClick={clearSearch}
          />
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="ml-4 bg-[#4630dd] hover:bg-blue-700 text-white font-medium text-sm px-5 py-2 rounded-sm shadow"
        >
          Find it now
        </button>
      </div>
    </form>
  );
};

export default Search;
