import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Select, Button, Typography } from 'antd';
import { createJob } from '../../calls/jobCalls';
const { Title } = Typography;
const { Option } = Select;

const AddProjectStep1 = () => {
  const [role, updateRole] = useState('');
  const navigate = useNavigate();

  const handleRoleChange = (value) => {
    updateRole(value);
  };

  const handleProceed = () => {
    if (role) {
      const Job = 
      navigate('/add-project-step2');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'linear-gradient(to right, #374151, #1f2937)', padding: '16px' }}>
      <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '24px' }}>Select Role</Title>
        <Form layout="vertical">
          <Form.Item label="Choose your role:" required>
            <Select
              value={role}
              onChange={handleRoleChange}
              placeholder="Select a role"
              style={{ width: '100%', marginBottom: '24px' }}
            >
              <Option value="Construction contractor">Construction contractor</Option>
              <Option value="Farmer">Farmer</Option>
              <Option value="Live Stock owner">Live Stock owner</Option>
              <Option value="Diary Farming">Diary Farming</Option>
              <Option value="Aqua Culture">Aqua Culture</Option>
              <Option value="Residential and Commercial">Residential and Commercial</Option>
              <Option value="Manufacturing industry">Manufacturing industry</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              onClick={handleProceed}
              disabled={!role}
              style={{ width: '100%' }}
            >
              Proceed to Next
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddProjectStep1;
