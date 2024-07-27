import React, { useState, useEffect } from 'react';
import { List, Button, Typography, Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { getJobs } from '../../calls/jobCalls';
const { Title, Text } = Typography;

const WorkSelectionPage = () => {
  const [availableWorks, setAvailableWorks] = useState([]);

  useEffect(() => {
    // Simulated data fetch
    const fetchAvailableWorks = () => {
      getJobs()
        .then(works => {
          setAvailableWorks(works);
        })
        .catch(error => {
          console.error('Error fetching available works:', error);
        });
    };
    fetchAvailableWorks();
  }, []);



  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f2f5', padding: '20px' }}>
      <Row justify="center" style={{ marginBottom: '20px' }}>
        <h1>Available Work Opportunities</h1>
      </Row>
      <Row justify="center" gutter={[16, 16]}>
        {availableWorks.map(work => (
          <Col key={work.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              title={work.title}
              bordered={false}
              extra={<Link to={`/labor/work-information/${work.id}`}>More</Link>}
              style={{ backgroundColor: '#ffffff', borderRadius: '15px' }}
            >
              <Text strong>{work.company}</Text>
              <br />
              <Text>{work.salary}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default WorkSelectionPage;
