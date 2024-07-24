import React, { useState, useEffect } from 'react';
import { List, Button, Typography, Card } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { getJobById } from '../../calls/jobCalls';

const { Title } = Typography;

const OngoingPage = () => {
  const [ongoingWork, setOngoingWork] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOngoingWork();
  }, []);

  const fetchOngoingWork = () => {
    // Simulated data fetch
    setOngoingWork([]);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff1f0', padding: '20px' }}>
      <Title level={1} style={{ color: '#ff4d4f', marginBottom: '20px', textAlign: 'center' }}>
        Ongoing Projects
      </Title>
      <Card bordered={false} style={{ width: '100%', maxWidth: '800px', margin: '0 auto', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <List
          bordered
          dataSource={ongoingWork}
          renderItem={work => (
            <List.Item style={{ borderBottom: '1px solid #ffccc7', padding: '16px 24px' }}>
              <Link 
                to={`/labor/work-status/${work.id}`} 
                style={{ color: '#ff4d4f', fontSize: '18px', fontWeight: '500', textDecoration: 'none' }}
              >
                {work.title} - <span style={{ color: '#595959' }}>{work.date}</span>
              </Link>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default OngoingPage;
