import React, { useState, useEffect } from 'react';
import { Input, Button, Card, List, Modal } from 'antd';

const JobListings = ({ onApply }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch job listings from API (mock data here)
    fetchJobs();
  }, []);

  const fetchJobs = () => {
    // Replace with actual API call
    setJobs([
      { id: 1, title: 'Contractor Job 1', salary: 5000, duration: '3 months', status: 'Open', details: { startDate: '2023-07-01', endDate: '2023-10-01', companyName: 'Company A' }},
      { id: 2, title: 'Hirer Job 2', salary: 6000, duration: '6 months', status: 'Open', details: { startDate: '2023-08-01', endDate: '2024-01-01', companyName: 'Company B' }},
    ]);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Available Jobs</h2>
      <List
        bordered
        dataSource={jobs}
        renderItem={job => (
          <List.Item>
            <div>
              <h3>{job.title}</h3>
              <p>Salary: {job.salary}</p>
              <p>Duration: {job.duration}</p>
              <Button onClick={() => onApply(job)}>Apply</Button>
              <Button onClick={() => Modal.info({ title: job.title, content: <JobDetails details={job.details} /> })}>View Details</Button>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

const JobDetails = ({ details }) => (
  <div>
    <p>Start Date: {details.startDate}</p>
    <p>End Date: {details.endDate}</p>
    <p>Company Name: {details.companyName}</p>
  </div>
);

const MainPage = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  
  const applyForJob = (job) => {
    setAppliedJobs([...appliedJobs, { ...job, status: 'Pending' }]);
    message.success(`Applied for ${job.title}`);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-lg space-y-4">
      <JobListings onApply={applyForJob} />
      
      <h2 className="text-xl font-semibold mt-6 mb-4">Applied Jobs</h2>
      <List
        bordered
        dataSource={appliedJobs}
        renderItem={job => (
          <List.Item>
            <div>
              <h3>{job.title}</h3>
              <p>Status: {job.status}</p>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default MainPage;
