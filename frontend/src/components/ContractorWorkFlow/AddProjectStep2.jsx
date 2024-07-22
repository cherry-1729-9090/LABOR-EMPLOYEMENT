import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Select, Input, Button, Typography, message } from 'antd';
import { createJob } from '../../calls/jobCalls';

const { Title } = Typography;
const { Option } = Select;

const AddProject = () => {
  const [projectDetails, setDetails] = useState({
    jobType: '',
    name: '',
    location: '',
    workers: '',
    duration: '',
    payRate: '',
    completionTime: '',
    accommodation: '',
    transportation: '',
    timeline: '',
    images: []
  });

  const [errors, setErrors] = useState({
    workers: '',
    payRate: '',
    images: ''
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails({ ...projectDetails, [name]: value });

    // Validate the input fields
    if (name === 'workers' || name === 'payRate') {
      if (!/^\d+$/.test(value)) {
        setErrors((prev) => ({ ...prev, [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} should only contain numbers.` }));
      } else {
        setErrors((prev) => ({ ...prev, [name]: '' }));
      }
    }
  };

  const handleSelectChange = (name, value) => {
    setDetails({ ...projectDetails, [name]: value });
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

  const handleProceed = async () => {
    const allFieldsFilled = Object.values(projectDetails).every(field => field !== '' && field.length !== 0);
    const noErrors = Object.values(errors).every(error => error === '');

    if (allFieldsFilled && noErrors) {
      try {
        const jobData = {
          jobType: projectDetails.jobType,
          location: projectDetails.location,
          payRate: parseFloat(projectDetails.payRate),
          // postedBy will be set in the backend
          skillsRequired: projectDetails.name, // You might want to add a separate field for this
          // applicationDeadline will be set in AddProjectStep3
          // Add other fields as needed
        };

        const createdJob = await createJob(jobData);
        navigate('/add-project-step3', { state: { job: createdJob, projectDetails } });
      } catch (error) {
        message.error('Failed to create job. Please try again.');
        console.error('Error creating job:', error);
      }
    } else {
      message.warning('Please fill in all fields and upload at least one image.');
    }
  };

  // ... rest of the component (return statement) remains the same
};

export default AddProject;