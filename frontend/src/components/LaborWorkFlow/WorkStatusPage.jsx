import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const WorkStatusPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data for work details
  const workDetails = {
    1: { title: 'Completed Project 1', status: 'Completed', duration: '3 months', startDate: '2024-01-01', endDate: '2024-04-01', location: 'New York', amountEarned: '$2000' },
    2: { title: 'Completed Project 2', status: 'Completed', duration: '6 months', startDate: '2023-01-01', endDate: '2023-07-01', location: 'San Francisco', amountEarned: '$5000' },
    // Add other statuses if needed
  };

  // Fetch the work details using the id from the route parameters
  const work = workDetails[id];

  return (
    <div className="min-h-screen bg-red-50 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-10 font-sans">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-red-600 mb-6 sm:mb-8">
        Work Status
      </h1>
      {work ? (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md sm:max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">{work.title}</h2>
          <div className="space-y-2">
            <p className="text-lg text-gray-700"><strong>Status:</strong> {work.status}</p>
            <p className="text-lg text-gray-700"><strong>Duration:</strong> {work.duration}</p>
            <p className="text-lg text-gray-700"><strong>Start Date:</strong> {work.startDate}</p>
            <p className="text-lg text-gray-700"><strong>End Date:</strong> {work.endDate}</p>
            <p className="text-lg text-gray-700"><strong>Location:</strong> {work.location}</p>
            <p className="text-lg text-gray-700"><strong>Amount Earned:</strong> {work.amountEarned}</p>
          </div>
        </div>
      ) : (
        <p className="text-lg text-gray-700 mt-4">No details available.</p>
      )}
      <button 
        onClick={() => navigate(-1)} 
        className="mt-6 sm:mt-8 bg-red-600 hover:bg-red-700 transition-colors text-base sm:text-lg font-semibold rounded-md shadow-lg px-4 sm:px-6 py-2 sm:py-3 text-white"
      >
        Back
      </button>
    </div>
  );
};

export default WorkStatusPage;
