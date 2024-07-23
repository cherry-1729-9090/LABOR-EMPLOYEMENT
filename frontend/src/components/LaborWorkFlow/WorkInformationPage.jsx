import React from 'react';
import { useParams, Link } from 'react-router-dom';

const WorkInformationPage = () => {
  const { id } = useParams();

  // Fetch work information based on id (mock data)
  const workInfo = {
    3: { title: 'Software Engineer', company: 'Tech Co', location: 'New York', salary: '$5000/month', duration: '1 year', accommodation: 'Provided' },
    4: { title: 'Project Manager', company: 'Business Inc', location: 'San Francisco', salary: '$6000/month', duration: '1 year', accommodation: 'Not Provided' },
    6: { title: 'HR Manager', company: 'People Inc', salary: '$6000/month' },
    7: { title: 'Sales Executive', company: 'Sales Force', salary: '$3500/month' },
    8: { title: 'Content Writer', company: 'Content Creators', salary: '$3000/month' },
    9: { title: 'Business Analyst', company: 'Analysis Group', salary: '$6500/month' }
  };

  const work = workInfo[id];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6 sm:px-10 lg:px-20 font-sans">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Work Information</h1>
      {work ? (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{work.title}</h2>
          <p className="text-lg text-gray-600 mb-2"><strong>Company:</strong> {work.company}</p>
          <p className="text-lg text-gray-600 mb-2"><strong>Location:</strong> {work.location}</p>
          <p className="text-lg text-gray-600 mb-2"><strong>Salary:</strong> {work.salary}</p>
          <p className="text-lg text-gray-600 mb-2"><strong>Duration:</strong> {work.duration}</p>
          <p className="text-lg text-gray-600 mb-4"><strong>Accommodation:</strong> {work.accommodation}</p>
          <Link to="/contract">
            <button className="bg-red-600 hover:bg-red-700 transition-colors text-lg font-semibold rounded-md shadow-lg px-4 py-2">
              Apply
            </button>
          </Link>
        </div>
      ) : (
        <p className="text-lg text-gray-600 mt-4">No information available.</p>
      )}
      <Link to="/work-selection">
        <button className="mt-4 bg-gray-300 hover:bg-gray-400 transition-colors text-lg font-semibold rounded-md shadow-lg px-4 py-2">
          Back
        </button>
      </Link>
    </div>
  );
};

export default WorkInformationPage;
