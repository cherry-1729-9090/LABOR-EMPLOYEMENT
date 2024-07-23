import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const WorkStatusPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch work details using id (mock data)
  const workDetails = {
    1: { title: 'Ongoing Project', status: 'Ongoing', duration: '3 months', startDate: '2024-01-01', endDate: '2024-04-01', location: 'New York', amountEarned: '$2000' },
    2: { title: 'Completed Project', status: 'Completed', duration: '6 months', startDate: '2023-01-01', endDate: '2023-07-01', location: 'San Francisco', amountEarned: '$5000' },
  };

  const work = workDetails[id];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6 sm:px-10 lg:px-20 font-sans">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Work Status</h1>
      {work ? (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{work.title}</h2>
          <p className="text-lg text-gray-600 mb-2"><strong>Status:</strong> {work.status}</p>
          <p className="text-lg text-gray-600 mb-2"><strong>Duration:</strong> {work.duration}</p>
          <p className="text-lg text-gray-600 mb-2"><strong>Start Date:</strong> {work.startDate}</p>
          <p className="text-lg text-gray-600 mb-2"><strong>End Date:</strong> {work.endDate}</p>
          <p className="text-lg text-gray-600 mb-2"><strong>Location:</strong> {work.location}</p>
          <p className="text-lg text-gray-600 mb-2"><strong>Amount Earned:</strong> {work.amountEarned}</p>
        </div>
      ) : (
        <p className="text-lg text-gray-600 mt-4">No details available.</p>
      )}
      <button 
        onClick={() => navigate(-1)} 
        className="mt-8 bg-red-600 hover:bg-red-700 transition-colors text-lg font-semibold rounded-md shadow-lg px-4 py-2"
      >
        Back
      </button>
    </div>
  );
};

export default WorkStatusPage;
