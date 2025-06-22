import React from 'react';

const IssueCard = ({ issue, onAsk }) => {
    return (
        <div className="flex flex-col bg-white border border-gray-200 rounded-xl p-4 shadow hover:shadow-md transition-all justify-between">
            <h2 className="font-semibold text-lg text-gray-800 mb-2">{issue.title}</h2>
            <p className="text-gray-600 text-sm">
                {issue.body ? issue.body.slice(0, 100) + '...' : 'No description provided.'}
            </p>

            {/* Ask GitGoblin Button */}
            <button
                onClick={onAsk}
                className="mt-3 flex items-center justify-center gap-2 px-4 py-2 rounded-sm text-white font-medium shadow-md transition-all bg-gradient-to-r from-[#6A5AE0] to-[#B96EFF] hover:opacity-90"
            >
                <span className="bg-white text-[#6A5AE0] font-bold px-2 py-1 rounded-sm text-xs">AI</span>
                Ask GitGoblin
            </button>

            {/* See Complete Issue Button */}
            <a
                href={issue.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm text-blue-600 hover:underline self-start"
            >
                See Complete Issue →
            </a>
        </div>
    );
};

export default IssueCard;
