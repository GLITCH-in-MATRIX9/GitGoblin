import React from 'react';

const Pagination = ({ page, totalPages, onPrev, onNext }) => (
  <div className="flex justify-center items-center gap-6 py-6">
    <button onClick={onPrev} disabled={page === 1} className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 hover:bg-[#4630dd] hover:text-white">Previous</button>
    <span>Page {page} of {totalPages}</span>
    <button onClick={onNext} disabled={page === totalPages} className="px-4 py-2 bg-gray-300 hover:bg-[#4630dd] rounded disabled:opacity-50 hover:text-white">Next</button>
  </div>
);

export default Pagination;