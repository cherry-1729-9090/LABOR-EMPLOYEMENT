import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EmployeeDetails = ({ applications, rejectEmployee }) => {
  const { employeeId } = useParams();
  const navigate = useNavigate();
  const employee = applications[employeeId];

  const handleReject = () => {
    rejectEmployee(employeeId);
    navigate('/project-applications'); // Navigate back to the applications list after rejection
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Applicant Name: {employee.name}</h2>
        <div className="space-y-4">
          <div className="p-4 border border-gray-300 rounded-lg">
            <span className="font-medium text-gray-700">Mobile Number:</span> {employee.mobile}
          </div>
          <div className="p-4 border border-gray-300 rounded-lg">
            <span className="font-medium text-gray-700">Location:</span> {employee.location}
          </div>
          <div className="p-4 border border-gray-300 rounded-lg">
            <span className="font-medium text-gray-700">Demanded Wage:</span> {employee.wage}
          </div>
          <div className="p-4 border border-gray-300 rounded-lg">
            <span className="font-medium text-gray-700">Specialization:</span> {employee.specialization}
          </div>
          <div className="p-4 border border-gray-300 rounded-lg">
            <span className="font-medium text-gray-700">Ratings:</span> {employee.rating}
          </div>
        </div>
        <button 
          className="mt-6 w-full py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-300"
          onClick={handleReject}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default EmployeeDetails;
