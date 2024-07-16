import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProjectDetails = ({ projects }) => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects[projectId];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">{project.name}</h2>
        <div className="space-y-4">
          <div className="p-4 border border-gray-300 rounded-lg">
            <span className="font-medium text-gray-700">Work Progress:</span> {project.progress || 'Not started'}
          </div>
          <div className="p-4 border border-gray-300 rounded-lg">
            <span className="font-medium text-gray-700">Amount Spent:</span> {project.amountSpent || 'Not available'}
          </div>
          <div className="p-4 border border-gray-300 rounded-lg">
            <span className="font-medium text-gray-700">Deadline:</span> {project.deadline || 'No deadline'}
          </div>
        </div>
        <button 
          className="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          onClick={() => navigate('/project-applications')}
        >
          View Employees
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
