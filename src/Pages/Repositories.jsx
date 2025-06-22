// src/pages/Repositories.jsx
import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import Filters from '../components/Filters';
import RepositoryGrid from '../components/RepositoryGrid';
import Pagination from '../components/Pagination';

const API_URL = 'https://api.github.com/search/repositories';
const ITEMS_PER_PAGE = 21;

const Repositories = () => {
  const [repos, setRepos] = useState([]);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchRepos = async () => {
      if (!query && !filters) return setRepos([]);
      setLoading(true);
      try {
        const res = await fetch(`${API_URL}?q=${query} ${filters}&page=${page}&per_page=${ITEMS_PER_PAGE}`, {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        });
        const data = await res.json();
        setRepos(data.items || []);
        setTotalPages(Math.ceil(data.total_count / ITEMS_PER_PAGE));
        setError(null);
      } catch (err) {
        setError('Failed to load repositories');
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [query, filters, page]);

  return (
    <div className=" bg-wh">
      <Search onSearch={(q) => { setQuery(q); setPage(1); }} />
      <Filters onFilter={(f) => { setFilters(f); setPage(1); }} />
      <RepositoryGrid repositories={repos} loading={loading} error={error} />
      <Pagination
        page={page}
        totalPages={totalPages}
        onPrev={() => setPage((p) => Math.max(1, p - 1))}
        onNext={() => setPage((p) => p + 1)}
      />
    </div>
  );
};

export default Repositories;
