import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, List, Button, Typography, Alert } from 'antd';

const { Title, Text } = Typography;

const ProjectApplications = ({ applications = [] }) => {
  const [currentApplications, setCurrentApplications] = useState(applications);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentApplications(applications);
  }, [applications]);

  const rejectEmployee = (employeeId) => {
    const updatedApplications = currentApplications.filter((_, index) => index !== parseInt(employeeId));
    setCurrentApplications(updatedApplications);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <Card className="w-full max-w-2xl">
        <Title level={3} className="text-center">Number of People Applied</Title>
        <div className="space-y-4">
          {currentApplications.length > 0 ? (
            <List
              itemLayout="vertical"
              dataSource={currentApplications}
              renderItem={(application, index) => (
                <List.Item
                  key={index}
                  onClick={() => navigate(`/employee-details/${index}`)}
                  className="cursor-pointer hover:bg-gray-50 transition duration-300"
                >
                  <List.Item.Meta
                    title={<Text strong>Employee {application.name}</Text>}
                    description={<Text>Ratings: {application.rating}</Text>}
                  />
                </List.Item>
              )}
            />
          ) : (
            <Alert message="No applications available" type="info" showIcon />
          )}
        </div>
        <Button 
          type="primary" 
          className="mt-6 w-full"
          onClick={() => alert('Project Started')}
        >
          Start the Project
        </Button>
      </Card>
    </div>
  );
};

export default ProjectApplications;
