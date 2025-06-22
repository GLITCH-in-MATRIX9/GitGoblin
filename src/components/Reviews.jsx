import React from 'react';

const testimonials = [
  {
    name: 'Michael Roy',
    role: 'Open Source Contributor',
    date: 'Aug 31, 2024',
    time: '11:39',
    text: "GitGoblin has completely streamlined how I find beginner-friendly issues. Before GitGoblin, I'd spend hours scrolling through repositories looking for something I could work on. Now, within minutes, I get a curated list of tasks perfectly matched to my skills and interests. It’s like having a personal open-source mentor guiding my path.",
    avatar: 'https://i.pravatar.cc/100?img=1',
  },
  {
    name: 'Clara Sony',
    role: 'Frontend Developer',
    date: 'Aug 28, 2024',
    time: '06:02',
    text: "As someone who juggles a full-time job and open-source contributions, GitGoblin has been a blessing. I can filter by difficulty and quickly get actionable issues from active projects. The AI suggestions and clean UI remove the friction, helping me dive straight into coding instead of aimless searching.",
    avatar: 'https://i.pravatar.cc/100?img=2',
  },
  {
    name: 'Silvanna Chloe',
    role: 'Hacktoberfest Participant',
    date: 'Aug 28, 2024',
    time: '06:02',
    text: "Contributing to open source used to be intimidating. With GitGoblin, I found my first Hacktoberfest issues and even got merged PRs in the first week. The AI scanning and labels help me understand what each issue is about, and the beginner tag actually means beginner now!",
    avatar: 'https://i.pravatar.cc/100?img=3',
  },
  {
    name: 'David Crown',
    role: 'CS Undergrad',
    date: 'Aug 30, 2024',
    time: '10:25',
    text: "GitGoblin changed how I approach GitHub as a student. It breaks down complex issue threads into understandable insights, and the filters for 'easy', 'medium', and 'advanced' are a game-changer. I’ve recommended it to everyone in my college who’s starting with open source.",
    avatar: 'https://i.pravatar.cc/100?img=4',
  },
];

const Reviews = () => {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <span className="inline-block text-xs font-medium text-[#7da6e4] bg-[#eef2ff] px-4 py-1 rounded-full">
          Loved by Developers Around the Globe
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
          What Developers Are Saying
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {testimonials.map((review, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center mb-3">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold text-sm text-gray-900">{review.name}</p>
                <p className="text-xs text-gray-500">{review.role}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">{review.text}</p>
            <p className="text-xs text-gray-400">
              {review.time} • {review.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
