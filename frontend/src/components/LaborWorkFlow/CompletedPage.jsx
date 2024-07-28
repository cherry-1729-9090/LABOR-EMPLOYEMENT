import React, { useState, useEffect } from 'react';
import { List, Button, Typography, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../GlobalContext';
import { getJobAssignmentsByWorkerId } from '../../calls/JobAssignmentCalls';

const { Title, Text } = Typography;

const CompletedPage = () => {
  const { workerId,setProjectId,setJobAssignmentId } = useAppContext();
  const [completedWork, setCompletedWork] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompletedWork = async () => {
      try {
        const jobAssignments = await getJobAssignmentsByWorkerId(workerId);
        const completed = jobAssignments.filter(assignment => assignment.job.status === 'Completed');
        setCompletedWork(completed);
      } catch (error) {
        console.error('Error fetching completed work:', error);
      }
    };

    if (workerId) {
      fetchCompletedWork();
    }
  }, [workerId]);

  const handleNavigation = (jobId,assignmentId) => {
    setJobAssignmentId(assignmentId);
    setProjectId(jobId);
    navigate(`/labor/work-status`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6 sm:px-10 lg:px-20 font-sans">
      <Title level={2} className="text-red-600 mb-8">Completed Projects</Title>
      <Card bordered={false} className="w-full max-w-3xl bg-white shadow-md rounded-lg">
        <List
          bordered
          dataSource={completedWork}
          renderItem={work => (
            <List.Item
              className="border-b py-4 px-6 last:border-b-0 mb-4"
              onClick={() => handleNavigation(work.job._id,work._id)}
            >
              <Title level={4}>{work.job.name}</Title>
              <Text><strong>Job Type:</strong> {work.job.jobType}</Text><br />
              <Text><strong>Location:</strong> {work.job.location}</Text><br />
              <Text><strong>Pay Rate:</strong> {work.job.payRate}</Text><br />
              <Text><strong>Assignment Date:</strong> {work.assignmentDate}</Text>
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

export default CompletedPage;
