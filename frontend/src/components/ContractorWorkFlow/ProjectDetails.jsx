import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Typography, Space, Spin, Row, Col } from 'antd';
import { useAppContext } from '../GlobalContext';
import { getJobById } from '../../calls/jobCalls';

const { Title, Text } = Typography;

const ProjectDetails = () => {
  const { projectId } = useAppContext();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectData = await getJobById(projectId);
        setProject(projectData);
      } catch (error) {
        console.error('Error fetching job:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f0f2f5', padding: '24px' }}>
        <Spin size="large" />
      </div>
    );
  }

  if (!project) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f0f2f5', padding: '24px' }}>
        <Card style={{ width: '100%', maxWidth: '600px', textAlign: 'center' }} bordered={false}>
          <Title level={2}>Project Not Found</Title>
          <Button 
            type="primary" 
            style={{ marginTop: '24px', width: '100%' }} 
            onClick={() => navigate('/project-list')}
          >
            Back to Projects
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f0f2f5', padding: '24px' }}>
      <Card style={{ width: '100%', maxWidth: '800px', borderRadius: '8px' }} bordered={false}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '24px' }}>{project.name}</Title>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Card style={{ borderRadius: '8px', backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                <Text strong>Job Type:</Text> {project.jobType}
              </Card>
            </Col>
            <Col span={12}>
              <Card style={{ borderRadius: '8px', backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                <Text strong>Location:</Text> {project.location}
              </Card>
            </Col>
            <Col span={12}>
              <Card style={{ borderRadius: '8px', backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                <Text strong>Pay Rate:</Text> ₹{project.payRate} per day
              </Card>
            </Col>
            <Col span={12}>
              <Card style={{ borderRadius: '8px', backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                <Text strong>Skills Required:</Text> {project.skillsRequired}
              </Card>
            </Col>
            <Col span={12}>
              <Card style={{ borderRadius: '8px', backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                <Text strong>Workers Required:</Text> {project.workersRequired}
              </Card>
            </Col>
            <Col span={12}>
              <Card style={{ borderRadius: '8px', backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                <Text strong>Accommodation Provided:</Text> {project.accomodation ? 'Yes' : 'No'}
              </Card>
            </Col>
            <Col span={12}>
              <Card style={{ borderRadius: '8px', backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                <Text strong>Transportation Provided:</Text> {project.transportation ? 'Yes' : 'No'}
              </Card>
            </Col>
            <Col span={12}>
              <Card style={{ borderRadius: '8px', backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                <Text strong>Start Date:</Text> {new Date(project.startDate).toLocaleDateString()}
              </Card>
            </Col>
            <Col span={12}>
              <Card style={{ borderRadius: '8px', backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                <Text strong>End Date:</Text> {new Date(project.endDate).toLocaleDateString()}
              </Card>
            </Col>
            <Col span={12}>
              <Card style={{ borderRadius: '8px', backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                <Text strong>Status:</Text> {project.status}
              </Card>
            </Col>
          </Row>
        </Space>
        <Button 
          type="primary" 
          style={{ marginTop: '24px', width: '100%' }} 
          onClick={() => navigate('/contractor/project-applications')}
        >
          View Employees
        </Button>
      </Card>
    </div>
  );
};

export default ProjectDetails;
