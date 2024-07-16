import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectApplications = ({ applications }) => {
  const [currentApplications, setCurrentApplications] = useState(applications);
  const navigate = useNavigate();

  const rejectEmployee = (employeeId) => {
    const updatedApplications = currentApplications.filter((_, index) => index !== parseInt(employeeId));
    setCurrentApplications(updatedApplications);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Number of People Applied</h2>
        <div className="space-y-4">
          {currentApplications.map((application, index) => (
            <div 
              key={index} 
              className="p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition duration-300"
              onClick={() => navigate(`/employee-details/${index}`)}
            >
              <div className="font-medium text-gray-700">Employee {application.name}</div>
              <div className="text-gray-600">Ratings: {application.rating}</div>
            </div>
          ))}
        </div>
        <button 
          className="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          onClick={() => alert('Project Started')}
        >
          Start the Project
        </button>
      </div>
    </div>
  );
};

export default ProjectApplications;
