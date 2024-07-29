import React, { useState, useEffect } from 'react';
import { List, Button, Typography, Card, Avatar, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../GlobalContext';
import { getJobAssignmentsByWorkerId } from '../../calls/JobAssignmentCalls';

const { Title, Text } = Typography;

const AppliedPage = () => {
  const { workerId, setProjectId, setJobAssignmentId } = useAppContext();
  const [appliedWork, setAppliedWork] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppliedWork = async () => {
      try {
        const jobAssignments = await getJobAssignmentsByWorkerId(workerId);
        const applied = jobAssignments.filter(assignment => assignment.job.status === 'Open');
        setAppliedWork(applied);
      } catch (error) {
        console.error('Error fetching applied work:', error);
      }
    };

    if (workerId) {
      fetchAppliedWork();
    }
  }, [workerId]);

  const handleNavigation = (jobId, assignmentId) => {
    setJobAssignmentId(assignmentId);
    setProjectId(jobId);
    navigate(`/labor/work-status`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <Title level={2} className="text-red-600 mb-8">Applied Projects</Title>
      <Card bordered={false} className="w-full max-w-2xl bg-white shadow-lg rounded-lg">
        <List
          itemLayout="vertical"
          dataSource={appliedWork}
          renderItem={work => (
            <List.Item
              className="cursor-pointer hover:bg-gray-50 transition duration-300"
              onClick={() => handleNavigation(work.job._id, work._id)}
            >
              <List.Item.Meta
                title={<Title level={4}>{work.job.name}</Title>}
                description={
                  <Space direction="vertical">
                    <Text><strong>Job Type:</strong> {work.job.jobType}</Text>
                    <Text><strong>Location:</strong> {work.job.location}</Text>
                    <Text><strong>Pay Rate:</strong> ₹{work.job.payRate} per day</Text>
                    <Text><strong>Assignment Date:</strong> {new Date(work.assignmentDate).toLocaleDateString()}</Text>
                  </Space>
                }
              />
            </List.Item>
          )}
        />
      </Card>
      <Button 
        onClick={() => navigate(-1)} 
        className="mt-8 bg-red-600 hover:bg-red-700 transition-colors text-lg font-semibold rounded-md shadow-lg px-6 py-3 text-white"
      >
        Back
      </Button>
    </div>
  );
};

export default AppliedPage;
