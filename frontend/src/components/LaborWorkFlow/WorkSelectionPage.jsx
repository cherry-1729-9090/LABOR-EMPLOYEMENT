import React, { useState, useEffect } from 'react';
import { List, Button, Typography, Card, Row, Col } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { getJobs } from '../../calls/jobCalls';
import { useAppContext } from '../GlobalContext';

const { Title, Text } = Typography;

const WorkSelectionPage = () => {
  const [availableWorks, setAvailableWorks] = useState([]);
  const { setProjectId } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAvailableWorks = async () => {
      try {
        const jobs = await getJobs();
        setAvailableWorks(jobs);
      } catch (error) {
        console.error('Error fetching available works:', error);
      }
    };
    fetchAvailableWorks();
  }, []);

  const handleJobClick = (jobId) => {
    setProjectId(jobId);
    navigate('/labor/work-information');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f2f5', padding: '20px' }}>
      <Row justify="center" style={{ marginBottom: '20px' }}>
        <h1>Available Work Opportunities</h1>
      </Row>
      <Row justify="center" gutter={[16, 16]}>
        {availableWorks.map(work => (
          <Col key={work._id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              title={work.name}
              bordered={false}
              extra={<Button onClick={() => handleJobClick(work._id)}>More</Button>}
              style={{ backgroundColor: '#ffffff', borderRadius: '15px' }}
            >
              <Text strong>Job Type: {work.jobType}</Text>
              <br />
              <Text>Location: {work.location}</Text>
              <br />
              <Text>Pay Rate: {work.payRate}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default WorkSelectionPage;
