import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProjectStep1 = ({ setRole }) => {
  const [role, updateRole] = useState('');
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    updateRole(event.target.value);
  };

  const handleProceed = () => {
    if (role) {
      setRole(role);
      navigate('/add-project-step2');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 to-gray-900 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Select Role</h2>
        <label htmlFor="role-select" className="block text-lg font-medium text-gray-700 mb-4">Choose your role:</label>
        <select 
          id="role-select" 
          value={role} 
          onChange={handleRoleChange}
          className="w-full h-16 p-4 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <option value="">Select a role</option>
          <option value="Construction contractor">Construction contractor</option>
          <option value="Farmer">Farmer</option>
          <option value="Live Stock owner">Live Stock owner</option>
          <option value="Diary Farming">Diary Farming</option>
          <option value="Aqua Culture">Aqua Culture</option>
          <option value="Residential and Commercial">Residential and Commercial</option>
          <option value="Manufacturing industry">Manufacturing industry</option>
        </select>
        <button 
          className="w-full py-3 bg-blue-800 text-white rounded-lg shadow-md hover:bg-blue-900 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-300"
          onClick={handleProceed} 
          disabled={!role}
        >
          Proceed to Next
        </button>
      </div>
    </div>
  );
};

export default AddProjectStep1;
