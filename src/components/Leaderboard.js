// src/components/Leaderboard.js
import React from 'react';

const Leaderboard = () => {
  const leaderboardData = [
    { id: 1, name: 'Alice', points: 95000 },
    { id: 2, name: 'Bob', points: 87000 },
    { id: 3, name: 'Charlie', points: 82000 },
    { id: 4, name: 'David', points: 79000 },
    { id: 5, name: 'Eve', points: 76000 },
    { id: 6, name: 'Frank', points: 74000 },
    { id: 7, name: 'Grace', points: 71000 },
    { id: 8, name: 'Heidi', points: 68000 },
    { id: 9, name: 'Ivan', points: 65000 },
    { id: 10, name: 'Judy', points: 62000 },
  ];

  const challenges = [
    { id: 1, company: 'Bloomberg', description: 'Reduce your paper usage by 30% this month.' },
    { id: 2, company: 'Capital One', description: 'Join the community cleanup this weekend!' },
    { id: 3, company: 'Google', description: 'Switch to energy-efficient appliances in your office.' },
    { id: 4, company: 'Apple', description: 'Participate in the digital recycling challenge.' },
    { id: 5, company: 'Tesla', description: 'Promote carpooling among employees for one week.' },
  ];

  return (
    <div className="container mx-auto p-5 bg-gray-200">
      <h1 className="text-3xl font-bold mb-5">Leaderboard</h1>
      <div className="bg-white shadow-lg rounded-lg p-5 mb-5">
        <h2 className="text-xl font-semibold">Top Users</h2>
        <ul className="mt-4">
          {leaderboardData.map(user => (
            <li key={user.id} className="flex justify-between border-b py-2">
              <span>{user.name}</span>
              <span>{user.points} Points</span>
            </li>
          ))}
        </ul>
      </div>

      <h1 className="text-3xl font-bold mb-5">Challenges</h1>
      <div className="bg-white shadow-lg rounded-lg p-5">
        {challenges.map(challenge => (
          <div key={challenge.id} className="border rounded-lg p-4 mb-3 cursor-pointer opacity-75 hover:opacity-100">
            <h3 className="font-semibold">{challenge.company}</h3>
            <p>{challenge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
