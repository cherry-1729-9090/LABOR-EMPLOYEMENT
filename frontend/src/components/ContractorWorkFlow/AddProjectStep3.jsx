import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProjectStep3 = ({ addProject }) => {
  const [ownerDetails, setOwnerDetails] = useState({
    name: '',
    mobile: '',
    company: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    mobile: '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setOwnerDetails({ ...ownerDetails, [name]: value });

    // Validate the input fields
    if (name === 'name') {
      if (!/^[a-zA-Z\s]+$/.test(value)) {
        setErrors((prev) => ({ ...prev, name: 'Name should only contain alphabetic characters.' }));
      } else {
        setErrors((prev) => ({ ...prev, name: '' }));
      }
    }

    if (name === 'mobile') {
      if (!/^\d{10}$/.test(value)) {
        setErrors((prev) => ({ ...prev, mobile: 'Mobile number should be 10 digits long.' }));
      } else {
        setErrors((prev) => ({ ...prev, mobile: '' }));
      }
    }
  };

  const handleAddProject = () => {
    const allFieldsFilled = Object.values(ownerDetails).every(field => field);
    const noErrors = Object.values(errors).every(error => error === '');
    if (allFieldsFilled && noErrors) {
      addProject(ownerDetails);
      navigate('/');
    } else {
      alert('Please fill in all fields correctly.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Owner Details</h2>
        <div className="space-y-6">
          <div>
            <input 
              name="name" 
              placeholder="Owner name" 
              value={ownerDetails.name}
              onChange={handleChange} 
              className={`w-full p-4 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
          </div>
          <div>
            <input 
              name="mobile" 
              type="tel" 
              placeholder="Owner mobile number" 
              value={ownerDetails.mobile}
              onChange={handleChange} 
              className={`w-full p-4 border ${errors.mobile ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.mobile && <p className="text-red-500 text-sm mt-2">{errors.mobile}</p>}
          </div>
          <input 
            name="company" 
            placeholder="Company (if any)" 
            value={ownerDetails.company}
            onChange={handleChange} 
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={handleAddProject} 
            disabled={!Object.values(ownerDetails).every(field => field) || !Object.values(errors).every(error => error === '')}
            className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-300"
          >
            Add Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProjectStep3;
