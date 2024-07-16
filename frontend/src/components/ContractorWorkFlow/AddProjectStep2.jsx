import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProjectStep2 = ({ setProjectDetails }) => {
  const [projectDetails, setDetails] = useState({
    name: '',
    location: '',
    workers: '',
    duration: '',
    payment: '',
    completionTime: '',
    accommodation: '',
    transportation: '',
    timeline: '',
    images: []
  });

  const [errors, setErrors] = useState({
    workers: '',
    payment: '',
    images: ''
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails({ ...projectDetails, [name]: value });

    // Validate the input fields
    if (name === 'workers' || name === 'payment') {
      if (!/^\d+$/.test(value)) {
        setErrors((prev) => ({ ...prev, [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} should only contain numbers.` }));
      } else {
        setErrors((prev) => ({ ...prev, [name]: '' }));
      }
    }
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const images = files.filter(file => file.type.startsWith('image/'));
    setDetails({ ...projectDetails, images });

    if (images.length === 0) {
      setErrors((prev) => ({ ...prev, images: 'Please upload at least one image.' }));
    } else {
      setErrors((prev) => ({ ...prev, images: '' }));
    }
  };

  const handleProceed = () => {
    const allFieldsFilled = projectDetails.name &&
                            projectDetails.location &&
                            projectDetails.workers &&
                            projectDetails.duration &&
                            projectDetails.payment &&
                            projectDetails.completionTime &&
                            projectDetails.accommodation &&
                            projectDetails.transportation &&
                            projectDetails.timeline &&
                            projectDetails.images.length > 0;
    const noErrors = Object.values(errors).every(error => error === '');

    if (allFieldsFilled && noErrors) {
      setProjectDetails(projectDetails);
      navigate('/add-project-step3');
    } else {
      alert('Please fill in all fields and upload at least one image.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Project Details</h2>
        <div className="space-y-6">
          <div>
            <input 
              name="name" 
              placeholder="Project name" 
              value={projectDetails.name}
              onChange={handleChange} 
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input 
              name="location" 
              placeholder="Project location" 
              value={projectDetails.location}
              onChange={handleChange} 
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input 
              name="workers" 
              type="number"
              placeholder="Number of estimated workers" 
              value={projectDetails.workers}
              onChange={handleChange} 
              className={`w-full p-4 border ${errors.workers ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.workers && <p className="text-red-500 text-sm mt-2">{errors.workers}</p>}
          </div>
          <div>
            <select 
              name="duration" 
              value={projectDetails.duration}
              onChange={handleChange} 
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select payment calculation duration</option>
              <option value="day">Day</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
            </select>
          </div>
          <div>
            <input 
              name="payment" 
              placeholder="Payment" 
              value={projectDetails.payment}
              onChange={handleChange} 
              className={`w-full p-4 border ${errors.payment ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.payment && <p className="text-red-500 text-sm mt-2">{errors.payment}</p>}
          </div>
          <div>
            <input 
              name="completionTime" 
              placeholder="Project completion time" 
              value={projectDetails.completionTime}
              onChange={handleChange} 
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input 
              name="accommodation" 
              placeholder="Accommodation (if any)" 
              value={projectDetails.accommodation}
              onChange={handleChange} 
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input 
              name="transportation" 
              placeholder="Transportation (if any)" 
              value={projectDetails.transportation}
              onChange={handleChange} 
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input 
              name="timeline" 
              placeholder="Project timeline" 
              value={projectDetails.timeline}
              onChange={handleChange} 
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input 
              type="file" 
              multiple 
              onChange={handleImageChange} 
              accept="image/*"
              className={`w-full p-4 border ${errors.images ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.images && <p className="text-red-500 text-sm mt-2">{errors.images}</p>}
          </div>
          <button 
            onClick={handleProceed} 
            disabled={!Object.values(projectDetails).every(field => field.length !== 0) || !Object.values(errors).every(error => error === '')}
            className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-300"
          >
            Proceed to Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProjectStep2;
