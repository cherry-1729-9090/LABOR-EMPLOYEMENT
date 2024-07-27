import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import { updateJob } from '../../calls/jobCalls';
import { useAppContext } from '../GlobalContext';
import {getUserById} from '../../calls/userCalls';
import {getContractorById} from '../../calls/contractorCalls';

const AddProjectStep3 = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const { job, projectDetails } = location.state || {};
  const { contractorId } = useAppContext();
  const [ownerDetails, setOwnerDetails] = useState({
    name: '',
    mobile: '',
    company: ''
  });

  let user = null;
  useEffect(()=>{
    console.log('contractorId',contractorId);
    const contractor = getContractorById(contractorId);
    console.log('contractor',JSON.stringify(contractor));
    console.log('contractor.userId',contractor.userId);
    try{
      const contractor = getContractorById(contractorId);
      user = contractor.userId;
    }
    catch(error){
      console.error('Error fetching user:', error);
    }
  },[])

  const handleChange = (changedValues, allValues) => {
    setOwnerDetails(allValues);
  };

  const handleAddProject = async () => {
    try {
      const values = await form.validateFields();
      const updatedJobData = {
        ...job,
        postedBy:  contractorId, 
        name: values.name,
        mobile:  values.mobile,
        company: values.company
      };

      console.log('Updated job data:', updatedJobData);

      const updatedJob = await updateJob(job._id, updatedJobData);
      if (updatedJob) {
        message.success('Project added successfully!');
        navigate('/contractor/project-list');
      } else {
        message.error('Failed to add project. Please try again.');
      }
    } catch (error) {
      message.error('Failed to add project. Please try again.');
      console.error('Error adding project:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Owner Details</h2>
        <Form
          form={form}
          layout="vertical"
          initialValues={ownerDetails}
          onValuesChange={handleChange}
        >
          <Form.Item
            label="Owner Name"
            name="name"
            rules={[
              { required: true, message: 'Please enter owner name' },
              { pattern: /^[a-zA-Z\s]+$/, message: 'Name should only contain alphabetic characters.' }
            ]}
          >
            <Input placeholder="Owner name" />
          </Form.Item>
          <Form.Item
            label="Owner Mobile Number"
            name="mobile"
            rules={[
              { required: true, message: 'Please enter owner mobile number' },
              { pattern: /^\d{10}$/, message: 'Mobile number should be 10 digits long.' }
            ]}
          >
            <Input placeholder="Owner mobile number" />
          </Form.Item>
          <Form.Item
            label="Company (if any)"
            name="company"
          >
            <Input placeholder="Company (if any)" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              onClick={handleAddProject}
              block
            >
              Add Project
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddProjectStep3;