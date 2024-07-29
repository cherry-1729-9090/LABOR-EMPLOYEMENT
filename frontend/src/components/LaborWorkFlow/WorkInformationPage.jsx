import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Card, Space, Row, Col } from 'antd';
import { useAppContext } from '../GlobalContext';
import { getJobById } from '../../calls/jobCalls';

const { Title, Text } = Typography;

const WorkInformationPage = () => {
  const { projectId } = useAppContext();
  const [work, setWork] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const job = await getJobById(projectId);
        console.log('job:', job);
        console.log(job.postedBy);
        setWork(job);
      } catch (error) {
        console.error('Error fetching job by id:', error);
      }
    };
    fetchJob();
  }, [projectId]);

  const handleApplyClick = () => {
    navigate('/labor/applying');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f2f5', padding: '20px' }}>
      <Row justify="center">
        <Title>Work Information</Title>
      </Row>
      {work ? (
        <Row justify="center">
          <Col xs={24} md={16} lg={12}>
            <Card title={work.name} bordered={false} style={{ borderRadius: '15px' }}>
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <Card bordered={false} style={{ backgroundColor: '#f0f2f5' }}>
                  <Text strong>Location:</Text>
                  <Text>{work.location}</Text>
                </Card>
                <Card bordered={false} style={{ backgroundColor: '#f0f2f5' }}>
                  <Text strong>Pay Rate:</Text>
                  <Text>{work.payRate}</Text>
                </Card>
                <Card bordered={false} style={{ backgroundColor: '#f0f2f5' }}>
                  <Text strong>Start Date:</Text>
                  <Text>{work.startDate}</Text>
                </Card>
                <Card bordered={false} style={{ backgroundColor: '#f0f2f5' }}>
                  <Text strong>End Date:</Text>
                  <Text>{work.endDate}</Text>
                </Card>
                <Card bordered={false} style={{ backgroundColor: '#f0f2f5' }}>
                  <Text strong>Skills Required:</Text>
                  <Text>{work.skillsRequired}</Text>
                </Card>
                {work.postedBy && work.postedBy.userId && (
                  <>
                    <Card bordered={false} style={{ backgroundColor: '#f0f2f5' }}>
                      <Text strong>Posted By:</Text>
                      <Text>{`${work.postedBy.userId.firstName} ${work.postedBy.userId.lastName}`}</Text>
                    </Card>
                    <Card bordered={false} style={{ backgroundColor: '#f0f2f5' }}>
                      <Text strong>Contact:</Text>
                      <Text>{work.postedBy.userId.mobileNumber}</Text>
                    </Card>
                    <Card bordered={false} style={{ backgroundColor: '#f0f2f5' }}>
                      <Text strong>Company:</Text>
                      <Text>{work.postedBy.companyName}</Text>
                    </Card>
                  </>
                )}
              </Space>
              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <Button type="primary" onClick={handleApplyClick} style={{ backgroundColor: '#D9534F', borderColor: '#D9534F' }}>
                  Apply
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      ) : (
        <Row justify="center">
          <Text>No information available.</Text>
        </Row>
      )}
    </div>
  );
};

export default WorkInformationPage;
