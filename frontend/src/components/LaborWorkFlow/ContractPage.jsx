// src/pages/WorkerContractPage.js
import React, { useState, useEffect } from 'react';
import { Button, Card, Form, Checkbox, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const WorkerContractPage = ({ jobId }) => {
  const [jobDetails, setJobDetails] = useState({});
  const [contractorDetails, setContractorDetails] = useState({});
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch job and contractor details
    axios.get(`/api/jobs/${jobId}`).then(response => {
      setJobDetails(response.data.job);
      setContractorDetails(response.data.contractor);
    }).catch(error => {
      message.error('Failed to fetch job details.');
    });
  }, [jobId]);

  const handleSubmit = () => {
    if (!agreed) {
      message.error('You must agree to the terms and conditions.');
      return;
    }

    // Submit agreement to backend
    axios.post(`/api/jobs/${jobId}/apply`, { agreed }).then(() => {
      message.success('Application submitted successfully.');
      navigate('/main-page');
    }).catch(error => {
      message.error('Failed to submit application.');
    });
  };

  return (
    <Card title="Contract Page" className="p-4">
      <h2>Job Details</h2>
      <p>{jobDetails.description}</p>
      <h2>Contractor Details</h2>
      <p>{contractorDetails.name}</p>
      <p>{contractorDetails.contact}</p>
      <Form>
        <Form.Item>
          <Checkbox onChange={(e) => setAgreed(e.target.checked)}>
            I agree to the terms and conditions
          </Checkbox>
        </Form.Item>
        <Button type="primary" onClick={handleSubmit}>Apply</Button>
      </Form>
    </Card>
  );
};

export default WorkerContractPage;
