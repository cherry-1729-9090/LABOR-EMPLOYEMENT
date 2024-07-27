import React, { useEffect,useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Button, Card, Space, Row, Col } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { getJobById } from '../../calls/jobCalls';

const { Title, Text } = Typography;

const WorkInformationPage = () => {
  const { id } = useParams();
  const [work,setWork] = useState(null);
  useEffect(()=>{
    getJobById(id).then(data=>{
      setWork(data);
    }).catch(error=>{
      console.error('Error fetching work by id:', error);
    })
  },[])



  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f2f5', padding: '20px' }}>
      <Row justify="center">
        <h1>Work Information</h1>
      </Row>
      {work ? (
        <Row justify="center">
          <Col xs={24} md={16} lg={12}>
            <Card title={work.title} bordered={false} style={{ borderRadius: '15px' }}>
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <Card bordered={false} style={{ backgroundColor: '#f0f2f5' }}>
                  <Text strong>Company:</Text>
                  <Text>{work.company}</Text>
                </Card>
                <Card bordered={false} style={{ backgroundColor: '#f0f2f5' }}>
                  <Text strong>Location:</Text>
                  <Text>{work.location}</Text>
                </Card>
                <Card bordered={false} style={{ backgroundColor: '#f0f2f5' }}>
                  <Text strong>Salary:</Text>
                  <Text>{work.salary}</Text>
                </Card>
                <Card bordered={false} style={{ backgroundColor: '#f0f2f5' }}>
                  <Text strong>Duration:</Text>
                  <Text>{work.duration}</Text>
                </Card>
                <Card bordered={false} style={{ backgroundColor: '#f0f2f5' }}>
                  <Text strong>Accommodation:</Text>
                  <Text>{work.accommodation}</Text>
                </Card>
              </Space>
              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <Link to="/labor/contract">
                  <Button type="primary" style={{ backgroundColor: '#D9534F', borderColor: '#D9534F' }}>
                    Apply
                  </Button>
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      ) : (
        <Row>
          <Text>No information available.</Text>
        </Row>
      )}
    </div>
  );
};

export default WorkInformationPage;
