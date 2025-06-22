import React from 'react';
import RepositoryCard from './RepositoryCard';

const RepositoryGrid = ({ repositories, loading, error }) => {
  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;
  if (!repositories.length) return <p className="text-center py-10 text-gray-500">No repositories currently </p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {repositories.map(repo => <RepositoryCard key={repo.id} repo={repo} />)}
    </div>
  );
};

export default RepositoryGrid;