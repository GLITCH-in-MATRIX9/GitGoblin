import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DevBotPanel from '../components/ChatBotComponents/DevBotPanel';
import IssueCard from '../components/ChatBotComponents/IssueCard';
import { FaGithub } from 'react-icons/fa';
import backgroundImage from '../Assets/background.png';
import HowGitGoblinAIWorks from '../components/HowGitGoblinAIWorks'; 

const GitGoblinAi = () => {
  const { owner, name } = useLocation().state || {};
  const [allIssues, setAllIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const issuesPerPage = 9;

  useEffect(() => {
    if (!owner || !name) {
      setError('No repository selected.');
      setLoading(false);
      return;
    }

    const fetchAllIssues = async () => {
      setLoading(true);
      let fetched = [];
      let pageNumber = 1;

      try {
        while (true) {
          const res = await fetch(
            `https://api.github.com/repos/${owner}/${name}/issues?state=open&per_page=100&page=${pageNumber}`
          );
          const data = await res.json();
          if (!Array.isArray(data)) break;

          fetched = [...fetched, ...data.filter(issue => !issue.pull_request)];

          const link = res.headers.get('link') || '';
          if (!link.includes('rel="next"')) break;

          pageNumber++;
        }
        setAllIssues(fetched);
      } catch {
        setError('Failed to fetch issues.');
      } finally {
        setLoading(false);
      }
    };

    fetchAllIssues();
  }, [owner, name]);

  const totalPages = Math.ceil(allIssues.length / issuesPerPage);
  const currentIssues = allIssues.slice((page - 1) * issuesPerPage, page * issuesPerPage);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center py-6 text-white px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <header className="text-center mb-8 max-w-3xl">
        <FaGithub className="text-4xl mx-auto mb-2" />
        <h1 className="text-5xl md:text-6xl font-extrabold">Explore smarter.<br />Contribute better.</h1>
        <p className="mt-3 text-lg md:text-xl text-white/80">
          Scans repo <strong>{owner}/{name}</strong> for open issues.
        </p>
      </header>

      <section className="bg-white w-full max-w-6xl mx-auto rounded-3xl p-6">
        {loading && <p className="text-gray-700">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentIssues.map(issue => (
            <IssueCard key={issue.id} issue={issue} onAsk={() => setSelectedIssue(issue)} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-6 flex justify-center space-x-4">
            <button
              onClick={() => setPage(p => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 text-sm rounded bg-gray-200 hover:bg-[#4630dd] disabled:opacity-50"
            >
              Prev
            </button>
            <span className="self-center text-sm text-gray-600">Page {page} of {totalPages}</span>
            <button
              onClick={() => setPage(p => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="px-4 py-2 text-sm rounded bg-gray-200 hover:bg-[#4630dd] disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </section>

      {/* DevBot Panel (Conditional) */}
      {selectedIssue && (
        <DevBotPanel issue={selectedIssue} onClose={() => setSelectedIssue(null)} />
      )}

      {/* ⬇️ Added How It Works section for AI */}
      <HowGitGoblinAIWorks />
    </div>
  );
};

export default GitGoblinAi;
