import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Dropdown, Menu, Card, List, Typography, Row, Col } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import {useAppContext} from '../GlobalContext';


const { Title, Text } = Typography;

const MainPage = () => {
  const [currentWork, setCurrentWork] = useState([]);
  const [appliedWork, setAppliedWork] = useState([]);
  const [completedWork, setCompletedWork] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate
  const {userId} = useAppContext(); // Get userId from GlobalContext

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    
  };

  const handleMenuClick = ({ key }) => {
    if (key === 'login') {
      navigate('/labor/employee');
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="login">
        Login Details
      </Menu.Item>
    </Menu>
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f2f5', padding: '20px' }}>
      <Row justify="end">
        <Dropdown overlay={menu} placement="bottomRight">
          <Button shape="circle" icon={<SettingOutlined style={{ fontSize: '24px' }} />} />
        </Dropdown>
      </Row>
      <Title level={1} style={{ textAlign: 'center', color: '#D9534F', margin: '20px 0' }}>Your Projects</Title>
      
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={12} lg={8}>
          <Card
            title={ 
              <Row justify="space-between">
                <Link to="/labor/ongoing" style={{ color: '#D9534F' }}>
                  Ongoing Project
                </Link>
                <Text>({currentWork.length})</Text>
              </Row>
            }
            bordered={false}
            style={{ backgroundColor: '#ffffff', borderRadius: '15px' }}
          >
            <List
              dataSource={currentWork}
              renderItem={work => (
                <List.Item key={work.id}>
                  {work.title} - {work.date}
                </List.Item>
              )}
            />
          </Card>
        </Col>
        
        <Col xs={24} md={12} lg={8}>
          <Card
            title={
              <Row justify="space-between">
                <Link to="/labor/applied" style={{ color: '#D9534F' }}>
                  Applied Projects
                </Link>
                <Text>({appliedWork.length})</Text>
              </Row>
            }
            bordered={false}
            style={{ backgroundColor: '#ffffff', borderRadius: '15px' }}
          >
            <List
              dataSource={appliedWork}
              renderItem={work => (
                <List.Item key={work.id}>
                  {work.title} - {work.date}
                </List.Item>
              )}
            />
          </Card>
        </Col>
        
        <Col xs={24} md={12} lg={8}>
          <Card
            title={
              <Row justify="space-between">
                <Link to="/labor/completed" style={{ color: '#D9534F' }}>
                  Completed Projects
                </Link>
                <Text>({completedWork.length})</Text>
              </Row>
            }
            bordered={false}
            style={{ backgroundColor: '#ffffff', borderRadius: '15px' }}
          >
            <List
              dataSource={completedWork}
              renderItem={work => (
                <List.Item key={work.id}>
                  {work.title} - {work.date}
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: '20px' }}>
        <Link to="/labor/work-selection">
          <Button type="primary" style={{ backgroundColor: '#D9534F', borderColor: '#D9534F' }}>
            Search for More Work
          </Button>
        </Link>
      </Row>
    </div>
  );
};

export default MainPage;
