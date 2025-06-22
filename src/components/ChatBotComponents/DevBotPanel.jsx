import React, { useState, useEffect } from 'react';
import { fetchFromOpenRouter } from '../../utils/fetchFromOpenRouter';

const DevBotPanel = ({ issue, onClose }) => {
  const [userQuestion, setUserQuestion] = useState('How can I solve this?');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log("API key loaded:", !!process.env.REACT_APP_OPENROUTER_API_KEY);
  }, []);

  const handleAsk = async () => {
    setLoading(true);
    const reply = await fetchFromOpenRouter(userQuestion, issue);
    setResponse(reply);
    setLoading(false);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 
      ${isVisible ? 'bg-black/40 backdrop-blur-sm' : 'bg-transparent pointer-events-none'}`}
    >
      <div
        className={`transform transition-all duration-300 ease-in-out 
        ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} 
        bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl p-6 relative text-gray-800`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-gray-500 hover:text-red-500"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-3 text-[#6A5AE0]">GitGoblin Assistant</h2>
        <p className="text-sm mb-2">
          <strong>Issue:</strong> {issue.title}
        </p>

        <textarea
          value={userQuestion}
          onChange={(e) => setUserQuestion(e.target.value)}
          className="w-full h-24 rounded border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#B96EFF]"
        />

        <button
          onClick={handleAsk}
          className="mt-3 flex items-center justify-center gap-2 bg-gradient-to-r from-[#6A5AE0] to-[#B96EFF] text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-all"
        >
          {loading ? 'Thinking...' : 'Ask GitGoblin'}
        </button>

        {response && (
          <div className="mt-5 bg-gray-100 p-4 rounded border border-gray-300 max-h-[40vh] overflow-y-auto">
            <h3 className="font-semibold mb-2 text-[#6A5AE0]">GitGoblin says:</h3>
            <p className="text-sm whitespace-pre-line">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DevBotPanel;
