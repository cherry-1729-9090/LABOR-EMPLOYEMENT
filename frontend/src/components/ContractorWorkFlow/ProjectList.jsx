import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectList = ({ projects, updateProjectStatus }) => {
  const navigate = useNavigate();

  const handleStatusToggle = (index) => {
    const updatedProjects = [...projects];
    if (updatedProjects[index].status === 'In progress') {
      if (window.confirm('Are you sure you want to mark this project as completed?')) {
        updatedProjects[index].status = 'Completed';
        updateProjectStatus(updatedProjects);
      }
    } else if (updatedProjects[index].status === 'Completed') {
      if (window.confirm('Are you sure you want to mark this project as in progress?')) {
        updatedProjects[index].status = 'In progress';
        updateProjectStatus(updatedProjects);
      }
    }
  };

  const handleProjectClick = (index) => {
    if (projects[index].status === 'In progress') {
      navigate(`/project-details/${index}`);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="flex-1 p-4 overflow-auto">
        <h2 className="text-2xl font-bold text-center mb-4">Your Projects</h2>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
              <div
                className="text-lg font-semibold cursor-pointer hover:text-blue-600"
                onClick={() => handleProjectClick(index)}
              >
                {project.name}
              </div>
              <div
                className={`text-sm py-1 px-3 rounded-full ${project.status === 'In progress' ? 'bg-yellow-300 text-yellow-800' : 'bg-green-300 text-green-800'}`}
              >
                {project.status}
              </div>
              <button
                className={`py-2 px-4 rounded-lg shadow ${project.status === 'In progress' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-green-500 text-white hover:bg-green-600'}`}
                onClick={() => handleStatusToggle(index)}
              >
                {project.status === 'In progress' ? 'Mark as Completed' : 'Completed'}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 bg-white border-t border-gray-200">
        <button
          className="w-full bg-green-500 text-white py-3 rounded-lg shadow hover:bg-green-600"
          onClick={() => navigate('/add-project-step1')}
        >
          Add Project
        </button>
      </div>
    </div>
  );
};

export default ProjectList;
